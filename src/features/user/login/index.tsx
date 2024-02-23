import { useState } from 'react'
import { useMount } from 'react-use'
import { Form, Button, Field, Flex, Image } from 'react-vant'
import Link from '@/components/link'
import { t } from '@lingui/macro'
import { LoginValidateRules, formatPhoneNumber } from '@/features/user/utils/validate'
import UserPopUp from '@/features/user/components/popup'
import UserPopupContent from '@/features/user/components/popup/content'
import UserSearchArea from '@/features/user/common/search-area'
import UserChooseVerificationMethod from '@/features/user/common/choose-verification-method'
import { useGeeTestBind } from '@/features/user/common/geetest'
import NavBar from '@/components/navbar'
import Icon from '@/components/icon'
import { postMemberLoginByUid, postMemberLoginEmail, postMemberLoginPhone, getMemberAreaIp } from '@/apis/user'
import { IsAccountType, FormValuesTrim } from '@/features/user/utils/common'
import { MemberMemberAreaType } from '@/typings/user'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import {
  UserValidateMethodEnum,
  UserVerifyTypeEnum,
  UserSelectAreaTypeEnum,
  GeeTestOperationTypeEnum,
  // UserEnabledStateTypeEnum,
  ChinaAreaCodeEnum,
} from '@/constants/user'
import SignInWith from '@/features/user/login/component/sign-in-with'
import { usePageContext } from '@/hooks/use-page-context'
import { useUserStore } from '@/store/user'
import { link } from '@/helper/link'
import { useLayoutStore } from '@/store/layout'
import { toKenTtlDefaultValue } from '@/constants/auth'
import styles from './index.module.css'

const FormItem = Form.Item

