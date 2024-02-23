import { quoteVolumneTableSorter } from '@/constants/market/market-list'
import { FuturesTradeTypeEnum, getFuturesTabs, getFuturesTypeTab } from '@/constants/market/market-list/futures-module'
import {
  FuturesMarketBaseCurrenyEnum,
  MarketLisModulesEnum,
  SpotMarketSectorCategoryEnum,
} from '@/constants/market/market-list/market-module'
import { MarketSearchFeatureFuturesTrade } from '@/features/market/market-home-global-search/market-trade-search-futures'
import { getMarketTradeSearchCache, setMarketTradeSearchCache } from '@/helper/cache'
import { getStateByModulePath, setStateByModulePath } from '@/helper/store'
import { baseContractMarketStore } from '@/store/market/contract'
import { ColumnSort } from '@tanstack/react-table'
import { uniqBy } from 'lodash'

export default function (set, get) {
  const boundSet = setStateByModulePath.bind(null, set, [MarketLisModulesEnum.futuresMarketsTrade])
  const boundGet = getStateByModulePath.bind(null, get, [MarketLisModulesEnum.futuresMarketsTrade])

  return {
    selectedTradeMode: FuturesTradeTypeEnum.usdt,
    setSelectedTradeMode(mode: FuturesTradeTypeEnum) {
      boundSet('selectedTradeMode', mode)
    },
    getTradeModeName() {
      const mode = boundGet('selectedTradeMode')
      const baseName = getFuturesTypeTab().find(x => x.id === mode)?.title || ''
      const type = String(baseContractMarketStore.getState().currencyStandardType).toUpperCase()
      return type + baseName
    },
    selectedCategroyFilter: SpotMarketSectorCategoryEnum.total,
    setSelectedCategroyFilter(tab) {
      boundSet('selectedCategroyFilter', tab)
    },
    // 自选 全部
    getBaseCurrencyTab: getFuturesTabs,
    selectedBaseCurrencyFilter: FuturesMarketBaseCurrenyEnum.favorites,
    setSelectedBaseCurrencyFilter(tab) {
      boundSet('selectedBaseCurrencyFilter', tab)
    },

    searchInput: '',
    setSearchInput(val: string) {
      boundSet('searchInput', String(val).trim())
    },
    isSearchPopoverVisible: false,
    setIsSearchPopoverVisible(val: boolean) {
      boundSet('isSearchPopoverVisible', val)
    },
    isSearchInputFocused: false,
    setIsSearchInputFocused(value: boolean) {
      boundSet('isSearchInputFocused', value)
    },
    resetSearchState() {
      boundSet('searchInput', '')
      boundSet('isSearchInputFocused', false)
      boundSet('isSearchPopoverVisible', false)
    },
    defaultSorter: quoteVolumneTableSorter,
    currentSorter: quoteVolumneTableSorter,
    setTableSorter(sorter: ColumnSort) {
      boundSet('currentSorter', sorter)
    },

    searchHistory: getMarketTradeSearchCache(MarketLisModulesEnum.futuresMarketsTrade) || [],
    setsearchHistory(val) {
      const cur = boundGet('searchHistory')
      const newHistory = uniqBy([val, ...cur].slice(0, 6), x => x.id)
      boundSet('searchHistory', newHistory)
      setMarketTradeSearchCache(newHistory, MarketLisModulesEnum.futuresMarketsTrade)
    },
    cleanSearchHistory() {
      boundSet('searchHistory', [])
      setMarketTradeSearchCache([], MarketLisModulesEnum.futuresMarketsTrade)
    },

    TradeSearchComponent: MarketSearchFeatureFuturesTrade,
  }
}
