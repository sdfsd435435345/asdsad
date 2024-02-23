import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { useState } from 'react'
import { useUserStore } from '@/store/user'
import { Button, Form, Field, Toast } from 'react-vant'
import { usePageContext } from '@/hooks/use-page-context'
import { FormValuesTrim } from '@/features/user/utils/common'
import { RegisterFlowRules } from '@/features/user/utils/validate'
import UserPasswordValidateTips from '@/features/user/common/password-validate'
import { postSetPasswordRequest } from '@/apis/user'
import { link } from '@/helper/link'
import styles from './index.module.css'

const FormItem = Form.Item
export default function SetPassword() {
  const [form] = Form.useForm()
  const loginPassword = Form.useWatch('loginPassword', form)
  const confirmPassword = Form.useWatch('confirmPassword', form)
  const rules = RegisterFlowRules(loginPassword)
  const pageContext = usePageContext()
  const { clearThirdPartyToken } = useUserStore()

  const [passwordValue, setPasswordValue] = useState<string>('')
  const [passwordValidate, setPasswordValidate] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [passwordShow, setPasswordShow] = useState({
    newPasswordShow: false,
    confirmPasswordShow: false,
  })

  const getRouterParams = () => {
    const urlParsed = pageContext?.urlParsed?.search
    const type = urlParsed?.type
    const accountData = urlParsed?.account
    return { type, accountData }
  }

  const onFinish = async values => {
    if (!passwordValidate) {
      Toast.info(t`features_user_register_flow_index_510097`)
      return
    }
    const { type, accountData } = getRouterParams()
    const params = {
      accountType: type,
      account: accountData,
      password: values?.loginPassword,
    }
    setLoading(true)
    const { data, isOk } = await postSetPasswordRequest(params)
    if (isOk && data) {
      Toast.success(t`features_user_personal_center_settings_converted_currency_index_587`)
      link('/')
      clearThirdPartyToken()
    }
    setLoading(false)
  }

  const onJumpOverChange = () => {
    link('/')
    clearThirdPartyToken()
  }

  const handleClearPassword = (key: string) => {
    form.setFieldValue(key, '')
    key === 'loginPassword' && setPasswordValue('')
  }
  return (
    <section className={styles['set-password-wrap']}>
      <NavBar
        title=""
        onClickRight={() => window.history.back()}
        right={<Icon name="close" hasTheme className="set-password-icon" />}
      />
      <div className="set-password-content">
        <p>{t`features_user_login_set_password_index_ia04bdy08y`}</p>
        <span className="content-header-text">{t`features_user_login_set_password_index_drfqqwenrg`}</span>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          validateTrigger="onFinish"
          className="form-input-large-size"
        >
          <FormItem
            name="loginPassword"
            rules={[rules.password]}
            label={t`user.validate_form_04`}
            validateTrigger="onFinish"
          >
            <Field
              formatter={FormValuesTrim}
              maxLength={16}
              onChange={setPasswordValue}
              type={passwordShow.newPasswordShow ? 'text' : 'password'}
              rightIcon={
                <>
                  {loginPassword && (
                    <Icon name="del_input-box" hasTheme onClick={() => handleClearPassword('loginPassword')} />
                  )}

                  {passwordShow.newPasswordShow ? (
                    <Icon name="eyes_open" hasTheme />
                  ) : (
                    <Icon name="eyes_close" hasTheme />
                  )}
                </>
              }
              onClickRightIcon={() =>
                setPasswordShow({
                  ...passwordShow,
                  newPasswordShow: !passwordShow.newPasswordShow,
                })
              }
              placeholder={t`user.validate_form_06`}
            />
          </FormItem>
          <UserPasswordValidateTips password={FormValuesTrim(passwordValue)} validate={setPasswordValidate} />

          <FormItem
            name="confirmPassword"
            rules={[rules.confirmPassword]}
            label={t`user.field.reuse_12`}
            validateTrigger="onFinish"
          >
            <Field
              formatter={FormValuesTrim}
              maxLength={16}
              type={passwordShow.confirmPasswordShow ? 'text' : 'password'}
              rightIcon={
                <>
                  {confirmPassword && (
                    <Icon name="del_input-box" hasTheme onClick={() => handleClearPassword('confirmPassword')} />
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
              placeholder={t`user.validate_form_06`}
            />
          </FormItem>

          <FormItem className="next-submit">
            <Button type="primary" nativeType="submit" loading={loading}>
              {t`user.validate_form_11`}
            </Button>
          </FormItem>
        </Form>
        <span className="content-header-text" onClick={onJumpOverChange}>
          {t`features_user_login_set_password_index_tj0gobj26i`}
        </span>
      </div>
    </section>
  )
}
