import { quoteVolumneTableSorter } from '@/constants/market/market-list'
import { MarketLisModulesEnum, SpotMarketSectorCategoryEnum } from '@/constants/market/market-list/market-module'
import { MarketSearchFeatureSpotTrade } from '@/features/market/market-home-global-search/market-trade-search'
import { getMarketTradeSearchCache, setMarketTradeSearchCache } from '@/helper/cache'
import { getStateByModulePath, setStateByModulePath } from '@/helper/store'
import { ColumnSort } from '@tanstack/react-table'
import { uniqBy } from 'lodash'

export default function (set, get) {
  const boundSet = setStateByModulePath.bind(null, set, [MarketLisModulesEnum.spotMarketsTrade])
  const boundGet = getStateByModulePath.bind(null, get, [MarketLisModulesEnum.spotMarketsTrade])

  return {
    selectedBaseCurrencyFilter: '',
    setSelectedBaseCurrencyFilter(tab) {
      boundSet('selectedBaseCurrencyFilter', tab)
    },

    selectedCategroyFilter: SpotMarketSectorCategoryEnum.total,
    setSelectedCategroyFilter(tab) {
      boundSet('selectedCategroyFilter', tab)
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

    searchHistory: getMarketTradeSearchCache(MarketLisModulesEnum.spotMarketsTrade) || [],
    setsearchHistory(val) {
      const cur = boundGet('searchHistory')
      const newHistory = uniqBy([val, ...cur].slice(0, 6), x => x.id)
      boundSet('searchHistory', newHistory)
      setMarketTradeSearchCache(newHistory, MarketLisModulesEnum.spotMarketsTrade)
    },
    cleanSearchHistory() {
      boundSet('searchHistory', [])
      setMarketTradeSearchCache([], MarketLisModulesEnum.spotMarketsTrade)
    },

    resetSearchState() {
      boundSet('searchInput', '')
      boundSet('isSearchInputFocused', false)
      boundSet('isSearchPopoverVisible', false)
    },

    currentSorter: quoteVolumneTableSorter,
    setTableSorter(sorter: ColumnSort) {
      boundSet('currentSorter', sorter)
    },

    TradeSearchComponent: MarketSearchFeatureSpotTrade,
  }
}
