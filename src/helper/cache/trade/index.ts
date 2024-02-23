import type { ITradeStore } from '@/store/trade'
import { cloneDeep, pick } from 'lodash'
import cacheUtils from 'store'
import type { IFutureTradeStore } from '@/store/trade/future'
import type { ISpotTradeStore } from '@/store/trade/spot'

/** 交易区设置 */
export const TRADE_PAGE_SETTINGS_KEY = 'TRADE_PAGE_SETTINGS_KEY'
/** 合约交易设置 */
export const FUTURE_TRADE_PAGE_SETTINGS_KEY = 'FUTURE_TRADE_PAGE_SETTINGS_KEY'
/** 现货交易设置 */
export const SPOT_TRADE_PAGE_SETTINGS_KEY = 'SPOT_TRADE_PAGE_SETTINGS_KEY'

export function getFutureTradeSettingsFromCache() {
  return cacheUtils.get(FUTURE_TRADE_PAGE_SETTINGS_KEY) as Pick<IFutureTradeStore, 'settings'>
}
export function setFutureTradeSettingsToCache(settings: IFutureTradeStore) {
  return cacheUtils.set(FUTURE_TRADE_PAGE_SETTINGS_KEY, pick(cloneDeep(settings), ['settings']))
}
export function getSpotTradeSettingsFromCache() {
  return cacheUtils.get(SPOT_TRADE_PAGE_SETTINGS_KEY) as Pick<ISpotTradeStore, 'settings'>
}
export function setSpotTradeSettingsToCache(settings: ISpotTradeStore) {
  return cacheUtils.set(SPOT_TRADE_PAGE_SETTINGS_KEY, pick(cloneDeep(settings), ['settings']))
}

export function getTradePageSettingsFromCache() {
  return cacheUtils.get(TRADE_PAGE_SETTINGS_KEY) as Pick<ITradeStore, 'generalSettings'>
}
export function setTradePageSettingsToCache(settings: ITradeStore) {
  // 加 cloneDeep 是为了解决 proxy 对象被撤回的问题，原因可能是 cache 内部有其它延时实现
  return cacheUtils.set(
    TRADE_PAGE_SETTINGS_KEY,
    pick(cloneDeep(settings), ['futuresSettings', 'futureMarginSettings', 'spotSettings', 'generalSettings'])
  )
}
