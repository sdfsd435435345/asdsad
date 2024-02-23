import { EntrustTypeEnum, EntrustStopLimitType } from "@/constants/trade"
import { YapiPostV1OrdersPlaceApiRequest } from "../yapi/OrdersPlaceV1PostApi"
import { YapiPostV1SplSaveStrategyApiRequest } from "../yapi/SplSaveStrategyV1PostApi"
import { YapiGetV1TradePairDetailData } from '@/typings/yapi/TradePairDetailV1GetApi'
import { YapiPostV1HelpCenterHorseLampApiRequest, YapiPostV1HelpCenterHorseLampApiResponse, YapiPostV1HelpCenterHorseLampListLampList } from '@/typings/yapi/HelpCenterHorseLampV1PostApi'
import { YapiGetV1PerpetualTradePairDetailData } from "../yapi/PerpetualTradePairDetailV1GetApi"
import { YapiPostV1PerpetualOpenPerpetualApiRequest } from "../yapi/PerpetualOpenPerpetualV1PostApi"
import { YapiPostV1PerpetualPlanOrdersPlaceApiRequest } from "../yapi/PerpetualPlanOrdersPlaceV1PostApi"

export type ICreateSpotNormalOrderReq = YapiPostV1OrdersPlaceApiRequest
export type ICreateSpotPlanOrderReq = YapiPostV1SplSaveStrategyApiRequest
export type ITradeNotification = YapiPostV1HelpCenterHorseLampListLampList
export type IQueryTradeNotificationsReq = YapiPostV1HelpCenterHorseLampApiRequest
export type IQueryTradeNotificationsResp = YapiPostV1HelpCenterHorseLampApiResponse
export type ICreateFutureNormalOrderStrategy = {
  /**
   * 触发价格
   */
  triggerPrice: string
  /**
   * 触发价格类型（mark 标记，new 最新）
   */
  triggerPriceTypeInd: string
  /**
   * 方向 close_long 平多 , close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 委托价格，委托价格类型未 market 不传；limit 必传
   */
  price?: string
  /**
   * 委托数量 market limit 都必传
   */
  size?: string
  /** 触发方向 */
  triggerDirectionInd: string
  strategyTypeInd: string
}

export type OrderDragArrayType = {
  sort: number
  value: string
  name: string
}

export type ICreateFutureNormalOrderReq = {
  /**
   * 合约组 id
   */
  groupId: any
  /**
   * 仓位 id ,减仓单，平仓单必传
   */
  positionId: number
  /**
   * 交易对 id
   */
  tradeId: number
  /**
   * 订单类型    limit_order 限价委托单  market_order 市价委托单 forced_liquidation_order 强平委托单 forced_lighten_order 强减委托单
   */
  typeInd: string
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 方向类型 open_long 开多 , open_short 开空 ,close_long 平多，close_short 平空
   */
  sideInd: string
  /**
   * 委托价格;限价单必传，市价单不传
   */
  price?: number
  /**
   * 委托数量;限价单市价单必传
   */
  size?: number
  /**
   * 市价单单位 amount 按金额 quantity 按数量
   */
  marketUnit?: string
  /**
   * 下单金额或减仓价值，市价单按金额 market_unit=amount 时必传
   */
  funds?: number
  /**
   * 开仓保证金来源  assets 使用资产账户的资金开仓 cgroup 使用当前合约组的额外保证金开仓
   */
  marginType?: string
  /**
   * 开仓初始仓位保证金
   */
  initMargin?: number
  /**
   * 开仓额外保证金来源  assets 账户资产作为额外保证金 open_funds 开仓资金作为额外保证金
   */
  additionalMarginType?: string
  /**
   * 开仓额外保证金
   */
  additionalMargin?: number
  /**
   * 开仓杠杆倍数
   */
  lever?: number
  placeUnit: string
  autoAddMargin?: string
  strategy?: {
    stopProfit?: ICreateFutureNormalOrderStrategy
    stopLoss?: ICreateFutureNormalOrderStrategy
  }
}
export type ICreateFuturePlanOrderReq = YapiPostV1PerpetualPlanOrdersPlaceApiRequest


export type IMarginCoinItem = {
  id: string
  name: string
  balance: string
  appLogo: string
  autoAddBalance: string
}
export type IQueryMarginCoinsResp = IMarginCoinItem[][]
export type IQueryCloseCoinsResp = IMarginCoinItem[]
export type IOrderConfirmSettings = [EntrustTypeEnum, EntrustTypeEnum, EntrustStopLimitType][]

export type ISpotCoinDetail = YapiGetV1TradePairDetailData & {
  /** 买币单位精度 */
  frontendBuyDigit?: number
  /** 卖币单位精度 */
  frontendSellDigit?: number
}

export type WithdrawsFeeListReq = {
  /** 币种或者主网 */
  param?: string
 }

 export type WithdrawsFeeListResp = {
  coinRemarks: string;
  createdByTime: string;
  issuePrice?: any;
  payHint?: any;
  appLogo: string;
  minWithdrawCount?: any;
  issueAllNum?: any;
  monitoringPlatform?: any;
  circulatingSupply: number;
  officialUrl: string;
  monitoringPlatformRule: number;
  favouritePercent: number;
  publicChain: string;
  monitoringStatus?: any;
  minPayCount?: any;
  startTime: string;
  id: number;
  maxSupply: number;
  addressSelect: string;
  createdById: number;
  startPrice: number;
  feeCoinId: number;
  memoCheck?: any;
  maxWithdrawCount?: any;
  updatedByTime: string;
  fullName: string;
  favouritePercentFrom: number;
  updatedById: number;
  withdrawFee: number;
  lowest: number;
  version: number;
  whitePaper: string;
  lowestTime: string;
  coinId: number;
  txidSelect?: any;
  highest: number;
  webLogo?: any;
  highestTime?: any;
  coinName: string;
  explorerAddressUrl?: any;
  circulatingPercent?: any;
  publicChains?: string;
  withdrawFees?: string;
}

