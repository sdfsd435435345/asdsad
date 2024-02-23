/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除模块下所有消息↗](https://yapi.nbttfc365.com/project/77/interface/api/7244) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/modules/messages/deleteAll`
 * @更新时间 `2023-06-08 16:51:00`
 */
export interface YapiPostV1InboxModulesMessagesDeleteAllApiRequest {
  moduleId: number
}

/**
 * 接口 [删除模块下所有消息↗](https://yapi.nbttfc365.com/project/77/interface/api/7244) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/modules/messages/deleteAll`
 * @更新时间 `2023-06-08 16:51:00`
 */
export interface YapiPostV1InboxModulesMessagesDeleteAllApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除模块下所有消息↗](https://yapi.nbttfc365.com/project/77/interface/api/7244)
// **/
// export const postV1InboxModulesMessagesDeleteAllApiRequest: MarkcoinRequest<
//   YapiPostV1InboxModulesMessagesDeleteAllApiRequest,
//   YapiPostV1InboxModulesMessagesDeleteAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/modules/messages/deleteAll",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [删除模块下所有消息↗](https://yapi.nbttfc365.com/project/44/interface/api/3535) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/modules/messages/deleteAll`
 * @更新时间 `2022-11-22 12:51:57`
 */
export interface YapiPostV1InboxModulesMessagesDeleteAllApiRequest {
  moduleId: number
}

/**
 * 接口 [删除模块下所有消息↗](https://yapi.nbttfc365.com/project/44/interface/api/3535) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/modules/messages/deleteAll`
 * @更新时间 `2022-11-22 12:51:57`
 */
export interface YapiPostV1InboxModulesMessagesDeleteAllApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除模块下所有消息↗](https://yapi.nbttfc365.com/project/44/interface/api/3535)
// **/
// export const postV1InboxModulesMessagesDeleteAllApiRequest: MarkcoinRequest<
//   YapiPostV1InboxModulesMessagesDeleteAllApiRequest,
//   YapiPostV1InboxModulesMessagesDeleteAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/modules/messages/deleteAll",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
