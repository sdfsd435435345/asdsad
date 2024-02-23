/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [将单条消息标记为已读↗](https://yapi.nbttfc365.com/project/77/interface/api/7224) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/messages/read`
 * @更新时间 `2023-06-08 16:50:59`
 */
export interface YapiPostV1InboxMessagesReadApiRequest {
  id: number
}

/**
 * 接口 [将单条消息标记为已读↗](https://yapi.nbttfc365.com/project/77/interface/api/7224) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/messages/read`
 * @更新时间 `2023-06-08 16:50:59`
 */
export interface YapiPostV1InboxMessagesReadApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [将单条消息标记为已读↗](https://yapi.nbttfc365.com/project/77/interface/api/7224)
// **/
// export const postV1InboxMessagesReadApiRequest: MarkcoinRequest<
//   YapiPostV1InboxMessagesReadApiRequest,
//   YapiPostV1InboxMessagesReadApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/messages/read",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [将单条消息标记为已读↗](https://yapi.nbttfc365.com/project/44/interface/api/3417) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/messages/read`
 * @更新时间 `2022-11-22 12:51:29`
 */
export interface YapiPostV1InboxMessagesReadApiRequest {
  id: number
}

/**
 * 接口 [将单条消息标记为已读↗](https://yapi.nbttfc365.com/project/44/interface/api/3417) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/messages/read`
 * @更新时间 `2022-11-22 12:51:29`
 */
export interface YapiPostV1InboxMessagesReadApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [将单条消息标记为已读↗](https://yapi.nbttfc365.com/project/44/interface/api/3417)
// **/
// export const postV1InboxMessagesReadApiRequest: MarkcoinRequest<
//   YapiPostV1InboxMessagesReadApiRequest,
//   YapiPostV1InboxMessagesReadApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/messages/read",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
