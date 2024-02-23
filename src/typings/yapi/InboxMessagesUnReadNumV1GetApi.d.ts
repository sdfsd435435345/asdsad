/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取未读消息数量↗](https://yapi.nbttfc365.com/project/77/interface/api/7204) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/messages/unReadNum`
 * @更新时间 `2023-06-08 16:50:58`
 */
export interface YapiGetV1InboxMessagesUnReadNumApiRequest {}

/**
 * 接口 [获取未读消息数量↗](https://yapi.nbttfc365.com/project/77/interface/api/7204) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/messages/unReadNum`
 * @更新时间 `2023-06-08 16:50:58`
 */
export interface YapiGetV1InboxMessagesUnReadNumApiResponse {
  code?: string
  message?: null
  data: YapiGetV1InboxMessagesUnReadNumData
}
export interface YapiGetV1InboxMessagesUnReadNumData {
  /**
   * 未读数量
   */
  unReadNum: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取未读消息数量↗](https://yapi.nbttfc365.com/project/77/interface/api/7204)
// **/
// export const getV1InboxMessagesUnReadNumApiRequest: MarkcoinRequest<
//   YapiGetV1InboxMessagesUnReadNumApiRequest,
//   YapiGetV1InboxMessagesUnReadNumApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/messages/unReadNum",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取未读消息数量↗](https://yapi.nbttfc365.com/project/44/interface/api/3402) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/messages/unReadNum`
 * @更新时间 `2022-11-21 10:00:10`
 */
export interface YapiGetV1InboxMessagesUnReadNumApiRequest {}

/**
 * 接口 [获取未读消息数量↗](https://yapi.nbttfc365.com/project/44/interface/api/3402) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/messages/unReadNum`
 * @更新时间 `2022-11-21 10:00:10`
 */
export interface YapiGetV1InboxMessagesUnReadNumApiResponse {
  code?: string
  message?: null
  data: YapiGetV1InboxMessagesUnReadNumData
}
export interface YapiGetV1InboxMessagesUnReadNumData {
  /**
   * 未读数量
   */
  unReadNum: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取未读消息数量↗](https://yapi.nbttfc365.com/project/44/interface/api/3402)
// **/
// export const getV1InboxMessagesUnReadNumApiRequest: MarkcoinRequest<
//   YapiGetV1InboxMessagesUnReadNumApiRequest,
//   YapiGetV1InboxMessagesUnReadNumApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/messages/unReadNum",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
