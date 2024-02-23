import { ApiRequestWithPagination, ApiResponseCommon } from '@/typings/common'
import { YapiGetV1CoinQueryCoinPageListCoinListData } from '@/typings/yapi/CoinQueryCoinPageListV1GetApi'
import { YapiGetV1FavouriteDefaultList } from '@/typings/yapi/FavouriteDefaultV1GetApi'
import { YapiGetV1PerpetualFavouriteTradePairDefaultListData } from '@/typings/yapi/PerpetualFavouriteTradePairDefaultV1GetApi'
import { YapiGetV1TradePairHotListData } from '@/typings/yapi/TradePairHotV1GetApi'
import { YapiGetV1TradePairListApiRequest, YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { YapiGetV1TradePairSearchData } from '@/typings/yapi/TradePairSearchV1GetApi'

/** 行情 - 首页 - 热门列表 */
// YapiGetV1TradePairHotListData &
export type TradePairWithCoinInfoType = YapiGetV1CoinQueryCoinPageListCoinListData & YapiGetV1TradePairListData

export type TradePairBasicType = Pick<TradePairWithCoinInfoType, 'quoteSymbolName' | 'baseSymbolName'>

export type YapiGetV1TradePairSearchListAllDataType = YapiGetV1TradePairSearchListSpotData & {
  // 合约等其他 type
}

export type MarketListGlobalSearchResultViewModel = Partial<YapiGetV1TradePairSearchData & {
  all?: YapiGetV1TradePairSearchListAllDataType[]
}>

export type WsTradePairCommonType = {
  low: string
  volume: string
  last: string
  open: string
  chg: string
  quoteVolume: string
  high: string
}

export type WsMarketSubConfig = Partial<Pick<
  YapiGetV1TradePairHotListData,
  'quoteSymbolName' | 'baseSymbolName' | 'symbolWassName'
>>

export type WsTradePairCommonApiDataType = Partial<WsMarketSubConfig> & Partial<WsTradePairCommonType>

export type YapiGetV1TradePairListApiRequestWithPagination = ApiRequestWithPagination<YapiGetV1TradePairListApiRequest>

export type WsSpotFavouriteDefaultDataType = Partial<YapiGetV1FavouriteDefaultList & YapiGetV1TradePairListData> &
  WsMarketSubConfig &
  YapiGetV1CoinQueryCoinPageListCoinListData

export type YapiGetV1FavouriteDefaultApiResp = ApiResponseCommon<{ list: Required<YapiGetV1FavouriteDefaultList>[] }>
export type YapiGetV1FuturesFavouriteDefaultApiResp = ApiResponseCommon<{ list: Required<YapiGetV1PerpetualFavouriteTradePairDefaultListData>[] }>

export type WithTableIndex<T> = T & { tableIndex?: string }

export type CommonTradePairDataWithMarketCap = YapiGetV1TradePairListData & {
  calMarketCap?: number | string,
  lastPrev?: number | string
}

export type SelectUIOptionType = {
  id: string 
  title: string
}

export type SpotFavoriteDefaultDataType = YapiGetV1FavouriteDefaultList & { id: YapiGetV1TradePairHotListData['id'], chg: YapiGetV1TradePairHotListData['chg'], last: YapiGetV1TradePairHotListData['last'] }
