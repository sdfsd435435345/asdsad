import { ReactNode } from 'react'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import styles from './index.module.css'

interface UserSecurityItemProps {
  /** 图标 */
  icon: ReactNode
  /** 验证文字 */
  text: string
  /** 是否绑定 */
  bind: boolean
  /** 未绑定文字 */
  unBindText?: string
  /** 是否启用 */
  enable: boolean
  /** 跳转路由 */
  onLink: () => void
}

interface UserSecurityItemTagProps {
  /** 类名 */
  styleName: string
  /** 文本 */
  text: string
  /** 是否绑定或启动 */
  isEnable: boolean
}

function UserSecurityItemTag({ styleName, text, isEnable }: UserSecurityItemTagProps) {
  return (
    <>
      <div className={styleName}>
        <div className="icon">
          {!isEnable ? <Icon name="user_safety_label_unbound" hasTheme /> : <Icon name="user_verified" />}
        </div>
        <div className="text">
          <label>{text}</label>
        </div>
      </div>
    </>
  )
}

function UserSecurityItem({ icon, text, bind, unBindText, enable, onLink }: UserSecurityItemProps) {
  return (
    <div className={`security-item ${styles.scoped}`} onClick={onLink}>
      <div className="security-item-wrap">
        <div className="header">
          <div className="icon">{icon}</div>
        </div>
        <div className="footer">
          <div className="text">{text}</div>
          <div className="icon">
            <Icon name="next_arrow" hasTheme />
          </div>
        </div>
        <div className="tag">
          {enable ? (
            <UserSecurityItemTag styleName="on" text={t`user.security_verification_status_03`} isEnable />
          ) : (
            <UserSecurityItemTag
              styleName="off"
              text={bind ? t`user.security_item_02` : unBindText || t`user.security_item_03`}
              isEnable={false}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default UserSecurityItem
