import { t } from '@lingui/macro'
import { Dialog } from 'react-vant'
import { ReactNode } from 'react'
import Icon from '../icon'

function AlertTip({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <Icon name="tips_icon" className="mb-5 text-7xl !mt-0" />
      {children}
    </div>
  )
}

export default AlertTip

/** 带 tip 的弹窗提示 */
export function alertWithTip(message: ReactNode) {
  return Dialog.alert({
    message: <AlertTip>{message}</AlertTip>,
    confirmButtonText: t`features_trade_common_notification_index_5101066`,
  })
}
