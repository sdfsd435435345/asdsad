/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [C2C推送消息测试↗](https://yapi.nbttfc365.com/project/73/interface/api/5599) 的 **请求类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_580)
 * @请求头 `POST /v1/pushMsg`
 * @更新时间 `2023-04-13 17:47:39`
 */
export interface YapiPostV1PushMsgApiRequest {
  /**
   * 用户id
   */
  uid?: string
  /**
   * 用户名
   */
  userName?: string
  /**
   * 性别 0-未知，1-男，2-女
   */
  gender?: number
  /**
   * 头像URL
   */
  icon?: string
  /**
   * c2c_order_message_success:c2c_order_status_changed:20230413
   */
  topic: string
}

/**
 * 接口 [C2C推送消息测试↗](https://yapi.nbttfc365.com/project/73/interface/api/5599) 的 **返回类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_580)
 * @请求头 `POST /v1/pushMsg`
 * @更新时间 `2023-04-13 17:47:39`
 */
export interface YapiPostV1PushMsgApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [C2C推送消息测试↗](https://yapi.nbttfc365.com/project/73/interface/api/5599)
// **/
// export const postV1PushMsgApiRequest: MarkcoinRequest<
//   YapiPostV1PushMsgApiRequest,
//   YapiPostV1PushMsgApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/pushMsg",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [C2C推送消息测试↗](https://yapi.nbttfc365.com/project/77/interface/api/6724) 的 **请求类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_630)
 * @请求头 `POST /v1/pushMsg`
 * @更新时间 `2023-06-08 16:47:14`
 */
export interface YapiPostV1PushMsgApiRequest {
  /**
   * 用户id
   */
  uid?: string
  /**
   * 用户名
   */
  userName?: string
  /**
   * 性别 0-未知，1-男，2-女
   */
  gender?: number
  /**
   * 头像URL
   */
  icon?: string
  /**
   * c2c_order_message_success:c2c_order_status_changed:20230413
   */
  topic: string
}

/**
 * 接口 [C2C推送消息测试↗](https://yapi.nbttfc365.com/project/77/interface/api/6724) 的 **返回类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_630)
 * @请求头 `POST /v1/pushMsg`
 * @更新时间 `2023-06-08 16:47:14`
 */
export interface YapiPostV1PushMsgApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [C2C推送消息测试↗](https://yapi.nbttfc365.com/project/77/interface/api/6724)
// **/
// export const postV1PushMsgApiRequest: MarkcoinRequest<
//   YapiPostV1PushMsgApiRequest,
//   YapiPostV1PushMsgApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/pushMsg",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
