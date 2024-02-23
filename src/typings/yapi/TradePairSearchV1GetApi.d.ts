/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [搜索交易对 (币对模糊查询，交易币搜索)↗](https://yapi.nbttfc365.com/project/44/interface/api/2846) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/search`
 * @更新时间 `2023-05-05 15:55:05`
 */
export interface YapiGetV1TradePairSearchApiRequest {
  /**
   * 交易币的id，精确查询
   */
  sellCoinId?: string
  /**
   * 模糊查询，搜索输入框的文本
   */
  symbolName?: string
}

/**
 * 接口 [搜索交易对 (币对模糊查询，交易币搜索)↗](https://yapi.nbttfc365.com/project/44/interface/api/2846) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/search`
 * @更新时间 `2023-05-05 15:55:05`
 */
export interface YapiGetV1TradePairSearchApiResponse {
  code?: number
  data?: YapiGetV1TradePairSearchData
  message?: string
}
export interface YapiGetV1TradePairSearchData {
  spot?: YapiGetV1TradePairSearchListSpotData[]
  /**
   * 合约币对列表 字段同 https://yapi.nbttfc365.com/project/44/interface/api/461
   */
  perpetual: {}[]
}
export interface YapiGetV1TradePairSearchListSpotData {
  sellCoinId: number
  buyCoinId: number
  symbolWassName: string
  chg: string
  last: string
  tradeArea: number
  quoteVolume: string
  sort: null
  volume: string
  high: string
  quoteSymbolName: string
  baseSymbolName: string
  low: string
  symbolName: null
  /**
   * 币对ID
   */
  id: number
  time: null
  open: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [搜索交易对 (币对模糊查询，交易币搜索)↗](https://yapi.nbttfc365.com/project/44/interface/api/2846)
// **/
// export const getV1TradePairSearchApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairSearchApiRequest,
//   YapiGetV1TradePairSearchApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/search",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
