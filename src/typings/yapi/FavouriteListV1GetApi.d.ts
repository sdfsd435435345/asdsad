/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-自选列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2816) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/favourite/list`
 * @更新时间 `2022-12-01 13:58:21`
 */
export interface YapiGetV1FavouriteListApiRequest {
  pageNum: string
  pageSize: string
}

/**
 * 接口 [现货-自选列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2816) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/favourite/list`
 * @更新时间 `2022-12-01 13:58:21`
 */
export interface YapiGetV1FavouriteListApiResponse {
  data: YapiGetV1FavouriteListData[]
  code: number
  message: string
}
export interface YapiGetV1FavouriteListData {
  sellCoinId: number
  minAmount: number
  tradeArea: string
  maxCount: number
  circulatingSupply: number
  high: string
  low: string
  symbolName: string
  id: number
  maxAmount: number
  buyCoinId: number
  symbolWassName: string
  chg: string
  last: string
  priceOffset: number
  quoteVolume: string
  sort: number
  favourite: number
  volume: string
  quoteSymbolName: string
  baseSymbolName: string
  amountOffset: number
  minCount: number
  time: string
  open: string
  sellFee: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-自选列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2816)
// **/
// export const getV1FavouriteListApiRequest: MarkcoinRequest<
//   YapiGetV1FavouriteListApiRequest,
//   YapiGetV1FavouriteListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/favourite/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
