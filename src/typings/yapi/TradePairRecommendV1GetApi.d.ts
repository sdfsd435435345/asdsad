/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [首页-推荐币对↗](https://yapi.nbttfc365.com/project/44/interface/api/2741) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/recommend`
 * @更新时间 `2022-10-21 16:01:27`
 */
export interface YapiGetV1TradePairRecommendApiRequest {}

/**
 * 接口 [首页-推荐币对↗](https://yapi.nbttfc365.com/project/44/interface/api/2741) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/recommend`
 * @更新时间 `2022-10-21 16:01:27`
 */
export interface YapiGetV1TradePairRecommendApiResponse {
  code?: number
  data?: YapiGetV1TradePairRecommendData
  message?: string
}
export interface YapiGetV1TradePairRecommendData {
  list?: YapiGetV1TradePairRecommendListData[]
}
export interface YapiGetV1TradePairRecommendListData {
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
// * [首页-推荐币对↗](https://yapi.nbttfc365.com/project/44/interface/api/2741)
// **/
// export const getV1TradePairRecommendApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairRecommendApiRequest,
//   YapiGetV1TradePairRecommendApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/recommend",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
