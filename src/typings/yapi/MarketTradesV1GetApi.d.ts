/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-最新成交↗](https://yapi.nbttfc365.com/project/44/interface/api/2768) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/trades`
 * @更新时间 `2022-11-11 19:47:07`
 */
export interface YapiGetV1MarketTradesApiRequest {
  /**
   * 返回的数据条数,最多1000条
   */
  limit: string
  /**
   * 交易对名称
   */
  symbol: string
}

/**
 * 接口 [现货-最新成交↗](https://yapi.nbttfc365.com/project/44/interface/api/2768) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/trades`
 * @更新时间 `2022-11-11 19:47:07`
 */
export interface YapiGetV1MarketTradesApiResponse {
  code?: number
  data?: YapiGetV1MarketTradesData
  message?: string
}
export interface YapiGetV1MarketTradesData {
  list?: YapiGetV1MarketTradesListData[]
}
export interface YapiGetV1MarketTradesListData {
  /**
   * id
   */
  id: number
  /**
   * 价格
   */
  price: string
  /**
   * 数量
   */
  volume: string
  /**
   * 1卖方颜色 2买方颜色
   */
  direction: string
  /**
   * 成交时间,精确到毫秒
   */
  time: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-最新成交↗](https://yapi.nbttfc365.com/project/44/interface/api/2768)
// **/
// export const getV1MarketTradesApiRequest: MarkcoinRequest<
//   YapiGetV1MarketTradesApiRequest,
//   YapiGetV1MarketTradesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/market/trades",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
