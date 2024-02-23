import { FinancialRecordStateEnum } from '@/constants/assets'
import { AssetsRecordTypeEnum, AssetsRecordDateTypeEnum } from '@/constants/assets/common'
import { AssetsQueryCoinPageListCoinListResp, AssetsWithdrawCoinInfoResp } from './api/assets/assets';
import { FutureMarginModeEnum,SpotTradeMarginModeEnum, TradeModeEnum } from "@/constants/trade"
import { PositionList } from './api/assets/futures';

export type NewsDetailReq = { id: any; locale?: string }

export type IAssetsBillsListReq = {}
export type IAssetsBillsListResp = {
  id: string;
  businessCoin: string;
  total: number;
  type: number;
  createdByTime: number;
  status: number;
}

/**
 * 财务记录 - 页面数据
 */
export type IAssetsRecordResp = {
  coinId?: string;
  /** 币种名称 */
  coinName?: string;
  /** 类型 */
  type?: number | string;
  dateType?: AssetsRecordDateTypeEnum;
  startDate?: number;
  endDate?: number;
  status?: FinancialRecordStateEnum[] | any
}

/**
 * 提现页面表单数据
 */
 export type IWithdrawFormData = {
  /** 提币数量 */
  amount: string
  /** 主币信息 */
  coin: AssetsQueryCoinPageListCoinListResp
  /** memo 地址 */
  memo: string
  error: boolean
  /** 主网信息 */
  network: any
  /** 收款人 UID */
  uid: string
  /** 提币地址 */
  address: string
}

/**
 * 币种详情历史记录
 */
 export type IHistoryData = {
  /** 加载是否已完成 */
  finished: boolean
  /** 总数 */
  total: number
  /** 每页条数 */
  pageSize: number
  /** 页码 */
  pageNum: number
  /** 历史记录列表 */
  list: any[]
 }


/** 获取杠杆资产方法入参 */
export type getMarginAssetsProps = {
  /** cross 全仓，isolated 逐仓 */
  activeName: string
  /** 币 id */
  tradeId: number
  /** 杠杆模式：1 普通模式，2 自动借款模式，3 自动还款模式 */
  leverBuyMode: SpotTradeMarginModeEnum
  /** 杠杆卖出模式：1 普通模式，2 自动借款模式，3 自动还款模式 */
  leverSellMode: SpotTradeMarginModeEnum
  /** 回调，返回当前币种的资产数据 */
  onSuccess?(data: any): void
}

/** 获取现货资产 - 主要交易页面用 */
export interface IUserAssetsSpot {
  tradeId?: number
  /** 买币 id */
  buyCoinId?: number
  /** 卖币 id */
  sellCoinId?:number
}

/** 获取用户资产 - 方法入参 */
export type getMyAssetsDataProps = {
  /** 账户类型：TradeModeEnum */
  accountType: TradeModeEnum
  /** 现货资产入参 */
  paramsCoin?: {
    /** 币对 id */
    tradeId: number
  }
  /** 现货资产入参 */
  paramsMargin?: {
    /** cross 全仓，isolated 逐仓 */
    activeName: FutureMarginModeEnum
    /** 币对 id */
    tradeId: number
    /** 杠杆买入模式：1 普通模式，2 自动借款模式，3 自动还款模式 */
    leverBuyMode: SpotTradeMarginModeEnum
    /** 杠杆卖出模式：1 普通模式，2 自动借款模式，3 自动还款模式 */
    leverSellMode: SpotTradeMarginModeEnum
  }
  /** 合约资产入参 */
  paramsFutures?: {
    /** 当前选中币的 code，如：usdt */
    currencyCode: string
  }
  /** 回调，返回当前币种的资产数据 */
  onSuccess?(data: any): void
}

/**
 * 合约组分组持仓列表
 */
export interface IPositionGroupList {
  /** 合约组 ID */
  groupId: string;
  /** 持仓列表 */
  data: PositionList[];
  /** 未实现盈亏总额 */
  unrealizedProfitTotal?: string;
  /** 维持保证金总额 */
  maintMarginRatioTotal?: string;
  /** 开仓保证金总额 */
  openMarginTotal?: string;
}
