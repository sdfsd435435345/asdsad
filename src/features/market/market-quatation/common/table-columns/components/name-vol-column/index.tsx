import CollectStar from '@/components/collect-star'
import { ComingSoonColumnWrapper } from '@/features/market/market-quatation/common/table-columns/components/comming-soon-wrapper'
import { convertToMillions, getQuoteDisplayName } from '@/helper/market'
import { YapiGetV1FavouriteListData } from '@/typings/yapi/FavouriteListV1GetApi'
import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { t } from '@lingui/macro'
import styles from './index.module.css'

function NameVolColumn({ item }: { item: YapiGetV1TradePairListData }) {
  return (
    <span className={styles.scoped}>
      <CollectStar hideUnCheck {...(item as unknown as YapiGetV1FavouriteListData)} needWrap={false} />
      <span>
        <span>{getQuoteDisplayName(item, false, false, 'kline')}</span>

        <span className="text-xs text-text_color_02">
          <ComingSoonColumnWrapper item={item}>
            {t`store_market_market_list_spotmarkets_columnschema_2429`} {convertToMillions(item.quoteVolume, false)}
          </ComingSoonColumnWrapper>
        </span>
      </span>
    </span>
  )
}

export default NameVolColumn
