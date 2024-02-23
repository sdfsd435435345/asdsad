import { t } from '@lingui/macro'

/** 交易方向 */
export enum TradeDirectionEnum {
  buy = 1, // 买入 做多
  sell, // 卖出 做空
}

/** 委托方式 */
export enum EntrustTypeEnum {
  // 限价市价都属于普通委托
  limit = 1, // 限价
  market = 2, // 市价
  plan,
  normal,
  stop,
}

/** 无保证金自动关闭逐仓* */
export enum IsolatedMarginEnum {
  open = 'open', // 开
  close = 'close',
}

export enum EntrustVersion {
  // 专业版
  ProfessionalEdition = 1,
  // 普通版
  OrdinaryEdition = 2,
}

/** 委托止盈止损设置 */
export enum EntrustStopLimitType {
  none,
  stopLoss,
  stopProfit,
  stopProfitAndLoss,
}

export function getEntrustTypeEnumName(type: EntrustTypeEnum) {
  return {
    [EntrustTypeEnum.limit]: t`constants/trade-0`,
    [EntrustTypeEnum.market]: t`constants/trade-1`,
    [EntrustTypeEnum.plan]: t`constants/trade-3`,
  }[type]
}
/**
 * 保证金模式
 */
export enum MarginModeEnum {
  cross = 'cross', // 全仓
  isolated = 'isolated', // 逐仓
}
/** 杠杆交易类型 */
export enum SpotTradeMarginModeEnum {
  /** 普通 */
  normal = 'normal',
  /** 自动借款 */
  borrow = 'borrow',
  /** 自动还款 */
  repay = 'repay',
}
/**
 * 交易布局
 */
export enum LayoutEnum {
  left = 'left',
  right = 'right',
  vertical = 'vertical',
}
/** 交易单位 */
export enum TradeUnitEnum {
  usdt = 'usdt',
  /** 张 */
  a = 1,
  /** 计价币种  */
  quote = 2,
  /** 标的币种 */
  indexBase = 3,
}
export enum TradeModeEnum {
  /** 现货交易 */
  spot = 'spot',
  /** 合约交易 */
  futures = 'futures',
  /** 杠杆交易 */
  margin = 'margin',
}
export const getTradeModeMap = () => {
  return {
    [TradeModeEnum.spot]: t`constants/trade-4`,
    [TradeModeEnum.futures]: t`constants/trade-5`,
    [TradeModeEnum.margin]: t`constants/trade-6`,
  }
}

export enum FutureMarginModeEnum {
  /** 下单可用账户资产做保证金，类似于全仓 */
  cross = 'cross',
  /** 下单资金做额外保证金，类似于逐仓 */
  isolated = 'isolated',
}

export enum TradePriceTypeEnum {
  /** 最新价 */
  latest = 2,
  /** 标价价格 */
  mark = 1,
}
export enum TradePriceTypeInReqEnum {
  /** 最新价 */
  latest = 'new',
  /** 标价价格 */
  mark = 'mark',
}
export function getTradePriceTypeEnumName(type: TradePriceTypeEnum) {
  return {
    [TradePriceTypeEnum.latest]: t`constants/trade-7`,
    [TradePriceTypeEnum.mark]: t`constants/trade-8`,
  }[type]
}
export function getTradePriceTypeEnumName2(type: TradePriceTypeEnum) {
  return {
    [TradePriceTypeEnum.latest]: t`constants_trade_752`,
    [TradePriceTypeEnum.mark]: t`future.funding-history.index-price.column.mark-price`,
  }[type]
}

export enum TradeMarginCoinTypeEnum {
  /** 美元稳定版 */
  usdt = 0,
  /** 其它虚拟币 */
  other = 1,
}
export function getTradeMarginCoinTypeEnumName(type: TradeMarginCoinTypeEnum) {
  return {
    [TradeMarginCoinTypeEnum.usdt]: t`constants/trade-9`,
    [TradeMarginCoinTypeEnum.other]: t`constants/trade-10`,
  }[type]
}
export enum FutureTradeUnitEnum {
  usdt = 'usdt',
  /** 张 */
  a = 1,
  /** U */
  quote = 2,
  /** 标的币种 */
  indexBase = 3,
}
/** usd 计算精度 */
export const USD_PRECISION = 2

