/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [（后台接口）新增用户余额_inner↗](https://yapi.nbttfc365.com/project/77/interface/api/8604) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /inner/v1/balance/addBalance`
 * @更新时间 `2023-06-08 16:52:54`
 */
export interface YapiPostInnerV1BalanceAddBalanceApiRequest {
  /**
   * 用户uid
   */
  uid: number
  /**
   * 商户id
   */
  businessId: number
  /**
   * 新增的币种id
   */
  coinId: number
  /**
   * 新增金额
   */
  amount: string
  /**
   * 日志类型
   */
  reason: number
  /**
   * 来源id
   */
  srcId: number
  /**
   * 幂等参数
   */
  uuid: string
  /**
   * 手续费币种
   */
  feeCoinId: number
  /**
   * 手续费
   */
  fee: number
  /**
   * 手续费类型
   */
  feeReason: number
}

/**
 * 接口 [（后台接口）新增用户余额_inner↗](https://yapi.nbttfc365.com/project/77/interface/api/8604) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /inner/v1/balance/addBalance`
 * @更新时间 `2023-06-08 16:52:54`
 */
export interface YapiPostInnerV1BalanceAddBalanceApiResponse {
  isSuccess?: boolean
  msg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（后台接口）新增用户余额_inner↗](https://yapi.nbttfc365.com/project/77/interface/api/8604)
// **/
// export const postInnerV1BalanceAddBalanceApiRequest: MarkcoinRequest<
//   YapiPostInnerV1BalanceAddBalanceApiRequest,
//   YapiPostInnerV1BalanceAddBalanceApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/balance/addBalance",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [（后台接口）新增用户余额_inner↗](https://yapi.nbttfc365.com/project/44/interface/api/2765) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/balance/addBalance`
 * @更新时间 `2023-11-06 15:33:48`
 */
export interface YapiPostInnerV1BalanceAddBalanceApiRequest {
  /**
   * 用户uid
   */
  uid: number
  /**
   * 商户id
   */
  businessId: number
  /**
   * 新增的币种id
   */
  coinId: number
  /**
   * 新增金额
   */
  amount: string
  /**
   * 日志类型
   */
  reason: number
  /**
   * 来源id
   */
  srcId: number
  /**
   * 幂等参数
   */
  uuid: string
  /**
   * 手续费币种
   */
  feeCoinId?: number
  /**
   * 手续费
   */
  fee: number
  /**
   * 手续费类型
   */
  feeReason?: number
}

/**
 * 接口 [（后台接口）新增用户余额_inner↗](https://yapi.nbttfc365.com/project/44/interface/api/2765) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/balance/addBalance`
 * @更新时间 `2023-11-06 15:33:48`
 */
export interface YapiPostInnerV1BalanceAddBalanceApiResponse {
  isSuccess?: boolean
  msg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（后台接口）新增用户余额_inner↗](https://yapi.nbttfc365.com/project/44/interface/api/2765)
// **/
// export const postInnerV1BalanceAddBalanceApiRequest: MarkcoinRequest<
//   YapiPostInnerV1BalanceAddBalanceApiRequest,
//   YapiPostInnerV1BalanceAddBalanceApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/balance/addBalance",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