export default function UserLogin() {
  const { headerData } = useLayoutStore()
  // const [isEnble, setIsEnble] = useState<boolean>(true)
  const [retrieve, setRetrieve] = useState<boolean>(false)
  const [method, setMethod] = useState<string>(UserValidateMethodEnum.email)
  const [selectArea, setSelectArea] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  // const [disabled, setDisabled] = useState<boolean>(true)
  const [area, setArea] = useState<MemberMemberAreaType>({
    codeVal: ChinaAreaCodeEnum.code,
    codeKey: t`features_user_personal_center_account_security_phone_verification_index_599`,
    remark: ChinaAreaCodeEnum.remark,
  })

  const [passwordShow, setPasswordShow] = useState<boolean>(false)
  const [form] = Form.useForm()
  const pageContext = usePageContext()
  const email = Form.useWatch('email', form)
  const mobile = Form.useWatch('mobile', form)
  // const password = Form.useWatch('password', form)

  const { redirect } = pageContext.urlParsed.search
  const { searchOriginal } = pageContext.urlParsed
  const isAccount = email || mobile

  const geeTestInit = useGeeTestBind()
  const store = useUserStore()

  const { tokenTtl } = store.personalCenterSettings

  const rules = LoginValidateRules()

  const getAreaIp = async () => {
    const res = await getMemberAreaIp({})
    if (res.isOk) {
      const { enCode, fullName, shortName } = res.data

      setArea({
        codeVal: enCode,
        codeKey: fullName,
        remark: shortName,
      })

      // res.data.enableInd === UserEnabledStateTypeEnum.unEnable ? setIsEnble(false) : setIsEnble(true)
    }
  }

  useMount(getAreaIp)

  // const handleValidateChange = () => {
  //   form
  //     .validateFields()
  //     .then(() => setDisabled(false))
  //     .catch(() => setDisabled(true))
  // }

  const handleChoosMethod = (type: string) => {
    setMethod(type)
    // setDisabled(true)
    form.resetFields()
  }

  const handleSelectArea = (v: MemberMemberAreaType) => {
    // if (v.enableInd === UserEnabledStateTypeEnum.enable) setIsEnble(true)
    setArea(v)
    setSelectArea(false)
  }

  const handleLoginSuccess = async (res, values) => {
    if (res.isOk && res.data.isSuccess) {
      const cacheData = {
        ...values,
        ...res.data,
      }
      await store.setUserTransitionDatas(cacheData)

      redirect ? link(`/safety-verification${searchOriginal || `?redirect=${redirect}`}`) : link('/safety-verification')
      return
    }

    setLoading(false)
  }

  const handleLogin = async values => {
    values.tokenTtl = tokenTtl || toKenTtlDefaultValue

    setLoading(true)
    switch (method) {
      case UserValidateMethodEnum.email:
        const isAccountType = IsAccountType(values.email)
        values.accountType = isAccountType

        if (isAccountType === UserVerifyTypeEnum.email) {
          const res = await postMemberLoginEmail(values)
          handleLoginSuccess(res, values)
        }

        if (isAccountType === UserVerifyTypeEnum.uid) {
          const res = await postMemberLoginByUid({ ...values, uid: values.email })
          handleLoginSuccess(res, values)
        }
        break
      case UserValidateMethodEnum.phone:
        values.mobileCountryCode = area?.codeVal
        values.accountType = UserVerifyTypeEnum.phone
        values.mobile = values.mobile?.replace(/\s/g, '')

        const res = await postMemberLoginPhone(values)
        handleLoginSuccess(res, values)
        break
      default:
        break
    }
  }

  const geeTestOnSuccess = async () => {
    setLoading(false)
    handleLogin(form.getFieldsValue())
  }

  const geeTestOnError = () => setLoading(false)

  const onFinish = () => {
    // if (method === UserValidateMethodEnum.phone && !isEnble) {
    //   Toast.info(t`features_user_register_flow_index_510247`)
    //   return
    // }

    setLoading(true)

    // /** 极验验证 */
    const operateType = GeeTestOperationTypeEnum.login
    const account = isAccount?.replace(/\s/g, '')
    geeTestInit(account, operateType, geeTestOnSuccess, geeTestOnError)
  }

  return (
    <section className={`login ${styles.scoped}`}>
      <NavBar title="" left={null} right={<Icon name="close" hasTheme />} onClickRight={() => window.history.back()} />

      <div className="login-wrap user-validate">
        <UserChooseVerificationMethod
          title={t({
            id: 'features_user_login_index_5101290',
            values: { 0: '' },
          })}
          method={method}
          choosMethod={handleChoosMethod}
        />

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          validateTrigger="onFinish"
          //  onChange={handleValidateChange}
        >
          {method === UserValidateMethodEnum.email && (
            <>
              <FormItem
                name="email"
                rules={[rules.account]}
                label={t`user.validate_form_01`}
                validateTrigger="onFinish"
              >
                <Field placeholder={t`features_user_login_index_510241`} />
              </FormItem>

              <FormItem
                name="password"
                rules={[rules.password]}
                label={t`user.validate_form_05`}
                validateTrigger="onFinish"
              >
                <Field
                  formatter={FormValuesTrim}
                  type={passwordShow ? 'text' : 'password'}
                  rightIcon={passwordShow ? <Icon name="eyes_open" hasTheme /> : <Icon name="eyes_close" hasTheme />}
                  onClickRightIcon={() => setPasswordShow(!passwordShow)}
                  placeholder={t`user.validate_form_06`}
                />
              </FormItem>
            </>
          )}

          {method === UserValidateMethodEnum.phone && (
            <>
              <FormItem name="mobile" rules={[rules.phone]} label={t`user.validate_form_03`} validateTrigger="onFinish">
                <Field
                  formatter={value => formatPhoneNumber(String(value), area?.codeVal)}
                  prefix={
                    <div className="mobile-left">
                      <Flex align="center" onClick={() => setSelectArea(true)}>
                        {
                          // isEnble ? (
                          <>
                            <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} /> +
                            {area?.codeVal}{' '}
                          </>
                          // ) : (
                          //   `-- : -- `
                          // )
                        }
                        <Icon name="regsiter_icon_drop" hasTheme />
                      </Flex>

                      <div className="mobile-line" />
                    </div>
                  }
                  placeholder={t`user.field.reuse_11`}
                />
              </FormItem>

              <FormItem
                name="password"
                rules={[rules.password]}
                label={t`user.validate_form_05`}
                validateTrigger="onFinish"
              >
                <Field
                  formatter={FormValuesTrim}
                  type={passwordShow ? 'text' : 'password'}
                  rightIcon={passwordShow ? <Icon name="eyes_open" hasTheme /> : <Icon name="eyes_close" hasTheme />}
                  onClickRightIcon={() => setPasswordShow(!passwordShow)}
                  placeholder={t`user.validate_form_06`}
                />
              </FormItem>
            </>
          )}

          <FormItem>
            <Button
              loading={loading}
              size="large"
              nativeType="submit"
              type="primary"
              // disabled={disabled || !isAccount || !password}
            >
              {t`user.field.reuse_07`}
            </Button>
          </FormItem>
        </Form>

        <div className="register-or-retrieve">
          <Link href="/register" prefetch className="customize-link-style">
            <label>{t`user.login_02`}</label>
          </Link>

          <div onClick={() => setRetrieve(true)}>
            <label>{t`user.login_03`}</label>
          </div>
        </div>
        <div className="third-party-wrap">
          <SignInWith />
        </div>

        <UserPopUp
          visible={retrieve}
          onClose={() => {
            setRetrieve(false)
          }}
          slotContent={
            <UserPopupContent
              content={
                <p>
                  {t`user.field.reuse_26`}
                  <label>{t`user.field.reuse_27`}</label>
                  {t`user.field.reuse_28`}
                </p>
              }
              rightButtonText={t`user.login_04`}
              onClose={setRetrieve}
              onContinue={() => link('/retrieve')}
            />
          }
        />
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
