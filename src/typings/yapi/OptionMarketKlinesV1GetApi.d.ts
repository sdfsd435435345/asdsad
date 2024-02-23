/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [k线接口↗](https://yapi.nbttfc365.com/project/44/interface/api/11089) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/market/klines`
 * @更新时间 `2023-08-24 14:53:06`
 */
export interface YapiGetV1OptionMarketKlinesApiRequest {
  /**
   * k线类型 枚举;
   *  s->秒；m -> 分钟
   * 1s
   * 1m
   * 5m
   * 15m
   */
  interval: string
  /**
   * 期权id
   */
  optionId: string
  /**
   * 多少条数据
   */
  limit: string
  /**
   * 结束时间
   */
  endTime?: string
}

/**
 * 接口 [k线接口↗](https://yapi.nbttfc365.com/project/44/interface/api/11089) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/market/klines`
 * @更新时间 `2023-08-24 14:53:06`
 */
export interface YapiGetV1OptionMarketKlinesApiResponse {
  message?: string
  code?: number
  data?: YapiGetV1OptionMarketKlinesData
}
export interface YapiGetV1OptionMarketKlinesData {
  list?: string[][]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [k线接口↗](https://yapi.nbttfc365.com/project/44/interface/api/11089)
// **/
// export const getV1OptionMarketKlinesApiRequest: MarkcoinRequest<
//   YapiGetV1OptionMarketKlinesApiRequest,
//   YapiGetV1OptionMarketKlinesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/market/klines",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
