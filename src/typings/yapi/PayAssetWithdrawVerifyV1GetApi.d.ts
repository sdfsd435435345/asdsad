/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [提币前校验↗](https://yapi.nbttfc365.com/project/77/interface/api/8469) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/asset/withdraw/verify`
 * @更新时间 `2023-06-12 14:20:14`
 */
export interface YapiGetV1PayAssetWithdrawVerifyApiRequest {}

/**
 * 接口 [提币前校验↗](https://yapi.nbttfc365.com/project/77/interface/api/8469) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/asset/withdraw/verify`
 * @更新时间 `2023-06-12 14:20:14`
 */
export interface YapiGetV1PayAssetWithdrawVerifyApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PayAssetWithdrawVerifyData
}
export interface YapiGetV1PayAssetWithdrawVerifyData {
  /**
   * 校验是否成功
   */
  isSuccess: boolean
  /**
   * 是否开启两项验证
   */
  isOpenSafeVerify: boolean
  /**
   * 错误码
   */
  errCode?: number
  /**
   * 错误提示
   */
  errMsg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [提币前校验↗](https://yapi.nbttfc365.com/project/77/interface/api/8469)
// **/
// export const getV1PayAssetWithdrawVerifyApiRequest: MarkcoinRequest<
//   YapiGetV1PayAssetWithdrawVerifyApiRequest,
//   YapiGetV1PayAssetWithdrawVerifyApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/asset/withdraw/verify",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
