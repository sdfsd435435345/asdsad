import { useState } from 'react'
import { useMount } from 'react-use'
import { Form, Button, Field, Flex, Image, Input } from 'react-vant'
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
import { getV1PerpetualTradeParDefaultApiRequest } from '@/apis/market/market-list'
import { useNavigate } from 'react-router-dom'

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
  const store = useUserStore()

  const navigate = useNavigate()

  const { tokenTtl } = store.personalCenterSettings

  const rules = LoginValidateRules()

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

  const onFinish = async (res) => {
    const { isOk, data } = await getV1PerpetualTradeParDefaultApiRequest({...res})
    if(isOk) {
      navigate(`/?token=${data?.currentToken}`)
    }
  }

  return (
    <section className={`login ${styles.scoped}`}>
      <NavBar title="" left={null} onClickRight={() => window.history.back()} />

      <div className="login-wrap user-validate">
        <UserChooseVerificationMethod
          title="账户登陆"
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
          <>
            <FormItem
              name="userAccount"
              label="账号"
              validateTrigger="onFinish"
              rules={[{ required: true, message: '请输入账号' }]}
            >
              <Input className="input-bg" placeholder="请输入账号" />
            </FormItem>

            <FormItem
              name="password"
              label="密码"
              validateTrigger="onFinish"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input className="input-bg" placeholder="请输入密码" type={passwordShow ? 'text' : 'password'} suffix={passwordShow ? <Icon name="eyes_open" hasTheme onClick={()=> setPasswordShow(false)} /> : <Icon name="eyes_close" hasTheme onClick={()=> setPasswordShow(true)}  />} />
            </FormItem>

            <FormItem
              name="merchantCode"
              label="商户代码"
              validateTrigger="onFinish"
              rules={[{ required: true, message: '请输入商户代码' }]}
            >
              <Input className="input-bg" placeholder="请输入商户代码" />
            </FormItem>
          </>

          {/* 
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
          )} */}

          <FormItem>
            <Button
              loading={loading}
              size="large"
              nativeType="submit"
              type="primary"
            // disabled={disabled || !isAccount || !password}
            >
              登陆
            </Button>
          </FormItem>
        </Form>

        {/* <div className="register-or-retrieve">
          <Link href="/register" prefetch className="customize-link-style">
            <label>{t`user.login_02`}</label>
          </Link>

          <div onClick={() => setRetrieve(true)}>
            <label>{t`user.login_03`}</label>
          </div>
        </div> */}
        <div className="third-party-wrap">
          {/* <SignInWith /> */}
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
    </section>
  )
}
