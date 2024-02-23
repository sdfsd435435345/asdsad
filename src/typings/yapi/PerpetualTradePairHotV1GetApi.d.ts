/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约-热门币对↗](https://yapi.nbttfc365.com/project/44/interface/api/5589) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/hot`
 * @更新时间 `2023-04-07 18:26:19`
 */
export interface YapiGetV1PerpetualTradePairHotApiRequest {}

/**
 * 接口 [合约-热门币对↗](https://yapi.nbttfc365.com/project/44/interface/api/5589) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/hot`
 * @更新时间 `2023-04-07 18:26:19`
 */
export interface YapiGetV1PerpetualTradePairHotApiResponse {
  code?: number
  data?: YapiGetV1PerpetualTradePairHotData
  message?: string
}
export interface YapiGetV1PerpetualTradePairHotData {
  list?: YapiGetV1PerpetualTradePairHotListData[]
}
export interface YapiGetV1PerpetualTradePairHotListData {
  markerFeeRate?: number
  symbolId?: string
  sellCoinId?: number
  minAmount?: null
  tradeArea?: null
  minusFeeRate?: number
  businessId?: number
  maxCount?: number
  cycle?: string
  circulatingSupply?: number
  high?: string
  low?: string
  takerFeeRate?: number
  symbolName?: string
  id?: number
  maxAmount?: number
  buyCoinId?: number
  symbolWassName?: string
  enableState?: number
  typeInd?: string
  chg?: string
  last?: string
  priceOffset?: number
  isDelete?: number
  quoteVolume?: string
  sort?: number
  favourite?: number
  volume?: string
  quoteSymbolName?: string
  baseSymbolName?: string
  amountOffset?: number
  settlementRules?: number
  plusFeeRate?: number
  marketStatus?: number
  isShare?: number
  minCount?: number
  time?: null
  open?: string
  sellFee?: null
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约-热门币对↗](https://yapi.nbttfc365.com/project/44/interface/api/5589)
// **/
// export const getV1PerpetualTradePairHotApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualTradePairHotApiRequest,
//   YapiGetV1PerpetualTradePairHotApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/tradePair/hot",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
