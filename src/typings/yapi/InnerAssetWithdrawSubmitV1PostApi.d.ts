/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [c2c提现接口(内部接口)↗](https://yapi.nbttfc365.com/project/77/interface/api/8454) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /inner/v1/asset/withdraw/submit`
 * @更新时间 `2023-06-08 16:52:42`
 */
export interface YapiPostInnerV1AssetWithdrawSubmitApiRequest {
  /**
   * uid
   */
  uid: string
  /**
   * 商户id
   */
  businessId: string
  /**
   * 提现类型
   */
  type: string
  /**
   * 币种ID
   */
  coinId: number
  /**
   * 提币地址
   */
  address: string
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 提币数量
   */
  amount: number
  /**
   * 充值地址标签
   */
  memo?: string
  /**
   * 用户kyc实名
   */
  realName?: string
}

/**
 * 接口 [c2c提现接口(内部接口)↗](https://yapi.nbttfc365.com/project/77/interface/api/8454) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /inner/v1/asset/withdraw/submit`
 * @更新时间 `2023-06-08 16:52:42`
 */
export interface YapiPostInnerV1AssetWithdrawSubmitApiResponse {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [c2c提现接口(内部接口)↗](https://yapi.nbttfc365.com/project/77/interface/api/8454)
// **/
// export const postInnerV1AssetWithdrawSubmitApiRequest: MarkcoinRequest<
//   YapiPostInnerV1AssetWithdrawSubmitApiRequest,
//   YapiPostInnerV1AssetWithdrawSubmitApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/asset/withdraw/submit",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [提现接口(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/5381) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/asset/withdraw/submit`
 * @更新时间 `2023-09-06 18:33:38`
 */
export interface YapiPostInnerV1AssetWithdrawSubmitApiRequest {
  /**
   * 提币uid
   */
  uid: string
  /**
   * 提币用户商户id
   */
  businessId: string
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 提币数量
   */
  amount: number
  /**
   * 提币用户kyc实名
   */
  realName?: string
  /**
   * 充值uid
   */
  receiveUid: string
  /**
   * 充值用户商户id
   */
  receiveBusinessId: string
  /**
   * 接口幂等参数
   */
  uuid: string
}

/**
 * 接口 [提现接口(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/5381) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/asset/withdraw/submit`
 * @更新时间 `2023-09-06 18:33:38`
 */
export interface YapiPostInnerV1AssetWithdrawSubmitApiResponse {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [提现接口(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/5381)
// **/
// export const postInnerV1AssetWithdrawSubmitApiRequest: MarkcoinRequest<
//   YapiPostInnerV1AssetWithdrawSubmitApiRequest,
//   YapiPostInnerV1AssetWithdrawSubmitApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/asset/withdraw/submit",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
