/** ============================================== 公共 ============================================== */

import { AssetsRouteEnum } from "@/constants/assets";

/**
 * 资产 - 用户资产汇率
 */
 export type AssetsCoinRateReq = {}

 export type AssetsCoinRateResp = {
  /** 人民币汇率 */
  cnyRate?: string;
  /** 美元汇率 */
  usdRate?: string;
  /** 币种汇率列表 */
  coinRate?: CoinRateResp[]
 }

 export type CoinRateResp =  {
  coinId: string;
  /** 币种 */
  symbol: string;
  /** 币种对应 usdt 汇率 */
  usdtRate?: string;
  coinPrecision?: number;
}

/**
 * 资产 - 用户币种汇率-v2
 */
export type AssetsV2CoinRateReq = {}

export type AssetsV2CoinRateResp = {
  /** 币种汇率 */
  coinRate: ICoinRate[]
  /** 法币汇率 */
  legalCurrencyRate: ILegalCurrencyRate[]
}

export type ICoinRate = {
  /** 币种对应 usdt 汇率 */
  usdtRate: string;
  /** 币种 */
  symbol: string;
  /** 币种 id */
  coinId: string;
  /** 币种展示精度 */
  coinPrecision: number;
}

export type ILegalCurrencyRate = {
  /** 法币 */
  currency: string;
  /** 汇率 */
  rate: string;
}

/**
 * 资产 - 获取主币种信息
 */
 export type AssetsQueryCoinPageListReq = {
  /** 币种名称 */
  name?: string;
  /** 类型：1，充值，2、提币 */
  type: number
 }

 export type AssetsQueryCoinPageListResp = {
  coinList: AssetsQueryCoinPageListCoinListResp[]
 }

 export type AssetsQueryCoinPageListCoinListResp = {
  id: string;
  /** 简称 */
  coinName: string;
  /** 币种 */
  symbol: string;
  /** 全称 */
  coinFullName: string;
  /** 是否开启提现，1.开启，2.关闭 */
  isWithdraw: number;
  /** 是否开启充值，1.开启，2.关闭 */
  isDeposit: number;
  /** WEB 站 LOGO */
  webLogo?: any;
  /** APP 站 LOGO */
  appLogo?: any;
  /** 是否热门，1.是，2.否 */
  isPopular: number;
  /** 是否使用地址标签，1 是，2 否 */
  isUseMemo: number;
  networks?: QuerySubCoinListSubCoinListResp[]
 }

/**
 * 资产 - 根据主币获取子币列表
 */
 export type AssetsQuerySubCoinListReq = {
   /** 主币 id */
   coinId: string;
 }
 export type AssetsQuerySubCoinListResp = {
   subCoinList: QuerySubCoinListSubCoinListResp[]
 }
 export type QuerySubCoinListSubCoinListResp = {
   /** 币种 */
   symbol: string;
   /** 名称 */
   coinFullName: string;
   /** 是否开启提现 */
   isWithdraw: number;
   id: string;
   /** 简称 */
   coinName: string;
   /** 是否开启充值 */
   isDeposit: number;
   /** 是否使用地址标签，1 是，2 否 */
   isUseMemo: number;
   /** 主链类型，区块链充提币主网选择展示 */
   mainType: string;
   /** 主网，用于提币确认页面展示 */
   mainnet: string;
 }

/** ============================================== 总览 ============================================== */
/**
 * 资产 - 总览
 */
export type AssetsOverviewReq = {}

export type AssetsOverviewResp = {
  /** usdt 总数量 */
  totalAmount?: string;
  /** 流动数量 */
  availableAmount?: string;
  /** 仓位数量 */
  lockAmount?: string;
  /** 币种（USDT） */
  coinName?: string;
  /** 币种代码 */
  symbol?: string;
  /** 仓位数量 */
  positionAmount?: string;
  /** 理财资产 */
  financialAssetsData?: FinancialAssetsData;
  /** 币种资产 */
  coinAssetsData?: FinancialAssetsData;
  /** 合约资产 */
  futuresAssetsData?: FinancialAssetsData;
  /** 杠杠资产 */
  marginAssetsData?: FinancialAssetsData;
  /** c2c 资产 */
  c2cAssetsData?: FinancialAssetsData;
}

