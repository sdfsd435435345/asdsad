/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除单条消息↗](https://yapi.nbttfc365.com/project/77/interface/api/7229) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/messages/delete`
 * @更新时间 `2023-06-08 16:50:59`
 */
export interface YapiPostV1InboxMessagesDeleteApiRequest {
  id: number
}

/**
 * 接口 [删除单条消息↗](https://yapi.nbttfc365.com/project/77/interface/api/7229) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/messages/delete`
 * @更新时间 `2023-06-08 16:50:59`
 */
export interface YapiPostV1InboxMessagesDeleteApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除单条消息↗](https://yapi.nbttfc365.com/project/77/interface/api/7229)
// **/
// export const postV1InboxMessagesDeleteApiRequest: MarkcoinRequest<
//   YapiPostV1InboxMessagesDeleteApiRequest,
//   YapiPostV1InboxMessagesDeleteApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/messages/delete",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [删除单条消息↗](https://yapi.nbttfc365.com/project/44/interface/api/3559) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/messages/delete`
 * @更新时间 `2022-11-24 09:51:35`
 */
export interface YapiPostV1InboxMessagesDeleteApiRequest {
  id: number
}

/**
 * 接口 [删除单条消息↗](https://yapi.nbttfc365.com/project/44/interface/api/3559) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/messages/delete`
 * @更新时间 `2022-11-24 09:51:35`
 */
export interface YapiPostV1InboxMessagesDeleteApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除单条消息↗](https://yapi.nbttfc365.com/project/44/interface/api/3559)
// **/
// export const postV1InboxMessagesDeleteApiRequest: MarkcoinRequest<
//   YapiPostV1InboxMessagesDeleteApiRequest,
//   YapiPostV1InboxMessagesDeleteApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/messages/delete",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
