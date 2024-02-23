import { ITradeStore } from '@/store/trade'
import { HistoryStack } from '@/typings/cache'
import { cloneDeep, pick } from 'lodash'
import { YapiPostAuthRefreshTokenData } from '@/typings/yapi/AuthRefreshTokenPostApi'
import cacheUtils from 'store'
import { YapiGetV1FavouriteListData } from '@/typings/yapi/FavouriteListV1GetApi'
import { MarketLisModulesEnum } from '@/constants/market/market-list/market-module'
import { IFutureTradeStore } from '@/store/trade/future'
import { ISpotTradeStore } from '@/store/trade/spot'
import { IC2cTradeStore } from '@/store/c2c/trade'
import { HomeModuleTabsEnum } from '@/constants/market/market-list/home-module'
import { FavTabs } from '@/constants/market/market-list/favorite-module'

/** 行情 api SWR 相关 */
export const swrKeyMarketSpotAllTradePairs = 'swrKeyMarketSpotAllTradePairs'
export const swrKeyMarketSpotAllCoinSymbolBasicInfo = 'swrKeyMarketSpotAllCoinSymbolBasicInfo'
export const swrKeyMarketSpotBaseCurrencyTypes = 'swrKeyMarketSpotBaseCurrencyTypes'
export const swrKeyMarketSpotCategoriesByBaseCurrency = 'swrKeyMarketSpotCategoriesByBaseCurrency'
export const swrKeyMarketSpotTradePairListByCurrencyAndCategory = 'swrKeyMarketSpotTradePairListByCurrencyAndCategory'
export const swrKeyMarketSpotSectorConceptPriceList = 'swrKeyMarketSpotSectorConceptPriceList'
export const swrKeyMarketFuturesTradePairListByBaseCurrenty = 'swrKeyMarketFuturesTradePairListByBaseCurrenty'

const MARKET_TRADE_SEARCH_CACHE_KEY = (type: MarketLisModulesEnum) => `MARKET_TRADE_${type}_SEARCH_CACHE_KEY`
export function getMarketTradeSearchCache(type: MarketLisModulesEnum) {
  return cacheUtils.get(MARKET_TRADE_SEARCH_CACHE_KEY(type))
}
export function setMarketTradeSearchCache(data: any[], type: MarketLisModulesEnum) {
  return cacheUtils.set(MARKET_TRADE_SEARCH_CACHE_KEY(type), data)
}
const MARKET_GLOBAL_SEARCH_CACHE_KEY = 'MARKET_GLOBAL_SEARCH_CACHE_KEY'
export function getMarketGlobalSearchCache() {
  return cacheUtils.get(MARKET_GLOBAL_SEARCH_CACHE_KEY)
}
export function setMarketGlobalSearchCache(data: any[]) {
  return cacheUtils.set(MARKET_GLOBAL_SEARCH_CACHE_KEY, data)
}

/** 行情本地用户配置 */
const MARKET_IS_CLOSED_BANNER_NOTIFACTRION_CACHE_KEY = 'MARKET_IS_CLOSED_BANNER_NOTIFACTRION_CACHE_KEY'
export function getMarketIsClosedBannerNotifactionCache() {
  return cacheUtils.get(MARKET_IS_CLOSED_BANNER_NOTIFACTRION_CACHE_KEY) as boolean
}
export function setMarketIsClosedBannerNotifactionCache(data: boolean) {
  return cacheUtils.set(MARKET_IS_CLOSED_BANNER_NOTIFACTRION_CACHE_KEY, data)
}
const storageSpotFavListKey = 'MARKET_SPOT_FAVOURITE_LIST'
const storageFuturesFavListKey = 'MARKET_FUTUREs_FAVOURITE_LIST'
export function getFavouriteListCache(type: 'spot' | 'futures') {
  return cacheUtils.get(type === 'spot' ? storageSpotFavListKey : storageFuturesFavListKey)
}

export function setFavouriteListCache(type: 'spot' | 'futures', data?: YapiGetV1FavouriteListData[]) {
  cacheUtils.set(type === 'spot' ? storageSpotFavListKey : storageFuturesFavListKey, data)
}

export const KLINE_TRADE_GUIDE_KEY = 'KLINE_TRADE_GUIDE_KEY'

export function getKlineTradeGuideFromCache() {
  const result = cacheUtils.get(KLINE_TRADE_GUIDE_KEY)

  return typeof result === 'boolean' ? result : true
}
/** 设置合约交易是否需要引导动画 */
export function setKlineTradeGuideToCache(result: boolean) {
  return cacheUtils.set(KLINE_TRADE_GUIDE_KEY, result)
}

const HOME_TABLE_TAB = 'HOME_TABLE_TAB'
const HOME_TABLE_FAV_TAB = 'HOME_TABLE_FAV_TAB'

export function getHomeTableSelectedTabFromCache() {
  return cacheUtils.get(HOME_TABLE_TAB)
}

export function setHomeTableSelectedTabToCache(selectedTab: HomeModuleTabsEnum) {
  cacheUtils.set(HOME_TABLE_TAB, selectedTab)
}

export function getHomeTableFavTabFromCache() {
  return cacheUtils.get(HOME_TABLE_FAV_TAB)
}

export function setHomeTableFavTabToCache(FavTab: FavTabs) {
  cacheUtils.set(HOME_TABLE_FAV_TAB, FavTab)
}