export type FinancialAssetsData = {
  /** BTC 总数量 */
  totalAmount: string;
  /** 可用数量 */
  availableAmount: string;
  /** 仓位资产数 */
  lockAmount: string;
  /** 币种（只会传 BTC) */
  coinName: string;
  /** 币种代码 */
  symbol?: string;
  /** 仓位资产 */
  positionAmount?: string
}

/**
 * 资产-c2c 列表
 */
export type AssetsC2CListReq = {}

export type AssetsC2CListResp = {
  uid?: string;
  /** 币种 ID */
  coinId?: string;
  /** 币种代码 用于匹配汇率 */
  symbol?: string;
  /** 可用余额 */
  balance?: number;
  businessId?: number;
  /** 冻结金额 */
  freezeBalance?: number;
  /** 商家冻结金额 */
  merchantFreezeBalance?: number;
  appLogo: string;
  webLogo: string;
  /** 币种简称 */
  coinName: string;
  /** 币种全称 */
  coinFullName: string;
  /** usd 估值 */
  usdBalance?: string;
}

/** ============================================== 币种 ============================================== */
/**
 * 资产 - 币种资产
 */
export type AssetsCoinOverviewReq = {}

export type AssetsCoinOverviewResp = {
  /** 冻结资产 */
  lockAmount: string;
  /** 币种名称 */
  coinName: string;
  /** 总资产 */
  totalAmount: string;
  /** 币种符号 */
  symbol: string;
  /** 流动资产 */
  availableAmount: string;
}

/**
 * 资产 - 币种资产列表
 */
 export type AssetsCoinListReq = {
  pageNum: number;
  pageSize: number;
 }

 export type AssetsCoinListResp = {
  pageNum?: number;
  pageSize?: number;
  total?: number;
  list: CoinListResp[];
 }

 export type CoinListResp =  {
  /** 币种 app 端 logo */
  appLogo?: any;
  /** 币种 web 端 logo */
  webLogo?: any;
  /** 币种名称 */
  coinName?: string;
  /** 币全名 */
  coinFullName?: string;
  /** 可用数量 */
  availableAmount?: string;
  /** 冻结数量 */
  lockAmount?: string;
  /** 总数量 */
  totalAmount?: string;
  /** 币种 id */
  coinId: string;
  /** 下单锁定  */
  orderLockAmount?: string;
  /** BTC 估值 */
  btcAmount?: number;
  /** usdt 估值 */
  usdtAmount?: number;
  /** usd 估值 */
  usdBalance?: number;
  /** 币种 */
  symbol: string;
  /** 仓位数量  */
  positionAmount?: string
}

/**
 * 资产 - 查询币种资产详情
 */
export type AssetsCoinDetailReq = {
  /** 币种 id */
  coinId: string;
}

export type AssetsCoinDetailResp = {
  /** 币种名称 */
  coinName?: string;
  appLogo?: string;
  webLogo?: string;
  /** 可用数量 */
  availableAmount?: string;
  /** 冻结资产明细 */
  lockAmountData?: ICoinDetailLockAmountData;
  /** 仓位资产明细 */
  positionAmountData?: ICoinDetailPositionAmountData;
  /** 冻结资产 */
  lockAmount?: string;
  /** 总资产数 */
  totalAmount?: string;
  /** 币种 ID */
  coinId: string;
  /** 币种代码 */
  symbol: string;
  /** 仓位资产 */
  positionAmount?: string
  /**币种精度 */
  coinPrecision?: number
}

export type ICoinDetailLockAmountData = {
  marginLockAssets: string;
  spotLockAssets: string;
  swapLockAssets: string;
  withdrawLockAssets: string;
}

export type ICoinDetailPositionAmountData = {
  /** 理财资产 */
  financialAssets?: string;
  /** 杠杠资产 */
  marginAssets?: string;
  /** 合约资产 */
  futuresAssets?: string;
}

