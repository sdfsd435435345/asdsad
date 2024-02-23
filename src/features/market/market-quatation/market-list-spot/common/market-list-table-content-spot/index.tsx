import Table from '@/components/table'
import { getMarketListTableColumns } from '@/features/market/market-quatation/common/table-columns'
import { onTradePairClickRedirect } from '@/helper/market'
import useWsMarketTradePairList from '@/hooks/features/market/market-list/use-ws-market-trade-pair-list'
import { useMarketListStore } from '@/store/market/market-list'

export default function MarketListSpotTableContent() {
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
    <Table
      data={data}
      setData={setData}
      apiStatus={apiStatus}
      sortable
      setSorter={store.setTableSorter}
      defaultSorter={store.currentSorter}
      columns={getMarketListTableColumns()}
      onRowClick={item => {
        onTradePairClickRedirect(item, 'kline')
      }}
      onPullRefresh={refresh}
    />
  )
}
