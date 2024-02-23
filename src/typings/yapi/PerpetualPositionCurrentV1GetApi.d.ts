/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前持仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3939) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/position/current`
 * @更新时间 `2023-10-23 20:53:16`
 */
export interface YapiGetV1PerpetualPositionCurrentApiRequest {
  /**
   * symbol
   */
  symbol?: string
}

/**
 * 接口 [当前持仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3939) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/position/current`
 * @更新时间 `2023-10-23 20:53:16`
 */
export interface YapiGetV1PerpetualPositionCurrentApiResponse {
  code?: number
  msg?: string
  data?: YapiGetV1PerpetualPositionCurrentData
}
export interface YapiGetV1PerpetualPositionCurrentData {
  list?: YapiGetV1PerpetualPositionCurrentListData[]
}
export interface YapiGetV1PerpetualPositionCurrentListData {
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 合约组名称
   */
  groupName: string
  /**
   * 合约组保证金
   */
  groupMargin: string
  /**
   * 合约组可用保证金
   */
  groupAvailableMargin: string
  /**
   * 交易对id
   */
  tradeId: number
  /**
   * 交易对名称
   */
  symbol: string
  /**
   * 基础币
   */
  baseSymbolName: string
  /**
   * 计价币
   */
  quoteSymbolName: string
  /**
   * wass钱包币对名称
   */
  symbolWassName: string
  /**
   * 合约类型
   */
  typeInd: string
  /**
   * 仓位id
   */
  positionId: string
  /**
   * long:多仓; short:空仓
   */
  sideInd: string
  /**
   * 杠杆倍数
   */
  lever: string
  /**
   * 未实现盈亏
   */
  unrealizedProfit: string
  /**
   * 仓位初始保证金
   */
  initMargin: string
  /**
   * 收益率
   */
  profitRatio: string
  /**
   * 持仓数量
   */
  size: string
  /**
   * 仓位保证金率
   */
  marginRatio: string
  /**
   * 维持保证金率
   */
  maintMarginRatio: string
  /**
   * 开仓均价
   */
  openPrice: string
  /**
   * 标记价格
   */
  markPrice: string
  /**
   * 最新价
   */
  latestPrice: string
  /**
   * 预估强平价
   */
  liquidatePrice: string
  /**
   * 已实现盈亏
   */
  realizedProfit: string
  /**
   * 收益
   */
  profit: string
  /**
   * 仓位状态: opened:已开仓,closed:已关闭，locked:锁仓中
   */
  statusCd: string
  /**
   * 委托冻结的数量
   */
  entrustFrozenSize: string
  /**
   * 锁仓价格
   */
  lockPrice: string
  /**
   * 锁仓数量
   */
  lockSize: string
  /**
   * 锁仓利息
   */
  lockFees: string
  /**
   * 锁仓比例;如果没有锁仓,返回空字符串
   */
  lockPercent: string
  /**
   * 数量精度
   */
  amountOffset: string
  /**
   * 价格精度
   */
  priceOffset: string
  /**
   * 卖出手续费率
   */
  sellFeeRate: string
  /**
   * 创建时间
   */
  createdByTime: number
  /**
   * 修改时间
   */
  updatedByTime: string
  /**
   * web图标
   */
  webLogo: string
  /**
   * app图标
   */
  appLogo: string
  /**
   * 仓位占用的保证金
   */
  positionOccupyMargin: string
  /**
   * 体验金
   */
  voucherAmount: string
  lockRecord: YapiGetV1PerpetualPositionCurrentLockRecordListData
  /**
   * 仓位止盈止损
   */
  profitLossEntrust: YapiGetV1PerpetualPositionCurrentListProfitLossEntrustListData[]
}
/**
 * 锁仓记录
 */
export interface YapiGetV1PerpetualPositionCurrentLockRecordListData {
  /**
   * 首次锁仓价格
   */
  lockPrice: string
  /**
   * 锁仓手续费总和
   */
  fees: string
}
export interface YapiGetV1PerpetualPositionCurrentListProfitLossEntrustListData {
  /**
   * 策略类型 stop_profit 止盈 stop_loss 止损
   */
  strategyTypeInd: string
  /**
   * 触发价格
   */
  triggerPrice: string
  /**
   * 触发方式: mark 标记，new 最新
   */
  triggerPriceTypeInd: string
  /**
   * 仓位止盈止损id
   */
  id: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前持仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3939)
// **/
// export const getV1PerpetualPositionCurrentApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualPositionCurrentApiRequest,
//   YapiGetV1PerpetualPositionCurrentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/position/current",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
