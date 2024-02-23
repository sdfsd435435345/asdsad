/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [广告是否有进行中的订单↗](https://yapi.nbttfc365.com/project/73/interface/api/5408) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/hasProgressOrder`
 * @更新时间 `2023-03-10 11:15:59`
 */
export interface YapiGetV1C2cAdvertHasProgressOrderApiRequest {
  /**
   * 广告ID
   */
  advertId: string
}

/**
 * 接口 [广告是否有进行中的订单↗](https://yapi.nbttfc365.com/project/73/interface/api/5408) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/hasProgressOrder`
 * @更新时间 `2023-03-10 11:15:59`
 */
export interface YapiGetV1C2cAdvertHasProgressOrderApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CAdvertHasProgressOrderData
}
export interface YapiGetV1C2CAdvertHasProgressOrderData {
  /**
   * true，有，false，没有
   */
  hasOrder: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告是否有进行中的订单↗](https://yapi.nbttfc365.com/project/73/interface/api/5408)
// **/
// export const getV1C2cAdvertHasProgressOrderApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertHasProgressOrderApiRequest,
//   YapiGetV1C2cAdvertHasProgressOrderApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/hasProgressOrder",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [广告是否有进行中的订单↗](https://yapi.nbttfc365.com/project/77/interface/api/6459) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/hasProgressOrder`
 * @更新时间 `2023-06-08 16:46:57`
 */
export interface YapiGetV1C2cAdvertHasProgressOrderApiRequest {
  /**
   * 广告ID
   */
  advertId: string
}

/**
 * 接口 [广告是否有进行中的订单↗](https://yapi.nbttfc365.com/project/77/interface/api/6459) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/hasProgressOrder`
 * @更新时间 `2023-06-08 16:46:57`
 */
export interface YapiGetV1C2cAdvertHasProgressOrderApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CAdvertHasProgressOrderData
}
export interface YapiGetV1C2CAdvertHasProgressOrderData {
  /**
   * true，有，false，没有
   */
  hasOrder: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告是否有进行中的订单↗](https://yapi.nbttfc365.com/project/77/interface/api/6459)
// **/
// export const getV1C2cAdvertHasProgressOrderApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertHasProgressOrderApiRequest,
//   YapiGetV1C2cAdvertHasProgressOrderApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/hasProgressOrder",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
