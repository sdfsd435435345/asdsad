/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [指数成分\/权重↗](https://yapi.nbttfc365.com/project/44/interface/api/11374) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/products/tradePair/marketFrom`
 * @更新时间 `2023-08-07 10:30:37`
 */
export interface YapiGetV1RaProductsTradePairMarketFromApiRequest {
  symbolWassName: string
}

/**
 * 接口 [指数成分\/权重↗](https://yapi.nbttfc365.com/project/44/interface/api/11374) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/products/tradePair/marketFrom`
 * @更新时间 `2023-08-07 10:30:37`
 */
export interface YapiGetV1RaProductsTradePairMarketFromApiResponse {
  data: YapiGetV1RaProductsTradePairMarketFromData
  code: number
  message: string
}
export interface YapiGetV1RaProductsTradePairMarketFromData {
  list: YapiGetV1RaProductsTradePairMarketFromListData[]
}
export interface YapiGetV1RaProductsTradePairMarketFromListData {
  /**
   * 交易所名称
   */
  webName: string
  /**
   * 在此交易所的币对名
   */
  symbol: string
  /**
   * 权重比例
   */
  percent: string
  /**
   * 图标
   */
  icon: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [指数成分/权重↗](https://yapi.nbttfc365.com/project/44/interface/api/11374)
// **/
// export const getV1RaProductsTradePairMarketFromApiRequest: MarkcoinRequest<
//   YapiGetV1RaProductsTradePairMarketFromApiRequest,
//   YapiGetV1RaProductsTradePairMarketFromApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/products/tradePair/marketFrom",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
