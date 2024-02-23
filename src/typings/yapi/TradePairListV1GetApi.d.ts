/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-币对列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2825) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/list`
 * @更新时间 `2023-10-17 15:32:45`
 */
export interface YapiGetV1TradePairListApiRequest {
  /**
   * 计价币id
   */
  buyCoinId?: string
  /**
   * 板块ID
   */
  conceptId?: string
}

/**
 * 接口 [现货-币对列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2825) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/list`
 * @更新时间 `2023-10-17 15:32:45`
 */
export interface YapiGetV1TradePairListApiResponse {
  code?: number
  data?: YapiGetV1TradePairData
  message?: string
}
export interface YapiGetV1TradePairData {
  list?: YapiGetV1TradePairListData[]
}
export interface YapiGetV1TradePairListData {
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
  /**
   * 流通量
   */
  circulatingSupply: string
  /**
   * 手续费率
   */
  sellFee: string
  /**
   * 买手续费
   */
  buyFee: string
  /**
   * 是否开盘;1=开盘中，2=停盘中，3=预约开盘
   */
  marketStatus: number
  /**
   * 下单数量偏移量
   */
  amountOffset: string
  /**
   * 下单价格偏移量
   */
  priceOffset: string
  /**
   * 最小下单数量
   */
  minCount: string
  /**
   * 最大下单数量
   */
  maxCount: string
  /**
   * 最小下单金额
   */
  minAmount: string
  /**
   * 最大下单金额
   */
  maxAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-币对列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2825)
// **/
// export const getV1TradePairListApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairListApiRequest,
//   YapiGetV1TradePairListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
