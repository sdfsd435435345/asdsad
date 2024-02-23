/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [帮助中心首页↗](https://yapi.nbttfc365.com/project/77/interface/api/7314) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/helpCenter/mainPage`
 * @更新时间 `2023-06-08 16:51:04`
 */
export interface YapiGetV1HelpCenterMainPageApiRequest {}

/**
 * 接口 [帮助中心首页↗](https://yapi.nbttfc365.com/project/77/interface/api/7314) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/helpCenter/mainPage`
 * @更新时间 `2023-06-08 16:51:04`
 */
export interface YapiGetV1HelpCenterMainPageApiResponse {
  code?: number
  data?: YapiGetV1HelpCenterMainPageData
  message?: string
}
export interface YapiGetV1HelpCenterMainPageData {
  /**
   * 最新的文章
   */
  articleList?: YapiGetV1HelpCenterMainPageListArticleListData[]
  /**
   * 常见问题
   */
  questionList?: YapiGetV1HelpCenterMainPageListQuestionListData[]
}
export interface YapiGetV1HelpCenterMainPageListArticleListData {
  /**
   * 创建的时间
   */
  createdByTime: string
  /**
   * 标题
   */
  name: string
  /**
   * id
   */
  id: number
  /**
   * 内容
   */
  content: string
  /**
   * 上一级的id
   */
  parentId: string
  /**
   * 最上一级的目录id
   */
  topDialogId: string
  /**
   * 上一级的目录名称
   */
  higherLeverName: string
}
export interface YapiGetV1HelpCenterMainPageListQuestionListData {
  /**
   * 标题
   */
  name: string
  /**
   * 图标地址
   */
  logo: string
  /**
   * id
   */
  id: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [帮助中心首页↗](https://yapi.nbttfc365.com/project/77/interface/api/7314)
// **/
// export const getV1HelpCenterMainPageApiRequest: MarkcoinRequest<
//   YapiGetV1HelpCenterMainPageApiRequest,
//   YapiGetV1HelpCenterMainPageApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/helpCenter/mainPage",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [帮助中心首页↗](https://yapi.nbttfc365.com/project/44/interface/api/2984) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/helpCenter/mainPage`
 * @更新时间 `2023-09-07 11:30:28`
 */
export interface YapiGetV1HelpCenterMainPageApiRequest {}

/**
 * 接口 [帮助中心首页↗](https://yapi.nbttfc365.com/project/44/interface/api/2984) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/helpCenter/mainPage`
 * @更新时间 `2023-09-07 11:30:28`
 */
export interface YapiGetV1HelpCenterMainPageApiResponse {
  code?: number
  data?: YapiGetV1HelpCenterMainPageData
  message?: string
}
export interface YapiGetV1HelpCenterMainPageData {
  /**
   * 最新的文章
   */
  articleList?: YapiGetV1HelpCenterMainPageListArticleListData[]
  /**
   * 常见问题
   */
  questionList?: YapiGetV1HelpCenterMainPageListQuestionListData[]
}
export interface YapiGetV1HelpCenterMainPageListArticleListData {
  /**
   * 创建的时间
   */
  createdByTime: string
  /**
   * 标题
   */
  name: string
  /**
   * id
   */
  id: number
  /**
   * 内容
   */
  content: string
  /**
   * 上一级的id
   */
  parentId: string
  /**
   * 最上一级的目录id
   */
  topDialogId: string
  /**
   * 上一级的目录名称
   */
  higherLeverName: string
}
export interface YapiGetV1HelpCenterMainPageListQuestionListData {
  /**
   * 标题
   */
  name: string
  /**
   * 图标地址
   */
  logo: string
  /**
   * id
   */
  id: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [帮助中心首页↗](https://yapi.nbttfc365.com/project/44/interface/api/2984)
// **/
// export const getV1HelpCenterMainPageApiRequest: MarkcoinRequest<
//   YapiGetV1HelpCenterMainPageApiRequest,
//   YapiGetV1HelpCenterMainPageApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/helpCenter/mainPage",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
