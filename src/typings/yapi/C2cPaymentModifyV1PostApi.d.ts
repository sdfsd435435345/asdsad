/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [修改收款方式↗](https://yapi.nbttfc365.com/project/44/interface/api/4639) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/modify`
 * @更新时间 `2023-09-01 11:08:04`
 */
export interface YapiPostV1C2cPaymentModifyApiRequest {
  /**
   * 支付方式ID
   */
  id: string
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
   * 交易区ID，多个已逗号分隔
   */
  legalCurrencyId: string
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
 * 接口 [修改收款方式↗](https://yapi.nbttfc365.com/project/44/interface/api/4639) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/modify`
 * @更新时间 `2023-09-01 11:08:04`
 */
export interface YapiPostV1C2cPaymentModifyApiResponse {
  code?: number
  data?: YapiPostV1C2CPaymentModifyData
  message?: string
}
export interface YapiPostV1C2CPaymentModifyData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改收款方式↗](https://yapi.nbttfc365.com/project/44/interface/api/4639)
// **/
// export const postV1C2cPaymentModifyApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentModifyApiRequest,
//   YapiPostV1C2cPaymentModifyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/modify",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [修改收款方式↗](https://yapi.nbttfc365.com/project/77/interface/api/6709) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/modify`
 * @更新时间 `2023-06-08 16:47:13`
 */
export interface YapiPostV1C2cPaymentModifyApiRequest {
  /**
   * 支付方式ID
   */
  id: string
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
   * 交易区ID，多个已逗号分隔
   */
  legalCurrencyId: string
}

/**
 * 接口 [修改收款方式↗](https://yapi.nbttfc365.com/project/77/interface/api/6709) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/modify`
 * @更新时间 `2023-06-08 16:47:13`
 */
export interface YapiPostV1C2cPaymentModifyApiResponse {
  code?: number
  data?: YapiPostV1C2CPaymentModifyData
  message?: string
}
export interface YapiPostV1C2CPaymentModifyData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改收款方式↗](https://yapi.nbttfc365.com/project/77/interface/api/6709)
// **/
// export const postV1C2cPaymentModifyApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentModifyApiRequest,
//   YapiPostV1C2cPaymentModifyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/modify",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
