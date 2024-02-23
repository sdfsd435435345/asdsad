/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询成交历史（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4491) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/perpetual/clearing/trade/history`
 * @更新时间 `2023-04-19 14:46:31`
 */
export interface YapiGetInnerPerpetualClearingTradeHistoryApiRequest {
  /**
   * taker,maker
   */
  takerMaker?: string
  /**
   * 订单号
   */
  orderId?: string
  /**
   * 开始页，默认值1
   */
  pageNum?: string
  /**
   * 默认值20
   */
  pageSize?: string
  /**
   * 用户uid
   */
  uid: string
  /**
   * 商户id
   */
  businessId: string
  /**
   * 开始时间
   */
  startTime?: string
  /**
   * 结束时间
   */
  endTime?: string
  /**
   * 交易对id
   */
  tradeId?: string
}

/**
 * 接口 [查询成交历史（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4491) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/perpetual/clearing/trade/history`
 * @更新时间 `2023-04-19 14:46:31`
 */
export interface YapiGetInnerPerpetualClearingTradeHistoryApiResponse {
  code?: number
  data?: YapiGetInnerPerpetualClearingTradeHistoryData
  isSendMsg?: boolean
  time?: number
  /**
   * 错误消息
   */
  message?: string
}
export interface YapiGetInnerPerpetualClearingTradeHistoryData {
  list?: YapiGetInnerPerpetualClearingTradeHistoryListData[]
  pageNum?: number
  pageSize?: number
  total?: number
}
export interface YapiGetInnerPerpetualClearingTradeHistoryListData {
  /**
   * 商户id
   */
  businessId?: number
  /**
   * 创建时间时间戳
   */
  createdByTimeLong?: number
  /**
   * 手续费
   */
  fees?: number
  /**
   * 撤销的张数
   */
  cancelledSize?: number
  /**
   * 撤销的金额
   */
  cancelledAmount?: string
  /**
   * 强平手续费
   */
  forceCloseFees?: number
  /**
   * 成交金额
   */
  filledAmount?: number
  /**
   * 成交价格
   */
  filledPrice?: number
  /**
   * 成交数量
   */
  filledSize?: number
  /**
   * 仓位id
   */
  positionId?: number
  /**
   * taker(吃单方),maker(挂单方),LIQUIDATION(爆仓)
   */
  takerMaker?: string
  /**
   * 交易对id
   */
  tradeId?: number
  /**
   * 基础货币名称
   */
  baseSymbolName?: string
  /**
   * 计价货币名称
   */
  quoteSymbolName?: string
  /**
   * 仓位用户id
   */
  uid?: number
  /**
   * 已实现盈亏
   */
  realizedPnl?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询成交历史（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4491)
// **/
// export const getInnerPerpetualClearingTradeHistoryApiRequest: MarkcoinRequest<
//   YapiGetInnerPerpetualClearingTradeHistoryApiRequest,
//   YapiGetInnerPerpetualClearingTradeHistoryApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/perpetual/clearing/trade/history",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
