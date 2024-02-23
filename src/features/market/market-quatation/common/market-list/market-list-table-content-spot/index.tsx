import Table from '@/components/table'
import { GuideMapShowEnum } from '@/constants/common'
import { FuturesMarketBaseCurrenyEnum } from '@/constants/market/market-list/market-module'
import MarketListSpotIntro from '@/features/market/market-quatation/common/market-list/market-list-table-content-spot/intro-market-spot'
import { getMarketListTableColumns } from '@/features/market/market-quatation/common/table-columns'
import { onTradePairClickRedirectCommon } from '@/helper/market'
import useWsMarketTradePairList, {
  useWsMarketFuturesTradePair,
} from '@/hooks/features/market/market-list/use-ws-market-trade-pair-list'
import { useMarketListStore } from '@/store/market/market-list'
import { useBaseGuideMapStore } from '@/store/server'

export default function MarketListSpotTableContent() {
  const { guideMap } = useBaseGuideMapStore()
  const isShowGuideIntro = guideMap.market_page === GuideMapShowEnum.yes
  const store = useMarketListStore().spotMarketsModule
  const buyCoinId = store.selectedBaseCurrencyFilter
  const conceptId = store.selectedCategroyFilter

  const {
    resolvedData: data,
    setApiData: setData,
    refresh,
    apiStatus,
  } = useWsMarketTradePairList({ apiParams: { buyCoinId, conceptId }, sorter: store.currentSorter })

  return (
    <>
      {isShowGuideIntro && <MarketListSpotIntro apiStatus={apiStatus} data={data} />}

      <Table
        data={data}
        setData={setData}
        apiStatus={apiStatus}
        sortable
        setSorter={store.setTableSorter}
        defaultSorter={store.defaultSorter}
        columns={getMarketListTableColumns()}
        onRowClick={item => {
          onTradePairClickRedirectCommon(item, 'kline')
        }}
        onPullRefresh={refresh}
      />
    </>
  )
}

export function MarketListFuturesTableContent() {
  const store = useMarketListStore().futuresMarketsModule
  const conceptId =
    store.selectedBaseCurrencyFilter !== FuturesMarketBaseCurrenyEnum.total
      ? store.selectedBaseCurrencyFilter
      : undefined

  const {
    resolvedData: data,
    setApiData: setData,
    refresh,
    apiStatus,
  } = useWsMarketFuturesTradePair({
    apiParams: { conceptId },
    sorter: store.currentSorter,
  })

  return (
    <Table
      data={data}
      setData={setData}
      apiStatus={apiStatus}
      sortable
      defaultSorter={store.defaultSorter}
      setSorter={store.setTableSorter}
      columns={getMarketListTableColumns()}
      onRowClick={item => {
        onTradePairClickRedirectCommon(item, 'kline')
      }}
      onPullRefresh={refresh}
    />
  )
}
