/** 基本信息菜单* */
export enum C2cCenterMenuEnum {
  peopleServed = '1', // 服务人数
  totalSingular = '2', // 总单数
  completionRate = '3', // 完成率
  transaction = '4', // 交易总额
  paymentTime = '5', // 平均付款时间
  depositTimeInside = '6', // 平均放币时间 (站内)
  depositTimeOff = '7', // 平均放币时间 (站外)
}

export enum C2cCenterMenuTypeEnum {
  peopleServed = 'customerCnt', // 服务人数
  totalSingular = 'orderCount', // 总单数
  completionRate = 'completedOrderRate', // 完成率
  transaction = 'totalOrderAmount', // 交易总额
  paymentTime = 'avgPayTime', // 平均付款时间
  depositTimeInside = 'avgConfirmTimeInside', // 平均放币时间 (站内)
  depositTimeOff = 'avgConfirmTimeOutside', // 平均放币时间 (站外)
}

/** 是否是商户* */
export enum C2cCenterMerchantEnum {
  yes = 1, // 是
  no = 2,
}

/** kyc 认证* */
export enum C2cCenterKycAttestationEnum {
  not = 1, // 未认证
  personalStandard, // 个人标准认证
  personalAdvanced, // 个人高级认证
  enterprise, // 企业认证
}

export enum C2cCenterListEnum {
  account = '1', // c2c 账户
  attention = '2', // 我的关注
  blacklist = '3', // 黑名单
}

export enum TabPaymentsEnum {
  makeCollections = '1', // 收款账号
  payMoney = '2', // 付款方式
}

export enum C2cPayMoneyTypeEnum {
  BANK = 'BANK', // 银行卡
  ALIPAY = 'ALIPAY', // 支付宝
  WECHAT = 'WECHAT', // 微信支付
  PAYPAL = 'PAYPAL', // paypal
}

export enum PayMoneyEnum {
  bankCard = '1', // 银行卡
  alipay = '2', // 支付宝
  wxPay = '3', // 微信支付
  paypal = '4', // paypal
}

export enum C2cCenterStatusEnum {
  order = 1,
  rest,
  system,
  setUp,
}

export enum C2cStatusEnum {
  yes = 1, // 可接单
  no = 2, // 休息
}

export enum C2CSetUpEnum {
  none,
  text,
  image,
  noSet,
}

export enum C2cWeekEnum {
  Monday = '1',
  Tuesday = '2',
  Wednesday = '3',
  Thursday = '4',
  Friday = '5',
  Saturday = '6',
  Sunday = '0',
}

export enum C2cDirectionEnum {
  buy = 'BUY', // 买
  sell = 'SELL', // 卖
}

export enum C2cBusinessDataEnum {
  inside = 'INSIDE',
  outside = 'OUTSIDE', // 站外交易
}

export enum C2cBlackTypeEnum {
  Monday = 'REASON_1',
  Tuesday = 'REASON_2',
  Wednesday = 'REASON_3',
  Thursday = 'REASON_4',
  Friday = 'REASON_5',
  Saturday = 'OTHER',
}

export enum C2cPaymentsEnabledEnum {
  disEnabled,
  enabled,
}

export enum C2cPaymentsStatusCdEnum {
  DISABLE = 'DISABLE',
  ENABLE = 'ENABLE', // 可交易
}

export enum C2cFundsTransfer {
  c2c = 1,
  asstes, // 交易转 c2c
}

export enum C2cFastPayTransferTypeEnum {
  /** 转到交易 */
  wallet = 'monkey',
  /** 转到 fastpay */
  c2c = 'fastPay',
}

export enum PaymentDetailsEnum {
  unbind = 'unbind', // 解绑
  modify = 'modify', // 修改
}

export enum C2CImageSizeEnum {
  MaxSize = 5 * (1024 * 1024),
  MinSize = 10 * 1024,
}

export enum C2cAccountEnum {
  ZERO_LENGTH,
  ONE_LENGTH,
  ZERO_STRING = '0',
  ONE_STRING = '1',
}

export enum C2cUntieEnum {
  pass = '1', // 通过
  refuse = '2', // 拒绝
  other = '3', // 其他
}
