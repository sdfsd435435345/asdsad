import React from 'react'
import { Button } from 'react-vant'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import styles from './index.module.css'

interface UserPopupContentProps {
  /** 图标 */
  icon?: React.ReactNode
  /** 内容 HTML 结构 */
  content: React.ReactNode
  /** 左边按钮文字 */
  leftButtonText?: string
  /** 右边按钮文字 */
  rightButtonText?: string
  /** 关闭弹窗事件 */
  onClose?: (isClose: boolean) => void
  /** 回调事件处理 */
  onContinue: () => void
}

function UserPopupContent({
  icon,
  content,
  leftButtonText,
  rightButtonText,
  onClose,
  onContinue,
}: UserPopupContentProps) {
  return (
    <div className={styles.scoped}>
      <div className="popup-wrap">
        <div className="popup-icon">{icon || <Icon name="tips_icon" />}</div>
        <div className="popup-tips">{content}</div>
        <div className="popup-btn">
          {leftButtonText ? (
            <div className="cancel">
              <Button type="default" onClick={() => onClose && onClose(false)}>
                {leftButtonText || t`user.field.reuse_09`}
              </Button>
            </div>
          ) : null}
          <div className="continue">
            <Button type="primary" onClick={onContinue}>
              {rightButtonText || t`user.field.reuse_10`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPopupContent
