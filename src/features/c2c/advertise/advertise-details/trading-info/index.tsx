/**
 * 广告单详情 - 交易信息
 */
import { t } from '@lingui/macro'
import { formatCurrency } from '@/helper/decimal'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import styles from './index.module.css'

function TradingInfo() {
  const {
    advertiseDetails: { totalOrderAmount = '--', coinName = '--', orderCount = '--', customerCnt = '--' },
  } = useC2CAdvertiseStore()
  return (
    <div className={styles['trading-info-root']}>
      <span className="title">{t`features_c2c_advertise_advertise_details_trading_info_index_pt_ydb_1vikfztui-zlr8`}</span>

      <div className="info">
        <span className="info-label">{t`features_c2c_advertise_advertise_history_history_list_index_yu157mewrwbjhrzxxvo7v`}</span>
        <span className="info-value">
          {formatCurrency(totalOrderAmount) || '--'} {coinName}
        </span>
      </div>

      <div className="info">
        <span className="info-label">{t`features_c2c_advertise_advertise_history_history_list_index_uzumpnuwq0o0-obnpopcw`}</span>
        <span className="info-value">{formatCurrency(orderCount) || '--'}</span>
      </div>

      <div className="info">
        <span className="info-label">{t`features_c2c_advertise_advertise_history_history_list_index_uwloa3sb5t3xljfkhobsi`}</span>
        <span className="info-value">{formatCurrency(customerCnt) || '--'}</span>
      </div>
    </div>
  )
}

export { TradingInfo }
