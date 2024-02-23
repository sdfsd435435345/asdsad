/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [广告是否含有申诉中的订单↗](https://yapi.nbttfc365.com/project/73/interface/api/5399) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/hasAppealOrder`
 * @更新时间 `2023-03-09 18:10:22`
 */
export interface YapiGetV1C2cAdvertHasAppealOrderApiRequest {
  /**
   * 广告ID
   */
  advertId: string
}

/**
 * 接口 [广告是否含有申诉中的订单↗](https://yapi.nbttfc365.com/project/73/interface/api/5399) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/hasAppealOrder`
 * @更新时间 `2023-03-09 18:10:22`
 */
export interface YapiGetV1C2cAdvertHasAppealOrderApiResponse {
  /**
   * 200成交，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CAdvertHasAppealOrderData
}
export interface YapiGetV1C2CAdvertHasAppealOrderData {
  /**
   * true,有，false,没有
   */
  hasOrder: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告是否含有申诉中的订单↗](https://yapi.nbttfc365.com/project/73/interface/api/5399)
// **/
// export const getV1C2cAdvertHasAppealOrderApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertHasAppealOrderApiRequest,
//   YapiGetV1C2cAdvertHasAppealOrderApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/hasAppealOrder",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [广告是否含有申诉中的订单↗](https://yapi.nbttfc365.com/project/77/interface/api/6454) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/hasAppealOrder`
 * @更新时间 `2023-06-08 16:46:57`
 */
export interface YapiGetV1C2cAdvertHasAppealOrderApiRequest {
  /**
   * 广告ID
   */
  advertId: string
}

/**
 * 接口 [广告是否含有申诉中的订单↗](https://yapi.nbttfc365.com/project/77/interface/api/6454) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/hasAppealOrder`
 * @更新时间 `2023-06-08 16:46:57`
 */
export interface YapiGetV1C2cAdvertHasAppealOrderApiResponse {
  /**
   * 200成交，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CAdvertHasAppealOrderData
}
export interface YapiGetV1C2CAdvertHasAppealOrderData {
  /**
   * true,有，false,没有
   */
  hasOrder: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告是否含有申诉中的订单↗](https://yapi.nbttfc365.com/project/77/interface/api/6454)
// **/
// export const getV1C2cAdvertHasAppealOrderApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertHasAppealOrderApiRequest,
//   YapiGetV1C2cAdvertHasAppealOrderApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/hasAppealOrder",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
