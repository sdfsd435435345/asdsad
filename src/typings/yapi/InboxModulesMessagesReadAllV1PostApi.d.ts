/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [将模块下所有消息设置为已读↗](https://yapi.nbttfc365.com/project/77/interface/api/7239) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/modules/messages/readAll`
 * @更新时间 `2023-06-08 16:51:00`
 */
export interface YapiPostV1InboxModulesMessagesReadAllApiRequest {
  moduleId: number
}

/**
 * 接口 [将模块下所有消息设置为已读↗](https://yapi.nbttfc365.com/project/77/interface/api/7239) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/modules/messages/readAll`
 * @更新时间 `2023-06-08 16:51:00`
 */
export interface YapiPostV1InboxModulesMessagesReadAllApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [将模块下所有消息设置为已读↗](https://yapi.nbttfc365.com/project/77/interface/api/7239)
// **/
// export const postV1InboxModulesMessagesReadAllApiRequest: MarkcoinRequest<
//   YapiPostV1InboxModulesMessagesReadAllApiRequest,
//   YapiPostV1InboxModulesMessagesReadAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/modules/messages/readAll",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [将模块下所有消息设置为已读↗](https://yapi.nbttfc365.com/project/44/interface/api/3541) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/modules/messages/readAll`
 * @更新时间 `2022-11-22 12:51:47`
 */
export interface YapiPostV1InboxModulesMessagesReadAllApiRequest {
  moduleId: number
}

/**
 * 接口 [将模块下所有消息设置为已读↗](https://yapi.nbttfc365.com/project/44/interface/api/3541) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/modules/messages/readAll`
 * @更新时间 `2022-11-22 12:51:47`
 */
export interface YapiPostV1InboxModulesMessagesReadAllApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [将模块下所有消息设置为已读↗](https://yapi.nbttfc365.com/project/44/interface/api/3541)
// **/
// export const postV1InboxModulesMessagesReadAllApiRequest: MarkcoinRequest<
//   YapiPostV1InboxModulesMessagesReadAllApiRequest,
//   YapiPostV1InboxModulesMessagesReadAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/modules/messages/readAll",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
