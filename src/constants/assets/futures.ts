/**
 * 合约组
 */
import { t } from '@lingui/macro'
import { MarginModeSettingEnum } from '../trade'

/**
 * 资产总览 - 合约 tab 类型
 */
export enum FuturesOverviewTabTypeEnum {
  /** 逐仓 */
  isolated = 'isolated',
  /** 资产 */
  assets = 'assets',
}

/**
 * 合约组资产排序
 */
export enum FuturesAssetsSortEnum {
  /** 升序 */
  up = 'up',
  /** 降序 */
  down = 'down',
}

/**
 * 合约组类型
 */
export enum FuturesAssetsTypeEnum {
  /** 仅看正收益 */
  just = 'just',
  /** 仅看负收益 */
  negative = 'negative',
}

/**
 *合约组类型名称
 */
export function getFuturesAssetsTypeName(type: string | number) {
  return {
    [FuturesAssetsTypeEnum.just]: t`constants/assets/futures-0`,
    [FuturesAssetsTypeEnum.negative]: t`constants/assets/futures-1`,
  }[type]
}

/**
 * 合约组记录 tab
 */
export enum FuturesHistoryTabEnum {
  /** 合约组记录 */
  futures = 'futures',
  /** 保证金记录 */
  margin = 'margin',
}

/**
 * 合约 - 止盈止损弹窗 tab
 */
export enum StopLimitTabEnum {
  /** 止盈止损 */
  stopLimit = 1,
  /** 仓位止盈止损 */
  positionStopLimit,
}

/**
 * 合约 - 止盈止损触发价格类型
 */
export enum StopLimitTriggerPriceTypeEnum {
  /** 最新价格 */
  new = 'new',
  /** 标记价格 */
  mark = 'mark',
}

export const getStopLimitTriggerPriceTypeName = (type: string) => {
  return {
    [StopLimitTriggerPriceTypeEnum.mark]: t`future.funding-history.index-price.column.mark-price`,
    [StopLimitTriggerPriceTypeEnum.new]: t`constants_trade_752`,
  }[type]
}

/**
 * 合约 - 委托价格类型
 */
export enum StopLimitEntrustTypeEnum {
  /** 市价 */
  market = 'market',
  /** 限价 */
  limit = 'limit',
}

export const getStopLimitEntrustTypeName = (type: string) => {
  return {
    [StopLimitEntrustTypeEnum.market]: t`features/trade/future/price-input-3`,
    [StopLimitEntrustTypeEnum.limit]: t`features_orders_future_holding_close_680`,
  }[type]
}

/**
 * 合约 - 触发方向类型
 */
export enum StopLimitTriggerDirectionEnum {
  /** 向上 */
  up = 'up',
  /** 向下 */
  down = 'down',
}

/**
 * 合约 - 策略类型类型
 */
export enum StopLimitStrategyTypeEnum {
  /** 止盈 */
  stopProfit = 'stop_profit',
  /** 止损 */
  stopLoss = 'stop_loss',
}

/**
 * 合约 - 合约组详情 - 图表 tab
 */
export enum FuturesDetailsChartTabEnum {
  /** 资金占比 */
  assets = 0,
  /** 保证金占比 */
  bail,
  /** 持仓资产风险占比 */
  positionAssetRisk,
}

/**
 * 合约 - 仓位类型
 */
export enum FuturesDetailsPositionTypeEnum {
  /** 多仓位 */
  long = 'long',
  /** 空仓位 */
  short = 'short',
}

/**
 * 合约 - 仓位类型名称
 */
export const getFuturesPositionTypeName = (type: string) => {
  return {
    [FuturesDetailsPositionTypeEnum.long]: t`features_trade_future_exchange_order_619`,
    [FuturesDetailsPositionTypeEnum.short]: t`features_trade_future_exchange_order_620`,
  }[type]
}

/**
 * 合约 - 持仓列表 - 仓位状态
 */
export enum FuturesPositionStatusTypeEnum {
  /** 已开仓 */
  opened = 'opened',
  /** 已关闭 */
  closed = 'closed',
  /** 锁仓中 */
  locked = 'locked',
}

/**
 * 合约 - 合约类型
 */
export enum FuturesGroupTypeEnum {
  /** 永续 */
  perpetual = 'perpetual',
  /** 交割 */
  delivery = 'delivery',
}

