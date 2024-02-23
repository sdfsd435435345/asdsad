/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [付款方式开关↗](https://yapi.nbttfc365.com/project/44/interface/api/5318) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/enabled`
 * @更新时间 `2023-03-13 09:58:45`
 */
export interface YapiPostV1C2cPaymentEnabledApiRequest {
  /**
   * 支付方式，BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentType: string
  /**
   * 开关，1，开启，0，关闭
   */
  enabled: number
}

/**
 * 接口 [付款方式开关↗](https://yapi.nbttfc365.com/project/44/interface/api/5318) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/enabled`
 * @更新时间 `2023-03-13 09:58:45`
 */
export interface YapiPostV1C2cPaymentEnabledApiResponse {
  /**
   * 200成交，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  /**
   * true，成功，false，失败
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [付款方式开关↗](https://yapi.nbttfc365.com/project/44/interface/api/5318)
// **/
// export const postV1C2cPaymentEnabledApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentEnabledApiRequest,
//   YapiPostV1C2cPaymentEnabledApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/enabled",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [付款方式开关↗](https://yapi.nbttfc365.com/project/77/interface/api/6659) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/enabled`
 * @更新时间 `2023-06-08 16:47:10`
 */
export interface YapiPostV1C2cPaymentEnabledApiRequest {
  /**
   * 支付方式，BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentType: string
  /**
   * 开关，1，开启，0，关闭
   */
  enabled: number
}

/**
 * 接口 [付款方式开关↗](https://yapi.nbttfc365.com/project/77/interface/api/6659) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/enabled`
 * @更新时间 `2023-06-08 16:47:10`
 */
export interface YapiPostV1C2cPaymentEnabledApiResponse {
  /**
   * 200成交，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  /**
   * true，成功，false，失败
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [付款方式开关↗](https://yapi.nbttfc365.com/project/77/interface/api/6659)
// **/
// export const postV1C2cPaymentEnabledApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentEnabledApiRequest,
//   YapiPostV1C2cPaymentEnabledApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/enabled",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
