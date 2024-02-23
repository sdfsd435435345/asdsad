import { useState } from 'react'
import { Form, Button, Field, Toast } from 'react-vant'
import { useUpdateEffect } from 'ahooks'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import Link from '@/components/link'
import UserPopUp from '@/features/user/components/popup'
import UserPasswordValidateTips from '@/features/user/common/password-validate'
import UserSuccessContent from '@/features/user/components/popup/success-content'
import UserTipsInfo from '@/features/user/common/tips-info'
import UserCountDown from '@/features/user/components/count-down'
import UserPopupContent from '@/features/user/components/popup/content'
import NavBar from '@/components/navbar'
import { UserSendValidateCodeBusinessTypeEnum, UserVerifyTypeEnum, UserAgreementEnum } from '@/constants/user'
import { RetrieveRestPasswordRules } from '@/features/user/utils/validate'
import { useUserStore } from '@/store/user'
import { postMemberSafeVerifyEmailSend, postMemberSafeVerifyPhoneSend, postMemberSafeResetPassword } from '@/apis/user'
import { UserInformationDesensitization, FormValuesTrim } from '@/features/user/utils/common'
import Icon from '@/components/icon'
import { useLayoutStore } from '@/store/layout'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserRetrieveResetPassword() {
  const [successPopup, setSuccessPopup] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [workOrderPopUp, setWorkOrderPopUp] = useState<boolean>(false)
  const [passwordValidate, setPasswordValidate] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  // const [disabled, setDisabled] = useState<boolean>(true)
  const [passwordShow, setPasswordShow] = useState({
    newPasswordShow: false,
    confirmPasswordShow: false,
  })

  const footerStore = useLayoutStore()
  const store = useUserStore()
  const [form] = Form.useForm()
  const newPassword = Form.useWatch('newPassword', form)
  const confirmPassword = Form.useWatch('confirmPassword', form)
  // const verifyCode = Form.useWatch('verifyCode', form)

  const info = store.userTransitionDatas

  const data = {
    type: UserSendValidateCodeBusinessTypeEnum.resetPassword,
    email: info.email || '',
    mobileCountryCode: info.mobileCountryCode || '',
    mobile: info.mobileNumber || '',
    uid: info.uid || '',
  }

  const passwordRules = RetrieveRestPasswordRules(newPassword)

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  useUpdateEffect(() => {
    newPassword && confirmPassword && form.validateFields(['newPassword', 'confirmPassword'])
  }, [newPassword, confirmPassword])

  const handleClearPassword = (key: string) => {
    form.setFieldValue(key, '')
    key === 'newPassword' && setPassword('')
  }

  const handleSendEmailValidateCode = async () => {
    const res = await postMemberSafeVerifyEmailSend(data)

    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleSendPhoneValidateCode = async () => {
    const res = await postMemberSafeVerifyPhoneSend(data)

    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleOnSuccess = async () => {
    setSuccessPopup(false)
    await store.removeUserTransitionDatas()
    link('/login')
  }

  const onFinish = async values => {
    if (!passwordValidate) {
      Toast.info(t`features_user_register_flow_index_510097`)
      return
    }

    setLoading(true)

    switch (info.accountType) {
      case UserVerifyTypeEnum.email:
        values.account = data?.email
        values.safeVerifyType = UserVerifyTypeEnum.email

        const emailRes = await postMemberSafeResetPassword(values)
        emailRes.isOk && emailRes.data?.isSuccess && setSuccessPopup(true)
        setLoading(false)
        break
      case UserVerifyTypeEnum.phone:
        values.mobileCountryCode = data.mobileCountryCode
        values.account = data?.mobile
        values.safeVerifyType = UserVerifyTypeEnum.phone

        const mobileRes = await postMemberSafeResetPassword(values)
        mobileRes.isOk && mobileRes.data?.isSuccess && setSuccessPopup(true)
        setLoading(false)
        break

      case UserVerifyTypeEnum.uid:
        values.account = data?.uid
        values.safeVerifyType = UserVerifyTypeEnum.uid

        const uidRes = await postMemberSafeResetPassword(values)
        uidRes.isOk && uidRes.data?.isSuccess && setSuccessPopup(true)
        setLoading(false)
        break
      default:
        break
    }
  }

  return (
    <section className={`retrieve ${styles.scoped}`}>
      <NavBar title="" right={<Icon name="close" hasTheme />} onClickRight={() => link('/')} />

      <UserTipsInfo slotContent={<p>{t`user.field.reuse_30`}</p>} />
      <div className="retrieve-wrap user-validate">
        <div className="title">
          <label>
            {t`user.field.reuse_24`}-
            {info.accountType === UserVerifyTypeEnum.email
              ? t`user.field.reuse_13`
              : t`features_user_register_verification_index_510234`}
          </label>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          validateTrigger="onFinish"
          // onChange={handleValidateChange}
        >
          <FormItem
            name="newPassword"
            rules={[passwordRules.password]}
            label={t`features_user_retrieve_reset_password_index_5101102`}
            validateTrigger="onFinish"
          >
            <Field
              formatter={FormValuesTrim}
              onChange={setPassword}
              maxLength={16}
              placeholder={t`user.field.reuse_19`}
              type={passwordShow.newPasswordShow ? 'text' : 'password'}
              rightIcon={
                <>
                  {newPassword && (
                    <Icon name="del_input_box" hasTheme onClick={() => handleClearPassword('newPassword')} />
                  )}

                  <Icon
                    name={passwordShow.newPasswordShow ? 'eyes_open' : 'eyes_close'}
                    hasTheme
                    onClick={() =>
                      setPasswordShow({
                        ...passwordShow,
                        newPasswordShow: !passwordShow.newPasswordShow,
                      })
                    }
                  />
                </>
              }
            />
          </FormItem>

          <UserPasswordValidateTips password={FormValuesTrim(password)} validate={setPasswordValidate} />

          <FormItem
            name="confirmPassword"
            rules={[passwordRules.confirmPassword]}
            label={t`user.field.reuse_12`}
            validateTrigger="onFinish"
          >
            <Field
              formatter={FormValuesTrim}
              placeholder={t`user.retrieve.reset_password_03`}
              maxLength={16}
              type={passwordShow.confirmPasswordShow ? 'text' : 'password'}
              rightIcon={
                <>
                  {confirmPassword && (
                    <Icon name="del_input_box" hasTheme onClick={() => handleClearPassword('confirmPassword')} />
                  )}

                  <Icon
                    name={passwordShow.confirmPasswordShow ? 'eyes_open' : 'eyes_close'}
                    hasTheme
                    onClick={() =>
                      setPasswordShow({
                        ...passwordShow,
                        confirmPasswordShow: !passwordShow.confirmPasswordShow,
                      })
                    }
                  />
                </>
              }
            />
          </FormItem>

          {info.accountType === UserVerifyTypeEnum.email && (
            <>
              <FormItem
                name="verifyCode"
                rules={[passwordRules.emailCode]}
                label={t`user.field.reuse_03`}
                validateTrigger="onFinish"
              >
                <Field
                  type="number"
                  maxLength={6}
                  placeholder={t`user.field.reuse_20`}
                  suffix={
                    <UserCountDown
                      buttonText={t`user.field.reuse_31`}
                      onSendValidateCode={handleSendEmailValidateCode}
                    />
                  }
                />
              </FormItem>

              <div className="validate">
                <label>
                  {t({
                    id: 'user.retrieve.reset_password_04',
                    values: {
                      0: `${UserInformationDesensitization(info?.email)}`,
                    },
                  })}
                </label>
              </div>
            </>
          )}

          {info.accountType === UserVerifyTypeEnum.phone && (
            <>
              <FormItem
                name="verifyCode"
                rules={[passwordRules.phoneCode]}
                label={t`user.field.reuse_04`}
                validateTrigger="onFinish"
              >
                <Field
                  type="number"
                  maxLength={6}
                  placeholder={t`user.field.reuse_21`}
                  suffix={
                    <UserCountDown
                      buttonText={t`user.field.reuse_31`}
                      onSendValidateCode={handleSendPhoneValidateCode}
                    />
                  }
                />
              </FormItem>

              <div className="validate">
                <label>
                  {t({
                    id: 'user.retrieve.validate_03',
                    values: {
                      0: `+${info.mobileCountryCode} ${UserInformationDesensitization(info.mobileNumber)}`,
                    },
                  })}
                </label>
              </div>
            </>
          )}

          <div className="security">
            <Link
              href={footerStore.columnsDataByCd?.[UserAgreementEnum.unreceiveVerificationCode]?.webUrl}
              className="customize-link-style"
            >{t`user.field.reuse_22`}</Link>
          </div>

          <FormItem>
            <Button
              loading={loading}
              type="primary"
              nativeType="submit"
              size="large"
              // disabled={disabled || !newPassword || !confirmPassword || !verifyCode}
            >
              {t`user.field.reuse_24`}
            </Button>
          </FormItem>
        </Form>

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
          visible={successPopup}
          onClose={handleOnSuccess}
          slotContent={
            <UserSuccessContent slotContent={<p>{t`user.retrieve.reset_success_01`}</p>} onLink={handleOnSuccess} />
          }
        />
      </div>
    </section>
  )
}
