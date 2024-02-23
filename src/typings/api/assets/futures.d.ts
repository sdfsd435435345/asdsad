/** ============================================== 资产 - 合约组 ============================================== */

import { type } from "os";

/**
 * 资产 - 获取商户法币配置
 */
export type AssetsCurrencySettingsReq = {}

export type AssetsCurrencySettingsResp = {
  /** 国家 ID */
  countryId: number;
  /** 法币名称 */
  currencyName: string;
  /** 法币英文名称 */
  currencyEnName: string;
  /** 国旗 */
  countryFlagImg: string;
  /** 法币符号 */
  currencySymbol: string;
  /** 法币精度 */
  offset: number;
}

/**
 * 资产 - 获取商户保证金币种配置
 */
export type AssetsMarginettingsReq = {}

export type MarginSettingsList = {
    /** 币种 ID */
    coinId: string;
    /** 币种代码 */
    coinCode: string;
    /** 汇率类型，fixed 固定，float 浮动 */
    rateTypeInd: string;
    /** 浮动汇率比列 */
    scale: string;
}

export type AssetsMarginSettingsResp = {
    merAssetsMarginSettingData: MarginSettingsList[]
}

/**
 * 合约 - 修改逐仓名称
 */
export type PerpetualGroupModifyNameReq = {
    /** 合约组 id */
    groupId: string;
    /** 合约组名称 */
    name: string;
}

export type PerpetualGroupModifyNameResp = {
    isSuccess: boolean;
}

/**
 * 资产 - 获取合约资产
 */
export type FuturesAssetsReq = {}

export type FuturesAssetsResp = {
    /** 合约资产 */
    totalPerpetualAsset?: string;
    /** 未实现盈亏 */
    totalUnrealizedProfit?: string;
    /** 可用资产币种资产 */
    totalMarginCoinAvailable?: string;
    /** 可用资产保证金价值 */
    totalMarginAvailable?: string;
    /** 仓位占用币种资产 */
    totalPositionCoinAsset?: string;
    /** 仓位占用保证金价值 */
    totalPositionAssets?: string;
    /** 开仓冻结币种价值 */
    totalLockCoinAsset?: string;
    /** 开仓冻结保证金价值 */
    totalLockMarginAsset?: string;
    /** 追加保证金剩余额度 */
    marginAmount: string;
    /** 是否开通合约 */
    isOpen: boolean;
    /** 是否开启自动追加保证金 */
    isAutoAdd?: boolean;
    /** 计价币 */
    baseCoin?: string;
}

/**
 * 资产 - 获取合约逐仓列表
 */
export type FuturesListReq = {}

export type FuturesList = {
    /** 总收益 */
    totalRevenue: string;
    /** 总收益率 */
    totalYield: string;
    /** 合约组资产 */
    groupAsset: string;
    /** 仓位资产 */
    positionAsset: string;
    /** 可用保证金 */
    marginAvailable: string;
    /** 合约组 id */
    groupId: string;
    /** 合约组名称 */
    groupName: string;
    /** 计价币 */
    baseCoin: string;
    /** 是否自动追加保证金（yes，no） */
    isAutoAdd: string;
    /** 未实现盈亏 */
    unrealizedProfit: string;
    /** 可用币种资产 */
    marginCoinAvailable: string;
    /** 仓位占用币种资产 */
    positionCoinAsset: string;
    /** 合约币种总资产 */
    groupCoinAsset: string;
    /** 开仓冻结币种价值 */
    lockCoinAsset: string;
    /** 开仓冻结保证金价值 */
    lockMarginAsset: string;
}

export type FuturesListResp = {
    list: FuturesList[];
}

/**
 * 资产 - 获取合约资产列表
 */
export type FuturesAssetsListReq = {}

export type FuturesAssetsListResp = {
    list: IFuturesAssetsList[];
    baseCoin: string;
}

export type IFuturesAssetsList = {
    /** 币种 id */
    coinId: string;
    webLogo: string;
    appLogo: string;
    /** 币种数量 */
    amount: string;
    /** 币种名称 */
    coinName: string;
    /** 币种符号 */
    symbol: string;
    /** 折算价值 */
    convertedValue: string;
    groupList: IFuturesAssetsGroupList[];
}

