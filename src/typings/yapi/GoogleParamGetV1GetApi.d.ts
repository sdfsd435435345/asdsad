/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取谷歌参数↗](https://yapi.nbttfc365.com/project/77/interface/api/8319) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/google/param/get`
 * @更新时间 `2023-06-08 16:52:17`
 */
export interface YapiGetV1GoogleParamGetApiRequest {}

/**
 * 接口 [获取谷歌参数↗](https://yapi.nbttfc365.com/project/77/interface/api/8319) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/google/param/get`
 * @更新时间 `2023-06-08 16:52:17`
 */
export interface YapiGetV1GoogleParamGetApiResponse {
  code?: number
  msg?: string
  data?: YapiGetV1GoogleParamGetData
}
export interface YapiGetV1GoogleParamGetData {
  apiKey?: string
  authDomain?: string
  projectId?: string
  storageBucket?: string
  messagingSenderId?: string
  appId?: string
  measurementId?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取谷歌参数↗](https://yapi.nbttfc365.com/project/77/interface/api/8319)
// **/
// export const getV1GoogleParamGetApiRequest: MarkcoinRequest<
//   YapiGetV1GoogleParamGetApiRequest,
//   YapiGetV1GoogleParamGetApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/google/param/get",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取谷歌参数↗](https://yapi.nbttfc365.com/project/44/interface/api/2597) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/google/param/get`
 * @更新时间 `2022-09-29 11:28:30`
 */
export interface YapiGetV1GoogleParamGetApiRequest {}

/**
 * 接口 [获取谷歌参数↗](https://yapi.nbttfc365.com/project/44/interface/api/2597) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/google/param/get`
 * @更新时间 `2022-09-29 11:28:30`
 */
export interface YapiGetV1GoogleParamGetApiResponse {
  code?: number
  msg?: string
  data?: YapiGetV1GoogleParamGetData
}
export interface YapiGetV1GoogleParamGetData {
  apiKey?: string
  authDomain?: string
  projectId?: string
  storageBucket?: string
  messagingSenderId?: string
  appId?: string
  measurementId?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取谷歌参数↗](https://yapi.nbttfc365.com/project/44/interface/api/2597)
// **/
// export const getV1GoogleParamGetApiRequest: MarkcoinRequest<
//   YapiGetV1GoogleParamGetApiRequest,
//   YapiGetV1GoogleParamGetApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/google/param/get",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
