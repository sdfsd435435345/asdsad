/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [单个币种资产详情↗](https://yapi.nbttfc365.com/project/73/interface/api/10359) 的 **请求类型**
 *
 * @分类 [FastPay↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_744)
 * @请求头 `GET /v1/c2c/balance/fastPay/detail`
 * @更新时间 `2023-06-21 20:26:01`
 */
export interface YapiGetV1C2cBalanceFastPayDetailApiRequest {
  coinId: string
}

/**
 * 接口 [单个币种资产详情↗](https://yapi.nbttfc365.com/project/73/interface/api/10359) 的 **返回类型**
 *
 * @分类 [FastPay↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_744)
 * @请求头 `GET /v1/c2c/balance/fastPay/detail`
 * @更新时间 `2023-06-21 20:26:01`
 */
export interface YapiGetV1C2cBalanceFastPayDetailApiResponse {
  code?: number
  data?: YapiGetV1C2CBalanceFastPayDetailData
  message?: string
}
export interface YapiGetV1C2CBalanceFastPayDetailData {
  /**
   * 总资产数
   */
  totalAmount?: string
  symbol?: string
  coinId?: string
  /**
   * 可用数量
   */
  availableAmount?: string
  /**
   * 冻结资产
   */
  lockAmount?: string
  appLogo?: string
  webLogo?: string
  coinFullName?: string
  /**
   * 仓位资产
   */
  positionAmount?: string
  coinName?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [单个币种资产详情↗](https://yapi.nbttfc365.com/project/73/interface/api/10359)
// **/
// export const getV1C2cBalanceFastPayDetailApiRequest: MarkcoinRequest<
//   YapiGetV1C2cBalanceFastPayDetailApiRequest,
//   YapiGetV1C2cBalanceFastPayDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/balance/fastPay/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