/**
 * 行情 - 搜索交易对 (币对模糊查询，交易币搜索)
 */
 export type AssetsTradeListReq = {
  /** 交易币的 id，精确查询 */
  sellCoinId?: string;
  /** 模糊查询，搜索输入框的文本 */
  symbolName?: string;
 }

 export type AssetsTradeListResp = {
  spot?: TradeListSpotResp[]
  /** 合约币对列表 */
  perpetual?: TradeListPerpetualResp[]

 }

 export type TradeListSpotResp = {
  id?: number;
  /** 标的币 */
  sellCoinId?: number;
  /** 计价币 */
  buyCoinId?: number;
  /** 交易区 */
  tradeArea?: number;
  symbolName?: string;
  /** 涨跌幅 */
  chg?: string;
  /** 最高价 */
  high?: string;
  /** 当前价 */
  last?: string;
  /** 最低价 */
  low?: string;
  /** 开盘价 */
  open?: string;
  /** 成交量 */
  volume?: string;
  /** 成交额 */
  quoteVolume?: string;
  time?: number;
  /** 标的币 名 */
  baseSymbolName?: string;
  /** 计价币 名 */
  quoteSymbolName?: string;
  /** 钱包币对名 */
  symbolWassName?: string;
  /** 排序字段 */
  sort?: number;
 }

 export type TradeListPerpetualResp = {
  /** 标的币名 */
  /** 标的币精度 */
  baseSymbolScale?: number;
  /** 计价币精度 */
  quoteSymbolScale?: number;
  /** 最小下单数量 */
  minCount?: number;
  /** 是否添加自选 1=自选 */
  favourite?: number;
  /** 币对名 */
  symbolName?: string;
  /** 最低价 */
  low?: string;
  /** 开盘价 */
  open?: string;
  plusFeeRate?: string;
  /** 最高价 */
  high?: string;
  sellFee?: string
  /** 是否开盘;1=开盘中，2=停盘中，3=预约开盘 */
  marketStatus?: number;
  tradeArea?: string
  /** 是否删除 2=未删除 1=已删除 */
  isDelete?: number;
  /** wass 钱包名 */
  symbolWassName?: string;
  /** 下单数量偏移 */
  amountOffset?: string;
  /** 标的币 id */
  sellCoinId?: number;
  /** 下单价格偏移 */
  priceOffset?: number;
  /** 商户 id */
  businessId?: number;
  /** 流通量 */
  circulatingSupply?: number;
  /** 计价币名 */
  quoteSymbolName?: string;
  /** 计价币 id */
  buyCoinId?: number;
  id?: number;
  /** 结算规则 */
  settlementRules?: number;
  /** 涨跌幅 */
  chg?: string;
  /** 标的币名 */
  baseSymbolName?: string;
  /** 成交量 */
  volume?: string;
  /** 合约类型 delivery =交割 ,perpetual =永续 */
  typeIndex?: string;
  /** 最新价 */
  last?: string;
  /** 最大下单金额 */
  maxAmount?: string;
  /** 最大下单数量 */
  maxCount?: string;
  /** 成交额 */
  quoteVolume?: string;
  /** 排序字段 */
  sort?: number;
  /** 时间 */
  time?: number;
  /** 结算时间 */
  cycle?: string;
  /** 1=启用 2=禁用 */
  enableState?: number;
  /** 最小下单金额 */
  minAmount?: string;
  /** 1=交易 2=不交易 */
  isShare?: number;
  minusFeeRate?: string;
  
 }

/** ============================================== 充值 ============================================== */
/**
 * 资产 - 获取用户币种充值地址
 */
export type AssetsDepositAddressReq = {
  /** 币种 id，有子币时传子币 id，没有子币时传主币 id */
  coinId: number
}

export type AssetsDepositAddressResp = {
  /** 地址 */
  address: string;
  /** 提现说明 */
  hint: string;
  /** 地址标签 */
  memo: string
}

/** ============================================== 提现 ============================================== */
/**
* 资产 - 提币前校验
*/
export type AssetsWithdrawVerifyReq = {}

export type AssetsWithdrawVerifyResp = {
  /** 校验是否成功 */
  isSuccess: boolean;
  /** 是否开启两项验证 */
  isOpenSafeVerify: boolean;
  /** 错误码 */
  errCode: number;
  /** 错误提示 */
  errMsg: string;
}

/**
 * 资产 - 币币 - 获取常用提现地址列表
 */
export type AssetsWithdrawAddressReq = {}

export type AssetsWithdrawAddressResp = {
  addressList: WithdrawAddressListResp[]
}

export type WithdrawAddressListResp = {
  /** 备注 */
  remark?: string;
  id: number;
  /** 地址 */
  address: string
}

