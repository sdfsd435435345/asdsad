import NoDataImage from '@/components/no-data-image'
import { ApiStatusEnum } from '@/constants/market/market-list'
import { getGlobalSearchTypesList, GlobalSearchTypesMappingEnum } from '@/constants/market/market-list/market-module'
import { MarketListPullRefresh } from '@/features/market/market-quatation/common/market-list/market-list-pull-refresh'
import { MarketGlobalSearchTableContent } from '@/features/market/market-quatation/common/market-list/market-list-table-content-trade'
import useWsMarketSearchAll from '@/hooks/features/market/market-list/use-ws-market-search-all'
import { useMarketListStore } from '@/store/market/market-list'
import { YapiGetV1TradePairSearchData } from '@/typings/yapi/TradePairSearchV1GetApi'
import { t } from '@lingui/macro'
import { isEmpty } from 'lodash'
import { useEffect } from 'react'
import { onTradePairClickRedirectCommon } from '../../../../helper/market'
import MarketListGlobalSearchTableFilterTab from './market-list-global-search-table-filter-tab'

export function MarketGlobalSearchResult() {
  const store = useMarketListStore()
  const {
    resolvedAllData: data,
    setApiData,
    refreshCallback,
    apiStatus,
  } = useWsMarketSearchAll({ apiParams: { symbolName: store.searchInput } })
  const categories = getGlobalSearchTypesList()
  const selectedCategory = categories.find(x => x.id === store.globalSearchSelectedTabId)

  useEffect(() => {
    if (!store.searchInput) {
      store.resetSearchState()
    }
  }, [store.searchInput])

  return (
    <div className="global-search-content">
      <div className="search-result-tab">
        <MarketListGlobalSearchTableFilterTab
          selectedTab={{ id: store.globalSearchSelectedTabId }}
          onSelectChange={e => {
            store.setGlobalSearchSelectedTabId(e)
          }}
          data={data}
          apiStatus={apiStatus}
        />
      </div>

      <MarketGlobalSearchResultContent
        data={data}
        setApiData={_data => {
          if (!selectedCategory?.id) return
          setApiData(_prev => {
            return {
              ..._prev,
              [selectedCategory?.id]: _data,
            }
          })
        }}
        refreshCallback={refreshCallback}
        apiStatus={apiStatus}
      />
    </div>
  )
}

export const MarketGlobalSearchResultContent = ({
  data,
  setApiData,
  refreshCallback,
  apiStatus,
}: {
  data: Partial<YapiGetV1TradePairSearchData>
  [x: string]: any
}) => {
  const store = useMarketListStore()
  const categories = getGlobalSearchTypesList()
  const isAllTab = store.globalSearchSelectedTabId === GlobalSearchTypesMappingEnum.all

  if (isAllTab) {
    // todo-leo check if data is in loading state
    const isAllEmpty = isEmpty(data[GlobalSearchTypesMappingEnum.all])
    if (isAllEmpty && apiStatus === ApiStatusEnum.succeed)
      return (
        <MarketListPullRefresh onRefreshCallback={refreshCallback}>
          <NoDataImage footerText={t`user.search_area_03`} />
        </MarketListPullRefresh>
      )

    return (
      <div className="search-result-content">
        <div className="search-result-all">
          <MarketListPullRefresh onRefreshCallback={refreshCallback}>
            {categories.slice(1).map((item, index) => {
              const categoryData = data[item.id]
              if (isEmpty(categoryData)) return <div className="empty" key={item.id}></div>
              return (
                <div className="group-wrapper" id={item.id} key={item.id}>
                  <div className="category-title">{item.title}</div>
                  <div className="search-result-all-table">
                    {/* single category data table */}
                    <MarketGlobalSearchTableContent
                      data={categoryData}
                      setData={setApiData}
                      apiStatus={apiStatus}
                      onRowClick={item => {
                        store.setGlobalSearchHistory(item)
                        store.resetSearchState()
                        onTradePairClickRedirectCommon(item, 'kline')
                      }}
                      // 整体的搜索结果局部不需要刷新
                      onPullRefresh={null}
                      sortable={false}
                    />
                  </div>
                </div>
              )
            })}
          </MarketListPullRefresh>
        </div>
      </div>
    )
  }

  const selectedCategory = categories.find(x => x.id === store.globalSearchSelectedTabId)
  const categoryData = selectedCategory?.id && data[selectedCategory.id]

  return (
    <div className="search-result-content">
      <div className="search-result-single-type">
        {!isEmpty(categoryData) ? (
          <MarketGlobalSearchTableContent
            data={categoryData}
            setData={setApiData}
            apiStatus={apiStatus}
            onRowClick={item => {
              store.setGlobalSearchHistory(item)
              store.resetSearchState()
              onTradePairClickRedirectCommon(item, 'kline')
            }}
            onPullRefresh={refreshCallback}
            sortable
          />
        ) : (
          <NoDataImage footerText={t`user.search_area_03`} />
        )}
      </div>
    </div>
  )
}
