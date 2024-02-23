import { useState } from 'react'
import { Form, Button, Field, Flex, Image, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import { RetrieveValidateRules, formatPhoneNumber } from '@/features/user/utils/validate'
import UserSearchArea from '@/features/user/common/search-area'
import UserChooseVerificationMethod from '@/features/user/common/choose-verification-method'
import NavBar from '@/components/navbar'
import { MemberMemberAreaType } from '@/typings/user'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { IsAccountType } from '@/features/user/utils/common'
import { useUserStore } from '@/store/user'
import { UserValidateMethodEnum, UserVerifyTypeEnum, UserSelectAreaTypeEnum, ChinaAreaCodeEnum } from '@/constants/user'
// import { postMemberVerifyByAccoun } from '@/apis/user'
import Icon from '@/components/icon'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserRetrieve() {
  const [method, setMethod] = useState<string>(UserValidateMethodEnum.email)
  const [selectArea, setSelectArea] = useState<boolean>(false)
  // const [disabled, setDisabled] = useState<boolean>(true)
  const [area, setArea] = useState<MemberMemberAreaType>({
    codeVal: ChinaAreaCodeEnum.code,
    codeKey: t`features_user_personal_center_account_security_phone_verification_index_599`,
    remark: ChinaAreaCodeEnum.remark,
  })
  // const verifyAccount = useRef<boolean>(false)

  const [form] = Form.useForm()
  const store = useUserStore()
  // const email = Form.useWatch('email', form)
  // const phone = Form.useWatch('phone', form)

  // const isAccount = email || phone

  const rules = RetrieveValidateRules()

  // const handleVerifyByAccoun = async () => {
  //   const options = {
  //     type: method === UserValidateMethodEnum.email ? UserVerifyTypeEnum.email : UserVerifyTypeEnum.phone,
  //     account: isAccount, // 邮箱
  //     mobileCountryCode: method === UserValidateMethodEnum.phone ? area.enCode : '', // 区号
  //   }
  //   const res = await postMemberVerifyByAccoun(options)
  //   if (res.isOk) {
  //     verifyAccount.current = true
  //     form.submit()
  //     return
  //   }

  //   verifyAccount.current = false
  // }

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  const handleChoosMethod = (type: string) => {
    setMethod(type)
    form.resetFields()
  }

  const handleSelectArea = v => {
    setArea(v)
    setSelectArea(false)
  }

  const onFinish = async values => {
    // if (!verifyAccount.current) {
    //   handleVerifyByAccoun()
    //   return
    // }

    const isAccountType = values.email && IsAccountType(values.email)

    if (values.email && !isAccountType) {
      return Toast.info(t`features_user_retrieve_index_623`)
    }

    await store.setUserTransitionDatas({
      accountType: method === UserValidateMethodEnum.email ? UserVerifyTypeEnum.email : UserVerifyTypeEnum.phone,
      email: isAccountType === UserVerifyTypeEnum.email && values.email,
      mobileNumber: values.phone?.replace(/\s/g, ''),
      mobileCountryCode: area.codeVal,
      uid: isAccountType === UserVerifyTypeEnum.uid && values.email,
    })

    link(`/retrieve/reset-password`)
  }

  return (
    <section className={`retrieve ${styles.scoped}`}>
      <NavBar title="" right={<Icon name="close" hasTheme />} onClickRight={() => link('/')} />

      <div className="retrieve-wrap user-validate">
        <UserChooseVerificationMethod
          title={t`user.field.reuse_24`}
          accountText={t`user.safety_items_04`}
          method={method}
          choosMethod={handleChoosMethod}
        />

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          validateTrigger="onFinish"
          // onChange={handleValidateChange}
        >
          {method === UserValidateMethodEnum.email && (
            <FormItem name="email" rules={[rules.email]} label={t`user.safety_items_04`} validateTrigger="onFinish">
              <Field placeholder={t`user.validate_form_02`} />
            </FormItem>
          )}

          {method === UserValidateMethodEnum.phone && (
            <FormItem name="phone" rules={[rules.phone]} label={t`user.validate_form_03`} validateTrigger="onFinish">
              <Field
                formatter={value => formatPhoneNumber(String(value), area?.codeVal)}
                prefix={
                  <Flex align="center" onClick={() => setSelectArea(true)}>
                    <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} /> +{area?.codeVal}{' '}
                    <Icon name="regsiter_icon_drop" hasTheme />
                  </Flex>
                }
                placeholder={t`user.field.reuse_11`}
              />
            </FormItem>
          )}

          <FormItem>
            <Button
              type="primary"
              size="large"
              nativeType="submit"
              // disabled={disabled || !isAccount}
            >
              {t`user.field.reuse_23`}
            </Button>
          </FormItem>
        </Form>
      </div>

      <UserSearchArea
        visible={selectArea}
        checkedValue={area?.codeVal}
        type={UserSelectAreaTypeEnum.area}
        placeholderText={t`user.field.reuse_25`}
        selectArea={handleSelectArea}
        onClose={() => setSelectArea(false)}
      />
    </section>
  )
}
