/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约指数-合约成分↗](https://yapi.nbttfc365.com/project/44/interface/api/458) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/markPriceHistory/marketFrom`
 * @更新时间 `2023-01-08 21:48:24`
 */
export interface YapiGetV1PerpetualMarkPriceHistoryMarketFromApiRequest {
  tradePairId: string
}

/**
 * 接口 [合约指数-合约成分↗](https://yapi.nbttfc365.com/project/44/interface/api/458) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/markPriceHistory/marketFrom`
 * @更新时间 `2023-01-08 21:48:24`
 */
export interface YapiGetV1PerpetualMarkPriceHistoryMarketFromApiResponse {
  code?: number
  data?: YapiGetV1PerpetualMarkPriceHistoryMarketFromListData[]
  message?: string
}
export interface YapiGetV1PerpetualMarkPriceHistoryMarketFromListData {
  /**
   * 币对名
   */
  symbol: string
  /**
   * 网站名
   */
  webName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约指数-合约成分↗](https://yapi.nbttfc365.com/project/44/interface/api/458)
// **/
// export const getV1PerpetualMarkPriceHistoryMarketFromApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualMarkPriceHistoryMarketFromApiRequest,
//   YapiGetV1PerpetualMarkPriceHistoryMarketFromApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/markPriceHistory/marketFrom",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