export type IFuturesAssetsGroupList = {
    /** 合约组 id */
    groupId: string;
    /** 合约组名称 */
    groupName: string;
    /** 合约组币种数量 */
    amount: string;
    /** 折算价值 */
    convertedValue: string;
}

/**
 * 合约 - 合约组是否存在委托订单
 */
export type GroupExistEntrustOrderReq = {
    /** 合约组 id */
    groupId: string;
}

export type GroupExistEntrustOrderResp = {
    /** 是否存在 */
    exist: boolean;
    /** 是否有锁仓 */
    lock: boolean;
}

/**
 * 合约 - 合约组详情总览
 */
export type FuturesGroupDetailReq = {
    /** 合约组 id */
    groupId: string;
}

export type GroupDetailMarginCoin = {
    /** 币种名称 */
    coinName: string;
    /** 折算价值 */
    coinConvert: string;
}

export type GroupDetailPositionAsset = {
    /** 币种名称 */
    coinName: string;
    /** long: 多仓位 short:空仓位 */
    sideInd: string;
    /** 名义价值 */
    nominalValue: string;
}

export type FuturesGroupDetailResp = {
    /** 合约组 ID */
    groupId: string;
    /** 合约组名称 */
    groupName: string;
    /** 计价币 */
    baseCoin: string;
    /** 合约组总价值 */
    groupAsset: string;
    /** 合约组可用保证金 */
    marginAvailable: string;
    /** 仓位保证金 */
    positionMargin: string;
    /** 未实现盈亏 */
    unrealizedProfit: string;
    /** 保证金币种信息 */
    marginCoin: GroupDetailMarginCoin[];
    /** 持仓风险占比 */
    positionAsset: GroupDetailPositionAsset[];
    /** 可用保证金资产价值 */
    marginAssets: string;
    /** 可用保证金折算比率 */
    marginAvailableScale: string;
    /** 开仓冻结保证金 */
    openLockAsset: string;
    /** 用户合约组总数量 */
    groupCount: number;
    /** 是否自动追加保证金 */
    isAutoAdd:string;
}

/**
 * 合约组详情 - 合约组保证金列表
 */
export type FuturesDetailMarginListReq = {
    /** 合约组 ID */
    groupId: string;
}

export type DetailMarginListChild = {
    /** 币种 id */
    coinId: string;
    /** 币种名称 */
    coinName: string;
    /** 币种符号 */
    symbol:string;
    /** 数量 */
    amount: string;
    /** app 图标 */
    appLogo: string;
    /** web 图标 */
    webLogo: string;
    /** 合约组开仓冻结数量 */
    lockAmount: string;
    /** 合约保证金可用数量 */
    availableAmount: string;
}

export type FuturesDetailMarginListResp = {
    list: DetailMarginListChild[];
    /** 计价币 */
    baseCoin: string;
}

/**
 * 合约组详情 - 合约组保证金币种信息（合约组提取/充值币种下拉框）
 */
export type FuturesDetailCoinListReq = {
    /** 合约组 ID */
    groupId?: string;
 }

export type DetailMarginCoinList = {
    /** 币种 id */
    coinId: string;
    /** 币种名称 */
    coinName: string;
    /** 可提/可用数量 */
    amount: string;
    /** app 图标 */
    appLogo: string;
    /** web 图标 */
    webLogo: string;
    /** 币种符号 */
    symbol: string;
}

export type FuturesDetailCoinListResp = {
    list: DetailMarginCoinList[];
    /** 计价币 */
    baseCoin: string;
}

/**
 * 合约组详情 - 合约组保证金提取
 */
export type FuturesDetailWithdrawMarginReq = {
    /** 合约组 id */
    groupId: string;
    /** 币种 id */
    coinId: string;
    /** 数量 */
    amount: string;
}

export type FuturesDetailWithdrawMarginResp = {
    /** 是否成功 */
    isSuccess: boolean;
}

/**
 * 合约组详情 - 合约组保证金充值
 */
export type FuturesDetailRechargeMarginReq = {
    /** 合约组 id */
    groupId: string;
    /** 币种 id */
    coinId: string;
    /** 数量 */
    amount: string;
}

export type FuturesDetailRechargeMarginResp = {
    /** 是否成功 */
    isSuccess: boolean;
}

/**
 * 合约组详情 - 持仓详情列表
 */
export type FuturesDetailPositionListReq = {
    /** 合约组 id */
    groupId: string;
}

