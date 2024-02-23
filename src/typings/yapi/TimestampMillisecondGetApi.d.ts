/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取服务器时间↗](https://yapi.nbttfc365.com/project/77/interface/api/6864) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /timestamp/millisecond`
 * @更新时间 `2023-06-08 16:50:28`
 */
export interface YapiGetTimestampMillisecondApiRequest {}

/**
 * 接口 [获取服务器时间↗](https://yapi.nbttfc365.com/project/77/interface/api/6864) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /timestamp/millisecond`
 * @更新时间 `2023-06-08 16:50:28`
 */
export interface YapiGetTimestampMillisecondApiResponse {
  /**
   * 200成功，其它失败
   */
  code: string
  /**
   * 服务器时间毫秒数
   */
  data: number
  /**
   * 接口返回信息
   */
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取服务器时间↗](https://yapi.nbttfc365.com/project/77/interface/api/6864)
// **/
// export const getTimestampMillisecondApiRequest: MarkcoinRequest<
//   YapiGetTimestampMillisecondApiRequest,
//   YapiGetTimestampMillisecondApiResponse['data']
// > = params => {
//   return request({
//     path: "/timestamp/millisecond",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取服务器时间↗](https://yapi.nbttfc365.com/project/44/interface/api/3607) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /timestamp/millisecond`
 * @更新时间 `2022-11-28 15:21:27`
 */
export interface YapiGetTimestampMillisecondApiRequest {}

/**
 * 接口 [获取服务器时间↗](https://yapi.nbttfc365.com/project/44/interface/api/3607) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /timestamp/millisecond`
 * @更新时间 `2022-11-28 15:21:27`
 */
export interface YapiGetTimestampMillisecondApiResponse {
  /**
   * 200成功，其它失败
   */
  code: string
  /**
   * 服务器时间毫秒数
   */
  data: number
  /**
   * 接口返回信息
   */
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取服务器时间↗](https://yapi.nbttfc365.com/project/44/interface/api/3607)
// **/
// export const getTimestampMillisecondApiRequest: MarkcoinRequest<
//   YapiGetTimestampMillisecondApiRequest,
//   YapiGetTimestampMillisecondApiResponse['data']
// > = params => {
//   return request({
//     path: "/timestamp/millisecond",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
