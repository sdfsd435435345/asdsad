/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除es数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7279) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `POST /v1/es/helpAndAnnouncement/deleteByQuery`
 * @更新时间 `2023-06-08 16:51:02`
 */
export interface YapiPostV1EsHelpAndAnnouncementDeleteByQueryApiRequest {
  /**
   * 操作的类型 1.删除帮助中心 2.删除公告中心
   */
  operateType: string
  /**
   * 文章的id
   */
  articleId: string
  /**
   * 商户的id
   */
  businessId: string
}

/**
 * 接口 [删除es数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7279) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `POST /v1/es/helpAndAnnouncement/deleteByQuery`
 * @更新时间 `2023-06-08 16:51:02`
 */
export interface YapiPostV1EsHelpAndAnnouncementDeleteByQueryApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除es数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7279)
// **/
// export const postV1EsHelpAndAnnouncementDeleteByQueryApiRequest: MarkcoinRequest<
//   YapiPostV1EsHelpAndAnnouncementDeleteByQueryApiRequest,
//   YapiPostV1EsHelpAndAnnouncementDeleteByQueryApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/es/helpAndAnnouncement/deleteByQuery",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [删除es数据↗](https://yapi.nbttfc365.com/project/44/interface/api/3467) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `POST /v1/es/helpAndAnnouncement/deleteByQuery`
 * @更新时间 `2022-11-16 12:48:17`
 */
export interface YapiPostV1EsHelpAndAnnouncementDeleteByQueryApiRequest {
  /**
   * 操作的类型 1.删除帮助中心 2.删除公告中心
   */
  operateType: string
  /**
   * 文章的id
   */
  articleId: string
  /**
   * 商户的id
   */
  businessId: string
}

/**
 * 接口 [删除es数据↗](https://yapi.nbttfc365.com/project/44/interface/api/3467) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `POST /v1/es/helpAndAnnouncement/deleteByQuery`
 * @更新时间 `2022-11-16 12:48:17`
 */
export interface YapiPostV1EsHelpAndAnnouncementDeleteByQueryApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除es数据↗](https://yapi.nbttfc365.com/project/44/interface/api/3467)
// **/
// export const postV1EsHelpAndAnnouncementDeleteByQueryApiRequest: MarkcoinRequest<
//   YapiPostV1EsHelpAndAnnouncementDeleteByQueryApiRequest,
//   YapiPostV1EsHelpAndAnnouncementDeleteByQueryApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/es/helpAndAnnouncement/deleteByQuery",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
