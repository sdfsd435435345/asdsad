/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [增加收款方式↗](https://yapi.nbttfc365.com/project/44/interface/api/4627) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/add`
 * @更新时间 `2023-09-05 18:34:39`
 */
export interface YapiPostV1C2cPaymentAddApiRequest {
  /**
   * 交易区ID(多个逗号隔开)
   */
  legalCurrencyId: string
  /**
   * 支付类型(数据字典：payment_type_cd)
   */
  paymentTypeCd: string
  /**
   * 姓名
   */
  name: string
  /**
   * 账号
   */
  account: string
  /**
   * 开户行
   */
  bankOfDeposit?: string
  /**
   * 二维码(图片资源地址)
   */
  qrCodeAddr?: string
  /**
   * 付款详情
   */
  paymentDetails?: string
  /**
   * 银行支行
   */
  bankBranch?: string
}

/**
 * 接口 [增加收款方式↗](https://yapi.nbttfc365.com/project/44/interface/api/4627) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/add`
 * @更新时间 `2023-09-05 18:34:39`
 */
export interface YapiPostV1C2cPaymentAddApiResponse {
  code?: number
  data?: YapiPostV1C2CPaymentAddData
  message?: string
}
export interface YapiPostV1C2CPaymentAddData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [增加收款方式↗](https://yapi.nbttfc365.com/project/44/interface/api/4627)
// **/
// export const postV1C2cPaymentAddApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentAddApiRequest,
//   YapiPostV1C2cPaymentAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/add",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [增加收款方式↗](https://yapi.nbttfc365.com/project/77/interface/api/6699) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/add`
 * @更新时间 `2023-06-08 16:47:12`
 */
export interface YapiPostV1C2cPaymentAddApiRequest {
  /**
   * 交易区ID(多个逗号隔开)
   */
  legalCurrencyId: string
  /**
   * 支付类型(数据字典：payment_type_cd)
   */
  paymentTypeCd: string
  /**
   * 姓名
   */
  name: string
  /**
   * 账号
   */
  account: string
  /**
   * 开户行
   */
  bankOfDeposit?: string
  /**
   * 二维码(图片资源地址)
   */
  qrCodeAddr?: string
  /**
   * 收付类型(IN收款 OUT付款)
   */
  type: string
}

/**
 * 接口 [增加收款方式↗](https://yapi.nbttfc365.com/project/77/interface/api/6699) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/add`
 * @更新时间 `2023-06-08 16:47:12`
 */
export interface YapiPostV1C2cPaymentAddApiResponse {
  code?: number
  data?: YapiPostV1C2CPaymentAddData
  message?: string
}
export interface YapiPostV1C2CPaymentAddData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [增加收款方式↗](https://yapi.nbttfc365.com/project/77/interface/api/6699)
// **/
// export const postV1C2cPaymentAddApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentAddApiRequest,
//   YapiPostV1C2cPaymentAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
