/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约-最新成交↗](https://yapi.nbttfc365.com/project/44/interface/api/4015) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /perpetual-market-rest/v1/market/trades`
 * @更新时间 `2023-01-12 15:58:42`
 */
export interface YapiGetPerpetualMarketRestV1MarketTradesApiRequest {
  /**
   * 返回的数据条数,最多1000条
   */
  limit: string
  /**
   * 交易对名字
   */
  symbol: string
}

/**
 * 接口 [合约-最新成交↗](https://yapi.nbttfc365.com/project/44/interface/api/4015) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /perpetual-market-rest/v1/market/trades`
 * @更新时间 `2023-01-12 15:58:42`
 */
export interface YapiGetPerpetualMarketRestV1MarketTradesApiResponse {
  data?: YapiGetPerpetualMarketRestV1MarketTradesData
  code?: number
  message?: string
}
export interface YapiGetPerpetualMarketRestV1MarketTradesData {
  list?: YapiGetPerpetualMarketRestV1MarketTradesListData[]
}
export interface YapiGetPerpetualMarketRestV1MarketTradesListData {
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
   * 成交时间,精确到毫秒
   */
  time: number
  /**
   * 1卖方颜色 2买方颜色
   */
  direction: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约-最新成交↗](https://yapi.nbttfc365.com/project/44/interface/api/4015)
// **/
// export const getPerpetualMarketRestV1MarketTradesApiRequest: MarkcoinRequest<
//   YapiGetPerpetualMarketRestV1MarketTradesApiRequest,
//   YapiGetPerpetualMarketRestV1MarketTradesApiResponse['data']
// > = params => {
//   return request({
//     path: "/perpetual-market-rest/v1/market/trades",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
