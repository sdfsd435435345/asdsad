/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [google验证码验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6114) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/safe/verify/google/check`
 * @更新时间 `2023-06-08 16:52:23`
 */
export interface YapiGetV1MemberSafeVerifyGoogleCheckApiRequest {
  /**
   * 验证码
   */
  verifyCode: string
}

/**
 * 接口 [google验证码验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6114) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/safe/verify/google/check`
 * @更新时间 `2023-06-08 16:52:23`
 */
export interface YapiGetV1MemberSafeVerifyGoogleCheckApiResponse {
  /**
   * 成功标识
   */
  code: number
  /**
   * 异常备注
   */
  message: string
  data: YapiGetV1MemberSafeVerifyGoogleCheckData
}
/**
 * 数据内容
 */
export interface YapiGetV1MemberSafeVerifyGoogleCheckData {
  /**
   * 是否验证成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [google验证码验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6114)
// **/
// export const getV1MemberSafeVerifyGoogleCheckApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeVerifyGoogleCheckApiRequest,
//   YapiGetV1MemberSafeVerifyGoogleCheckApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/verify/google/check",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [google验证码验证↗](https://yapi.nbttfc365.com/project/44/interface/api/175) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/safe/verify/google/check`
 * @更新时间 `2022-09-21 11:04:50`
 */
export interface YapiGetV1MemberSafeVerifyGoogleCheckApiRequest {
  /**
   * 验证码
   */
  verifyCode: string
}

/**
 * 接口 [google验证码验证↗](https://yapi.nbttfc365.com/project/44/interface/api/175) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/safe/verify/google/check`
 * @更新时间 `2022-09-21 11:04:50`
 */
export interface YapiGetV1MemberSafeVerifyGoogleCheckApiResponse {
  /**
   * 成功标识
   */
  code: number
  /**
   * 异常备注
   */
  message: string
  data: YapiGetV1MemberSafeVerifyGoogleCheckData
}
/**
 * 数据内容
 */
export interface YapiGetV1MemberSafeVerifyGoogleCheckData {
  /**
   * 是否验证成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [google验证码验证↗](https://yapi.nbttfc365.com/project/44/interface/api/175)
// **/
// export const getV1MemberSafeVerifyGoogleCheckApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeVerifyGoogleCheckApiRequest,
//   YapiGetV1MemberSafeVerifyGoogleCheckApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/verify/google/check",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
