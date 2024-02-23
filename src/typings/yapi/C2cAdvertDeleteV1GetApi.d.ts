/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除广告↗](https://yapi.nbttfc365.com/project/73/interface/api/4623) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/delete`
 * @更新时间 `2023-03-01 10:11:29`
 */
export interface YapiGetV1C2cAdvertDeleteApiRequest {
  /**
   * 广告id
   */
  advertId: string
}

/**
 * 接口 [删除广告↗](https://yapi.nbttfc365.com/project/73/interface/api/4623) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/delete`
 * @更新时间 `2023-03-01 10:11:29`
 */
export interface YapiGetV1C2cAdvertDeleteApiResponse {
  code: number
  message: string
  /**
   * 成功|失败
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除广告↗](https://yapi.nbttfc365.com/project/73/interface/api/4623)
// **/
// export const getV1C2cAdvertDeleteApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertDeleteApiRequest,
//   YapiGetV1C2cAdvertDeleteApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/delete",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [删除广告↗](https://yapi.nbttfc365.com/project/77/interface/api/6479) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/delete`
 * @更新时间 `2023-06-08 16:46:58`
 */
export interface YapiGetV1C2cAdvertDeleteApiRequest {
  /**
   * 广告id
   */
  advertId: string
}

/**
 * 接口 [删除广告↗](https://yapi.nbttfc365.com/project/77/interface/api/6479) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/delete`
 * @更新时间 `2023-06-08 16:46:58`
 */
export interface YapiGetV1C2cAdvertDeleteApiResponse {
  code: number
  message: string
  /**
   * 成功|失败
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除广告↗](https://yapi.nbttfc365.com/project/77/interface/api/6479)
// **/
// export const getV1C2cAdvertDeleteApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertDeleteApiRequest,
//   YapiGetV1C2cAdvertDeleteApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/delete",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
