import { baseUserStore } from '@/store/user'
import { baseCommonStore } from '@/store/common'
import { businessId as businessIdEnv } from '@/helper/env'
import { FusionWhiteRouterApi } from '@/constants/fusion-api'
import { getIsFusionModeCache, getBusinessIdCache, getAccessKeyCache } from '@/helper/cache'

// 聚合判断是否是融合模式的方法
export function getAggregationFusion() {
  const isFusionApi = getIsFusionModeCache() || getAccessKeyCache()
  if (isFusionApi) {
    return true
  }
  return false
}

const keywordBlocking = ['c2c', 'withdraw']

/** 判断路由是否在白名单（融合模式下）* */
export function isRouteInWhileList(pathname: string) {
  const isTrue = keywordBlocking.some(keyword => pathname.includes(keyword))
  if (isTrue) return true
  const whiteList = FusionWhiteRouterApi
  for (let item of whiteList) {
    if (
      pathname === item ||
      (pathname &&
        (pathname.startsWith(`${item}/`) || pathname.startsWith(`${item}?`)) &&
        pathname.length > item.length + 1)
    ) {
      return false
    }
  }
  return true
}

// 融合模式判断路由白名单
export function isRouteInWhitePath(path: string) {
  const { isFusionMode } = baseCommonStore.getState()
  return isFusionMode ? isRouteInWhileList(path) : false
}

// 判断是否为融合模式获取 bid
export function getAggregationBusinessId() {
  return getBusinessIdCache() || businessIdEnv
}

/** 判断当前路由是否带 refreshToken* */
export async function isRouteWithRefreshToken(pageContext) {
  const { isLogin, token, clearUserCacheData } = baseUserStore.getState()
  const {
    isFusionMode,
    restockToken,
    setFusionMode,
    setAccessKey,
    setBusinessId,
    updateMerchantToken,
    setRestockToken,
  } = baseCommonStore.getState()

  const { urlParsed } = pageContext
  const fusionModalToken = urlParsed?.search ?? {}
  /** 参数判断融合模式状态* */
  const { refreshToken, businessId, h5AccessKey } = fusionModalToken
  const isMerge = !!refreshToken && !!businessId && !!h5AccessKey
  /** 进入融合模式后清除 url 参数* */
  const handleParameters = () => history?.pushState({}, '', urlParsed?.pathname)
  /** 设置融合参数并调用接口更新 token* */
  async function handleMergeModeUserInfo() {
    setBusinessId(businessId)
    setAccessKey(h5AccessKey)
    setRestockToken(refreshToken)
    await updateMerchantToken(refreshToken)
    handleParameters()
  }
  /** 判断是否是融合模式并设置状态* */
  !isFusionMode && setFusionMode(isMerge)
  if (refreshToken && businessId && h5AccessKey) {
    if (isLogin) {
      /** 判断刷新 token 是否一致 */
      if (restockToken && restockToken !== refreshToken) {
        clearUserCacheData()
        handleMergeModeUserInfo()
        return
      }
      const date = Date.now()
      /** 判断登录态过期时间 */
      if (token?.refreshTokenExpireTime && date >= Number(token?.refreshTokenExpireTime)) {
        /** 已经过期且是原有标记的商户刷新 token */
        clearUserCacheData()
        handleMergeModeUserInfo()
        return
      }
      return
    }
    handleMergeModeUserInfo()
  }
}
