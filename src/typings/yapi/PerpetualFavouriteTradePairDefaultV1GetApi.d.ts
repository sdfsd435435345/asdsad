/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约-自选推荐↗](https://yapi.nbttfc365.com/project/44/interface/api/4055) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/favouriteTradePair/default`
 * @更新时间 `2023-01-10 13:47:20`
 */
export interface YapiGetV1PerpetualFavouriteTradePairDefaultApiRequest {}

/**
 * 接口 [合约-自选推荐↗](https://yapi.nbttfc365.com/project/44/interface/api/4055) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/favouriteTradePair/default`
 * @更新时间 `2023-01-10 13:47:20`
 */
export interface YapiGetV1PerpetualFavouriteTradePairDefaultApiResponse {
  code?: number
  data?: YapiGetV1PerpetualFavouriteTradePairDefaultData
  message?: string
}
export interface YapiGetV1PerpetualFavouriteTradePairDefaultData {
  list?: YapiGetV1PerpetualFavouriteTradePairDefaultListData[]
}
export interface YapiGetV1PerpetualFavouriteTradePairDefaultListData {
  /**
   * wass名，WS推送使用
   */
  symbolWassName?: string
  /**
   * 币对ID
   */
  tradePairId?: number
  /**
   * 计价币
   */
  quoteSymbolName?: string
  /**
   * 标的币
   */
  baseSymbolName?: string
  symbolName?: string
  /**
   * 标的币全名
   */
  baseSymbolFullName?: string
  /**
   * 最新价
   */
  last: string
  /**
   * 涨跌幅
   */
  chg: string
  /**
   * 合约类型  delivery 交割    perpetual 永续
   */
  typeInd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约-自选推荐↗](https://yapi.nbttfc365.com/project/44/interface/api/4055)
// **/
// export const getV1PerpetualFavouriteTradePairDefaultApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualFavouriteTradePairDefaultApiRequest,
//   YapiGetV1PerpetualFavouriteTradePairDefaultApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/favouriteTradePair/default",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
