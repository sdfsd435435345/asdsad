/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史委托-普通委托订单止盈止损详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/5504) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/orders/history/strategy/details/{id}`
 * @更新时间 `2023-04-27 10:30:06`
 */
export interface YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdApiRequest {
  /**
   * 订单id
   */
  id: string
}

/**
 * 接口 [历史委托-普通委托订单止盈止损详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/5504) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/orders/history/strategy/details/{id}`
 * @更新时间 `2023-04-27 10:30:06`
 */
export interface YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdData
}
export interface YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdData {
  /**
   * 订单id
   */
  id: string
  groupId: string
  groupName: string
  /**
   * limit_order 限价委托单  market_order 市价委托单
   */
  typeInd: string
  /**
   * revoke 已撤销 revoke_sys 系统撤销，unsold 未成交 partially 部分成交 deal_done 完全成交  partial_deal_canceled部分成交,已撤销 ;
   */
  statusCd: string
  /**
   * 订单的展示状态  dealt已委托,to_deal待委托,canceled已撤销。
   */
  orderDisplayStatus: string
  /**
   * 方向 open_long 开多 , open_short 开空 ,close_long 平多, close_short 平空
   */
  sideInd: string
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd: string
  /**
   * 合约交易对id
   */
  traded: string
  /**
   * 合约交易对名称
   */
  symbol: string
  /**
   * 杠杆倍数
   */
  lever: string
  /**
   * 委托价格
   */
  price: string
  /**
   * 委托数量
   */
  size: string
  /**
   * 下单选择的币种是标的币还是计价币；如果是标的币传BASE，如果是计价币传QUOTE
   */
  placeUnit: string
  /**
   * 市价单时会有值，市价单单位 amount按金额 quantity 按数量
   */
  marketUnit?: string
  /**
   * 创建时间 13位毫秒值
   */
  createdByTime: string
  /**
   * 标的币 symbol
   */
  baseCoinShortName: string
  /**
   * 计价币 symbol
   */
  quoteCoinShortName: string
  strategy?: YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdStrategyData
}
/**
 * 止盈止损策略
 */
export interface YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdStrategyData {
  stopProfit?: YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdStopProfitStrategyData
  stopLoss?: YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdStopLossStrategyData
}
/**
 * 止盈策略
 */
export interface YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdStopProfitStrategyData {
  /**
   * 止盈止损策略id  当设置普通委托的订单没有结束的时候（不是完全成交或者部成已撤）为空
   */
  id: string
  /**
   * 策略类型    stop_profit 止盈
   */
  strategyTypeInd: string
  /**
   * 委托状态revoke 已撤销，revoke_sys 系统撤销，,already_triggered 已生效，triggered_failed 已生效-委托失败
   */
  statusCd: string
  /**
   * not_triggered 未生效 already_triggered已生效 expired 已失效
   */
  statusDisplay: string
  /**
   * 方向 close_long 平多, close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd: string
  /**
   * 委托价格
   */
  price: string
  /**
   * 委托数量
   */
  size: string
  /**
   * 标的币 symbol
   */
  baseCoinShortName: string
  /**
   * 计价币 symbol
   */
  quoteCoinShortName: string
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerPriceTypeInd: string
  /**
   * 触发价格
   */
  triggerPrice: string
  /**
   * 触发方向 up=向上  大于等于，down=向下  小于等于
   */
  triggerDirectionInd: string
  /**
   * 按市价单止盈时会有值，市价单单位 amount按金额 quantity 按数量
   */
  marketUnit?: string
}
/**
 * 止损策略
 */
export interface YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdStopLossStrategyData {
  /**
   * 止盈止损策略id  当设置普通委托的订单没有结束的时候（不是完全成交或者部成已撤）为空
   */
  id: string
  /**
   * stop_loss 止损
   */
  strategyTypeInd: string
  /**
   * 委托状态revoke 已撤销，revoke_sys 系统撤销，,already_triggered 已生效，triggered_failed 已生效-委托失败
   */
  statusCd: string
  /**
   * not_triggered 未生效 already_triggered已生效 expired 已失效
   */
  statusDisplay: string
  /**
   * 方向 close_long 平多, close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd: string
  /**
   * 委托价格
   */
  price: string
  /**
   * 委托数量
   */
  size: string
  /**
   * 标的币 symbol
   */
  baseCoinShortName: string
  /**
   * 计价币 symbol
   */
  quoteCoinShortName: string
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerPriceTypeInd: string
  /**
   * 触发价格
   */
  triggerPrice: string
  /**
   * 触发方向 up=向上  大于等于，down=向下  小于等于
   */
  triggerDirectionInd: string
  /**
   * 按市价单止损时会有值，市价单单位 amount按金额 quantity 按数量
   */
  marketUnit?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [历史委托-普通委托订单止盈止损详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/5504)
// **/
// export const getV1PerpetualOrdersHistoryStrategyDetailsIdApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdApiRequest,
//   YapiGetV1PerpetualOrdersHistoryStrategyDetailsIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/orders/history/strategy/details/{id}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
