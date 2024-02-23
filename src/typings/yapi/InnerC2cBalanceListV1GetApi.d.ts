/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [广告账户余额列表，内部接口↗](https://yapi.nbttfc365.com/project/73/interface/api/5363) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /inner/c2c/v1/balance/list`
 * @更新时间 `2023-03-09 15:20:05`
 */
export interface YapiGetInnerC2cV1BalanceListApiRequest {
  uid: string
  businessId: string
}

/**
 * 接口 [广告账户余额列表，内部接口↗](https://yapi.nbttfc365.com/project/73/interface/api/5363) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /inner/c2c/v1/balance/list`
 * @更新时间 `2023-03-09 15:20:05`
 */
export type YapiGetInnerC2cV1BalanceListApiResponse = YapiGetInnerC2CV1BalanceList[]

export interface YapiGetInnerC2CV1BalanceList {
  businessId: string
  uid: string
  coinId: string
  /**
   * 可用余额
   */
  balance: string
  /**
   * 冻结金额
   */
  freezeBalance: string
  symbol: string
  coinFullName: string
  coinName: string
  appLogo: string
  webLogo: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告账户余额列表，内部接口↗](https://yapi.nbttfc365.com/project/73/interface/api/5363)
// **/
// export const getInnerC2cV1BalanceListApiRequest: MarkcoinRequest<
//   YapiGetInnerC2cV1BalanceListApiRequest,
//   YapiGetInnerC2cV1BalanceListApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/c2c/v1/balance/list",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [广告账户余额列表，内部接口↗](https://yapi.nbttfc365.com/project/77/interface/api/6569) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /inner/c2c/v1/balance/list`
 * @更新时间 `2023-06-08 16:47:04`
 */
export interface YapiGetInnerC2cV1BalanceListApiRequest {
  uid: string
  businessId: string
}

/**
 * 接口 [广告账户余额列表，内部接口↗](https://yapi.nbttfc365.com/project/77/interface/api/6569) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /inner/c2c/v1/balance/list`
 * @更新时间 `2023-06-08 16:47:04`
 */
export type YapiGetInnerC2cV1BalanceListApiResponse = YapiGetInnerC2CV1BalanceList[]

export interface YapiGetInnerC2CV1BalanceList {
  businessId: string
  uid: string
  coinId: string
  /**
   * 可用余额
   */
  balance: string
  /**
   * 冻结金额
   */
  freezeBalance: string
  symbol: string
  coinFullName: string
  coinName: string
  appLogo: string
  webLogo: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告账户余额列表，内部接口↗](https://yapi.nbttfc365.com/project/77/interface/api/6569)
// **/
// export const getInnerC2cV1BalanceListApiRequest: MarkcoinRequest<
//   YapiGetInnerC2cV1BalanceListApiRequest,
//   YapiGetInnerC2cV1BalanceListApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/c2c/v1/balance/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
