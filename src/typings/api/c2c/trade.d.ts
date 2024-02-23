import { YapiPostV1C2CAdvertIndexListData } from "@/typings/yapi/C2cAdvertIndexListV1PostApi"
import { YapiGetV1C2CCoinAllListData } from "@/typings/yapi/C2cCoinAllV1GetApi"
import { YapiPostV1C2CCoinListData } from "@/typings/yapi/C2cCoinListV1PostApi"
import { YapiPostV1C2cOrderCreateApiRequest } from "@/typings/yapi/C2cOrderCreateV1PostApi"
import { YapiGetV1C2CPaymentReciveListRecivePaymentListData } from "@/typings/yapi/C2cPaymentReciveListV1GetApi"
import { YapiPostV1C2cQuickTransactionSellCurrencyApiRequest } from "@/typings/yapi/C2cQuickTransactionSellCurrencyV1PostApi"
import { C2CAreaListResp } from "./common"

export type IC2cPayAccount = {
  account: string
  paymentDetails?: string
  qrcode?: string
  name?: string
  enabled?: boolean
  paymentId: string
}
export type IC2cPayment = {
  name: string
  type: string
  accounts: IC2cPayAccount[]
  account?: string
  qrcode?: string
  bankName?: string
  enabled?: number
  paymentDetails?: string
}
export type ITradeAreaItem = C2CAreaListResp
export type IQueryTradeAreaListResp = {
  list: ITradeAreaItem[]
}
type INetwork = {
  name: string
  id: string
}
/** 广告单 */
export type ITradeAdItem = Omit<YapiPostV1C2CAdvertIndexListData, 'newPayments'> & {
  statusCd: string
  newPayments: {
    name: string
    grey: boolean
  }[]
  notCanTradeType?: string
  completedOrderCount?: number
}
export type IQueryTradeAdListResp = {
  list: ITradeAdItem[]
}
export type IQueryTradeAdListReq = {
  areaId?: string | number
  pageNum?: number
  pageSize?: number
  amount?: number | string
  count?: number | string
  advertDirectCds?: string[]
  advertDirect?: string
  currentCoin?: IC2cCoinItem
  currentTradeArea?: ITradeAreaItem
  coinId?: string
  advertTypeCds?: any[]
  tradeTypeCds?: any[]
  chains?: any[]
  payments?: any[]
  buyType?: string
  sort?: string
  price?: string
}

export type IC2cCoinItem = YapiPostV1C2CCoinListData & YapiGetV1C2CCoinAllListData

export type IC2cCoinListResp = IC2cCoinItem[]
type INumberToString<T> = {
  [key in keyof T]: T[key] extends number ? (string | number) : T[key] extends (number | undefined) ? (string | number)  : T[key]
}
export type ICreateC2cOrderReq = INumberToString<YapiPostV1C2cOrderCreateApiRequest>
export type IQueryC2cTradeAdMatchedReq = YapiPostV1C2cQuickTransactionSellCurrencyApiRequest & {
  isBuy: boolean
}
/** 快捷交易最佳匹配 */
export type IBestAdItem = {
  price: string | number
  paymentId: string | number
  paymentType: string | number
  paymentAccount: string | number
  advertId: string | number
  accounts: IC2cPayAccount[]
  name?: string
  isOtc?: boolean 
  payUrl?: string
  isUsed?: boolean
}

export type IUserReceivePayment = YapiGetV1C2CPaymentReciveListRecivePaymentListData

export type IQueryC2cUserReceivePayment = {
  paymentTypeCd: string
  name: string
  account: string
  bankOfDeposit: string
  qrCodeAddr: string
  enabled: number
  id: string
  paymentDetails?: string
  legalCurrencyId: string
}
export type IQueryC2cUserReceivePaymentsResp = {
  paymentList: {
    paymentType: string
    list: IQueryC2cUserReceivePayment[]
  }[]
}

export type IC2cOrderBookDetail = {
  price: string
  direction: string
  coin: IC2cCoinItem
  area: ITradeAreaItem
}
export type IQueryTradingActivitiesReq = {
  areaId?: string | number,
  coinId?: string
}
export type ITradingActivitiesItem = {
  price: string
  quantity: string
}
export type IQueryTradingActivitiesResp = {
  buys: ITradingActivitiesItem[],
  sells: ITradingActivitiesItem[]
}