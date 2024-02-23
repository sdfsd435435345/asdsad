/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [重置密码↗](https://yapi.nbttfc365.com/project/77/interface/api/6189) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/pwd/reset`
 * @更新时间 `2023-06-08 16:52:28`
 */
export interface YapiPostV1MemberSafePwdResetApiRequest {
  /**
   * 手机区号 （当safeVerifyType=1时不能为空）
   */
  mobileCountryCode?: string
  /**
   * safeVerifyType=1 传手机号，safeVerifyType=2 传email
   */
  account: string
  /**
   * 新密码
   */
  newPassword: string
  /**
   * 类型 1 手机  2 邮箱 3 uid
   */
  safeVerifyType: number
  /**
   * 6位验证码
   */
  verifyCode: number
}

/**
 * 接口 [重置密码↗](https://yapi.nbttfc365.com/project/77/interface/api/6189) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/pwd/reset`
 * @更新时间 `2023-06-08 16:52:28`
 */
export interface YapiPostV1MemberSafePwdResetApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberSafePwdResetData
  /**
   * 请求提示内容
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafePwdResetData {
  /**
   * 是否重置成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [重置密码↗](https://yapi.nbttfc365.com/project/77/interface/api/6189)
// **/
// export const postV1MemberSafePwdResetApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafePwdResetApiRequest,
//   YapiPostV1MemberSafePwdResetApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/pwd/reset",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [重置密码↗](https://yapi.nbttfc365.com/project/44/interface/api/365) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/pwd/reset`
 * @更新时间 `2022-10-18 13:57:31`
 */
export interface YapiPostV1MemberSafePwdResetApiRequest {
  /**
   * 手机区号 （当safeVerifyType=1时不能为空）
   */
  mobileCountryCode?: string
  /**
   * safeVerifyType=1 传手机号，safeVerifyType=2 传email
   */
  account: string
  /**
   * 新密码
   */
  newPassword: string
  /**
   * 类型 1 手机  2 邮箱 3 uid
   */
  safeVerifyType: number
  /**
   * 6位验证码
   */
  verifyCode: number
}

/**
 * 接口 [重置密码↗](https://yapi.nbttfc365.com/project/44/interface/api/365) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/pwd/reset`
 * @更新时间 `2022-10-18 13:57:31`
 */
export interface YapiPostV1MemberSafePwdResetApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberSafePwdResetData
  /**
   * 请求提示内容
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafePwdResetData {
  /**
   * 是否重置成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [重置密码↗](https://yapi.nbttfc365.com/project/44/interface/api/365)
// **/
// export const postV1MemberSafePwdResetApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafePwdResetApiRequest,
//   YapiPostV1MemberSafePwdResetApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/pwd/reset",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
