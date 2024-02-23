/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [通过uid获取手机号码↗](https://yapi.nbttfc365.com/project/77/interface/api/6194) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/base/mobille`
 * @更新时间 `2023-06-08 16:52:28`
 */
export interface YapiGetV1MemberBaseMobilleApiRequest {
  /**
   * 会员uid
   */
  uid: string
}

/**
 * 接口 [通过uid获取手机号码↗](https://yapi.nbttfc365.com/project/77/interface/api/6194) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/base/mobille`
 * @更新时间 `2023-06-08 16:52:28`
 */
export interface YapiGetV1MemberBaseMobilleApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiGetV1MemberBaseMobilleData
  /**
   * 提示消息
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiGetV1MemberBaseMobilleData {
  /**
   * 手机区号
   */
  mobileCountryCode?: string
  /**
   * 手机号码
   */
  mobileNumber: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通过uid获取手机号码↗](https://yapi.nbttfc365.com/project/77/interface/api/6194)
// **/
// export const getV1MemberBaseMobilleApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseMobilleApiRequest,
//   YapiGetV1MemberBaseMobilleApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/mobille",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [通过uid获取手机号码（废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/374) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/base/mobille`
 * @更新时间 `2023-09-12 14:16:03`
 */
export interface YapiGetV1MemberBaseMobilleApiRequest {
  /**
   * 会员uid
   */
  uid: string
}

/**
 * 接口 [通过uid获取手机号码（废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/374) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/base/mobille`
 * @更新时间 `2023-09-12 14:16:03`
 */
export interface YapiGetV1MemberBaseMobilleApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiGetV1MemberBaseMobilleData
  /**
   * 提示消息
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiGetV1MemberBaseMobilleData {
  /**
   * 手机区号
   */
  mobileCountryCode?: string
  /**
   * 手机号码
   */
  mobileNumber: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通过uid获取手机号码（废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/374)
// **/
// export const getV1MemberBaseMobilleApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseMobilleApiRequest,
//   YapiGetV1MemberBaseMobilleApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/mobille",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
