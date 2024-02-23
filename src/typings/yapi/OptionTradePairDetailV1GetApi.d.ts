/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [期权详情接口↗](https://yapi.nbttfc365.com/project/44/interface/api/11149) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/tradePair/detail`
 * @更新时间 `2023-07-20 15:02:42`
 */
export interface YapiGetV1OptionTradePairDetailApiRequest {
  /**
   * symbol
   */
  symbol: string
}

/**
 * 接口 [期权详情接口↗](https://yapi.nbttfc365.com/project/44/interface/api/11149) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/tradePair/detail`
 * @更新时间 `2023-07-20 15:02:42`
 */
export interface YapiGetV1OptionTradePairDetailApiResponse {
  code?: number
  data?: YapiGetV1OptionTradePairDetailData
  message?: string
}
export interface YapiGetV1OptionTradePairDetailData {
  symbol?: string
  minAmount?: number
  typeInd?: string
  chg?: string
  last?: string
  coinScale?: number
  businessId?: number
  statusCd?: string
  sort?: number
  quoteVolume?: string
  source?: string
  favourite?: number
  volume?: string
  coinId?: number
  high?: string
  coinSymbol?: string
  low?: string
  priceSource?: string
  id?: number
  maxAmount?: number
  tradeId?: number
  open?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [期权详情接口↗](https://yapi.nbttfc365.com/project/44/interface/api/11149)
// **/
// export const getV1OptionTradePairDetailApiRequest: MarkcoinRequest<
//   YapiGetV1OptionTradePairDetailApiRequest,
//   YapiGetV1OptionTradePairDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/tradePair/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
