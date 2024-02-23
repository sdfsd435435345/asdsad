import { useState } from 'react'
import { Form, Field, Button, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import UserTipsInfo from '@/features/user/common/tips-info'
import UserPopUp from '@/features/user/components/popup'
import UserSuccessContent from '@/features/user/components/popup/success-content'
import { PersonalCenterModifyPasswordRules } from '@/features/user/utils/validate'
import { postMemberBaseTradePassword } from '@/apis/user'
import { usePageContext } from '@/hooks/use-page-context'
import { UserAccountSettingsTypeEnum } from '@/constants/user'
import NavBar from '@/components/navbar'
import Icon from '@/components/icon'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserPersonalCenterTransactionPassword() {
  const [visible, setVisible] = useState<boolean>(false)
  const [passwordShow, setPasswordShow] = useState({
    newPasswordShow: false,
    confirmPasswordShow: false,
  })

  const [form] = Form.useForm()
  const newPassword = Form.useWatch('newPassword', form)
  const pageContext = usePageContext()

  const mode = pageContext.urlParsed.search?.type || ''

  const rules = PersonalCenterModifyPasswordRules(newPassword)

  const onFinish = async values => {
    const res = await postMemberBaseTradePassword(values)
    if (res.isOk) {
      setVisible(true)
    }
  }

  return (
    <div className={`phone-verification ${styles.scoped}`}>
      <NavBar title={t`features_user_personal_center_account_security_transaction_password_index_607`} />

      {mode === UserAccountSettingsTypeEnum.modify && (
        <UserTipsInfo
          slotContent={
            <>
              <p>{t`features_user_personal_center_account_security_transaction_password_index_608`}</p>
            </>
          }
        />
      )}

      <div className="password-verification-wrap">
        <div className="password-verification-form user-validate">
          <Form layout="vertical" form={form} onFinish={onFinish}>
            {mode === UserAccountSettingsTypeEnum.modify && (
              <FormItem
                name="oldPassword"
                rules={[rules.oldPassword]}
                label={t`features_user_personal_center_account_security_transaction_password_index_609`}
              >
                <Field placeholder={t`features_user_personal_center_account_security_transaction_password_index_609`} />
              </FormItem>
            )}

            <FormItem
              name="newPassword"
              rules={[rules.password]}
              label={t`features_user_personal_center_account_security_transaction_password_index_607`}
            >
              <Field
                placeholder={t`features_user_personal_center_account_security_transaction_password_index_610`}
                type={passwordShow.newPasswordShow ? 'text' : 'password'}
                rightIcon={
                  passwordShow.newPasswordShow ? (
                    <Icon name="eyes_open" hasTheme />
                  ) : (
                    <Icon name="eyes_close" hasTheme />
                  )
                }
                onClickRightIcon={() =>
                  setPasswordShow({
                    ...passwordShow,
                    newPasswordShow: !passwordShow.newPasswordShow,
                  })
                }
              />
            </FormItem>

            <FormItem
              name="confirmPassword"
              rules={[rules.confirmPassword]}
              label={t`user.account_security.modify_password_06`}
            >
              <Field
                placeholder={t`features_user_personal_center_account_security_transaction_password_index_611`}
                type={passwordShow.confirmPasswordShow ? 'text' : 'password'}
                rightIcon={
                  passwordShow.confirmPasswordShow ? (
                    <Icon name="eyes_open" hasTheme />
                  ) : (
                    <Icon name="eyes_close" hasTheme />
                  )
                }
                onClickRightIcon={() =>
                  setPasswordShow({
                    ...passwordShow,
                    confirmPasswordShow: !passwordShow.confirmPasswordShow,
                  })
                }
              />
            </FormItem>

            <FormItem>
              <Button type="primary" nativeType="submit">{t`user.field.reuse_02`}</Button>
            </FormItem>
          </Form>
        </div>
      </div>

      <UserPopUp
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        slotContent={
          <UserSuccessContent
            slotContent={
              <p>
                {mode === UserAccountSettingsTypeEnum.modify
                  ? t`user.retrieve.reset_success_01`
                  : t`features_user_personal_center_account_security_transaction_password_index_612`}
              </p>
            }
            onLink={() => window.history.back()}
          />
        }
      />
    </div>
  )
}
