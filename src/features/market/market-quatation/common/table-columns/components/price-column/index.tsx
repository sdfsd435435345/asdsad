import { formatTradePair } from '@/helper/market'
import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'

function PriceColumn({
  item,
  hasBaseCurrencyPrice = false,
}: {
  item: YapiGetV1TradePairListData
  hasBaseCurrencyPrice?: boolean
}) {
  return (
    <span className="flex flex-col last-price-column">
      <span className="text-sm">{formatTradePair(item).lastWithDiffTarget()}</span>
      {hasBaseCurrencyPrice && (
        <span className="text-text_color_02 text-xs">{formatTradePair(item).lastByUserPreference()}</span>
      )}
    </span>
  )
}

export default PriceColumn
