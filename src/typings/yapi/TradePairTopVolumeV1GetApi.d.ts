/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [首页-24小时成交额↗](https://yapi.nbttfc365.com/project/44/interface/api/2759) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/topVolume`
 * @更新时间 `2022-11-02 13:50:45`
 */
export interface YapiGetV1TradePairTopVolumeApiRequest {}

/**
 * 接口 [首页-24小时成交额↗](https://yapi.nbttfc365.com/project/44/interface/api/2759) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/topVolume`
 * @更新时间 `2022-11-02 13:50:45`
 */
export interface YapiGetV1TradePairTopVolumeApiResponse {
  code?: number
  data?: YapiGetV1TradePairTopVolumeData
  message?: string
}
export interface YapiGetV1TradePairTopVolumeData {
  list?: YapiGetV1TradePairTopVolumeListData[]
}
export interface YapiGetV1TradePairTopVolumeListData {
  sellCoinId: number
  buyCoinId: number
  symbolWassName: string
  chg: string
  last: string
  tradeArea: null
  quoteVolume: string
  sort: number
  favourite: number
  volume: string
  high: string
  quoteSymbolName: string
  baseSymbolName: string
  low: string
  symbolName: string
  id: number
  time: null
  open: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [首页-24小时成交额↗](https://yapi.nbttfc365.com/project/44/interface/api/2759)
// **/
// export const getV1TradePairTopVolumeApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairTopVolumeApiRequest,
//   YapiGetV1TradePairTopVolumeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/topVolume",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
