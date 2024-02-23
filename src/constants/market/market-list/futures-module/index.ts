import { SpotMarketBaseCurrenyEnum, SpotMarketSectorCategoryEnum } from '@/constants/market/market-list/market-module'
import { YapiGetV1PerpetualTradePairListData } from '@/typings/yapi/PerpetualTradePairListV1GetApi'
import { t } from '@lingui/macro'

export function getBaseCurrencyTab() {
  return [
    {
      id: SpotMarketBaseCurrenyEnum.favorites,
      title: t`constants_market_market_list_market_module_index_510108`,
    },
    {
      id: SpotMarketSectorCategoryEnum.total,
      title: t`constants_market_market_list_market_module_index_5101071`,
    },
  ]
}

export enum FuturesTabsEnum {
  favorites = 'favoritesTab',
  uBase = 'usdt',
  coinBase = 'other',
}

export const getFuturesTabs = () => {
  // 暂时不使用U本位 币本位
  // return [
  //   {
  //     title: t`constants_market_market_list_market_module_index_510108`,
  //     id: FuturesTabsEnum.favorites,
  //   },
  //   { title: t`constants_market_market_list_futures_module_index_5101384`, id: FuturesTabsEnum.uBase },
  //   { title: t`future.funding-history.tabs.coin`, id: FuturesTabsEnum.coinBase },
  // ]
  return getBaseCurrencyTab()
}

export enum MarketListFuturesEnum {
  delivery = 'delivery',
  perpetual = 'perpetual',
}

export function getFuturesTypeNameByType(item?: YapiGetV1PerpetualTradePairListData) {
  switch (item?.typeInd) {
    case MarketListFuturesEnum.delivery:
      return t`constants_market_market_list_market_module_index_5101361`
    case MarketListFuturesEnum.perpetual:
      return t`assets.enum.tradeCoinType.perpetual`
    default:
      return ''
  }
}

export enum FuturesTradeTypeEnum {
  usdt = 'usdt',
  coin = 'coin',
  option = 'option',
  battle = 'battle',
}

export const getFuturesTypeTab = () => {
  return [
    {
      id: FuturesTradeTypeEnum.usdt,
      title: t`features_market_market_quatation_common_table_columns_index_5101473`,
    },
    {
      id: FuturesTradeTypeEnum.coin,
      title: t`future.funding-history.tabs.coin`,
    },
    {
      id: FuturesTradeTypeEnum.option,
      title: t`constants_market_market_list_futures_module_index_5101396`,
    },
    {
      id: FuturesTradeTypeEnum.battle,
      title: t`constants_market_market_list_futures_module_index_5101397`,
    },
  ]
}
