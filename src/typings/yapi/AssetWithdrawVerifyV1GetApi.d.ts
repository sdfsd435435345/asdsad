/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [提币前校验↗](https://yapi.nbttfc365.com/project/44/interface/api/2735) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/asset/withdraw/verify`
 * @更新时间 `2022-10-10 10:44:45`
 */
export interface YapiGetV1AssetWithdrawVerifyApiRequest {}

/**
 * 接口 [提币前校验↗](https://yapi.nbttfc365.com/project/44/interface/api/2735) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/asset/withdraw/verify`
 * @更新时间 `2022-10-10 10:44:45`
 */
export interface YapiGetV1AssetWithdrawVerifyApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1AssetWithdrawVerifyData
}
export interface YapiGetV1AssetWithdrawVerifyData {
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
// * [提币前校验↗](https://yapi.nbttfc365.com/project/44/interface/api/2735)
// **/
// export const getV1AssetWithdrawVerifyApiRequest: MarkcoinRequest<
//   YapiGetV1AssetWithdrawVerifyApiRequest,
//   YapiGetV1AssetWithdrawVerifyApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/asset/withdraw/verify",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
