/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取所有的通知类型↗](https://yapi.nbttfc365.com/project/77/interface/api/7184) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/modules`
 * @更新时间 `2023-06-08 16:50:56`
 */
export interface YapiGetV1InboxModulesApiRequest {}

/**
 * 接口 [获取所有的通知类型↗](https://yapi.nbttfc365.com/project/77/interface/api/7184) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/modules`
 * @更新时间 `2023-06-08 16:50:56`
 */
export interface YapiGetV1InboxModulesApiResponse {
  status?: number
  message?: string
  data?: YapiGetV1InboxModulesListData[]
}
export interface YapiGetV1InboxModulesListData {
  id: number
  name: string
  unReadNum: number
  /**
   * 模块标识,不随多语言变化
   */
  codeName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取所有的通知类型↗](https://yapi.nbttfc365.com/project/77/interface/api/7184)
// **/
// export const getV1InboxModulesApiRequest: MarkcoinRequest<
//   YapiGetV1InboxModulesApiRequest,
//   YapiGetV1InboxModulesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/modules",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取所有的通知类型↗](https://yapi.nbttfc365.com/project/44/interface/api/3377) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/modules`
 * @更新时间 `2023-08-01 10:44:25`
 */
export interface YapiGetV1InboxModulesApiRequest {}

/**
 * 接口 [获取所有的通知类型↗](https://yapi.nbttfc365.com/project/44/interface/api/3377) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/modules`
 * @更新时间 `2023-08-01 10:44:25`
 */
export interface YapiGetV1InboxModulesApiResponse {
  status?: number
  message?: string
  data?: YapiGetV1InboxModulesListData[]
}
export interface YapiGetV1InboxModulesListData {
  /**
   * 模块id
   */
  id: number
  /**
   * 模块名称
   */
  name: string
  /**
   * 模块未读消息数量
   */
  unReadNum: number
  /**
   * 模块标识,不随多语言变化
   */
  codeName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取所有的通知类型↗](https://yapi.nbttfc365.com/project/44/interface/api/3377)
// **/
// export const getV1InboxModulesApiRequest: MarkcoinRequest<
//   YapiGetV1InboxModulesApiRequest,
//   YapiGetV1InboxModulesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/modules",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
