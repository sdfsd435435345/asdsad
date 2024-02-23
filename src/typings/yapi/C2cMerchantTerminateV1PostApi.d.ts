/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [申请解除商家↗](https://yapi.nbttfc365.com/project/73/interface/api/4599) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `POST /v1/c2c/merchant/terminate`
 * @更新时间 `2023-03-03 16:19:35`
 */
export interface YapiPostV1C2cMerchantTerminateApiRequest {
  /**
   * 申请解除原因
   */
  reason: string
}

/**
 * 接口 [申请解除商家↗](https://yapi.nbttfc365.com/project/73/interface/api/4599) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `POST /v1/c2c/merchant/terminate`
 * @更新时间 `2023-03-03 16:19:35`
 */
export interface YapiPostV1C2cMerchantTerminateApiResponse {
  data?: YapiPostV1C2CMerchantTerminateData
  message?: string
  code?: number
}
export interface YapiPostV1C2CMerchantTerminateData {
  isSucess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申请解除商家↗](https://yapi.nbttfc365.com/project/73/interface/api/4599)
// **/
// export const postV1C2cMerchantTerminateApiRequest: MarkcoinRequest<
//   YapiPostV1C2cMerchantTerminateApiRequest,
//   YapiPostV1C2cMerchantTerminateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/merchant/terminate",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [申请解除商家↗](https://yapi.nbttfc365.com/project/77/interface/api/6634) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `POST /v1/c2c/merchant/terminate`
 * @更新时间 `2023-06-08 16:47:08`
 */
export interface YapiPostV1C2cMerchantTerminateApiRequest {
  /**
   * 申请解除原因
   */
  reason: string
}

/**
 * 接口 [申请解除商家↗](https://yapi.nbttfc365.com/project/77/interface/api/6634) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `POST /v1/c2c/merchant/terminate`
 * @更新时间 `2023-06-08 16:47:08`
 */
export interface YapiPostV1C2cMerchantTerminateApiResponse {
  data?: YapiPostV1C2CMerchantTerminateData
  message?: string
  code?: number
}
export interface YapiPostV1C2CMerchantTerminateData {
  isSucess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申请解除商家↗](https://yapi.nbttfc365.com/project/77/interface/api/6634)
// **/
// export const postV1C2cMerchantTerminateApiRequest: MarkcoinRequest<
//   YapiPostV1C2cMerchantTerminateApiRequest,
//   YapiPostV1C2cMerchantTerminateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/merchant/terminate",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