/**
 * 资产 - 获取提币信息
 */
export type AssetsWithdrawCoinInfoReq = {
 /** 币种 id，type 为 1 时，传子币 id，type 为 3 时，传主币 id */
 coinId: number;
 /** 1.链上转账，3，内部转账 */
 type: number;
}

export type AssetsWithdrawCoinInfoResp = {
 /** 最小提币数量 */
 minAmount?: string;
 /** 主网手续费 */
 fee?: string;
 /** 可用提币数量 */
 availableAmount?: string;
 /** 总金额 */
 amount?: string;
 /** 剩余提现额度 */
 remainingWithdrawalAmount?: string;
 /** 提币精度 */
 withdrawPrecision?: number;
 /** 手续费币种 */
 feeCoinName?: string;
 /** 手续费币种符号 */
 feeSymbol?: string;
 /** 用户手续费币种可用数量 */
 usrFeeAmount?: string;
 /** 单次最大提币数量（根据提币币种） */
 maxWithdrawAmount?: string;
}

/**
 * 资产 - 提币地址校验
 */
 export type AssetsWithdrawAddressVerifyReq = {
  /** 主网币种代码如：USDT-ERC20 */
  symbol: string;
  /** 提现地址 */
  address: string;
 }

 export type AssetsWithdrawAddressVerifyResp = {
  isSuccess: boolean
 }

 /**
  * 资产-新增/编辑常用提现地址
  */
  export type AssetsAddWithdrawAddressReq = {
    /** 地址 */
    address: string
    /** 备注 */
    remark?: string
    /** 地址 id，修改时必传 */
    id?: number;
  }

  export type AssetsAddWithdrawAddressResp = {
    isSuccess?: boolean;
    errMsg?: string
  }

/**
 * 资产 - 币币 - 发起提现申请
 */
export type AssetsWithdrawSubmitReq = {
  /** 币种 ID */
  coinId: string;
  /** 提币地址，链上转账必传 */
  address?: string;
  /** 币种符号 */
  symbol: string;
  /** 提币数量 */
  amount: number;
  /** 充值地址标签，如果需要 memo，此处为必填 */
  memo?: string;
  /** 1.链上转账，3，内部转账 */
  type: number;
  /** 用户唯一的 uid，内部转账必传 */
  uid?: string;
  /** 接口唯一参数 */
  uuid: string;
}

export type AssetsWithdrawSubmitResp = {
  /** 是否成功 */
  isSuccess: boolean;
  /** 申请确认时间 */
  submitTime: number;
  /** 预计完成时间 */
  estimatedFinishTime: number;
}

/**
 * 资产 - 删除常用提现地址
 */
export type AssetsDelWithdrawAddressReq = {
  id: number;
}

export type AssetsDelWithdrawAddressResp = {
  isSuccess: boolean;
}

/**
 * 个人中心 - 通过 uid 查询昵称
 */
export type AssetsNickNameReq = {
  /** 用户 uid */
  uid: string;
}
export type AssetsNickNameResp = {
  /** 昵称 */
  nickname: string;
}

/**
 * 资产 - 设置币种充提通知
 */
 export type AssetsSettingCoinPushReq = {
  /** 子币 id */
  coinId: number;
  /** 类型 1、充值 2、提现 */
  type: number;
  /** 状态 1、开启 2、关闭 */
  status: number;
 }

 export type AssetsSettingCoinPushResp = {
  isSuccess: boolean
 }

/**
 * 资产 - 获取币种开启充提推送状态
 */
 export type AssetsCoinPushStatusReq = {
   /** 子币 id */
   coinId: number;
   /** 类型 1、充值 2、提现 */
   type: number;
 }

export type AssetsCoinPushStatusResp = {
  /** 是否开启 */
  isOpen: boolean;
}

/**
 * 提币获取验证码入参
 */
export interface ISafeVerifySendWithdrawalDataProps {
  address: string // 提币地址
  quantity: string | number // 提币数量
  currencyCode: string // 提币币种
  memo: string // memo 地址
}

/** ============================================== 财务记录 ============================================== */
/**
 * 资产 - 财务记录币种列表
 */
