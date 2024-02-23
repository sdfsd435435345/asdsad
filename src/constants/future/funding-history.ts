import { baseFutureTradeStore } from '@/store/trade/future'
import { t } from '@lingui/macro'

export enum FundingHistoryTabIdEnum {
  usdt = 0,
  coin = 1,
}
export enum FundingHistoryTypeEnum {
  fundingRate = 'rate',
  index = 'index',
  // 风险准备金
  insuranceFund = 'insurance-fund',
}
export function getFundingHistoryTabIdEnumName(id: FundingHistoryTabIdEnum): string {
  const { futureCurrencySettings } = baseFutureTradeStore.getState()

  return {
    [FundingHistoryTabIdEnum.usdt]: t({
      id: 'constants_future_funding_history_k2zev70jnk',
      values: { 0: futureCurrencySettings.currencySymbol },
    }),
    [FundingHistoryTabIdEnum.coin]: t`future.funding-history.tabs.coin`,
  }[id]
}

export enum FundingHistoryIndexPriceTypeEnum {
  index = 'indexPrice',
  mark = 'markPrice',
}
export function getFundingHistoryIndexPriceTypeEnumName(id: FundingHistoryIndexPriceTypeEnum): string {
  return {
    [FundingHistoryIndexPriceTypeEnum.index]: t`future.funding-history.index-price.column.index-price`,
    [FundingHistoryIndexPriceTypeEnum.mark]: t`future.funding-history.index-price.column.mark-price`,
  }[id]
}
export enum IndexPriceTableTypeEnum {
  price = 'index',
  ingredient = 'ingredient',
}
export function getIndexPriceTableTypeEnumName(id: IndexPriceTableTypeEnum): string {
  return {
    [FundingHistoryIndexPriceTypeEnum.index]: t`future.funding-history.index-price.column.index-price`,
    [FundingHistoryIndexPriceTypeEnum.mark]: t`future.funding-history.index-price.column.mark-price`,
  }[id]
}
