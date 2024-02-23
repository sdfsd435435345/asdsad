/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [提交申诉资料↗](https://yapi.nbttfc365.com/project/73/interface/api/5201) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /v1/c2c/order/addComplaintInformation`
 * @更新时间 `2023-03-14 20:52:57`
 */
export interface YapiPostV1C2cOrderAddComplaintInformationApiRequest {
  /**
   * 附件
   */
  attachment?: string
  /**
   * 订单ID
   */
  id: string
  /**
   * 视频
   */
  video?: string
  /**
   * 图片(最多5张，逗号隔开)
   */
  picture?: string
}

/**
 * 接口 [提交申诉资料↗](https://yapi.nbttfc365.com/project/73/interface/api/5201) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /v1/c2c/order/addComplaintInformation`
 * @更新时间 `2023-03-14 20:52:57`
 */
export interface YapiPostV1C2cOrderAddComplaintInformationApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1C2COrderAddComplaintInformationData
}
export interface YapiPostV1C2COrderAddComplaintInformationData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [提交申诉资料↗](https://yapi.nbttfc365.com/project/73/interface/api/5201)
// **/
// export const postV1C2cOrderAddComplaintInformationApiRequest: MarkcoinRequest<
//   YapiPostV1C2cOrderAddComplaintInformationApiRequest,
//   YapiPostV1C2cOrderAddComplaintInformationApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/order/addComplaintInformation",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [提交申诉资料↗](https://yapi.nbttfc365.com/project/77/interface/api/6514) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /v1/c2c/order/addComplaintInformation`
 * @更新时间 `2023-06-08 16:47:00`
 */
export interface YapiPostV1C2cOrderAddComplaintInformationApiRequest {
  /**
   * 附件
   */
  attachment?: string
  /**
   * 订单ID
   */
  id: string
  /**
   * 视频
   */
  video?: string
  /**
   * 图片(最多5张，逗号隔开)
   */
  picture?: string
}

/**
 * 接口 [提交申诉资料↗](https://yapi.nbttfc365.com/project/77/interface/api/6514) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /v1/c2c/order/addComplaintInformation`
 * @更新时间 `2023-06-08 16:47:00`
 */
export interface YapiPostV1C2cOrderAddComplaintInformationApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1C2COrderAddComplaintInformationData
}
export interface YapiPostV1C2COrderAddComplaintInformationData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [提交申诉资料↗](https://yapi.nbttfc365.com/project/77/interface/api/6514)
// **/
// export const postV1C2cOrderAddComplaintInformationApiRequest: MarkcoinRequest<
//   YapiPostV1C2cOrderAddComplaintInformationApiRequest,
//   YapiPostV1C2cOrderAddComplaintInformationApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/order/addComplaintInformation",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
