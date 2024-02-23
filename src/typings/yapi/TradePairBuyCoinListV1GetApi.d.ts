/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-计价币列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2801) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/buyCoinList`
 * @更新时间 `2022-10-21 16:04:31`
 */
export interface YapiGetV1TradePairBuyCoinListApiRequest {}

/**
 * 接口 [现货-计价币列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2801) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/buyCoinList`
 * @更新时间 `2022-10-21 16:04:31`
 */
export interface YapiGetV1TradePairBuyCoinListApiResponse {
  code?: number
  data?: YapiGetV1TradePairBuyCoinData
  message?: string
}
export interface YapiGetV1TradePairBuyCoinData {
  list?: YapiGetV1TradePairBuyCoinListData[]
}
export interface YapiGetV1TradePairBuyCoinListData {
  /**
   * 计价币ID
   */
  coinId: number
  /**
   * 计价币名
   */
  symbol: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-计价币列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2801)
// **/
// export const getV1TradePairBuyCoinListApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairBuyCoinListApiRequest,
//   YapiGetV1TradePairBuyCoinListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/buyCoinList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
