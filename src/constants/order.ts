import { t } from '@lingui/macro'

export enum OrderTabTypeEnum {
  current = 'open',
  history = 'history',
  holdings = 3,
  plan,
  // 止盈止损
  profitLoss,
  // 保证金
  margin,
}
export function geOrderTabTypeEnumName(value: OrderTabTypeEnum) {
  return {
    [OrderTabTypeEnum.current]: t`constants_order_727`,
    [OrderTabTypeEnum.history]: t`constants_order_728`,
    [OrderTabTypeEnum.holdings]: t`constants_order_729`,
    [OrderTabTypeEnum.plan]: t`constants/trade-3`,
    [OrderTabTypeEnum.profitLoss]: t`features_orders_future_holding_index_610`,
    [OrderTabTypeEnum.margin]: t`constants_order_730`,
  }[value]
}
export enum OrderDirectionEnum {
  all = '',
  buy = 1,
  sell = 2,
}
export function getOrderDirectionEnumName(value: OrderDirectionEnum) {
  return {
    [OrderDirectionEnum.all]: t`constants_order_731`,
    [OrderDirectionEnum.buy]: t`features/market/detail/index-1`,
    [OrderDirectionEnum.sell]: t`features/market/detail/index-2`,
  }[value]
}

export enum OrderPriceTypeEnum {
  market = 'ALL',
  bbo = 'BBO',
  optimal5 = 'optimal5',
  optimal10 = 'optimal10',
  optimal20 = 'optimal20',
}
export function getOrderPriceTypeEnumName(value: OrderPriceTypeEnum) {
  return {
    [OrderPriceTypeEnum.market]: t`features/trade/future/price-input-3`,
    [OrderPriceTypeEnum.bbo]: t`constants_order_732`,
    [OrderPriceTypeEnum.optimal10]: t`constants_order_733`,
    [OrderPriceTypeEnum.optimal20]: t`constants_order_734`,
    [OrderPriceTypeEnum.optimal5]: t`constants_order_735`,
  }[value]
}
export enum PlanOrderMatchTypeEnum {
  limitPrice = 1,
  marketPrice = 2,
}
export enum OrderMatchTypeEnum {
  limitPrice = 0,
  marketPrice = 1,
  planPrice = 4,
}

export function getOrderMatchTypeEnumName(value: OrderMatchTypeEnum) {
  return {
    [OrderMatchTypeEnum.limitPrice]: t`constants/trade-0`,
    [OrderMatchTypeEnum.marketPrice]: t`constants/trade-1`,
    [OrderMatchTypeEnum.planPrice]: t`constants/trade-3`,
  }[value]
}

export enum OrderMarketUnitEnum {
  amount = 'amount',
}
export enum SpotPlanOrderStatusEnum {
  unTrigger = 1,
  triggered,
  triggeredEntrustFailed,
  manualCanceled,
  systemCanceled,
}

export enum OrderStatusEnum {
  unsettled = 1,
  partlySucceed,
  settled,
  manualCanceled,
  systemCanceled,
  partlyCanceled,
  revocation,
  canceled,
  unTrigger,
  entrusted,
  failed,
}

export function getOrderStatusEnumName(value: OrderStatusEnum) {
  return {
    [OrderStatusEnum.unsettled]: t`constants_order_736`,
    [OrderStatusEnum.partlySucceed]: t`constants_order_737`,
    [OrderStatusEnum.settled]: t`constants/assets/common-31`,
    [OrderStatusEnum.manualCanceled]: t`features_orders_spot_open_order_item_510254`,
    [OrderStatusEnum.systemCanceled]: t`features_orders_spot_open_order_item_510253`,
    [OrderStatusEnum.revocation]: t`constants_order_738`,
    [OrderStatusEnum.canceled]: t`constants/assets/common-33`,
    [OrderStatusEnum.unTrigger]: t`constants_order_739`,
    [OrderStatusEnum.entrusted]: t`constants_order_740`,
    [OrderStatusEnum.failed]: t`constants_order_741`,
    [OrderStatusEnum.partlyCanceled]: t`constants/assets/common-32`,
  }[value]
}

export enum OrderPlaceOrderTypeEnum {
  normal = 1,
  plan = 2,
}
export function getOrderOrderPlaceOrderTypeEnumName(value: OrderPlaceOrderTypeEnum) {
  return {
    [OrderPlaceOrderTypeEnum.normal]: t`features_trade_future_settings_order_confirm_634`,
    [OrderPlaceOrderTypeEnum.plan]: t`constants/trade-3`,
  }[value]
}

