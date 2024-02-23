import { YapiGetV1PerpetualGroupListData } from "@/typings/yapi/PerpetualGroupListV1GetApi"
import { YapiGetV1TradePairListData } from "@/typings/yapi/TradePairListV1GetApi"
import { IMarginCoinItem } from "../trade"

export type IFuture = YapiGetV1TradePairListData & {
  typeInd: string
  minusFeeRate: number
  plusFeeRate: number

}
export type IFutureListReq = {
  type: string
}
export type IFutureListResp = {
  list: IFuture[]
}

export type IFutureGroup = {
  id: string
  name: string
  autoAddMargin: boolean
  profit: string
  profitRate: string
  groupAssets: string
  positionAssets: string
  extraMarginAssets: string
  pledgeBy?: IFutureGroup
  pledgeTo?: IFutureGroup
  maxHolding: number
} & YapiGetV1PerpetualGroupListData
export type IFutureGroupRecord = {
  future?: IFuture
  marginCoin?: IMarginCoinItem
  createTime: number
  amount: number
  id: string
  status: number
  type: number
}
export type IQueryFutureGroupRecordsReq = {
  id?: string
  page: number
  pageSize: number
  type: number | string
  status: number | string
  coinId: number | string
}
export type IPerpetualFuture = {
  base: string
  indexBase: string
  code: string
  price: string
  quote: string
  marketPriceDigit: number
  unitAmount: string
}
export type IPerpetualFutureListResp = IPerpetualFuture[]
/**
 * 合约资产币种
 */
 export type IFutureAssetsCoin = {
  currencyCode: string
  realAvailableBalance: string
}
/**
 * 合约资金费率以及价格
 */
 export type IFutureFundRatePrice = {
  contractcode: string
  estimatefeerate: string
  feerate: string
  indexprice: string
  markprice: string
  nextliquidationinterval: number
  totalposition: string
}
/**
 * 合约行情
 */
 export type IFutureQuotation = {
  amount24: string
  buy: string
  change24: string
  changepercentage: string
  contractCode: string
  contractcode: string
  createddate: number
  first: string
  high: string
  last: string
  lastcny: string
  low: string
  sell:string
  size24: string
}

export type IFutureConfig = {
  autoAddMargin: 1 | 0
  // 含义不明，暂时用来判断是否展示自动追加保证金
  type: 1
}

export type IUpdateFutureConfigReq = {
  contractCode: string
  value: any
  // TODO: 暂时只看到更新追加保证金的设置
  type: 1
}
