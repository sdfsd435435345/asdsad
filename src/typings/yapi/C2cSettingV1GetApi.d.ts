/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取当前设置↗](https://yapi.nbttfc365.com/project/73/interface/api/4904) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `GET /v1/c2c/setting`
 * @更新时间 `2023-03-08 13:06:28`
 */
export interface YapiGetV1C2cSettingApiRequest {}

/**
 * 接口 [获取当前设置↗](https://yapi.nbttfc365.com/project/73/interface/api/4904) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `GET /v1/c2c/setting`
 * @更新时间 `2023-03-08 13:06:28`
 */
export interface YapiGetV1C2cSettingApiResponse {
  code?: number
  data?: YapiGetV1C2CSettingData
}
export interface YapiGetV1C2CSettingData {
  id?: number
  uid?: number
  businessId?: number
  /**
   * 欢迎语类型  （1文字、2图片）
   */
  welcomeInfoType?: number
  /**
   * 欢迎语内容 （文字或图片地址）
   */
  welcomeInfoMessage?: string
  /**
   * 接单状态（1可接单、2休息、3系统自动判断是否在线、4设定在线时间）
   */
  receiveOrderStatus?: number
  /**
   * 接单时间json      {      "dayInWeeks":"1,2,3,4,5",      "startTime":"9:30",      "endTime":"12:00"      }
   */
  receiveOrderTimeJson?: string
  /**
   * 最近登录时间(活跃时间)
   */
  connectTime: number
  /**
   * 是否在线 true=在线
   */
  online: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取当前设置↗](https://yapi.nbttfc365.com/project/73/interface/api/4904)
// **/
// export const getV1C2cSettingApiRequest: MarkcoinRequest<
//   YapiGetV1C2cSettingApiRequest,
//   YapiGetV1C2cSettingApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/setting",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取当前设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6644) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `GET /v1/c2c/setting`
 * @更新时间 `2023-06-08 16:47:08`
 */
export interface YapiGetV1C2cSettingApiRequest {}

/**
 * 接口 [获取当前设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6644) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `GET /v1/c2c/setting`
 * @更新时间 `2023-06-08 16:47:08`
 */
export interface YapiGetV1C2cSettingApiResponse {
  code?: number
  data?: YapiGetV1C2CSettingData
}
export interface YapiGetV1C2CSettingData {
  id?: number
  uid?: number
  businessId?: number
  /**
   * 欢迎语类型  （1文字、2图片）
   */
  welcomeInfoType?: number
  /**
   * 欢迎语内容 （文字或图片地址）
   */
  welcomeInfoMessage?: string
  /**
   * 接单状态（1可接单、2休息、3系统自动判断是否在线、4设定在线时间）
   */
  receiveOrderStatus?: number
  /**
   * 接单时间json      {      "dayInWeeks":"1,2,3,4,5",      "startTime":"9:30",      "endTime":"12:00"      }
   */
  receiveOrderTimeJson?: string
  /**
   * 最近登录时间(活跃时间)
   */
  connectTime: number
  /**
   * 是否在线 true=在线
   */
  online: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取当前设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6644)
// **/
// export const getV1C2cSettingApiRequest: MarkcoinRequest<
//   YapiGetV1C2cSettingApiRequest,
//   YapiGetV1C2cSettingApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/setting",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
