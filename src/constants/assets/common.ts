import { t } from '@lingui/macro'

/**
 * 资产 - 币种选择类型
 */
export enum AssetsSelectCoinTypeEnum {
  /** 提币 */
  withdraw = 'withdraw',
  /** 充值 */
  recharge = 'recharge',
}

/**
 * 财务记录 - 公共 - 类型
 */
export enum AssetsRecordTypeEnum {
  /** 全部 */
  all = '',
  /** 充值 */
  recharge = 201,
  /** 提币 */
  extract = 202,
  /** Pay */
  pay = 203,
  /** 冲正 */
  reversal = 204,
  /** C2C 赔付 */
  spotCompensate = 205,
  /** 划转 */
  spotTransfer = 206,
  /** 现货提取保证金 */
  spotExtractBond = 207,
  /** 现货充值保证金 */
  spotRechargeBond = 208,
  /** 交易 - 合约划转 */
  spotFuturesTransfer = 209,
  /** 现货手续费 */
  spotCommission = 501,
  /** 合约手续费 */
  futuresCommission = 502,
  /** 提币手续费 */
  extractCommission = 503,
  /** 锁仓手续费 */
  LockPositionCommission = 504,
  /** 开仓手续费 */
  openPositionFee = 401,
  /** 平仓手续费 */
  closePositionFee = 402,
  /** 平仓盈亏 */
  closePositionPnl = 403,
  /** 强制平仓 */
  liquidation = 404,
  /** 强制减仓 */
  compulsoryReduction = 405,
  /** 资金费用 */
  fundsFee = 406,
  /** 提取保证金 */
  extractBond = 407,
  /** 充值保证金 */
  rechargeBond = 408,
  /** 锁仓手续费 */
  futuresLockPositionCommission = 409,
  /** 迁移 */
  migrate = 410,
  /** 强平手续费 */
  forcedClosePositionFee = 411,
  /** 穿仓保险金注入 */
  benefitsInjection = 412,
  /** 合约划转 */
  futuresTransfer = 413,
  /** 现货手续费返佣 */
  spotFee = 801,
  /** 合约手续费返佣 */
  futuresFee = 802,
  /** 借币利息返佣 */
  loanInterest = 803,
  /** C2C 划转 */
  c2cTransfer = 901,
  /** PAY */
  c2cPay = 902,
  /** C2C 赔付 */
  c2cCompensate = 903,
  /** 融合商户用户入金 */
  fusionRecharge = 210,
  /** 融合商户用户出金 */
  fusionExtract = 211,
}

/**
 * 财务记录 - 合约相关划转类型
 */
export const AssetsTransferTypeList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.spotFuturesTransfer,
  AssetsRecordTypeEnum.futuresTransfer,
  AssetsRecordTypeEnum.migrate,
]

/**
 * 财务记录 - C2C 类型
 * @type C2C：划转/PAY/C2C 赔付
 * @type 充提：划转/C2C 赔付
 */
export const RecordC2CTypeList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.c2cTransfer,
  AssetsRecordTypeEnum.c2cPay,
  AssetsRecordTypeEnum.c2cCompensate,
  AssetsRecordTypeEnum.spotCompensate,
  AssetsRecordTypeEnum.spotTransfer,
]

/**
 * 财务记录 - 合约类型
 * @type 开仓手续费/平仓手续费/平仓盈亏/强制平仓/强制减仓/资金费用/划转/锁仓手续费/迁移/强平手续费/穿仓保险金注入
 */
export const RecordFuturesTypeList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.openPositionFee,
  AssetsRecordTypeEnum.closePositionFee,
  AssetsRecordTypeEnum.closePositionPnl,
  AssetsRecordTypeEnum.liquidation,
  AssetsRecordTypeEnum.compulsoryReduction,
  AssetsRecordTypeEnum.fundsFee,
  AssetsRecordTypeEnum.extractBond,
  AssetsRecordTypeEnum.rechargeBond,
  AssetsRecordTypeEnum.futuresLockPositionCommission,
  AssetsRecordTypeEnum.migrate,
  AssetsRecordTypeEnum.forcedClosePositionFee,
  AssetsRecordTypeEnum.benefitsInjection,
  AssetsRecordTypeEnum.futuresTransfer,
]

/**
 * 财务记录 - 返佣模块
 */
export const RecordCommissionTypeList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.spotFee,
  AssetsRecordTypeEnum.futuresFee,
  AssetsRecordTypeEnum.loanInterest,
]

/**
 * 财务记录-充值/提取保证金
 *
 */
export const RecordExtractBondTypeList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.spotExtractBond,
  AssetsRecordTypeEnum.spotRechargeBond,
  AssetsRecordTypeEnum.extractBond,
  AssetsRecordTypeEnum.rechargeBond,
  AssetsRecordTypeEnum.futuresTransfer,
]

/**
 * 财务记录 - 融合模式
 */
export const RecordFusionTypeList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.fusionRecharge,
  AssetsRecordTypeEnum.fusionExtract,
]

