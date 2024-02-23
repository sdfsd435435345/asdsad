/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [通用安全项验证↗](https://yapi.nbttfc365.com/project/77/interface/api/8324) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/common_verify`
 * @更新时间 `2023-06-08 16:52:18`
 */
export interface YapiPostV1MemberSafeCommonVerifyApiRequest {
  /**
   * 操作的类型 4.重置密码
   */
  operateType: number
  /**
   * 手机验证码
   */
  mobileVerifyCode: string
  /**
   * 邮箱验证码
   */
  emailVerifyCode: string
  /**
   * 谷歌验证码
   */
  googleVerifyCode: string
}

/**
 * 接口 [通用安全项验证↗](https://yapi.nbttfc365.com/project/77/interface/api/8324) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/common_verify`
 * @更新时间 `2023-06-08 16:52:18`
 */
export interface YapiPostV1MemberSafeCommonVerifyApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通用安全项验证↗](https://yapi.nbttfc365.com/project/77/interface/api/8324)
// **/
// export const postV1MemberSafeCommonVerifyApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeCommonVerifyApiRequest,
//   YapiPostV1MemberSafeCommonVerifyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/common_verify",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [通用安全项验证↗](https://yapi.nbttfc365.com/project/44/interface/api/2603) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/common_verify`
 * @更新时间 `2022-10-10 20:18:36`
 */
export interface YapiPostV1MemberSafeCommonVerifyApiRequest {
  /**
   * 操作的类型 4.重置密码
   */
  operateType: number
  /**
   * 手机验证码
   */
  mobileVerifyCode: string
  /**
   * 邮箱验证码
   */
  emailVerifyCode: string
  /**
   * 谷歌验证码
   */
  googleVerifyCode: string
}

/**
 * 接口 [通用安全项验证↗](https://yapi.nbttfc365.com/project/44/interface/api/2603) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/common_verify`
 * @更新时间 `2022-10-10 20:18:36`
 */
export interface YapiPostV1MemberSafeCommonVerifyApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通用安全项验证↗](https://yapi.nbttfc365.com/project/44/interface/api/2603)
// **/
// export const postV1MemberSafeCommonVerifyApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeCommonVerifyApiRequest,
//   YapiPostV1MemberSafeCommonVerifyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/common_verify",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
