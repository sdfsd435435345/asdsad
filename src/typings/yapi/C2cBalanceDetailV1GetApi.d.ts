/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取自己单个币的金额↗](https://yapi.nbttfc365.com/project/73/interface/api/5499) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/balance/detail`
 * @更新时间 `2023-03-19 09:56:35`
 */
export interface YapiGetV1C2cBalanceDetailApiRequest {
  /**
   * 币种ID
   */
  coinId: string
}

/**
 * 接口 [获取自己单个币的金额↗](https://yapi.nbttfc365.com/project/73/interface/api/5499) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/balance/detail`
 * @更新时间 `2023-03-19 09:56:35`
 */
export interface YapiGetV1C2cBalanceDetailApiResponse {
  code?: number
  data?: YapiGetV1C2CBalanceDetailData
  message?: string
}
export interface YapiGetV1C2CBalanceDetailData {
  /**
   * 币种余额
   */
  balance?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取自己单个币的金额↗](https://yapi.nbttfc365.com/project/73/interface/api/5499)
// **/
// export const getV1C2cBalanceDetailApiRequest: MarkcoinRequest<
//   YapiGetV1C2cBalanceDetailApiRequest,
//   YapiGetV1C2cBalanceDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/balance/detail",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取自己单个币的金额↗](https://yapi.nbttfc365.com/project/77/interface/api/6394) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/balance/detail`
 * @更新时间 `2023-06-08 16:46:51`
 */
export interface YapiGetV1C2cBalanceDetailApiRequest {
  /**
   * 币种ID
   */
  coinId: string
}

/**
 * 接口 [获取自己单个币的金额↗](https://yapi.nbttfc365.com/project/77/interface/api/6394) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/balance/detail`
 * @更新时间 `2023-06-08 16:46:51`
 */
export interface YapiGetV1C2cBalanceDetailApiResponse {
  code?: number
  data?: YapiGetV1C2CBalanceDetailData
  message?: string
}
export interface YapiGetV1C2CBalanceDetailData {
  /**
   * 币种余额
   */
  balance?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取自己单个币的金额↗](https://yapi.nbttfc365.com/project/77/interface/api/6394)
// **/
// export const getV1C2cBalanceDetailApiRequest: MarkcoinRequest<
//   YapiGetV1C2cBalanceDetailApiRequest,
//   YapiGetV1C2cBalanceDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/balance/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
