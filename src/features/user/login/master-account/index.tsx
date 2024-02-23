import { t } from '@lingui/macro'
import { useState, useEffect } from 'react'
import { link } from '@/helper/link'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { useUserStore } from '@/store/user'
import { useLayoutStore } from '@/store/layout'
import { Button, Field, Image, Checkbox, Toast } from 'react-vant'
import { MemberMemberAreaType } from '@/typings/user'
import { usePageContext } from '@/hooks/use-page-context'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import {
  SignInWithEnum,
  ChinaAreaCodeEnum,
  UserAgreementEnum,
  UserVerifyTypeEnum,
  LoginTypeStatusEnum,
  UserSelectAreaTypeEnum,
  UserUpsAndDownsColorEnum,
  GeeTestOperationTypeEnum,
  ThirdPartyCheckoutType,
} from '@/constants/user'
import { useGeeTestBind } from '@/features/user/common/geetest'
import UserSearchArea from '@/features/user/common/search-area'
import { UserInformationDesensitization } from '@/features/user/utils/common'
import { postRegisterGoogleRequest, postRegisterAppleRequest } from '@/apis/user'
import styles from './index.module.css'

export default function MasterAccount() {
  const [area, setArea] = useState<MemberMemberAreaType>({
    codeVal: ChinaAreaCodeEnum.code,
    codeKey: t`features_user_personal_center_account_security_phone_verification_index_599`,
    remark: ChinaAreaCodeEnum.remark,
  })
  const [checked, setChecked] = useState<boolean>(false)
  const [selectArea, setSelectArea] = useState<boolean>(false)
  const [invitationCodeShow, setInvitationCodeShow] = useState<boolean>(true)
  const [account, setAccount] = useState<string>('')
  const [accountType, setAccountType] = useState<number>(UserVerifyTypeEnum.email)
  const [invitationValue, setInvitationValue] = useState<string>('')
  const [loginType, setLoginType] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { thirdPartyToken, setToken, setUserInfo, setMemberBaseColor } = useUserStore()
  const footerStore = useLayoutStore()
  const { headerData } = useLayoutStore()
  const pageContext = usePageContext()
  const geeTestInit = useGeeTestBind()

  const { invitationCode } = pageContext.urlParsed.search

  const getRouterParams = () => {
    const urlParsed = pageContext?.urlParsed?.search
    const type = urlParsed?.type
    const accountData = urlParsed?.account
    const accountRouterType = pageContext?.urlParsed?.hash
    return { type, accountData, accountRouterType }
  }

  const getRouterInformation = () => {
    const { type, accountData, accountRouterType } = getRouterParams()
    accountData && setAccount(accountData)
    type && setAccountType(Number(type))
    accountRouterType && setLoginType(accountRouterType)
  }

  // const onCountryChange = () => {
  //   setSelectArea(true)
  // }

  const handleSelectArea = (v: MemberMemberAreaType) => {
    setArea(v)
    setSelectArea(false)
  }

  const handleValidateChange = (v: boolean) => setChecked(v)

  const handleLogin = async data => {
    const params = data?.userInfo
    setToken({
      accessToken: data.token,
      refreshToken: data.refreshToken,
      accessTokenExpireTime: data.tokenExpireTime,
      refreshTokenExpireTime: data.refreshTokenExpireTime,
    })
    await setUserInfo({ ...params })
    await setMemberBaseColor(data.usrMemberSettingsVO?.marketSetting || UserUpsAndDownsColorEnum.greenUpRedDown)
    link(`/login/set-password?account=${params?.email || params?.mobileNumber}&type=${accountType}`)
    setLoading(false)
  }

  const geeTestOnSuccess = async () => {
    const params = {
      idToken: thirdPartyToken,
      status: LoginTypeStatusEnum.registering,
      invitationCode: invitationValue,
    } as any
    if (loginType === SignInWithEnum.google) {
      const { data, isOk } = await postRegisterGoogleRequest(params)
      if (!isOk) return setLoading(false)
      data && handleLogin(data)
    } else {
      params.type = ThirdPartyCheckoutType.apple
      const { data, isOk } = await postRegisterAppleRequest(params)
      if (!isOk) return setLoading(false)
      data && handleLogin(data)
    }
  }

  /** 注册 */
  const onSumbitChange = async () => {
    if (!checked) {
      return Toast.info(t`features_user_register_flow_index_625`)
    }
    /** 极验验证 */
    setLoading(true)
    const operateType = GeeTestOperationTypeEnum.register
    const accountData = account?.replace(/\s/g, '')
    geeTestInit(accountData, operateType, geeTestOnSuccess, () => setLoading(false))
  }

  useEffect(() => {
    invitationCode && setInvitationValue(invitationCode)
  }, [invitationCode])

  useEffect(() => {
    getRouterInformation()
  }, [])

  return (
    <section className={styles['master-account-wrap']}>
      <NavBar
        title=""
        onClickRight={() => window.history.back()}
        right={<Icon name="close" hasTheme className="master-account-icon" />}
      />
      <div className="master-account-content">
        <p>
          {t({
            id: 'features_user_register_flow_index_5101291',
            values: { 0: headerData?.businessName },
          })}
        </p>
        {/* <div className="content-select-image-wrap" onClick={onCountryChange}>
          <div className="content-select-image">
            <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} />
            <div className="image-key">{area?.codeKey}</div>
          </div>
          <Icon name="next_arrow" hasTheme />
        </div>
        <div className="mb-8">
          <label>{t`user.register.fresidence_04`}</label>
          <span className="text-xs text-brand_color">{t`user.register.fresidence_05`}</span>
          <label>{t`user.register.fresidence_06`}</label>
        </div> */}

        {accountType === UserVerifyTypeEnum.email ? (
          <div className="master-account-input">{account}</div>
        ) : (
          <div className="master-account-input">
            <Image lazyload src={`${oss_area_code_image_domain_address}${area?.remark}.png`} />
            <span>+{area?.codeVal}</span>
            <div className="divider" />
            <span>{account}</span>
          </div>
        )}

        <div className="invitation-code" onClick={() => setInvitationCodeShow(!invitationCodeShow)}>
          <label>{t`user.validate_form_07`}</label>
          <Icon name={invitationCodeShow ? 'regsiter_icon_away' : 'regsiter_icon_drop'} hasTheme />
        </div>
        {invitationCodeShow && (
          <Field
            value={invitationValue}
            readOnly={!!invitationCode}
            onChange={v => setInvitationValue(v)}
            placeholder={t`user.validate_form_08`}
          />
        )}

        <Checkbox
          checked={checked}
          onChange={handleValidateChange}
          className="master-account-checkbox"
          iconRender={({ checked: isActive }) => (
            <Icon
              className="checkbox-icon"
              name={isActive ? 'login_agreement_selected' : 'login_agreement_unselected'}
            />
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

        <Button type="primary" onClick={onSumbitChange} loading={loading}>
          {t`user.validate_form_11`}
        </Button>
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
