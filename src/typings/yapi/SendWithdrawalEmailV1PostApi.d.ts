/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [申请提币发送邮件验证码↗](https://yapi.nbttfc365.com/project/77/interface/api/8274) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/send/withdrawalEmail`
 * @更新时间 `2023-06-08 16:52:11`
 */
export interface YapiPostV1SendWithdrawalEmailApiRequest {
  /**
   * 固定传3
   */
  type: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 提币地址（内部划转，传uid）
   */
  address: string
  /**
   * 提币数量
   */
  quantity: string
  /**
   * 提币币种
   */
  currencyCode: string
  /**
   * 子币标签
   */
  memo: string
}

/**
 * 接口 [申请提币发送邮件验证码↗](https://yapi.nbttfc365.com/project/77/interface/api/8274) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/send/withdrawalEmail`
 * @更新时间 `2023-06-08 16:52:11`
 */
export interface YapiPostV1SendWithdrawalEmailApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1SendWithdrawalEmailData
}
export interface YapiPostV1SendWithdrawalEmailData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申请提币发送邮件验证码↗](https://yapi.nbttfc365.com/project/77/interface/api/8274)
// **/
// export const postV1SendWithdrawalEmailApiRequest: MarkcoinRequest<
//   YapiPostV1SendWithdrawalEmailApiRequest,
//   YapiPostV1SendWithdrawalEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/send/withdrawalEmail",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [申请提币发送邮件验证码↗](https://yapi.nbttfc365.com/project/44/interface/api/3819) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/send/withdrawalEmail`
 * @更新时间 `2022-12-29 17:15:45`
 */
export interface YapiPostV1SendWithdrawalEmailApiRequest {
  /**
   * 固定传3
   */
  type: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 提币地址（内部划转，传uid）
   */
  address: string
  /**
   * 提币数量
   */
  quantity: string
  /**
   * 提币币种
   */
  currencyCode: string
  /**
   * 子币标签
   */
  memo: string
}

/**
 * 接口 [申请提币发送邮件验证码↗](https://yapi.nbttfc365.com/project/44/interface/api/3819) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/send/withdrawalEmail`
 * @更新时间 `2022-12-29 17:15:45`
 */
export interface YapiPostV1SendWithdrawalEmailApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1SendWithdrawalEmailData
}
export interface YapiPostV1SendWithdrawalEmailData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申请提币发送邮件验证码↗](https://yapi.nbttfc365.com/project/44/interface/api/3819)
// **/
// export const postV1SendWithdrawalEmailApiRequest: MarkcoinRequest<
//   YapiPostV1SendWithdrawalEmailApiRequest,
//   YapiPostV1SendWithdrawalEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/send/withdrawalEmail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
