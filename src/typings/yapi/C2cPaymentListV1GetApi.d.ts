/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [付款方式列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5291) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `GET /v1/c2c/payment/list`
 * @更新时间 `2023-03-17 17:12:39`
 */
export interface YapiGetV1C2cPaymentListApiRequest {
  /**
   * 交易区ID,只支持单个
   */
  legalCurrencyId?: string
}

/**
 * 接口 [付款方式列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5291) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `GET /v1/c2c/payment/list`
 * @更新时间 `2023-03-17 17:12:39`
 */
export interface YapiGetV1C2cPaymentListApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CPaymentData
}
/**
 * 付款方式列表
 */
export interface YapiGetV1C2CPaymentData {
  paymentList: YapiGetV1C2CPaymentListPaymentListData[]
}
export interface YapiGetV1C2CPaymentListPaymentListData {
  /**
   * 支付类型，BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentType: string
  /**
   * 1，开启，0，关闭
   */
  enabled: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [付款方式列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5291)
// **/
// export const getV1C2cPaymentListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cPaymentListApiRequest,
//   YapiGetV1C2cPaymentListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/payment/list",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [付款方式列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6654) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `GET /v1/c2c/payment/list`
 * @更新时间 `2023-06-08 16:47:09`
 */
export interface YapiGetV1C2cPaymentListApiRequest {
  /**
   * 交易区ID,只支持单个
   */
  legalCurrencyId?: string
}

/**
 * 接口 [付款方式列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6654) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `GET /v1/c2c/payment/list`
 * @更新时间 `2023-06-08 16:47:09`
 */
export interface YapiGetV1C2cPaymentListApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CPaymentData
}
/**
 * 付款方式列表
 */
export interface YapiGetV1C2CPaymentData {
  paymentList: YapiGetV1C2CPaymentListPaymentListData[]
}
export interface YapiGetV1C2CPaymentListPaymentListData {
  /**
   * 支付类型，BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentType: string
  /**
   * 1，开启，0，关闭
   */
  enabled: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [付款方式列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6654)
// **/
// export const getV1C2cPaymentListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cPaymentListApiRequest,
//   YapiGetV1C2cPaymentListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/payment/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
