/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [确认买币卖币最优价格是否存在↗](https://yapi.nbttfc365.com/project/73/interface/api/5354) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `GET /v1/c2c/quickTransaction/hasProgressing`
 * @更新时间 `2023-03-09 10:23:02`
 */
export interface YapiGetV1C2cQuickTransactionHasProgressingApiRequest {
  /**
   * 广告id
   */
  advertId: string
}

/**
 * 接口 [确认买币卖币最优价格是否存在↗](https://yapi.nbttfc365.com/project/73/interface/api/5354) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `GET /v1/c2c/quickTransaction/hasProgressing`
 * @更新时间 `2023-03-09 10:23:02`
 */
export interface YapiGetV1C2cQuickTransactionHasProgressingApiResponse {
  code: number
  data: boolean
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [确认买币卖币最优价格是否存在↗](https://yapi.nbttfc365.com/project/73/interface/api/5354)
// **/
// export const getV1C2cQuickTransactionHasProgressingApiRequest: MarkcoinRequest<
//   YapiGetV1C2cQuickTransactionHasProgressingApiRequest,
//   YapiGetV1C2cQuickTransactionHasProgressingApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/quickTransaction/hasProgressing",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [确认买币卖币最优价格是否存在↗](https://yapi.nbttfc365.com/project/77/interface/api/6774) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `GET /v1/c2c/quickTransaction/hasProgressing`
 * @更新时间 `2023-06-08 16:47:18`
 */
export interface YapiGetV1C2cQuickTransactionHasProgressingApiRequest {
  /**
   * 广告id
   */
  advertId: string
}

/**
 * 接口 [确认买币卖币最优价格是否存在↗](https://yapi.nbttfc365.com/project/77/interface/api/6774) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `GET /v1/c2c/quickTransaction/hasProgressing`
 * @更新时间 `2023-06-08 16:47:18`
 */
export interface YapiGetV1C2cQuickTransactionHasProgressingApiResponse {
  code: number
  data: boolean
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [确认买币卖币最优价格是否存在↗](https://yapi.nbttfc365.com/project/77/interface/api/6774)
// **/
// export const getV1C2cQuickTransactionHasProgressingApiRequest: MarkcoinRequest<
//   YapiGetV1C2cQuickTransactionHasProgressingApiRequest,
//   YapiGetV1C2cQuickTransactionHasProgressingApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/quickTransaction/hasProgressing",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
