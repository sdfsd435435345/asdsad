/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [(后台接口)查询用户资金_inner↗](https://yapi.nbttfc365.com/project/77/interface/api/8439) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /inner/v1/balance/getBalance`
 * @更新时间 `2023-06-08 16:52:41`
 */
export interface YapiGetInnerV1BalanceGetBalanceApiRequest {
  /**
   * uid
   */
  uid: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 商户id
   */
  businessId: string
}

/**
 * 接口 [(后台接口)查询用户资金_inner↗](https://yapi.nbttfc365.com/project/77/interface/api/8439) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /inner/v1/balance/getBalance`
 * @更新时间 `2023-06-08 16:52:41`
 */
export interface YapiGetInnerV1BalanceGetBalanceApiResponse {
  businessId: string
  coinId: string
  uid: string
  /**
   * 可用资金
   */
  balance: string
  /**
   * 冻结资金
   */
  locked: string
  /**
   * 总资金
   */
  total: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [(后台接口)查询用户资金_inner↗](https://yapi.nbttfc365.com/project/77/interface/api/8439)
// **/
// export const getInnerV1BalanceGetBalanceApiRequest: MarkcoinRequest<
//   YapiGetInnerV1BalanceGetBalanceApiRequest,
//   YapiGetInnerV1BalanceGetBalanceApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/balance/getBalance",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [(后台接口)查询用户资金_inner↗](https://yapi.nbttfc365.com/project/44/interface/api/2693) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /inner/v1/balance/getBalance`
 * @更新时间 `2023-03-03 16:38:02`
 */
export interface YapiGetInnerV1BalanceGetBalanceApiRequest {
  /**
   * uid
   */
  uid: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 商户id
   */
  businessId: string
}

/**
 * 接口 [(后台接口)查询用户资金_inner↗](https://yapi.nbttfc365.com/project/44/interface/api/2693) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /inner/v1/balance/getBalance`
 * @更新时间 `2023-03-03 16:38:02`
 */
export interface YapiGetInnerV1BalanceGetBalanceApiResponse {
  businessId: string
  coinId: string
  uid: string
  /**
   * 可用资金
   */
  balance: string
  /**
   * 冻结资金
   */
  locked: string
  /**
   * 总资金
   */
  total: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [(后台接口)查询用户资金_inner↗](https://yapi.nbttfc365.com/project/44/interface/api/2693)
// **/
// export const getInnerV1BalanceGetBalanceApiRequest: MarkcoinRequest<
//   YapiGetInnerV1BalanceGetBalanceApiRequest,
//   YapiGetInnerV1BalanceGetBalanceApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/balance/getBalance",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
