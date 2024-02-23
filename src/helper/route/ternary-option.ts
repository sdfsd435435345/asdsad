/** 获取交易页面路径 */
export function getTernaryOptionTradePagePath(tradePair: { symbolName?: string }) {
  return tradePair.symbolName ? `/ternary-option/${tradePair.symbolName!}` : '/'
}

/** 获取今日盈亏页面路径 */
export function getTernaryOptionTodayPLPagePath() {
  return `/ternary-option/profit-and-loss`
}

/** 获取历史战绩 */
export function getTernaryOptionHistoryPagePath() {
  return `/option/history`
}
