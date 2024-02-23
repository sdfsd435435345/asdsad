import { t } from '@lingui/macro'
import { link } from '@/helper/link'

export enum MarketListRouteEnum {
  spot = '/markets/spot',
  futures = '/markets/futures',
  sector = '/markets/sector',
  sectorDetails = '/markets/sector-detail',
  sectorTable = '/markets/sector-table',
  search = '/markets/search',
}

export enum MarketTabsEnum {
  spot,
  futures,
  sector,
}

export enum MarketSpotBaseCurrencyEnum {
  favourites,
}

export enum SpotMarketSectorCategoryEnum {
  total = 'totalTab',
}

export const getMarketTabsConfig = () => {
  return [
    {
      title: t`constants_market_market_list_market_module_index_510106`,
      id: MarketListRouteEnum.spot,
      onCallBack: () => {
        link(MarketListRouteEnum.spot)
      },
    },
    {
      title: t`assets.financial-record.tabs.futures`,
      id: MarketListRouteEnum.futures,
      onCallBack: () => {
        link(MarketListRouteEnum.futures)
      },
    },
    {
      title: t`constants_market_market_list_market_module_index_510107`,
      id: MarketListRouteEnum.sector,
      onCallBack: () => {
        link(MarketListRouteEnum.sector)
      },
    },
  ]
}

// 每个 Tab 在 Store 中也对应相应的 module
export enum MarketLisModulesEnum {
  homeModule = 'homeModuleState',
  spotMarkets = 'spotMarketsModule',
  spotMarketsTrade = 'spotMarketsTradeModule',
  futuresMarkets = 'futuresMarketsModule',
  futuresMarketsTrade = 'futuresMarketsTradeModule',
  sector = 'sectorModule',
  favourites = 'favouritesModule',
}

export enum SpotListApiParamsSortByEnum {
  symbolName = 'symbolName',
  chg = 'chg',
  volume = 'volume',
  last = 'last',
}

export enum SpotListApiParamsSortOrderTypeEnum {
  asc = 'asc',
  desc = 'desc',
}

/** value 需要和后端返回的类型对应 */
export enum GlobalSearchTypesMappingEnum {
  'all' = 'all',
  'spot' = 'spot',
  'futures' = 'perpetual',
  // 'delivery' = 'delivery',
  // 'leverage' = 'leverage',
}

export const getGlobalSearchTypesList = () => {
  return [
    { title: t`constants_market_market_list_market_module_index_5101071`, id: GlobalSearchTypesMappingEnum.all },
    { title: t`constants_order_742`, id: GlobalSearchTypesMappingEnum.spot },
    { title: t`assets.layout.tabs.contract`, id: GlobalSearchTypesMappingEnum.futures },
    // { title: t`constants_market_market_list_market_module_index_5101361`, id: GlobalSearchTypesMappingEnum.delivery },
    // { title: t`assets.layout.tabs.leverage`, id: GlobalSearchTypesMappingEnum.leverage },
  ]
}

// Spot Module
export enum SpotMarketBaseCurrenyEnum {
  favorites = 'favoritesTab',
}

export const sportMarketsBaseCurrencyFilter = () => [
  {
    title: t`constants_market_market_list_market_module_index_510108`,
    id: SpotMarketBaseCurrenyEnum.favorites,
  },
]

export const spotMarketsCategoryFilter = () => [
  {
    title: t`constants_market_market_list_market_module_index_5101071`,
    id: SpotMarketSectorCategoryEnum.total,
  },
]

export const getCategoryTitleById = (id: SpotMarketSectorCategoryEnum) => {
  return {
    [SpotMarketSectorCategoryEnum.total]: t`constants_market_market_list_market_module_index_5101071`,
  }[id]
}

export const getSectorTabsConfig = () => {
  return [
    {
      title: t`constants_market_market_list_market_module_index_510106`,
      id: MarketTabsEnum.spot,
    },
    {
      title: t`assets.financial-record.tabs.futures`,
      id: MarketTabsEnum.futures,
    },
  ]
}

// futures module
export enum FuturesMarketBaseCurrenyEnum {
  favorites = 'favoritesTab',
  total = 'totalTab',
}
export const futuresTradeSearchCategoryTab = () => [
  {
    title: t`constants_market_market_list_market_module_index_510108`,
    id: FuturesMarketBaseCurrenyEnum.favorites,
  },
  {
    title: t`constants_market_market_list_market_module_index_5101071`,
    id: FuturesMarketBaseCurrenyEnum.total,
  },
]
