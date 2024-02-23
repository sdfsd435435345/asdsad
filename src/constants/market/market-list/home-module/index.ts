import { getHotTradePair, getTopFalling, getTopRising, getTopVolume } from '@/apis/market'
import { spotFavFn } from '@/helper/market/market-favorite'
import { ITabConfig } from '@/typings/api/market/market-list/home-module'
import { t } from '@lingui/macro'

export enum HomeModuleTabsEnum {
  fav = 'favTab',
  hot = 'hotTab',
  topRising = 'topRisingTab',
  topFalling = 'topFallingTab',
  topVolume = 'topVolumeTab',
}

export const getHomeModuleTabsConfig = (): ITabConfig<HomeModuleTabsEnum>[] => {
  return [
    {
      title: t`constants_market_market_list_market_module_index_510108`,
      id: HomeModuleTabsEnum.fav,
    },
    {
      title: t`store_market_market_list_constant_510098`,
      id: HomeModuleTabsEnum.hot,
    },
    {
      title: t`store_market_market_list_constant_510099`,
      id: HomeModuleTabsEnum.topRising,
    },
    {
      title: t`store_market_market_list_constant_510100`,
      id: HomeModuleTabsEnum.topFalling,
    },
    {
      title: t`store_market_market_list_constant_510101`,
      id: HomeModuleTabsEnum.topVolume,
    },
  ]
}

export const getHomeModuleTabApi = (id: HomeModuleTabsEnum) => {
  return {
    [HomeModuleTabsEnum.fav]: spotFavFn.getFavList,
    [HomeModuleTabsEnum.hot]: getHotTradePair,
    [HomeModuleTabsEnum.topRising]: getTopRising,
    [HomeModuleTabsEnum.topFalling]: getTopFalling,
    [HomeModuleTabsEnum.topVolume]: getTopVolume,
  }[id]
}
