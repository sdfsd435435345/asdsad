/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [谷歌用于登录的验证↗](https://yapi.nbttfc365.com/project/77/interface/api/8349) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/safe/verify/google/login_check`
 * @更新时间 `2023-06-08 16:52:19`
 */
export interface YapiGetV1MemberSafeVerifyGoogleLoginCheckApiRequest {
  /**
   * 验证码
   */
  verifyCode: string
  uid: string
}

/**
 * 接口 [谷歌用于登录的验证↗](https://yapi.nbttfc365.com/project/77/interface/api/8349) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/safe/verify/google/login_check`
 * @更新时间 `2023-06-08 16:52:19`
 */
export interface YapiGetV1MemberSafeVerifyGoogleLoginCheckApiResponse {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [谷歌用于登录的验证↗](https://yapi.nbttfc365.com/project/77/interface/api/8349)
// **/
// export const getV1MemberSafeVerifyGoogleLoginCheckApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeVerifyGoogleLoginCheckApiRequest,
//   YapiGetV1MemberSafeVerifyGoogleLoginCheckApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/verify/google/login_check",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [谷歌用于登录的验证↗](https://yapi.nbttfc365.com/project/44/interface/api/2789) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/safe/verify/google/login_check`
 * @更新时间 `2022-10-12 10:57:07`
 */
export interface YapiGetV1MemberSafeVerifyGoogleLoginCheckApiRequest {
  /**
   * 验证码
   */
  verifyCode: string
  uid: string
}

/**
 * 接口 [谷歌用于登录的验证↗](https://yapi.nbttfc365.com/project/44/interface/api/2789) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/safe/verify/google/login_check`
 * @更新时间 `2022-10-12 10:57:07`
 */
export interface YapiGetV1MemberSafeVerifyGoogleLoginCheckApiResponse {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [谷歌用于登录的验证↗](https://yapi.nbttfc365.com/project/44/interface/api/2789)
// **/
// export const getV1MemberSafeVerifyGoogleLoginCheckApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeVerifyGoogleLoginCheckApiRequest,
//   YapiGetV1MemberSafeVerifyGoogleLoginCheckApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/verify/google/login_check",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
