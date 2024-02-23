/** 跳转已失效/已使用页面 */
export function getExpirePage(type?: string) {
  if (type) {
    return `/welfare-center/expired?type=${type}`
  }
  return `/welfare-center/expired`
}
/** 跳转现货页面 */
export function getTradePage() {
  return `/trade/BTCUSDT`
}
/** 跳转合约页面 */
export function getFuturesPage() {
  return `futures/BTCUSD`
}
/** 跳转现货订单详情页面 */
export function getTradeDetailPage(srcId: number) {
  return `/my/orders/detail/${srcId}`
}
/** 跳转合约页面 */
export function getFuturesDetailPage(srcId: number) {
  return `/assets/futures/details/${srcId}`
}
