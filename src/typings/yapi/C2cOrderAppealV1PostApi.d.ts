/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [申诉↗](https://yapi.nbttfc365.com/project/73/interface/api/4559) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /v1/c2c/order/appeal`
 * @更新时间 `2023-04-18 18:14:16`
 */
export interface YapiPostV1C2cOrderAppealApiRequest {
  /**
   * 订单ID
   */
  id: number
  /**
   * 申诉原因
   */
  appealReason: string
  /**
   * 具体原因
   */
  specificReason: string
  /**
   * 上传图片
   */
  picture?: string
  /**
   * 上传视频
   */
  video?: string
  /**
   * 上传的附件
   */
  attachment?: string
}

/**
 * 接口 [申诉↗](https://yapi.nbttfc365.com/project/73/interface/api/4559) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /v1/c2c/order/appeal`
 * @更新时间 `2023-04-18 18:14:16`
 */
export interface YapiPostV1C2cOrderAppealApiResponse {
  code?: number
  data?: YapiPostV1C2COrderAppealData
  message?: string
}
export interface YapiPostV1C2COrderAppealData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申诉↗](https://yapi.nbttfc365.com/project/73/interface/api/4559)
// **/
// export const postV1C2cOrderAppealApiRequest: MarkcoinRequest<
//   YapiPostV1C2cOrderAppealApiRequest,
//   YapiPostV1C2cOrderAppealApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/order/appeal",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [申诉↗](https://yapi.nbttfc365.com/project/77/interface/api/6499) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /v1/c2c/order/appeal`
 * @更新时间 `2023-06-08 16:46:59`
 */
export interface YapiPostV1C2cOrderAppealApiRequest {
  /**
   * 订单ID
   */
  id: number
  /**
   * 申诉原因
   */
  appealReason: string
  /**
   * 具体原因
   */
  specificReason: string
  /**
   * 上传图片
   */
  picture?: string
  /**
   * 上传视频
   */
  video?: string
  /**
   * 上传的附件
   */
  attachment?: string
}

/**
 * 接口 [申诉↗](https://yapi.nbttfc365.com/project/77/interface/api/6499) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /v1/c2c/order/appeal`
 * @更新时间 `2023-06-08 16:46:59`
 */
export interface YapiPostV1C2cOrderAppealApiResponse {
  code?: number
  data?: YapiPostV1C2COrderAppealData
  message?: string
}
export interface YapiPostV1C2COrderAppealData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申诉↗](https://yapi.nbttfc365.com/project/77/interface/api/6499)
// **/
// export const postV1C2cOrderAppealApiRequest: MarkcoinRequest<
//   YapiPostV1C2cOrderAppealApiRequest,
//   YapiPostV1C2cOrderAppealApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/order/appeal",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
