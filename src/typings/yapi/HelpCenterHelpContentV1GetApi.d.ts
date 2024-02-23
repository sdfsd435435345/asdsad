/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [帮助中心正文详情↗](https://yapi.nbttfc365.com/project/77/interface/api/7304) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/helpCenter/help/content`
 * @更新时间 `2023-06-08 16:51:04`
 */
export interface YapiGetV1HelpCenterHelpContentApiRequest {
  contentId: string
}

/**
 * 接口 [帮助中心正文详情↗](https://yapi.nbttfc365.com/project/77/interface/api/7304) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/helpCenter/help/content`
 * @更新时间 `2023-06-08 16:51:04`
 */
export interface YapiGetV1HelpCenterHelpContentApiResponse {
  code?: number
  data?: YapiGetV1HelpCenterHelpContentData
  message?: string
}
export interface YapiGetV1HelpCenterHelpContentData {
  articleList?: string[]
  /**
   * 目录的列表
   */
  catelogList?: YapiGetV1HelpCenterHelpContentListCatelogListData[]
  helpCenterText?: YapiGetV1HelpCenterHelpContentHelpCenterTextData
}
export interface YapiGetV1HelpCenterHelpContentListCatelogListData {
  catalogVOList: YapiGetV1HelpCenterHelpContentListCatalogVOListCatelogListData[]
  /**
   * id
   */
  id: number
  /**
   * 目录
   */
  name: string
}
export interface YapiGetV1HelpCenterHelpContentListCatalogVOListCatelogListData {
  catalogVOList: string[]
  /**
   * 目录
   */
  name: string
  /**
   * id
   */
  id: number
}
/**
 * 正文
 */
export interface YapiGetV1HelpCenterHelpContentHelpCenterTextData {
  /**
   * 创建的时间
   */
  createdByTime?: string
  /**
   * 正文
   */
  content?: string
  /**
   * 上一级的id
   */
  parentId?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [帮助中心正文详情↗](https://yapi.nbttfc365.com/project/77/interface/api/7304)
// **/
// export const getV1HelpCenterHelpContentApiRequest: MarkcoinRequest<
//   YapiGetV1HelpCenterHelpContentApiRequest,
//   YapiGetV1HelpCenterHelpContentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/helpCenter/help/content",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [帮助中心正文详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2975) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/helpCenter/help/content`
 * @更新时间 `2023-09-07 11:37:01`
 */
export interface YapiGetV1HelpCenterHelpContentApiRequest {
  contentId: string
}

/**
 * 接口 [帮助中心正文详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2975) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/helpCenter/help/content`
 * @更新时间 `2023-09-07 11:37:01`
 */
export interface YapiGetV1HelpCenterHelpContentApiResponse {
  code?: number
  data?: YapiGetV1HelpCenterHelpContentData
  message?: string
}
export interface YapiGetV1HelpCenterHelpContentData {
  articleList?: string[]
  /**
   * 目录的列表
   */
  catelogList?: YapiGetV1HelpCenterHelpContentListCatelogListData[]
  helpCenterText?: YapiGetV1HelpCenterHelpContentHelpCenterTextData
}
export interface YapiGetV1HelpCenterHelpContentListCatelogListData {
  catalogVOList: YapiGetV1HelpCenterHelpContentListCatalogVOListCatelogListData[]
  /**
   * id
   */
  id: number
  /**
   * 目录
   */
  name: string
}
export interface YapiGetV1HelpCenterHelpContentListCatalogVOListCatelogListData {
  catalogVOList: string[]
  /**
   * 目录
   */
  name: string
  /**
   * id
   */
  id: number
}
/**
 * 正文
 */
export interface YapiGetV1HelpCenterHelpContentHelpCenterTextData {
  /**
   * 创建的时间
   */
  createdByTime?: string
  /**
   * 正文
   */
  content?: string
  /**
   * 上一级的id
   */
  parentId?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [帮助中心正文详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2975)
// **/
// export const getV1HelpCenterHelpContentApiRequest: MarkcoinRequest<
//   YapiGetV1HelpCenterHelpContentApiRequest,
//   YapiGetV1HelpCenterHelpContentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/helpCenter/help/content",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
