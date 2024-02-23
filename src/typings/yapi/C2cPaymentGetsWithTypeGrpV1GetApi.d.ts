/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取收付方式列表(发布广告时)↗](https://yapi.nbttfc365.com/project/44/interface/api/5174) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `GET /v1/c2c/payment/getsWithTypeGrp`
 * @更新时间 `2023-03-07 19:35:22`
 */
export interface YapiGetV1C2cPaymentGetsWithTypeGrpApiRequest {}

/**
 * 接口 [获取收付方式列表(发布广告时)↗](https://yapi.nbttfc365.com/project/44/interface/api/5174) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `GET /v1/c2c/payment/getsWithTypeGrp`
 * @更新时间 `2023-03-07 19:35:22`
 */
export interface YapiGetV1C2cPaymentGetsWithTypeGrpApiResponse {
  code?: number
  data?: YapiGetV1C2CPaymentGetsWithTypeGrpListData[]
  message?: string
}
export interface YapiGetV1C2CPaymentGetsWithTypeGrpListData {
  /**
   * 收付类型
   */
  type: string
  /**
   * 数据列表
   */
  list: YapiGetV1C2CPaymentGetsWithTypeGrpListListData[]
}
export interface YapiGetV1C2CPaymentGetsWithTypeGrpListListData {
  /**
   * 用户ID
   */
  uid: string
  /**
   * 法币ID
   */
  legalCurrencyId: string
  /**
   * 二维码
   */
  qrCodeAddr?: string
  /**
   * B端商家ID
   */
  businessId: null
  /**
   * 姓名
   */
  name: string
  /**
   * 收付类型
   */
  paymentTypeCd: string
  /**
   * 收付方式ID
   */
  id: string
  /**
   * 账号
   */
  account: string
  /**
   * 开户行
   */
  bankOfDeposit: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取收付方式列表(发布广告时)↗](https://yapi.nbttfc365.com/project/44/interface/api/5174)
// **/
// export const getV1C2cPaymentGetsWithTypeGrpApiRequest: MarkcoinRequest<
//   YapiGetV1C2cPaymentGetsWithTypeGrpApiRequest,
//   YapiGetV1C2cPaymentGetsWithTypeGrpApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/payment/getsWithTypeGrp",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取收付方式列表(发布广告时)↗](https://yapi.nbttfc365.com/project/77/interface/api/6694) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `GET /v1/c2c/payment/getsWithTypeGrp`
 * @更新时间 `2023-06-08 16:47:12`
 */
export interface YapiGetV1C2cPaymentGetsWithTypeGrpApiRequest {}

/**
 * 接口 [获取收付方式列表(发布广告时)↗](https://yapi.nbttfc365.com/project/77/interface/api/6694) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `GET /v1/c2c/payment/getsWithTypeGrp`
 * @更新时间 `2023-06-08 16:47:12`
 */
export interface YapiGetV1C2cPaymentGetsWithTypeGrpApiResponse {
  code?: number
  data?: YapiGetV1C2CPaymentGetsWithTypeGrpListData[]
  message?: string
}
export interface YapiGetV1C2CPaymentGetsWithTypeGrpListData {
  /**
   * 收付类型
   */
  type: string
  /**
   * 数据列表
   */
  list: YapiGetV1C2CPaymentGetsWithTypeGrpListListData[]
}
export interface YapiGetV1C2CPaymentGetsWithTypeGrpListListData {
  /**
   * 用户ID
   */
  uid: string
  /**
   * 法币ID
   */
  legalCurrencyId: string
  /**
   * 二维码
   */
  qrCodeAddr?: string
  /**
   * B端商家ID
   */
  businessId: null
  /**
   * 姓名
   */
  name: string
  /**
   * 收付类型
   */
  paymentTypeCd: string
  /**
   * 收付方式ID
   */
  id: string
  /**
   * 账号
   */
  account: string
  /**
   * 开户行
   */
  bankOfDeposit: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取收付方式列表(发布广告时)↗](https://yapi.nbttfc365.com/project/77/interface/api/6694)
// **/
// export const getV1C2cPaymentGetsWithTypeGrpApiRequest: MarkcoinRequest<
//   YapiGetV1C2cPaymentGetsWithTypeGrpApiRequest,
//   YapiGetV1C2cPaymentGetsWithTypeGrpApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/payment/getsWithTypeGrp",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
