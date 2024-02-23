/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [帮助中心列表↗](https://yapi.nbttfc365.com/project/77/interface/api/7299) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/helpCenter/helpCenterList`
 * @更新时间 `2023-06-08 16:51:04`
 */
export interface YapiGetV1HelpCenterHelpCenterListApiRequest {}

/**
 * 接口 [帮助中心列表↗](https://yapi.nbttfc365.com/project/77/interface/api/7299) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/helpCenter/helpCenterList`
 * @更新时间 `2023-06-08 16:51:04`
 */
export interface YapiGetV1HelpCenterHelpCenterListApiResponse {
  code?: number
  data?: YapiGetV1HelpCenterHelpCenterData
  message?: string
}
export interface YapiGetV1HelpCenterHelpCenterData {
  dialogList?: YapiGetV1HelpCenterHelpCenterListDialogListData[]
}
export interface YapiGetV1HelpCenterHelpCenterListDialogListData {
  /**
   * 一级目录的列表
   */
  catalogVOList: YapiGetV1HelpCenterHelpCenterListCatalogVOListDialogListData[]
  /**
   * 一级目录标题
   */
  name: string
  /**
   * 一级目录id
   */
  id: number
}
export interface YapiGetV1HelpCenterHelpCenterListCatalogVOListDialogListData {
  /**
   * 二级目录的列表
   */
  catalogVOList: YapiGetV1HelpCenterHelpCenterListCatalogVOListCatalogVOListDialogListData[]
  /**
   * 二级目录标题
   */
  name: string
  /**
   * 二级目录id
   */
  id: number
  /**
   * 二级目录上一级id
   */
  parentId: number
}
export interface YapiGetV1HelpCenterHelpCenterListCatalogVOListCatalogVOListDialogListData {
  /**
   * 文章的列表
   */
  catalogVOList: string[]
  /**
   * 文章的标题
   */
  name: string
  /**
   * 文章的id
   */
  id: number
  /**
   * 文章的上一级id
   */
  parentId: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [帮助中心列表↗](https://yapi.nbttfc365.com/project/77/interface/api/7299)
// **/
// export const getV1HelpCenterHelpCenterListApiRequest: MarkcoinRequest<
//   YapiGetV1HelpCenterHelpCenterListApiRequest,
//   YapiGetV1HelpCenterHelpCenterListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/helpCenter/helpCenterList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [帮助中心列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2978) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/helpCenter/helpCenterList`
 * @更新时间 `2023-09-07 11:41:59`
 */
export interface YapiGetV1HelpCenterHelpCenterListApiRequest {}

/**
 * 接口 [帮助中心列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2978) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/helpCenter/helpCenterList`
 * @更新时间 `2023-09-07 11:41:59`
 */
export interface YapiGetV1HelpCenterHelpCenterListApiResponse {
  code?: number
  data?: YapiGetV1HelpCenterHelpCenterData
  message?: string
}
export interface YapiGetV1HelpCenterHelpCenterData {
  dialogList?: YapiGetV1HelpCenterHelpCenterListDialogListData[]
}
export interface YapiGetV1HelpCenterHelpCenterListDialogListData {
  /**
   * 一级目录的列表
   */
  catalogVOList: YapiGetV1HelpCenterHelpCenterListCatalogVOListDialogListData[]
  /**
   * 一级目录标题
   */
  name: string
  /**
   * 一级目录id
   */
  id: number
}
export interface YapiGetV1HelpCenterHelpCenterListCatalogVOListDialogListData {
  /**
   * 二级目录的列表
   */
  catalogVOList: YapiGetV1HelpCenterHelpCenterListCatalogVOListCatalogVOListDialogListData[]
  /**
   * 二级目录标题
   */
  name: string
  /**
   * 二级目录id
   */
  id: number
  /**
   * 二级目录上一级id
   */
  parentId: number
}
export interface YapiGetV1HelpCenterHelpCenterListCatalogVOListCatalogVOListDialogListData {
  /**
   * 文章的列表
   */
  catalogVOList: string[]
  /**
   * 文章的标题
   */
  name: string
  /**
   * 文章的id
   */
  id: number
  /**
   * 文章的上一级id
   */
  parentId: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [帮助中心列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2978)
// **/
// export const getV1HelpCenterHelpCenterListApiRequest: MarkcoinRequest<
//   YapiGetV1HelpCenterHelpCenterListApiRequest,
//   YapiGetV1HelpCenterHelpCenterListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/helpCenter/helpCenterList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
