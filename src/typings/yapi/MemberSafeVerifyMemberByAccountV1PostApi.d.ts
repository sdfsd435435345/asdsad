/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据账号获取安全项验证科目↗](https://yapi.nbttfc365.com/project/77/interface/api/8359) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /v1/member/safe/verifyMemberByAccount`
 * @更新时间 `2023-06-08 16:52:33`
 */
export interface YapiPostV1MemberSafeVerifyMemberByAccountApiRequest {
  /**
   * 1.手机 2.邮箱
   */
  type: number
  /**
   * 账号（手机号或邮箱号）
   */
  accountName: string
  /**
   * 密码
   */
  password: string
}

/**
 * 接口 [根据账号获取安全项验证科目↗](https://yapi.nbttfc365.com/project/77/interface/api/8359) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /v1/member/safe/verifyMemberByAccount`
 * @更新时间 `2023-06-08 16:52:33`
 */
export interface YapiPostV1MemberSafeVerifyMemberByAccountApiResponse {
  isOpenEmailVerify?: number
  isOpenGoogleVerify?: number
  isOpenPhoneVerify?: number
  mobileCountryCd?: string
  mobileNumber?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据账号获取安全项验证科目↗](https://yapi.nbttfc365.com/project/77/interface/api/8359)
// **/
// export const postV1MemberSafeVerifyMemberByAccountApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeVerifyMemberByAccountApiRequest,
//   YapiPostV1MemberSafeVerifyMemberByAccountApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/verifyMemberByAccount",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [根据账号获取安全项验证科目↗](https://yapi.nbttfc365.com/project/44/interface/api/2579) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /v1/member/safe/verifyMemberByAccount`
 * @更新时间 `2022-09-26 15:10:45`
 */
export interface YapiPostV1MemberSafeVerifyMemberByAccountApiRequest {
  /**
   * 1.手机 2.邮箱
   */
  type: number
  /**
   * 账号（手机号或邮箱号）
   */
  accountName: string
  /**
   * 密码
   */
  password: string
}

/**
 * 接口 [根据账号获取安全项验证科目↗](https://yapi.nbttfc365.com/project/44/interface/api/2579) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /v1/member/safe/verifyMemberByAccount`
 * @更新时间 `2022-09-26 15:10:45`
 */
export interface YapiPostV1MemberSafeVerifyMemberByAccountApiResponse {
  isOpenEmailVerify?: number
  isOpenGoogleVerify?: number
  isOpenPhoneVerify?: number
  mobileCountryCd?: string
  mobileNumber?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据账号获取安全项验证科目↗](https://yapi.nbttfc365.com/project/44/interface/api/2579)
// **/
// export const postV1MemberSafeVerifyMemberByAccountApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeVerifyMemberByAccountApiRequest,
//   YapiPostV1MemberSafeVerifyMemberByAccountApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/verifyMemberByAccount",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
