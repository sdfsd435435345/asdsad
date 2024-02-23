/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [止盈止损详情查询,根据仓位id↗](https://yapi.nbttfc365.com/project/44/interface/api/4271) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/position/{id}/strategy/details`
 * @更新时间 `2023-02-04 14:38:21`
 */
export interface YapiGetV1PerpetualPositionIdStrategyDetailsApiRequest {
  /**
   * 仓位id
   */
  id: string
}

/**
 * 接口 [止盈止损详情查询,根据仓位id↗](https://yapi.nbttfc365.com/project/44/interface/api/4271) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/position/{id}/strategy/details`
 * @更新时间 `2023-02-04 14:38:21`
 */
export interface YapiGetV1PerpetualPositionIdStrategyDetailsApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PerpetualPositionIdStrategyDetailsData
}
export interface YapiGetV1PerpetualPositionIdStrategyDetailsData {
  stopProfit?: YapiGetV1PerpetualPositionIdStrategyDetailsStopProfitData
  stopLoss?: YapiGetV1PerpetualPositionIdStrategyDetailsStopLossData
}
/**
 * 止盈策略
 */
export interface YapiGetV1PerpetualPositionIdStrategyDetailsStopProfitData {
  /**
   * 止盈止损策略id
   */
  id: string
  /**
   * 策略类型    stop_profit 止盈
   */
  strategyTypeInd: string
  /**
   * 委托状态revoke 已撤销，revoke_sys 系统撤销，,alreay_triggered 已生效，triggered_failed 已生效-委托失败
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
   * 市价单时会有值，市价单单位 amount按金额 quantity 按数量
   */
  marketUnit?: string
}
/**
 * 止损策略
 */
export interface YapiGetV1PerpetualPositionIdStrategyDetailsStopLossData {
  /**
   * 止盈止损策略id
   */
  id: string
  /**
   * stop_loss 止损
   */
  strategyTypeInd: string
  /**
   * 委托状态revoke 已撤销，revoke_sys 系统撤销，,alreay_triggered 已生效，triggered_failed 已生效-委托失败
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
   * 市价单时会有值，市价单单位 amount按金额 quantity 按数量
   */
  marketUnit?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [止盈止损详情查询,根据仓位id↗](https://yapi.nbttfc365.com/project/44/interface/api/4271)
// **/
// export const getV1PerpetualPositionIdStrategyDetailsApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualPositionIdStrategyDetailsApiRequest,
//   YapiGetV1PerpetualPositionIdStrategyDetailsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/position/{id}/strategy/details",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
