/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取汇率↗](https://yapi.nbttfc365.com/project/73/interface/api/5282) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `GET /v1/c2c/quickTransaction/getRate`
 * @更新时间 `2023-03-20 17:02:03`
 */
export interface YapiGetV1C2cQuickTransactionGetRateApiRequest {
  /**
   * 购买币种代码
   */
  buySymbol: string
  /**
   * 支付币种代码
   */
  paySymbol: string
  /**
   * 区域码
   */
  areaId: string
}

/**
 * 接口 [获取汇率↗](https://yapi.nbttfc365.com/project/73/interface/api/5282) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `GET /v1/c2c/quickTransaction/getRate`
 * @更新时间 `2023-03-20 17:02:03`
 */
export interface YapiGetV1C2cQuickTransactionGetRateApiResponse {
  code: number
  data: YapiGetV1C2CQuickTransactionGetRateData
  message: string
}
/**
 * 汇率，例如》7.26
 */
export interface YapiGetV1C2CQuickTransactionGetRateData {
  /**
   * 汇率
   */
  rate: string
  /**
   * 精度的偏移
   */
  precesion: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取汇率↗](https://yapi.nbttfc365.com/project/73/interface/api/5282)
// **/
// export const getV1C2cQuickTransactionGetRateApiRequest: MarkcoinRequest<
//   YapiGetV1C2cQuickTransactionGetRateApiRequest,
//   YapiGetV1C2cQuickTransactionGetRateApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/quickTransaction/getRate",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取汇率↗](https://yapi.nbttfc365.com/project/77/interface/api/6784) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `GET /v1/c2c/quickTransaction/getRate`
 * @更新时间 `2023-06-08 16:47:19`
 */
export interface YapiGetV1C2cQuickTransactionGetRateApiRequest {
  /**
   * 购买币种代码
   */
  buySymbol: string
  /**
   * 支付币种代码
   */
  paySymbol: string
  /**
   * 区域码
   */
  areaId: string
}

/**
 * 接口 [获取汇率↗](https://yapi.nbttfc365.com/project/77/interface/api/6784) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `GET /v1/c2c/quickTransaction/getRate`
 * @更新时间 `2023-06-08 16:47:19`
 */
export interface YapiGetV1C2cQuickTransactionGetRateApiResponse {
  code: number
  data: YapiGetV1C2CQuickTransactionGetRateData
  message: string
}
/**
 * 汇率，例如》7.26
 */
export interface YapiGetV1C2CQuickTransactionGetRateData {
  /**
   * 汇率
   */
  rate: string
  /**
   * 精度的偏移
   */
  precesion: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取汇率↗](https://yapi.nbttfc365.com/project/77/interface/api/6784)
// **/
// export const getV1C2cQuickTransactionGetRateApiRequest: MarkcoinRequest<
//   YapiGetV1C2cQuickTransactionGetRateApiRequest,
//   YapiGetV1C2cQuickTransactionGetRateApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/quickTransaction/getRate",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
