import { cloneDeep, pick } from 'lodash'
import cacheUtils from 'store'
import { IC2cTradeStore } from '@/store/c2c/trade'

const C2C_TRADE_PAGE_SETTINGS_KEY = 'C2C_TRADE_PAGE_SETTINGS_KEY'
export function getC2cTradeSettingsFromCache() {
  return cacheUtils.get(C2C_TRADE_PAGE_SETTINGS_KEY) as Pick<IC2cTradeStore, 'settings'>
}
export function setC2cTradeSettingsToCache(store: IC2cTradeStore) {
  return cacheUtils.set(C2C_TRADE_PAGE_SETTINGS_KEY, pick(cloneDeep(store), ['settings']))
}

/** c2c-广告版本 */
export const C2C_ADVERTISE_VERSION = 'C2C_ADVERTISE_VERSION'
export function getC2CAdvertiseVersionCache() {
  return cacheUtils.get(C2C_ADVERTISE_VERSION)
}
export function setC2CAdvertiseVersionCache(data: any) {
  return cacheUtils.set(C2C_ADVERTISE_VERSION, data)
}
