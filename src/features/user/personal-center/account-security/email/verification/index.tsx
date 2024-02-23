import { useState } from 'react'
import { Form, Field, Button, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import UserTipsInfo from '@/features/user/common/tips-info'
import UserCountDown from '@/features/user/components/count-down'
import UserPopUp from '@/features/user/components/popup'
import UserSuccessContent from '@/features/user/components/popup/success-content'
import { usePageContext } from '@/hooks/use-page-context'
import { UserAccountSettingsTypeEnum, UserSendValidateCodeBusinessTypeEnum } from '@/constants/user'
import { PersonalCenterEmailRules } from '@/features/user/utils/validate'
import { postMemberSafeEmailBind, postMemberSafeVerifyEmailSend, postMemberSafeEmailUpdate } from '@/apis/user'
import { useUserStore } from '@/store/user'
import NavBar from '@/components/navbar'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserPersonalCenterEmailVerification() {
  const [visible, setVisible] = useState<boolean>(false)
  // const [disabled, setDisabled] = useState<boolean>(true)

  const pageContext = usePageContext()
  const [form] = Form.useForm()
  const store = useUserStore()
  const email = Form.useWatch('email', form)
  // const verifyCode = Form.useWatch('verifyCode', form)

  const rules = PersonalCenterEmailRules()

  const mode = pageContext.urlParsed.search?.type || ''

  const type =
    mode === UserAccountSettingsTypeEnum.modify
      ? UserSendValidateCodeBusinessTypeEnum.modifyNewEmail
      : UserSendValidateCodeBusinessTypeEnum.bindEmail

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  const handleSendEmailValidateCode = async () => {
    if (!email) {
      Toast.info(t`user.retrieve.validate_01`)
      return false
    }

    const res = await postMemberSafeVerifyEmailSend({ type, email })
    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const onFinish = async values => {
    values.operateType = type

    if (mode === UserAccountSettingsTypeEnum.modify) {
      const res = await postMemberSafeEmailUpdate(values)
      res.isOk && res.data?.isSuccess && setVisible(true)
    } else {
      const res = await postMemberSafeEmailBind(values)
      if (res.isOk && res.data?.isSuccess) {
        Toast.info(t`user.field.reuse_37`)
        window.history.back()
      }
    }
  }

  const handleModifySuccess = () => {
    store.clearUserCacheData()
    Toast.success(t`features_user_personal_center_account_security_modify_password_index_510238`)
    setVisible(false)
    link('/login')
  }

  return (
    <div className={`email-verification ${styles.scoped}`}>
      <NavBar
        title={
          mode === UserAccountSettingsTypeEnum.bind
            ? t`features_user_personal_center_account_security_email_verification_index_588`
            : t`features_user_personal_center_account_security_email_verification_index_589`
        }
      />

      <UserTipsInfo
        slotContent={
          <>
            {mode === UserAccountSettingsTypeEnum.bind && <p>{t`user.account_security.email.verification_01`}</p>}
            {mode === UserAccountSettingsTypeEnum.modify && (
              <>
                <p>{t`user.account_security.email.verification_02`}</p>
                <p>{t`user.account_security.email.verification_03`}</p>
              </>
            )}
          </>
        }
      />

      <div className="email-verification-wrap">
        <div className="email-verification-form user-validate">
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            validateTrigger="onFinish"
            //  onChange={handleValidateChange}
          >
            <div className="email-verification-item">
              <FormItem
                name="email"
                rules={[rules.email]}
                label={t`user.account_security.email.verification_04`}
                validateTrigger="onFinish"
              >
                <Field placeholder={t`user.account_security.email.verification_05`} />
              </FormItem>

              <FormItem
                name="verifyCode"
                rules={[rules.emailCode]}
                label={t`user.field.reuse_18`}
                validateTrigger="onFinish"
              >
                <Field
                  type="number"
                  maxLength={6}
                  className="email-verification-field"
                  placeholder={t`user.account_security.email.verification_06`}
                  suffix={<UserCountDown onSendValidateCode={handleSendEmailValidateCode} />}
                />
              </FormItem>

              <FormItem>
                <Button
                  type="primary"
                  size="large"
                  nativeType="submit"
                  // disabled={disabled || !email || !verifyCode}
                >{t`user.field.reuse_10`}</Button>
              </FormItem>
            </div>
          </Form>
        </div>
      </div>

      <UserPopUp
        visible={visible}
        onClose={handleModifySuccess}
        slotContent={
          <UserSuccessContent
            slotContent={<p>{t`user.account_security.email.verification_07`}</p>}
            onLink={handleModifySuccess}
          />
        }
      />
    </div>
  )
}
