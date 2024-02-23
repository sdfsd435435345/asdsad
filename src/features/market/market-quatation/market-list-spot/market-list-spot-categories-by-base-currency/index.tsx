import { getCategoriesByBaseCurrency } from '@/apis/market/market-list'
import { useMarketListStore } from '@/store/market/market-list'
import {
  getCategoryTitleById,
  SpotMarketBaseCurrenyEnum,
  spotMarketsCategoryFilter,
  SpotMarketSectorCategoryEnum,
} from '@/constants/market/market-list/market-module'
import { Tabs } from 'react-vant'
import { omitBy, isEmpty } from 'lodash'
import { useSafeState } from 'ahooks'
import useReqeustMarketHelper from '@/hooks/features/market/common/use-request-market'
import { swrKeyMarketSpotCategoriesByBaseCurrency } from '@/helper/cache'

export const mockMarketListCategoryByCurrencyData = [
  {
    name: 'NFT',
    icon: null,
    id: 7,
  },
]

export function useSpotMarketCategoryByBaseCurrency(selectedBaseCurrencyFilter) {
  const [state, setState] = useSafeState<any[]>([])
  const apiParams = omitBy({ buyCoinId: selectedBaseCurrencyFilter } || {}, x => !x) as any

  useReqeustMarketHelper({
    apiRequest: (resolve, reject) => {
      getCategoriesByBaseCurrency(apiParams).then(res => {
        let resolvedTabs: any[] = []

        if (res.isOk) {
          const newTabs = (res?.data?.list || []).map(x => {
            return {
              id: x.id,
              title: x.name,
            }
          })
          resolvedTabs = [...resolvedTabs, ...newTabs]
          return resolve(resolvedTabs)
        }

        reject()
      })
    },
    setApiData: setState,
    deps: [apiParams.buyCoinId],
    apiPreValidation: () => {
      if (
        isEmpty(apiParams) ||
        selectedBaseCurrencyFilter === SpotMarketBaseCurrenyEnum.favorites ||
        selectedBaseCurrencyFilter === SpotMarketSectorCategoryEnum.total
      ) {
        return false
      }

      return true
    },
    cacheKey: swrKeyMarketSpotCategoriesByBaseCurrency,
  })

  return state
}

export function SpotCategoriesByBaseCurrency() {
  const store = useMarketListStore().spotMarketsModule
  const tabList = [
    ...spotMarketsCategoryFilter(),
    ...useSpotMarketCategoryByBaseCurrency(store.selectedBaseCurrencyFilter),
  ]

  if (isEmpty(tabList)) return null

  return (
    <Tabs
      align="start"
      className="tabs-category-by-currency"
      active={store.selectedCategroyFilter || SpotMarketSectorCategoryEnum.total}
      defaultActive={store.selectedCategroyFilter}
      onChange={store.setSelectedCategroyFilter}
      type="jumbo"
    >
      {tabList.map(({ title, id }) => (
        <Tabs.TabPane title={getCategoryTitleById(id) || title} name={id} key={id} />
      ))}
    </Tabs>
  )
}

export function SpotTradeCategoriesByBaseCurrency() {
  const store = useMarketListStore().spotMarketsTradeModule
  const tabList = [
    ...spotMarketsCategoryFilter(),
    ...useSpotMarketCategoryByBaseCurrency(store.selectedBaseCurrencyFilter),
  ]

  if (isEmpty(tabList)) return null

  return (
    <Tabs
      align="start"
      className="tabs-category-by-currency"
      active={store.selectedCategroyFilter || SpotMarketSectorCategoryEnum.total}
      defaultActive={store.selectedCategroyFilter || SpotMarketSectorCategoryEnum.total}
      onChange={store.setSelectedCategroyFilter}
      type="line"
    >
      {tabList.map(({ title, id }) => (
        <Tabs.TabPane title={getCategoryTitleById(id) || title} name={id} key={id} />
      ))}
    </Tabs>
  )
}
