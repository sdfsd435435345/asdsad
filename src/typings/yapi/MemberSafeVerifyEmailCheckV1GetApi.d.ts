/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邮箱验证码验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6109) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/safe/verify/email/check`
 * @更新时间 `2023-06-08 16:52:22`
 */
export interface YapiGetV1MemberSafeVerifyEmailCheckApiRequest {
  /**
   * 验证码
   */
  verifyCode: string
  /**
   * 用户未登录时验证需要传入
   */
  email?: string
}

/**
 * 接口 [邮箱验证码验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6109) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/safe/verify/email/check`
 * @更新时间 `2023-06-08 16:52:22`
 */
export interface YapiGetV1MemberSafeVerifyEmailCheckApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  /**
   * 提示信息
   */
  message?: string
  data?: YapiGetV1MemberSafeVerifyEmailCheckData
}
/**
 * 数据集
 */
export interface YapiGetV1MemberSafeVerifyEmailCheckData {
  /**
   * 验证状态
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邮箱验证码验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6109)
// **/
// export const getV1MemberSafeVerifyEmailCheckApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeVerifyEmailCheckApiRequest,
//   YapiGetV1MemberSafeVerifyEmailCheckApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/verify/email/check",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [邮箱验证码验证↗](https://yapi.nbttfc365.com/project/44/interface/api/172) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/safe/verify/email/check`
 * @更新时间 `2022-08-05 15:38:15`
 */
export interface YapiGetV1MemberSafeVerifyEmailCheckApiRequest {
  /**
   * 验证码
   */
  verifyCode: string
  /**
   * 用户未登录时验证需要传入
   */
  email?: string
}

/**
 * 接口 [邮箱验证码验证↗](https://yapi.nbttfc365.com/project/44/interface/api/172) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/safe/verify/email/check`
 * @更新时间 `2022-08-05 15:38:15`
 */
export interface YapiGetV1MemberSafeVerifyEmailCheckApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  /**
   * 提示信息
   */
  message?: string
  data?: YapiGetV1MemberSafeVerifyEmailCheckData
}
/**
 * 数据集
 */
export interface YapiGetV1MemberSafeVerifyEmailCheckData {
  /**
   * 验证状态
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邮箱验证码验证↗](https://yapi.nbttfc365.com/project/44/interface/api/172)
// **/
// export const getV1MemberSafeVerifyEmailCheckApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeVerifyEmailCheckApiRequest,
//   YapiGetV1MemberSafeVerifyEmailCheckApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/verify/email/check",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
