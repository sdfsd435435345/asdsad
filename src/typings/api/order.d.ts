import { FutureHoldingOrderDirectionEnum, FutureOrderDirectionEnum, FutureOrderPositionTypeEnum, FutureOrderPriceTypeEnum, FutureOrderStatusEnum, FutureOrderStopLimitTypeEnum, FutureOrderSystemTypeEnum, OrderMarginModeEnum, OrderMarketUnitEnum,  OrderMatchTypeEnum, OrderPriceTypeEnum, OrderStatusEnum } from '../../constants/order'
import { YapiGetV1OrdersCurrentApiRequest as IQuerySpotNormalOpenOrderListReq, YapiGetV1OrdersCurrentData as IQuerySpotNormalOpenOrderListResp } from '../yapi/OrdersCurrentV1GetApi.d'
import { YapiGetV1OrdersHistoryListData as IBaseOrderItem, YapiGetV1OrdersHistoryListTransactionLogsListData as IBaseOrderTransactionLog, YapiGetV1OrdersHistoryApiRequest as IQuerySpotNormalHistoryOrderListReq, YapiGetV1OrdersHistoryData as IQuerySpotNormalHistoryOrderListResp } from '../yapi/OrdersHistoryV1GetApi.d'
import { YapiGetV1SplPageHistoryApiRequest as IIQuerySpotPlanHistoryOrderListReq, YapiGetV1SplPageHistoryListData as ISpotPlanOrderItem, YapiGetV1SplPageHistoryData as IQuerySpotPlanHistoryOrderListResp } from '../yapi/SplPageHistoryV1GetApi.d'
import { YapiGetV1SplPageCurrentApiRequest as IIQuerySpotPlanOpenOrderListReq, YapiGetV1SplPageCurrentData as IQuerySpotPlanOpenOrderListResp } from '../yapi/SplPageCurrentV1GetApi.d'
import { YapiDeleteV1OrdersCancelAllApiRequest as ISpotBatchCancelOrderReq } from '@/typings/yapi/OrdersCancelAllV1DeleteApi'
import { Order_Body as IWsSpotOrder } from '@/plugins/ws/protobuf/ts/proto/Order'


export {
  IQuerySpotNormalOpenOrderListReq,
  IBaseOrderItem,
  ISpotPlanOrderItem,
  IQuerySpotNormalHistoryOrderListReq,
  IQuerySpotNormalOpenOrderListResp,
  IQuerySpotPlanHistoryOrderListResp,
  IQuerySpotPlanOpenOrderListResp,
  IIQuerySpotPlanOpenOrderListReq,
  IIQuerySpotPlanHistoryOrderListReq,
  IQuerySpotNormalHistoryOrderListResp,
  IBaseOrderTransactionLog,
  ISpotBatchCancelOrderReq,
  IWsSpotOrder,
}
/** 现货订单请求参数 */
export type IQuerySpotOrderReqParams = Partial<IQuerySpotNormalHistoryOrderListReq> & {
  direction?: any
  dateType?: any
  statusArr?: any[]
  beginDateNumber?: number
  endDateNumber?: number
  hideCanceled?: boolean
}

/** 订单成交记录 */
export type IOrderDetailLog = {
  id: number
  entrustId: number
  amount: string
  count: string
  createTime: number
  remark: string
  lastupdattime: number
  fee: string
  /** 成交价格 */
  prize: string
}
export type IOrderActionPrams = {
  entrustId?: any
  id?: any
  matchType?: number
  code?: string
}
export type IOrderDetail = IBaseOrderItem & {
  entrustLogs: IOrderDetailLog[]
}
export type IQueryOrderDetailResp = IOrderDetail

