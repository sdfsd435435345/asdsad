/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取用户币种充值地址(内部接口)↗](https://yapi.nbttfc365.com/project/77/interface/api/8519) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /inner/v1/coin/depositAddress/list`
 * @更新时间 `2023-06-08 16:52:46`
 */
export interface YapiPostInnerV1CoinDepositAddressListApiRequest {
  /**
   * 商户id
   */
  businessId: number
  /**
   * 用户id
   */
  uid: number
  /**
   * 币种符号
   */
  symbol: string
}

/**
 * 接口 [获取用户币种充值地址(内部接口)↗](https://yapi.nbttfc365.com/project/77/interface/api/8519) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /inner/v1/coin/depositAddress/list`
 * @更新时间 `2023-06-08 16:52:46`
 */
export interface YapiPostInnerV1CoinDepositAddressListApiResponse {
  data: YapiPostInnerV1CoinDepositAddressListData[]
}
export interface YapiPostInnerV1CoinDepositAddressListData {
  /**
   * 币种id
   */
  id: number
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 主链币
   */
  mainnet: string
  /**
   * 主链类型
   */
  mainType: string
  /**
   * 充值地址
   */
  address: string
  memo?: string
  /**
   * 是否开启提现， 1 开启，2 关闭
   */
  isWithdraw: number
  /**
   * 是否开启充值， 1 开启，2 关闭
   */
  isDeposit: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取用户币种充值地址(内部接口)↗](https://yapi.nbttfc365.com/project/77/interface/api/8519)
// **/
// export const postInnerV1CoinDepositAddressListApiRequest: MarkcoinRequest<
//   YapiPostInnerV1CoinDepositAddressListApiRequest,
//   YapiPostInnerV1CoinDepositAddressListApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/coin/depositAddress/list",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [获取用户币种充值地址(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/5544) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/coin/depositAddress/list`
 * @更新时间 `2023-03-24 14:39:28`
 */
export interface YapiPostInnerV1CoinDepositAddressListApiRequest {
  /**
   * 商户id
   */
  businessId: number
  /**
   * 用户id
   */
  uid: number
  /**
   * 币种符号
   */
  symbol: string
}

/**
 * 接口 [获取用户币种充值地址(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/5544) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/coin/depositAddress/list`
 * @更新时间 `2023-03-24 14:39:28`
 */
export interface YapiPostInnerV1CoinDepositAddressListApiResponse {
  data: YapiPostInnerV1CoinDepositAddressListData[]
}
export interface YapiPostInnerV1CoinDepositAddressListData {
  /**
   * 币种id
   */
  id: number
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 主链币
   */
  mainnet: string
  /**
   * 主链类型
   */
  mainType: string
  /**
   * 充值地址
   */
  address: string
  memo?: string
  /**
   * 是否开启提现， 1 开启，2 关闭
   */
  isWithdraw: number
  /**
   * 是否开启充值， 1 开启，2 关闭
   */
  isDeposit: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取用户币种充值地址(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/5544)
// **/
// export const postInnerV1CoinDepositAddressListApiRequest: MarkcoinRequest<
//   YapiPostInnerV1CoinDepositAddressListApiRequest,
//   YapiPostInnerV1CoinDepositAddressListApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/coin/depositAddress/list",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
