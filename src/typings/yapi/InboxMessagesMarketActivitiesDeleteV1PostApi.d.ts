/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除行情异动↗](https://yapi.nbttfc365.com/project/77/interface/api/7174) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/messages/marketActivities/delete`
 * @更新时间 `2023-06-08 16:50:55`
 */
export interface YapiPostV1InboxMessagesMarketActivitiesDeleteApiRequest {
  /**
   * 消息id
   */
  id: string
}

/**
 * 接口 [删除行情异动↗](https://yapi.nbttfc365.com/project/77/interface/api/7174) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/messages/marketActivities/delete`
 * @更新时间 `2023-06-08 16:50:55`
 */
export interface YapiPostV1InboxMessagesMarketActivitiesDeleteApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1InboxMessagesMarketActivitiesDeleteData
}
export interface YapiPostV1InboxMessagesMarketActivitiesDeleteData {
  isSucess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除行情异动↗](https://yapi.nbttfc365.com/project/77/interface/api/7174)
// **/
// export const postV1InboxMessagesMarketActivitiesDeleteApiRequest: MarkcoinRequest<
//   YapiPostV1InboxMessagesMarketActivitiesDeleteApiRequest,
//   YapiPostV1InboxMessagesMarketActivitiesDeleteApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/messages/marketActivities/delete",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [删除行情异动（已废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/3619) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/messages/marketActivities/delete`
 * @更新时间 `2023-09-27 11:09:44`
 */
export interface YapiPostV1InboxMessagesMarketActivitiesDeleteApiRequest {
  /**
   * 消息id
   */
  id: string
}

/**
 * 接口 [删除行情异动（已废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/3619) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/messages/marketActivities/delete`
 * @更新时间 `2023-09-27 11:09:44`
 */
export interface YapiPostV1InboxMessagesMarketActivitiesDeleteApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1InboxMessagesMarketActivitiesDeleteData
}
export interface YapiPostV1InboxMessagesMarketActivitiesDeleteData {
  isSucess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除行情异动（已废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/3619)
// **/
// export const postV1InboxMessagesMarketActivitiesDeleteApiRequest: MarkcoinRequest<
//   YapiPostV1InboxMessagesMarketActivitiesDeleteApiRequest,
//   YapiPostV1InboxMessagesMarketActivitiesDeleteApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/messages/marketActivities/delete",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
