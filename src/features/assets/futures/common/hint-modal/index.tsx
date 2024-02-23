/**
 * 合约 - 提示文案展示弹窗组件
 */

import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { Button, Popup } from 'react-vant'
import { ReactNode } from 'react'
import styles from './index.module.css'

interface HintModalProps {
  visible: boolean
  showIcon?: boolean
  title?: string
  content: string | ReactNode
  cancelText?: string
  commitText?: string
  onClose?: () => void
  onCommit: () => void
}

function HintModal(props: HintModalProps) {
  const {
    visible,
    showIcon,
    title,
    content,
    cancelText,
    commitText = t`features_trade_common_notification_index_5101066`,
    onClose,
    onCommit,
  } = props || {}

  return (
    <Popup
      visible={visible}
      closeOnPopstate
      safeAreaInsetBottom
      round
      className={styles['hint-modal-root']}
      onClose={onClose || onCommit}
    >
      <div className="hint-modal-wrapper">
        {showIcon && <Icon className="modal-icon" name="tips_icon" />}
        {title && <span className="modal-title">{title}</span>}

        <div className="modal-content">{content}</div>

        <div className="modal-bottom">
          {cancelText && (
            <Button plain className="modal-btn modal-cancel-btn" onClick={onClose}>
              {cancelText}
            </Button>
          )}
          <Button type="primary" className={`modal-btn ${!cancelText && 'w-full'}`} onClick={onCommit}>
            {commitText}
          </Button>
        </div>
      </div>
    </Popup>
  )
}

export { HintModal }
