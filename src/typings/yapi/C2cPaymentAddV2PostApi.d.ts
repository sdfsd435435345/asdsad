/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新增支付方式（动态）↗](https://yapi.nbttfc365.com/project/44/interface/api/15154) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v2/c2c/payment/add`
 * @更新时间 `2023-09-06 13:52:03`
 */
export interface YapiPostV2C2cPaymentAddApiRequest {
  /**
   * 交易区ID(多个逗号隔开)
   */
  'legalCurrencyId': string
  /**
   * 支付类型(数据字典：payment_type_cd)
   */
  'paymentTypeCd': string
  /**
   * 数据字典c2c_payment_support_items里面的code
   */
  '其他字段（参考）': string
}

/**
 * 接口 [新增支付方式（动态）↗](https://yapi.nbttfc365.com/project/44/interface/api/15154) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v2/c2c/payment/add`
 * @更新时间 `2023-09-06 13:52:03`
 */
export interface YapiPostV2C2cPaymentAddApiResponse {
  code?: number
  data?: YapiPostV2C2CPaymentAddData
  message?: string
}
export interface YapiPostV2C2CPaymentAddData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [新增支付方式（动态）↗](https://yapi.nbttfc365.com/project/44/interface/api/15154)
// **/
// export const postV2C2cPaymentAddApiRequest: MarkcoinRequest<
//   YapiPostV2C2cPaymentAddApiRequest,
//   YapiPostV2C2cPaymentAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v2/c2c/payment/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
