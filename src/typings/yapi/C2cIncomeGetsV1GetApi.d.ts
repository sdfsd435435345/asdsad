/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取收付方式列表(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/4631) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `GET /v1/c2c/income/gets`
 * @更新时间 `2023-03-08 17:07:51`
 */
export interface YapiGetV1C2cIncomeGetsApiRequest {
  /**
   * 法币币种Id1
   */
  legalCurrencyId?: string
  /**
   * 支付类型，BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentType?: string
}

/**
 * 接口 [获取收付方式列表(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/4631) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `GET /v1/c2c/income/gets`
 * @更新时间 `2023-03-08 17:07:51`
 */
export interface YapiGetV1C2cIncomeGetsApiResponse {
  code?: number
  data?: YapiGetV1C2CIncomeGetsListData[]
  message?: string
}
export interface YapiGetV1C2CIncomeGetsListData {
  /**
   * 用户ID
   */
  uid: number
  /**
   * 法币IDs(多个逗号隔开)
   */
  legalCurrencyId: number
  /**
   * 二维码(图片资源地址)
   */
  qrCodeAddr?: string
  /**
   * B端平台ID
   */
  businessId: number
  /**
   * 姓名
   */
  name: string
  /**
   * 支付类型(数据字典：payment_type_cd)
   */
  paymentTypeCd: string
  /**
   * 支付方式ID
   */
  id: number
  /**
   * 账号
   */
  account?: string
  /**
   * 开户行
   */
  bankOfDeposit?: string
  /**
   * 收付类型(IN收款 OUT付款)
   */
  type: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取收付方式列表(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/4631)
// **/
// export const getV1C2cIncomeGetsApiRequest: MarkcoinRequest<
//   YapiGetV1C2cIncomeGetsApiRequest,
//   YapiGetV1C2cIncomeGetsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/income/gets",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取收付方式列表(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/6704) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `GET /v1/c2c/income/gets`
 * @更新时间 `2023-06-08 16:47:12`
 */
export interface YapiGetV1C2cIncomeGetsApiRequest {
  /**
   * 法币币种Id1
   */
  legalCurrencyId?: string
  /**
   * 支付类型，BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentType?: string
}

/**
 * 接口 [获取收付方式列表(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/6704) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `GET /v1/c2c/income/gets`
 * @更新时间 `2023-06-08 16:47:12`
 */
export interface YapiGetV1C2cIncomeGetsApiResponse {
  code?: number
  data?: YapiGetV1C2CIncomeGetsListData[]
  message?: string
}
export interface YapiGetV1C2CIncomeGetsListData {
  /**
   * 用户ID
   */
  uid: number
  /**
   * 法币IDs(多个逗号隔开)
   */
  legalCurrencyId: number
  /**
   * 二维码(图片资源地址)
   */
  qrCodeAddr?: string
  /**
   * B端平台ID
   */
  businessId: number
  /**
   * 姓名
   */
  name: string
  /**
   * 支付类型(数据字典：payment_type_cd)
   */
  paymentTypeCd: string
  /**
   * 支付方式ID
   */
  id: number
  /**
   * 账号
   */
  account?: string
  /**
   * 开户行
   */
  bankOfDeposit?: string
  /**
   * 收付类型(IN收款 OUT付款)
   */
  type: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取收付方式列表(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/6704)
// **/
// export const getV1C2cIncomeGetsApiRequest: MarkcoinRequest<
//   YapiGetV1C2cIncomeGetsApiRequest,
//   YapiGetV1C2cIncomeGetsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/income/gets",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
