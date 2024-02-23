import { useState, useRef } from 'react'
import { useMount } from 'react-use'
import { Cell, Popup, Toast } from 'react-vant'
import UserSecurityItem from '@/features/user/common/security-item'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import { UserEnabledStateTypeEnum } from '@/constants/user'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import { useUserStore } from '@/store/user'
import NavBar from '@/components/navbar'
import Icon from '@/components/icon'
import UserPopUp from '@/features/user/components/popup'
import UserPopupContent from '@/features/user/components/popup/content'
import styles from './index.module.css'

const hours = 60 * 60 * 1000 // 一小时

export default function UserPersonalCenterAccountSecurity() {
  const durationList = [
    {
      key: 1,
      value: 4,
      text: t`user.account_security_01`,
    },
    {
      key: 2,
      value: 12,
      text: t`user.account_security_02`,
    },
    {
      key: 3,
      value: 24,
      text: t`user.account_security_03`,
    },
    {
      key: 4,
      value: 7 * 24,
      text: t`user.account_security_04`,
    },
  ]
  const [validateShow, setValidateShow] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [duration, setDuration] = useState<string>('')

  const store = useUserStore()
  const { getBaseInfo, baseInfoResult, turnOnVerification } = usePersonalCenterStore()

  const info = store.personalCenterSettings

  const handleRestPassWord = () => {
    if (turnOnVerification) {
      return setValidateShow(true)
    }
    link('/personal-center/account-security/modify-password')
  }

  const onClose = (isTrue: boolean) => {
    setValidateShow(isTrue)
  }

  const onContinue = () => {
    setValidateShow(false)
  }

  useMount(() => {
    getBaseInfo()
  })

  useMount(() => {
    const values = durationList.find(v => v.value === (info.tokenTtl as number) / hours)
    setDuration(values?.text || t`user.account_security_02`)
  })

  const handleSetDuration = async (item: { value: number; text: string; key: number }) => {
    const { value, text } = item

    await store.setPersonalCenterSettings({ tokenTtl: value * hours })
    setDuration(text)
    setVisible(false)
    Toast.success(t`features_user_personal_center_account_security_index_613`)
  }

  return (
    <div className={`account-security ${styles.scoped}`}>
      <NavBar title={t`user.pageContent.title_21`} />

      <div className="account-security-wrap">
        <div className="account-security-item">
          <div className="item">
            <UserSecurityItem
              icon={<Icon name="user_icon_mailbox" hasTheme />}
              text={t`user.field.reuse_13`}
              bind={baseInfoResult.isBindEmailVerify === UserEnabledStateTypeEnum.enable}
              enable={baseInfoResult.isOpenEmailVerify === UserEnabledStateTypeEnum.enable}
              onLink={() => link('/personal-center/account-security/email')}
            />
          </div>

          <div className="item">
            <UserSecurityItem
              icon={<Icon name="user_icon_phone" hasTheme />}
              text={t`user.field.reuse_14`}
              bind={baseInfoResult.isBindPhoneVerify === UserEnabledStateTypeEnum.enable}
              enable={baseInfoResult.isOpenPhoneVerify === UserEnabledStateTypeEnum.enable}
              onLink={() => link('/personal-center/account-security/phone')}
            />
          </div>

          <div className="item">
            <UserSecurityItem
              icon={<Icon name="user_icon_google" hasTheme />}
              text={t`user.field.reuse_15`}
              bind={baseInfoResult.isOpenGoogleVerify === UserEnabledStateTypeEnum.enable}
              unBindText={t`features_user_personal_center_settings_index_5101268`}
              enable={baseInfoResult.isOpenGoogleVerify === UserEnabledStateTypeEnum.enable}
              onLink={() => link('/personal-center/account-security/google')}
            />
          </div>
        </div>

        <div className="login-item">
          <Cell
            title={t`user.field.reuse_16`}
            rightIcon={<Icon name="next_arrow" hasTheme />}
            value={t`user.field.reuse_08`}
            onClick={() => link('/personal-center/account-security/anti-phishing')}
          />

          <Cell
            title={t`user.account_security_05`}
            rightIcon={<Icon name="next_arrow" hasTheme />}
            value={t`user.account_security_06`}
            onClick={() => {
              handleRestPassWord()
            }}
          />

          {/* <Cell
            title={t`features_user_personal_center_account_security_transaction_password_index_607`}
            isLink
            value={
              baseInfoResult.setTradePwdInd === UserEnabledStateTypeEnum.enable
                ? t`user.account_security_06`
                : t`user.pageContent.title_12`
            }
            onClick={() =>
              link(
                `/personal-center/account-security/transaction-password?type=${
                  baseInfoResult.setTradePwdInd === UserEnabledStateTypeEnum.enable
                    ? UserAccountSettingsTypeEnum.modify
                    : UserAccountSettingsTypeEnum.bind
                }`
              )
            }
          /> */}

          <Cell
            title={t`user.account_security_07`}
            rightIcon={<Icon name="next_arrow" hasTheme />}
            value={duration}
            onClick={() => setVisible(true)}
          />
        </div>
      </div>

      <Popup visible={visible} position="bottom" onClose={() => setVisible(false)} round>
        <div className={styles['account-security-duration']}>
          <div className="duration-wrap">
            <div className="title">
              <label>{t`user.account_security_07`}</label>
            </div>
            {durationList.map(v => (
              <div className="item" key={v.key} onClick={() => handleSetDuration(v)}>
                {v.text === duration ? <label className="text-brand_color">{v.text}</label> : <label>{v.text}</label>}
              </div>
            ))}
            <div className="cancel" style={{ borderTop: '3px solid #F2F2F2' }} onClick={() => setVisible(false)}>
              <label className="cancel-text">{t`user.field.reuse_09`}</label>
            </div>
          </div>
        </div>
      </Popup>

      <UserPopUp
        visible={validateShow && turnOnVerification}
        onClose={() => {
          onClose && onClose(false)
        }}
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
            onClose={() => onClose && onClose(false)}
            onContinue={onContinue}
          />
        }
      />
    </div>
  )
}
