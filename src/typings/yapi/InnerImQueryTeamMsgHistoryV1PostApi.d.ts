/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [IM根据订单查询群聊历史↗](https://yapi.nbttfc365.com/project/73/interface/api/5075) 的 **请求类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_580)
 * @请求头 `POST /inner/v1/im/queryTeamMsgHistory`
 * @更新时间 `2023-03-27 11:27:59`
 */
export interface YapiPostInnerV1ImQueryTeamMsgHistoryApiRequest {
  /**
   * 订单ID
   */
  orderId: number
  /**
   * 记录条数 只能 1~100
   */
  limit?: number
  /**
   * 开始时间毫秒数
   */
  begintime: string
  /**
   * 结束时间毫秒数
   */
  endtime: string
  /**
   * 排序  1按时间正序排列，2按时间降序排列(默认)
   */
  reverse?: number
}

/**
 * 接口 [IM根据订单查询群聊历史↗](https://yapi.nbttfc365.com/project/73/interface/api/5075) 的 **返回类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_580)
 * @请求头 `POST /inner/v1/im/queryTeamMsgHistory`
 * @更新时间 `2023-03-27 11:27:59`
 */
export interface YapiPostInnerV1ImQueryTeamMsgHistoryApiResponse {
  /**
   * 200-成功
   */
  code: number
  /**
   * 错误描述
   */
  desc?: string
  size: number
  msgs: YapiPostInnerV1ImQueryTeamMsgHistoryListMsgs[]
}
/**
 * 根据发送的内容不同的消息类型body内容不同
 */
export interface YapiPostInnerV1ImQueryTeamMsgHistoryListMsgs {
  msgidclient?: string
  /**
   * 消息ID
   */
  msgid?: number
  /**
   * 消息类型
   */
  type?: number
  body?: YapiPostInnerV1ImQueryTeamMsgHistoryBodyListMsgs
  /**
   * 1：android、2:iOS、4：PC、16:WEB、32:REST、64:MAC
   */
  fromclienttype?: number
  /**
   * 发送人
   */
  from?: string
  /**
   * 发送时间
   */
  sendtime?: number
}
/**
 * 消息内容-根据类型来的
 */
export interface YapiPostInnerV1ImQueryTeamMsgHistoryBodyListMsgs {
  ope?: number
  /**
   * 群名称
   */
  tname?: string
  /**
   * 群id
   */
  tid?: number
  /**
   * 接收人
   */
  accids?: string[]
  updatetime?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [IM根据订单查询群聊历史↗](https://yapi.nbttfc365.com/project/73/interface/api/5075)
// **/
// export const postInnerV1ImQueryTeamMsgHistoryApiRequest: MarkcoinRequest<
//   YapiPostInnerV1ImQueryTeamMsgHistoryApiRequest,
//   YapiPostInnerV1ImQueryTeamMsgHistoryApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/im/queryTeamMsgHistory",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [IM根据订单查询群聊历史↗](https://yapi.nbttfc365.com/project/77/interface/api/6744) 的 **请求类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_630)
 * @请求头 `POST /inner/v1/im/queryTeamMsgHistory`
 * @更新时间 `2023-06-08 16:47:15`
 */
export interface YapiPostInnerV1ImQueryTeamMsgHistoryApiRequest {
  /**
   * 订单ID
   */
  orderId: number
  /**
   * 记录条数 只能 1~100
   */
  limit?: number
  /**
   * 开始时间毫秒数
   */
  begintime: string
  /**
   * 结束时间毫秒数
   */
  endtime: string
  /**
   * 排序  1按时间正序排列，2按时间降序排列(默认)
   */
  reverse?: number
}

/**
 * 接口 [IM根据订单查询群聊历史↗](https://yapi.nbttfc365.com/project/77/interface/api/6744) 的 **返回类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_630)
 * @请求头 `POST /inner/v1/im/queryTeamMsgHistory`
 * @更新时间 `2023-06-08 16:47:15`
 */
export interface YapiPostInnerV1ImQueryTeamMsgHistoryApiResponse {
  /**
   * 200-成功
   */
  code: number
  /**
   * 错误描述
   */
  desc?: string
  size: number
  msgs: YapiPostInnerV1ImQueryTeamMsgHistoryListMsgs[]
}
/**
 * 根据发送的内容不同的消息类型body内容不同
 */
export interface YapiPostInnerV1ImQueryTeamMsgHistoryListMsgs {
  msgidclient?: string
  /**
   * 消息ID
   */
  msgid?: number
  /**
   * 消息类型
   */
  type?: number
  body?: YapiPostInnerV1ImQueryTeamMsgHistoryBodyListMsgs
  /**
   * 1：android、2:iOS、4：PC、16:WEB、32:REST、64:MAC
   */
  fromclienttype?: number
  /**
   * 发送人
   */
  from?: string
  /**
   * 发送时间
   */
  sendtime?: number
}
/**
 * 消息内容-根据类型来的
 */
export interface YapiPostInnerV1ImQueryTeamMsgHistoryBodyListMsgs {
  ope?: number
  /**
   * 群名称
   */
  tname?: string
  /**
   * 群id
   */
  tid?: number
  /**
   * 接收人
   */
  accids?: string[]
  updatetime?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [IM根据订单查询群聊历史↗](https://yapi.nbttfc365.com/project/77/interface/api/6744)
// **/
// export const postInnerV1ImQueryTeamMsgHistoryApiRequest: MarkcoinRequest<
//   YapiPostInnerV1ImQueryTeamMsgHistoryApiRequest,
//   YapiPostInnerV1ImQueryTeamMsgHistoryApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/im/queryTeamMsgHistory",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