export type lockRecord = {
    /** 首次锁仓价格 */
    lockPrice: string;
    /** 锁仓手续费总和 */
    fees: string;
}

export type profitLossEntrust = {
    /** 策略类型 stop_profit 止盈 stop_loss 止损 */
    strategyTypeInd: string;
    /** 触发价格 */
    triggerPrice: string;
    /** 仓位止盈止损 id */
    id: string;
}

export type PositionList = {
    /** 合约组 Id */
    groupId: string;
    /** 合约组名称 */
    groupName: string;
    /** 合约组保证金 */
    groupMargin: string;
    /** 交易对 id */
    tradeId: number;
    /** 交易对名称 */
    symbol: string;
    /** 基础币 */
    baseSymbolName: string;
    /** 计价币 */
    quoteSymbolName: string;
    /** wass 钱包币对名称 */
    symbolWassName: string;
    /** 合约类型 */
    typeInd: string;
    /** 持仓 id */
    positionId: string;
    /** long: 多仓位 short:空仓位 */
    sideInd: string;
    /** 杠杆倍数 */
    lever: string;
    /** 未实现盈亏 */
    unrealizedProfit: string;
    /** 收益率 */
    profitRatio: string;
    /** 持仓数量 */
    size: string;
    /** 仓位保证金率 */
    marginRatio: string;
    /** 维持保证金 */
    maintMargin: string;
    /** 维持保证金率 */
    maintMarginRatio: string;
    /** 开仓均价 */
    openPrice: string;
    /** 标记价格 */
    markPrice: string;
    /** 最新价 */
    latestPrice: string;
    /** 预估强平价 */
    liquidatePrice: string;
    /** 已实现盈亏 */
    realizedProfit: string;
    /** 收益 */
    profit: string;
    /** 仓位状态：opened:已开仓，closed:已关闭，locked:锁仓中 */
    statusCd: string;
    /** 委托冻结的数量 */
    entrustFrozenSize: string;
    /** 锁仓价格 */
    lockPrice: string;
    /** 锁仓数量 */
    lockSize: string;
    /** 锁仓利息 */
    lockFees: string;
    /** 数量精度 */
    amountOffset: string;
    /** 价格精度 */
    priceOffset: string;
    /** 卖出手续费率 */
    sellFeeRate: string;
    /** 创建时间 */
    createdByTime: number;
    /** 更新时间 */
    updatedByTime: number;
    /** 锁仓记录 */
    lockRecord: lockRecord;
    /** 止盈止损委托 */
    profitLossEntrust: profitLossEntrust[];
    /** 合约组可用保证金 */
    groupAvailableMargin: string;
    /** 仓位初始保证金 */
    initMargin: string;
    /** 锁仓比例 */
    lockPercent: string;
}

export type FuturesDetailPositionListResp = {
    list: PositionList[];
}

/**
 * 合约组详情 - 闪电平仓
 */
export type FlashOrdersReq = {
    /** 合约组 ID */
    groupId: string;
    /** 仓位 ID */
    positionId: string;
    /** 仓位的方向类型 open_long 开多，open_short 开空 */
    sideInd: string;
    /** 交易对 ID */
    tradeId: number;
    /** 平仓数量 */
    size: string;
}
export type FuturesDetailPositionFlashAllReq = {
    flashOrders: FlashOrdersReq[];
}

export type FuturesDetailPositionFlashAllResp = {
    /** 下单情况 code 值 成功:200  , 其他 code 值为下单失败原因对应的 code */
    code: number;
    /** 下单成功:success，下单失败：其他错误描述 */
    message: string;
    /** 平仓的 positionId */
    sourceId: string;
    /** 生成的平仓单订单 id */
    orderId: string;
    /** true 下单成功 false 下单失败 */
    success: boolean;
}

/**
 * 资产 - 合约组 - 是否强平中
 */
export type FuturesDetailIsLiquidateReq = {
    groupId: string;
}

export type FuturesDetailIsLiquidateResp = {
    /** 是否强平中 */
    isLiquidate: boolean;
}

/**
 * 资产 - 合约组 - 撤销合约组所有委托
 */
export type FuturesGroupCancelOrderReq = {
    /** 合约组 ID */
    groupId: string;
}

export type FuturesGroupCancelOrderResp = {
    /** 是否成功 */
    isSuccess: boolean;
}

/**
 * 资产 - 合约组 - 一键合组
 */
