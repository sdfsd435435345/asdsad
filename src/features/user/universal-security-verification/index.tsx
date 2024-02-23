import { useState, useEffect } from 'react'
import { Form, Button, Field, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
// import Link from '@/components/link'
import UserPopUp from '@/features/user/components/popup'
import UserPopupContent from '@/features/user/components/popup/content'
import UserCountDown from '@/features/user/components/count-down'
import { UniversalSecurityVerificationRules } from '@/features/user/utils/validate'
import {
  postMemberSafeVerifyEmailSend,
  postMemberSafeVerifyPhoneSend,
  postMemberUniversalSecurityVerification,
  postMemberQueryWorkOrderStatus,
  postMemberSafeVerifyWithdrawalEmailSend,
} from '@/apis/user'
import { UserEnabledStateTypeEnum, UserSendValidateCodeBusinessTypeEnum, UserVerifyTypeEnum } from '@/constants/user'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import { UserInformationDesensitization } from '@/features/user/utils/common'
import Icon from '@/components/icon'
import { ISafeVerifySendWithdrawalDataProps } from '@/typings/api/assets/assets'
import { requestWithLoading } from '@/helper/order'
import styles from './index.module.css'

const FormItem = Form.Item
interface UniversalSecurityVerificationProps {
  /** 是否显示弹窗 */
  isShow: boolean
  /** 是否需要两项验证弹窗 */
  isVerificationTips?: boolean
  /** 业务类型 */
  businessType?: number
  /** 提币获取验证码入参 */
  withdrawalData?: ISafeVerifySendWithdrawalDataProps
  /** 关闭弹窗 */
  onClose?(close: boolean): void
  /** 验证通过函数 */
  onSuccess(isTrue: boolean): void
  /** 验证失败函数 */
  onError?(): void
}

export default function UniversalSecurityVerification({
  isShow = false,
  isVerificationTips = false,
  businessType,
  withdrawalData,
  onClose,
  onSuccess,
  onError,
}: UniversalSecurityVerificationProps) {
  const [workOrderPopUp, setWorkOrderPopUp] = useState<boolean>(false)
  // const [disabled, setDisabled] = useState<boolean>(true)

  const [form] = Form.useForm()

  const { getBaseInfo, baseInfoResult, turnOnVerification } = usePersonalCenterStore()

  const rules = UniversalSecurityVerificationRules()

  useEffect(() => {
    if (isShow) getBaseInfo()
  }, [isShow])

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  const handleToSecurityItem = async () => {
    const options = {
      type: baseInfoResult.email ? UserVerifyTypeEnum.email : UserVerifyTypeEnum.phone,
      account: baseInfoResult.email || baseInfoResult.mobileNumber,
      mobileCountryCode: baseInfoResult.mobileNumber ? baseInfoResult.mobileCountryCd : undefined,
    }
    const res = await postMemberQueryWorkOrderStatus(options)
    res.isOk && res.data?.isBeginManualVerifyProcess ? setWorkOrderPopUp(true) : link('/safety-items')
  }

  const handleSendEmailValidateCode = async () => {
    const res =
      businessType === UserSendValidateCodeBusinessTypeEnum.withdraw
        ? await postMemberSafeVerifyWithdrawalEmailSend({
            type: businessType! as unknown as number,
            email: baseInfoResult.email,
            address: withdrawalData?.address || '',
            quantity: withdrawalData?.quantity || 0,
            currencyCode: withdrawalData?.currencyCode || '',
            memo: withdrawalData?.memo || '',
          })
        : await postMemberSafeVerifyEmailSend({
            type: businessType!,
            email: baseInfoResult.email,
          })

    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleSendPhoneValidateCode = async () => {
    const res = await postMemberSafeVerifyPhoneSend({
      type: businessType!,
      mobileCountryCode: baseInfoResult.mobileCountryCd,
      mobile: baseInfoResult.mobileNumber,
    })

    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleClose = () => {
    form.resetFields()
    onClose && onClose(false)
  }

  const onContinue = () => {
    onClose && onClose(false)
    link('/personal-center/account-security')
  }

  const onFinish = async values => {
    const options = {
      operateType: businessType,
      ...values,
    }
    const res = await postMemberUniversalSecurityVerification(options)
    if (res.isOk) {
      onSuccess(true)
      handleClose()
      return
    }

    onSuccess(false)
    onError && onError()
  }

  return (
    <>
      {isShow && (
        <section className={`universal-security-verification ${styles.scoped}`}>
          <div className="universal-security-verification-wrap user-validate">
            <div className="header">
              <span className="-translate-x-1/2 absolute left-1/2">{t`features_user_universal_security_verification_index_n7tsftilno`}</span>
              <div className="close" onClick={handleClose}>
                <Icon name="close" hasTheme />
              </div>
            </div>

            <Form
              layout="vertical"
              form={form}
              onFinish={values => requestWithLoading(onFinish(values), 0)}
              autoComplete="off"
              validateTrigger="onFinish"
              // onChange={handleValidateChange}
            >
              {/* {isTrade && baseInfoResult.setTradePwdInd === UserEnabledStateTypeEnum.enable && (
                <FormItem
                  name="fundPassword"
                  rules={[rules.fundPassword]}
                  label={t`features_user_universal_security_verification_index_620`}
                >
                  <Field
                    placeholder={t`features_user_personal_center_account_security_transaction_password_index_607`}
                  />
                </FormItem>
              )} */}

              {baseInfoResult.isOpenEmailVerify === UserEnabledStateTypeEnum.enable && (
                <FormItem
                  name="emailVerifyCode"
                  rules={[rules.emailCode]}
                  label={t({
                    id: 'user.universal_security_verification_01',
                    values: {
                      0: `${UserInformationDesensitization(baseInfoResult.email)}`,
                    },
                  })}
                  validateTrigger="onFinish"
                >
                  <Field
                    type="number"
                    maxLength={6}
                    placeholder={t`user.field.reuse_03`}
                    suffix={isShow && <UserCountDown onSendValidateCode={handleSendEmailValidateCode} />}
                  />
                </FormItem>
              )}

              {baseInfoResult.isOpenPhoneVerify === UserEnabledStateTypeEnum.enable && (
                <FormItem
                  name="mobileVerifyCode"
                  rules={[rules.phoneCode]}
                  label={t({
                    id: 'user.universal_security_verification_03',
                    values: {
                      0: `+${baseInfoResult?.mobileCountryCd} ${UserInformationDesensitization(
                        baseInfoResult.mobileNumber
                      )}`,
                    },
                  })}
                  validateTrigger="onFinish"
                >
                  <Field
                    type="number"
                    maxLength={6}
                    placeholder={t`user.field.reuse_04`}
                    suffix={isShow && <UserCountDown onSendValidateCode={handleSendPhoneValidateCode} />}
                  />
                </FormItem>
              )}

              {baseInfoResult.isOpenGoogleVerify === UserEnabledStateTypeEnum.enable && (
                <FormItem
                  name="googleVerifyCode"
                  rules={[rules.googleKey]}
                  label={t`user.universal_security_verification_05`}
                  validateTrigger="onFinish"
                >
                  <Field type="number" maxLength={6} placeholder={t`user.field.reuse_05`} />
                </FormItem>
              )}

              <FormItem>
                <Button
                  type="primary"
                  size="large"
                  nativeType="submit"
                  // disabled={disabled}
                >
                  {t`user.field.reuse_02`}
                </Button>
              </FormItem>
            </Form>

            <div className="safety-items" onClick={handleToSecurityItem}>
              <span className="customize-link-style">{t`user.universal_security_verification_06`}</span>
            </div>

            <UserPopUp
              visible={workOrderPopUp}
              onClose={() => {
                setWorkOrderPopUp(false)
              }}
              slotContent={
                <UserPopupContent
                  content={<p>{t`user.safety_verification_13`}</p>}
                  rightButtonText={t`user.safety_verification_14`}
                  onClose={setWorkOrderPopUp}
                  onContinue={() => setWorkOrderPopUp(false)}
                />
              }
            />

            <UserPopUp
              visible={isShow && isVerificationTips && turnOnVerification}
              onClose={() => {
                onClose && onClose(false)
              }}
              slotContent={
                <UserPopupContent
                  content={
                    <>
                      <p>{t`user.universal_security_verification_07`}</p>
                      <p>{t`user.universal_security_verification_09`}</p>
                      <p>{t`user.universal_security_verification_10`}</p>
                      <p>{t`user.universal_security_verification_11`}</p>
                    </>
                  }
                  rightButtonText={t`user.universal_security_verification_08`}
                  onClose={() => onClose && onClose(false)}
                  onContinue={onContinue}
                />
              }
            />
          </div>
        </section>
      )}
    </>
  )
}
