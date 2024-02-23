/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取用户资产数据↗](https://yapi.nbttfc365.com/project/77/interface/api/8524) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /inner/v1/balance/userBalance`
 * @更新时间 `2023-06-08 16:52:47`
 */
export interface YapiPostInnerV1BalanceUserBalanceApiRequest {
  /**
   * 商户id
   */
  businessId: number
  /**
   * 用户uid
   */
  uid: number
}

/**
 * 接口 [获取用户资产数据↗](https://yapi.nbttfc365.com/project/77/interface/api/8524) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /inner/v1/balance/userBalance`
 * @更新时间 `2023-06-08 16:52:47`
 */
export interface YapiPostInnerV1BalanceUserBalanceApiResponse {
  data: YapiPostInnerV1BalanceUserBalanceListData[]
}
export interface YapiPostInnerV1BalanceUserBalanceListData {
  /**
   * 用户uid
   */
  uid: number
  /**
   * 币种id
   */
  coinId: number
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 币种总资产
   */
  total: number
  /**
   * 币种可用数量
   */
  balance: number
  /**
   * 币种冻结数量
   */
  locked: number
  /**
   * 币种转为USDT可用数量
   */
  usdtBalance: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取用户资产数据↗](https://yapi.nbttfc365.com/project/77/interface/api/8524)
// **/
// export const postInnerV1BalanceUserBalanceApiRequest: MarkcoinRequest<
//   YapiPostInnerV1BalanceUserBalanceApiRequest,
//   YapiPostInnerV1BalanceUserBalanceApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/balance/userBalance",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [获取用户资产数据↗](https://yapi.nbttfc365.com/project/44/interface/api/5604) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/balance/userBalance`
 * @更新时间 `2023-04-20 15:34:58`
 */
export interface YapiPostInnerV1BalanceUserBalanceApiRequest {
  /**
   * 商户id
   */
  businessId: number
  /**
   * 用户uid
   */
  uid: number
}

/**
 * 接口 [获取用户资产数据↗](https://yapi.nbttfc365.com/project/44/interface/api/5604) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/balance/userBalance`
 * @更新时间 `2023-04-20 15:34:58`
 */
export interface YapiPostInnerV1BalanceUserBalanceApiResponse {
  data: YapiPostInnerV1BalanceUserBalanceListData[]
}
export interface YapiPostInnerV1BalanceUserBalanceListData {
  /**
   * 用户uid
   */
  uid: number
  /**
   * 币种id
   */
  coinId: number
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 币种总资产
   */
  total: number
  /**
   * 币种可用数量
   */
  balance: number
  /**
   * 币种冻结数量
   */
  locked: number
  /**
   * 币种转为USDT可用数量
   */
  usdtBalance: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取用户资产数据↗](https://yapi.nbttfc365.com/project/44/interface/api/5604)
// **/
// export const postInnerV1BalanceUserBalanceApiRequest: MarkcoinRequest<
//   YapiPostInnerV1BalanceUserBalanceApiRequest,
//   YapiPostInnerV1BalanceUserBalanceApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/balance/userBalance",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
