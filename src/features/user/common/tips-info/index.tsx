import Icon from '@/components/icon'
import styles from './index.module.css'

function UserTipsInfo({ slotContent }) {
  return (
    <div className={`user-tips ${styles.scoped}`}>
      <div className="icon">
        <Icon name="msg" />
      </div>
      <div className="slot">{slotContent}</div>
    </div>
  )
}

export default UserTipsInfo
