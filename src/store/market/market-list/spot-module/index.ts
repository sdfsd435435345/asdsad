import { quoteVolumneTableSorter } from '@/constants/market/market-list'
import {
  MarketLisModulesEnum,
  SpotMarketBaseCurrenyEnum,
  SpotMarketSectorCategoryEnum,
} from '@/constants/market/market-list/market-module'
import { getStateByModulePath, setStateByModulePath } from '@/helper/store'
import { ColumnSort } from '@tanstack/react-table'

export default function (set, get) {
  const boundSet = setStateByModulePath.bind(null, set, [MarketLisModulesEnum.spotMarkets])
  const boundGet = getStateByModulePath.bind(null, get, [MarketLisModulesEnum.spotMarkets])

  return {
    selectedBaseCurrencyFilter: SpotMarketBaseCurrenyEnum.favorites,
    setSelectedBaseCurrencyFilter(tab) {
      boundSet('selectedBaseCurrencyFilter', tab)
    },

    selectedCategroyFilter: SpotMarketSectorCategoryEnum.total,
    setSelectedCategroyFilter(tab) {
      boundSet('selectedCategroyFilter', tab)
    },
    defaultSorter: quoteVolumneTableSorter,
    currentSorter: quoteVolumneTableSorter,
    setTableSorter(sorter: ColumnSort) {
      boundSet('currentSorter', sorter)
    },
  }
}
