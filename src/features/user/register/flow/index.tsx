import { useState, useEffect } from 'react'
import { Form, Button, Field, Flex, Checkbox, Toast, Image } from 'react-vant'
import { useUpdateEffect } from 'ahooks'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import Link from '@/components/link'
import { RegisterFlowRules, formatPhoneNumber } from '@/features/user/utils/validate'
import UserPasswordValidateTips from '@/features/user/common/password-validate'
import UserSearchArea from '@/features/user/common/search-area'
import UserChooseVerificationMethod from '@/features/user/common/choose-verification-method'
import NavBar from '@/components/navbar'
import { postMemberRegisterValidEmail, postMemberRegisterValidPhone } from '@/apis/user'
import { usePageContext } from '@/hooks/use-page-context'
import { useGeeTestBind } from '@/features/user/common/geetest'
import { MemberMemberAreaType } from '@/typings/user'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import {
  UserValidateMethodEnum,
  UserVerifyTypeEnum,
  UserSelectAreaTypeEnum,
  GeeTestOperationTypeEnum,
  // UserEnabledStateTypeEnum,
  UserAgreementEnum,
  ChinaAreaCodeEnum,
} from '@/constants/user'
import { useUserStore } from '@/store/user'
import { FormValuesTrim } from '@/features/user/utils/common'
import Icon from '@/components/icon'
import { useLayoutStore } from '@/store/layout'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserRegisterFlow() {
  const [method, setMethod] = useState<string>(UserValidateMethodEnum.email)
  const [selectArea, setSelectArea] = useState<boolean>(false)
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [passwordValidate, setPasswordValidate] = useState<boolean>(false)
  const [invitationCodeShow, setInvitationCodeShow] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  // const [isEnble, setIsEnble] = useState<boolean>(true)
  // const [disabled, setDisabled] = useState<boolean>(true)
  const [area, setArea] = useState<MemberMemberAreaType>({
    codeVal: ChinaAreaCodeEnum.code,
    codeKey: t`features_user_personal_center_account_security_phone_verification_index_599`,
    remark: ChinaAreaCodeEnum.remark,
  })
  const [passwordShow, setPasswordShow] = useState({
    newPasswordShow: false,
    confirmPasswordShow: false,
  })
  const [form] = Form.useForm()
  const email = Form.useWatch('email', form)
  const mobile = Form.useWatch('mobileNumber', form)
  const loginPassword = Form.useWatch('loginPassword', form)
  const confirmPassword = Form.useWatch('confirmPassword', form)

  const isAccount = email || mobile

  const rules = RegisterFlowRules(loginPassword)

  const { headerData } = useLayoutStore()
  const footerStore = useLayoutStore()
  const geeTestInit = useGeeTestBind()
  const pageContext = usePageContext()
  const store = useUserStore()
  const { invitationCode, regCountry = null } = pageContext.urlParsed.search

  const info = store.userTransitionDatas

  useUpdateEffect(() => {
    loginPassword && confirmPassword && form.validateFields(['loginPassword', 'confirmPassword'])
  }, [loginPassword, confirmPassword])

  useEffect(() => {
    if (!info.codeVal || !regCountry) link('/register')
  }, [])

  useEffect(() => {
    if (info.thirdPartyAccount) {
      info.thirdPartyAccountType === UserVerifyTypeEnum.email
        ? form.setFieldValue('email', info.thirdPartyAccount)
        : form.setFieldValue('mobileNumber', info.thirdPartyAccount)

      setMethod(
        info.thirdPartyAccountType === UserVerifyTypeEnum.email
          ? UserValidateMethodEnum.email
          : UserValidateMethodEnum.phone
      )
    }
  }, [])

  useEffect(() => {
    setArea({
      codeVal: info.codeVal,
      codeKey: info.codeKey,
      remark: info.remark,
    })
  }, [])

  useEffect(() => {
    invitationCode && form.setFieldValue('invite', invitationCode)
  }, [])

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  const handleClearPassword = (key: string) => {
    form.setFieldValue(key, '')
    key === 'loginPassword' && setPasswordValue('')
  }

  const handleChoosMethod = (type: string) => {
    setMethod(type)
    setPasswordValidate(false)
    setPasswordValue('')
    form.resetFields()
    invitationCode && form.setFieldValue('invite', invitationCode)
  }

  const handleSelectArea = (v: MemberMemberAreaType) => {
    // if (v.enableInd === UserEnabledStateTypeEnum.enable) setIsEnble(true)
    setArea(v)
    setSelectArea(false)
  }

  const handleRegister = async values => {
    values.regCountry = regCountry
    values.mobileCountryCode = area?.codeVal
    values.mobileNumber = values.mobileNumber?.replace(/\s/g, '')

    store.setUserTransitionDatas(values)

    setLoading(true)
    switch (method) {
      case UserValidateMethodEnum.email:
        const emailRes = await postMemberRegisterValidEmail(values)
        if (emailRes.isOk) {
          emailRes.data?.isSuccess && link(`/register/verification?type=${method}`)
          return
        }
        setLoading(false)
        break
      case UserValidateMethodEnum.phone:
        values.mobileCountryCode = area?.codeVal

        const phoneRes = await postMemberRegisterValidPhone(values)
        if (phoneRes.isOk) {
          phoneRes.data?.isSuccess && link(`/register/verification?type=${method}`)
          return
        }
        setLoading(false)
        break
      default:
        break
    }
  }

  const geeTestOnSuccess = async () => {
    setLoading(false)
    handleRegister(form.getFieldsValue())
  }

  const geeTestOnError = () => setLoading(false)

  const onFinish = async values => {
    // if (method === UserValidateMethodEnum.phone && !isEnble) {
    //   Toast.info(t`features_user_register_flow_index_510247`)
    //   return
    // }

    if (!passwordValidate) {
      Toast.info(t`features_user_register_flow_index_510097`)
      return
    }

    if (!values.serviceAgreement) {
      Toast.info(t`features_user_register_flow_index_625`)
      return
    }

    setLoading(true)

    /** 极验验证 */
    const operateType = GeeTestOperationTypeEnum.register
    const account = isAccount?.replace(/\s/g, '')
    geeTestInit(account, operateType, geeTestOnSuccess, geeTestOnError)
  }

  return (
    <section className={`register ${styles.scoped}`}>
      <NavBar title="" right={<Icon name="close" hasTheme />} onClickRight={() => link('/')} />

      <div className="register-wrap user-validate">
        <UserChooseVerificationMethod
          isThirdPartyRegister={info?.thirdPartyAccount && info?.thirdPartyAccountType}
          title={t({
            id: 'features_user_register_flow_index_5101291',
            values: { 0: headerData?.businessName },
          })}
          method={method}
          accountText={t`user.safety_items_04`}
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
            <>
              <FormItem name="email" rules={[rules.email]} label={t`user.safety_items_04`} validateTrigger="onFinish">
                <Field placeholder={t`user.validate_form_02`} disabled={info?.thirdPartyAccount} />
              </FormItem>

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
                        <Icon name="del_input_box" hasTheme onClick={() => handleClearPassword('loginPassword')} />
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
            </>
          )}

          {method === UserValidateMethodEnum.phone && (
            <>
              <FormItem
                name="mobileNumber"
                rules={[rules.phone]}
                label={t`user.validate_form_03`}
                validateTrigger="onFinish"
              >
                <Field
                  formatter={value => formatPhoneNumber(String(value), area?.codeVal)}
                  prefix={
                    <Flex align="center" onClick={() => setSelectArea(true)}>
                      {
                        // isEnble ? (
                        <>
                          <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} /> +
                          {area?.codeVal}
                        </>
                        // ) : (
                        //   `-- : --`
                        // )
                      }
                      <Icon name="regsiter_icon_drop" hasTheme />
                    </Flex>
                  }
                  placeholder={t`user.field.reuse_11`}
                />
              </FormItem>

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
                        <Icon name="del_input_box" hasTheme onClick={() => handleClearPassword('loginPassword')} />
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
            </>
          )}

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
              placeholder={t`user.validate_form_06`}
            />
          </FormItem>

          <div className="invitation-code" onClick={() => setInvitationCodeShow(!invitationCodeShow)}>
            <label>{t`user.validate_form_07`}</label>
            <Icon name={invitationCodeShow ? 'regsiter_icon_away' : 'regsiter_icon_drop'} hasTheme />
          </div>

          {invitationCodeShow && (
            <FormItem name="invite" style={{ marginTop: 0 }}>
              <Field placeholder={t`user.validate_form_08`} formatter={FormValuesTrim} disabled={!!invitationCode} />
            </FormItem>
          )}

          <FormItem name="serviceAgreement" rules={[rules.serviceAgreement]} validateTrigger="onFinish">
            <Checkbox
              // onChange={handleValidateChange}
              iconRender={({ checked: isActive }) => (
                <Icon name={isActive ? 'login_agreement_selected' : 'login_agreement_unselected'} />
              )}
            >
              {t({
                id: 'features_user_register_flow_index_5101292',
                values: { 0: headerData?.businessName },
              })}
              <label
                onClick={() => link(footerStore.columnsDataByCd?.[UserAgreementEnum.termsService]?.webUrl)}
              >{t`user.validate_form_10`}</label>
            </Checkbox>
          </FormItem>

          <FormItem>
            <Button
              loading={loading}
              size="large"
              type="primary"
              nativeType="submit"
              // disabled={disabled || !isAccount || !loginPassword || !confirmPassword}
            >
              {t`user.validate_form_11`}
            </Button>
          </FormItem>

          <div className="login">
            {t`user.field.reuse_06`}
            <Link href="/login" prefetch className="customize-link-style">
              {t`user.field.reuse_07`}
            </Link>
          </div>
        </Form>
      </div>

      <UserSearchArea
        visible={selectArea}
        checkedValue={area?.codeVal}
        type={UserSelectAreaTypeEnum.phone}
        placeholderText={t`user.field.reuse_25`}
        selectArea={handleSelectArea}
        onClose={() => setSelectArea(false)}
      />
    </section>
  )
}
