/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [修改支付方式接口(v2升级，动态参数)↗](https://yapi.nbttfc365.com/project/44/interface/api/15159) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v2/c2c/payment/modify`
 * @更新时间 `2023-09-07 09:00:34`
 */
export interface YapiPostV2C2cPaymentModifyApiRequest {
  /**
   * 支付方式id
   */
  id: string
  /**
   * 支付类型(数据字典：payment_type_cd)
   */
  paymentTypeCd: string
  /**
   * 交易区ID，多个已逗号分隔
   */
  legalCurrencyId: string
  /**
   * c2c_payment_support_items里面的code
   */
  其他字段: string
}

/**
 * 接口 [修改支付方式接口(v2升级，动态参数)↗](https://yapi.nbttfc365.com/project/44/interface/api/15159) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v2/c2c/payment/modify`
 * @更新时间 `2023-09-07 09:00:34`
 */
export interface YapiPostV2C2cPaymentModifyApiResponse {
  data?: YapiPostV2C2CPaymentModifyData
  message?: string
  code?: number
}
export interface YapiPostV2C2CPaymentModifyData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改支付方式接口(v2升级，动态参数)↗](https://yapi.nbttfc365.com/project/44/interface/api/15159)
// **/
// export const postV2C2cPaymentModifyApiRequest: MarkcoinRequest<
//   YapiPostV2C2cPaymentModifyApiRequest,
//   YapiPostV2C2cPaymentModifyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v2/c2c/payment/modify",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
