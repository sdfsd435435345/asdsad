import cacheUtils from 'store'

/** 资产 - 合约相关本地设置 */
export const ASSETS_FUTURES_SETTING = 'ASSETS_FUTURES_SETTING'
export function getAssetsFuturesSettingCache() {
  return cacheUtils.get(ASSETS_FUTURES_SETTING)
}
export function setAssetsFuturesSettingCache(data: any) {
  return cacheUtils.set(ASSETS_FUTURES_SETTING, data)
}
