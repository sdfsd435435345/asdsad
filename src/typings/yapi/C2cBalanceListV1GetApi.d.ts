/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [广告账户余额列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4579) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /v1/c2c/balance/list`
 * @更新时间 `2023-03-29 19:46:27`
 */
export interface YapiGetV1C2cBalanceListApiRequest {}

/**
 * 接口 [广告账户余额列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4579) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /v1/c2c/balance/list`
 * @更新时间 `2023-03-29 19:46:27`
 */
export interface YapiGetV1C2cBalanceListApiResponse {
  code?: number
  data?: YapiGetV1C2CBalanceListData[]
  message?: string
}
export interface YapiGetV1C2CBalanceListData {
  uid?: number
  /**
   * 币种ID
   */
  coinId?: number
  /**
   * 币种代码 用于匹配汇率
   */
  symbol?: string
  /**
   * 可用余额
   */
  balance?: number
  businessId?: number
  /**
   * 冻结金额
   */
  freezeBalance?: number
  /**
   * app logo
   */
  appLogo: string
  /**
   * web logo
   */
  webLogo: string
  /**
   * 币种简称
   */
  coinName: string
  /**
   * 币种全称
   */
  coinFullName: string
  /**
   * usd估值
   */
  usdBalance: string
  /**
   * 申请广告商真实冻结资产（赔付会扣减）
   */
  merchantFreezeBalance: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告账户余额列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4579)
// **/
// export const getV1C2cBalanceListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cBalanceListApiRequest,
//   YapiGetV1C2cBalanceListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/balance/list",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [广告账户余额列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6564) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /v1/c2c/balance/list`
 * @更新时间 `2023-06-08 16:47:03`
 */
export interface YapiGetV1C2cBalanceListApiRequest {}

/**
 * 接口 [广告账户余额列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6564) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /v1/c2c/balance/list`
 * @更新时间 `2023-06-08 16:47:03`
 */
export interface YapiGetV1C2cBalanceListApiResponse {
  code?: number
  data?: YapiGetV1C2CBalanceListData[]
  message?: string
}
export interface YapiGetV1C2CBalanceListData {
  uid?: number
  /**
   * 币种ID
   */
  coinId?: number
  /**
   * 币种代码 用于匹配汇率
   */
  symbol?: string
  /**
   * 可用余额
   */
  balance?: number
  businessId?: number
  /**
   * 冻结金额
   */
  freezeBalance?: number
  /**
   * app logo
   */
  appLogo: string
  /**
   * web logo
   */
  webLogo: string
  /**
   * 币种简称
   */
  coinName: string
  /**
   * 币种全称
   */
  coinFullName: string
  /**
   * usd估值
   */
  usdBalance: string
  /**
   * 申请广告商真实冻结资产（赔付会扣减）
   */
  merchantFreezeBalance: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告账户余额列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6564)
// **/
// export const getV1C2cBalanceListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cBalanceListApiRequest,
//   YapiGetV1C2cBalanceListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/balance/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