export type FuturesGroupMergeReq = {
    /** 原始合约组 id */
    fromGroupId: string;
    /** 目标合约组 id */
    toGroupId: string;
}

export type FuturesGroupMergeResp = {
    /** 是否成功 */
    isSuccess: boolean;
}

/**
 * 逐仓详情 - 逐仓总价值
 */
export type FuturesDetailMarginScaleDetailReq = {
    /** 合约组 id */
    groupId: string;
}

export type FuturesDetailMarginScaleDetailResp = {
    /** 计价币 */
    baseCoin: string;
    /** 币种价值 */
    coinValue: string;
    /** 保证金价值 */
    marginValue: string;
    /** 平均折算比率 */
    averageScale: string;
    /** 保证金折算率列表 */
    marginScale: IMarginScaleList[];
}

export type IMarginScaleList = {
    /** 币种 id	 */
    coinId: string;
    /** 币种名称 */
    coinName: string;
    appLogo: string;
    webLogo: string;
	/** 保证金折算率 */
    scale: string;
}

/** ============================================== 交易 - 持仓 ============================================== */
/**
 * 交易 - 当前持仓列表
 */
export type FuturesPositionCurrentListReq = {
    symbol?: string;
}

export type FuturesPositionCurrentListResp = {
    list: PositionList[];
}

/**
 * 交易 - 获取现货资产购买力
 */
export type FuturesPerpetualAssetsReq = {}

export type FuturesPerpetualAssetsResp = {
    /** 可用保证金 */
    availableBalanceValue: string;
}

/**
 * 交易-获取锁仓时间周期/费率等设置
 */
export type FuturesLockPositionSettingReq = {
    /** 币对 id */
    tradeId: number;
}

export type FuturesLockPositionSettingResp = {
    /** 时间段 单位 min 5,10,15,20,25,30 */
    interval: number;
    /** 费率比例 */
    fees: string;
}

/**
 * 交易 - 仓位是否存在委托订单
 */
export type PositionExistEntrustOrderReq = {
    /** 合约组 ID */
    groupId: string;
    /** 仓位 ID */
    positionId: string;
}

export type PositionExistEntrustOrderResp = {
    /** 是否存在 */
    exist: boolean;
}

/**
 * 交易 - 撤销仓位的委托订单
 */
export type PositionCancelOrderReq = {
    /** 合约组 ID */
    groupId: string;
    /** 仓位 ID */
    positionId: string;
}

export type PositionCancelOrderResp = {
    /** 是否成功 */
    isSuccess: boolean;
}

/**
 * 交易 - 检查能否锁仓
 */
export type PositionCheckLockReq = {
    /** 仓位 ID */
    positionId: string;
    /** 合约组 ID */
    groupId: string;
}

export type PositionCheckLockResp = {
    /** 检查是否通过 */
    pass: boolean;
}

/**
 * 交易 - 计算锁仓费用等信息
 */
export type PositionLockFeeReq = {
    /** 仓位 ID */
    positionId: string;
    /** 合约组 ID */
    groupId: string;
    /** 锁仓数量 */
    size: string;
}

export type PositionLockFeeResp = {
    /** 本次手续费 */
    fee: string;
    /** 下次收费时间 */
    nextTime: number;
    /** 预计锁仓费用 */
    predictFee: string;
}

/**
 * 交易 - 一键锁仓
 */
export type PositionLockReq = {
    positionId: string;
    groupId	: string;
    /** 锁仓数量 */
    size: string;
    /** 锁仓比例 */
    percent: string;
}

export type PositionLockResp = {
    isSuccess: boolean;
}

/**
 * 交易 - 一键反向 - 获取币对数量
 */
export type FuturesPositionSymbolSizeReq = {
    /** 币对 id */
    tradeId: number;
    /** 交易方向（开多，开空） */
    sideInd: string;
    /** 杠杆倍数 */
    lever: string;
}

export type FuturesPositionSymbolSizeResp = {
    /** 持仓数量 */
    size: string;
}

/**
 * 交易 - 一键反向 - 获取反向开仓信息
 */
export type FuturesPositionReverseInfoReq = {
    /** 合约组 id */
    groupId: string;
    /** 仓位 id */
    positionId: string;
    /** 开仓保证金来源  wallet 使用资产账户的资金开仓 group 使用当前合约组的额外保证金开仓 */
    marginType: string;
}