export enum OrderMarginModeEnum {
  // TODO: 待定
  /** 现货 */
  spot = 'nonmag',
  /**  杠杆 */
  margin = 'cross',
}
export function getOrderMarginModeEnumName(value: OrderMarginModeEnum) {
  return {
    [OrderMarginModeEnum.spot]: t`constants_order_742`,
    [OrderMarginModeEnum.margin]: t`assets.layout.tabs.leverage`,
  }[value]
}

export enum FutureOrderDirectionEnum {
  all = '',
  openBuy = 'open_long',
  openSell = 'open_short',
  closeBuy = 'close_long',
  closeSell = 'close_short',
}
export function getFutureOrderDirectionEnumName(value: FutureOrderDirectionEnum) {
  return {
    [FutureOrderDirectionEnum.all]: t`constants_order_731`,
    [FutureOrderDirectionEnum.openBuy]: t`constants_order_743`,
    [FutureOrderDirectionEnum.openSell]: t`constants_order_744`,
    [FutureOrderDirectionEnum.closeBuy]: t`constants/assets/common-23`,
    [FutureOrderDirectionEnum.closeSell]: t`constants/assets/common-24`,
  }[value]
}
export enum FutureOrderPositionTypeEnum {
  cross = 1,
  isolated = 0,
}
export function getFutureOrderPositionTypeEnumName(value: FutureOrderPositionTypeEnum) {
  return {
    [FutureOrderPositionTypeEnum.cross]: t`constants_order_745`,
    [FutureOrderPositionTypeEnum.isolated]: t`constants_order_746`,
  }[value]
}
export enum FutureHoldingOrderPositionTypeEnum {
  cross = 0,
  isolated = 1,
}
export function getFutureHoldingOrderPositionTypeEnumName(value: FutureHoldingOrderPositionTypeEnum) {
  return {
    [FutureHoldingOrderPositionTypeEnum.cross]: t`constants_order_745`,
    [FutureHoldingOrderPositionTypeEnum.isolated]: t`constants_order_746`,
  }[value]
}
export enum FutureOrderStopLimitTypeEnum {
  none = '',
  // 止盈
  profit = 0,
  // 止损
  loss = 1,
  // 计划限价
  planLimit = 2,
}
export enum FutureStopLimitOrderStopLimitTypeEnum {
  profit = 1,
  none = '',
  loss = 0,
  planLimit = 2,
}
export function getFutureOrderStopLimitTypeEnumName(value: FutureOrderStopLimitTypeEnum) {
  return {
    [FutureOrderStopLimitTypeEnum.profit]: t`features_orders_future_holding_close_683`,
    [FutureOrderStopLimitTypeEnum.loss]: t`features_orders_future_holding_close_684`,
    [FutureOrderStopLimitTypeEnum.planLimit]: t`constants_order_747`,
  }[value]
}
export enum FutureOrderSystemTypeEnum {
  limit = 10,
  market = 11,
  // 强平
  liquidateBuy = 13,
  liquidateSell = 14,
  // 强平其它 TODO: 含义待定
  liquidateOther = 15,
  // 强减
  forceReduce = 16,
}
export function getFutureOrderEntrustTypeName(
  systemType: FutureOrderSystemTypeEnum,
  limitType: FutureOrderStopLimitTypeEnum,
  limitTypeEnum: typeof FutureOrderStopLimitTypeEnum | typeof FutureStopLimitOrderStopLimitTypeEnum
) {
  const typeNames = {
    [FutureOrderSystemTypeEnum.limit]: {
      [limitTypeEnum.none]: t`constants/trade-0`,
      [limitTypeEnum.profit]: t`constants/assets/common-26`,
      [limitTypeEnum.loss]: t`constants/assets/common-28`,
      [limitTypeEnum.planLimit]: t`constants_order_747`,
    },
    [FutureOrderSystemTypeEnum.market]: {
      [limitTypeEnum.none]: t`constants/trade-1`,
      [limitTypeEnum.profit]: t`constants/assets/common-25`,
      [limitTypeEnum.loss]: t`constants/assets/common-27`,
    },
    [FutureOrderSystemTypeEnum.liquidateBuy]: t`constants/assets/common-29`,
    [FutureOrderSystemTypeEnum.liquidateSell]: t`constants/assets/common-29`,
    [FutureOrderSystemTypeEnum.liquidateOther]: t`constants/assets/common-29`,
    [FutureOrderSystemTypeEnum.forceReduce]: t`constants/assets/common-30`,
  }
  if (!typeNames[systemType]) {
    return ''
  }
  return (typeof typeNames[systemType] === 'string' ? typeNames[systemType] : typeNames[systemType][limitType]) || ''
}
export enum FutureOrderPriceTypeEnum {
  bbo = 1,
  optimal5 = 5,
  optimal10 = 10,
  optimal20 = 20,
}
export function getFutureOrderPriceTypeEnumName(value: FutureOrderPriceTypeEnum) {
  return {
    [FutureOrderPriceTypeEnum.bbo]: t`constants_order_732`,
    [FutureOrderPriceTypeEnum.optimal10]: t`constants_order_733`,
    [FutureOrderPriceTypeEnum.optimal20]: t`constants_order_734`,
    [FutureOrderPriceTypeEnum.optimal5]: t`constants_order_735`,
  }[value]
}
export enum FutureOrderStatusEnum {
  partlySucceed = 1,
  settled = 2,
  revocation = 3,
  canceled = -1,
  unTrigger = 0,
  // TODO: 待定
  entrusted = 10,
  failed = 8,
  partlyCanceled = -2,
}

