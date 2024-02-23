/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [设置接口↗](https://yapi.nbttfc365.com/project/73/interface/api/4523) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `POST /v1/c2c/setting`
 * @更新时间 `2023-03-04 14:59:31`
 */
export interface YapiPostV1C2cSettingApiRequest {
  /**
   * 欢迎语类型（1文字、2图片）
   */
  welcomeInfoType?: string
  /**
   * 欢迎语内容（文字或图片地址）
   */
  welcomeInfoMessage?: string
  /**
   * 接单状态（1可接单、2休息、3系统自动判断是否在线、4设定在线时间）
   */
  receiveOrderStatus?: number
  /**
   * 接单状态为4时，接单时间
   */
  receiveOrderTimeJson?: string
}

/**
 * 接口 [设置接口↗](https://yapi.nbttfc365.com/project/73/interface/api/4523) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `POST /v1/c2c/setting`
 * @更新时间 `2023-03-04 14:59:31`
 */
export interface YapiPostV1C2cSettingApiResponse {
  /**
   * success
   */
  data?: string
  code?: number
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置接口↗](https://yapi.nbttfc365.com/project/73/interface/api/4523)
// **/
// export const postV1C2cSettingApiRequest: MarkcoinRequest<
//   YapiPostV1C2cSettingApiRequest,
//   YapiPostV1C2cSettingApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/setting",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [设置接口↗](https://yapi.nbttfc365.com/project/77/interface/api/6649) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `POST /v1/c2c/setting`
 * @更新时间 `2023-06-08 16:47:09`
 */
export interface YapiPostV1C2cSettingApiRequest {
  /**
   * 欢迎语类型（1文字、2图片）
   */
  welcomeInfoType?: string
  /**
   * 欢迎语内容（文字或图片地址）
   */
  welcomeInfoMessage?: string
  /**
   * 接单状态（1可接单、2休息、3系统自动判断是否在线、4设定在线时间）
   */
  receiveOrderStatus?: number
  /**
   * 接单状态为4时，接单时间
   */
  receiveOrderTimeJson?: string
}

/**
 * 接口 [设置接口↗](https://yapi.nbttfc365.com/project/77/interface/api/6649) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `POST /v1/c2c/setting`
 * @更新时间 `2023-06-08 16:47:09`
 */
export interface YapiPostV1C2cSettingApiResponse {
  /**
   * success
   */
  data?: string
  code?: number
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置接口↗](https://yapi.nbttfc365.com/project/77/interface/api/6649)
// **/
// export const postV1C2cSettingApiRequest: MarkcoinRequest<
//   YapiPostV1C2cSettingApiRequest,
//   YapiPostV1C2cSettingApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/setting",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
