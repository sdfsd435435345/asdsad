import { t } from '@lingui/macro'
import classnames from 'classnames'
import { ReactNode, HTMLAttributes, useState } from 'react'
import { Dialog } from 'react-vant'
import styles from './index.module.css'

export type IUnderlineTipProps = {
  children?: ReactNode
  popup?: ReactNode
  popupTitle?: string
  moreLink?: string
  confirmButtonText?: string
  onOk?: () => void
  /** global 中 dialog-confirm-wrapper 配合的 css  */
  confirmButtonClassName?: string
  cancelButtonClassName?: string
} & HTMLAttributes<HTMLDivElement>

/** 带下划线的提示 */
function UnderlineTip(props: IUnderlineTipProps) {
  const {
    children,
    confirmButtonClassName = 'confirm-black',
    cancelButtonClassName,
    onOk,
    title,
    moreLink,
    className,
    confirmButtonText,
    popup,
    ...domRest
  } = props
  const [showDialog, setShowDialog] = useState(false)
  const openTip = (e: any) => {
    e.stopPropagation()
    setShowDialog(true)
  }
  const onConfirm = () => {
    setShowDialog(false)
    onOk?.()
  }
  const onCancel = () => {
    setShowDialog(false)
    window.open(moreLink)
  }

  return (
    <div onClick={openTip} className={classnames(styles['underline-tip-wrapper'], className)} {...domRest}>
      {children}
      <Dialog
        visible={showDialog}
        title={title}
        showCancelButton={!!moreLink}
        closeOnClickOverlay
        className={classnames(
          styles['underline-tip-modal-wrapper'],
          'dialog-confirm-wrapper',
          cancelButtonClassName,
          confirmButtonClassName
        )}
        onConfirm={onConfirm}
        confirmButtonText={confirmButtonText || t`features_trade_common_notification_index_5101066`}
        cancelButtonText={t`features/trade/common/underline-tip/index-0`}
        onCancel={onCancel}
        onClose={() => setShowDialog(false)}
      >
        {popup}
      </Dialog>
    </div>
  )
}

export default UnderlineTip
