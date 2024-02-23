import { FundingHistoryTabIdEnum, FundingHistoryTypeEnum } from '@/constants/future/funding-history'
import { OrderTabTypeEnum } from '@/constants/order'
import { EntrustTypeEnum, TradeModeEnum } from '@/constants/trade'

/** 获取合约币対详情页面路径 */
export function getContractMarketDetailPagePath(tradePair: { symbolName?: string }) {
  return tradePair.symbolName ? `/market/futures/detail/${tradePair.symbolName!}` : '/'
}
/** 获取合约交易页面路径 */
export function getFutureTradePagePath(tradePair: { symbolName?: string; selectGroup?: string }) {
  let url = tradePair.symbolName ? `/futures/${tradePair.symbolName!}` : '/'
  if (tradePair.selectGroup) url += `?selectgroup=${tradePair.selectGroup}`

  return url
}
/** 获取合约订单页面路径 */
export function getFuturePagePath(tab: OrderTabTypeEnum, entrustType?: EntrustTypeEnum) {
  return `/orders/future/${tab}${entrustType ? `?type=${entrustType}` : ''}`
}
/** 获取开通合约交易页面路径 */
export function getOpenFuturePagePath() {
  return '/future/questionnaire'
}
type IGetFutureFundingRatePagePathParams = {
  type?: FundingHistoryTypeEnum
  tradeId?: any
  tab?: FundingHistoryTabIdEnum
}
/** 获取合约资金费率页面路径 */
export function getFutureFundingRatePagePath({
  type = FundingHistoryTypeEnum.fundingRate,
  tab = FundingHistoryTabIdEnum.usdt,
  tradeId,
}: IGetFutureFundingRatePagePathParams) {
  return `/futures/funding-history/${tab === FundingHistoryTabIdEnum.usdt ? '' : 'quarterly/'}${type}?tradeId=${
    tradeId || ''
  }`
}
export function getFutureNotificationPagePath() {
  return `/trade/settings/notification/${TradeModeEnum.futures}`
}
export function getFutureComputerPagePath() {
  return `/future/calculator`
}

export function getMarketFuturesFavPage() {
  return '/markets/futures'
}
