import { YapiGetV1C2COrderDetailData } from "@/typings/yapi/C2cOrderDetailV1GetApi"
import { YapiGetV1C2COrderGetsPageByListData } from "@/typings/yapi/C2cOrderGetsPageByV1GetApi"
import { IC2cCoinItem } from "./trade"

export type IC2cOrderItem = YapiGetV1C2COrderGetsPageByListData & {
  mainChainName?: string
  currencyPrecision?: number
  coinPrecision?: number
  tradePrecision?: number
  paymentDetails?: string
}

export type IC2cOrderDetail = Omit<YapiGetV1C2COrderDetailData, 'id'> & {
  id: string
  tid: string
  paymentDetails?: string
  /**
   * 买方 - 商家昵称
   */
  buyerMerNickName?: string
  /**
   * 卖方 - 商家昵称
   */
  sellerMerNickName?: string
  /**
   * 买方 - 成单率
   */
  buyerCompletedOrderRate?: string
  /**
   * 卖方 - 成单率
   */
  sellerCompletedOrderRate?: string
  /**
   * 卖方 - 用户姓名
   */
  sellerUserName: string
  /**
   * 买方 - 是否商家
   */
  buyerIsMerchant?: string
  /**
   * 卖方 - 是否商家
   */
  sellerIsMerchant?: string
  cancelType?: string
  appealWinnerUid?: string
  isSystemStartAppeal?: boolean
} 
export type IC2cQueryOrderListReq = {
  pageNum?: number
  pageSize?: number
  beginDate?: number
  endDate?: number
  direction?: any[]
  key?: string
  statusTab?: any
  statusCd?: string
  currentCoin?: IC2cCoinItem
  coinId?: any
  dealTypeCd?: string
  tradeAreas?: any[]
  areaIds?: string
  tradeTypes?: any[]
  directCd?: string
  searchKey?: string
  createdTimeBegin?: number
  createdTimeEnd?: number
}

export type IC2cQueryOrderListResp = {
  list: IC2cOrderItem[]
  total: number
}

export type IC2cUpdateOrderStatusReq = {
  id: string
  statusCd: string
}
export type IC2cCancelOrderReq = {
  id: string
  type: string
  reason: string
}
export type IC2cAppealOrderReq = {
  id: string
  appealReason: string
  specificReason: string
  picture: string[]
  video: string
}