export type FuturesPositionReverseInfoResp = {
    /** taker 手续费率 */
    takerFeeRate: string;
    /** 对手价 */
    opponentPrice: string;
    /** 可用开仓保证金 */
    availableOpenMargin: string;
}

/**
 * 交易 - 一键反向 - 获取币对最大可开仓数量
 */
export type FuturesPositionMaxSizeLimitReq = {
    /** 币对 id */
    tradeId: number;
    /** 杠杆倍数 */
    lever: string;
}

export type FuturesPositionMaxSizeLimitResp = {
    /** 持仓数量 */
    maxSize: string;
    /** 标的币 */
    baseSymbolName: string;
}

/**
 * 交易 - 新建普通委托单（平仓/一键反向）
 */
export type stopProfitReq = {
    /** 触发价格 */
    triggerPrice: number;
    /** 触发价格类型（mark 标记，new 最新） */
    triggerPriceTypeInd: string;
    /** 方向 close_long 平多 , close_short 平空 */
    triggerSideInd: string;
    /** 委托价格类型 limit 限价 market 市价 */
    entrustTypeInd: string;
    /** 策略类型 stop_profit 止盈  */
    strategyTypeInd: string;
    /** 触发方向（up=向上，down=向下），平多止盈为 up，平空止盈为 down */
    triggerDirectionInd: string;
}

export type strategyReq = {
    /** 止盈 */
    stopProfit?: stopProfitReq;
    /** 止损 */
    stopLoss?: stopProfitReq;
}

export type OrdersPlaceReq = {
    /** 合约组 id */
    groupId: string;
    /** 仓位 id ,减仓单，平仓单必传 */
    positionId?: string;
    /** 交易对 id */
    tradeId: number;
    /** 订单类型 limit_order 限价委托单  market_order 市价委托单 forced_liquidation_order 强平委托单 forced_lighten_order 强减委托单 */
    typeInd: string;
    /** 委托价格类型 limit 限价 market 市价   */
    entrustTypeInd: string
    /** 方向类型 open_long 开多 , open_short 开空 ,close_long 平多，close_short 平空  */
    sideInd: string;
    /** 委托价格;限价单必传，市价单不传 */
    price?: number;
    /** 委托数量;限价单市价单按数量必传 */
    size?: string;
    /** 市价单单位 amount 按金额 quantity 按数量 */
    marketUnit?: string;
    /** 下单金额或减仓价值，市价单按金额 market_unit=amount 时必传 */
    funds?: number;
    /** 下单选择的币种是标的币还是计价币；如果是标的币传 BASE，如果是计价币传 QUOTE */
    placeUnit?: string;
    /** 开仓保证金来源  wallet 使用资产账户的资金开仓 group 使用当前合约组的额外保证金开仓 */
    marginType?: string;
    /** 开仓初始仓位保证金 */
    initMargin?: number;
    /** 开仓额外保证金来源  assets 账户资产作为额外保证金 open_funds 开仓资金作为额外保证金 */
    additionalMarginType?: string;
    /** 开仓额外保证金 */
    additionalMargin?: number;
    /** 开仓杠杆倍数 */
    lever?: string;
    /** 止盈止损 */
    strategy?: strategyReq;
    /** 是否自动追加保证金 开仓时，如果选择创建新合约组时，必传 yes，是；no，否； */
    autoAddMargin?: string;
}

export type OrdersPlaceResp = {
    /** 200 表示成功 其他 code 表示失败 */
    code: number;
    /** 错误消息 */
    message: string;
    /** 订单 ID */
    data: string;
}

/**
 * 交易-新增止盈止损/仓位止盈止损
 */
export type StopProfitReq = {
    /** 委托价格类型 limit 限价 market 市价  */
    entrustTypeInd: string;
    /** 合约组 */
    groupId: string;
    /** 仓位 */
    positionId: string;
    /** 价格 */
    price: string;
    /** 数量 */
    size: string;
    /** part 分批 , position 仓位 */
    strategyOperationType: string;
    /** 策略类型 stop_profit 止盈 stop_loss 止损 */
    strategyTypeInd: string;
    /** 交易对 ID */
    tradeId: string;
    /** 触发方向（up=向上，down=向下） */
    triggerDirectionInd: string;
    /** 触发价格 */
    triggerPrice: string;
    /** 触发方式（mark 标记，new 最新） */
    triggerPriceTypeInd: string;
    /** close_long 平多，close_short 平空  */
    triggerSideInd: string;
}

