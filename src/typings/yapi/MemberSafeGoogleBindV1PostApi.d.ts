/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [绑定google验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6074) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/google/bind`
 * @更新时间 `2023-06-08 16:52:21`
 */
export interface YapiPostV1MemberSafeGoogleBindApiRequest {
  /**
   * google密钥
   */
  secretKey: string
  /**
   * 验证码
   */
  verifyCode: string
}

/**
 * 接口 [绑定google验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6074) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/google/bind`
 * @更新时间 `2023-06-08 16:52:21`
 */
export interface YapiPostV1MemberSafeGoogleBindApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberSafeGoogleBindData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeGoogleBindData {
  /**
   * 绑定是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [绑定google验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6074)
// **/
// export const postV1MemberSafeGoogleBindApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeGoogleBindApiRequest,
//   YapiPostV1MemberSafeGoogleBindApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/google/bind",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [绑定google验证↗](https://yapi.nbttfc365.com/project/44/interface/api/151) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/google/bind`
 * @更新时间 `2022-10-26 10:16:51`
 */
export interface YapiPostV1MemberSafeGoogleBindApiRequest {
  /**
   * google密钥
   */
  secretKey: string
  /**
   * 验证码
   */
  verifyCode: string
}

/**
 * 接口 [绑定google验证↗](https://yapi.nbttfc365.com/project/44/interface/api/151) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/google/bind`
 * @更新时间 `2022-10-26 10:16:51`
 */
export interface YapiPostV1MemberSafeGoogleBindApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberSafeGoogleBindData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeGoogleBindData {
  /**
   * 绑定是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [绑定google验证↗](https://yapi.nbttfc365.com/project/44/interface/api/151)
// **/
// export const postV1MemberSafeGoogleBindApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeGoogleBindApiRequest,
//   YapiPostV1MemberSafeGoogleBindApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/google/bind",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
