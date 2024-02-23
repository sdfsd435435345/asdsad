/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据ip查询地址↗](https://yapi.nbttfc365.com/project/77/interface/api/8264) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/phone/location`
 * @更新时间 `2023-06-08 16:52:11`
 */
export interface YapiGetV1MemberPhoneLocationApiRequest {}

/**
 * 接口 [根据ip查询地址↗](https://yapi.nbttfc365.com/project/77/interface/api/8264) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/phone/location`
 * @更新时间 `2023-06-08 16:52:11`
 */
export interface YapiGetV1MemberPhoneLocationApiResponse {
  code?: number
  data?: YapiGetV1MemberPhoneLocationData
  message?: string
}
export interface YapiGetV1MemberPhoneLocationData {
  countryCode?: string
  countryName?: string
  ip: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据ip查询地址↗](https://yapi.nbttfc365.com/project/77/interface/api/8264)
// **/
// export const getV1MemberPhoneLocationApiRequest: MarkcoinRequest<
//   YapiGetV1MemberPhoneLocationApiRequest,
//   YapiGetV1MemberPhoneLocationApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/phone/location",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [根据ip查询地址↗](https://yapi.nbttfc365.com/project/44/interface/api/3547) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/phone/location`
 * @更新时间 `2022-11-23 17:01:50`
 */
export interface YapiGetV1MemberPhoneLocationApiRequest {}

/**
 * 接口 [根据ip查询地址↗](https://yapi.nbttfc365.com/project/44/interface/api/3547) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/phone/location`
 * @更新时间 `2022-11-23 17:01:50`
 */
export interface YapiGetV1MemberPhoneLocationApiResponse {
  code?: number
  data?: YapiGetV1MemberPhoneLocationData
  message?: string
}
export interface YapiGetV1MemberPhoneLocationData {
  countryCode?: string
  countryName?: string
  ip: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据ip查询地址↗](https://yapi.nbttfc365.com/project/44/interface/api/3547)
// **/
// export const getV1MemberPhoneLocationApiRequest: MarkcoinRequest<
//   YapiGetV1MemberPhoneLocationApiRequest,
//   YapiGetV1MemberPhoneLocationApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/phone/location",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
