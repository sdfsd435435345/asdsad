import { t } from '@lingui/macro'
import { MarketLisModulesEnum } from '../market-module'

export enum FavTabs {
  Spot,
  Futures,
}

export const getMrkFavTabsConfig = () => {
  return [
    {
      title: t`constants_market_market_list_market_module_index_510106`,
      id: MarketLisModulesEnum.spotMarkets,
    },
    {
      title: t`assets.financial-record.tabs.futures`,
      id: MarketLisModulesEnum.futuresMarkets,
    },
  ]
}

export const getHomeFavTabsConfig = () => [
  {
    text: t`constants_market_market_list_market_module_index_510106`,
    value: FavTabs.Spot,
  },
  {
    text: t`assets.financial-record.tabs.futures`,
    value: FavTabs.Futures,
  },
  {
    text: t`assets.financial-record.cancel`,
    value: undefined,
  },
]
