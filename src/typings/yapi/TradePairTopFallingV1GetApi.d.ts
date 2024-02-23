/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [首页-跌幅榜↗](https://yapi.nbttfc365.com/project/44/interface/api/2756) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/topFalling`
 * @更新时间 `2022-11-02 13:50:22`
 */
export interface YapiGetV1TradePairTopFallingApiRequest {}

/**
 * 接口 [首页-跌幅榜↗](https://yapi.nbttfc365.com/project/44/interface/api/2756) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/topFalling`
 * @更新时间 `2022-11-02 13:50:22`
 */
export interface YapiGetV1TradePairTopFallingApiResponse {
  code?: number
  data?: YapiGetV1TradePairTopFallingData
  message?: string
}
export interface YapiGetV1TradePairTopFallingData {
  list?: YapiGetV1TradePairTopFallingListData[]
}
export interface YapiGetV1TradePairTopFallingListData {
  sellCoinId: number
  buyCoinId: number
  symbolWassName: string
  chg: string
  last: string
  tradeArea: null
  quoteVolume: string
  sort: number
  favourite: number
  volume: string
  high: string
  quoteSymbolName: string
  baseSymbolName: string
  low: string
  symbolName: string
  id: number
  time: null
  open: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [首页-跌幅榜↗](https://yapi.nbttfc365.com/project/44/interface/api/2756)
// **/
// export const getV1TradePairTopFallingApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairTopFallingApiRequest,
//   YapiGetV1TradePairTopFallingApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/topFalling",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