export type AssetsRecordsCoinListReq = {
  /** 财务类型：全部时不传，1，现货，2、充提、3、借还款、4、合约、5、手续费、6、衍生品、7、其他 */
  logType?: number;
  type?: number | string;
  /** 合约组 id */
  groupId?: string;
}

export type AssetsRecordsCoinListResp = {
  coinList: RecordsCoinListResp[]
}

export type RecordsCoinListResp = {
  /**
   * symbol
   */
  symbol?: string
  /**
   * 余额
   */
  balance?: string
  /**
   * appLogo
   */
  appLogo?: string
  /**
   * 最小交易数量
   */
  minTransQuantity?: string
  webLogo?: string
  /**
   * 最大交易数量
   */
  maxTransQuantity?: string
  /**
   * 币种名字
   */
  coinFullName?: string
  /**
   * 交易状态（ENABLE、DISABLE）
   */
  statusCd?: string
  /**
   * 币种 id
   */
  id?: string
  /**
   * 币种名称
   */
  coinName?: string
}

/**
 * 资产 - 财务记录列表
 */
export type AssetsRecordsListReq = {
  /** 类型，201. 充币，202. 提币 ,203 pay , 204. 冲正，501、现货手续费 502、合约手续费 503、提币手续费 504、锁仓手续费 */
  type?: number[] | string;
  /** 开始时间 */
  startDate?: number;
  /** 结束时间 */
  endDate?: number;
  /** 币种 id */
  coinId?: string;
  /** 状态，1、进行中 2、成功 3、失败 4、错误 */
  status?: number[];
  /** 页数 */
  pageNum: number;
  /** 条数 */
  pageSize: number;
  /** 财务类型：logTypeCd：全部时不传，1，现货，2、充提、3、借还款、4、合约、5、手续费、6、衍生品、7、其他 */
  logType?: number;
  /** 合约组 id */
  groupId?: string;
}

export type AssetsRecordsListResp = {
  pageNum: number;
  pageSize: number;
  total: number;
  list: RecordsListResp[];
}

export type RecordsListResp = {
  id: string;
  /** 币种 */
  businessCoin: string;
  /** 总金额 */
  total: string;
  /** 创建时间 */
  createdByTime: number;
  /** 状态，1、进行中 2、成功 3、失败 4、错误 */
  status: number;
  /** 类型，201. 充币，202. 提币 ,203 pay , 204. 冲正，501、现货手续费 502、合约手续费 503、提币手续费 504、锁仓手续费 */
  type: number;
  /** 合约类型 */
  groupType?: number;
  /** 手动/自动 */
  operationType?: string;
  /** 合约组名称 */
  groupName?: string;
  /** 划转来源 */
  from?: string;
  /** 划转去向 */
  to?: string;
}

/**
 * 资产 - 财务记录详情
 */
export type AssetsRecordsDetailsReq = {
  id: string
}

export type PerpetualAssetDetail = {
  /** 时间 */
  time: number;
  /** 数量 */
  amount: string;
  /** 类型 */
  assetType: string;
  /** 当时汇率 */
  rate: string;
  /** 法币 */
  currencyName: string;
  /** 币种 */
  coinName: string;
}

export type PerpetualDealDetail = {
  /** 时间 */
  time: number;
  /** 数量 */
  size: string;
  /** 价格 */
  price: string;
  /** 手续费 */
  fee: string;
  /** 计价币 */
  quoteSymbolName: string;
  /** 标的币 */
  baseSymbolName: string;
}

// 财务记录OTC类型详情
export type AssetsRecordsOtcDetails = {
  /** 交易 hash */
  txHash?: string;
  /** 币种代码 */
  symbol?: string;
  /** 区块确认数/当前确认数  */
  confirmation?: number;
  /** 充值地址/地址 */
  address?: string;
  /** 区块总数/ 提现总确认数 */
  blockTotal?: number;
}

