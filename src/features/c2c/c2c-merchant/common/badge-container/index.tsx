import { ReactNode } from 'react'
import styles from './index.module.css'

type TBadgeContainer = {
  badgeIcon: ReactNode
  children: ReactNode
  className?: string
}

function BadgeContainer({ badgeIcon, children, className }: TBadgeContainer) {
  return (
    <div className={`${styles.scoped} ${className}`}>
      {children}
      <div className="badge-icon">{badgeIcon}</div>
    </div>
  )
}

export default BadgeContainer
