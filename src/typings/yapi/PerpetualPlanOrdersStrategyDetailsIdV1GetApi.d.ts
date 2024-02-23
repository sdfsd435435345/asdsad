/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [计划委托订单止盈止损详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/4099) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/plan/orders/strategy/details/{id}`
 * @更新时间 `2023-03-20 17:01:43`
 */
export interface YapiGetV1PerpetualPlanOrdersStrategyDetailsIdApiRequest {
  /**
   * 计划委托策略单id
   */
  id: string
}

/**
 * 接口 [计划委托订单止盈止损详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/4099) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/plan/orders/strategy/details/{id}`
 * @更新时间 `2023-03-20 17:01:43`
 */
export interface YapiGetV1PerpetualPlanOrdersStrategyDetailsIdApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PerpetualPlanOrdersStrategyDetailsIdData
}
export interface YapiGetV1PerpetualPlanOrdersStrategyDetailsIdData {
  /**
   * 计划委托策略单id
   */
  id: string
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 合约组名称
   */
  groupName: string
  /**
   * 委托状态（revoke 已撤销，revoke_sys 系统撤销,not_triggered 未触发 ,alreay_triggered 已触发，triggered_failed 已触发-委托失败）
   */
  statusCd: string
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
  strategy?: YapiGetV1PerpetualPlanOrdersStrategyDetailsIdStrategyData
}
/**
 * 止盈止损策略
 */
export interface YapiGetV1PerpetualPlanOrdersStrategyDetailsIdStrategyData {
  stopProfit?: YapiGetV1PerpetualPlanOrdersStrategyDetailsIdStopProfitStrategyData
  stopLoss?: YapiGetV1PerpetualPlanOrdersStrategyDetailsIdStopLossStrategyData
}
/**
 * 止盈策略
 */
export interface YapiGetV1PerpetualPlanOrdersStrategyDetailsIdStopProfitStrategyData {
  /**
   * 止盈止损策略id
   */
  id: string
  /**
   * 策略类型    stop_profit 止盈
   */
  strategyTypeInd: string
  /**
   * 委托状态（revoke 已撤销，revoke_sys 系统撤销，not_triggered 未生效 ,alreay_triggered 已生效，triggered_failed 已生效-委托失败
   */
  statusCd: string
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
   * 订单的展示状态  dealt已委托,to_deal待委托,canceled已撤销
   */
  orderDisplayStatus: string
}
/**
 * 止损策略
 */
export interface YapiGetV1PerpetualPlanOrdersStrategyDetailsIdStopLossStrategyData {
  /**
   * 止盈止损策略id
   */
  id: string
  /**
   * stop_loss 止损
   */
  strategyTypeInd: string
  /**
   * 委托状态（revoke 已撤销，revoke_sys 系统撤销，not_triggered 未生效 ,alreay_triggered 已生效，triggered_failed 已生效-委托失败
   */
  statusCd: string
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
   * 订单的展示状态  dealt已委托,to_deal待委托,canceled已撤销
   */
  orderDisplayStatus: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [计划委托订单止盈止损详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/4099)
// **/
// export const getV1PerpetualPlanOrdersStrategyDetailsIdApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualPlanOrdersStrategyDetailsIdApiRequest,
//   YapiGetV1PerpetualPlanOrdersStrategyDetailsIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/plan/orders/strategy/details/{id}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
