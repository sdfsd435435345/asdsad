/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户资产汇率↗](https://yapi.nbttfc365.com/project/77/interface/api/8489) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/coin/rate`
 * @更新时间 `2023-06-12 14:35:27`
 */
export interface YapiGetV1PayCoinRateApiRequest {}

/**
 * 接口 [用户资产汇率↗](https://yapi.nbttfc365.com/project/77/interface/api/8489) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/coin/rate`
 * @更新时间 `2023-06-12 14:35:27`
 */
export interface YapiGetV1PayCoinRateApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PayCoinRateData
}
export interface YapiGetV1PayCoinRateData {
  legalCurrencyRate: YapiGetV1PayCoinRateLegalCurrencyRateData
  coinRate?: YapiGetV1PayCoinRateListCoinRateData[]
}
/**
 * 法币汇率
 */
export interface YapiGetV1PayCoinRateLegalCurrencyRateData {
  /**
   * 人民币汇率
   */
  CNY: string
  /**
   * 美元汇率
   */
  USD: string
}
export interface YapiGetV1PayCoinRateListCoinRateData {
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
// * [用户资产汇率↗](https://yapi.nbttfc365.com/project/77/interface/api/8489)
// **/
// export const getV1PayCoinRateApiRequest: MarkcoinRequest<
//   YapiGetV1PayCoinRateApiRequest,
//   YapiGetV1PayCoinRateApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/coin/rate",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
