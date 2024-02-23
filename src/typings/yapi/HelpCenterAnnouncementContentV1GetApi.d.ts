/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [公告中心正文页↗](https://yapi.nbttfc365.com/project/77/interface/api/7274) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/helpCenter/announcement/content`
 * @更新时间 `2023-06-08 16:51:02`
 */
export interface YapiGetV1HelpCenterAnnouncementContentApiRequest {
  announceContentId: string
}

/**
 * 接口 [公告中心正文页↗](https://yapi.nbttfc365.com/project/77/interface/api/7274) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/helpCenter/announcement/content`
 * @更新时间 `2023-06-08 16:51:02`
 */
export interface YapiGetV1HelpCenterAnnouncementContentApiResponse {
  code?: number
  data?: YapiGetV1HelpCenterAnnouncementContentData
  message?: string
}
export interface YapiGetV1HelpCenterAnnouncementContentData {
  /**
   * 目录的列表
   */
  catalogVOList?: YapiGetV1HelpCenterAnnouncementContentListCatalogVOListData[]
  /**
   * 公告的列表
   */
  announcementList?: YapiGetV1HelpCenterAnnouncementContentListAnnouncementListData[]
  /**
   * 正文的内容
   */
  content?: string
  /**
   * 上级的id
   */
  parentId?: number
}
export interface YapiGetV1HelpCenterAnnouncementContentListCatalogVOListData {
  /**
   * 标题
   */
  name: string
  /**
   * id
   */
  id: number
}
export interface YapiGetV1HelpCenterAnnouncementContentListAnnouncementListData {
  /**
   * id
   */
  id?: number
  /**
   * 正文
   */
  content?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [公告中心正文页↗](https://yapi.nbttfc365.com/project/77/interface/api/7274)
// **/
// export const getV1HelpCenterAnnouncementContentApiRequest: MarkcoinRequest<
//   YapiGetV1HelpCenterAnnouncementContentApiRequest,
//   YapiGetV1HelpCenterAnnouncementContentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/helpCenter/announcement/content",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [公告中心正文页↗](https://yapi.nbttfc365.com/project/44/interface/api/2969) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/helpCenter/announcement/content`
 * @更新时间 `2022-11-14 14:51:21`
 */
export interface YapiGetV1HelpCenterAnnouncementContentApiRequest {
  announceContentId: string
}

/**
 * 接口 [公告中心正文页↗](https://yapi.nbttfc365.com/project/44/interface/api/2969) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/helpCenter/announcement/content`
 * @更新时间 `2022-11-14 14:51:21`
 */
export interface YapiGetV1HelpCenterAnnouncementContentApiResponse {
  code?: number
  data?: YapiGetV1HelpCenterAnnouncementContentData
  message?: string
}
export interface YapiGetV1HelpCenterAnnouncementContentData {
  /**
   * 目录的列表
   */
  catalogVOList?: YapiGetV1HelpCenterAnnouncementContentListCatalogVOListData[]
  /**
   * 公告的列表
   */
  announcementList?: YapiGetV1HelpCenterAnnouncementContentListAnnouncementListData[]
  /**
   * 正文的内容
   */
  content?: string
  /**
   * 上级的id
   */
  parentId?: number
}
export interface YapiGetV1HelpCenterAnnouncementContentListCatalogVOListData {
  /**
   * 标题
   */
  name: string
  /**
   * id
   */
  id: number
}
export interface YapiGetV1HelpCenterAnnouncementContentListAnnouncementListData {
  /**
   * id
   */
  id?: number
  /**
   * 正文
   */
  content?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [公告中心正文页↗](https://yapi.nbttfc365.com/project/44/interface/api/2969)
// **/
// export const getV1HelpCenterAnnouncementContentApiRequest: MarkcoinRequest<
//   YapiGetV1HelpCenterAnnouncementContentApiRequest,
//   YapiGetV1HelpCenterAnnouncementContentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/helpCenter/announcement/content",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
