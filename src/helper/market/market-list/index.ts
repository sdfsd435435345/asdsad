import { MarketListFuturesEnum } from '@/constants/market/market-list/futures-module'
import { GlobalSearchTypesMappingEnum } from '@/constants/market/market-list/market-module'
import { WsBizEnum, WsTypesEnum } from '@/constants/ws'
import { leftJoinByKey } from '@/helper/common'
import { WSThrottleTypeEnum } from '@/plugins/ws/constants'
import { ConceptPrice_Body } from '@/plugins/ws/protobuf/ts/proto/ConceptPrice'
import { TradePairs_TradePair } from '@/plugins/ws/protobuf/ts/proto/TradePairs'
import { ISubscribeParams } from '@/plugins/ws/types'
import { baseContractMarketStore } from '@/store/market/contract'
import { ICommonTradePairType } from '@/typings/api/market'
import {
  MarketListGlobalSearchResultViewModel,
  YapiGetV1TradePairSearchListAllDataType,
  TradePairWithCoinInfoType,
  WsTradePairCommonApiDataType,
  WithTableIndex,
} from '@/typings/api/market/market-list'
import { PickRequired } from '@/typings/common'
import { YapiGetV1CoinQueryMainCoinListCoinListData } from '@/typings/yapi/CoinQueryMainCoinListV1GetApi'
import { YapiGetV1CommonBusinessIdData } from '@/typings/yapi/CommonBusinessIdV1GetApi'
import { YapiGetV1ConceptConceptPriceListData } from '@/typings/yapi/ConceptConceptPriceListV1GetApi'
import { YapiGetV1FavouriteDefaultList } from '@/typings/yapi/FavouriteDefaultV1GetApi'
import { YapiGetV1FavouriteListData } from '@/typings/yapi/FavouriteListV1GetApi'
import { YapiGetV1PerpetualTradePairDetailData } from '@/typings/yapi/PerpetualTradePairDetailV1GetApi'
import { YapiGetV1PerpetualTradePairListData } from '@/typings/yapi/PerpetualTradePairListV1GetApi'
import { YapiGetV1TradePairHotListData } from '@/typings/yapi/TradePairHotV1GetApi'
import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { YapiGetV1TradePairSearchData } from '@/typings/yapi/TradePairSearchV1GetApi'
import { decimalUtils } from '@/nbit'
import { ColumnSort } from '@tanstack/react-table'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

export const toMarketListGlobalSearchWithAllType = (
  data: Partial<YapiGetV1TradePairSearchData | null>
): MarketListGlobalSearchResultViewModel | null => {
  if (!data) return null

  const all: YapiGetV1TradePairSearchListAllDataType[] = []
  const res = { all, ...data }

  Object.keys(data).forEach(key => {
    all.push(...(data[key] || []))
  })

  return res
}

export function mergeTradePairWithSymbolInfo(
  hotCurrenciesResp?: YapiGetV1TradePairHotListData[],
  symbolInfoResp?: YapiGetV1CoinQueryMainCoinListCoinListData[]
): TradePairWithCoinInfoType[] {
  const merged = leftJoinByKey<TradePairWithCoinInfoType>({
    arr1: hotCurrenciesResp,
    key1: 'sellCoinId',
    arr2: symbolInfoResp,
    key2: 'id',
  })

  return merged
}

export function mergeTradePairWithFavDefault(
  all?: YapiGetV1TradePairListData[],
  partial?: YapiGetV1FavouriteDefaultList[]
): YapiGetV1TradePairListData[] {
  const merged = leftJoinByKey<YapiGetV1TradePairListData>({
    arr1: partial,
    key1: 'tradePairId',
    arr2: all,
    key2: 'id',
  })

  return merged
}

export function mergeTradePairWithWsDataByWassName(
  apiData: YapiGetV1TradePairListData[],
  wsData: TradePairs_TradePair[]
) {
  const merged = leftJoinByKey<TradePairWithCoinInfoType>({
    arr1: apiData,
    key1: 'symbolWassName',
    arr2: wsData,
    key2: 'symbolWassName',
  })

  return merged
}

export function mergeFavListWithWsDataByWassName(
  apiData: YapiGetV1FavouriteListData[],
  wsData: TradePairs_TradePair[]
) {
  const merged = leftJoinByKey<TradePairWithCoinInfoType>({
    arr1: wsData,
    key1: 'symbolWassName',
    arr2: apiData,
    key2: 'symbolWassName',
  })

  return merged
}

export function mergeMarketSectorConceptListById(
  apiData: YapiGetV1ConceptConceptPriceListData[],
  wsData: ConceptPrice_Body[]
) {
  const merged = leftJoinByKey<any>({
    arr1: apiData,
    key1: 'id',
    arr2: wsData,
    key2: 'id',
  })

  return merged
}

/** 24 小时行情 */
export function wsMarketRealTimeSub(item: WsTradePairCommonApiDataType) {
  return {
    biz: WsBizEnum.spot,
    type: WsTypesEnum.market,
    contractCode: item.symbolWassName,
    quote: item.quoteSymbolName,
    base: item.baseSymbolName,
  }
}

/**
 * 24hr market for all trade pairs (2s)
 * @param item
 * @returns ws config
 */
