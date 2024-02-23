import Table from '@/components/table'
import {
  useWsMarketFuturesUserFavListFullAmount,
  useWsMarketSpotUserFavListFullAmount,
} from '@/hooks/features/market/market-list/use-ws-market-spot-user-favourite-list'
import { onTradePairClickFuturesRedirect, onTradePairClickRedirectCommon } from '@/helper/market'
import { ICommonTradePairType } from '@/typings/api/market'
import { useMarketListStore } from '@/store/market/market-list'
import { useMarketStore } from '@/store/market'
import {
  getMarketListTableColumns,
  getMarketListTradeTableColumns,
} from '@/features/market/market-quatation/common/table-columns'
import { useContractMarketStore } from '@/store/market/contract'
import { contractFavFn, spotFavFn } from '@/helper/market/market-favorite'
import commonStyles from '@/features/market/market-quatation/index.module.css'

export function MarketSpotListTableFavourites({ from = 'market-list' }: { from: 'trade' | 'market-list' }) {
  const {
    resolvedData: data,
    setState: setData,
    apiStatus,
    refreshCallback,
  } = useWsMarketSpotUserFavListFullAmount({ apiParams: {} })
  const store = useMarketListStore()
  const currentCoin = useMarketStore().currentCoin
  const { getFavList } = spotFavFn

  return (
    <div className={`${commonStyles['market-table-common']} market-table-trade market-table-fav`}>
      <Table
        // reset list to user fav list order
        setSorter={sortState => !sortState && getFavList().then(res => setData(res))}
        data={data}
        setData={setData}
        apiStatus={apiStatus}
        sortable
        columns={from === 'market-list' ? getMarketListTableColumns() : getMarketListTradeTableColumns()}
        onRowClick={item => {
          store.setGlobalSearchHistory(item)
          onTradePairClickRedirectCommon(
            item as any as ICommonTradePairType,
            from === 'market-list' ? 'kline' : 'trade'
          )
        }}
        onPullRefresh={refreshCallback}
        rowHighlightOnEqualCallback={item => {
          if (from === 'trade') {
            if (item.id === currentCoin.id) return true
            return false
          }
          return false
        }}
      />
    </div>
  )
}

export function MarketFuturesTradeListTableFavourites() {
  const {
    resolvedData: data,
    setState: setData,
    apiStatus,
    refreshCallback,
  } = useWsMarketFuturesUserFavListFullAmount({ apiParams: {} })
  const store = useMarketListStore().futuresMarketsTradeModule
  const currentCoin = useMarketStore().currentCoin

  return (
    <div className={`${commonStyles['market-table-common']} market-table-trade market-table-fav`}>
      <Table
        data={data}
        setData={setData}
        apiStatus={apiStatus}
        sortable
        columns={getMarketListTradeTableColumns()}
        onRowClick={item => {
          onTradePairClickFuturesRedirect(item as any as ICommonTradePairType, 'trade')
        }}
        onPullRefresh={refreshCallback}
        rowHighlightOnEqualCallback={item => {
          if (item.id === currentCoin.id) return true
          return false
        }}
      />
    </div>
  )
}

export function MarketFuturesListTableFavourites({ from = 'market-list' }: { from: 'trade' | 'market-list' }) {
  const {
    resolvedData: data,
    setState: setData,
    apiStatus,
    refreshCallback,
  } = useWsMarketFuturesUserFavListFullAmount({ apiParams: {} })
  const store = useMarketListStore()
  const currentCoin = useContractMarketStore().currentCoin
  const { getFavList } = contractFavFn

  return (
    <div className={`${commonStyles['market-table-common']} market-table-trade market-table-fav`}>
      <Table
        // reset list to user fav list order
        setSorter={sortState => !sortState && getFavList().then(res => setData(res))}
        data={data}
        setData={setData}
        apiStatus={apiStatus}
        sortable
        columns={from === 'market-list' ? getMarketListTableColumns() : getMarketListTradeTableColumns()}
        onRowClick={item => {
          // store.setGlobalSearchHistory(item)
          onTradePairClickFuturesRedirect(
            item as any as ICommonTradePairType,
            from === 'market-list' ? 'kline' : 'trade'
          )
        }}
        onPullRefresh={refreshCallback}
        rowHighlightOnEqualCallback={item => {
          if (from === 'trade') {
            if (item.id === currentCoin.id) return true
            return false
          }
          return false
        }}
      />
    </div>
  )
}
