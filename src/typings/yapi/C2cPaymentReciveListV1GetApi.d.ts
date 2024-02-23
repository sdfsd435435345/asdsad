/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [收款方式列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5300) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `GET /v1/c2c/payment/reciveList`
 * @更新时间 `2023-04-25 10:37:48`
 */
export interface YapiGetV1C2cPaymentReciveListApiRequest {
  /**
   * 交易区ID,多个以逗号分隔
   */
  legalCurrencyId?: string
  /**
   * BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentType?: string
}

/**
 * 接口 [收款方式列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5300) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `GET /v1/c2c/payment/reciveList`
 * @更新时间 `2023-04-25 10:37:48`
 */
export interface YapiGetV1C2cPaymentReciveListApiResponse {
  /**
   * 200成交，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CPaymentReciveData
}
/**
 * 收款列表
 */
export interface YapiGetV1C2CPaymentReciveData {
  /**
   * 收款列表
   */
  recivePaymentList: YapiGetV1C2CPaymentReciveListRecivePaymentListData[]
}
export interface YapiGetV1C2CPaymentReciveListRecivePaymentListData {
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
   * 排序
   */
  sort: number
  /**
   * 该交易方式在交易区是否可用数据
   */
  availableData: YapiGetV1C2CPaymentReciveListAvailableDataListRecivePaymentListData[]
}
export interface YapiGetV1C2CPaymentReciveListAvailableDataListRecivePaymentListData {
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
// * [收款方式列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5300)
// **/
// export const getV1C2cPaymentReciveListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cPaymentReciveListApiRequest,
//   YapiGetV1C2cPaymentReciveListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/payment/reciveList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [收款方式列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6669) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `GET /v1/c2c/payment/reciveList`
 * @更新时间 `2023-06-08 16:47:10`
 */
export interface YapiGetV1C2cPaymentReciveListApiRequest {
  /**
   * 交易区ID,多个以逗号分隔
   */
  legalCurrencyId?: string
  /**
   * BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentType?: string
}

/**
 * 接口 [收款方式列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6669) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `GET /v1/c2c/payment/reciveList`
 * @更新时间 `2023-06-08 16:47:10`
 */
export interface YapiGetV1C2cPaymentReciveListApiResponse {
  /**
   * 200成交，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CPaymentReciveData
}
/**
 * 收款列表
 */
export interface YapiGetV1C2CPaymentReciveData {
  /**
   * 收款列表
   */
  recivePaymentList: YapiGetV1C2CPaymentReciveListRecivePaymentListData[]
}
export interface YapiGetV1C2CPaymentReciveListRecivePaymentListData {
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
   * 排序
   */
  sort: number
  /**
   * 该交易方式在交易区是否可用数据
   */
  availableData: YapiGetV1C2CPaymentReciveListAvailableDataListRecivePaymentListData[]
}
export interface YapiGetV1C2CPaymentReciveListAvailableDataListRecivePaymentListData {
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
// * [收款方式列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6669)
// **/
// export const getV1C2cPaymentReciveListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cPaymentReciveListApiRequest,
//   YapiGetV1C2cPaymentReciveListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/payment/reciveList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
