import { WsTradePairCommonApiDataType } from '@/typings/api/market/market-list'
import { PickRequired } from '@/typings/common'
import { YapiGetV1CommonBusinessIdData } from '@/typings/yapi/CommonBusinessIdV1GetApi'

/** 24 小时行情 */
export function wsMarketCommonSub(wsConfig, item: WsTradePairCommonApiDataType) {
  return {
    contractCode: item.symbolWassName,
    quote: item.quoteSymbolName,
    base: item.baseSymbolName,
    ...wsConfig,
  }
}

/**
 * 24hr market for all trade pairs (2s)
 * @param item
 * @returns ws config
 */
export function wsTradePairSubFullAmount(wsConfig, bizId: string) {
  return {
    contractCode: bizId,
    // throttleTime: WsThrottleTimeEnum.Market,
    ...wsConfig,
  }
}

/**
 * market sector concept list
 * @returns ws config
 */
export function wsMarketSectorConceptList(
  wsConfig,
  bizId: PickRequired<YapiGetV1CommonBusinessIdData, 'businessId'>['businessId']
) {
  return {
    contractCode: bizId.toString(),
    ...wsConfig,
  }
}

export function wsTradePairSubSlow(wsConfig, item: WsTradePairCommonApiDataType) {
  return {
    contractCode: item.symbolWassName,
    quote: item.quoteSymbolName,
    base: item.baseSymbolName,
    ...wsConfig,
  }
}
