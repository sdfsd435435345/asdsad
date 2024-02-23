/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [期权全部币对列表↗](https://yapi.nbttfc365.com/project/44/interface/api/10979) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/tradePair/list`
 * @更新时间 `2023-11-08 13:55:26`
 */
export interface YapiGetV1OptionTradePairListApiRequest {
  /**
   * 计价币类型筛选，usdt =U本位，other=币本位
   */
  buyCoin?: string
  /**
   * delivery 交割    perpetual 永续
   */
  typeInd?: string
  /**
   * 搜索的关键字
   */
  symbolName?: string
}

/**
 * 接口 [期权全部币对列表↗](https://yapi.nbttfc365.com/project/44/interface/api/10979) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/tradePair/list`
 * @更新时间 `2023-11-08 13:55:26`
 */
export interface YapiGetV1OptionTradePairListApiResponse {
  message?: string
  code?: number
  data?: YapiGetV1OptionTradePairData
}
export interface YapiGetV1OptionTradePairData {
  list?: YapiGetV1OptionTradePairListData[]
}
export interface YapiGetV1OptionTradePairListData {
  tradeId?: string
  symbol?: string
  coinId?: string
  coinSymbol?: string
  /**
   * 下单币种精度
   */
  coinScale?: string
  minAmount?: string
  maxAmount?: string
  priceSource?: string
  businessId?: string
  id?: string
  chg?: string
  high?: string
  last?: string
  low?: string
  open?: string
  typeInd?: string
  favourite?: number
  tradeInfo?: YapiGetV1OptionTradePairTradeInfoListData
  /**
   * 交易对symbolWassName
   */
  symbolWassName: string
}
export interface YapiGetV1OptionTradePairTradeInfoListData {
  markerFeeRate?: string
  liquidationFeeRate?: string
  minusFeeRate?: string
  quoteCoinId?: number
  businessId?: number
  memo?: null
  baseSymbolScale?: number
  bustFeeRate?: string
  baseCoinId?: number
  takerFeeRate?: string
  createdTime?: number
  minSize?: string
  symbolName?: string
  id?: number
  createdById?: number
  systemTradeId?: null
  plateTypeId?: null
  isHideNoVolume?: number
  updatedTime?: number
  marketUid?: null
  sizeOffset?: number
  quoteSymbolScale?: null
  marketHedgeUid?: null
  version?: null
  quoteSymbolName?: string
  baseSymbolName?: string
  settlementRules?: number
  isShare?: number
  minAmount?: null
  symbolId?: string
  tradeArea?: null
  fundingFeeRate?: null
  maxSize?: string
  matchFreeFee?: null
  cycle?: string
  isOpenSpotLeverage?: number
  isPriceAlert?: number
  depthOffset?: string
  maxAmount?: null
  enableState?: number
  symbolWassName?: string
  typeInd?: string
  isStop?: number
  singleAmount?: null
  priceOffset?: number
  isDelete?: number
  protectThreshold?: string
  updateById?: number
  plusFeeRate?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [期权全部币对列表↗](https://yapi.nbttfc365.com/project/44/interface/api/10979)
// **/
// export const getV1OptionTradePairListApiRequest: MarkcoinRequest<
//   YapiGetV1OptionTradePairListApiRequest,
//   YapiGetV1OptionTradePairListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/tradePair/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
