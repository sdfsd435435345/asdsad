import { t } from '@lingui/macro'
import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './index.module.css'

function SideTag({ isOutside, className }: { isOutside: boolean; className?: string }) {
  return (
    <div
      className={classNames(styles['side-tag'], className, {
        'is-outside': isOutside,
      })}
    >
      {isOutside ? t`features_c2c_trade_trade_form_22225101646` : t`features_c2c_trade_trade_form_22225101647`}
    </div>
  )
}

export default SideTag

export function NetworkTag({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={classNames(styles['network-tag'], className)}>{children}</div>
}