export type StrategyPlaceReq = {
    /** 止盈对象 */
    stopProfit: StopProfitReq;
    /** 止损对象 */
    stopLoss: StopProfitReq;
}
export type StrategyPlaceResp = {
    code: number;
    message: string;
    data: string;
}

/**
 * 交易 - 获取仓位止盈止损详情
 */
export type FuturesPositionStrategyDetailsReq = {
    /** 仓位 id */
    id: string;
}

export type StopProfitResp = {
    /** 止盈止损策略 id */
    id: string;
    /** 策略类型 stop_profit 止盈 stop_loss 止损  */
    strategyTypeInd: string;
    /** 委托状态 revoke 已撤销，revoke_sys 系统撤销，,alreay_triggered 已生效，triggered_failed 已生效 - 委托失败 */
    statusCd: string;
    /** not_triggered 未生效 already_triggered 已生效 expired 已失效 */
    statusDisplay: string;
    /** 方向 close_long 平多，close_short 平空 */
    triggerSideInd: string;
    /** 委托价格类型 limit 限价 market 市价 */
    entrustTypeInd: string;
    /** 委托价格 */
    price: string;
    /** 委托数量 */
    size: string;
    /** 标的币 symbol */
    baseCoinShortName: string;
    /** 计价币 symbol */
    quoteCoinShortName: string;
    /** 触发价格类型（mark 标记，new 最新） */
    triggerPriceTypeInd: string;
    /** 触发价格  */
    triggerPrice: string;
    /** 触发方向 up=向上  大于等于，down=向下  小于等于 */
    triggerDirectionInd: string;
    /** 市价单时会有值，市价单单位 amount 按金额 quantity 按数量 */
    marketUnit: string;
}

export type FuturesPositionStrategyDetailsResp = {
    /** 止盈策略 */
    stopProfit: StopProfitResp;
    /** 止损策略 */
    stopLoss: StopProfitResp;
}

/**
 * 交易 - 止盈止损 - 取消仓位止盈止损
 */
export type FuturesPositionStrategyCancelReq = {
    /** 止盈止损 ID */
    id: string;
}

export type FuturesPositionStrategyCancelResp = {
    isSuccess: boolean;
}

/**
 * 交易 - 止盈止损 - 撤销全部仓位止盈止损
 */
export type FuturesPositionStrategyCancelAllReq = {
    /** 交易对 id */
    tradeId: number;
    /** 合约组 id */
    groupId: string;
    /** 订单类型 limit 限价  market 市价 */
    entrustTypeInd: string;
    /** 针对某个仓位的仓位止盈止损界面 撤销当前仓位的全部止盈止损 */
    positionId: string;
}

export type FuturesPositionStrategyCancelAllResp = {
    /** 返回状态码 200 为成功，其他 code 值为失败 */
    code: number;
    /** 返回信息说明 success */
    message: string;
    data: string;
}

/**
 * 交易 - 平仓 - 检测仓位是否存在
 */
export type FuturesPositionCheckExistReq = {
    /** 合约组 id */
    groupId: string;
    /** 仓位 id */
    positionId: string;
}

export type FuturesPositionCheckExistResp = {
    exist: boolean;
}

/**
 * 交易 - 迁移 - 获取能迁移的数量
 */
export type FuturesPositionMigrateSizeReq = {
    /** 迁移的仓位 id */
    positionId: string;
    /** 合约组 id */
    fromGroupId: string;
}

export type FuturesPositionMigrateSizeResp = {
    /** 可迁移的数量 */
    quantity: string;
}

/**
 * 交易 - 迁移 - 获取能迁移的保证金
 */
export type FuturesPositionMigrateMarginReq = {
    /** 迁移的仓位 id */
    positionId: string;
    /** 合约组 id */
    fromGroupId: string;
    /** 迁移数量 */
    size: string;
}

export type FuturesPositionMigrateMarginResp = {
    /** 最小可用迁移的保证金 */
    min: string;
    /** 最大可迁移的值 */
    max: string;
}

/**
 * 交易 - 迁移 - 检查最小持仓数量
 */
export type FuturesPositionCheckMinSizeReq = {
    /** 迁移的合约组 */
    fromGroupId: string;
    /** 迁移的仓位 id */
    positionId: string;
    /** 迁移数量 */
    size: string;
}

