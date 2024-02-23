/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-盘口深度数据↗](https://yapi.nbttfc365.com/project/44/interface/api/2777) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/depth`
 * @更新时间 `2022-11-07 10:14:24`
 */
export interface YapiGetV1MarketDepthApiRequest {
  /**
   * 最小1,最大1000
   */
  limit: string
  /**
   * 交易对名称
   */
  symbol: string
}

/**
 * 接口 [现货-盘口深度数据↗](https://yapi.nbttfc365.com/project/44/interface/api/2777) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/depth`
 * @更新时间 `2022-11-07 10:14:24`
 */
export interface YapiGetV1MarketDepthApiResponse {
  code?: number
  data?: YapiGetV1MarketDepthData
  message?: string
}
export interface YapiGetV1MarketDepthData {
  /**
   * 买方
   */
  bids?: string[][]
  /**
   * 卖方
   */
  asks?: string[][]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-盘口深度数据↗](https://yapi.nbttfc365.com/project/44/interface/api/2777)
// **/
// export const getV1MarketDepthApiRequest: MarkcoinRequest<
//   YapiGetV1MarketDepthApiRequest,
//   YapiGetV1MarketDepthApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/market/depth",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
