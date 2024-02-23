/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [收款方式开关↗](https://yapi.nbttfc365.com/project/44/interface/api/5309) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/recive/enabled`
 * @更新时间 `2023-03-09 14:49:54`
 */
export interface YapiPostV1C2cPaymentReciveEnabledApiRequest {
  /**
   * 收款方式唯一ID
   */
  id: string
  /**
   * 开关，1，开启，0，关闭
   */
  enabled: number
}

/**
 * 接口 [收款方式开关↗](https://yapi.nbttfc365.com/project/44/interface/api/5309) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/recive/enabled`
 * @更新时间 `2023-03-09 14:49:54`
 */
export interface YapiPostV1C2cPaymentReciveEnabledApiResponse {
  /**
   * 200成功，其他失败
   */
  code: string
  /**
   * 描述信息
   */
  message: string
  /**
   * true成功，false,失败
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [收款方式开关↗](https://yapi.nbttfc365.com/project/44/interface/api/5309)
// **/
// export const postV1C2cPaymentReciveEnabledApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentReciveEnabledApiRequest,
//   YapiPostV1C2cPaymentReciveEnabledApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/recive/enabled",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [收款方式开关↗](https://yapi.nbttfc365.com/project/77/interface/api/6679) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/recive/enabled`
 * @更新时间 `2023-06-08 16:47:11`
 */
export interface YapiPostV1C2cPaymentReciveEnabledApiRequest {
  /**
   * 收款方式唯一ID
   */
  id: string
  /**
   * 开关，1，开启，0，关闭
   */
  enabled: number
}

/**
 * 接口 [收款方式开关↗](https://yapi.nbttfc365.com/project/77/interface/api/6679) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/recive/enabled`
 * @更新时间 `2023-06-08 16:47:11`
 */
export interface YapiPostV1C2cPaymentReciveEnabledApiResponse {
  /**
   * 200成功，其他失败
   */
  code: string
  /**
   * 描述信息
   */
  message: string
  /**
   * true成功，false,失败
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [收款方式开关↗](https://yapi.nbttfc365.com/project/77/interface/api/6679)
// **/
// export const postV1C2cPaymentReciveEnabledApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentReciveEnabledApiRequest,
//   YapiPostV1C2cPaymentReciveEnabledApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/recive/enabled",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
