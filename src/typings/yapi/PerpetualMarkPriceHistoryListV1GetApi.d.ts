/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约指数-指数\/标记价格列表↗](https://yapi.nbttfc365.com/project/44/interface/api/455) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/markPriceHistory/list`
 * @更新时间 `2023-01-08 18:55:36`
 */
export interface YapiGetV1PerpetualMarkPriceHistoryListApiRequest {
  tradePairId: string
  pangeNum?: string
  pageSize?: string
}

/**
 * 接口 [合约指数-指数\/标记价格列表↗](https://yapi.nbttfc365.com/project/44/interface/api/455) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/markPriceHistory/list`
 * @更新时间 `2023-01-08 18:55:36`
 */
export interface YapiGetV1PerpetualMarkPriceHistoryListApiResponse {
  code?: number
  data?: YapiGetV1PerpetualMarkPriceHistoryData
  message?: string
}
export interface YapiGetV1PerpetualMarkPriceHistoryData {
  total?: number
  pageSize?: number
  list?: YapiGetV1PerpetualMarkPriceHistoryListData[]
  pageNum?: number
}
export interface YapiGetV1PerpetualMarkPriceHistoryListData {
  /**
   * 标记价格
   */
  markPrice: number
  /**
   * 时间
   */
  timeIndex: number
  /**
   * 指数价格
   */
  indexPrice: number
  /**
   * 币对代码
   */
  symbolName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约指数-指数/标记价格列表↗](https://yapi.nbttfc365.com/project/44/interface/api/455)
// **/
// export const getV1PerpetualMarkPriceHistoryListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualMarkPriceHistoryListApiRequest,
//   YapiGetV1PerpetualMarkPriceHistoryListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/markPriceHistory/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