export function getWsMarketFullAmountConfig(bizId: string, callback: any): ISubscribeParams {
  return {
    subs: {
      biz: WsBizEnum.spot,
      type: WsTypesEnum.marketFullAmount,
      contractCode: bizId,
      // throttleTime: WsThrottleTimeEnum.Market,
      throttleType: WSThrottleTypeEnum.cover,
    },
    callback,
  }
}

/**
 * Sector price index
 * @param item
 * @returns ws config
 */
export function wsSectorIndexSub(bizId: PickRequired<YapiGetV1CommonBusinessIdData, 'businessId'>['businessId']) {
  return {
    biz: WsBizEnum.spot,
    type: WsTypesEnum.concept,
    contractCode: bizId.toString(),
  }
}

/** 24 小时行情 */
export function wsMarketCommonSub(item: WsTradePairCommonApiDataType) {
  return {
    biz: WsBizEnum.spot,
    type: WsTypesEnum.market,
    contractCode: item.symbolWassName,
    quote: item.quoteSymbolName,
    base: item.baseSymbolName,
  }
}

/**
 * 24hr market for all trade pairs (2s)
 * @param item
 * @returns ws config
 */
export function wsTradePairSubFullAmount(bizId: string) {
  return {
    biz: WsBizEnum.spot,
    type: WsTypesEnum.marketFullAmount,
    contractCode: bizId,
    // throttleTime: WsThrottleTimeEnum.Market,
  }
}

/**
 * market sector concept list
 * @returns ws config
 */
export function wsMakretSectorConceptList(
  bizId: PickRequired<YapiGetV1CommonBusinessIdData, 'businessId'>['businessId']
) {
  return {
    biz: WsBizEnum.spot,
    type: WsTypesEnum.concept,
    contractCode: bizId.toString(),
  }
}

export function wsTradePairSubSlow(item: WsTradePairCommonApiDataType) {
  return {
    biz: WsBizEnum.spot,
    type: WsTypesEnum.marketSlow,
    contractCode: item.symbolWassName,
    quote: item.quoteSymbolName,
    base: item.baseSymbolName,
  }
}

export function addTableIndexToData<T>(data: T[], key?: keyof T): WithTableIndex<T>[] {
  if (!data) return data

  const resolved: WithTableIndex<T>[] = []

  data.forEach((item, index) => {
    resolved.push({
      ...item,
      tableIndex: key ? `${item[key as string]}${index}` : `tableIndex-${index}`,
    })
  })

  return resolved
}

export function append0Prefix(number, target) {
  const arr = String(number).split('')

  while (arr.length < target) {
    arr.unshift('0')
  }

  return arr.join('')
}

export const calMarketCap = (item: YapiGetV1TradePairListData[]) => {
  const res = (item || []).map(x => {
    return {
      ...x,
      calMarketCap: SafeCalcUtil.mul(x.last, x.circulatingSupply).toString() || '',
    }
  })

  return res
}

export const sortByHelper = (data: any[], sorter: ColumnSort) => {
  const res = data.slice().sort((a, b) => tableSortHelper.common(sorter, a, b))
  return res
}

export const tableSortHelper = {
  common: (sorter: ColumnSort, a, b) => {
    if (!sorter) return 0

    try {
      const { id, desc } = sorter
      const dataIndex = id?.toString() || ''
      const isDesc = desc === true ? -1 : 1
      const aValue = String(a[dataIndex]).trim()
      const bValue = String(b[dataIndex]).trim()
      const lastIdx = aValue.length - 1

      if (!isNaN(aValue as any)) {
        // default is number type
        return isDesc * (Number(aValue) - Number(bValue))
      }

      if (aValue[lastIdx] === '%') {
        return isDesc * (parseFloat(aValue) - parseFloat(b[dataIndex]))
      }

      return isDesc * aValue.localeCompare(bValue)
    } catch (error) {
      console.debug('Table sorter common stragey error', error, a, b)
      return 0
    }
  },
  handler: ({
    data,
    setData,
    sorter,
    defaultSorter,
  }: {
    data: any[]
    setData?: any
    sorter?: ColumnSort
    defaultSorter?: ColumnSort
  }) => {
    if (!sorter) {
      if (defaultSorter) {
        const sorted = data.slice().sort((a, b) => tableSortHelper.common(defaultSorter, a, b))
        setData && setData(sorted)
        return sorted
      }
      return data
    }

    const sorted = data.slice().sort((a, b) => tableSortHelper.common(sorter, a, b))
    setData && setData(sorted)
    return sorted
  },
}

export const generateSWRCacheKey = (cacheKey: string, params?: any[]) => {
  const key = `${cacheKey}${params?.reduce((acc, cur) => `${acc}-${cur}`, '-params-')}`
  return key
}

/** 判断币对的类型，futures 通过传入的币对 typeInd 字段来判别 */
export function checkTradePairType(
  item?: YapiGetV1PerpetualTradePairListData | YapiGetV1TradePairListData | ICommonTradePairType
): GlobalSearchTypesMappingEnum {
  switch ((item as YapiGetV1PerpetualTradePairListData)?.typeInd) {
    case MarketListFuturesEnum.delivery:
    case MarketListFuturesEnum.perpetual:
      return GlobalSearchTypesMappingEnum.futures
    default:
      return GlobalSearchTypesMappingEnum.spot
  }
}
