/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取最新未读的n条数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7214) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/messages/latestUnreadMessage`
 * @更新时间 `2023-06-08 16:50:58`
 */
export interface YapiGetV1InboxMessagesLatestUnreadMessageApiRequest {
  /**
   * 最新5条未读数据
   */
  limit: string
}

/**
 * 接口 [获取最新未读的n条数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7214) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/messages/latestUnreadMessage`
 * @更新时间 `2023-06-08 16:50:58`
 */
export interface YapiGetV1InboxMessagesLatestUnreadMessageApiResponse {
  status?: number
  message?: string
  data?: YapiGetV1InboxMessagesLatestUnreadMessageListData[]
}
export interface YapiGetV1InboxMessagesLatestUnreadMessageListData {
  moduleId?: number
  message?: YapiGetV1InboxMessagesLatestUnreadMessageMessageListData
}
export interface YapiGetV1InboxMessagesLatestUnreadMessageMessageListData {
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
// * [获取最新未读的n条数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7214)
// **/
// export const getV1InboxMessagesLatestUnreadMessageApiRequest: MarkcoinRequest<
//   YapiGetV1InboxMessagesLatestUnreadMessageApiRequest,
//   YapiGetV1InboxMessagesLatestUnreadMessageApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/messages/latestUnreadMessage",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取最新未读的n条数据↗](https://yapi.nbttfc365.com/project/44/interface/api/3577) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/messages/latestUnreadMessage`
 * @更新时间 `2022-11-25 11:37:32`
 */
export interface YapiGetV1InboxMessagesLatestUnreadMessageApiRequest {
  /**
   * 最新5条未读数据
   */
  limit: string
}

/**
 * 接口 [获取最新未读的n条数据↗](https://yapi.nbttfc365.com/project/44/interface/api/3577) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/messages/latestUnreadMessage`
 * @更新时间 `2022-11-25 11:37:32`
 */
export interface YapiGetV1InboxMessagesLatestUnreadMessageApiResponse {
  status?: number
  message?: string
  data?: YapiGetV1InboxMessagesLatestUnreadMessageListData[]
}
export interface YapiGetV1InboxMessagesLatestUnreadMessageListData {
  moduleId?: number
  message?: YapiGetV1InboxMessagesLatestUnreadMessageMessageListData
}
export interface YapiGetV1InboxMessagesLatestUnreadMessageMessageListData {
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
// * [获取最新未读的n条数据↗](https://yapi.nbttfc365.com/project/44/interface/api/3577)
// **/
// export const getV1InboxMessagesLatestUnreadMessageApiRequest: MarkcoinRequest<
//   YapiGetV1InboxMessagesLatestUnreadMessageApiRequest,
//   YapiGetV1InboxMessagesLatestUnreadMessageApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/messages/latestUnreadMessage",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