/**
 * 财务记录详情 - 展示费用明细模块类型列表
 * @type 资金费用/强平手续费/开仓手续费/平仓手续费/平仓盈亏/锁仓手续费
 */
export const RecordExpenseDetailsList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.fundsFee,
  AssetsRecordTypeEnum.forcedClosePositionFee,
  AssetsRecordTypeEnum.openPositionFee,
  AssetsRecordTypeEnum.closePositionFee,
  AssetsRecordTypeEnum.closePositionPnl,
  AssetsRecordTypeEnum.futuresLockPositionCommission,
]

/**
 * 财务记录详情 - 展示成交明细模块类型列表
 * @type 强制平仓/强制减仓
 */
export const RecordTransactionDetailsList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.liquidation,
  AssetsRecordTypeEnum.compulsoryReduction,
]

/**
 * 财务记录详情 - 展示成交明细模块类型列表
 * @type 充值/冲正/提币/pay
 */
export const RecordRechargeTypeList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.recharge,
  AssetsRecordTypeEnum.reversal,
  AssetsRecordTypeEnum.extract,
  AssetsRecordTypeEnum.pay,
]

/**
 * 财务记录详情 - 手续费模块类型列表
 * @type 现货手续费/合约手续费/锁仓手续费/提币手续费
 */
export const RecordFeeTypeList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.spotCommission,
  AssetsRecordTypeEnum.futuresCommission,
  AssetsRecordTypeEnum.LockPositionCommission,
  AssetsRecordTypeEnum.extractCommission,
]

/**
 * 财务记录详情 - 返佣类型列表
 * @type 现货手续费返佣/合约手续费返佣/借币利息返佣
 */
export const RecordRebateTypeList: AssetsRecordTypeEnum[] = [
  AssetsRecordTypeEnum.spotFee,
  AssetsRecordTypeEnum.futuresFee,
  AssetsRecordTypeEnum.loanInterest,
]

/**
 * 财务记录 - 筛选 - 时间类型
 */
export enum AssetsRecordDateTypeEnum {
  /** 最近 1 天 */
  day = 1,
  /** 最近 1 周 */
  week = 7,
  /** 最近 1 月 */
  month = 30,
  /** 最近 3 月 */
  threeMonths = 90,
}

/**
 * 财务记录 - 交易方向
 */
export enum TransactionDirectionEnum {
  /** 做多 */
  buy = 'buy',
  /** 做空 */
  sell = 'sell',
  /** 平多 */
  flatBuy = 'flatBuy',
  /** 平空 */
  flatSell = 'flatSell',
}

/**
 * 财务记录 - 交易方向名称
 */
export const getTransactionDirectionName = (type: TransactionDirectionEnum) => {
  return {
    [TransactionDirectionEnum.buy]: t`constants/assets/common-21`,
    [TransactionDirectionEnum.sell]: t`constants/assets/common-22`,
    [TransactionDirectionEnum.flatBuy]: t`constants/assets/common-23`,
    [TransactionDirectionEnum.flatSell]: t`constants/assets/common-24`,
  }[type]
}

/**
 * 财务记录 - 委托类型
 */
export enum DelegationTypeEnum {
  /** 限价委托 */
  limitOrder = 1,
  /** 市价委托 */
  marketOrder,
  /** 计划委托 */
  planDelegation,
  /** 市价止盈 */
  marketTargetProfit,
  /** 限价止盈 */
  limitTargetProfit,
  /** 市价止损 */
  marketStopLoss,
  /** 限价止损 */
  limitStopLoss,
  /** 强平 */
  liquidation,
  /** 强减 */
  forcedDecrement,
}

/**
 * 财务记录 - 委托类型名称
 */
export const getDelegationTypeName = (type: DelegationTypeEnum) => {
  return {
    [DelegationTypeEnum.marketOrder]: t`constants/trade-1`,
    [DelegationTypeEnum.limitOrder]: t`constants/trade-0`,
    [DelegationTypeEnum.planDelegation]: t`constants/trade-3`,
    [DelegationTypeEnum.marketTargetProfit]: t`constants/assets/common-25`,
    [DelegationTypeEnum.limitTargetProfit]: t`constants/assets/common-26`,
    [DelegationTypeEnum.marketStopLoss]: t`constants/assets/common-27`,
    [DelegationTypeEnum.limitStopLoss]: t`constants/assets/common-28`,
    [DelegationTypeEnum.liquidation]: t`constants/assets/common-29`,
    [DelegationTypeEnum.forcedDecrement]: t`constants/assets/common-30`,
  }[type]
}

/**
 * 财务记录 - 状态
 */
export enum StatusEnum {
  /** 已成交 */
  closed = 'closed',
  /** 部成已撤 */
  partHasBeenWithdrawn = 'partHasBeenWithdrawn',
  /** 已撤销 */
  rescinded = 'rescinded',
}

/**
 * 财务记录 - 状态名称
 */
