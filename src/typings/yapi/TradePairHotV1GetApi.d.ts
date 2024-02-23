/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [首页-热门币对↗](https://yapi.nbttfc365.com/project/44/interface/api/2750) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/hot`
 * @更新时间 `2022-11-19 12:32:34`
 */
export interface YapiGetV1TradePairHotApiRequest {}

/**
 * 接口 [首页-热门币对↗](https://yapi.nbttfc365.com/project/44/interface/api/2750) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/hot`
 * @更新时间 `2022-11-19 12:32:34`
 */
export interface YapiGetV1TradePairHotApiResponse {
  code?: number
  data?: YapiGetV1TradePairHotData
  message?: string
}
export interface YapiGetV1TradePairHotData {
  list?: YapiGetV1TradePairHotListData[]
}
export interface YapiGetV1TradePairHotListData {
  sellCoinId: number
  buyCoinId: number
  symbolWassName: string
  chg: string
  last: string
  tradeArea: number
  quoteVolume: string
  sort: number
  volume: string
  high: string
  quoteSymbolName: string
  baseSymbolName: string
  low: string
  symbolName: string
  /**
   * 币对ID
   */
  id: number
  time: number
  open: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [首页-热门币对↗](https://yapi.nbttfc365.com/project/44/interface/api/2750)
// **/
// export const getV1TradePairHotApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairHotApiRequest,
//   YapiGetV1TradePairHotApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/hot",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
