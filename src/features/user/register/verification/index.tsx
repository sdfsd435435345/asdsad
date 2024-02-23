import { useMemo, useState } from 'react'
import { Form, Button, Field, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import UserCountDown from '@/features/user/components/count-down'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { UserValidateMethodEnum, UserSendValidateCodeBusinessTypeEnum, UserAgreementEnum } from '@/constants/user'
import { usePageContext } from '@/hooks/use-page-context'
import { RegisterVerificationRules } from '@/features/user/utils/validate'
import NavBar from '@/components/navbar'
import Icon from '@/components/icon'
import {
  postMemberSafeVerifyEmailSend,
  postMemberSafeVerifyPhoneSend,
  postMemberSafeVerifyEmailCheck,
  postMemberSafeVerifyPhoneCheck,
  postMemberRegisterEmail,
  postMemberRegisterPhone,
} from '@/apis/user'
import { setToken } from '@/helper/auth'
import { UserInformationDesensitization } from '@/features/user/utils/common'
import { useUserStore } from '@/store/user'
import { useLayoutStore } from '@/store/layout'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserRegisterVerification() {
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false)
  const [fullScreenLoading, setFullScreenLoading] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  // const [disabled, setDisabled] = useState<boolean>(true)

  const { headerData } = useLayoutStore()
  const footerStore = useLayoutStore()
  const pageContext = usePageContext()
  const store = useUserStore()
  const [form] = Form.useForm()
  // const verifyCode = Form.useWatch('verifyCode', form)

  const { type } = pageContext.urlParsed.search
  const info = store.userTransitionDatas

  const rules = RegisterVerificationRules()

  const data = useMemo(() => {
    return {
      type: UserSendValidateCodeBusinessTypeEnum.register,
      email: info.email || '',
      mobileCountryCode: info.mobileCountryCode || '',
      mobile: info.mobileNumber || '',
      mobileNumber: info.mobileNumber || '',
      regCountry: info.regCountry || '',
      loginPassword: info.loginPassword || '',
      invite: info.invite || '',
    }
  }, [])

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  const handleSendEmailValidateCode = async () => {
    const res = await postMemberSafeVerifyEmailSend({ ...data })
    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleSendPhoneValidateCode = async () => {
    const res = await postMemberSafeVerifyPhoneSend({ ...data })
    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleRegisterSuccess = res => {
    setFullScreenLoading(false)

    if (res.isOk && res.data?.isSuccess) {
      setToken(res.data)
      store.setUserInfo({ ...res.data?.userInfo, ...res.data?.usrMemberSettingsVO })
      store.setLogin(true)
      store.removeUserTransitionDatas()
      setRegisterSuccess(true)
    }
  }

  const onFinish = async values => {
    values = { ...data, ...values }

    setLoading(true)
    switch (type) {
      case UserValidateMethodEnum.email:
        const emailCheckRes = await postMemberSafeVerifyEmailCheck(values)
        if (emailCheckRes.isOk && emailCheckRes.data?.isSuccess) {
          const emailRegisterRes = await postMemberRegisterEmail(values)
          setFullScreenLoading(true)
          handleRegisterSuccess(emailRegisterRes)
        }
        setLoading(false)
        break
      case UserValidateMethodEnum.phone:
        const phoneCheckRes = await postMemberSafeVerifyPhoneCheck(values)
        if (phoneCheckRes.isOk && phoneCheckRes.data?.isSuccess) {
          const phoneRegisterRes = await postMemberRegisterPhone(values)
          setFullScreenLoading(true)
          handleRegisterSuccess(phoneRegisterRes)
        }
        setLoading(false)
        break
      default:
        break
    }
  }

  return (
    <section className={`register ${styles.scoped}`}>
      <NavBar
        title={
          type === UserValidateMethodEnum.email
            ? t`user.field.reuse_13`
            : t`features_user_register_verification_index_510234`
        }
        right={<Icon name="close" hasTheme />}
        onClickRight={() => link('/')}
      />

      <div className="register-wrap user-validate">
        {!registerSuccess && (
          <>
            <div className="tips">
              {type === UserValidateMethodEnum.email && (
                <label>
                  {t`user.register.verification_01`} {UserInformationDesensitization(data?.email)}{' '}
                  {t`user.register.verification_02`}
                </label>
              )}
              {type === UserValidateMethodEnum.phone && (
                <label>
                  {t`user.register.verification_03`} {UserInformationDesensitization(data?.mobile)}{' '}
                  {t`user.register.verification_04`}
                </label>
              )}
            </div>

            <Form
              layout="vertical"
              form={form}
              onFinish={onFinish}
              autoComplete="off"
              validateTrigger="onFinish"
              // onChange={handleValidateChange}
            >
              {type === UserValidateMethodEnum.email && (
                <FormItem
                  name="verifyCode"
                  rules={[rules.emailCode]}
                  label={t`user.field.reuse_03`}
                  validateTrigger="onFinish"
                >
                  <Field
                    type="number"
                    maxLength={6}
                    placeholder={t`user.field.reuse_20`}
                    suffix={<UserCountDown onSendValidateCode={handleSendEmailValidateCode} />}
                  />
                </FormItem>
              )}

              {type === UserValidateMethodEnum.phone && (
                <FormItem
                  name="verifyCode"
                  rules={[rules.phoneCode]}
                  label={t`user.field.reuse_14`}
                  validateTrigger="onFinish"
                >
                  <Field
                    type="number"
                    maxLength={6}
                    placeholder={t`user.field.reuse_21`}
                    suffix={<UserCountDown onSendValidateCode={handleSendPhoneValidateCode} />}
                  />
                </FormItem>
              )}

              <div className="not-received-validate">
                <label
                  onClick={() =>
                    link(footerStore.columnsDataByCd?.[UserAgreementEnum.unreceiveVerificationCode]?.webUrl)
                  }
                >{t`user.field.reuse_22`}</label>
              </div>

              <FormItem>
                <Button
                  loading={loading}
                  size="large"
                  type="primary"
                  nativeType="submit"
                  // disabled={disabled || !verifyCode}
                >
                  {t`user.field.reuse_02`}
                </Button>
              </FormItem>
            </Form>
          </>
        )}

        {registerSuccess && (
          <div className="success-info">
            <div className="success-icon">
              <Icon name="register_success" hasTheme isRemoteUrl />
            </div>
            <div className="success-title">
              <label>{t`user.register.verification_05`}</label>
            </div>
            <div className="success-subtitle">
              <label>
                {t({
                  id: 'features_user_register_verification_index_5101293',
                  values: { 0: headerData?.businessName },
                })}
              </label>
            </div>
            <Button type="primary" onClick={() => link('/')}>
              {t({
                id: 'features_user_register_verification_index_5101294',
                values: { 0: headerData?.businessName },
              })}
            </Button>
          </div>
        )}

        <FullScreenLoading isShow={fullScreenLoading} />
      </div>
    </section>
  )
}
