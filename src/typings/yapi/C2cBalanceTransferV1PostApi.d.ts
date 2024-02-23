/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资金划转↗](https://yapi.nbttfc365.com/project/73/interface/api/4583) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /v1/c2c/balance/transfer`
 * @更新时间 `2023-03-03 16:18:49`
 */
export interface YapiPostV1C2cBalanceTransferApiRequest {
  /**
   * 币种id
   */
  coinId: string
  /**
   * 1.划转至交易账户 2.划转至广告账户
   */
  typeCd: number
  /**
   * 划转金额
   */
  amount: string
}

/**
 * 接口 [资金划转↗](https://yapi.nbttfc365.com/project/73/interface/api/4583) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /v1/c2c/balance/transfer`
 * @更新时间 `2023-03-03 16:18:49`
 */
export interface YapiPostV1C2cBalanceTransferApiResponse {
  code?: number
  message?: string
  /**
   * success=成功
   */
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资金划转↗](https://yapi.nbttfc365.com/project/73/interface/api/4583)
// **/
// export const postV1C2cBalanceTransferApiRequest: MarkcoinRequest<
//   YapiPostV1C2cBalanceTransferApiRequest,
//   YapiPostV1C2cBalanceTransferApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/balance/transfer",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [资金划转↗](https://yapi.nbttfc365.com/project/77/interface/api/6609) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `POST /v1/c2c/balance/transfer`
 * @更新时间 `2023-06-08 16:47:06`
 */
export interface YapiPostV1C2cBalanceTransferApiRequest {
  /**
   * 币种id
   */
  coinId: string
  /**
   * 1.划转至交易账户 2.划转至广告账户
   */
  typeCd: number
  /**
   * 划转金额
   */
  amount: string
}

/**
 * 接口 [资金划转↗](https://yapi.nbttfc365.com/project/77/interface/api/6609) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `POST /v1/c2c/balance/transfer`
 * @更新时间 `2023-06-08 16:47:06`
 */
export interface YapiPostV1C2cBalanceTransferApiResponse {
  code?: number
  message?: string
  /**
   * success=成功
   */
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资金划转↗](https://yapi.nbttfc365.com/project/77/interface/api/6609)
// **/
// export const postV1C2cBalanceTransferApiRequest: MarkcoinRequest<
//   YapiPostV1C2cBalanceTransferApiRequest,
//   YapiPostV1C2cBalanceTransferApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/balance/transfer",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
