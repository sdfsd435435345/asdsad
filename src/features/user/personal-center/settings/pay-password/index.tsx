import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { Button, Field, Form, Toast } from 'react-vant'
import { useEffect, useState } from 'react'
import { setPayPassword } from '@/apis/credit-card/my-card'
import { t } from '@lingui/macro'
import { getV1VccGetUserVccInfoApiRequest, postV1VccUpdatePasswordApiRequest } from '@/apis/user'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { link } from '@/helper/link'
import { encryptAES } from '@/helper/ASE_RSA'
import styles from './index.module.css'

function PayPwd() {
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [passwordShow, setPasswordShow] = useState<boolean>(false) // 支付密码显示
  const [repeatPassword, setRepeatPassword] = useState<boolean>(false) // 确认支付密码显示
  const [userVccInfoPwd, setUserVccInfoPwd] = useState<any>(null) // 确认支付密码显示
  const [form] = Form.useForm()

  const FormItem = Form.Item
  const onFinish = async value => {
    setLoading(true)
    if (!userVccInfoPwd) {
      const encipherPassword = encryptAES(value.password as string, true)
      const encipherRepeatPassword = encryptAES(value.repeatPassword as string, true)
      const res = await setPayPassword({ password: encipherPassword, repeatPassword: encipherRepeatPassword })
      const { isOk } = res || {}
      setLoading(false)
      if (!isOk) {
        Toast({ message: t`features_user_personal_center_settings_pay_password_index_jieqju1qwu`, position: 'top' })

        return
      }
      Toast({ message: t`features_user_personal_center_settings_pay_password_index_j9vj2wkaki`, position: 'top' })
    } else {
      const encipherNewPassword = encryptAES(value.newPassword as string, true)
      const encipherRepeatPassword = encryptAES(value.repeatPassword as string, true)
      const res = await postV1VccUpdatePasswordApiRequest({
        newPassword: encipherNewPassword,
        repeatPassword: encipherRepeatPassword,
      })
      form.resetFields()
      const { isOk, data } = res || {}
      if (!isOk) return
      setLoading(false)
      if (data?.isTrue) {
        Toast({ message: t`features_user_personal_center_settings_pay_password_index_kg4keqegpn`, position: 'top' })
        link('/personal-center')
      } else {
        Toast({ message: t`features_user_personal_center_settings_pay_password_index_zruitt6tjp`, position: 'top' })
      }
    }
  }
  const vccInfo = async () => {
    setLoading(true)
    const res = await getV1VccGetUserVccInfoApiRequest({})
    setLoading(false)
    const { isOk, data } = res || {}
    if (!isOk) {
      return
    }
    setUserVccInfoPwd(data)
  }
  useEffect(() => {
    vccInfo()
  }, [])
  return (
    <div className={styles.scoped}>
      <NavBar
        title={
          !userVccInfoPwd
            ? t`features_credit_card_set_zf_password_index_jsrurrmyek`
            : t`features_user_personal_center_settings_pay_password_index_ufjmipyzjw`
        }
        left={<Icon name="back_black" />}
      />

      <Form layout="vertical" form={form} onFinish={onFinish}>
        {/* <div>支付密码</div> */}
        <FormItem
          name={userVccInfoPwd ? 'repeatPassword' : 'password'}
          rules={[{ pattern: /\d{6}/, message: t`features_credit_card_set_zf_password_index_r1b4un2jog` }]}
          label={
            !userVccInfoPwd
              ? t`features_credit_card_set_zf_password_index_lyjhotqd3d`
              : t`features_user_personal_center_settings_pay_password_index_79r0qi10ko`
          }
        >
          <Field
            maxLength={6}
            placeholder={
              !userVccInfoPwd
                ? t`features_credit_card_set_zf_password_index_r1b4un2jog`
                : t`features_user_personal_center_settings_pay_password_index_aqatm1uh_f`
            }
            type={passwordShow ? 'number' : 'password'}
            rightIcon={passwordShow ? <Icon name="eyes_open" hasTheme /> : <Icon name="eyes_close" hasTheme />}
            onClickRightIcon={() => setPasswordShow(!passwordShow)}
            formatter={value => {
              // 过滤非数字输入
              value.toString()
              return value.toString().replace(/[^0-9]/g, '')
            }}
          />
        </FormItem>

        <FormItem
          name={userVccInfoPwd ? 'newPassword' : 'repeatPassword'}
          rules={[
            { pattern: /\d{6}/, message: t`features_credit_card_set_zf_password_index_r1b4un2jog` },
            {
              validator: (_, value) => {
                const password = userVccInfoPwd ? form.getFieldValue('repeatPassword') : form.getFieldValue('password')

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
          label={
            !userVccInfoPwd
              ? t`features_credit_card_set_zf_password_index_gh0nlazozt`
              : t`features_user_personal_center_settings_pay_password_index_ziqg88tbpx`
          }
        >
          <Field
            // formatter={FormValuesTrim}
            maxLength={6}
            type={repeatPassword ? 'number' : 'password'}
            rightIcon={repeatPassword ? <Icon name="eyes_open" hasTheme /> : <Icon name="eyes_close" hasTheme />}
            onClickRightIcon={() => setRepeatPassword(!repeatPassword)}
            placeholder={
              !userVccInfoPwd
                ? t`features_credit_card_set_zf_password_index_8glunjtcqq`
                : t`features_user_personal_center_settings_pay_password_index_vgk_pjnsyu`
            }
            formatter={value => {
              // 过滤非数字输入
              value.toString()
              return value.toString().replace(/[^0-9]/g, '')
            }}
          />
        </FormItem>
        <div className="confirm-payment">
          <Button nativeType="submit" type="primary" disabled={isDisabled}>
            {t`user.field.reuse_02`}
          </Button>
        </div>
      </Form>
      <FullScreenLoading isShow={loading} mask />
    </div>
  )
}

export default PayPwd
