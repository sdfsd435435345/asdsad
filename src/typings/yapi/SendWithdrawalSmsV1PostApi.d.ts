/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [申请提币发送短信验证码↗](https://yapi.nbttfc365.com/project/77/interface/api/8269) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/send/withdrawalSms`
 * @更新时间 `2023-06-08 16:52:11`
 */
export interface YapiPostV1SendWithdrawalSmsApiRequest {
  /**
   * 固定传3，提币
   */
  type: string
  /**
   * 手机号
   */
  mobile: string
  /**
   * 手机区号，未登陆必传
   */
  mobileCountryCode: string
  /**
   * 提币地址
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
 * 接口 [申请提币发送短信验证码↗](https://yapi.nbttfc365.com/project/77/interface/api/8269) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/send/withdrawalSms`
 * @更新时间 `2023-06-08 16:52:11`
 */
export interface YapiPostV1SendWithdrawalSmsApiResponse {
  code?: number
  messsage?: string
  data?: YapiPostV1SendWithdrawalSmsData
}
export interface YapiPostV1SendWithdrawalSmsData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申请提币发送短信验证码↗](https://yapi.nbttfc365.com/project/77/interface/api/8269)
// **/
// export const postV1SendWithdrawalSmsApiRequest: MarkcoinRequest<
//   YapiPostV1SendWithdrawalSmsApiRequest,
//   YapiPostV1SendWithdrawalSmsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/send/withdrawalSms",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [申请提币发送短信验证码↗](https://yapi.nbttfc365.com/project/44/interface/api/3815) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/send/withdrawalSms`
 * @更新时间 `2022-12-29 15:49:45`
 */
export interface YapiPostV1SendWithdrawalSmsApiRequest {
  /**
   * 固定传3，提币
   */
  type: string
  /**
   * 手机号
   */
  mobile: string
  /**
   * 手机区号，未登陆必传
   */
  mobileCountryCode: string
  /**
   * 提币地址
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
 * 接口 [申请提币发送短信验证码↗](https://yapi.nbttfc365.com/project/44/interface/api/3815) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/send/withdrawalSms`
 * @更新时间 `2022-12-29 15:49:45`
 */
export interface YapiPostV1SendWithdrawalSmsApiResponse {
  code?: number
  messsage?: string
  data?: YapiPostV1SendWithdrawalSmsData
}
export interface YapiPostV1SendWithdrawalSmsData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申请提币发送短信验证码↗](https://yapi.nbttfc365.com/project/44/interface/api/3815)
// **/
// export const postV1SendWithdrawalSmsApiRequest: MarkcoinRequest<
//   YapiPostV1SendWithdrawalSmsApiRequest,
//   YapiPostV1SendWithdrawalSmsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/send/withdrawalSms",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
