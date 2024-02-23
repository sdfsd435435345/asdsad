import { useState } from 'react'
import { Form, Field, Button, Toast } from 'react-vant'
import { useUpdateEffect } from 'ahooks'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import UserPasswordValidateTips from '@/features/user/common/password-validate'
import UserTipsInfo from '@/features/user/common/tips-info'
import UserPopUp from '@/features/user/components/popup'
import UserSuccessContent from '@/features/user/components/popup/success-content'
import { PersonalCenterModifyPasswordRules } from '@/features/user/utils/validate'
import { postMemberSafePassword } from '@/apis/user'
import { useUserStore } from '@/store/user'
import { FormValuesTrim } from '@/features/user/utils/common'
import NavBar from '@/components/navbar'
import Icon from '@/components/icon'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserPersonalCenterModifyPassword() {
  const [password, setPassword] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)
  const [passwordValidate, setPasswordValidate] = useState<boolean>(false)
  // const [disabled, setDisabled] = useState<boolean>(true)
  const [passwordShow, setPasswordShow] = useState({
    passwordShow: false,
    newPasswordShow: false,
    confirmPasswordShow: false,
  })
  const [form] = Form.useForm()
  const store = useUserStore()
  // const oldPassword = Form.useWatch('oldPassword', form)
  const newPassword = Form.useWatch('newPassword', form)
  const confirmPassword = Form.useWatch('confirmPassword', form)
  const oldPassword = Form.useWatch('oldPassword', form)

  const rules = PersonalCenterModifyPasswordRules(newPassword)

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

  const handleToLogin = async () => {
    await store.clearUserCacheData()
    Toast.success(t`features_user_personal_center_account_security_modify_password_index_510238`)
    link('/login')
  }

  const onFinish = async values => {
    if (!passwordValidate) {
      Toast.info(t`features_user_register_flow_index_510097`)
      return
    }

    const res = await postMemberSafePassword(values)
    if (res.isOk) {
      setVisible(true)
    }
  }

  return (
    <div className={`phone-verification ${styles.scoped}`}>
      <NavBar title={t`user.pageContent.title_20`} />

      <UserTipsInfo
        slotContent={
          <>
            <p>{t`user.account_security.modify_password_01`}</p>
            <p>{t`user.account_security.modify_password_02`}</p>
          </>
        }
      />

      <div className="password-verification-wrap">
        <div className="password-verification-form user-validate">
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            validateTrigger="onFinish"
            // onChange={handleValidateChange}
          >
            <FormItem
              name="oldPassword"
              rules={[rules.oldPassword]}
              label={t`user.account_security.modify_password_03`}
              validateTrigger="onFinish"
            >
              <Field
                formatter={FormValuesTrim}
                maxLength={16}
                placeholder={t`user.account_security.modify_password_04`}
                type={passwordShow.passwordShow ? 'text' : 'password'}
                rightIcon={
                  <>
                    {oldPassword && (
                      <Icon name="del_input_box" hasTheme onClick={() => handleClearPassword('oldPassword')} />
                    )}

                    <Icon
                      name={passwordShow.passwordShow ? 'eyes_open' : 'eyes_close'}
                      hasTheme
                      onClick={() =>
                        setPasswordShow({
                          ...passwordShow,
                          passwordShow: !passwordShow.passwordShow,
                        })
                      }
                    />
                  </>
                }
              />
            </FormItem>

            <FormItem
              name="newPassword"
              rules={[rules.password]}
              label={t`user.account_security.modify_password_05`}
              style={{ marginBottom: password ? 0 : 32 }}
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
              rules={[rules.confirmPassword]}
              label={t`user.account_security.modify_password_06`}
              validateTrigger="onFinish"
            >
              <Field
                formatter={FormValuesTrim}
                placeholder={t`user.account_security.modify_password_07`}
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

            <FormItem>
              <Button
                type="primary"
                size="large"
                nativeType="submit"
                // disabled={disabled || !oldPassword || !newPassword || !confirmPassword}
              >{t`user.field.reuse_02`}</Button>
            </FormItem>
          </Form>
        </div>
      </div>

      <UserPopUp
        visible={visible}
        onClose={handleToLogin}
        slotContent={
          <UserSuccessContent slotContent={<p>{t`user.retrieve.reset_success_01`}</p>} onLink={handleToLogin} />
        }
      />
    </div>
  )
}
