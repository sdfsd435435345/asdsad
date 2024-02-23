/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-币币-根据主币获取子币列表(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/8554) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/coin/querySubCoinList`
 * @更新时间 `2023-06-12 14:42:21`
 */
export interface YapiGetV1CoinQuerySubCoinListApiRequest {
  coinId: string
}

/**
 * 接口 [资产-币币-根据主币获取子币列表(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/8554) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/coin/querySubCoinList`
 * @更新时间 `2023-06-12 14:42:21`
 */
export interface YapiGetV1CoinQuerySubCoinListApiResponse {
  code?: number
  data?: YapiGetV1CoinQuerySubCoinData
  message?: string
}
export interface YapiGetV1CoinQuerySubCoinData {
  subCoinList?: YapiGetV1CoinQuerySubCoinListSubCoinListData[]
}
export interface YapiGetV1CoinQuerySubCoinListSubCoinListData {
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 名称
   */
  coinFullName: string
  /**
   * 是否开启提现
   */
  isWithdraw: number
  id: string
  /**
   * 简称
   */
  coinName: string
  /**
   * 是否开启充值
   */
  isDeposit: number
  /**
   * 是否使用地址标签, 1 是，2 否
   */
  isUseMemo: number
  /**
   * 主链类型，区块链充提币主网选择展示
   */
  mainType: string
  /**
   * 主网，用于提币确认页面展示
   */
  mainnet: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币币-根据主币获取子币列表(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/8554)
// **/
// export const getV1CoinQuerySubCoinListApiRequest: MarkcoinRequest<
//   YapiGetV1CoinQuerySubCoinListApiRequest,
//   YapiGetV1CoinQuerySubCoinListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coin/querySubCoinList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [资产-币币-根据主币获取子币列表↗](https://yapi.nbttfc365.com/project/44/interface/api/401) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/coin/querySubCoinList`
 * @更新时间 `2022-12-06 11:15:48`
 */
export interface YapiGetV1CoinQuerySubCoinListApiRequest {
  coinId: string
}

/**
 * 接口 [资产-币币-根据主币获取子币列表↗](https://yapi.nbttfc365.com/project/44/interface/api/401) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/coin/querySubCoinList`
 * @更新时间 `2022-12-06 11:15:48`
 */
export interface YapiGetV1CoinQuerySubCoinListApiResponse {
  code?: number
  data?: YapiGetV1CoinQuerySubCoinData
  message?: string
}
export interface YapiGetV1CoinQuerySubCoinData {
  subCoinList?: YapiGetV1CoinQuerySubCoinListSubCoinListData[]
}
export interface YapiGetV1CoinQuerySubCoinListSubCoinListData {
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 名称
   */
  coinFullName: string
  /**
   * 是否开启提现
   */
  isWithdraw: number
  id: string
  /**
   * 简称
   */
  coinName: string
  /**
   * 是否开启充值
   */
  isDeposit: number
  /**
   * 是否使用地址标签, 1 是，2 否
   */
  isUseMemo: number
  /**
   * 主链类型，区块链充提币主网选择展示
   */
  mainType: string
  /**
   * 主网，用于提币确认页面展示
   */
  mainnet: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币币-根据主币获取子币列表↗](https://yapi.nbttfc365.com/project/44/interface/api/401)
// **/
// export const getV1CoinQuerySubCoinListApiRequest: MarkcoinRequest<
//   YapiGetV1CoinQuerySubCoinListApiRequest,
//   YapiGetV1CoinQuerySubCoinListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coin/querySubCoinList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
