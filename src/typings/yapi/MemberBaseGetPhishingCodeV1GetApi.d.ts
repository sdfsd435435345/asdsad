/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取防钓鱼码↗](https://yapi.nbttfc365.com/project/77/interface/api/6274) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `GET /v1/member/base/getPhishingCode`
 * @更新时间 `2023-06-08 16:52:37`
 */
export interface YapiGetV1MemberBaseGetPhishingCodeApiRequest {}

/**
 * 接口 [获取防钓鱼码↗](https://yapi.nbttfc365.com/project/77/interface/api/6274) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `GET /v1/member/base/getPhishingCode`
 * @更新时间 `2023-06-08 16:52:37`
 */
export interface YapiGetV1MemberBaseGetPhishingCodeApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1MemberBaseGetPhishingCodeData
}
export interface YapiGetV1MemberBaseGetPhishingCodeData {
  phishingCode?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取防钓鱼码↗](https://yapi.nbttfc365.com/project/77/interface/api/6274)
// **/
// export const getV1MemberBaseGetPhishingCodeApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseGetPhishingCodeApiRequest,
//   YapiGetV1MemberBaseGetPhishingCodeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/getPhishingCode",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取防钓鱼码↗](https://yapi.nbttfc365.com/project/44/interface/api/338) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `GET /v1/member/base/getPhishingCode`
 * @更新时间 `2022-07-25 17:05:34`
 */
export interface YapiGetV1MemberBaseGetPhishingCodeApiRequest {}

/**
 * 接口 [获取防钓鱼码↗](https://yapi.nbttfc365.com/project/44/interface/api/338) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `GET /v1/member/base/getPhishingCode`
 * @更新时间 `2022-07-25 17:05:34`
 */
export interface YapiGetV1MemberBaseGetPhishingCodeApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1MemberBaseGetPhishingCodeData
}
export interface YapiGetV1MemberBaseGetPhishingCodeData {
  phishingCode?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取防钓鱼码↗](https://yapi.nbttfc365.com/project/44/interface/api/338)
// **/
// export const getV1MemberBaseGetPhishingCodeApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseGetPhishingCodeApiRequest,
//   YapiGetV1MemberBaseGetPhishingCodeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/getPhishingCode",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
