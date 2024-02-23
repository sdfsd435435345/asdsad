import { useEffect, useState } from 'react'
import { Form, Field, Button, Toast } from 'react-vant'
import { t } from '@lingui/macro'
// import { link } from '@/helper/link'
import UserSecretKey from '@/features/user/common/secret-key'
import UserTipsInfo from '@/features/user/common/tips-info'
// import UserPopUp from '@/features/user/components/popup'
// import UserSuccessContent from '@/features/user/components/popup/success-content'
import { usePageContext } from '@/hooks/use-page-context'
import { PersonalCenterGoogleRules } from '@/features/user/utils/validate'
import { UserAccountSettingsTypeEnum, UserSendValidateCodeBusinessTypeEnum } from '@/constants/user'
import {
  getMemberSafeVerifyGoogleSecretKey,
  postMemberSafeGoogleBind,
  postMemberSafeGoogleUpdate,
  // getMemberUserLoginOut,
} from '@/apis/user'
// import { useUserStore } from '@/store/user'
import NavBar from '@/components/navbar'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserPersonalCenterGoogleVerification() {
  const [qrCode, setQrCode] = useState<string>('')
  const [secretKey, setSecretKey] = useState<string>('')
  // const [disabled, setDisabled] = useState<boolean>(true)
  // const [visible, setVisible] = useState<boolean>(false)

  const [form] = Form.useForm()
  const pageContext = usePageContext()
  // const store = useUserStore()
  // const verifyCode = Form.useWatch('verifyCode', form)

  const rules = PersonalCenterGoogleRules()

  const mode = pageContext.urlParsed.search?.type || ''

  const getGoogleSecretKey = async () => {
    const res = await getMemberSafeVerifyGoogleSecretKey({})
    if (res.isOk) {
      setQrCode(res.data!.qrPath)
      setSecretKey(res.data!.secretKey)
    }
  }

  useEffect(() => {
    if (qrCode === '' && secretKey === '') {
      getGoogleSecretKey()
    }
  }, [qrCode, secretKey])

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  const onFinish = async values => {
    if (mode === UserAccountSettingsTypeEnum.modify) {
      values.operateType = UserSendValidateCodeBusinessTypeEnum.modifyGoogle
      values.secretKey = secretKey

      const res = await postMemberSafeGoogleUpdate(values)
      // res.isOk && setVisible(true)
      if (res.isOk) {
        Toast.success(t`features_user_personal_center_account_security_google_verification_index_510233`)
        window.history.back()
      }
    } else {
      const res = await postMemberSafeGoogleBind({ secretKey, verifyCode: values.verifyCode })
      if (res.isOk) {
        Toast.info(t`user.field.reuse_37`)
        window.history.back()
      }
    }
  }

  // const handleModifySuccess = async () => {
  //   await getMemberUserLoginOut({})
  //   await store.clearUserCacheData()
  //   setVisible(false)
  //   link('/login')
  // }

  return (
    <div className={`google-verification ${styles.scoped}`}>
      <NavBar
        title={
          mode === UserAccountSettingsTypeEnum.bind
            ? t`features_user_personal_center_account_security_google_verification_index_594`
            : t`features_user_personal_center_account_security_google_verification_index_510244`
        }
      />

      <UserTipsInfo slotContent={<p>{t`user.account_security.google.verification_01`}</p>} />
      <div className="google-verification-wrap">
        <UserSecretKey qrcode={qrCode} secretKey={secretKey} />

        <div className="google-verification-form user-validate">
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            validateTrigger="onFinish"
            // onChange={handleValidateChange}
          >
            <FormItem
              name="verifyCode"
              rules={[rules.googleKey]}
              label={t`user.field.reuse_05`}
              validateTrigger="onFinish"
            >
              <Field type="number" maxLength={6} placeholder={t`user.account_security.google.verification_02`} />
            </FormItem>

            <FormItem>
              <Button
                type="primary"
                size="large"
                nativeType="submit"
                // disabled={disabled || !verifyCode}
              >{t`user.field.reuse_10`}</Button>
            </FormItem>
          </Form>
        </div>
      </div>

      {/* <UserPopUp
        visible={visible}
        onClose={handleModifySuccess}
        slotContent={
          <UserSuccessContent
            slotContent={<p>{t`features_user_personal_center_account_security_google_verification_index_596`}</p>}
            onLink={handleModifySuccess}
          />
        }
      /> */}
    </div>
  )
}