export function getFutureOrderStatusEnumName(value: FutureOrderStatusEnum) {
  return {
    [FutureOrderStatusEnum.partlySucceed]: t`constants_order_737`,
    [FutureOrderStatusEnum.settled]: t`constants/assets/common-31`,
    [FutureOrderStatusEnum.revocation]: t`constants_order_738`,
    [FutureOrderStatusEnum.canceled]: t`constants/assets/common-33`,
    [FutureOrderStatusEnum.unTrigger]: t`constants_order_736`,
    [FutureOrderStatusEnum.entrusted]: t`constants_order_740`,
    [FutureOrderStatusEnum.failed]: t`constants_order_741`,
    [FutureOrderStatusEnum.partlyCanceled]: t`constants/assets/common-32`,
  }[value]
}
export enum FuturePlanOrderStatusEnum {
  canceled = -1,
  unTrigger = 0,
  unTrigger2 = 2,
  entrusted = 1,
}

export function getFuturePlanOrderStatusEnumName(value: FuturePlanOrderStatusEnum) {
  return {
    [FuturePlanOrderStatusEnum.unTrigger]: t`constants_order_739`,
    [FuturePlanOrderStatusEnum.unTrigger2]: t`constants_order_739`,
    [FuturePlanOrderStatusEnum.entrusted]: t`constants_order_740`,
  }[value]
}
export enum FutureOrderReasonEnum {
  system = 1,
  user = 2,
}

export function getFutureOrderReasonEnumName(value: FutureOrderReasonEnum) {
  return (
    {
      [FutureOrderReasonEnum.system]: t`constants_order_748`,
      [FutureOrderReasonEnum.user]: t`constants_order_749`,
    }[value] || t`constants_order_741`
  )
}
export enum FutureHoldingOrderDirectionEnum {
  all = '',
  buy = 'long',
  sell = 'short',
}
export function getFutureHoldingOrderDirectionEnumName(value: FutureHoldingOrderDirectionEnum) {
  return {
    [FutureHoldingOrderDirectionEnum.all]: t`assets.withdraw.form.count.withdraw-all`,
    [FutureHoldingOrderDirectionEnum.buy]: t`features_trade_future_exchange_order_619`,
    [FutureHoldingOrderDirectionEnum.sell]: t`features_trade_future_exchange_order_620`,
  }[value]
}
export enum FutureMarginOrderTypeEnum {
  manual = 1,
  lever = 2,
  auto = 3,
  all = '',
}
export function getFutureMarginOrderTypeEnumName(value: FutureMarginOrderTypeEnum) {
  return {
    [FutureMarginOrderTypeEnum.all]: t`assets.withdraw.form.count.withdraw-all`,
    [FutureMarginOrderTypeEnum.manual]: t`constants_order_750`,
    [FutureMarginOrderTypeEnum.lever]: t`features/trade/common/lever/index-0`,
    [FutureMarginOrderTypeEnum.auto]: t`constants_order_751`,
  }[value]
}
/** 现货订单状态组合 */
export const SpotOrderStatusParamsCompositionEnum = {
  settled: OrderStatusEnum.settled,
  canceled: [OrderStatusEnum.manualCanceled, OrderStatusEnum.systemCanceled].join(','),
  partlyCanceled: OrderStatusEnum.partlyCanceled,
}
/** 现货计划订单状态组合 */
export const SpotPlanOrderStatusParamsCompositionEnum = {
  triggered: [SpotPlanOrderStatusEnum.triggered, SpotPlanOrderStatusEnum.triggeredEntrustFailed].join(','),
  canceled: [SpotPlanOrderStatusEnum.manualCanceled, SpotPlanOrderStatusEnum.systemCanceled].join(','),
}
