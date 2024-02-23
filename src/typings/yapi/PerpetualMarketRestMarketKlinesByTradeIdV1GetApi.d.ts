/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据tradeId获取k线(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/8954) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /perpetual-market-rest/v1/market/klinesByTradeId`
 * @更新时间 `2023-09-12 11:04:17`
 */
export interface YapiGetPerpetualMarketRestV1MarketKlinesByTradeIdApiRequest {
  /**
   * 枚举;
   *  m -> 分钟; h -> 小时; d -> 天; w -> 周; M -> 月; y -> 年
   *
   * 1m
   * 3m
   * 5m
   * 15m
   * 30m
   * 1h
   * 2h
   * 4h
   * 6h
   * 8h
   * 12h
   * 1d
   * 3d
   * 5d
   * 1w
   * 1M
   * 3M
   * 6M
   * 1y
   */
  interval: string
  /**
   * 交易对id
   */
  tradeId: string
  /**
   * 最小1,最大1000
   */
  limit: string
  /**
   * 不填表示查最新的limit条数据
   */
  endTime?: string
}

/**
 * 接口 [根据tradeId获取k线(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/8954) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /perpetual-market-rest/v1/market/klinesByTradeId`
 * @更新时间 `2023-09-12 11:04:17`
 */
export interface YapiGetPerpetualMarketRestV1MarketKlinesByTradeIdApiResponse {
  code?: number
  data?: YapiGetPerpetualMarketRestV1MarketKlinesByTradeIdData
  message?: string
}
export interface YapiGetPerpetualMarketRestV1MarketKlinesByTradeIdData {
  list?: string[][]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据tradeId获取k线(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/8954)
// **/
// export const getPerpetualMarketRestV1MarketKlinesByTradeIdApiRequest: MarkcoinRequest<
//   YapiGetPerpetualMarketRestV1MarketKlinesByTradeIdApiRequest,
//   YapiGetPerpetualMarketRestV1MarketKlinesByTradeIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/perpetual-market-rest/v1/market/klinesByTradeId",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
