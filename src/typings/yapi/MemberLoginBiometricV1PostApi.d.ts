/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [生物验证登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6124) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/biometric`
 * @更新时间 `2023-06-08 16:52:23`
 */
export interface YapiPostV1MemberLoginBiometricApiRequest {
  uid: string
  password: string
  /**
   * token有效期 毫秒级
   */
  tokenTtl?: number
}

/**
 * 接口 [生物验证登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6124) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/biometric`
 * @更新时间 `2023-06-08 16:52:23`
 */
export interface YapiPostV1MemberLoginBiometricApiResponse {
  /**
   * 状态码
   */
  code: number
  /**
   * 信息
   */
  message: string
  data: YapiPostV1MemberLoginBiometricData
}
/**
 * 数据
 */
export interface YapiPostV1MemberLoginBiometricData {
  /**
   * token
   */
  token: string
  /**
   * 刷新token
   */
  refreshToken: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [生物验证登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6124)
// **/
// export const postV1MemberLoginBiometricApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginBiometricApiRequest,
//   YapiPostV1MemberLoginBiometricApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/biometric",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [生物验证登录↗](https://yapi.nbttfc365.com/project/44/interface/api/192) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/biometric`
 * @更新时间 `2022-12-26 17:12:11`
 */
export interface YapiPostV1MemberLoginBiometricApiRequest {
  uid: string
  password: string
  /**
   * token有效期 毫秒级
   */
  tokenTtl?: number
}

/**
 * 接口 [生物验证登录↗](https://yapi.nbttfc365.com/project/44/interface/api/192) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/biometric`
 * @更新时间 `2022-12-26 17:12:11`
 */
export interface YapiPostV1MemberLoginBiometricApiResponse {
  /**
   * 状态码
   */
  code: number
  /**
   * 信息
   */
  message: string
  data: YapiPostV1MemberLoginBiometricData
}
/**
 * 数据
 */
export interface YapiPostV1MemberLoginBiometricData {
  /**
   * token
   */
  token: string
  /**
   * 刷新token
   */
  refreshToken: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [生物验证登录↗](https://yapi.nbttfc365.com/project/44/interface/api/192)
// **/
// export const postV1MemberLoginBiometricApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginBiometricApiRequest,
//   YapiPostV1MemberLoginBiometricApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/biometric",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
