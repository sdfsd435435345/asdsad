/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户资产汇率（新接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/5854) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v2/coin/rate`
 * @更新时间 `2023-05-22 11:25:18`
 */
export interface YapiGetV2CoinRateApiRequest {}

/**
 * 接口 [用户资产汇率（新接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/5854) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v2/coin/rate`
 * @更新时间 `2023-05-22 11:25:18`
 */
export interface YapiGetV2CoinRateApiResponse {
  code?: number
  message?: string
  data?: YapiGetV2CoinRateData
}
export interface YapiGetV2CoinRateData {
  /**
   * 法币汇率
   */
  legalCurrencyRate: YapiGetV2CoinRateListLegalCurrencyRateData[]
  coinRate?: YapiGetV2CoinRateListCoinRateData[]
}
export interface YapiGetV2CoinRateListLegalCurrencyRateData {
  /**
   * 法币
   */
  currency: string
  /**
   * 汇率
   */
  rate: string
}
export interface YapiGetV2CoinRateListCoinRateData {
  /**
   * 币种对应usdt汇率
   */
  usdtRate: string
  /**
   * 币种
   */
  symbol: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 币种展示精度
   */
  coinPrecision: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户资产汇率（新接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/5854)
// **/
// export const getV2CoinRateApiRequest: MarkcoinRequest<
//   YapiGetV2CoinRateApiRequest,
//   YapiGetV2CoinRateApiResponse['data']
// > = params => {
//   return request({
//     path: "/v2/coin/rate",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
