import { ReactNode } from 'react'
import { Switch } from 'react-vant'
import Link from '@/components/link'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import styles from './index.module.css'

interface UserSecurityVerificationStatusProps {
  /** 中间展示图标 */
  icon?: ReactNode
  /** 邮箱/手机/谷歌秘钥 */
  text: string
  /** 路由文字 */
  href: string
  /** 插槽，插入 cell 组件 */
  slotCotent: ReactNode
  /** 是否绑定 */
  bind: boolean
  /** 未绑定文字 */
  unBinText?: string
  /** 是否启用 */
  enable: boolean
  /** 设置启用状态 */
  setEnable(enable: boolean): void
}

function UserSecurityVerificationStatus({
  icon,
  text,
  href,
  slotCotent,
  bind,
  unBinText,
  enable,
  setEnable,
}: UserSecurityVerificationStatusProps) {
  return (
    <div className={`security-verification-status ${styles.scoped}`}>
      <div className="security-verification-status-wrap">
        <div className="verify-info">
          <div className="icon">{icon}</div>
          {bind ? (
            <div className="text">
              <label>{text}</label>
            </div>
          ) : (
            <Link href={href} prefetch className="customize-link-style">
              {text || t`user.security_verification_status_02`}
              <Icon name="safety_icon_more" />
            </Link>
          )}
          <div className="tag">
            {enable ? (
              <label className="on">
                <Icon name="user_verified" />
                {t`user.security_verification_status_03`}
              </label>
            ) : (
              <label className="off">
                <Icon name="tis" />
                {bind ? t`user.security_verification_status_04` : unBinText || t`user.security_item_03`}
              </label>
            )}
          </div>
        </div>

        <div className="status">
          <div className="status-wrap">
            <label>{t`user.security_verification_status_05`}</label>
            <Switch checked={enable} size="22px" onChange={v => setEnable(v)} />
          </div>
        </div>
        <div className="settins">{slotCotent}</div>
      </div>
    </div>
  )
}

export default UserSecurityVerificationStatus
