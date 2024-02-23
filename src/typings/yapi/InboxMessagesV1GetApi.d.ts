/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [分页获取消息↗](https://yapi.nbttfc365.com/project/77/interface/api/7209) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/messages`
 * @更新时间 `2023-06-08 16:50:58`
 */
export interface YapiGetV1InboxMessagesApiRequest {
  /**
   * 如果不传表示获取全部类型
   */
  moduleId?: string
  /**
   * 第几页
   */
  pageNum: string
  /**
   * 每页条数
   */
  pageSize: string
  /**
   * 订阅来源: 现货=spot, 合约=perpetual
   */
  subscribeSource?: string
}

/**
 * 接口 [分页获取消息↗](https://yapi.nbttfc365.com/project/77/interface/api/7209) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `GET /v1/inbox/messages`
 * @更新时间 `2023-06-08 16:50:58`
 */
export interface YapiGetV1InboxMessagesApiResponse {
  code?: string
  message?: null
  data?: YapiGetV1InboxMessagesData
}
export interface YapiGetV1InboxMessagesData {
  /**
   * 当前页码
   */
  pageNum: string
  /**
   * 每页数量
   */
  pageSize: string
  /**
   * 总条数
   */
  total: string
  list: YapiGetV1InboxMessagesListData[]
}
export interface YapiGetV1InboxMessagesListData {
  /**
   * id
   */
  id: number
  /**
   * 标题
   */
  title: string
  /**
   * 内容
   */
  content: string
  /**
   * 是否已读,1=已读,2=未读
   */
  isRead: number
  /**
   * ios跳转链接
   */
  iosLink: string
  /**
   * android跳转链接
   */
  androidLink: string
  /**
   * web跳转链接
   */
  webLink: string
  /**
   * 时间
   */
  eventTime: number
  /**
   * 事件类型
   */
  eventType: string
  /**
   * 模块id
   */
  moduleId: number
  /**
   * 价格订阅来源: 现货=spot, 合约=perpetual
   */
  subscribeSource: string
  /**
   * 额外的数据
   */
  extras: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [分页获取消息↗](https://yapi.nbttfc365.com/project/77/interface/api/7209)
// **/
// export const getV1InboxMessagesApiRequest: MarkcoinRequest<
//   YapiGetV1InboxMessagesApiRequest,
//   YapiGetV1InboxMessagesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/messages",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [分页获取消息↗](https://yapi.nbttfc365.com/project/44/interface/api/3422) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/messages`
 * @更新时间 `2023-05-12 17:55:02`
 */
export interface YapiGetV1InboxMessagesApiRequest {
  /**
   * 如果不传表示获取全部类型
   */
  moduleId?: string
  /**
   * 第几页
   */
  pageNum: string
  /**
   * 每页条数
   */
  pageSize: string
  /**
   * 订阅来源: 现货=spot, 合约=perpetual
   */
  subscribeSource?: string
}

/**
 * 接口 [分页获取消息↗](https://yapi.nbttfc365.com/project/44/interface/api/3422) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `GET /v1/inbox/messages`
 * @更新时间 `2023-05-12 17:55:02`
 */
export interface YapiGetV1InboxMessagesApiResponse {
  code?: string
  message?: null
  data?: YapiGetV1InboxMessagesData
}
export interface YapiGetV1InboxMessagesData {
  /**
   * 当前页码
   */
  pageNum: string
  /**
   * 每页数量
   */
  pageSize: string
  /**
   * 总条数
   */
  total: string
  list: YapiGetV1InboxMessagesListData[]
}
export interface YapiGetV1InboxMessagesListData {
  /**
   * id
   */
  id: number
  /**
   * 标题
   */
  title: string
  /**
   * 内容
   */
  content: string
  /**
   * 是否已读,1=已读,2=未读
   */
  isRead: number
  /**
   * ios跳转链接
   */
  iosLink: string
  /**
   * android跳转链接
   */
  androidLink: string
  /**
   * web跳转链接
   */
  webLink: string
  /**
   * 时间
   */
  eventTime: number
  /**
   * 事件类型
   */
  eventType: string
  /**
   * 模块id
   */
  moduleId: number
  /**
   * 价格订阅来源: 现货=spot, 合约=perpetual
   */
  subscribeSource: string
  /**
   * 额外的数据
   */
  extras: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [分页获取消息↗](https://yapi.nbttfc365.com/project/44/interface/api/3422)
// **/
// export const getV1InboxMessagesApiRequest: MarkcoinRequest<
//   YapiGetV1InboxMessagesApiRequest,
//   YapiGetV1InboxMessagesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/inbox/messages",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
