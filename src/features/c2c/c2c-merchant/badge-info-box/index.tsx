import BadgeContainer from '../common/badge-container'
import styles from './index.module.css'

function BadgeInfoBox({ badgeIcon, title, subtitle, styleIcon }) {
  return (
    <BadgeContainer className={styles.scoped} badgeIcon={styleIcon}>
      {badgeIcon}
      <div className="flex flex-col text-left space-y-1.5">
        <span className="text-text_color_01 text-base font-medium">{title}</span>
        <span className="text-text_color_02 text-sm">{subtitle}</span>
      </div>
    </BadgeContainer>
  )
}

export default BadgeInfoBox
