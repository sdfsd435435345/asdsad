/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [分页查询行情异动↗](https://yapi.nbttfc365.com/project/77/interface/api/7169) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/messages/marketActivities`
 * @更新时间 `2023-06-08 16:50:55`
 */
export interface YapiGetV1InboxMessagesMarketActivitiesApiRequest {
  /**
   * 页
   */
  pageNum: string
  /**
   * 每页数据
   */
  pageSize: string
}

/**
 * 接口 [分页查询行情异动↗](https://yapi.nbttfc365.com/project/77/interface/api/7169) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/messages/marketActivities`
 * @更新时间 `2023-06-08 16:50:55`
 */
export interface YapiGetV1InboxMessagesMarketActivitiesApiResponse {
  code?: number
  data?: YapiGetV1InboxMessagesMarketActivitiesData
  message?: string
}
export interface YapiGetV1InboxMessagesMarketActivitiesData {
  total?: number
  pageSize?: number
  list?: YapiGetV1InboxMessagesMarketActivitiesListData[]
  pageNum?: number
}
export interface YapiGetV1InboxMessagesMarketActivitiesListData {
  /**
   * 图标
   */
  icon: string
  /**
   * 交易对标识
   */
  symbolwassname: string
  /**
   * 交易对名称
   */
  symbolName: string
  id: number
  /**
   * 触发时间
   */
  time: number
  /**
   * 显示内容
   */
  describe: string
  /**
   * 标题
   */
  title: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [分页查询行情异动↗](https://yapi.nbttfc365.com/project/77/interface/api/7169)
// **/
// export const getV1InboxMessagesMarketActivitiesApiRequest: MarkcoinRequest<
//   YapiGetV1InboxMessagesMarketActivitiesApiRequest,
//   YapiGetV1InboxMessagesMarketActivitiesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/messages/marketActivities",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [分页查询行情异动↗](https://yapi.nbttfc365.com/project/44/interface/api/3615) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/messages/marketActivities`
 * @更新时间 `2022-12-14 17:52:58`
 */
export interface YapiGetV1InboxMessagesMarketActivitiesApiRequest {
  /**
   * 页
   */
  pageNum: string
  /**
   * 每页数据
   */
  pageSize: string
}

/**
 * 接口 [分页查询行情异动↗](https://yapi.nbttfc365.com/project/44/interface/api/3615) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/messages/marketActivities`
 * @更新时间 `2022-12-14 17:52:58`
 */
export interface YapiGetV1InboxMessagesMarketActivitiesApiResponse {
  code?: number
  data?: YapiGetV1InboxMessagesMarketActivitiesData
  message?: string
}
export interface YapiGetV1InboxMessagesMarketActivitiesData {
  total?: number
  pageSize?: number
  list?: YapiGetV1InboxMessagesMarketActivitiesListData[]
  pageNum?: number
}
export interface YapiGetV1InboxMessagesMarketActivitiesListData {
  /**
   * 图标
   */
  icon: string
  /**
   * 交易对标识
   */
  symbolwassname: string
  /**
   * 交易对名称
   */
  symbolName: string
  id: number
  /**
   * 触发时间
   */
  time: number
  /**
   * 显示内容
   */
  describe: string
  /**
   * 标题
   */
  title: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [分页查询行情异动↗](https://yapi.nbttfc365.com/project/44/interface/api/3615)
// **/
// export const getV1InboxMessagesMarketActivitiesApiRequest: MarkcoinRequest<
//   YapiGetV1InboxMessagesMarketActivitiesApiRequest,
//   YapiGetV1InboxMessagesMarketActivitiesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/messages/marketActivities",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
