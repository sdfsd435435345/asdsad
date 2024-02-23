import { useRef, useState } from 'react'
import { useMount } from 'react-use'
// import { Cell, Toast, Dialog } from 'react-vant'
import { Cell, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import UserSecurityVerificationStatus from '@/features/user/common/security-verification-status'
import UserUniversalSecurityVerification from '@/features/user/universal-security-verification'
import { postMemberSafeEmailStatus } from '@/apis/user'
import { UserEnabledStateTypeEnum, UserSendValidateCodeBusinessTypeEnum } from '@/constants/user'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import { UserInformationDesensitization } from '@/features/user/utils/common'
import LazyImage, { Type } from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import NavBar from '@/components/navbar'

const url = '/personal-center/account-security/email/verification'

export default function UserPersonalCenterEmail() {
  const [validateShow, setValidateShow] = useState<boolean>(false)
  const businessType = useRef<number>()

  const { getBaseInfo, baseInfoResult, turnOnVerification } = usePersonalCenterStore()

  useMount(() => {
    getBaseInfo()
  })

  const handleUnBind = () => {
    if (baseInfoResult.isBindEmailVerify === UserEnabledStateTypeEnum.unEnable) {
      Toast.info(t`features_user_personal_center_account_security_email_index_590`)
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

    businessType.current = UserSendValidateCodeBusinessTypeEnum.modifyEmail
    setValidateShow(true)
  }

  const handleSafeEmailStatus = async (status: number) => {
    const res = await postMemberSafeEmailStatus({ status })
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
      //     businessType.current = UserSendValidateCodeBusinessTypeEnum.closeEmailVerification
      //     setValidateShow(true)
      //   })
      //   .catch(() => {})
      businessType.current = UserSendValidateCodeBusinessTypeEnum.closeEmailVerification
      setValidateShow(true)
      return
    }

    handleSafeEmailStatus(UserEnabledStateTypeEnum.enable)
  }

  const onSuccess = (isTrue: boolean) => {
    if (isTrue) {
      businessType.current === UserSendValidateCodeBusinessTypeEnum.closeEmailVerification &&
        handleSafeEmailStatus(UserEnabledStateTypeEnum.unEnable)

      businessType.current === UserSendValidateCodeBusinessTypeEnum.modifyEmail && link(`${url}?type=modify`)
    }
  }

  return (
    <div className="account-security-email">
      <NavBar title={t`user.pageContent.title_14`} />

      <div className="account-security-email-wrap">
        <UserSecurityVerificationStatus
          bind={baseInfoResult?.isBindEmailVerify === UserEnabledStateTypeEnum.enable}
          enable={baseInfoResult?.isOpenEmailVerify === UserEnabledStateTypeEnum.enable}
          text={
            baseInfoResult?.isBindEmailVerify === UserEnabledStateTypeEnum.enable
              ? UserInformationDesensitization(baseInfoResult?.email)
              : t`user.security_verification_status_02`
          }
          href={`${url}?type=bind`}
          icon={<LazyImage src={`${oss_svg_image_domain_address}verify_icon_mailbox`} hasTheme imageType={Type.png} />}
          setEnable={handleToggleEnabled}
          slotCotent={
            <Cell
              title={t`features_user_personal_center_account_security_email_index_510243`}
              isLink
              onClick={handleRest}
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
    </div>
  )
}
