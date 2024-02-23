import { Form, Button, Field, Toast } from 'react-vant'
import { useState, useEffect } from 'react'
import { t } from '@lingui/macro'
import UserPopUp from '@/features/user/components/popup'
import UserPopupContent from '@/features/user/components/popup/content'
import UserCountDown from '@/features/user/components/count-down'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { link } from '@/helper/link'
import NavBar from '@/components/navbar'
import {
  UserValidateMethodEnum,
  UserSendValidateCodeBusinessTypeEnum,
  UserEnabledStateTypeEnum,
  UserVerifyTypeEnum,
  UserUpsAndDownsColorEnum,
} from '@/constants/user'
import { SafetyVerificationRules } from '@/features/user/utils/validate'
import {
  postMemberSafeVerifyEmailSend,
  postMemberSafeVerifyPhoneSend,
  postMemberSafeVerifyEmailCheck,
  postMemberSafeVerifyPhoneCheck,
  getMemberSafeVerifyGoogleCheck,
  postMemberQueryWorkOrderStatus,
  postMemberLoginGenerateUserInfomation,
} from '@/apis/user'
import { UserInformationDesensitization } from '@/features/user/utils/common'
import { setToken } from '@/helper/auth'
import { useUserStore } from '@/store/user'
import { usePageContext } from '@/hooks/use-page-context'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserSafetyVerification() {
  const [verifyMethod, setVerifyMethod] = useState<string>(UserValidateMethodEnum.email)
  const [workOrderPopUp, setWorkOrderPopUp] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [fullScreenLoading, setFullScreenLoading] = useState<boolean>(false)
  // const [disabled, setDisabled] = useState<boolean>(true)

  const store = useUserStore()
  const [form] = Form.useForm()
  const pageContext = usePageContext()

  const searchOriginal = pageContext.urlParsed.searchOriginal
  const equalIndex = searchOriginal?.indexOf('=') || 0
  const redirect = searchOriginal?.substring(equalIndex + 1)

  const info = store.userTransitionDatas
  const userInfo = info.userInfo

  const rules = SafetyVerificationRules()

  const verifyInputShow =
    userInfo?.isOpenGoogleVerify === UserEnabledStateTypeEnum.enable
      ? UserValidateMethodEnum.validator
      : userInfo?.isOpenEmailVerify === UserEnabledStateTypeEnum.enable
      ? UserValidateMethodEnum.email
      : UserValidateMethodEnum.phone

  useEffect(() => {
    setVerifyMethod(verifyInputShow)
  }, [])

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  const handleToSecurityItem = async () => {
    const options = {
      type: info.accountType,
      account:
        info.accountType === UserVerifyTypeEnum.phone
          ? info.mobile
          : info.accountType === UserVerifyTypeEnum.email
          ? info.email
          : userInfo?.uid,
      mobileCountryCode: info.accountType === UserVerifyTypeEnum.phone ? info.mobileCountryCode : undefined,
    }
    const res = await postMemberQueryWorkOrderStatus(options)
    res.isOk && res.data?.isBeginManualVerifyProcess ? setWorkOrderPopUp(true) : link('/safety-items')
  }

  const switchVerifyMethod = (type: string) => {
    setVerifyMethod(type)
  }

  const handleSendEmailValidateCode = async () => {
    const res = await postMemberSafeVerifyEmailSend({
      type: UserSendValidateCodeBusinessTypeEnum.login,
      email: userInfo?.email as string,
    })

    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleSendPhoneValidateCode = async () => {
    const res = await postMemberSafeVerifyPhoneSend({
      type: UserSendValidateCodeBusinessTypeEnum.login,
      mobileCountryCode: userInfo?.mobileCountryCd as string,
      mobile: userInfo?.mobileNumber as string,
    })

    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleOnClose = () => {
    form.resetFields()
    window.history.back()
  }

  const handleLoginSuccess = data => {
    if (data.token) {
      setToken(data)
      store.setUserInfo({ ...data?.userInfo, ...data?.usrMemberSettingsVO })
      store.setMemberBaseColor(data?.usrMemberSettingsVO?.marketSetting || UserUpsAndDownsColorEnum.greenUpRedDown)
      store.setLogin(true)
      store.removeUserTransitionDatas()
      redirect ? link(redirect) : link('/')
    }
  }

  const handleLogin = async () => {
    setLoading(true)

    const options = {
      account:
        info.accountType === UserVerifyTypeEnum.phone
          ? info.mobile
          : info.accountType === UserVerifyTypeEnum.email
          ? info.email
          : userInfo?.uid,
      accountType: info.accountType,
      mobileCountryCode: info.mobileCountryCode,
    }

    setFullScreenLoading(true)
    const res = await postMemberLoginGenerateUserInfomation(options)
    if (res.isOk) {
      handleLoginSuccess(res.data)
      return
    }

    setFullScreenLoading(false)
    setLoading(false)
  }

  const handleValidateCode = async values => {
    switch (verifyMethod) {
      case UserValidateMethodEnum.email:
        const emailRes = await postMemberSafeVerifyEmailCheck({ ...values, email: userInfo?.email })
        if (emailRes.isOk) {
          emailRes.data?.isSuccess && handleLogin()
        }

        setLoading(false)
        break
      case UserValidateMethodEnum.validator:
        values.uid = userInfo?.uid

        const googleRes = await getMemberSafeVerifyGoogleCheck(values)
        if (googleRes.isOk) {
          googleRes.data?.isSuccess && handleLogin()
        }

        setLoading(false)
        break
      case UserValidateMethodEnum.phone:
        values.mobileCountryCode = userInfo?.mobileCountryCd
        values.mobile = userInfo?.mobileNumber

        const phoneRes = await postMemberSafeVerifyPhoneCheck(values)
        if (phoneRes.isOk) {
          phoneRes.data?.isSuccess && handleLogin()
        }

        setLoading(false)
        break
      default:
        break
    }
  }

  const onFinish = async values => {
    setLoading(true)
    values.type = UserSendValidateCodeBusinessTypeEnum.login

    handleValidateCode(values)
  }

  return (
    <section className={`safety-verification ${styles.scoped}`}>
      <NavBar title="" onClickLeft={handleOnClose} />

      <div className="safety-verification-wrap user-validate">
        <div className="title">
          <label>{t`user.safety_verification_01`}</label>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          validateTrigger="onFinish"
          // onChange={handleValidateChange}
        >
          {userInfo?.isOpenEmailVerify === UserEnabledStateTypeEnum.enable &&
            verifyMethod === UserValidateMethodEnum.email && (
              <>
                <FormItem
                  name="verifyCode"
                  rules={[rules.emailCode]}
                  label={t`user.field.reuse_03`}
                  validateTrigger="onFinish"
                >
                  <Field
                    type="number"
                    maxLength={6}
                    suffix={<UserCountDown onSendValidateCode={handleSendEmailValidateCode} />}
                    placeholder={t`user.field.reuse_20`}
                  />
                </FormItem>
                <div className="tips">
                  <label>
                    {t({
                      id: 'user.safety_verification_03',
                      values: {
                        0: `${UserInformationDesensitization(userInfo?.email)}`,
                      },
                    })}
                  </label>
                </div>
              </>
            )}

          {userInfo?.isOpenGoogleVerify === UserEnabledStateTypeEnum.enable &&
            verifyMethod === UserValidateMethodEnum.validator && (
              <>
                <FormItem
                  name="verifyCode"
                  rules={[rules.googleKey]}
                  label={t`user.field.reuse_15`}
                  validateTrigger="onFinish"
                >
                  <Field type="number" maxLength={6} placeholder={t`user.safety_verification_05`} />
                </FormItem>
                <div className="tips">
                  <label>{t`user.safety_verification_06`}</label>
                </div>
              </>
            )}

          {userInfo?.isOpenPhoneVerify === UserEnabledStateTypeEnum.enable &&
            verifyMethod === UserValidateMethodEnum.phone && (
              <>
                <FormItem
                  name="verifyCode"
                  rules={[rules.phoneCode]}
                  label={t`user.field.reuse_14`}
                  validateTrigger="onFinish"
                >
                  <Field
                    type="number"
                    maxLength={6}
                    suffix={<UserCountDown onSendValidateCode={handleSendPhoneValidateCode} />}
                    placeholder={t`user.field.reuse_21`}
                  />
                </FormItem>
                <div className="tips">
                  <label>
                    {t({
                      id: 'user.safety_verification_03',
                      values: {
                        0: `+${userInfo?.mobileCountryCd} ${UserInformationDesensitization(userInfo?.mobileNumber)}`,
                      },
                    })}
                  </label>
                </div>
              </>
            )}

          <FormItem>
            <Button
              loading={loading}
              type="primary"
              size="large"
              nativeType="submit"
              // disabled={disabled || !verifyCode}
            >
              {t`user.field.reuse_02`}
            </Button>
          </FormItem>
        </Form>

        <div className="verify-method-wrap">
          {userInfo?.isOpenEmailVerify === UserEnabledStateTypeEnum.enable &&
            verifyMethod !== UserValidateMethodEnum.email && (
              <div className="verify-method">
                <label
                  onClick={() => switchVerifyMethod(UserValidateMethodEnum.email)}
                >{t`user.safety_verification_09`}</label>
              </div>
            )}

          {userInfo?.isOpenGoogleVerify === UserEnabledStateTypeEnum.enable &&
            verifyMethod !== UserValidateMethodEnum.validator && (
              <div className="verify-method">
                <label className="verify-method" onClick={() => switchVerifyMethod(UserValidateMethodEnum.validator)}>
                  {t`user.safety_verification_10`}
                </label>
              </div>
            )}

          {userInfo?.isOpenPhoneVerify === UserEnabledStateTypeEnum.enable &&
            verifyMethod !== UserValidateMethodEnum.phone && (
              <div className="verify-method">
                <label className="verify-method" onClick={() => switchVerifyMethod(UserValidateMethodEnum.phone)}>
                  {t`user.safety_verification_11`}
                </label>
              </div>
            )}

          <div className="verify-method">
            <span onClick={handleToSecurityItem}>
              <label className="retrieve">{t`user.safety_verification_12`}</label>
            </span>
          </div>
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

        <FullScreenLoading isShow={fullScreenLoading} />
      </div>
    </section>
  )
}
