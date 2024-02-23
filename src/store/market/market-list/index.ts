import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import { devtools } from 'zustand/middleware'
import { setStateByModulePath } from '@/helper/store'
import {
  GlobalSearchTypesMappingEnum,
  MarketLisModulesEnum,
  MarketListRouteEnum,
  MarketTabsEnum,
} from '@/constants/market/market-list/market-module'
import {
  getMarketGlobalSearchCache,
  getMarketIsClosedBannerNotifactionCache,
  setMarketGlobalSearchCache,
  setMarketIsClosedBannerNotifactionCache,
} from '@/helper/cache'
import { SelectUIOptionType } from '@/typings/api/market/market-list'
import { uniqBy } from 'lodash'
import futuresModule from '@/store/market/market-list/futures-module'
import futuresTradeModule from '@/store/market/market-list/futures-trade-module'
import spotTradeModule from '@/store/market/market-list/spot-trade-module'
import spotModule from './spot-module'
import homeModuleState from './home-module-state'

export type IMarketListBaseStore = ReturnType<typeof getBaseStore>

function getBaseStore(set, get) {
  const boundSet = setStateByModulePath.bind(null, set, [])
  const isClosedNotification = getMarketIsClosedBannerNotifactionCache()

  return {
    isFavEditOpen: false,
    toggleFavEdit: () => boundSet('isFavEditOpen', !get().isFavEditOpen),

    activeModule: MarketLisModulesEnum.spotMarkets,
    setActiveModule(module: MarketLisModulesEnum) {
      boundSet('activeModule', module || MarketListRouteEnum.spot)
    },

    baseCurrenciesResp: [] as SelectUIOptionType[],
    setBaseCurrenciesResp(list: SelectUIOptionType[]) {
      boundSet('baseCurrenciesResp', list)
    },

    searchInput: '',
    setSearchInput(val: string) {
      boundSet('searchInput', String(val).trim())
    },

    globalSearchSelectedTabId: GlobalSearchTypesMappingEnum.all,
    setGlobalSearchSelectedTabId(val: { id: GlobalSearchTypesMappingEnum }) {
      boundSet('globalSearchSelectedTabId', val.id)
    },

    isSearchInputFocused: false,
    setIsSearchInputFocused(value: boolean) {
      boundSet('isSearchInputFocused', value)
    },

    globalSearchHistory: getMarketGlobalSearchCache() || [],
    setGlobalSearchHistory(val) {
      const cur = (get() as IMarketListBaseStore).globalSearchHistory
      const newHistory = uniqBy([val, ...cur].slice(0, 9), x => x.id)
      // console.log(newHistory, 'newhistory')
      boundSet('globalSearchHistory', newHistory)
      setMarketGlobalSearchCache(newHistory)
    },
    cleanGlobalSearchHistory() {
      boundSet('globalSearchHistory', [])
      setMarketGlobalSearchCache([])
    },

    resetSearchState() {
      boundSet('searchInput', '')
      boundSet('isSearchInputFocused', false)
      boundSet('isSearchPopoverVisible', false)
      boundSet('globalSearchSelectedTabId', GlobalSearchTypesMappingEnum.all)
    },

    selectedModuleName: MarketLisModulesEnum.spotMarkets,
    setSelectedModuleName(val: MarketLisModulesEnum) {
      boundSet('selectedModuleName', val)
    },

    isClosedNotification: isClosedNotification || false,
    setIsClosedNotification(val: boolean) {
      boundSet('isClosedNotification', val)
      setMarketIsClosedBannerNotifactionCache(val)
    },

    [MarketLisModulesEnum.homeModule]: homeModuleState(set, get),
    [MarketLisModulesEnum.spotMarkets]: spotModule(set, get),
    [MarketLisModulesEnum.futuresMarkets]: futuresModule(set, get),

    [MarketLisModulesEnum.spotMarketsTrade]: spotTradeModule(set, get),
    [MarketLisModulesEnum.futuresMarketsTrade]: futuresTradeModule(set, get),

    marketSectorActiveTab: MarketTabsEnum.spot,
    setMarketSectorActiveTab(tab: MarketTabsEnum) {
      boundSet('marketSectorActiveTab', tab)
    },
  }
}

function getStore(set, get) {
  return {
    // ...createUpdateProp<IMarketListBaseStore>(set),
    ...getBaseStore(set, get),
  }
}

const baseMarketListStore = create(devtools(getStore, { name: 'market-list-store' }))

const useMarketListStore = createTrackedSelector(baseMarketListStore)

export { useMarketListStore, baseMarketListStore }
