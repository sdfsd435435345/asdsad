import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { link } from '@/helper/link'
import { getCreditCardOpenCrad } from '@/helper/route'
import { Button, Field, Form } from 'react-vant'
import { useState } from 'react'
import { setPayPassword } from '@/apis/credit-card/my-card'
import { t } from '@lingui/macro'
import { encryptAES } from '@/helper/ASE_RSA'
import styles from './index.module.css'

function SetZfPassword() {
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [passwordShow, setPasswordShow] = useState<boolean>(false) // 支付密码显示
  const [repeatPassword, setRepeatPassword] = useState<boolean>(false) // 确认支付密码显示
  // const [password, setPassword] = useState('') // password

  const [form] = Form.useForm()

  const FormItem = Form.Item
  const onFinish = async value => {
    const encipherPassword = encryptAES(value.password as string, true)
    const encipherRepeatPassword = encryptAES(value.repeatPassword as string, true)

    const res = await setPayPassword({ password: encipherPassword, repeatPassword: encipherRepeatPassword })
    const { isOk } = res || {}
    if (!isOk) {
      return
    }
    link(getCreditCardOpenCrad())
  }

  return (
    <div className={styles.scoped}>
      <NavBar title={t`features_credit_card_set_zf_password_index_jsrurrmyek`} left={<Icon name="back_black" />} />

      <Form layout="vertical" form={form} onFinish={onFinish}>
        {/* <div>支付密码</div> */}
        <FormItem
          name="password"
          rules={[{ pattern: /\d{6}/, message: t`features_credit_card_set_zf_password_index_r1b4un2jog` }]}
          label={t`features_credit_card_set_zf_password_index_lyjhotqd3d`}
        >
          <Field
            // value={password}
            formatter={value => {
              // 过滤非数字输入
              value.toString()
              return value.toString().replace(/[^0-9]/g, '')
            }}
            maxLength={6}
            placeholder={t`features_credit_card_set_zf_password_index_r1b4un2jog`}
            type={passwordShow ? 'number' : 'password'}
            rightIcon={passwordShow ? <Icon name="eyes_open" hasTheme /> : <Icon name="eyes_close" hasTheme />}
            onClickRightIcon={() => setPasswordShow(!passwordShow)}
            // onChange={handlePasswordChange}
          />
        </FormItem>

        <FormItem
          name="repeatPassword"
          rules={[
            { pattern: /\d{6}/, message: t`features_credit_card_set_zf_password_index_r1b4un2jog` },
            {
              validator: (_, value) => {
                const password = form.getFieldValue('password')

                if (!value && !password) {
                  return Promise.resolve(true)
                }

                if (value && value.length === 6 && value === password) {
                  setIsDisabled(false)
                  return Promise.resolve(true)
                }
                setIsDisabled(true)

                return Promise.reject(new Error(t`features_credit_card_set_zf_password_index_8suukle8fd`))
              },
            },
          ]}
          label={t`features_credit_card_set_zf_password_index_gh0nlazozt`}
        >
          <Field
            formatter={value => {
              // 过滤非数字输入
              value.toString()
              return value.toString().replace(/[^0-9]/g, '')
            }}
            // value={password}
            maxLength={6}
            type={repeatPassword ? 'number' : 'password'}
            rightIcon={repeatPassword ? <Icon name="eyes_open" hasTheme /> : <Icon name="eyes_close" hasTheme />}
            onClickRightIcon={() => setRepeatPassword(!repeatPassword)}
            placeholder={t`features_credit_card_set_zf_password_index_8glunjtcqq`}
            // onChange={handlePasswordChange}
          />
        </FormItem>
        <div className="confirm-payment">
          <Button nativeType="submit" type="primary" disabled={isDisabled}>
            {t`user.field.reuse_02`}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default SetZfPassword
