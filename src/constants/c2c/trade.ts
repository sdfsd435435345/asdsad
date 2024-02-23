import { t } from '@lingui/macro'

export enum C2cTradeAdOnlineStatusEnum {
  online = 'online',
  offline = 'offline',
  busy = 'busy',
}

export enum C2cTradeAdDirectionEnum {
  // 对于买家来说，是卖家的广告
  buy = 'SELL',
  sell = 'BUY',
  handicap = 'HANDICAP',
}
/** 交易类型 */
export enum C2cTradeFilterTradeWayEnum {
  inside = 'INSIDE',
  all = 'ALL',
  outside = 'OUTSIDE',
}
/** 广告类型 */
export enum C2cTradeFilterAdTypeEnum {
  onlyEnabled = 'CAN_TRADE',
  traded = 'HAS_TRADE',
  followed = 'FOLLOWED',
}
/** 购买方式 */
export enum C2cTradeFilterBuyWayEnum {
  /** 按金额 */
  amount = 'AMOUNT',
  /** 按数量 */
  count = 'NUMBER',
}
/** 排序方式 */
export enum C2cTradeFilterOrderByEnum {
  orderCount = 'ORDER_NUM',
  orderSucceedCount = 'ORDER_RATE',
}

export enum C2cTradeAdPaymentEnum {
  alipay = 'ALIPAY',
  wechat = 'WECHAT',
  bank = 'BANK',
  other = 'other',
  paypal = 'paypal',
}
export function getC2cTradeAdPaymentEnumName(value: C2cTradeAdPaymentEnum) {
  return {
    [C2cTradeAdPaymentEnum.alipay]: t`features_trade_future_c2c_25101578`,
    [C2cTradeAdPaymentEnum.wechat]: t`features_message_center_index_5101361`,
    [C2cTradeAdPaymentEnum.bank]: t`features_c2c_payments_component_pay_popup_index_22222222225101692`,
    [C2cTradeAdPaymentEnum.paypal]: 'PayPal',
  }[value]
}

export enum C2cTradeCheckCodeEnum {
  kyc = 10106005,
  /** kyc 等级限制 */
  kycLevel = 10106001,
  /** kyc 额度限制 */
  kycAmount = 10106003,
  /** 支付方式 */
  payment = 10107001,
  /** 重置密码 */
  resetPassword = 10109006,
  /** 重置安全验证 */
  resetSecurity = 10109007,
  /** 风控 */
  risk = 20000008,
}
export enum C2cTradeBestPriceCodeEnum {
  notMatched = 10109014,
}

export enum C2cFastTradeSellPaymentStatus {
  exist = 'exist',
  unopened = 'unopened',
  unbound = 'unbound',
}

/** c2c 广告不可交易原因 */
export enum C2cTradeAdReasonEnum {
  kyc = 'NEED_ELEMENTARY',
  kycSenior = 'NEED_SENIOR',
  kycEnterprise = 'NEED_ENTERPRISE',
  orderCount = 'NEED_COMPLETED_COUNT',
}

export enum C2cKycLevelStrEnum {
  NONE = 'NONE',
  ELEMENTARY = 'ELEMENTARY',
  SENIOR = 'SENIOR',
  ENTERPRISE = 'ENTERPRISE',
}
export const C2cKycLevelNumberEnum = {
  [C2cKycLevelStrEnum.NONE]: 1,
  [C2cKycLevelStrEnum.ELEMENTARY]: 2,
  [C2cKycLevelStrEnum.SENIOR]: 3,
  [C2cKycLevelStrEnum.ENTERPRISE]: 4,
}

export function getC2cKycLevelStrEnumName(value: C2cKycLevelStrEnum) {
  return {
    [C2cKycLevelStrEnum.NONE]: t`user.personal_center_03`,
    [C2cKycLevelStrEnum.ELEMENTARY]: t`features_kyc_index_5101110`,
    [C2cKycLevelStrEnum.SENIOR]: t`features_kyc_index_5101111`,
    [C2cKycLevelStrEnum.ENTERPRISE]: t`features_kyc_index_5101112`,
  }[value]
}