export type IFutureStopLimit = {
  amount: string
}
export type IFutureOrderBaseItem = Pick<IBaseOrderItem, 'id' | 'orderType' | 'averagePrice'> & {
  /** 对手币种 */
  indexBase: string
  base: string
  /** U */
  quote: string
  /** 杠杆倍数 */
  lever: string
  createdDate: number
  price: string
  contractCode: string
  /** 委托数量 */
  amount: string
  status: FutureOrderStatusEnum
  /** 计划委托的方向 */
  direction: string
  marketPriceDigit: number
  unitAmount: string
  sideInd: string
}
export type IFutureOrderItem = IFutureOrderBaseItem & {
  profit: string
  triggerPrice: string
  detailSide: FutureOrderDirectionEnum
  positionType: FutureOrderPositionTypeEnum
  systemType: FutureOrderSystemTypeEnum
  stopLimitType: FutureOrderStopLimitTypeEnum
  orderPriceType: FutureOrderPriceTypeEnum
  avgPrice: string
  /** 已成交数量 */
  dealAmount: string
  fee: string
  status: FutureOrderStatusEnum
  reason: number
  modifyDate: number
  triggerDate: number
  stopLoss?: IFutureStopLimit
  stopProfit?: IFutureStopLimit
  refConditionOrderId: string
}

export type IFutureHoldingOrderItem = IFutureOrderBaseItem & {
  type: number
  availableBalance: string
  closingAmount: string
  closingConditionAmount: string
  closingLossConditionAmount: string
  closingProfitConditionAmount: string
  liqudatePrice: string
  lossTriggerPrice: string
  maintainRate: string
  maxLever: string
  stopLoss?: IFutureStopLimit
  stopProfit?: IFutureStopLimit
  openMargin: string
  openMarginRate: string
  orderAmount: string
  preLiqudatePrice: string
  side: FutureHoldingOrderDirectionEnum
  unitAmount: string
  unRealizedSurplus: string
  realizedSurplus: string
  marginDigit: number
  feeRate: string
  avgPrice: string
  base: string
  lockedPosition: boolean
  lockedPositionPercent: number
  // 计算得到
  frontendCalcLiquidateAmount: number
  frontendCalcUnRealizedSurplus: string | number
  frontendCalcEarnings: number
  frontendCalcYieldRate: string
  frontendCalcOpenMarginRateTwo: string
  frontendCalOpenMarginRate: string
  /** 最小保证金 */
  frontendCalcMinMargin: string
  /** 收益 */
  frontendProfit: string
  frontendCalcMinMarginRate: string
  // 计算得到
}

export type IQueryFutureOrderListReq = {
  contractCode?: string
  indexBase?: string
  quote?: string
  status?: number | string
  /** reason 和 status 的合成状态 */
  compositeStatus?: string
  systemType?: string
  stopLimitType?: string
  detailSide?: string
  pageSize?: number
  page?: number
  startDate?: number
  endDate?: number
  /** 当前 tab */
  tab?: any
  // 合成的订单类型
  orderType?: string
  reason?: string
  timeRange?: number
  // 计划订单类型
  type?: string
  side?: string
  /** 持仓专用方向 */
  direction?: string
}
export type IQueryFutureOrderListResp = {
  rows: IFutureOrderItem[]
  total: number
}
export type IQueryFutureOrderDetailReq = {
  order: IFutureOrderItem
}
export type IQueryFutureOrderDetailResp = IFutureOrderItem & {
  dealDetails: {
    dealAmount: string
    dealDate: number
    fee: string
  }[]
  currencyCode: string
  liquidateExplosionDetail: {
    side: string
    contractCode: string
    explosionPrice: string
    feeRate: string
    lever: string
    liquidatePrice: string
    maintainRate: string
    price: string
  }
}
export type IFutureStopLimitBaseReq = {
  amount?: string
  price?: string
  triggerPrice: string
  tradeUnit?: string
  tradeAmountUnit?: string
}
export type ICreateFutureStopLimitReq = {
  code: string
  data: (IFutureStopLimitBaseReq & {
    algoType: FutureOrderSystemTypeEnum
    currentPrice?: string
    side: FutureOrderDirectionEnum
    /** 和接口返回的枚举是相反的 */
    stopLimitType: 1 | 0
    triggerBy: 'last'
    type: 12
  })[]
}
export type IUpdateFutureStopLimitReq = {
  id: string
  data: (IFutureStopLimitBaseReq & {
    emType?: FutureOrderSystemTypeEnum
  })[]
}

export type IMarginOrderItem = {
  afterLiquidatePrice: string
  afterMargin: string
  amount: string
  beforeLiquidatePrice: string
  beforeMargin: string
  contract: {}
  contractCode: string
  createdDate: number
  currencyCode: string
  lever: number
  positionType: number
  side: string
  type: string
}
