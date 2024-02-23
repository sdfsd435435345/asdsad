/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [生物验证状态查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6234) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `GET /v1/member/safe/queryBiometricStatus`
 * @更新时间 `2023-06-08 16:52:33`
 */
export interface YapiGetV1MemberSafeQueryBiometricStatusApiRequest {
  /**
   * 设备MEID
   */
  deviceNo: string
}

/**
 * 接口 [生物验证状态查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6234) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `GET /v1/member/safe/queryBiometricStatus`
 * @更新时间 `2023-06-08 16:52:33`
 */
export interface YapiGetV1MemberSafeQueryBiometricStatusApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1MemberSafeQueryBiometricStatusData
}
export interface YapiGetV1MemberSafeQueryBiometricStatusData {
  /**
   * 用户id
   */
  uid: string
  /**
   * 生物验证   1 已开启 ， 2 未开启
   */
  isBiometricVerify: number
  /**
   * 生物认证状态类型 1 faceid 2 指纹
   */
  biometricTypeInd: number
  /**
   *  1 web，2 ios，3 android
   */
  deviceTypeInd: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [生物验证状态查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6234)
// **/
// export const getV1MemberSafeQueryBiometricStatusApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeQueryBiometricStatusApiRequest,
//   YapiGetV1MemberSafeQueryBiometricStatusApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/queryBiometricStatus",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [生物验证状态查询↗](https://yapi.nbttfc365.com/project/44/interface/api/178) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `GET /v1/member/safe/queryBiometricStatus`
 * @更新时间 `2022-10-24 18:04:50`
 */
export interface YapiGetV1MemberSafeQueryBiometricStatusApiRequest {
  /**
   * 设备MEID
   */
  deviceNo: string
}

/**
 * 接口 [生物验证状态查询↗](https://yapi.nbttfc365.com/project/44/interface/api/178) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `GET /v1/member/safe/queryBiometricStatus`
 * @更新时间 `2022-10-24 18:04:50`
 */
export interface YapiGetV1MemberSafeQueryBiometricStatusApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1MemberSafeQueryBiometricStatusData
}
export interface YapiGetV1MemberSafeQueryBiometricStatusData {
  /**
   * 用户id
   */
  uid: string
  /**
   * 生物验证   1 已开启 ， 2 未开启
   */
  isBiometricVerify: number
  /**
   * 生物认证状态类型 1 faceid 2 指纹
   */
  biometricTypeInd: number
  /**
   *  1 web，2 ios，3 android
   */
  deviceTypeInd: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [生物验证状态查询↗](https://yapi.nbttfc365.com/project/44/interface/api/178)
// **/
// export const getV1MemberSafeQueryBiometricStatusApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeQueryBiometricStatusApiRequest,
//   YapiGetV1MemberSafeQueryBiometricStatusApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/queryBiometricStatus",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