export type AssetsRecordsDetails = {
  /** 充值地址 memo/标签 */
  memo?: string;
  /** 交易 hash */
  txHash?: string;
  /** 手续费 */
  fee?: string;
  /** 币种代码 */
  symbol?: string;
  /** 总金额 */
  total?: number;
  /** 区块确认数/当前确认数  */
  confirmation?: number;
  /** 财务流水 */
  serialNo?: string;
  /** 1、进行中 2、成功 3、失败 4、错误 */
  statusCd: number;
  /** 到账金额/金额/数量 */
  amount?: number;
   /** 创建时间 */
  createdByTime?: number;
  /** 类型，1. 充币，2. 提币，3.pay，4.冲正，5、现货手续费 6、合约手续费 7、提币手续费 8、锁仓手续费 */
  typeInd: number;
  /** 充值地址/地址 */
  address?: string;
  /** 区块总数/ 提现总确认数 */
  blockTotal?: number;
  /** 完成时间 */
  updatedByTime?: number;
  /** 1 区块链充提币；2 Pay；3 平台内区块链地址 */
  channelInd?: number;
  /** 驳回原因 */
  reason?: string;
  /** 目标 uid */
  toUid?: string;
  /** 币种 */
  businessCoin?: string;
  /** 来源 uid */
  fromUid?: string;
  mainnet?:	string;
  /** 手续费币种 */
  feeCoinName?: string;
  /** 1 买单 2 卖单/开空/开多 */
  side: number | string;
  /** 1 限价 2 市价 */
  orderType: number,
  /** 合约相关 */
  /** 币种名称 */
  coinName?: string;
  /** 合约组名称 */
  groupName?: string;
  /** 手动/自动 */
  operationType?: string;
  /** 目标合约组名称 */
  toGroupName?: string;
  /** 杠杆倍数 */
  lever?: string;
  /** 委托价格 */
  price?: string;
  /** 委托类型 */
  entrustTypeInd?: string;
  /** 订单状态 */
  orderStatus?: string;
  /** 委托数量 */
  size?: string;
  /** 成交数量 */
  tradeSize?: string;
  /** 成交均价 */
  tradePrice?: string;
  /** 收益 */
  realizedProfit?: string;
  /** 收益率 */
  realizedProfitYield?: string;
  /** 资金明细 */
  assetDetail?: PerpetualAssetDetail[];
  /** 成交明细 */
  dealDetail?: PerpetualDealDetail[];
  /** 计价币 */
  quoteCoinShortName?: string;
  /** 标的币 */
  baseCoinShortName?: string;
  /** 委托价格类型 */
  orderTypeInd?: string;
  /** 迁移类型 */
  migrateMargin?: string;
  /** 迁移可用保证金 */
  migrateType?: string;
  /** 合约类型 */
  groupType?: string;
  /** c2c 业务类型 */
  typeStr?: string;
  /** 订单编号 */
  orderNumber?: string;
  /** 转出账户 */
  transferOut?: string;
  /** 转入账户 */
  transferIn?: string;
  /** 合约订单是否接管单 */
  isAccept?: number;
  /** 申诉人 */
  appealUserName?: string;
  /** 申诉原因 */
  appealReason?: string;
  /** 申诉人 UID */
  appealUid?: string;
  otcData?: AssetsRecordsOtcDetails;
}

export type AssetsRecordsDetailsResp = {
  /** 充提详情 */
  depositWithdraw: AssetsRecordsDetails;
  /** 手续费详情 */
  fee?: AssetsRecordsDetails;
  /** 合约详情 */
  perpetual?: AssetsRecordsDetails;
  /** 佣金详情 */
  commission?: AssetsRecordsDetails;
  /** c2c 详情 */
  c2cBillLogDetail?: AssetsRecordsDetails;
}

/**
 * 资产 - 币种资产详情 - 交易页面用
 */
export interface ICoinBalanceRequest {
  /**
   * 币种 id 数组
   */
  coinId: string
}

/**
 * 资产 - 币种资产详情 - 交易页面用
 * YAPI：https://yapi.admin-devops.com/project/44/interface/api/2987
 */
export interface ICoinBalanceResponse {
  code?: number
  message?: string
  data?: ICoinBalanceData
}
export interface ICoinBalanceData {
  list?: ICoinBalanceDataList[]
}
export interface ICoinBalanceDataList {
  /**
   * app 图标
   */
  appLogo: string
  /**
   * web 图标
   */
  webLogo: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 币全名
   */
  coinFullName: string
  /**
   * 可用数量
   */
  availableAmount: number
  /**
   * 仓位数量
   */
  lockAmount: number
  /**
   * 总数量
   */
  totalAmount: number
  /**
   * 币种 id
   */
  coinId: string
  /**
   * 钱包币种代码
   */
  symbol: string
}
