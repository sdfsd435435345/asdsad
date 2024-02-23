import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import { Image, Toast } from 'react-vant'
import { useState, useEffect } from 'react'
import { useUserStore } from '@/store/user'
import LazyImage from '@/components/lazy-image'
import { MemberMemberAreaType } from '@/typings/user'
import UserPopUp from '@/features/user/components/popup'
import { usePageContext } from '@/hooks/use-page-context'
import ThirdParty from '@/features/user/common/third-party'
import {
  UserVerifyTypeEnum,
  SignInWithEnum,
  LoginTypeStatusEnum,
  ChinaAreaCodeEnum,
  UserUpsAndDownsColorEnum,
  ThirdPartyCheckoutType,
} from '@/constants/user'
import UserPopupContent from '@/features/user/components/popup/content'
import { oss_area_code_image_domain_address, oss_svg_image_domain_address } from '@/constants/oss'
import { postRegisterGoogleRequest, postRegisterAppleRequest, getMemberAreaIp } from '@/apis/user'
import styles from './index.module.css'

export default function SignInWith() {
  const [isPopUp, setIsPopUp] = useState<boolean>(false)
  const [thirdPartyVisible, setThirdPartyVisible] = useState<boolean>(false)
  const [emailOrPhone, setEmailOrPhone] = useState<string>('')
  const [currnetLoginType, setCurrnetLoginType] = useState<string>('')
  const [accountType, setAccountType] = useState<number>(UserVerifyTypeEnum.email)
  const [area, setArea] = useState<MemberMemberAreaType>({
    codeVal: ChinaAreaCodeEnum.code,
    codeKey: t`features_user_personal_center_account_security_phone_verification_index_599`,
    remark: ChinaAreaCodeEnum.remark,
  })

  const pageContext = usePageContext()
  const { invitationCode } = pageContext.urlParsed.search
  const hasInvitationCode = invitationCode ? `invitationCode=${invitationCode}&` : ''

  const { setThirdPartyToken, setToken, setUserInfo, setUserTransitionDatas, setMemberBaseColor } = useUserStore()

  const onSignChange = () => {
    setIsPopUp(false)
    link(`/login/welcome-back?accountType=${accountType}&account=${emailOrPhone}#${currnetLoginType}`)
  }

  const getAreaIp = async () => {
    const res = await getMemberAreaIp({})
    if (res.isOk) {
      const { enCode, fullName, shortName } = res.data
      setArea({
        codeVal: enCode,
        codeKey: fullName,
        remark: shortName,
      })
    }
  }

  const handleLogin = async (data, thirdPartyData, type, loginType) => {
    switch (data?.status) {
      case LoginTypeStatusEnum.needBind:
        await setUserTransitionDatas(data)
        setIsPopUp(true)
        setEmailOrPhone(thirdPartyData?.account)
        break
      case LoginTypeStatusEnum.registering:
        const account = thirdPartyData?.account
        link(`/login/master-account?${hasInvitationCode}type=${type}&account=${account}#${loginType}`)
        break
      case LoginTypeStatusEnum.isLogin:
        setToken({
          accessToken: data.token,
          refreshToken: data.refreshToken,
          accessTokenExpireTime: data.tokenExpireTime,
          refreshTokenExpireTime: data.refreshTokenExpireTime,
        })
        await setUserInfo({ ...data?.userInfo })
        await setMemberBaseColor(data.usrMemberSettingsVO?.marketSetting || UserUpsAndDownsColorEnum.greenUpRedDown)
        link('/')
        Toast.success(t`store_user_index_suoaao9ftj`)
        break
      default:
    }
  }

  const handleThirdPartyOnSuccess = async (type: number, thirdPartyData) => {
    if (!thirdPartyData?.account) {
      return setThirdPartyVisible(true)
    }
    const idToken = thirdPartyData.accessToken
    const loginType = thirdPartyData?.loginType
    type && setAccountType(type)
    idToken && setThirdPartyToken(idToken)
    loginType && setCurrnetLoginType(loginType)
    if (loginType === SignInWithEnum.google) {
      const { data, isOk } = await postRegisterGoogleRequest({ idToken })
      isOk && data && handleLogin(data, thirdPartyData, type, loginType)
    } else {
      const params = { idToken, type: ThirdPartyCheckoutType.apple }
      const { data, isOk } = await postRegisterAppleRequest(params)
      isOk && data && handleLogin(data, thirdPartyData, type, loginType)
    }
  }

  useEffect(() => {
    getAreaIp()
  }, [])

  return (
    <div className={styles['sign-in-width-wrap']}>
      {/* <div className="sign-in-width-header">
        <div className="header-divider" />
        <label>{'或'}</label>
        <div className="header-divider" />
      </div>
      <Button plain className="mb-4" onClick={() => setIsPopUp(true)}>
        <Icon hasTheme className="sign-button-icon" name="login_icon_apple" />
        {'通过 Apple 继续'}
      </Button>
      <Button plain onClick={() => link('/login/master-account')}>
        <Icon className="sign-button-icon" name="login_icon_google" />
        {'通过 Google 继续'}
      </Button> */}

      <ThirdParty onSuccess={handleThirdPartyOnSuccess} />

      <UserPopUp
        visible={isPopUp}
        onClose={() => {
          setIsPopUp(false)
        }}
        slotContent={
          <UserPopupContent
            onClose={setIsPopUp}
            isCancelButton={false}
            rightButtonText={t`user.field.reuse_23`}
            onContinue={() => onSignChange()}
            className={styles['sign-in-width-popup']}
            icon={<label>{t`features_user_login_component_sign_in_with_index__9nm7hlmbb`}</label>}
            content={
              <div className="sign-in-width-popup-content">
                <p>{t`features_user_login_component_sign_in_with_index_vmpwpi8_pg`}</p>
                {accountType === UserVerifyTypeEnum.email ? (
                  <div className="sign-in-width-input">{emailOrPhone}</div>
                ) : (
                  <div className="sign-in-width-input">
                    <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} />
                    <span>+{area?.codeVal}</span>
                    <div className="divider" />
                    <span>{emailOrPhone}</span>
                  </div>
                )}
              </div>
            }
          />
        }
      />

      <UserPopUp
        visible={thirdPartyVisible}
        slotContent={
          <UserPopupContent
            isCancelButton={false}
            icon={<LazyImage src={`${oss_svg_image_domain_address}tips.png`} />}
            onClose={() => setThirdPartyVisible(false)}
            onContinue={() => setThirdPartyVisible(false)}
            rightButtonText={t`features_user_login_component_sign_in_with_index_5ukeyajzjf`}
            content={
              <div className="text-center">{t`features_user_login_component_sign_in_with_index_rofoy_r3ne`}</div>
            }
          />
        }
        className={styles['center-user-popUp']}
      />
    </div>
  )
}
