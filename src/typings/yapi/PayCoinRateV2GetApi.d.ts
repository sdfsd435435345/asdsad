/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户资产汇率（新接口）↗](https://yapi.nbttfc365.com/project/77/interface/api/8494) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v2/pay/coin/rate`
 * @更新时间 `2023-06-12 14:22:54`
 */
export interface YapiGetV2PayCoinRateApiRequest {}

/**
 * 接口 [用户资产汇率（新接口）↗](https://yapi.nbttfc365.com/project/77/interface/api/8494) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v2/pay/coin/rate`
 * @更新时间 `2023-06-12 14:22:54`
 */
export interface YapiGetV2PayCoinRateApiResponse {
  code?: number
  message?: string
  data?: YapiGetV2PayCoinRateData
}
export interface YapiGetV2PayCoinRateData {
  /**
   * 法币汇率
   */
  legalCurrencyRate: YapiGetV2PayCoinRateListLegalCurrencyRateData[]
  coinRate?: YapiGetV2PayCoinRateListCoinRateData[]
}
export interface YapiGetV2PayCoinRateListLegalCurrencyRateData {
  /**
   * 法币
   */
  currency: string
  /**
   * 汇率
   */
  rate: string
}
export interface YapiGetV2PayCoinRateListCoinRateData {
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
// * [用户资产汇率（新接口）↗](https://yapi.nbttfc365.com/project/77/interface/api/8494)
// **/
// export const getV2PayCoinRateApiRequest: MarkcoinRequest<
//   YapiGetV2PayCoinRateApiRequest,
//   YapiGetV2PayCoinRateApiResponse['data']
// > = params => {
//   return request({
//     path: "/v2/pay/coin/rate",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