export const getStatusName = (status: StatusEnum) => {
  return {
    [StatusEnum.closed]: t`constants/assets/common-31`,
    [StatusEnum.partHasBeenWithdrawn]: t`constants/assets/common-32`,
    [StatusEnum.rescinded]: t`constants/assets/common-33`,
  }[status]
}

/**
 * 财务记录详情-成交明细/资金明细
 */
export enum RecordDetailsTabEnum {
  /** 成交明细 */
  transaction = 'transaction',
  /** 资金明细 */
  fund = 'fund',
}

/**
 * 财务日志详情 - 渠道
 */
export enum RecordDetailsChannelIdEnum {
  /** 区块链充提币 */
  blockchain = 1,
  /** pay */
  platform,
  /** 平台内区块链地址 */
  platformBlockchain,
}

/**
 * 资产 - 数据字典
 */
export enum AssetsDictionaryTypeEnum {
  /** 财务日志状态 */
  recordStatusType = 'statusInd',
  walletOverviewType = 'fastpayBillType',
  /** 财务日志列表 - 类型 - 总览 */
  recordType = 'typeCd',
  /** 财务日志列表 - 类型 - 充提 */
  recordWithdrawType = 'dwTypeCd',
  /** 财务日志列表 - 类型 - 手续费 */
  recordFeeType = 'feeTypeCd',
  /** 财务日志列表 - 类型 - 合约 */
  recordPerpetualType = 'perpetualTypeCd',
  /** 合约组记录列表 - 类型 - 保证金 */
  recordPerpetualMarginType = 'marginTypeCd',
  /** 财务日志列表 - 类型 - 返佣 */
  recordCommissionType = 'commissionTypeCd',
  /** 财务日志列表 - 类型-c2c */
  recordC2CType = 'c2cTypeCd',
  /** 合约 - 合约类型：交割/永续 */
  perpetualSwapType = 'swapTypeInd',
  /** 合约 - 保证金触发类型：手动/自动 */
  perpetualOperationType = 'operationTypeCd',
  /** 合约 - 委托单限价类型：限价/市价 */
  perpetualOrderEntrustType = 'ctt_entrust_type_ind',
  /** 合约 - 委托单类型：限价/市价/强平/强减 */
  perpetualOrderType = 'ctt_order_type_ind',
  /** 合约 - 委托单状态：已撤销/部成已撤 */
  perpetualOrderEntrustStatusType = 'entrust_status_cd',
  /** 合约 - 计划委托类型：开多/开空/平多/平空 */
  perpetualOrderSideType = 'ctt_side_ind',
  /** 合约 - 仓位类型：多仓位/空仓位 */
  perpetualPositionType = 'ctt_position_side',
  /** 合约 - 资金类型 */
  perpetualBillType = 'perpetualBillType',
  /** 合约 - 迁移类型 */
  perpetualMigrateType = 'perpetualMigrateType',
  /** c2c-业务类型 */
  c2cBillLogType = 'c2cBillLogTypeStr',
  /** c2c-划转账户类型 */
  assetAccountType = 'assetAccountType',
  /** c2c-订单申诉原因 */
  c2cOrderAppealReason = 'c2c_order_appeal_reason',
}

/**
 * 资产 - 引导图 ID
 */
export enum AssetsGuideIdEnum {
  /** 资产 - 合约资产列表 */
  assetsFuturesAssetsListCell = 'assetsFuturesAssetsListCell',
  /** 资产 - 逐仓列表 - 一键合并 */
  assetsFuturesListMergeBtn = 'assetsFuturesListMergeBtn',
  /** 合约详情 - 逐仓列表 - 一键锁仓 */
  futuresDetailPositionListLock = 'futuresDetailPositionListLock',
  /** 合约详情 - 逐仓列表 - 迁移 */
  futuresDetailPositionListMerge = 'futuresDetailPositionListMerge',
  /** 合约详情 - 逐仓列表 - 一键反向 */
  futuresDetailPositionListReverse = 'futuresDetailPositionListReverse',
  /** 合约详情 - 资产列表 */
  futuresDetailAssetsListCell = 'futuresDetailAssetsListCell',
  /** 资产 - 提币地址列表 */
  assetsWithdrawAddressListCell = 'assetsWithdrawAddressListCell',
}

/**
 * 资金划转 - 资金划转类型
 */
export enum AssetsTransferTypeEnum {
  /** 从 (划出) */
  from = 'from',
  /** 到 (划入) */
  to = 'to',
}

/**
 * 资产 - 财务记录详情页面来源类型
 */
export enum AssetsHistoryPageTypeEnum {
  /** 财务记录列表 */
  historyList = 'historyList',
  /** 交易币种详情 */
  coinDetail = 'coinDetail',
  /** 逐仓记录列表 */
  positionHistoryList = 'positionHistoryList',
  /** 合约偏好设置资产记录列表 */
  futuresSettingAssetList = 'futuresSettingAssetList',
}
