/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [融合资产汇率↗](https://yapi.nbttfc365.com/project/44/interface/api/19389) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v2/hybrid/rate`
 * @更新时间 `2023-11-09 10:58:36`
 */
export interface YapiGetV2HybridRateApiRequest {}

/**
 * 接口 [融合资产汇率↗](https://yapi.nbttfc365.com/project/44/interface/api/19389) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v2/hybrid/rate`
 * @更新时间 `2023-11-09 10:58:36`
 */
export interface YapiGetV2HybridRateApiResponse {
  code?: number
  message?: string
  data?: YapiGetV2HybridRateData
}
export interface YapiGetV2HybridRateData {
  /**
   * 法币汇率
   */
  legalCurrencyRate: YapiGetV2HybridRateListLegalCurrencyRateData[]
  coinRate?: YapiGetV2HybridRateListCoinRateData[]
}
export interface YapiGetV2HybridRateListLegalCurrencyRateData {
  /**
   * 法币
   */
  currency: string
  /**
   * 汇率
   */
  rate: string
}
export interface YapiGetV2HybridRateListCoinRateData {
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
// * [融合资产汇率↗](https://yapi.nbttfc365.com/project/44/interface/api/19389)
// **/
// export const getV2HybridRateApiRequest: MarkcoinRequest<
//   YapiGetV2HybridRateApiRequest,
//   YapiGetV2HybridRateApiResponse['data']
// > = params => {
//   return request({
//     path: "/v2/hybrid/rate",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
