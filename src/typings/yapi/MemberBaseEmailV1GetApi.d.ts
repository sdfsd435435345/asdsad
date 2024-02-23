/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [通过uid获取邮箱地址↗](https://yapi.nbttfc365.com/project/77/interface/api/6184) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/base/email`
 * @更新时间 `2023-06-08 16:52:28`
 */
export interface YapiGetV1MemberBaseEmailApiRequest {
  /**
   * 会员uid
   */
  uid: string
}

/**
 * 接口 [通过uid获取邮箱地址↗](https://yapi.nbttfc365.com/project/77/interface/api/6184) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/base/email`
 * @更新时间 `2023-06-08 16:52:28`
 */
export interface YapiGetV1MemberBaseEmailApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiGetV1MemberBaseEmailData
  /**
   * 提示消息
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiGetV1MemberBaseEmailData {
  /**
   * 邮箱地址
   */
  email?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通过uid获取邮箱地址↗](https://yapi.nbttfc365.com/project/77/interface/api/6184)
// **/
// export const getV1MemberBaseEmailApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseEmailApiRequest,
//   YapiGetV1MemberBaseEmailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/email",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [通过uid获取邮箱地址↗](https://yapi.nbttfc365.com/project/44/interface/api/362) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/base/email`
 * @更新时间 `2022-09-22 17:55:38`
 */
export interface YapiGetV1MemberBaseEmailApiRequest {
  /**
   * 会员uid
   */
  uid: string
}

/**
 * 接口 [通过uid获取邮箱地址↗](https://yapi.nbttfc365.com/project/44/interface/api/362) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/base/email`
 * @更新时间 `2022-09-22 17:55:38`
 */
export interface YapiGetV1MemberBaseEmailApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiGetV1MemberBaseEmailData
  /**
   * 提示消息
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiGetV1MemberBaseEmailData {
  /**
   * 邮箱地址
   */
  email?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通过uid获取邮箱地址↗](https://yapi.nbttfc365.com/project/44/interface/api/362)
// **/
// export const getV1MemberBaseEmailApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseEmailApiRequest,
//   YapiGetV1MemberBaseEmailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/email",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
