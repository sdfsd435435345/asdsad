import Icon from '@/components/icon'
import { ReactNode } from 'react'
import { Popup } from 'react-vant'
import styles from './index.module.css'

export type ITradeBottomModalProps = {
  title: ReactNode
  cancelText?: string
  children?: ReactNode
  visible?: boolean
  onVisibleChange?: (v: boolean) => void
  destroyOnClose?: boolean
}

function TradeBottomModal({
  title,
  visible,
  destroyOnClose,
  onVisibleChange,
  cancelText,
  children,
}: ITradeBottomModalProps) {
  return (
    <Popup
      className={styles['trade-bottom-modal-wrapper']}
      onClose={() => onVisibleChange?.(false)}
      destroyOnClose={destroyOnClose}
      visible={visible}
      position="bottom"
    >
      <div className="modal-header">
        <div className="title">{title}</div>
        <div className="cancel" onClick={() => onVisibleChange?.(false)}>
          {cancelText || <Icon name="close" className="text-xl" hasTheme />}
        </div>
      </div>
      <div>{children}</div>
    </Popup>
  )
}

export default TradeBottomModal
