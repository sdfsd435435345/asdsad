import { quoteVolumneTableSorter } from '@/constants/market/market-list'
import { getFuturesTabs } from '@/constants/market/market-list/futures-module'
import { FuturesMarketBaseCurrenyEnum, MarketLisModulesEnum } from '@/constants/market/market-list/market-module'
import { getStateByModulePath, setStateByModulePath } from '@/helper/store'
import { ColumnSort } from '@tanstack/react-table'

export default function (set, get) {
  const boundSet = setStateByModulePath.bind(null, set, [MarketLisModulesEnum.futuresMarkets])
  const boundGet = getStateByModulePath.bind(null, get, [MarketLisModulesEnum.futuresMarkets])

  return {
    getBaseCurrencyTab: getFuturesTabs,
    selectedBaseCurrencyFilter: FuturesMarketBaseCurrenyEnum.favorites,
    setSelectedBaseCurrencyFilter(tab) {
      boundSet('selectedBaseCurrencyFilter', tab)
    },
    defaultSorter: quoteVolumneTableSorter,
    currentSorter: quoteVolumneTableSorter,
    setTableSorter(sorter: ColumnSort) {
      boundSet('currentSorter', sorter)
    },
  }
}
