import cacheUtils from 'store'

/** 持仓 - 止盈止损本地设置 */
export const POSITION_STRATEGY_INFO = 'POSITION_STRATEGY_INFO'
export function getPositionStrategyCache() {
  return cacheUtils.get(POSITION_STRATEGY_INFO)
}
export function setPositionStrategyCache(data: any) {
  return cacheUtils.set(POSITION_STRATEGY_INFO, data)
}

export const FirstLockPositionKey = 'FutureFirstLockPositionKey'

export function getFirstLockPositionKey() {
  return cacheUtils.get(FirstLockPositionKey)
}

export function setFirstLockPositionKey(val) {
  return cacheUtils.set(FirstLockPositionKey, val)
}
export const FUTURE_TRADE_GUIDE_KEY = 'FUTURE_TRADE_GUIDE_KEY'
/** 获取合约交易是否需要引导动画，默认为 true，单独拿出来是因为要和用户以及设备做关联 */
export function getFutureTradeGuideFromCache() {
  const result = cacheUtils.get(FUTURE_TRADE_GUIDE_KEY)

  return typeof result === 'boolean' ? result : true
}
/** 设置合约交易是否需要引导动画 */
export function setFutureTradeGuideToCache(result: boolean) {
  return cacheUtils.set(FUTURE_TRADE_GUIDE_KEY, result)
}

/** 是否首次开通* */
export const isAutomaticMarginCall = 'AUTOMATICMARGIN_CALL'
export function getAutomaticMarginCall() {
  return cacheUtils.get(isAutomaticMarginCall)
}

export function setAutomaticMarginCall(val) {
  return cacheUtils.set(isAutomaticMarginCall, val)
}

/** 下单页模块顺序本地存储* */
export const isModuleOrder = 'MODULE_ORDER'
export function getModuleOrderCache() {
  return cacheUtils.get(isModuleOrder)
}

export function setModuleOrderCache(val) {
  return cacheUtils.set(isModuleOrder, val)
}
