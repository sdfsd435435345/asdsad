import { useState } from 'react'
import { Form, Field, Button, Flex, Toast, Image } from 'react-vant'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import UserTipsInfo from '@/features/user/common/tips-info'
import UserCountDown from '@/features/user/components/count-down'
import UserSearchArea from '@/features/user/common/search-area'
import UserPopUp from '@/features/user/components/popup'
import UserSuccessContent from '@/features/user/components/popup/success-content'
import { usePageContext } from '@/hooks/use-page-context'
import {
  UserAccountSettingsTypeEnum,
  UserSendValidateCodeBusinessTypeEnum,
  UserSelectAreaTypeEnum,
  ChinaAreaCodeEnum,
} from '@/constants/user'
import { PersonalCenterPhoneRules, formatPhoneNumber } from '@/features/user/utils/validate'
import { postMemberSafePhoneBind, postMemberSafeVerifyPhoneSend, postMemberSafeMobileUpdate } from '@/apis/user'
import { MemberMemberAreaType } from '@/typings/user'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { useUserStore } from '@/store/user'
import NavBar from '@/components/navbar'
import Icon from '@/components/icon'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserPersonalCenterPhoneVerification() {
  const [visible, setVisible] = useState<boolean>(false)
  const [selectArea, setSelectArea] = useState<boolean>(false)
  const [newPhone, setNewPhone] = useState<string>('')
  // const [disabled, setDisabled] = useState<boolean>(true)
  const [area, setArea] = useState<MemberMemberAreaType>({
    codeVal: ChinaAreaCodeEnum.code,
    codeKey: t`features_user_personal_center_account_security_phone_verification_index_599`,
    remark: ChinaAreaCodeEnum.remark,
  })

  const pageContext = usePageContext()
  const [form] = Form.useForm()
  const store = useUserStore()
  const mobile = Form.useWatch('mobileNumber', form)
  // const verifyCode = Form.useWatch('verifyCode', form)

  const rules = PersonalCenterPhoneRules()

  const mode = pageContext.urlParsed.search?.type || ''

  const type =
    mode === UserAccountSettingsTypeEnum.modify
      ? UserSendValidateCodeBusinessTypeEnum.modifyNewPhone
      : UserSendValidateCodeBusinessTypeEnum.bindPhone

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  const handleSendPhoneValidateCode = async () => {
    if (!mobile) {
      Toast.info(t`features_user_personal_center_account_security_phone_verification_index_600`)
      return false
    }

    const res = await postMemberSafeVerifyPhoneSend({
      type,
      mobile: mobile?.replace(/\s/g, ''),
      mobileCountryCode: area?.codeVal as string,
    })

    const isTrue = (res.isOk && res.data?.isSuccess) || false
    isTrue && Toast.info(t`user.field.reuse_38`)
    return isTrue
  }

  const handleSelectArea = v => {
    setArea(v)
    setSelectArea(false)
  }

  const onFinish = async values => {
    values.mobileCountryCode = area?.codeVal
    values.mobileNumber = values.mobileNumber?.replace(/\s/g, '')
    values.operateType = type

    if (mode === UserAccountSettingsTypeEnum.modify) {
      const res = await postMemberSafeMobileUpdate(values)
      if (res.isOk && res.data?.isSuccess) {
        setNewPhone(`+${area?.codeVal} ${form.getFieldValue('mobileNumber')}`)
        setVisible(true)
      }
    } else {
      const res = await postMemberSafePhoneBind(values)
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
    <div className={`phone-verification ${styles.scoped}`}>
      <NavBar
        title={
          mode === UserAccountSettingsTypeEnum.bind
            ? t`features_user_personal_center_account_security_phone_verification_index_601`
            : t`features_user_personal_center_account_security_phone_verification_index_602`
        }
      />

      {mode === UserAccountSettingsTypeEnum.modify && (
        <UserTipsInfo
          slotContent={
            <>
              <p>{t`user.account_security.phone.verification_01`}</p>
              <p>{t`user.account_security.phone.verification_02`}</p>
            </>
          }
        />
      )}

      <div className="phone-verification-wrap">
        <div className="phone-verification-form user-validate">
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            validateTrigger="onFinish"
            // onChange={handleValidateChange}
          >
            <div className="phone-verification-item">
              <FormItem
                name="mobileNumber"
                rules={[rules.phone]}
                label={t`user.account_security.phone.verification_03`}
                validateTrigger="onFinish"
              >
                <Field
                  formatter={value => formatPhoneNumber(String(value), area?.codeVal)}
                  prefix={
                    <Flex align="center" onClick={() => setSelectArea(true)}>
                      <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} />
                      <span className="text-text_color_01">+{area?.codeVal}</span>{' '}
                      <Icon name="regsiter_icon_drop" hasTheme />
                    </Flex>
                  }
                  placeholder={t`user.field.reuse_11`}
                />
              </FormItem>

              <FormItem
                name="verifyCode"
                rules={[rules.phoneCode]}
                label={t`user.field.reuse_18`}
                validateTrigger="onFinish"
              >
                <Field
                  type="number"
                  maxLength={6}
                  placeholder={t`user.account_security.phone.verification_04`}
                  suffix={<UserCountDown onSendValidateCode={handleSendPhoneValidateCode} />}
                />
              </FormItem>

              <FormItem className="bottom-button-wrapper">
                <Button
                  type="primary"
                  block
                  nativeType="submit"
                  // disabled={disabled || !mobile || !verifyCode}
                >{t`user.field.reuse_10`}</Button>
              </FormItem>
            </div>
          </Form>
        </div>
      </div>

      <UserSearchArea
        visible={selectArea}
        checkedValue={area?.codeVal}
        type={UserSelectAreaTypeEnum.phone}
        placeholderText={t`user.field.reuse_25`}
        selectArea={handleSelectArea}
        onClose={() => setSelectArea(false)}
      />

      <UserPopUp
        visible={visible}
        onClose={handleModifySuccess}
        slotContent={
          <UserSuccessContent
            slotContent={
              <>
                <p>{t`user.account_security.phone.verification_05`}</p>
                <p>
                  {t`user.account_security.phone.verification_06`} {newPhone}
                </p>
              </>
            }
            onLink={handleModifySuccess}
          />
        }
      />
    </div>
  )
}
