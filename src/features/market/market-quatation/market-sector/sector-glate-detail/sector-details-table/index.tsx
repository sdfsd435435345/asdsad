import Table from '@/components/table'
import {
  useWsFuturesMarketSectorTradePairListWithSymbolInfo,
  useWsMarketSectorTradePairListWithSymbolInfo,
} from '@/hooks/features/market/market-list/use-ws-market-trade-pair-list'
import { Tabs } from 'react-vant'
import { useEffect, useState } from 'react'
import { MarketTabsEnum, getSectorTabsConfig } from '@/constants/market/market-list/market-module'
import { useMarketListStore } from '@/store/market/market-list'
import { quoteVolumneTableSorter } from '@/constants/market/market-list'
import { getSectorHotCurrencyTableColumn } from '../../../common/table-columns'
import styles from './index.module.css'

function SectorTable({ conceptId, apiRequest }) {
  const { resolvedData: data, setApiData: setData, refresh, apiStatus } = apiRequest({ apiParams: { conceptId } })
  return (
    <Table
      data={data as any}
      setData={setData as any}
      sortable
      columns={getSectorHotCurrencyTableColumn()}
      onPullRefresh={refresh}
      apiStatus={apiStatus}
      defaultSorter={quoteVolumneTableSorter}
      showTableHeaderWhenEmpty
    />
  )
}

const SpotSectorTable = props => <SectorTable {...props} apiRequest={useWsMarketSectorTradePairListWithSymbolInfo} />
const FuturesSectorTable = props => (
  <SectorTable {...props} apiRequest={useWsFuturesMarketSectorTradePairListWithSymbolInfo} />
)

export default function ({ conceptId }) {
  const { marketSectorActiveTab } = useMarketListStore()
  const [currentTab, setcurrentTab] = useState(marketSectorActiveTab)

  useEffect(() => {
    setcurrentTab(marketSectorActiveTab)
  }, [marketSectorActiveTab])

  return (
    <div className={styles.scoped}>
      <Tabs onChange={name => setcurrentTab(name as MarketTabsEnum)} active={currentTab}>
        {getSectorTabsConfig().map((tab, index) =>
          tab.id === MarketTabsEnum.spot ? (
            <Tabs.TabPane key={tab.id} index={index} name={tab.id} title={tab.title}>
              <SpotSectorTable conceptId={conceptId} />
            </Tabs.TabPane>
          ) : (
            <Tabs.TabPane key={tab.id} index={index} name={tab.id} title={tab.title}>
              <FuturesSectorTable conceptId={conceptId} />
            </Tabs.TabPane>
          )
        )}
      </Tabs>
    </div>
  )
}
