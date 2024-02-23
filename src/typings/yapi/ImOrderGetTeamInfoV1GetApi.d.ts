/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [IM根据订单ID查询群ID↗](https://yapi.nbttfc365.com/project/73/interface/api/5138) 的 **请求类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_580)
 * @请求头 `GET /v1/im/order/getTeamInfo`
 * @更新时间 `2023-04-14 18:56:53`
 */
export interface YapiGetV1ImOrderGetTeamInfoApiRequest {
  /**
   * 订单ID
   */
  orderId: string
}

/**
 * 接口 [IM根据订单ID查询群ID↗](https://yapi.nbttfc365.com/project/73/interface/api/5138) 的 **返回类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_580)
 * @请求头 `GET /v1/im/order/getTeamInfo`
 * @更新时间 `2023-04-14 18:56:53`
 */
export interface YapiGetV1ImOrderGetTeamInfoApiResponse {
  /**
   * 群ID
   */
  tid: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [IM根据订单ID查询群ID↗](https://yapi.nbttfc365.com/project/73/interface/api/5138)
// **/
// export const getV1ImOrderGetTeamInfoApiRequest: MarkcoinRequest<
//   YapiGetV1ImOrderGetTeamInfoApiRequest,
//   YapiGetV1ImOrderGetTeamInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/im/order/getTeamInfo",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [IM根据订单ID查询群ID↗](https://yapi.nbttfc365.com/project/77/interface/api/6739) 的 **请求类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_630)
 * @请求头 `GET /v1/im/order/getTeamInfo`
 * @更新时间 `2023-06-08 16:47:15`
 */
export interface YapiGetV1ImOrderGetTeamInfoApiRequest {
  /**
   * 订单ID
   */
  orderId: string
}

/**
 * 接口 [IM根据订单ID查询群ID↗](https://yapi.nbttfc365.com/project/77/interface/api/6739) 的 **返回类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_630)
 * @请求头 `GET /v1/im/order/getTeamInfo`
 * @更新时间 `2023-06-08 16:47:15`
 */
export interface YapiGetV1ImOrderGetTeamInfoApiResponse {
  /**
   * 群ID
   */
  tid: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [IM根据订单ID查询群ID↗](https://yapi.nbttfc365.com/project/77/interface/api/6739)
// **/
// export const getV1ImOrderGetTeamInfoApiRequest: MarkcoinRequest<
//   YapiGetV1ImOrderGetTeamInfoApiRequest,
//   YapiGetV1ImOrderGetTeamInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/im/order/getTeamInfo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
