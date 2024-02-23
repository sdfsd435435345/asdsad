/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取站内信设置内容↗](https://yapi.nbttfc365.com/project/77/interface/api/7189) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/settings`
 * @更新时间 `2023-06-08 16:50:57`
 */
export interface YapiGetV1InboxSettingsApiRequest {}

/**
 * 接口 [获取站内信设置内容↗](https://yapi.nbttfc365.com/project/77/interface/api/7189) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/settings`
 * @更新时间 `2023-06-08 16:50:57`
 */
export interface YapiGetV1InboxSettingsApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1InboxSettingsData
}
export interface YapiGetV1InboxSettingsData {
  /**
   * 语言
   */
  pushLanguage?: string
  /**
   * 模块id列表
   */
  modules?: YapiGetV1InboxSettingsListModulesData[]
  /**
   * 是否开启营销类邮件,1=TRUE; 2= FALSE
   */
  isOpenMarketingEmail?: number
}
export interface YapiGetV1InboxSettingsListModulesData {
  id: number
  name: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取站内信设置内容↗](https://yapi.nbttfc365.com/project/77/interface/api/7189)
// **/
// export const getV1InboxSettingsApiRequest: MarkcoinRequest<
//   YapiGetV1InboxSettingsApiRequest,
//   YapiGetV1InboxSettingsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/settings",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取站内信设置内容↗](https://yapi.nbttfc365.com/project/44/interface/api/3382) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/settings`
 * @更新时间 `2022-11-21 14:36:41`
 */
export interface YapiGetV1InboxSettingsApiRequest {}

/**
 * 接口 [获取站内信设置内容↗](https://yapi.nbttfc365.com/project/44/interface/api/3382) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/settings`
 * @更新时间 `2022-11-21 14:36:41`
 */
export interface YapiGetV1InboxSettingsApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1InboxSettingsData
}
export interface YapiGetV1InboxSettingsData {
  /**
   * 语言
   */
  pushLanguage?: string
  /**
   * 模块id列表
   */
  modules?: YapiGetV1InboxSettingsListModulesData[]
  /**
   * 是否开启营销类邮件,1=TRUE; 2= FALSE
   */
  isOpenMarketingEmail?: number
}
export interface YapiGetV1InboxSettingsListModulesData {
  id: number
  name: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取站内信设置内容↗](https://yapi.nbttfc365.com/project/44/interface/api/3382)
// **/
// export const getV1InboxSettingsApiRequest: MarkcoinRequest<
//   YapiGetV1InboxSettingsApiRequest,
//   YapiGetV1InboxSettingsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/settings",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
