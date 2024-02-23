/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [公告中心列表页↗](https://yapi.nbttfc365.com/project/77/interface/api/7294) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/helpCenter/announcementList`
 * @更新时间 `2023-06-08 16:51:03`
 */
export interface YapiGetV1HelpCenterAnnouncementListApiRequest {}

/**
 * 接口 [公告中心列表页↗](https://yapi.nbttfc365.com/project/77/interface/api/7294) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/helpCenter/announcementList`
 * @更新时间 `2023-06-08 16:51:03`
 */
export interface YapiGetV1HelpCenterAnnouncementListApiResponse {
  code?: number
  data?: YapiGetV1HelpCenterAnnouncementData
  message?: string
}
export interface YapiGetV1HelpCenterAnnouncementData {
  /**
   * 目录的列表
   */
  dialogList?: YapiGetV1HelpCenterAnnouncementListDialogListData[]
}
export interface YapiGetV1HelpCenterAnnouncementListDialogListData {
  /**
   * 标题
   */
  name: string
  /**
   * logo
   */
  logo: string
  /**
   * 文章的列表
   */
  announcementTextVOList: YapiGetV1HelpCenterAnnouncementListAnnouncementTextVOListDialogListData[]
  /**
   * 目录的id
   */
  id: number
}
export interface YapiGetV1HelpCenterAnnouncementListAnnouncementTextVOListDialogListData {
  /**
   * 创建的时间
   */
  createdByTime: string
  /**
   * 文章的标题标题
   */
  name: string
  /**
   * id
   */
  id: number
  /**
   * 上一级的id
   */
  parentId: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [公告中心列表页↗](https://yapi.nbttfc365.com/project/77/interface/api/7294)
// **/
// export const getV1HelpCenterAnnouncementListApiRequest: MarkcoinRequest<
//   YapiGetV1HelpCenterAnnouncementListApiRequest,
//   YapiGetV1HelpCenterAnnouncementListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/helpCenter/announcementList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [公告中心列表页↗](https://yapi.nbttfc365.com/project/44/interface/api/2972) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/helpCenter/announcementList`
 * @更新时间 `2022-11-16 14:41:59`
 */
export interface YapiGetV1HelpCenterAnnouncementListApiRequest {}

/**
 * 接口 [公告中心列表页↗](https://yapi.nbttfc365.com/project/44/interface/api/2972) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/helpCenter/announcementList`
 * @更新时间 `2022-11-16 14:41:59`
 */
export interface YapiGetV1HelpCenterAnnouncementListApiResponse {
  code?: number
  data?: YapiGetV1HelpCenterAnnouncementData
  message?: string
}
export interface YapiGetV1HelpCenterAnnouncementData {
  /**
   * 目录的列表
   */
  dialogList?: YapiGetV1HelpCenterAnnouncementListDialogListData[]
}
export interface YapiGetV1HelpCenterAnnouncementListDialogListData {
  /**
   * 标题
   */
  name: string
  /**
   * logo
   */
  logo: string
  /**
   * 文章的列表
   */
  announcementTextVOList: YapiGetV1HelpCenterAnnouncementListAnnouncementTextVOListDialogListData[]
  /**
   * 目录的id
   */
  id: number
}
export interface YapiGetV1HelpCenterAnnouncementListAnnouncementTextVOListDialogListData {
  /**
   * 创建的时间
   */
  createdByTime: string
  /**
   * 文章的标题标题
   */
  name: string
  /**
   * id
   */
  id: number
  /**
   * 上一级的id
   */
  parentId: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [公告中心列表页↗](https://yapi.nbttfc365.com/project/44/interface/api/2972)
// **/
// export const getV1HelpCenterAnnouncementListApiRequest: MarkcoinRequest<
//   YapiGetV1HelpCenterAnnouncementListApiRequest,
//   YapiGetV1HelpCenterAnnouncementListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/helpCenter/announcementList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
