/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [更改状态(已付款、已收款、已转币、已收币都可调用这个)↗](https://yapi.nbttfc365.com/project/73/interface/api/4555) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /v1/c2c/order/changeStatus`
 * @更新时间 `2023-03-05 11:37:16`
 */
export interface YapiPostV1C2cOrderChangeStatusApiRequest {
  /**
   * 订单ID
   */
  id: string
  /**
   * 状态(WAS_PAYED已付款 WAS_COLLECTED已收款 WAS_TRANSFER_COIN已转币 WAS_RECEIVE_COIN已收币(已完成))
   */
  statusCd: string
}

/**
 * 接口 [更改状态(已付款、已收款、已转币、已收币都可调用这个)↗](https://yapi.nbttfc365.com/project/73/interface/api/4555) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /v1/c2c/order/changeStatus`
 * @更新时间 `2023-03-05 11:37:16`
 */
export interface YapiPostV1C2cOrderChangeStatusApiResponse {
  code?: number
  data?: YapiPostV1C2COrderChangeStatusData
  message?: string
}
export interface YapiPostV1C2COrderChangeStatusData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [更改状态(已付款、已收款、已转币、已收币都可调用这个)↗](https://yapi.nbttfc365.com/project/73/interface/api/4555)
// **/
// export const postV1C2cOrderChangeStatusApiRequest: MarkcoinRequest<
//   YapiPostV1C2cOrderChangeStatusApiRequest,
//   YapiPostV1C2cOrderChangeStatusApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/order/changeStatus",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [更改状态(已付款、已收款、已转币、已收币都可调用这个)↗](https://yapi.nbttfc365.com/project/77/interface/api/6494) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /v1/c2c/order/changeStatus`
 * @更新时间 `2023-06-08 16:46:59`
 */
export interface YapiPostV1C2cOrderChangeStatusApiRequest {
  /**
   * 订单ID
   */
  id: string
  /**
   * 状态(WAS_PAYED已付款 WAS_COLLECTED已收款 WAS_TRANSFER_COIN已转币 WAS_RECEIVE_COIN已收币(已完成))
   */
  statusCd: string
}

/**
 * 接口 [更改状态(已付款、已收款、已转币、已收币都可调用这个)↗](https://yapi.nbttfc365.com/project/77/interface/api/6494) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /v1/c2c/order/changeStatus`
 * @更新时间 `2023-06-08 16:46:59`
 */
export interface YapiPostV1C2cOrderChangeStatusApiResponse {
  code?: number
  data?: YapiPostV1C2COrderChangeStatusData
  message?: string
}
export interface YapiPostV1C2COrderChangeStatusData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [更改状态(已付款、已收款、已转币、已收币都可调用这个)↗](https://yapi.nbttfc365.com/project/77/interface/api/6494)
// **/
// export const postV1C2cOrderChangeStatusApiRequest: MarkcoinRequest<
//   YapiPostV1C2cOrderChangeStatusApiRequest,
//   YapiPostV1C2cOrderChangeStatusApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/order/changeStatus",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
