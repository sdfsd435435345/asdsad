/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约-自选列表，返回结构与<合约-币对列表一致>↗](https://yapi.nbttfc365.com/project/44/interface/api/4059) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/favouriteTradePair/list`
 * @更新时间 `2023-01-09 16:46:52`
 */
export interface YapiGetV1PerpetualFavouriteTradePairListApiRequest {}

/**
 * 接口 [合约-自选列表，返回结构与<合约-币对列表一致>↗](https://yapi.nbttfc365.com/project/44/interface/api/4059) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/favouriteTradePair/list`
 * @更新时间 `2023-01-09 16:46:52`
 */
export interface YapiGetV1PerpetualFavouriteTradePairListApiResponse {
  code?: number
  data?: YapiGetV1PerpetualFavouriteTradePairData
  message?: string
}
export interface YapiGetV1PerpetualFavouriteTradePairData {
  list?: YapiGetV1PerpetualFavouriteTradePairListData[]
}
export interface YapiGetV1PerpetualFavouriteTradePairListData {
  sellCoinId?: number
  minAmount?: null
  tradeArea?: null
  minusFeeRate?: number
  businessId?: number
  maxCount?: null
  cycle?: string
  circulatingSupply?: number
  high?: string
  low?: string
  symbolName?: string
  id?: number
  maxAmount?: null
  buyCoinId?: number
  symbolWassName?: string
  enableState?: number
  typeInd?: string
  chg?: string
  last?: string
  priceOffset?: number
  isDelete?: number
  quoteVolume?: string
  /**
   * 自选的排序，编辑自选的时候操作该值
   */
  sort?: number
  favourite?: number
  volume?: string
  quoteSymbolName?: null
  baseSymbolName?: string
  amountOffset?: number
  settlementRules?: number
  plusFeeRate?: number
  marketStatus?: number
  isShare?: number
  minCount?: null
  time?: null
  open?: string
  sellFee?: null
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约-自选列表，返回结构与<合约-币对列表一致>↗](https://yapi.nbttfc365.com/project/44/interface/api/4059)
// **/
// export const getV1PerpetualFavouriteTradePairListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualFavouriteTradePairListApiRequest,
//   YapiGetV1PerpetualFavouriteTradePairListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/favouriteTradePair/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
