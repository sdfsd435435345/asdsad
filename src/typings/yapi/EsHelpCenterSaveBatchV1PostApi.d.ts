/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [帮助中心同步数据到es↗](https://yapi.nbttfc365.com/project/77/interface/api/7284) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `POST /v1/es/helpCenter/saveBatch`
 * @更新时间 `2023-06-08 16:51:03`
 */
export interface YapiPostV1EsHelpCenterSaveBatchApiRequest {
  /**
   * 帮助中心的文章集合数据
   */
  centerList: YapiPostV1EsHelpCenterSaveBatchApiRequestListCenterList[]
  /**
   * 商户的id
   */
  businessId: string
}
export interface YapiPostV1EsHelpCenterSaveBatchApiRequestListCenterList {
  /**
   * 标题的名称
   */
  name: string
  /**
   * 帮助中心的正文（不要html标签）
   */
  content: string
  /**
   * 上一级的目录名称
   */
  higherLeverName: string
  /**
   * 所属目录的id(上一级的id
   */
  parentId: string
  /**
   * 商户的id
   */
  businessId: string
  /**
   * 存入数据库的id
   */
  articleId: string
  /**
   * 语言码
   */
  languageCode: string
  /**
   * 最高一级的目录id
   */
  topDialogId: string
  /**
   * 最高一级的目录名称
   */
  topDialogName: string
  /**
   * 发布的时间
   */
  pushTime: string
}

/**
 * 接口 [帮助中心同步数据到es↗](https://yapi.nbttfc365.com/project/77/interface/api/7284) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `POST /v1/es/helpCenter/saveBatch`
 * @更新时间 `2023-06-08 16:51:03`
 */
export interface YapiPostV1EsHelpCenterSaveBatchApiResponse {
  /**
   * true.成功 false失败
   */
  isSucess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [帮助中心同步数据到es↗](https://yapi.nbttfc365.com/project/77/interface/api/7284)
// **/
// export const postV1EsHelpCenterSaveBatchApiRequest: MarkcoinRequest<
//   YapiPostV1EsHelpCenterSaveBatchApiRequest,
//   YapiPostV1EsHelpCenterSaveBatchApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/es/helpCenter/saveBatch",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [帮助中心同步数据到es↗](https://yapi.nbttfc365.com/project/44/interface/api/3362) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `POST /v1/es/helpCenter/saveBatch`
 * @更新时间 `2022-11-15 14:43:40`
 */
export interface YapiPostV1EsHelpCenterSaveBatchApiRequest {
  /**
   * 帮助中心的文章集合数据
   */
  centerList: YapiPostV1EsHelpCenterSaveBatchApiRequestListCenterList[]
  /**
   * 商户的id
   */
  businessId: string
}
export interface YapiPostV1EsHelpCenterSaveBatchApiRequestListCenterList {
  /**
   * 标题的名称
   */
  name: string
  /**
   * 帮助中心的正文（不要html标签）
   */
  content: string
  /**
   * 上一级的目录名称
   */
  higherLeverName: string
  /**
   * 所属目录的id(上一级的id
   */
  parentId: string
  /**
   * 商户的id
   */
  businessId: string
  /**
   * 存入数据库的id
   */
  articleId: string
  /**
   * 语言码
   */
  languageCode: string
  /**
   * 最高一级的目录id
   */
  topDialogId: string
  /**
   * 最高一级的目录名称
   */
  topDialogName: string
  /**
   * 发布的时间
   */
  pushTime: string
}

/**
 * 接口 [帮助中心同步数据到es↗](https://yapi.nbttfc365.com/project/44/interface/api/3362) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `POST /v1/es/helpCenter/saveBatch`
 * @更新时间 `2022-11-15 14:43:40`
 */
export interface YapiPostV1EsHelpCenterSaveBatchApiResponse {
  /**
   * true.成功 false失败
   */
  isSucess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [帮助中心同步数据到es↗](https://yapi.nbttfc365.com/project/44/interface/api/3362)
// **/
// export const postV1EsHelpCenterSaveBatchApiRequest: MarkcoinRequest<
//   YapiPostV1EsHelpCenterSaveBatchApiRequest,
//   YapiPostV1EsHelpCenterSaveBatchApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/es/helpCenter/saveBatch",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
