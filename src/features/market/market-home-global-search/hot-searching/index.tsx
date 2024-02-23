import { MarketSpotTradeSearchTableContent } from '@/features/market/market-quatation/common/market-list/market-list-table-content-trade'
import { getHotSearchingTableColumns } from '@/features/market/market-quatation/common/table-columns'
import { onTradePairClickRedirectCommon } from '@/helper/market'
import {
  useWsSpotMarketHotCurrency,
  useWsFuturesMarketHotCurrency,
} from '@/hooks/features/market/market-list/use-ws-market-hot-currency'
import { useMarketListStore } from '@/store/market/market-list'
import { t } from '@lingui/macro'
import commonStyles from '@/features/market/market-quatation/index.module.css'

export default function HotSearching({ from }: { from: 'trade' | 'kline' }) {
  const { resolvedData: data, setApiData, refreshCallback, apiStatus } = useWsSpotMarketHotCurrency() || []
  const store = useMarketListStore()

  return (
    <>
      <div className="hot-search-title content-title">{t`features_market_market_home_global_search_new_hot_searching_index_510295`}</div>

      <div className={`${commonStyles['market-table-common']} market-table-search-hot`}>
        <MarketSpotTradeSearchTableContent
          data={data}
          onRowClick={item => {
            if (from === 'trade') {
              store.spotMarketsTradeModule.setsearchHistory(item)
            } else {
              store.setGlobalSearchHistory(item)
            }
            onTradePairClickRedirectCommon(item as any, from === 'trade' ? 'trade' : 'kline')
          }}
          onPullRefresh={refreshCallback}
          setData={setApiData}
          apiStatus={apiStatus}
          columns={getHotSearchingTableColumns()}
        />
      </div>
    </>
  )
}

export function FuturesHotSearching({ from }: { from: 'trade' | 'kline' }) {
  const { resolvedData: data, setApiData, refreshCallback, apiStatus } = useWsFuturesMarketHotCurrency() || []
  const store = useMarketListStore()

  return (
    <>
      <div className="hot-search-title content-title">{t`features_market_market_home_global_search_new_hot_searching_index_510295`}</div>

      <div className={`${commonStyles['market-table-common']} market-table-search-hot`}>
        <MarketSpotTradeSearchTableContent
          data={data}
          onRowClick={item => {
            if (from === 'trade') {
              store.futuresMarketsTradeModule.setsearchHistory(item)
            } else {
              store.setGlobalSearchHistory(item)
            }
            onTradePairClickRedirectCommon(item as any, from === 'trade' ? 'trade' : 'kline')
          }}
          onPullRefresh={refreshCallback}
          setData={setApiData}
          apiStatus={apiStatus}
          columns={getHotSearchingTableColumns()}
        />
      </div>
    </>
  )
}
