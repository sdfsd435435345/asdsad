/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [广告下架↗](https://yapi.nbttfc365.com/project/73/interface/api/4539) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/down`
 * @更新时间 `2023-03-03 17:43:34`
 */
export interface YapiGetV1C2cAdvertDownApiRequest {
  advertId: string
}

/**
 * 接口 [广告下架↗](https://yapi.nbttfc365.com/project/73/interface/api/4539) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/down`
 * @更新时间 `2023-03-03 17:43:34`
 */
export interface YapiGetV1C2cAdvertDownApiResponse {
  code?: number
  data?: YapiGetV1C2CAdvertDownData
  message?: string
}
export interface YapiGetV1C2CAdvertDownData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告下架↗](https://yapi.nbttfc365.com/project/73/interface/api/4539)
// **/
// export const getV1C2cAdvertDownApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertDownApiRequest,
//   YapiGetV1C2cAdvertDownApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/down",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [广告下架↗](https://yapi.nbttfc365.com/project/77/interface/api/6464) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/down`
 * @更新时间 `2023-06-08 16:46:57`
 */
export interface YapiGetV1C2cAdvertDownApiRequest {
  advertId: string
}

/**
 * 接口 [广告下架↗](https://yapi.nbttfc365.com/project/77/interface/api/6464) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/down`
 * @更新时间 `2023-06-08 16:46:57`
 */
export interface YapiGetV1C2cAdvertDownApiResponse {
  code?: number
  data?: YapiGetV1C2CAdvertDownData
  message?: string
}
export interface YapiGetV1C2CAdvertDownData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告下架↗](https://yapi.nbttfc365.com/project/77/interface/api/6464)
// **/
// export const getV1C2cAdvertDownApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertDownApiRequest,
//   YapiGetV1C2cAdvertDownApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/down",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
