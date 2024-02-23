import { FavTabs } from '@/constants/market/market-list/favorite-module'
import { getHomeModuleTabsConfig, HomeModuleTabsEnum } from '@/constants/market/market-list/home-module'
import { MarketLisModulesEnum } from '@/constants/market/market-list/market-module'
import { getHomeTableFavTabFromCache, getHomeTableSelectedTabFromCache } from '@/helper/cache'
import { setStateByModulePath, getStateByModulePath } from '@/helper/store'
import { IHomeModuleTabsCommonResp } from '@/typings/api/market/market-list/home-module'

export default function (set, get) {
  const boundSet = setStateByModulePath.bind(null, set, [MarketLisModulesEnum.homeModule])
  const boundGet = getStateByModulePath.bind(null, get, [MarketLisModulesEnum.homeModule])

  return {
    homeFavType: getHomeTableFavTabFromCache() || FavTabs.Spot,
    setHomeFavType(type) {
      boundSet('homeFavType', type)
    },
    selectedTab: getHomeTableSelectedTabFromCache() || HomeModuleTabsEnum.fav,
    setSelectedTab(tab) {
      boundSet('selectedTab', tab)
    },

    tableData: [] as IHomeModuleTabsCommonResp[],
    setTableData(data) {
      boundSet('tableData', data)
    },
    getTabsConfig: getHomeModuleTabsConfig,

    tableColumn: [],
    setTableColumn(data) {
      boundSet('tableColumn', data)
    },
  }
}
