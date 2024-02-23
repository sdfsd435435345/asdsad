import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { NoticeBar } from 'react-vant'
import styles from './index.module.css'

function MerchantNoticeBar() {
  return (
    <NoticeBar
      className={styles.scoped}
      wrapable
      text={t`features_c2c_c2c_merchant_merchant_notice_bar_index_225101381`}
      leftIcon={<Icon name="msg" />}
    />
  )
}

export default MerchantNoticeBar
