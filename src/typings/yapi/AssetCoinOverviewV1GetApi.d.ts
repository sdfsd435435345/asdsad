/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-币种资产总览（废弃）↗](https://yapi.nbttfc365.com/project/77/interface/api/8569) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/asset/coin/overview`
 * @更新时间 `2023-06-12 14:43:53`
 */
export interface YapiGetV1AssetCoinOverviewApiRequest {}

/**
 * 接口 [资产-币种资产总览（废弃）↗](https://yapi.nbttfc365.com/project/77/interface/api/8569) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/asset/coin/overview`
 * @更新时间 `2023-06-12 14:43:53`
 */
export interface YapiGetV1AssetCoinOverviewApiResponse {
  data?: YapiGetV1AssetCoinOverviewData
  message?: string
  code?: number
}
export interface YapiGetV1AssetCoinOverviewData {
  /**
   * 冻结资产
   */
  lockAmount?: string
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 总资产
   */
  totalAmount?: string
  /**
   * 币种符号
   */
  symbol?: string
  /**
   * 流动资产
   */
  availableAmount?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币种资产总览（废弃）↗](https://yapi.nbttfc365.com/project/77/interface/api/8569)
// **/
// export const getV1AssetCoinOverviewApiRequest: MarkcoinRequest<
//   YapiGetV1AssetCoinOverviewApiRequest,
//   YapiGetV1AssetCoinOverviewApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/asset/coin/overview",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [资产-币种资产总览↗](https://yapi.nbttfc365.com/project/44/interface/api/5534) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/asset/coin/overview`
 * @更新时间 `2023-04-28 11:10:27`
 */
export interface YapiGetV1AssetCoinOverviewApiRequest {}

/**
 * 接口 [资产-币种资产总览↗](https://yapi.nbttfc365.com/project/44/interface/api/5534) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/asset/coin/overview`
 * @更新时间 `2023-04-28 11:10:27`
 */
export interface YapiGetV1AssetCoinOverviewApiResponse {
  data?: YapiGetV1AssetCoinOverviewData
  message?: string
  code?: number
}
export interface YapiGetV1AssetCoinOverviewData {
  /**
   * 冻结资产
   */
  lockAmount?: string
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 总资产
   */
  totalAmount?: string
  /**
   * 币种符号
   */
  symbol?: string
  /**
   * 流动资产
   */
  availableAmount?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币种资产总览↗](https://yapi.nbttfc365.com/project/44/interface/api/5534)
// **/
// export const getV1AssetCoinOverviewApiRequest: MarkcoinRequest<
//   YapiGetV1AssetCoinOverviewApiRequest,
//   YapiGetV1AssetCoinOverviewApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/asset/coin/overview",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
