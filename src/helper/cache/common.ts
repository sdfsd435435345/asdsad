import { HistoryStack } from '@/typings/cache'
import { YapiPostAuthRefreshTokenData } from '@/typings/yapi/AuthRefreshTokenPostApi'
import cacheUtils from 'store'
import { envIsClient } from '../env'

export function getAllStorage() {
  let res = {}
  let keys = Object.keys(localStorage)
  let i = keys.length

  // eslint-disable-next-line no-plusplus
  while (i--) {
    res[keys[i]] = localStorage.getItem(keys[i])
  }

  return res
}

export function setAllStorage(_localStorage) {
  Object.keys(_localStorage).forEach(k => {
    localStorage[k] = _localStorage[k]
  })
}

const BUSINESS_ID_CACHE_KEY = 'BUSINESS_ID_CACHE_KEY'

export function setBusinessIdToCache(id: number) {
  cacheUtils.set(BUSINESS_ID_CACHE_KEY, id)
}
export function getBusinessIdFromCache() {
  return cacheUtils.get(BUSINESS_ID_CACHE_KEY) as number
}
export const TOKEN = 'AUTH_TOKEN'

export function setTokenCache(tokenObj: YapiPostAuthRefreshTokenData | null) {
  cacheUtils.set(TOKEN, tokenObj)
}

export function getTokenCache() {
  return cacheUtils.get(TOKEN) as YapiPostAuthRefreshTokenData | null
}
export const themeCache = 'themeCache'

export function getThemeCache() {
  return cacheUtils.get(themeCache)
}

export function setThemeCache(val) {
  return cacheUtils.set(themeCache, val)
}
export const langCache = 'langCache'
export const lastLangCache = 'lastLangCache'

export function getLastLangCache() {
  return cacheUtils.get(lastLangCache)
}

export function setLastLangCache(val) {
  return cacheUtils.set(lastLangCache, val)
}
export function getLangCache() {
  if (envIsClient) {
    return sessionStorage.getItem(langCache) || getLastLangCache()
  }
}

export function setLangCache(val) {
  if (envIsClient) {
    sessionStorage.setItem(langCache, val)
    setLastLangCache(val)
  }
}
// 保存浏览器前进后退
export const historyStack = 'HISTORY_STACK'

// 用于存交易线的红涨绿跌或者绿涨红跌
export const cssColor = 'CSS_COLOR'
export function setHistoryStack(val: HistoryStack[]) {
  return cacheUtils.set(historyStack, val)
}

export function getHistoryStack() {
  return cacheUtils.get(historyStack)
}

export function removeHistoryStack() {
  return cacheUtils.set(historyStack, [])
}

export function setLineCssColor(val) {
  return cacheUtils.set(cssColor, val)
}

export function getLineCssColor() {
  return cacheUtils.get(cssColor)
}

/** 探测持久化储存 */
export function initCache() {
  if (!cacheUtils.enabled) {
    // eslint-disable-next-line no-alert
    alert(
      'Local storage is not supported by your browser. Please disabled "Private Mode", or upgrade to a modern browser'
    )
  }
}

export const fusionApi = 'FUSION_API'
export function getIsFusionModeCache() {
  return cacheUtils.get(fusionApi)
}
export function setIsFusionModeCache(data) {
  return cacheUtils.set(fusionApi, data)
}

export const accessKey = 'ACCESS_KEY'
export function getAccessKeyCache() {
  return cacheUtils.get(accessKey)
}
export function setAccessKeyCache(data) {
  return cacheUtils.set(accessKey, data)
}

export const businessId = 'BUSINESS_ID'
export function getBusinessIdCache() {
  return cacheUtils.get(businessId)
}
export function setBusinessIdCache(data) {
  return cacheUtils.set(businessId, data)
}

export const restockToken = 'RESTOCK_TOKEN'
export function getRestockTokenCache() {
  return cacheUtils.get(restockToken)
}
export function setRestockTokenCache(data) {
  return cacheUtils.set(restockToken, data)
}