export enum SpotNormalOrderMarketUnitEnum {
  /** 交易额 */
  amount = 'funds',
  /** 委托数量 */
  entrustAmount = 'amount',
}

export enum SpotPlanTriggerDirection {
  up = 1,
  down = 2,
}
export enum FuturePlanTriggerDirection {
  up = 'up',
  down = 'down',
}
/** 开盘状态 */
export enum SpotStopStatusEnum {
  /** 未开放 */
  disabled = 0,
  /** 交易中 */
  trading = 1,
  /** 已停盘 */
  stopped = 2,
  /** 可预约 */
  appoint = 3,
}
/** 手续费页面 tab 类型 */
export enum HelpFeeTabTypeEnum {
  /** 提现 */
  withdraw = 1,
  /** 现货 */
  spot,
  /** 合约 */
  futures,
}

export enum TradeLayoutEnum {
  default = 'default',
  left = 'left',
  right = 'right',
}

export enum TradeFutureOrderDirectionEnum {
  openBuy = 'open_long',
  openSell = 'open_short',
  closeBuy = 'close_long',
  closeSell = 'close_short',
}
/** 用于请求参数 */
export enum TradeFutureNormalEntrustTypeEnum {
  limit = 'limit',
  market = 'market',
}
export enum TradeFutureNormalOrderTypeIndEnum {
  limit = 'limit_order',
  market = 'market_order',
  liquidation = 'force_liquidation_order',
  /** 强减 */
  lighten = 'force_lighten_order',
}
export const TradeUnitInReqEnum = {
  [TradeUnitEnum.indexBase]: 'BASE',
  [TradeUnitEnum.quote]: 'QUOTE',
}
/** 合约保证金来源 */
export enum TradeFutureMarginTypeInReqEnum {
  /** 账户资金 */
  assets = 'wallet',
  /** 当前合约组的额外保证金 */
  group = 'group',
  /** 资金账户 */
  wallet = 'wallet',
}

/** 合约额外保证金来源 */
export enum TradeFutureExtraMarginTypeInReqEnum {
  /** 账户资金 */
  assets = 'assets',
  /** 当前订单保证金 */
  order = 'open_funds',
}
/** 用户当前开启合约状态 */
export enum UserFuturesTradeStatus {
  open = 1,
  close = 2,
}
/** 价差保护 */
export enum PriceProtectTypeEnum {
  open = 'open', // 开启
  close = 'close',
}

/** 个人偏好设置状态* */
export enum PersonProtectTypeEnum {
  open = 'yes', // 是
  close = 'no',
}

/** 保证金来源* */
export enum MarginModeSettingEnum {
  wallet = 'wallet', // 资金账户
  group = 'group',
}

/** 个人保证金* */
export enum FutureSettingPEnum {
  auto = 'auto',
  manual = 'manual',
}

export enum AdjustmentMarginTypeEnum {
  open = 'true', // 是
  close = 'false',
}

/** 自动追加保证金档位 */
export enum GearEnum {
  low = 0.7, // 低档
  middle = 0.85, // 中档
  high = 1, // 高档
}

export enum UserContractVersionEnum {
  base = 2, // 基础版
  professional = 1, // 专业版
}

/** 是否开通合约* */
export enum contractStatusIndEnum {
  yes = 1, // 开通
  no = 2, // 未开通
}

/** 追加保证金记录自动/手动* */
export enum MarginRecordStatusEnum {
  auto = 'auto', // 自动
  handler = 'handler',
}

/** 偏好设置跳转* */
export enum ContractPreferencesTermsEnum {
  marginProtection = 'margin_protection', // 价差保护
  contractTeachPro = 'contract_teach_pro', // 合约开通专业版教程
  contractTeachNormal = 'contract_teach_normal', // 合约开通普通版教程
}

export enum HelpCenterSearchEnum {
  support = '1', // 常见问题
  notice = '2', // 公告中心
  all = '3', // 全部
}

export enum TradeUnitTextEnum {
  BASE = 'BASE', // 标的币
  QUOTE = 'QUOTE', // 计价币
}
