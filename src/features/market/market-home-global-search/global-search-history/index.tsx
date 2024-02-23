import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { useMarketListStore } from '@/store/market/market-list'
import { getQuoteDisplayName, onTradePairClickRedirectCommon } from '@/helper/market'
import { Toast } from 'react-vant'

export default function MarketGlobalSearchHistory({ from }: { from: 'home' | 'trade' }) {
  const store = useMarketListStore()
  const showList = store.globalSearchHistory

  if (!showList || showList.length === 0) return null

  return (
    <>
      <div className="remove-icon-row content-title">
        {t`features_market_market_home_global_search_new_coin_selected_history_index_510294`}
        <div
          className="remove-icon"
          onClick={() => {
            store.cleanGlobalSearchHistory()
            Toast.info({ message: t`features_market_market_home_global_search_global_search_history_index_8ugzxnu1pf` })
          }}
        >
          <Icon name="delete" hasTheme />
        </div>
      </div>

      <div className="spot-coin-selected-list">
        {showList.map((item: any, index) => {
          return (
            <div
              className="item-block"
              key={index}
              onClick={() => {
                store.setGlobalSearchHistory(item)
                store.resetSearchState()
                onTradePairClickRedirectCommon(item, from === 'trade' ? 'trade' : 'kline')
              }}
            >
              <span className="trade-pair">{getQuoteDisplayName(item, true, true, 'kline')}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export function MarketSpotTradeSearchHistory({ from }: { from: 'home' | 'trade' }) {
  const store = useMarketListStore().spotMarketsTradeModule
  const showList = store.searchHistory

  if (!showList || showList.length === 0) return null

  return (
    <>
      <div className="remove-icon-row content-title">
        {t`features_market_market_home_global_search_new_coin_selected_history_index_510294`}
        <div
          className="remove-icon"
          onClick={() => {
            store.cleanSearchHistory()
          }}
        >
          <Icon name="delete" hasTheme />
        </div>
      </div>

      <div className="spot-coin-selected-list">
        {showList.map((item: any, index) => {
          return (
            <div
              className="item-block"
              key={index}
              onClick={() => {
                store.setsearchHistory(item)
                store.resetSearchState()
                onTradePairClickRedirectCommon(item, from === 'trade' ? 'trade' : 'kline')
              }}
            >
              <span className="trade-pair">{getQuoteDisplayName(item, true, true, 'kline')}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export function MarketFuturesTradeSearchHistory({ from }: { from: 'home' | 'trade' }) {
  const store = useMarketListStore().futuresMarketsTradeModule
  const showList = store.searchHistory

  if (!showList || showList.length === 0) return null

  return (
    <>
      <div className="remove-icon-row content-title">
        {t`features_market_market_home_global_search_new_coin_selected_history_index_510294`}
        <div
          className="remove-icon"
          onClick={() => {
            store.cleanSearchHistory()
          }}
        >
          <Icon name="delete" hasTheme />
        </div>
      </div>

      <div className="spot-coin-selected-list">
        {showList.map((item: any, index) => {
          return (
            <div
              className="item-block"
              key={index}
              onClick={() => {
                store.setsearchHistory(item)
                store.resetSearchState()
                onTradePairClickRedirectCommon(item, from === 'trade' ? 'trade' : 'kline')
              }}
            >
              <span className="trade-pair">{getQuoteDisplayName(item, true, true, 'kline')}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
