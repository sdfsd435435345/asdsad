/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约盘口深度↗](https://yapi.nbttfc365.com/project/44/interface/api/3787) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /perpetual-market-rest/v1/market/depth`
 * @更新时间 `2023-01-12 16:00:46`
 */
export interface YapiGetPerpetualMarketRestV1MarketDepthApiRequest {
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
 * 接口 [合约盘口深度↗](https://yapi.nbttfc365.com/project/44/interface/api/3787) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /perpetual-market-rest/v1/market/depth`
 * @更新时间 `2023-01-12 16:00:46`
 */
export interface YapiGetPerpetualMarketRestV1MarketDepthApiResponse {
  data?: YapiGetPerpetualMarketRestV1MarketDepthData
  code?: number
  message?: string
}
export interface YapiGetPerpetualMarketRestV1MarketDepthData {
  asks?: string[][]
  bids?: string[][]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约盘口深度↗](https://yapi.nbttfc365.com/project/44/interface/api/3787)
// **/
// export const getPerpetualMarketRestV1MarketDepthApiRequest: MarkcoinRequest<
//   YapiGetPerpetualMarketRestV1MarketDepthApiRequest,
//   YapiGetPerpetualMarketRestV1MarketDepthApiResponse['data']
// > = params => {
//   return request({
//     path: "/perpetual-market-rest/v1/market/depth",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
