import { useState, useRef } from 'react'
import { useMount } from 'react-use'
// import { Cell, Toast, Dialog } from 'react-vant'
import { Cell, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import UserSecurityVerificationStatus from '@/features/user/common/security-verification-status'
import UserPopUp from '@/features/user/components/popup'
import UserPopupContent from '@/features/user/components/popup/content'
import UserUniversalSecurityVerification from '@/features/user/universal-security-verification'
import { UserEnabledStateTypeEnum, UserSendValidateCodeBusinessTypeEnum } from '@/constants/user'
import { postMemberSafeGoogleStatus } from '@/apis/user'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import NavBar from '@/components/navbar'
import LazyImage, { Type } from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { link } from '@/helper/link'

const url = '/personal-center/account-security/google/verification'

export default function UserPersonalCenterGoogle() {
  const [tipsShow, setTipsShow] = useState<boolean>(false)
  const [validateShow, setValidateShow] = useState<boolean>(false)
  const businessType = useRef<number>()

  const { getBaseInfo, baseInfoResult, turnOnVerification } = usePersonalCenterStore()

  useMount(() => {
    getBaseInfo()
  })

  const handleUnBind = () => {
    if (baseInfoResult.isOpenGoogleVerify === UserEnabledStateTypeEnum.unEnable) {
      Toast.info(t`features_user_personal_center_account_security_google_index_5101317`)
      return false
    }

    return true
  }

  const handleRest = () => {
    const isTrue = handleUnBind()
    if (!isTrue) return

    if (turnOnVerification) {
      Toast.info(t`features_user_personal_center_account_security_email_index_591`)
      return
    }

    businessType.current = UserSendValidateCodeBusinessTypeEnum.modifyGoogle
    setTipsShow(true)
  }

  const handleSafeGoogleStatus = async (status: number) => {
    const res = await postMemberSafeGoogleStatus({ status })
    if (res.isOk) {
      res.data?.isSuccess && Toast.info(t`user.field.reuse_34`)
      getBaseInfo()
    }
  }

  const handleToggleEnabled = async (enable: boolean) => {
    const isTrue = handleUnBind()
    if (!isTrue) return

    if (!enable) {
      if (turnOnVerification) {
        Toast.info(t`features_user_personal_center_account_security_email_index_591`)
        return
      }
      // Dialog.confirm({
      //   title: t`features_user_personal_center_account_security_email_index_592`,
      //   message: t`features_user_personal_center_account_security_email_index_593`,
      // })
      //   .then(() => {
      //     businessType.current = UserSendValidateCodeBusinessTypeEnum.closeGoogleVerification
      //     setValidateShow(true)
      //   })
      //   .catch(() => {})

      businessType.current = UserSendValidateCodeBusinessTypeEnum.closeGoogleVerification
      setValidateShow(true)
      return
    }

    handleSafeGoogleStatus(UserEnabledStateTypeEnum.enable)
  }

  const handleContinue = () => {
    setTipsShow(false)
    setValidateShow(true)
  }

  const onSuccess = (isTrue: boolean) => {
    if (isTrue) {
      businessType.current === UserSendValidateCodeBusinessTypeEnum.closeGoogleVerification &&
        handleSafeGoogleStatus(UserEnabledStateTypeEnum.unEnable)

      businessType.current === UserSendValidateCodeBusinessTypeEnum.modifyGoogle && link(`${url}?type=modify`)
    }
  }

  return (
    <div className="account-security-google">
      <NavBar title={t`user.pageContent.title_16`} />

      <div className="account-security-google-wrap">
        <UserSecurityVerificationStatus
          bind={baseInfoResult?.isOpenGoogleVerify === UserEnabledStateTypeEnum.enable}
          unBinText={t`features_user_personal_center_settings_index_5101268`}
          enable={baseInfoResult?.isOpenGoogleVerify === UserEnabledStateTypeEnum.enable}
          text={
            baseInfoResult?.isOpenGoogleVerify === UserEnabledStateTypeEnum.enable
              ? t`user.field.reuse_33`
              : t`user.account_security.google_01`
          }
          icon={<LazyImage src={`${oss_svg_image_domain_address}verify_icon_google`} hasTheme imageType={Type.png} />}
          href={`${url}?type=bind`}
          setEnable={handleToggleEnabled}
          slotCotent={<Cell title={t`user.account_security.google_02`} isLink onClick={handleRest} />}
        />
      </div>

      <UserPopUp
        visible={tipsShow}
        onClose={() => {
          setTipsShow(false)
        }}
        slotContent={
          <UserPopupContent
            content={
              <>
                <p>{t`user.account_security.google_03`}</p>
                <p>
                  {t`user.account_security.google_04`}
                  <label>{t`user.account_security.google_05`}</label>
                  {t`user.account_security.google_06`}
                </p>
              </>
            }
            rightButtonText={t`user.account_security.google_07`}
            onClose={setTipsShow}
            onContinue={handleContinue}
          />
        }
      />

      <UserUniversalSecurityVerification
        isShow={validateShow}
        businessType={businessType.current}
        onClose={setValidateShow}
        onSuccess={onSuccess}
      />
    </div>
  )
}
