export enum FutureTabTypeEnum {
  current = 'open',
  history = 'history',
  fundrate = 'fundrate',
  holdings = 3,
  plan,
  // 止盈止损
  profitLoss,
  // 保证金
  margin,
}

export enum FuturePlanOrderStatusEnum {
  unTrigger = 1,
  triggered = 'already_triggered',
  triggeredEntrustFailed = 'triggered_failed',
  manualCanceled = 'revoke',
  systemCanceled = 'revoke_sys',
}

export enum FutureStatusEnum {
  unsettled = 1,
  partlySucceed,
  settled = 'deal_done',
  manualCanceled = 'revoke',
  systemCanceled = 'revoke_sys',
  partlyCanceled = 'partial_deal_canceled',
  revocation = 7,
  canceled,
  unTrigger,
  entrusted,
  failed,
}

/** 合约计划订单状态组合 */
export const FuturePlanOrderStatusParamsCompositionEnum = {
  triggered: [FuturePlanOrderStatusEnum.triggered, FuturePlanOrderStatusEnum.triggeredEntrustFailed].join(','),
  canceled: [FuturePlanOrderStatusEnum.manualCanceled, FuturePlanOrderStatusEnum.systemCanceled].join(','),
}

/** 合约订单状态组合 */
export const SpotFutureStatusParamsCompositionEnum = {
  settled: FutureStatusEnum.settled,
  canceled: [FutureStatusEnum.manualCanceled, FutureStatusEnum.systemCanceled].join(','),
  partlyCanceled: FutureStatusEnum.partlyCanceled,
}

/** 合约止盈止损状态组合 */
export const FutureStopOrderStatusParamsCompositionEnum = {
  triggered: [FuturePlanOrderStatusEnum.triggered, FuturePlanOrderStatusEnum.triggeredEntrustFailed].join(','),
  canceled: [FuturePlanOrderStatusEnum.manualCanceled, FuturePlanOrderStatusEnum.systemCanceled].join(','),
}
