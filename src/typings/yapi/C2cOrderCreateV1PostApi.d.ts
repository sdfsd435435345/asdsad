/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [下订单↗](https://yapi.nbttfc365.com/project/73/interface/api/4543) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /v1/c2c/order/create`
 * @更新时间 `2023-03-14 18:11:03`
 */
export interface YapiPostV1C2cOrderCreateApiRequest {
  /**
   * 广告ID
   */
  advertId: string
  /**
   * 类型(NUMBER TOTAL_PRICE)
   */
  typeCd: string
  /**
   * 数量
   */
  number?: number
  /**
   * 总价
   */
  totalPrice?: number
  /**
   * 收付方式ID
   */
  paymentId: number
  /**
   * 主链类型ID
   */
  mainchainAddrId?: number
}

/**
 * 接口 [下订单↗](https://yapi.nbttfc365.com/project/73/interface/api/4543) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /v1/c2c/order/create`
 * @更新时间 `2023-03-14 18:11:03`
 */
export interface YapiPostV1C2cOrderCreateApiResponse {
  code?: number
  data?: YapiPostV1C2COrderCreateData
  message?: string
}
export interface YapiPostV1C2COrderCreateData {
  /**
   * 总价
   */
  totalPrice?: number
  /**
   * B端商户ID
   */
  businessId?: string
  /**
   * 状态
   */
  statusCd?: string
  /**
   * 是否解冻过，1解冻过，2未解冻过
   */
  unfreeze?: number
  /**
   * 广告ID
   */
  advertId?: string
  /**
   * 商家用户ID
   */
  merchantUid?: string
  /**
   * 用户ID
   */
  uid?: string
  /**
   * 数量
   */
  number?: number
  /**
   * 冻结结束时间
   */
  freezeEndTime?: string
  /**
   * 过期时间
   */
  expireTime?: number
  /**
   * 类型
   */
  typeCd?: string
  /**
   * 主链ID
   */
  mainchainAddrId?: string
  /**
   * 支付方式ID
   */
  paymentId?: string
  /**
   * 订单ID
   */
  id?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [下订单↗](https://yapi.nbttfc365.com/project/73/interface/api/4543)
// **/
// export const postV1C2cOrderCreateApiRequest: MarkcoinRequest<
//   YapiPostV1C2cOrderCreateApiRequest,
//   YapiPostV1C2cOrderCreateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/order/create",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [下订单↗](https://yapi.nbttfc365.com/project/77/interface/api/6484) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /v1/c2c/order/create`
 * @更新时间 `2023-06-08 16:46:58`
 */
export interface YapiPostV1C2cOrderCreateApiRequest {
  /**
   * 广告ID
   */
  advertId: string
  /**
   * 类型(NUMBER TOTAL_PRICE)
   */
  typeCd: string
  /**
   * 数量
   */
  number?: number
  /**
   * 总价
   */
  totalPrice?: number
  /**
   * 收付方式ID
   */
  paymentId: number
  /**
   * 主链类型ID
   */
  mainchainAddrId?: number
}

/**
 * 接口 [下订单↗](https://yapi.nbttfc365.com/project/77/interface/api/6484) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /v1/c2c/order/create`
 * @更新时间 `2023-06-08 16:46:58`
 */
export interface YapiPostV1C2cOrderCreateApiResponse {
  code?: number
  data?: YapiPostV1C2COrderCreateData
  message?: string
}
export interface YapiPostV1C2COrderCreateData {
  /**
   * 总价
   */
  totalPrice?: number
  /**
   * B端商户ID
   */
  businessId?: string
  /**
   * 状态
   */
  statusCd?: string
  /**
   * 是否解冻过，1解冻过，2未解冻过
   */
  unfreeze?: number
  /**
   * 广告ID
   */
  advertId?: string
  /**
   * 商家用户ID
   */
  merchantUid?: string
  /**
   * 用户ID
   */
  uid?: string
  /**
   * 数量
   */
  number?: number
  /**
   * 冻结结束时间
   */
  freezeEndTime?: string
  /**
   * 过期时间
   */
  expireTime?: number
  /**
   * 类型
   */
  typeCd?: string
  /**
   * 主链ID
   */
  mainchainAddrId?: string
  /**
   * 支付方式ID
   */
  paymentId?: string
  /**
   * 订单ID
   */
  id?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [下订单↗](https://yapi.nbttfc365.com/project/77/interface/api/6484)
// **/
// export const postV1C2cOrderCreateApiRequest: MarkcoinRequest<
//   YapiPostV1C2cOrderCreateApiRequest,
//   YapiPostV1C2cOrderCreateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/order/create",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
