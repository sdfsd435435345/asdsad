import { t } from '@lingui/macro'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import styles from '../index.module.css'

function LatestPriceTableHeader() {
  const {
    advertiseForm: {
      coin: { coinName = '--' },
      currency: { currencyName = '--' },
    },
  } = useC2CAdvertiseStore()
  return (
    <div className={`latest-price-table-header ${styles['latest-price-table-header']}`}>
      <div className="latest-price-table-header-wrap">
        <div className="gear">
          <label>{t`features_c2c_advertise_post_advertise_latest_price_table_table_header_index_22222222225101692`}</label>
        </div>
        <div className="price">
          <label>
            {t`future.funding-history.index.table-type.price`}
            {`(${currencyName})`}
          </label>
        </div>
        <div className="quantity">
          <label>
            {t`features/trade/spot/price-input-0`}
            {`(${coinName})`}
          </label>
        </div>
      </div>
    </div>
  )
}

export default LatestPriceTableHeader