export type FuturesPositionCheckMinSizeResp = {
    /** 检查通过 */
    pass: boolean;
}

/**
 * 交易 - 迁移 - 检查迁移的保证金
 */
export type FuturesPositionCheckMigrateMarginReq = {
    /** 迁移的合约组 */
    fromGroupId: string;
    /** 迁移的仓位 id */
    positionId: string;
    /** 迁移数量 */
    size: string;
    /** 迁移的保证金 */
    margin: string;
}

export type FuturesPositionCheckMigrateMarginResp = {
    /** 检查通过 */
    pass: boolean;
}

/**
 * 交易 - 迁移 - 检查是否有可合并的仓位
 */
export type FuturesPositionCheckMergeReq = {
    /** 迁移的仓位 id */
    positionId: string;
    /** 迁移的合约组 */
    fromGroupId: string;
    /** 目标合约组 */
    toGroupId: string;
}

export type FuturesPositionCheckMergeResp = {
    /** 是否存在可合并的持仓 */
    exist: boolean;
}

/**
 * 交易 - 迁移
 */
export type FuturesPositionMigrateReq = {
    /** 迁移的仓位 id */
    positionId: string;
    /** 迁移的合约组 */
    fromGroupId: string;
    /** 目标合约组 */
    toGroupId: string;
    /** 迁移数量 */
    size: string;
    /** 迁移的保证金 */
    margin: string;
}

export type FuturesPositionMigrateResp = {
    isSuccess: boolean;
}

/**
 * 交易 - 平仓 - 合约组额外保证金
 */
export type FuturesGroupPurchasingPowerReq = {
    /** 合约组 id */
    groupId: string;
}

export type FuturesGroupPurchasingPowerResp = {
    /** 剩余购买力 */
    purchasingPower: string;
}

/**
 * 交易 - 调整持仓杠杆 - 合约组剩余购买力信息
 */
export type FuturesGroupMarginAvailableReq = {
    /** 合约组 id */
    groupId: string;
}

export type FuturesGroupMarginAvailableResp = {
    /** 合约组的剩余购买力 */
    purchasingPower: string;
}

/**
 * 交易 - 调整持仓杠杆 - 修改仓位杠杆倍数
 */
export type FuturesPositionModifyLeverReq ={
    /** 合约组 id */
    groupId: string;
    /** 仓位 Id */
    positionId: string;
    /** 杠杆倍数 */
    lever: string;
}

export type FuturesPositionModifyLeverResp = {
    isSuccess: boolean;
}

/**
 * 交易 - 调整持仓杠杆 - 修改仓位杠杆倍数检查最大持仓量
 */
export type FuturesPositionLeverCheckMaxSizeReq = {
    /** 合约组 id */
    groupId: string;
    /** 仓位 Id */
    positionId: string;
    /** 杠杆倍数 */
    lever: string;
}

export type FuturesPositionLeverCheckMaxSizeResp = {
    isSuccess: boolean;
}

/**
 * 资金划转 - 划转账户
 */
export type PerpetualAssetsTransferAccountReq = {
    /** 币种 id */
    coinId: string;
}

export type PerpetualAssetsTransferAccountResp = {
    list: IPerpetualAssetsTransferAccountList[]
}

export type IPerpetualAssetsTransferAccountList = {
    /** 合约组 id，没有时前端写死交易账户 */
    groupId: string;
    /** 合约组名称 */
    groupName: string;
    /** 可划转币种数量 */
    amount: string;
    /** 币种数量 */
    totalAmount: string;
    /** 币种 id */
    coinId: string;
    /** 币种名称 */
    coinName: string;
    type?: string
}

/**
 * 资金划转 - 划转
 */
export type PerpetualAssetsTransferReq = {
    /** 目标合约组 id，type 为空时必传 */
    fromGroupId?: string;
    /** 币种 id */
    coinId: string;
    /** 数量 */
    amount: string;
    /** 账户类型，合约组 id 为空时必传，asset 资产 */
    fromType?: string;
    /** 账户类型，合约组 id 为空时必传，asset 资产，group 新建合约组 */
    toType?: string;
    /** 目标合约组 id，type 为空时必传 */
    toGroupId?: string
}

export type PerpetualAssetsTransferResp = {
    /** 是否成功 */
    isSuccess: boolean
}
