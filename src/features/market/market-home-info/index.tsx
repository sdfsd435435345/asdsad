import { useMarketListStore } from '@/store/market/market-list'
import { useCallback, useEffect } from 'react'
import { getHomeModuleTabApi, HomeModuleTabsEnum } from '@/constants/market/market-list/home-module'
import TabSwitch from '@/components/tab-switch'
import { onTradePairClickRedirectCommon } from '@/helper/market'
import Table from '@/components/table'
import { IHomeModuleTabsCommonResp } from '@/typings/api/market/market-list/home-module'
import { mergeTradePairWithSymbolInfo, sortByHelper } from '@/helper/market/market-list'
import { useWsSpotMarketTradePairSlow } from '@/hooks/features/market/common/market-ws/use-ws-market-trade-pair'
import { quoteVolumneTableSorter } from '@/constants/market/market-list'
import {
  useWsMarketFuturesUserFavListFullAmount,
  useWsMarketSpotUserFavListFullAmount,
} from '@/hooks/features/market/market-list/use-ws-market-spot-user-favourite-list'
import { FavTabs } from '@/constants/market/market-list/favorite-module'
import { link } from '@/helper/link'
import { getMarketFuturesFavPage, getMarketSpotFavPage } from '@/helper/route'
import { t } from '@lingui/macro'
import useReqeustMarketHelper from '@/hooks/features/market/common/use-request-market'
import commonStyles from '@/features/market/market-quatation/index.module.css'
import useApiAllCoinSymbolInfo from '@/hooks/features/market/common/use-api-all-coin-symbol-info'
import {
  getMarketHomeFavTableColumns,
  getMarketHomeTableColumns,
  getMarketHomeVolumnTableColumns,
  HomeTableFavHeader,
} from '../market-quatation/common/table-columns'
import styles from './index.module.css'
import { MarketFuturesFavoritesDefault, MarketSpotFavoritesDefault } from '../market-quatation/common/market-favorites'

export default function () {
  const { getTabsConfig, selectedTab, homeFavType, setTableData, ...store } = useMarketListStore().homeModuleState
  const resolvedData = useWsSpotMarketTradePairSlow({ apiData: store.tableData as IHomeModuleTabsCommonResp[] })
  const { resolvedData: spotFavData } = useWsMarketSpotUserFavListFullAmount({ apiParams: {} })
  const { resolvedData: futuresFavData } = useWsMarketFuturesUserFavListFullAmount({ apiParams: {} })
  const symbolInfo = useApiAllCoinSymbolInfo()

  const getTableDataByTab = (tab: HomeModuleTabsEnum) => {
    if (tab !== HomeModuleTabsEnum.fav) return resolvedData

    // limit to 10 favourite items
    if (homeFavType === FavTabs.Futures) return futuresFavData.slice(0, 10)
    else return spotFavData.slice(0, 10)
  }

  useEffect(() => {
    if (!selectedTab) return

    if (selectedTab === HomeModuleTabsEnum.topVolume) {
      store.setTableColumn(getMarketHomeVolumnTableColumns())
    } else if (selectedTab === HomeModuleTabsEnum.fav) {
      store.setTableColumn(getMarketHomeFavTableColumns())
    } else {
      store.setTableColumn(getMarketHomeTableColumns())
    }

    // getHomeModuleTabApi(selectedTab)({}).then(res => {
    //   if (res.isOk) {
    //     let data = res.data.list || []
    //     if (selectedTab === HomeModuleTabsEnum.topVolume) {
    //       data = sortByHelper(data, quoteVolumneTableSorter)
    //     }
    //     store.setTableData(data)
    //     return
    //   }

    //   store.setTableData([])
    // })
  }, [selectedTab])

  const apiRequest = (resolve, reject) => {
    getHomeModuleTabApi(selectedTab)({}).then(res => {
      if (res.isOk) {
        let data = res.data.list || []
        if (selectedTab === HomeModuleTabsEnum.topVolume) {
          return resolve(mergeTradePairWithSymbolInfo(sortByHelper(data, quoteVolumneTableSorter), symbolInfo))
        }

        return resolve(mergeTradePairWithSymbolInfo(data, symbolInfo))
      }

      return reject()
    })
  }

  // add apiStatus to handle tab change
  const { refreshCallback: refresh, apiStatus } = useReqeustMarketHelper({
    apiRequest,
    setApiData: setTableData,
    deps: [selectedTab, symbolInfo.length],
  })

  const tableData = getTableDataByTab(selectedTab)

  return (
    <div className={styles.scoped}>
      <div className="market-home-info-wrapper">
        <TabSwitch
          tabList={getTabsConfig() as any}
          defaultId={selectedTab}
          onTabChangeCallback={id => {
            store.setSelectedTab(id)
          }}
        />

        <div className={`${commonStyles['market-table-common']} market-table-home`}>
          {selectedTab === HomeModuleTabsEnum.fav && tableData.length === 0 ? (
            homeFavType === FavTabs.Spot ? (
              <>
                <HomeTableFavHeader />
                <MarketSpotFavoritesDefault />
              </>
            ) : (
              <>
                <HomeTableFavHeader />
                <MarketFuturesFavoritesDefault />
              </>
            )
          ) : (
            <>
              <Table
                apiStatus={apiStatus}
                onPullRefresh={refresh}
                showTableHeaderWhenEmpty
                sortable={false}
                data={tableData}
                columns={store.tableColumn}
                onRowClick={item => {
                  onTradePairClickRedirectCommon(item, 'kline')
                }}
              />
              {selectedTab === HomeModuleTabsEnum.fav && tableData.length >= 10 && (
                <div
                  onClick={() => {
                    homeFavType === FavTabs.Spot ? link(getMarketSpotFavPage()) : link(getMarketFuturesFavPage())
                  }}
                  className="fav-table-more"
                >{t`features_help_center_support_component_support_article_index_5101082`}</div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
