import { getAreaList } from '@/apis/c2c/common'
import { getMarketTicker } from '@/apis/market'
import { C2CAreaListResp } from '@/typings/api/c2c/common'
import { YapiGetV1TradePairDetailData } from '@/typings/yapi/TradePairDetailV1GetApi'
import dayjs from 'dayjs'

/** 仅用于服务端存储 */
type ICache<T = any> = {
  data: T
  /** 过期时间 */
  expireAt: number
}
const CACHE_KEYS = {
  c2cAreaList: 'c2cAreaList',
  spotTradePair: 'spotTradePair',
}
// 目前缓存在内存中即可
const cache = {
  [CACHE_KEYS.c2cAreaList]: {} as ICache<C2CAreaListResp[]>,
}

export function setServerCache(key: string, data: any, expireAt: number) {
  cache[key] = {
    data,
    expireAt,
  }
}

export function getServerCache(key: string): any {
  const currentCache = cache[key]
  if (!currentCache) return null
  const { data, expireAt } = currentCache
  if (Date.now() > expireAt) {
    return null
  }
  return data
}

export async function getServerCacheC2cAreaList(): Promise<C2CAreaListResp[]> {
  const coins = getServerCache(CACHE_KEYS.c2cAreaList)
  if (coins) return coins
  const areaRes = await getAreaList({})
  if (!areaRes.isOk || !areaRes.data) {
    return []
  }
  // 区域列表 3 小时缓存 1 次即可
  setServerCache(CACHE_KEYS.c2cAreaList, areaRes.data, dayjs().add(3, 'h').toDate().getTime())

  return areaRes.data
}
export async function getServerCacheSpotTradePair(symbol: string): Promise<YapiGetV1TradePairDetailData | null> {
  const key = `${CACHE_KEYS.spotTradePair}_${symbol}`
  const data = getServerCache(key)
  if (data) return data
  const res = await getMarketTicker({ symbol })
  if (!res.isOk || !res.data) {
    return null
  }
  // 现货币对详情 1d 一次即可，只是用名字，这个不怎么会变
  setServerCache(key, res.data, dayjs().add(1, 'd').toDate().getTime())

  return res.data
}