export type MarginCoinArrayType = {
  sort: number
  rate: string
  coinId: number
  coinName: string
  selected: boolean
  currencySymbol: string
}

export type MarginCoinType = {
  isAvg: string
  coinData: Array<MarginCoinArrayType>
}

export type ContractPreferenceResp = {
  isAutoAdd: string // 是否自动追加保证金  yes 是  no 否
  autoAddThreshold: number // 自动追加保证金 补齐保证金档位  低  70%  中 85%   高 100%  取值范围 (0-1]  例：0.70
  isAutoAddExtra: string // 是否自动转入额外保证金  yes 是  no 否
  retrieveWay: string //  保证金取回方式   auto 自动取回 , manual 手动取回
  protect: string // 价差保护   open 开启   close 关闭
  isAvg: string //  扣款是否均摊     yes 是  no 否
  marginSource: string // 开仓保证金来源   --wallet   资金账户      --group   合约组剩余额外保证金
  isSettingAutoMargin: boolean // 是否设置过自动追加保证金，true，设置过，false，未设置
}

export type ContractSettlementCurrencyType = {
  coinId: number // 币种 Id
  rate: string // 汇率
  currencySymbol: string // 法币符号
  coinName: string // 币种名称
}

export type AutoDetailType = {
  available: string // 可用 usd 数量
  isSettingAutoMargin: string // 是否设置过自动追加保证金，true，设置过，false，未设置过
  remaining: string // 上次设置保证金剩余量 usd
  total: string // 已追加的保证金 usd
  currencySymbol: string
  maxSettingAmount?: string
  lastTimeSettingAutoMargin: boolean
  lastTimeRemaining: string
}

export type AdjustCoinGroupType = {
  id: number
  name: string
  baseCoin: string
  isAutoAdd: string
  realizedProfit: string
  unrealizedProfit?: string
}

export type AutoAddPreferenceResp = {
  isAutoAdd: string // 是否自动追加保证金  yes 是  no 否
  autoAddThreshold: number // 自动追加保证金 补齐保证金档位  低  70%  中 85%   高 100%  取值范围 (0-1]  例：0.70
  autoAddQuota: number // 用户设置的自动追加保证金法币 (USD) 价值
  isAutoAddExtra: string // 是否自动转入额外保证金  yes 是  no 否
  retrieveWay: string //  保证金取回方式   auto 自动取回 , manual 手动取回
  protect: string // 价差保护   open 开启   close 关闭
  isAvg: string //  扣款是否均摊     yes 是  no 否
  marginSource: string // 开仓保证金来源   --wallet   资金账户      --group   合约组剩余额外保证金
  isSettingAutoMargin: boolean // 是否设置过自动追加保证金，true，设置过，false，未设置
  perpetualVersion: number // 合约版本
  hasOpenSpecializeVersion: number // 是否开通过专业版合约，1，开通过，2，未开通过
  clearCoinSymbol: string // 结算币种
  autoCloseIsolatedPosition: string // 无保证金自动关闭逐仓，open 开启 ,close 关闭
}

export type ContractAssetsMarginCoinType = {
  coinId: number // 币种 Id
  sort: number // 排序
  rate: string // 汇率
  currencySymbol: string // 法币符号
  coinName: string // 币种名称
  selected?: boolean // 是否勾选
}

export type ContractAssetsMarginResp = {
  isAvg: string // 扣款是否均摊     yes 是（等比扣款）no 否（顺序扣款）
  coinData: Array<ContractAssetsMarginCoinType>
}

export type MemberOpenContractReq = {
  assetsMarginData: ContractAssetsMarginResp // 保证金币种配置
  clearingCoinData: Array<{
    coinId: number // 币种 Id
  }> // 结算币种配置
  perpetualVersion: number // 合约版本
}

export interface UsrMemberSettingsType {
  /** 合约开通状态 1=true; 2=false */
  isOpenContractStatus: number
  /** 杠杆现货开通状态 1=true; 2=false */
  isOpenSpotStatus: number
  /** 是否启用行情异动提醒 1=true; 2=false */
  isOpenPriceWarn: number
  /** 是否启用合约订单提醒 1=true; 2=false */
  isOpenOrderWarn: number
  /** 是否启用最新活动提醒 1=true; 2=false */
  isOpenActiveWarn: number
  /** 是否启用新币提醒 1=true; 2=false */
  isOpenCurrencyWarn: number
  /** 合约版本 1=专业版; 2=普通版 */
  perpetualVersion: number
}

export type MarginRecordType = {
  id: string
  time: number
  coinName: string
  groupName: string
  amount: string
  status: string
  logType: string
  operationType: string
}

export type AutoAddPreferenceSettingReq = Partial<ContractPreferenceResp>

 export type IFutureCoinDetail = YapiGetV1PerpetualTradePairDetailData & {
  assetFeeRate: number
 }

 export type ITradePairLever = Required<YapiGetV1PerpetualTradePairDetailData>['tradePairLeverList'][0]

 export type IOpenFutureReq = YapiPostV1PerpetualOpenPerpetualApiRequest 
