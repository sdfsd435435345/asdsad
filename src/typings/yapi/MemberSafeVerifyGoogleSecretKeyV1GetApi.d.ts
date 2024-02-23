/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取google绑定密钥↗](https://yapi.nbttfc365.com/project/77/interface/api/6089) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/safe/verify/google/secret/key`
 * @更新时间 `2023-06-08 16:52:21`
 */
export interface YapiGetV1MemberSafeVerifyGoogleSecretKeyApiRequest {}

/**
 * 接口 [获取google绑定密钥↗](https://yapi.nbttfc365.com/project/77/interface/api/6089) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/safe/verify/google/secret/key`
 * @更新时间 `2023-06-08 16:52:21`
 */
export interface YapiGetV1MemberSafeVerifyGoogleSecretKeyApiResponse {
  data?: YapiGetV1MemberSafeVerifyGoogleSecretKeyData
  /**
   * 提示
   */
  message?: string
  /**
   * 请求是否成功
   */
  code?: number
}
/**
 * 数据集
 */
export interface YapiGetV1MemberSafeVerifyGoogleSecretKeyData {
  /**
   * google密钥
   */
  secretKey?: string
  /**
   * google二维码地址
   */
  qrPath?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取google绑定密钥↗](https://yapi.nbttfc365.com/project/77/interface/api/6089)
// **/
// export const getV1MemberSafeVerifyGoogleSecretKeyApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeVerifyGoogleSecretKeyApiRequest,
//   YapiGetV1MemberSafeVerifyGoogleSecretKeyApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/verify/google/secret/key",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取google绑定密钥↗](https://yapi.nbttfc365.com/project/44/interface/api/160) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/safe/verify/google/secret/key`
 * @更新时间 `2022-07-22 13:48:46`
 */
export interface YapiGetV1MemberSafeVerifyGoogleSecretKeyApiRequest {}

/**
 * 接口 [获取google绑定密钥↗](https://yapi.nbttfc365.com/project/44/interface/api/160) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/safe/verify/google/secret/key`
 * @更新时间 `2022-07-22 13:48:46`
 */
export interface YapiGetV1MemberSafeVerifyGoogleSecretKeyApiResponse {
  data?: YapiGetV1MemberSafeVerifyGoogleSecretKeyData
  /**
   * 提示
   */
  message?: string
  /**
   * 请求是否成功
   */
  code?: number
}
/**
 * 数据集
 */
export interface YapiGetV1MemberSafeVerifyGoogleSecretKeyData {
  /**
   * google密钥
   */
  secretKey?: string
  /**
   * google二维码地址
   */
  qrPath?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取google绑定密钥↗](https://yapi.nbttfc365.com/project/44/interface/api/160)
// **/
// export const getV1MemberSafeVerifyGoogleSecretKeyApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeVerifyGoogleSecretKeyApiRequest,
//   YapiGetV1MemberSafeVerifyGoogleSecretKeyApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/verify/google/secret/key",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
