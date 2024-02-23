import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { formatTradePair } from '@/helper/market'
import styles from './index.module.css'

function PriceVolColumn({ item }: { item: YapiGetV1TradePairListData }) {
  return (
    <span className={styles.scoped}>
      <span>{formatTradePair(item).lastWithDiffTarget()}</span>
      <span className="text-xs">{formatTradePair(item).chg()}</span>
    </span>
  )
}

export default PriceVolColumn
