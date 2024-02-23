/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除收款方式↗](https://yapi.nbttfc365.com/project/44/interface/api/4643) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/remove`
 * @更新时间 `2023-03-07 11:23:23`
 */
export interface YapiPostV1C2cPaymentRemoveApiRequest {
  /**
   * 支付方式ID
   */
  id: string
}

/**
 * 接口 [删除收款方式↗](https://yapi.nbttfc365.com/project/44/interface/api/4643) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/remove`
 * @更新时间 `2023-03-07 11:23:23`
 */
export interface YapiPostV1C2cPaymentRemoveApiResponse {
  code?: number
  data?: YapiPostV1C2CPaymentRemoveData
  message?: string
}
export interface YapiPostV1C2CPaymentRemoveData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除收款方式↗](https://yapi.nbttfc365.com/project/44/interface/api/4643)
// **/
// export const postV1C2cPaymentRemoveApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentRemoveApiRequest,
//   YapiPostV1C2cPaymentRemoveApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/remove",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [删除收款方式↗](https://yapi.nbttfc365.com/project/77/interface/api/6719) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/remove`
 * @更新时间 `2023-06-08 16:47:14`
 */
export interface YapiPostV1C2cPaymentRemoveApiRequest {
  /**
   * 支付方式ID
   */
  id: string
}

/**
 * 接口 [删除收款方式↗](https://yapi.nbttfc365.com/project/77/interface/api/6719) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/remove`
 * @更新时间 `2023-06-08 16:47:14`
 */
export interface YapiPostV1C2cPaymentRemoveApiResponse {
  code?: number
  data?: YapiPostV1C2CPaymentRemoveData
  message?: string
}
export interface YapiPostV1C2CPaymentRemoveData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除收款方式↗](https://yapi.nbttfc365.com/project/77/interface/api/6719)
// **/
// export const postV1C2cPaymentRemoveApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentRemoveApiRequest,
//   YapiPostV1C2cPaymentRemoveApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/remove",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
