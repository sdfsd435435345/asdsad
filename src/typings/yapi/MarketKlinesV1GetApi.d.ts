/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-k线↗](https://yapi.nbttfc365.com/project/44/interface/api/2771) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/klines`
 * @更新时间 `2023-06-14 16:57:27`
 */
export interface YapiGetV1MarketKlinesApiRequest {
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
   * 不填表示查最新的limit条数据
   */
  endTime?: string
  /**
   * 最小1,最大1000
   */
  limit: string
  /**
   * 交易对名称
   */
  symbol: string
  /**
   * 交易对id，优先通过这个字段获取数据
   */
  tradeId?: string
}

/**
 * 接口 [现货-k线↗](https://yapi.nbttfc365.com/project/44/interface/api/2771) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/klines`
 * @更新时间 `2023-06-14 16:57:27`
 */
export interface YapiGetV1MarketKlinesApiResponse {
  data?: YapiGetV1MarketKlinesData
  code?: number
  message?: string
}
export interface YapiGetV1MarketKlinesData {
  list?: string[][]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-k线↗](https://yapi.nbttfc365.com/project/44/interface/api/2771)
// **/
// export const getV1MarketKlinesApiRequest: MarkcoinRequest<
//   YapiGetV1MarketKlinesApiRequest,
//   YapiGetV1MarketKlinesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/market/klines",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
