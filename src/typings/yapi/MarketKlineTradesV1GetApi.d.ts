/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货K线-获取用户k线买卖点(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/11144) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/kline/trades`
 * @更新时间 `2023-09-12 10:05:23`
 */
export interface YapiGetV1MarketKlineTradesApiRequest {
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
   * 开始时间(毫秒)
   */
  startTimestamp?: string
  /**
   * 结束时间(毫秒)
   */
  endTimestamp?: string
  /**
   * 排序: asc 升序列，desc 降序
   */
  sort?: string
  /**
   * 返回最多的记录数量，未设置参数默认为 100，最大 1000
   */
  limit?: string
}

/**
 * 接口 [现货K线-获取用户k线买卖点(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/11144) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/kline/trades`
 * @更新时间 `2023-09-12 10:05:23`
 */
export interface YapiGetV1MarketKlineTradesApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货K线-获取用户k线买卖点(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/11144)
// **/
// export const getV1MarketKlineTradesApiRequest: MarkcoinRequest<
//   YapiGetV1MarketKlineTradesApiRequest,
//   YapiGetV1MarketKlineTradesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/market/kline/trades",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
