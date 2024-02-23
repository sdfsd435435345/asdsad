/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取收付方式详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4635) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `GET /v1/c2c/payment/get`
 * @更新时间 `2023-09-06 13:39:52`
 */
export interface YapiGetV1C2cPaymentGetApiRequest {
  /**
   * 支付方式ID
   */
  id: string
}

/**
 * 接口 [获取收付方式详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4635) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `GET /v1/c2c/payment/get`
 * @更新时间 `2023-09-06 13:39:52`
 */
export interface YapiGetV1C2cPaymentGetApiResponse {
  code?: number
  data?: YapiGetV1C2CPaymentGetData
  message?: string
}
export interface YapiGetV1C2CPaymentGetData {
  payment: YapiGetV1C2CPaymentGetPaymentData
}
/**
 * 收款方式数据
 */
export interface YapiGetV1C2CPaymentGetPaymentData {
  /**
   * 收款方式唯一ID
   */
  id: string
  /**
   * BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentTypeCd: string
  /**
   *  姓名
   */
  name: string
  /**
   *  账号
   */
  account: string
  /**
   * 开户行
   */
  bankOfDeposit: string
  /**
   * 二维码(图片资源地址)
   */
  qrCodeAddr: string
  /**
   * 是否启用，1，启用，0，未启用
   */
  enabled: number
  /**
   * 付款详情
   */
  paymentDetails: string
  /**
   * 银行支行
   */
  bankBranch: string
  /**
   * 交易区ID,多个以逗号分割
   */
  legalCurrencyId: string
  /**
   * 该交易方式在交易区是否可用数据
   */
  availableData: YapiGetV1C2CPaymentGetListAvailableDataPaymentData[]
}
export interface YapiGetV1C2CPaymentGetListAvailableDataPaymentData {
  /**
   * 交易区ID
   */
  areaId: string
  /**
   * true，可用，false，不可用
   */
  available: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取收付方式详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4635)
// **/
// export const getV1C2cPaymentGetApiRequest: MarkcoinRequest<
//   YapiGetV1C2cPaymentGetApiRequest,
//   YapiGetV1C2cPaymentGetApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/payment/get",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取收付方式详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6714) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `GET /v1/c2c/payment/get`
 * @更新时间 `2023-06-08 16:47:13`
 */
export interface YapiGetV1C2cPaymentGetApiRequest {
  /**
   * 支付方式ID
   */
  id: string
}

/**
 * 接口 [获取收付方式详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6714) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `GET /v1/c2c/payment/get`
 * @更新时间 `2023-06-08 16:47:13`
 */
export interface YapiGetV1C2cPaymentGetApiResponse {
  code?: number
  data?: YapiGetV1C2CPaymentGetData
  message?: string
}
export interface YapiGetV1C2CPaymentGetData {
  payment: YapiGetV1C2CPaymentGetPaymentData
}
/**
 * 收款方式数据
 */
export interface YapiGetV1C2CPaymentGetPaymentData {
  /**
   * 收款方式唯一ID
   */
  id: string
  /**
   * BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentTypeCd: string
  /**
   *  姓名
   */
  name: string
  /**
   *  账号
   */
  account: string
  /**
   * 开户行
   */
  bankOfDeposit: string
  /**
   * 二维码(图片资源地址)
   */
  qrCodeAddr: string
  /**
   * 是否启用，1，启用，0，未启用
   */
  enabled: number
  /**
   * 交易区ID,多个以逗号分割
   */
  legalCurrencyId: string
  /**
   * 该交易方式在交易区是否可用数据
   */
  availableData: YapiGetV1C2CPaymentGetListAvailableDataPaymentData[]
}
export interface YapiGetV1C2CPaymentGetListAvailableDataPaymentData {
  /**
   * 交易区ID
   */
  areaId: string
  /**
   * true，可用，false，不可用
   */
  available: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取收付方式详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6714)
// **/
// export const getV1C2cPaymentGetApiRequest: MarkcoinRequest<
//   YapiGetV1C2cPaymentGetApiRequest,
//   YapiGetV1C2cPaymentGetApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/payment/get",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
