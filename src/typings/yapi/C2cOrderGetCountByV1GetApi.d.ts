/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取进行中的订单数量↗](https://yapi.nbttfc365.com/project/73/interface/api/5246) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/getCountBy`
 * @更新时间 `2023-03-10 11:28:23`
 */
export interface YapiGetV1C2cOrderGetCountByApiRequest {
  /**
   *  广告ID
   */
  advertId?: string
}

/**
 * 接口 [获取进行中的订单数量↗](https://yapi.nbttfc365.com/project/73/interface/api/5246) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/getCountBy`
 * @更新时间 `2023-03-10 11:28:23`
 */
export interface YapiGetV1C2cOrderGetCountByApiResponse {
  code?: number
  data?: YapiGetV1C2COrderGetCountByData
  message?: string
}
export interface YapiGetV1C2COrderGetCountByData {
  /**
   * 订单数量
   */
  count?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取进行中的订单数量↗](https://yapi.nbttfc365.com/project/73/interface/api/5246)
// **/
// export const getV1C2cOrderGetCountByApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderGetCountByApiRequest,
//   YapiGetV1C2cOrderGetCountByApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/getCountBy",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取进行中的订单数量↗](https://yapi.nbttfc365.com/project/77/interface/api/6519) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/getCountBy`
 * @更新时间 `2023-06-08 16:47:00`
 */
export interface YapiGetV1C2cOrderGetCountByApiRequest {
  /**
   *  广告ID
   */
  advertId?: string
}

/**
 * 接口 [获取进行中的订单数量↗](https://yapi.nbttfc365.com/project/77/interface/api/6519) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/getCountBy`
 * @更新时间 `2023-06-08 16:47:00`
 */
export interface YapiGetV1C2cOrderGetCountByApiResponse {
  code?: number
  data?: YapiGetV1C2COrderGetCountByData
  message?: string
}
export interface YapiGetV1C2COrderGetCountByData {
  /**
   * 订单数量
   */
  count?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取进行中的订单数量↗](https://yapi.nbttfc365.com/project/77/interface/api/6519)
// **/
// export const getV1C2cOrderGetCountByApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderGetCountByApiRequest,
//   YapiGetV1C2cOrderGetCountByApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/getCountBy",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
