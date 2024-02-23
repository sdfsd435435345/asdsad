/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取多个模块的最新一条数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7219) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/modules/latestMessage`
 * @更新时间 `2023-06-08 16:50:59`
 */
export interface YapiPostV1InboxModulesLatestMessageApiRequest {
  moduleIds?: number[]
}

/**
 * 接口 [获取多个模块的最新一条数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7219) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/modules/latestMessage`
 * @更新时间 `2023-06-08 16:50:59`
 */
export interface YapiPostV1InboxModulesLatestMessageApiResponse {
  status?: number
  message?: string
  data?: YapiPostV1InboxModulesLatestMessageListData[]
}
export interface YapiPostV1InboxModulesLatestMessageListData {
  moduleId?: number
  message?: YapiPostV1InboxModulesLatestMessageMessageListData
}
export interface YapiPostV1InboxModulesLatestMessageMessageListData {
  id?: number
  title?: string
  content?: string
  isRead?: number
  iosLink?: string
  android?: string
  webLink?: string
  eventTime?: number
  /**
   * 事件类型
   */
  eventType: string
  /**
   * 模块id
   */
  moduleId: number
  extras: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取多个模块的最新一条数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7219)
// **/
// export const postV1InboxModulesLatestMessageApiRequest: MarkcoinRequest<
//   YapiPostV1InboxModulesLatestMessageApiRequest,
//   YapiPostV1InboxModulesLatestMessageApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/modules/latestMessage",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [获取多个模块的最新一条数据↗](https://yapi.nbttfc365.com/project/44/interface/api/3517) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/modules/latestMessage`
 * @更新时间 `2022-11-23 16:54:28`
 */
export interface YapiPostV1InboxModulesLatestMessageApiRequest {
  moduleIds?: number[]
}

/**
 * 接口 [获取多个模块的最新一条数据↗](https://yapi.nbttfc365.com/project/44/interface/api/3517) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/modules/latestMessage`
 * @更新时间 `2022-11-23 16:54:28`
 */
export interface YapiPostV1InboxModulesLatestMessageApiResponse {
  status?: number
  message?: string
  data?: YapiPostV1InboxModulesLatestMessageListData[]
}
export interface YapiPostV1InboxModulesLatestMessageListData {
  moduleId?: number
  message?: YapiPostV1InboxModulesLatestMessageMessageListData
}
export interface YapiPostV1InboxModulesLatestMessageMessageListData {
  id?: number
  title?: string
  content?: string
  isRead?: number
  iosLink?: string
  android?: string
  webLink?: string
  eventTime?: number
  /**
   * 事件类型
   */
  eventType: string
  /**
   * 模块id
   */
  moduleId: number
  extras: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取多个模块的最新一条数据↗](https://yapi.nbttfc365.com/project/44/interface/api/3517)
// **/
// export const postV1InboxModulesLatestMessageApiRequest: MarkcoinRequest<
//   YapiPostV1InboxModulesLatestMessageApiRequest,
//   YapiPostV1InboxModulesLatestMessageApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/modules/latestMessage",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
