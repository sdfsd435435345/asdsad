import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import styles from './index.module.css'

const InmailNotice = () => {
  return (
    <div className={`${styles.scoped} inmail-notice-wrap`}>
      <div className="inmail-notice-left">
        <Icon name="msg" />
      </div>
      <div className="inmail-notice-middle">{t`features_inmail_component_inmail_notice_index_5101258`}</div>
      <div className="inmail-notice-button">{t`user.account_security.google_01`}</div>
      <div className="inmail-notice-right">
        <Icon name="prompt_close" />
      </div>
    </div>
  )
}
export default InmailNotice
