/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币对列表 纯净版 内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3529) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/common/tradePair/list`
 * @更新时间 `2023-09-12 11:48:55`
 */
export interface YapiGetV1CommonTradePairListApiRequest {
  businessId: string
}

/**
 * 接口 [币对列表 纯净版 内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3529) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/common/tradePair/list`
 * @更新时间 `2023-09-12 11:48:55`
 */
export interface YapiGetV1CommonTradePairListApiResponse {
  code?: number
  data?: YapiGetV1CommonTradePairListData[]
  message?: string
}
export interface YapiGetV1CommonTradePairListData {
  /**
   * 标的币
   */
  sellCoinId: number
  /**
   * 最小下单金额
   */
  minAmount: number
  /**
   * 最大下单数量
   */
  maxCount: number | null
  /**
   * 流通
   */
  circulatingSupply: number | null
  symbolName: string
  id: number
  /**
   * 最大下单金额
   */
  maxAmount: number
  /**
   * 计价币
   */
  buyCoinId: number
  symbolWassName: string
  /**
   * 价格精度
   */
  priceOffset: number
  quoteSymbolName: string
  baseSymbolName: string
  /**
   * 数量精度
   */
  amountOffset: number
  /**
   * 最小下单数量
   */
  minCount: number | null
  /**
   * 手续费
   */
  sellFee: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [币对列表 纯净版 内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3529)
// **/
// export const getV1CommonTradePairListApiRequest: MarkcoinRequest<
//   YapiGetV1CommonTradePairListApiRequest,
//   YapiGetV1CommonTradePairListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/common/tradePair/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