/**
 * 合约 - 合约类型名称
 */
export const getFuturesGroupTypeName = (type: string) => {
  return {
    [FuturesGroupTypeEnum.perpetual]: t`assets.enum.tradeCoinType.perpetual`,
    [FuturesGroupTypeEnum.delivery]: t`constants_market_market_list_market_module_index_5101361`,
  }[type]
}

/**
 * 合约 - 合约保证金动作类型
 */
export enum FuturesOperationTypeEnum {
  /** 手动 */
  handler = 'handler',
  /** 自动 */
  auto = 'auto',
}

/**
 * 合约 - 合约保证金动作类型名称
 */
export const getFuturesOperationTypeName = (type: string) => {
  return {
    [FuturesOperationTypeEnum.handler]: t`constants_order_750`,
    [FuturesOperationTypeEnum.auto]: t`constants_order_751`,
  }[type]
}

/**
 * 合约 - 持仓 - 订单类型
 */
export enum FuturesOrderTypeEnum {
  /** 限价委托单 */
  limitOrder = 'limit_order',
  /** 市价委托单 */
  marketOrder = 'market_order',
  /** 强平委托单 */
  forcedLiquidationOrder = 'forced_liquidation_order',
  /** 强减委托单 */
  forcedLightenOrder = 'forced_lighten_order',
}

/**
 * 合约 - 持仓 - 订单方向类型
 */
export enum FuturesOrderSideTypeEnum {
  /** 开多 */
  openLong = 'open_long',
  /** 开空 */
  openShort = 'open_short',
  /** 平多 */
  closeLong = 'close_long',
  /** 平空 */
  closeShort = 'close_short',
}

/**
 * 合约 - 持仓 - 市价单单位
 */
export enum FuturesMarketUnitTypeEnum {
  /** 按金额 */
  amount = 'amount',
  /** 按数量 */
  quantity = 'quantity',
}

/**
 * 合约 - 持仓 - 下单选择币种类型
 */
export enum FuturesPlaceUnitTypeEnum {
  /** 标的币 */
  base = 'BASE',
  /** 计价币 */
  quote = 'QUOTE',
}

/**
 * 合约 - 持仓 - 是否自动追加保证金类型
 */
export enum FuturesAutoAddMarginTypeEnum {
  /** 是 */
  yes = 'yes',
  /** 否 */
  no = 'no',
}

/**
 * 合约 - 持仓 - 止盈止损操作类型
 */
export enum StrategyOptionTypeEnum {
  /** 分批 */
  part = 'part',
  /** 仓位 */
  position = 'position',
}

/**
 * 合约 - 持仓 - 操作按钮 type
 */
export enum PositionOperateTypeEnum {
  /** 迁移 */
  migrate = 'migrate',
  /** 一键反向 */
  reverse = 'reverse',
  /** 平仓 */
  close = 'close',
  /** 止盈止损 */
  strategy = 'strategy',
}

/**
 * 合约组详情-tab
 */
export enum FuturesDetailsTabEnum {
  /** 持仓详情 */
  position = 'position',
  /** 保证金列表 */
  margin = 'margin',
}
/**
 * 合约组 API 错误码
 */
export enum FuturesErrorEnum {
  noGroup = 10096004,
}

/**
 * 合约迁移类型
 */
export enum PerpetualMigrateTypeEnum {
  /** 合组 */
  merge = 'merge',
  /** 迁移 */
  migrate = 'migrate',
}

/**
 * 保证金币种汇率类型
 */
export enum PerpetualMigrateRateTypeEnum {
  /** 固定 */
  fixed = 'fixed',
  /** 浮动 */
  float = 'float',
}

/**
 * 合约订单是否接管单
 */
export enum PerpetualOrderAcceptTypeEnum {
  /** 接管单 */
  yes = 1,
  /** 非接管单 */
  no,
}

/**
 * 合约组保证金币种数量类型
 */
export enum MarginAssetTypeEnum {
  /** 保证金币种总数量 */
  totalAmount = 'totalAmount',
  /** 保证金币种冻结数量 */
  lockAmount = 'lockAmount',
  /** 保证金币种可用数量 */
  availableAmount = 'availableAmount',
}
