/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [IM发送商家欢迎语(测试)↗](https://yapi.nbttfc365.com/project/73/interface/api/5147) 的 **请求类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_580)
 * @请求头 `POST /v1/im/order/sendWelcomeMsg`
 * @更新时间 `2023-09-12 10:13:09`
 */
export interface YapiPostV1ImOrderSendWelcomeMsgApiRequest {
  /**
   * 订单ID
   */
  orderId: string
  /**
   * 买家 UID
   */
  buyerUid: number
  /**
   * 卖家 UID
   */
  sellerUid: number
}

/**
 * 接口 [IM发送商家欢迎语(测试)↗](https://yapi.nbttfc365.com/project/73/interface/api/5147) 的 **返回类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_580)
 * @请求头 `POST /v1/im/order/sendWelcomeMsg`
 * @更新时间 `2023-09-12 10:13:09`
 */
export interface YapiPostV1ImOrderSendWelcomeMsgApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [IM发送商家欢迎语(测试)↗](https://yapi.nbttfc365.com/project/73/interface/api/5147)
// **/
// export const postV1ImOrderSendWelcomeMsgApiRequest: MarkcoinRequest<
//   YapiPostV1ImOrderSendWelcomeMsgApiRequest,
//   YapiPostV1ImOrderSendWelcomeMsgApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/im/order/sendWelcomeMsg",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [IM发送商家欢迎语↗](https://yapi.nbttfc365.com/project/77/interface/api/6734) 的 **请求类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_630)
 * @请求头 `POST /v1/im/order/sendWelcomeMsg`
 * @更新时间 `2023-06-08 16:47:15`
 */
export interface YapiPostV1ImOrderSendWelcomeMsgApiRequest {
  /**
   * 订单ID
   */
  orderId: string
  /**
   * 买家 UID
   */
  buyerUid: number
  /**
   * 卖家 UID
   */
  sellerUid: number
}

/**
 * 接口 [IM发送商家欢迎语↗](https://yapi.nbttfc365.com/project/77/interface/api/6734) 的 **返回类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_630)
 * @请求头 `POST /v1/im/order/sendWelcomeMsg`
 * @更新时间 `2023-06-08 16:47:15`
 */
export interface YapiPostV1ImOrderSendWelcomeMsgApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [IM发送商家欢迎语↗](https://yapi.nbttfc365.com/project/77/interface/api/6734)
// **/
// export const postV1ImOrderSendWelcomeMsgApiRequest: MarkcoinRequest<
//   YapiPostV1ImOrderSendWelcomeMsgApiRequest,
//   YapiPostV1ImOrderSendWelcomeMsgApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/im/order/sendWelcomeMsg",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
