import { useState, useRef } from 'react'
import { useMount } from 'react-use'
import { Cell, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import UserSecurityVerificationStatus from '@/features/user/common/security-verification-status'
import UserUniversalSecurityVerification from '@/features/user/universal-security-verification'
// import UserPopUp from '@/features/user/components/popup'
// import UserPopupContent from '@/features/user/components/popup/content'
import { UserEnabledStateTypeEnum, UserSendValidateCodeBusinessTypeEnum } from '@/constants/user'
import { postMemberSafePhoneUnStatus, deleteMemberSafeMobile } from '@/apis/user'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import { UserInformationDesensitization } from '@/features/user/utils/common'
import NavBar from '@/components/navbar'
import LazyImage, { Type } from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import styles from './index.module.css'

const url = '/personal-center/account-security/phone/verification'

export default function UserPersonalCenterPhone() {
  const [validateShow, setValidateShow] = useState<boolean>(false)
  // const [deleteTipsPopup, setDeleteTipsPopup] = useState<boolean>(false)
  // const deletePhone = useRef<boolean>(false)
  const businessType = useRef<number>()

  const { getBaseInfo, baseInfoResult, turnOnVerification } = usePersonalCenterStore()

  useMount(() => {
    getBaseInfo()
  })

  const handleUnBind = () => {
    if (baseInfoResult.isBindPhoneVerify === UserEnabledStateTypeEnum.unEnable) {
      Toast.info(t`features_user_personal_center_account_security_phone_index_603`)
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

    businessType.current = UserSendValidateCodeBusinessTypeEnum.modifyPhone
    setValidateShow(true)
  }

  const handleClickDeletePhone = () => {
    if (turnOnVerification) {
      Toast.info(t`features_user_personal_center_account_security_email_index_591`)
      return
    }
    // deletePhone.current = true
    businessType.current = UserSendValidateCodeBusinessTypeEnum.deletePhoneVerification
    // setDeleteTipsPopup(false)
    setValidateShow(true)
  }

  const handleDeletePhoneValidate = async () => {
    const res = await deleteMemberSafeMobile({})
    if (res.isOk) {
      res.data.isSuccess && Toast.success(t`features_user_personal_center_account_security_phone_index_604`)
      getBaseInfo()
    }
  }

  const handleSafePhoneStatus = async (status: number) => {
    const res = await postMemberSafePhoneUnStatus({ status })
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
      //     businessType.current = UserSendValidateCodeBusinessTypeEnum.closePhoneVerification
      //     setValidateShow(true)
      //   })
      //   .catch(() => {})
      businessType.current = UserSendValidateCodeBusinessTypeEnum.closePhoneVerification
      setValidateShow(true)
      return
    }

    handleSafePhoneStatus(UserEnabledStateTypeEnum.enable)
  }

  const onSuccess = (isTrue: boolean) => {
    if (isTrue) {
      businessType.current === UserSendValidateCodeBusinessTypeEnum.deletePhoneVerification &&
        handleDeletePhoneValidate()

      businessType.current === UserSendValidateCodeBusinessTypeEnum.closePhoneVerification &&
        handleSafePhoneStatus(UserEnabledStateTypeEnum.unEnable)

      businessType.current === UserSendValidateCodeBusinessTypeEnum.modifyPhone && link(`${url}?type=modify`)
    }
  }

  return (
    <div className="account-security-phone">
      <NavBar title={t`user.pageContent.title_18`} />

      <div className="account-security-phone-wrap">
        <UserSecurityVerificationStatus
          bind={baseInfoResult?.isBindPhoneVerify === UserEnabledStateTypeEnum.enable}
          enable={baseInfoResult?.isOpenPhoneVerify === UserEnabledStateTypeEnum.enable}
          text={
            baseInfoResult?.isBindPhoneVerify === UserEnabledStateTypeEnum.enable
              ? `+${baseInfoResult?.mobileCountryCd} ${UserInformationDesensitization(baseInfoResult?.mobileNumber)}`
              : t`user.security_verification_status_02`
          }
          icon={<LazyImage src={`${oss_svg_image_domain_address}verify_icon_phone`} hasTheme imageType={Type.png} />}
          href={`${url}?type=bind`}
          setEnable={handleToggleEnabled}
          slotCotent={
            <div className={styles['account-security-phone-cell']}>
              <Cell
                style={{ paddingBottom: 24 }}
                title={t`user.account_security.phone_01`}
                isLink
                onClick={handleRest}
              />
              {baseInfoResult?.isBindPhoneVerify === UserEnabledStateTypeEnum.enable && (
                <Cell
                  style={{ paddingTop: 24, paddingBottom: 24 }}
                  title={t`user.account_security.phone_02`}
                  isLink
                  onClick={handleClickDeletePhone}
                />
              )}
            </div>
          }
        />

        <UserUniversalSecurityVerification
          isShow={validateShow}
          businessType={businessType.current}
          onClose={setValidateShow}
          onSuccess={onSuccess}
        />

        {/* <UserPopUp
          visible={deleteTipsPopup}
          onClose={() => {
            setDeleteTipsPopup(false)
          }}
          slotContent={
            <UserPopupContent
              content={<p>{t`features_user_personal_center_account_security_phone_index_605`}</p>}
              rightButtonText={t`user.field.reuse_17`}
              onClose={setDeleteTipsPopup}
              onContinue={handleClickDeletePhone}
            />
          }
        /> */}
      </div>
    </div>
  )
}
