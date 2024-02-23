/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [修改google验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6204) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/google/update`
 * @更新时间 `2023-06-08 16:52:29`
 */
export interface YapiPostV1MemberSafeGoogleUpdateApiRequest {
  /**
   * 新的google密钥
   */
  secretKey: string
  /**
   * 新google密钥的验证码
   */
  verifyCode: string
  /**
   * 手机验证码
   */
  mobileVerifyCode?: string
  /**
   * 邮箱验证码
   */
  emailVerifyCode?: string
}

/**
 * 接口 [修改google验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6204) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/google/update`
 * @更新时间 `2023-06-08 16:52:29`
 */
export interface YapiPostV1MemberSafeGoogleUpdateApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberSafeGoogleUpdateData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeGoogleUpdateData {
  /**
   * 绑定是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改google验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6204)
// **/
// export const postV1MemberSafeGoogleUpdateApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeGoogleUpdateApiRequest,
//   YapiPostV1MemberSafeGoogleUpdateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/google/update",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [修改google验证↗](https://yapi.nbttfc365.com/project/44/interface/api/419) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/google/update`
 * @更新时间 `2022-10-26 10:18:48`
 */
export interface YapiPostV1MemberSafeGoogleUpdateApiRequest {
  /**
   * 新的google密钥
   */
  secretKey: string
  /**
   * 新google密钥的验证码
   */
  verifyCode: string
  /**
   * 手机验证码
   */
  mobileVerifyCode?: string
  /**
   * 邮箱验证码
   */
  emailVerifyCode?: string
}

/**
 * 接口 [修改google验证↗](https://yapi.nbttfc365.com/project/44/interface/api/419) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/google/update`
 * @更新时间 `2022-10-26 10:18:48`
 */
export interface YapiPostV1MemberSafeGoogleUpdateApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberSafeGoogleUpdateData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeGoogleUpdateData {
  /**
   * 绑定是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改google验证↗](https://yapi.nbttfc365.com/project/44/interface/api/419)
// **/
// export const postV1MemberSafeGoogleUpdateApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeGoogleUpdateApiRequest,
//   YapiPostV1MemberSafeGoogleUpdateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/google/update",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
