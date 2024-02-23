/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约标记价格k线图数据↗](https://yapi.nbttfc365.com/project/44/interface/api/4215) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /perpetual-market-rest/v1/market/marketPriceKlines`
 * @更新时间 `2023-01-12 16:51:10`
 */
export interface YapiGetPerpetualMarketRestV1MarketMarketPriceKlinesApiRequest {
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
   * 交易对
   */
  symbol: string
  /**
   * 不填表示查最新的limit条数据
   */
  endTime: string
  /**
   * 最小1,最大1000
   */
  limit: string
}

/**
 * 接口 [合约标记价格k线图数据↗](https://yapi.nbttfc365.com/project/44/interface/api/4215) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /perpetual-market-rest/v1/market/marketPriceKlines`
 * @更新时间 `2023-01-12 16:51:10`
 */
export interface YapiGetPerpetualMarketRestV1MarketMarketPriceKlinesApiResponse {
  message?: string
  data?: YapiGetPerpetualMarketRestV1MarketMarketPriceKlinesData
  code?: number
}
export interface YapiGetPerpetualMarketRestV1MarketMarketPriceKlinesData {
  list?: string[][]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约标记价格k线图数据↗](https://yapi.nbttfc365.com/project/44/interface/api/4215)
// **/
// export const getPerpetualMarketRestV1MarketMarketPriceKlinesApiRequest: MarkcoinRequest<
//   YapiGetPerpetualMarketRestV1MarketMarketPriceKlinesApiRequest,
//   YapiGetPerpetualMarketRestV1MarketMarketPriceKlinesApiResponse['data']
// > = params => {
//   return request({
//     path: "/perpetual-market-rest/v1/market/marketPriceKlines",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
