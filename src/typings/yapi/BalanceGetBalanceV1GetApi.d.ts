/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [(后台接口)查询用户资金↗](https://yapi.nbttfc365.com/project/77/interface/api/8434) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/balance/getBalance`
 * @更新时间 `2023-06-08 16:52:41`
 */
export interface YapiGetV1BalanceGetBalanceApiRequest {
  /**
   * 币种id
   */
  coinId: string
}

/**
 * 接口 [(后台接口)查询用户资金↗](https://yapi.nbttfc365.com/project/77/interface/api/8434) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/balance/getBalance`
 * @更新时间 `2023-06-08 16:52:41`
 */
export interface YapiGetV1BalanceGetBalanceApiResponse {
  code?: number
  msg?: string
  data?: YapiGetV1BalanceGetBalanceData
}
export interface YapiGetV1BalanceGetBalanceData {
  businessId?: number
  coinId?: number
  uid?: number
  /**
   * 可用资金
   */
  balance?: number
  /**
   * 冻结资金
   */
  locked?: number
  /**
   * 总资金
   */
  total?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [(后台接口)查询用户资金↗](https://yapi.nbttfc365.com/project/77/interface/api/8434)
// **/
// export const getV1BalanceGetBalanceApiRequest: MarkcoinRequest<
//   YapiGetV1BalanceGetBalanceApiRequest,
//   YapiGetV1BalanceGetBalanceApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/balance/getBalance",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [(后台接口)查询用户资金↗](https://yapi.nbttfc365.com/project/44/interface/api/2564) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/balance/getBalance`
 * @更新时间 `2022-10-08 16:05:32`
 */
export interface YapiGetV1BalanceGetBalanceApiRequest {
  /**
   * 币种id
   */
  coinId: string
}

/**
 * 接口 [(后台接口)查询用户资金↗](https://yapi.nbttfc365.com/project/44/interface/api/2564) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/balance/getBalance`
 * @更新时间 `2022-10-08 16:05:32`
 */
export interface YapiGetV1BalanceGetBalanceApiResponse {
  code?: number
  msg?: string
  data?: YapiGetV1BalanceGetBalanceData
}
export interface YapiGetV1BalanceGetBalanceData {
  businessId?: number
  coinId?: number
  uid?: number
  /**
   * 可用资金
   */
  balance?: number
  /**
   * 冻结资金
   */
  locked?: number
  /**
   * 总资金
   */
  total?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [(后台接口)查询用户资金↗](https://yapi.nbttfc365.com/project/44/interface/api/2564)
// **/
// export const getV1BalanceGetBalanceApiRequest: MarkcoinRequest<
//   YapiGetV1BalanceGetBalanceApiRequest,
//   YapiGetV1BalanceGetBalanceApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/balance/getBalance",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
