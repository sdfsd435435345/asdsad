import { useEffect, useState } from 'react'
import { useRequest } from 'ahooks'
import { Cell, Toast, Button, ActionSheet, Popup } from 'react-vant'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import NavBar from '@/components/navbar'
import { ThemeEnum } from '@/constants/base'
import { getIsLogin } from '@/helper/auth'
import LazyImage from '@/components/lazy-image'
import { getMemberUserInfo, getMemberUserLoginOut } from '@/apis/user'
import { useCopyToClipboard } from 'react-use'
import { useUserStore } from '@/store/user'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { useCommonStore } from '@/store/common'
import { UserInfoType } from '@/typings/api/user'
import { UserEnabledStateTypeEnum, UserKycTypeEnum, UserSendValidateCodeBusinessTypeEnum } from '@/constants/user'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { I18nsMap } from '@/constants/i18n'

import Icon from '@/components/icon'
import { usePageContext } from '@/hooks/use-page-context'
import { getWithdrawVerify } from '@/apis/assets/common'
import { useLayoutStore } from '@/store/layout'
import styles from './index.module.css'
import UserPopupContent from '../components/popup/content'
import UserPopUp from '../components/popup'
import UniversalSecurityVerification from '../universal-security-verification'

export default function UserPersonalCenter() {
  const [visible, setVisible] = useState<boolean>(false)
  const commonStore = useCommonStore()
  const useStore = useUserStore()
  const userInfo = useStore.userInfo
  const pageContext = usePageContext()
  const [state, copyToClipboard] = useCopyToClipboard()
  const { isLogin } = useStore

  const getUserInfo = async () => {
    const res = await getMemberUserInfo({})
    if (res.isOk) {
      useStore.setUserInfo(res.data as UserInfoType)
    }
  }
  const [needVerify, setNeedVerify] = useState(false)
  const [showVerify, setShowVerify] = useState(false)
  const [isShowTwoVerification, setIsShowTwoVerification] = useState(false)
  /**
   * 提币前校验
   */
  const checkFactors = async () => {
    const res = await getWithdrawVerify({})
    const { isOk, data: { errMsg = '', isOpenSafeVerify = false, isSuccess = false } = {}, message = '' } = res || {}

    if (!isOk) {
      return
    }

    if (!isOpenSafeVerify) {
      // 展示其用安全验证提示弹窗
      setNeedVerify(true)
    }
  }

  useEffect(() => {
    if (isLogin) {
      getUserInfo()
      checkFactors()
    }
  }, [])

  const handleCopy = () => {
    copyToClipboard(userInfo?.uid as string)
    state.error
      ? Toast({ message: t`user.secret_key_02`, position: 'top' })
      : Toast({ message: t`user.secret_key_01`, position: 'top' })
  }

  const updateTheme = () => {
    let themeSetting: ThemeEnum
    commonStore.theme === ThemeEnum.light ? (themeSetting = ThemeEnum.dark) : (themeSetting = ThemeEnum.dark)
    commonStore.setTheme(themeSetting)
  }

  const handleUnLoginStatus = (url: string, isCheck: boolean) => {
    if (isCheck) {
      isLogin ? link(url) : Toast.info(t`features_user_personal_center_index_510102`)
      return
    }

    link(url)
  }

  const handleClearData = async (url: string) => {
    setVisible(false)
    await getMemberUserLoginOut({})
    useStore.clearUserCacheData()
    link(url)
  }

  const { run, loading } = useRequest(handleClearData, { manual: true })
  const toSetPassword = () => {
    if (!isLogin) {
      Toast.info(t`features_user_personal_center_index_510102`)
      return
    }
    if (needVerify) {
      setShowVerify(true)
      return
    }
    setIsShowTwoVerification(true)
  }

  const { customerJumpUrl } = useLayoutStore().layoutProps || {}

  return (
    <div className={`personal-center ${styles.scoped}`}>
      <NavBar
        onClickLeft={() => link('/')}
        title=""
        right={
          <div className="navbar" onClick={() => window.open(customerJumpUrl)}>
            <div className="navbar-right">
              <div className="customer-service">
                <Icon name="nav_service" hasTheme />
              </div>
            </div>
          </div>
        }
      />

      <div className="personal-center-wrap">
        <div className="info">
          {isLogin ? (
            <div className="info-wrap">
              <div className="icon">
                {userInfo?.setNicknameInd === UserEnabledStateTypeEnum.enable ? (
                  <Icon name="user_head_hover" />
                ) : (
                  <Icon name="user_head" />
                )}
              </div>

              <div className="name">
                <div className="text">
                  {userInfo?.setNicknameInd === UserEnabledStateTypeEnum.enable ? (
                    <label>{userInfo.nickName}</label>
                  ) : (
                    <label onClick={() => link('/personal-center/modify-username')}>
                      {t`user.personal_center_01`}{' '}
                      <span>
                        <Icon name="next_arrow" hasTheme />
                      </span>
                    </label>
                  )}
                </div>

                <div className="number">
                  <label>
                    UID: {userInfo?.uid} <Icon name="copy" hasTheme onClick={handleCopy} />
                  </label>
                </div>
              </div>

              <div className="status" onClick={() => link('/kyc')}>
                <div className={userInfo?.kycType === UserKycTypeEnum.notCertified ? 'off' : 'on'}>
                  <div className="text">
                    {userInfo?.kycType === UserKycTypeEnum.notCertified ? (
                      <div className="flex items-center">
                        <Icon name="user_unverified" className="unverified" />
                        <label>{t`user.personal_center_03_2`}</label>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        {userInfo?.kycType && <Icon className="w-3 h-3 mr-1 text-xs" name="user_verified" />}
                        {userInfo?.kycType === UserKycTypeEnum.standardCertification && (
                          <label>{t`features_user_personal_center_index_5101255`}</label>
                        )}
                        {userInfo?.kycType === UserKycTypeEnum.advancedCertification && (
                          <label>{t`features_user_personal_center_index_5101256`}</label>
                        )}
                        {userInfo?.kycType === UserKycTypeEnum.enterpriseCertification && (
                          <label>{t`features_kyc_index_5101112`}</label>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="login-wrap">
              <div className="login" onClick={() => link('/login')}>
                <label>{t`user.personal_center_04`}</label>
              </div>
              <div className="text">
                <label>Slogan</label>
              </div>
            </div>
          )}
        </div>

        <div className="cell-item-wrap">
          <div className="cell-item">
            <Cell
              title={t`user.personal_center_08`}
              isLink
              icon={<Icon name="user_icon_address" hasTheme />}
              onClick={() => handleUnLoginStatus('/assets/withdraw/address', true)}
            />
            <Cell
              title={t`features_user_personal_center_index_kgfkweuw1k`}
              isLink
              icon={<Icon name="password_management" hasTheme />}
              onClick={toSetPassword}
            />

            <Cell
              title={t`user.personal_center_09`}
              isLink
              icon={<Icon name="user_icon_safety" hasTheme />}
              onClick={() => handleUnLoginStatus('/personal-center/account-security', true)}
            />

            <Cell
              title={t`user.pageContent.title_12`}
              isLink
              icon={<Icon name="user_icon_set_white" hasTheme />}
              onClick={() => link('/personal-center/settings')}
            />
          </div>

          <div className="cell-item last-item">
            {/* <Cell
              title={t`user.personal_center_10`}
              isLink
              icon={<Icon name="user_icon_network" hasTheme />}
              onClick={() => link('/personal-center/network-check')}
            /> */}

            {/* <Cell
              title={t`user.personal_center_11`}
              isLink
              icon={<Icon name="share" hasTheme />}
              onClick={() => Toast.info(t`features_user_personal_center_index_510103`)}
            /> */}

            <Cell
              title={t`user.field.reuse_29`}
              isLink
              icon={<Icon name="property_icon_tips" hasTheme />}
              onClick={() => link('/personal-center/about-us')}
            />
            {isLogin && (
              <Cell
                title={t`features_user_personal_center_index_oa0glxw_zoxjimyq8lplx`}
                isLink
                icon={<Icon name="setting_switch_account" hasTheme />}
                onClick={() => run('/login')}
              />
            )}
            {/* <>
                <div className="version">
                  <div className="punctuation-wrap">
                    <span className="punctuation"></span>
                  </div>
                  <span>
                    {t`user.personal_center_12`} {userInfo?.version}
                  </span>
                </div>
              </> */}
          </div>
        </div>

        {isLogin && (
          <div className="login-out">
            <Button type="primary" onClick={() => setVisible(true)}>{t`user.personal_center_13`}</Button>
          </div>
        )}
      </div>

      <ActionSheet
        className={`${styles['personal-center-action-sheet']}`}
        visible={visible}
        onCancel={() => setVisible(false)}
        cancelText={t`assets.financial-record.cancel`}
        description={t`features_user_personal_center_index_v78k_m6ea9o7ozbrxsxff`}
        actions={[{ name: t`user.personal_center_13` }]}
        onSelect={() => run('/')}
      />

      <FullScreenLoading isShow={loading} />
      <UserPopUp
        visible={showVerify}
        onClose={() => setShowVerify(false)}
        slotContent={
          <UserPopupContent
            content={
              <>
                <p>{t`user.universal_security_verification_07`}</p>
                <p>{t`user.universal_security_verification_09`}</p>
                <p>{t`user.universal_security_verification_10`}</p>
                <p>{t`user.universal_security_verification_11`}</p>
              </>
            }
            rightButtonText={t`user.universal_security_verification_08`}
            onClose={() => setShowVerify(false)}
            onContinue={() => {
              setShowVerify(false)
              link('/personal-center/account-security')
            }}
          />
        }
      />
      {isShowTwoVerification && (
        <UniversalSecurityVerification
          isShow={isShowTwoVerification}
          businessType={UserSendValidateCodeBusinessTypeEnum.payPassword}
          onSuccess={(isSuccess: boolean) => {
            if (isSuccess) {
              handleUnLoginStatus('/personal-center/settings/pay-password', true)
            }
          }}
          onClose={() => {
            setIsShowTwoVerification(false)
          }}
        />
      )}
    </div>
  )
}
