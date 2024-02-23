import { OrderTabTypeEnum } from '@/constants/order'
import { EntrustTypeEnum, TradeModeEnum } from '@/constants/trade'

/** 获取交易页面路径 */
export function getTradePagePath(tradePair: { symbolName?: string }) {
  return tradePair.symbolName ? `/trade/${tradePair.symbolName!}` : '/'
}
/** 获取币対详情页面路径 */
export function getMarketDetailPagePath(tradePair: { symbolName?: string }) {
  return tradePair.symbolName ? `/market/detail/${tradePair.symbolName!}` : '/'
}

/** 获取现货订单页面路径 */
export function getSpotOrderPagePath(tab: OrderTabTypeEnum, entrustType?: EntrustTypeEnum) {
  return `/orders/spot/${tab}${entrustType ? `?type=${entrustType}` : ''}`
}

export function getSpotNotificationPagePath() {
  return `/trade/settings/notification/${TradeModeEnum.spot}`
}

export function getMarketSpotFavPage() {
  return '/markets/spot'
}
