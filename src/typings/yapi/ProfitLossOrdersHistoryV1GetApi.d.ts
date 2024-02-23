/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [止盈止损 - 历史订单列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18664) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/profitLoss/orders/history`
 * @更新时间 `2023-09-26 18:43:25`
 */
export interface YapiGetV1ProfitLossOrdersHistoryApiRequest {
  /**
   * 币对ID
   */
  tradeId?: string
  /**
   * 委单方向 1买单 2卖单
   */
  side?: string
  /**
   * 时间范围(1:一天内 ，2：一周内，3：一月内，4：三个月内)
   */
  timeRange?: string
  /**
   * 状态（1 未触发，2 已触发，3 已触发 委托失败 4 用户取消，5 系统取消）
   */
  status?: string
  pageSize?: string
  pageNum?: string
}

/**
 * 接口 [止盈止损 - 历史订单列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18664) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/profitLoss/orders/history`
 * @更新时间 `2023-09-26 18:43:25`
 */
export interface YapiGetV1ProfitLossOrdersHistoryApiResponse {
  code?: number
  data?: YapiGetV1ProfitLossOrdersHistoryData
  message?: string
}
export interface YapiGetV1ProfitLossOrdersHistoryData {
  total?: number
  pageSize?: number
  list?: YapiGetV1ProfitLossOrdersHistoryListData[]
  pageNum?: number
}
export interface YapiGetV1ProfitLossOrdersHistoryListData {
  symbol: string
  profitOrderType: number
  lossOrderType: number
  createdByTime: number
  profitTriggerPrice: string
  refOrderId: string
  entrustCount: number
  lossPlacePrice: string
  triggerTime: number
  uid: number
  lossPlaceAmount: string
  lossTriggerDirectionInd: string
  lossFunds: string
  id: string
  sellCoinShortName: string
  buyCoinShortName: string
  lossPlaceCount: string
  profitPlacePrice: string
  side: number
  profitPlaceCount: string
  triggerFailReason: null
  profitFunds: string
  lossTriggerPrice: string
  profitTriggerDirectionInd: string
  profitPlaceAmount: string
  marketUnit: number
  tradeId: number
  status: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [止盈止损 - 历史订单列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18664)
// **/
// export const getV1ProfitLossOrdersHistoryApiRequest: MarkcoinRequest<
//   YapiGetV1ProfitLossOrdersHistoryApiRequest,
//   YapiGetV1ProfitLossOrdersHistoryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/profitLoss/orders/history",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
