import { t } from '@lingui/macro'

/** 交易对类型 */
export enum TradeCoinTypeEnum {
  // 永续
  perpetual = 'perpetual',
}
export function getTradeCoinTypeEnumName(type: TradeCoinTypeEnum) {
  return {
    [TradeCoinTypeEnum.perpetual]: t`assets.enum.tradeCoinType.perpetual`,
  }[type]
}

/** 交易记录类型 */
export enum TradeRecordTypeEnum {
  deposit = 'deposit',
  withdraw = 'withdraw',
  other = 'other',
}
export function getTradeRecordTypeEnumName(type: TradeRecordTypeEnum) {
  return {
    [TradeRecordTypeEnum.deposit]: t`assets.enum.tradeRecordType.deposit`,
    [TradeRecordTypeEnum.withdraw]: t`assets.enum.tradeRecordType.withdraw`,
    [TradeRecordTypeEnum.other]: t`assets.enum.tradeRecordType.other`,
  }[type]
}
