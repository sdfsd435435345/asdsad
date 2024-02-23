import Table from '@/components/table'
import {
  FuturesMarketBaseCurrenyEnum,
  SpotMarketSectorCategoryEnum,
} from '@/constants/market/market-list/market-module'
import {
  getMarketGlobalSearchTableColumns,
  getMarketListTradeTableColumns,
} from '@/features/market/market-quatation/common/table-columns'
import { onTradePairClickFuturesRedirect, onTradePairClickRedirectCommon } from '@/helper/market'
import useWsMarketSearchAll from '@/hooks/features/market/market-list/use-ws-market-search-all'
import useWsMarketTradePairList, {
  useWsMarketFuturesTradePair,
} from '@/hooks/features/market/market-list/use-ws-market-trade-pair-list'
import { useMarketStore } from '@/store/market'
import { useContractMarketStore } from '@/store/market/contract'
import { useMarketListStore } from '@/store/market/market-list'
import commonStyles from '@/features/market/market-quatation/index.module.css'

// searh spot trade default list
export default function MarketListTradeTableContent(props: { to?: 'kline' | 'trade' }) {
  const upStore = useMarketStore()
  const store = useMarketListStore().spotMarketsTradeModule
  const buyCoinId = store.selectedBaseCurrencyFilter
  const conceptId = store.selectedCategroyFilter

  const {
    resolvedData: data,
    setApiData: setData,
    refresh,
    apiStatus,
  } = useWsMarketTradePairList({ apiParams: { buyCoinId, conceptId }, sorter: store.currentSorter })

  return (
    <MarketSpotTradeSearchTableContent
      data={data}
      setData={setData}
      onRowClick={item => {
        store.setsearchHistory(item)
        store.resetSearchState()
        onTradePairClickRedirectCommon(item, props.to)
      }}
      onPullRefresh={refresh}
      apiStatus={apiStatus}
      defaultSorter={store.currentSorter}
      setSorter={store.setTableSorter}
      currentCoin={upStore.currentCoin}
    />
  )
}

// search futures trade default list
export function MarketListTradeFuturesTableContent(props: { to?: 'kline' | 'trade' }) {
  const upStore = useContractMarketStore()
  const store = useMarketListStore().futuresMarketsTradeModule
  const conceptId = !Object.values(FuturesMarketBaseCurrenyEnum).includes(store.selectedBaseCurrencyFilter)
    ? store.selectedBaseCurrencyFilter
    : undefined

  const {
    resolvedData: data,
    setApiData: setData,
    refresh,
    apiStatus,
  } = useWsMarketFuturesTradePair({ apiParams: { conceptId }, sorter: store.defaultSorter })

  return (
    <MarketSpotTradeSearchTableContent
      data={data}
      setData={setData}
      onRowClick={item => {
        store.setsearchHistory(item)
        store.resetSearchState()
        onTradePairClickFuturesRedirect(item, props.to)
      }}
      onPullRefresh={refresh}
      apiStatus={apiStatus}
      defaultSorter={store.defaultSorter}
      setSorter={store.setTableSorter}
      currentCoin={upStore.currentCoin}
    />
  )
}

// search result
export function MarketSpotTradeSearchSpotTable({ from }: { from: 'kline' | 'trade' }) {
  const upStore = useMarketStore()
  const store = useMarketListStore().spotMarketsTradeModule
  const {
    resolvedAllData: data,
    setApiData: setData,
    apiStatus,
    refreshCallback,
  } = useWsMarketSearchAll({ apiParams: { symbolName: store.searchInput } })
  const spotData = data.spot

  return (
    <MarketSpotTradeSearchTableContent
      data={spotData}
      apiStatus={apiStatus}
      setData={setData}
      onRowClick={item => {
        store.setsearchHistory(item)
        store.resetSearchState()
        onTradePairClickRedirectCommon(item, from)
      }}
      onPullRefresh={refreshCallback}
      defaultSorter={store.currentSorter}
      setSorter={store.setTableSorter}
      currentCoin={upStore.currentCoin}
    />
  )
}

export function MarketTradeSearchFuturesTradeTable({ from }: { from: 'kline' | 'trade' }) {
  const upStore = useContractMarketStore()
  const store = useMarketListStore().futuresMarketsTradeModule
  const {
    resolvedAllData: data,
    setApiData: setData,
    apiStatus,
    refreshCallback,
  } = useWsMarketSearchAll({ apiParams: { symbolName: store.searchInput } })
  const perpetualData = data.perpetual || []

  return (
    <MarketSpotTradeSearchTableContent
      data={perpetualData}
      apiStatus={apiStatus}
      setData={setData}
      onRowClick={item => {
        store.setsearchHistory(item)
        store.resetSearchState()
        onTradePairClickRedirectCommon(item, from)
      }}
      onPullRefresh={refreshCallback}
      defaultSorter={store.currentSorter}
      setSorter={store.setTableSorter}
      currentCoin={upStore.currentCoin}
    />
  )
}

export function MarketSpotTradeSearchTableContent({ data, onRowClick, onPullRefresh, setData, apiStatus, ...rest }) {
  return (
    <div className={`${commonStyles['market-table-common']} market-table-trade`}>
      <Table
        data={data}
        setData={setData}
        setSorter={rest.setSorter}
        defaultSorter={rest.defaultSorter}
        sortable
        columns={rest.columns || getMarketListTradeTableColumns()}
        onRowClick={onRowClick}
        onPullRefresh={onPullRefresh}
        apiStatus={apiStatus}
        rowHighlightOnEqualCallback={item => {
          if (item.id === rest?.currentCoin?.id) return true
          return false
        }}
      />
    </div>
  )
}

export function MarketGlobalSearchTableContent({ data, onRowClick, onPullRefresh, apiStatus, setData, sortable }) {
  const contractStore = useContractMarketStore()

  return (
    <div className={`${commonStyles['market-table-common']} market-table-trade market-table-global-search`}>
      <Table
        data={data}
        setData={setData}
        apiStatus={apiStatus}
        sortable={sortable}
        columns={getMarketGlobalSearchTableColumns({ futuresCurrencyType: contractStore.currencyStandardType })}
        onRowClick={onRowClick}
        onPullRefresh={onPullRefresh}
      />
    </div>
  )
}
