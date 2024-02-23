import React from 'react'
import { Button } from 'react-vant'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import classNames from 'classnames'
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
  onClose: (isClose: boolean) => void
  /** 回调事件处理 */
  onContinue: () => void
  className?: string
  isCancelButton?: boolean
}

function UserPopupContent({
  icon,
  content,
  leftButtonText,
  rightButtonText,
  onClose,
  onContinue,
  className,
  isCancelButton = true,
}: UserPopupContentProps) {
  return (
    <div className={classNames(styles.scoped, className)}>
      <div className="popup-wrap">
        <div className="popup-icon">{icon || <Icon name="tips_icon" />}</div>
        <div className="popup-tips">{content}</div>
        <div className="popup-btn">
          {isCancelButton && (
            <div className="cancel">
              <Button type="default" onClick={() => onClose(false)}>
                {leftButtonText || t`user.field.reuse_09`}
              </Button>
            </div>
          )}
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
