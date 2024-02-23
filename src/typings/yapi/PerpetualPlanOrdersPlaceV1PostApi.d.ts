/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新建合约计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3891) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/plan/orders/place`
 * @更新时间 `2023-11-01 10:15:09`
 */
export interface YapiPostV1PerpetualPlanOrdersPlaceApiRequest {
  /**
   * 合约组id
   */
  groupId: number
  /**
   * 触发价格类型（mark 标记价格，new 最新价格）
   */
  triggerPriceTypeInd: string
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发方向（up=向上对比，down=向下对比）  向上 和 向下 这个方向是由前端开发人员 根据当前最新价格 和 用户在此处设置的触发价格 做对比得出，若当前价格 < 触发价格，方向为向上；若当前价格 > 触发价格，方向为向下
   */
  triggerDirectionInd: string
  /**
   * 仓位id ,减仓单，平仓单必传
   */
  positionId?: number
  /**
   * 交易对id
   */
  tradeId: number
  /**
   * 订单类型    limit_order 计划限价委托单  market_order 计划市价委托单
   */
  typeInd: string
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 方向类型 open_long 开多 , open_short 开空 ,close_long 平多, close_short 平空
   */
  sideInd: string
  /**
   * 委托价格;限价单必传,市价单不传
   */
  price?: number
  /**
   * 委托数量;限价单市价单必传
   */
  size: number
  /**
   * 市价单单位 amount按金额 quantity 按数量
   */
  marketUnit?: string
  /**
   * 下单金额或减仓价值，市价单按金额market_unit=amount时必传
   */
  funds?: number
  /**
   * 下单选择的币种是标的币还是计价币；如果是标的币传BASE，如果是计价币传QUOTE
   */
  placeUnit: string
  /**
   *  wallet 使用资产账户的资金开仓 group 使用当前合约组的额外保证金开仓
   */
  marginType?: string
  /**
   * 开仓初始仓位保证金
   */
  initMargin?: number
  /**
   * 开仓额外保证金
   */
  additionalMargin?: number
  /**
   * 开仓杠杆倍数
   */
  lever?: number
  strategy?: YapiPostV1PerpetualPlanOrdersPlaceApiRequestStrategy
  /**
   * 是否自动追加保证金 开仓时，如果选择创建新的合约组，必传，yes,是；no,否。
   */
  autoAddMargin?: string
  /**
   * 额外保证金来源 assets=账户资产作为额外保证金，open_funds=开仓资金作为额外保证金
   */
  additionalMarginType: string
  /**
   * 选择新建账户时才需要传。不传默认为temporary。选择全仓，必传immobilization；账户类型：temporary:临时，immobilization：长期
   */
  accountType?: string
  /**
   * 优惠券列表
   */
  coupons?: YapiPostV1PerpetualPlanOrdersPlaceApiRequestListCoupons[]
  /**
   * 体验金额
   */
  voucherAmount?: number
}
/**
 * 止盈止损
 */
export interface YapiPostV1PerpetualPlanOrdersPlaceApiRequestStrategy {
  stopProfit?: YapiPostV1PerpetualPlanOrdersPlaceApiRequestStopProfitStrategy
  stopLoss?: YapiPostV1PerpetualPlanOrdersPlaceApiRequestStopLossStrategy
}
/**
 * 止盈
 */
export interface YapiPostV1PerpetualPlanOrdersPlaceApiRequestStopProfitStrategy {
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerPriceTypeInd: string
  /**
   * 方向 close_long 平多 , close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 固定写死 market 市价
   */
  entrustTypeInd: string
  /**
   * 策略类型 stop_profit 止盈
   */
  strategyTypeInd: string
  /**
   * 触发方向（up=向上，down=向下），平多止盈为up,平空止盈为down
   */
  triggerDirectionInd: string
}
/**
 * 止损
 */
export interface YapiPostV1PerpetualPlanOrdersPlaceApiRequestStopLossStrategy {
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerPriceTypeInd: string
  /**
   * 方向 close_long 平多 , close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型固定写死 market 市价
   */
  entrustTypeInd: string
  /**
   * 策略类型 stop_loss 止损
   */
  strategyTypeInd: string
  /**
   * 触发方向（up=向上，down=向下），平多止损为down,平空止损为up
   */
  triggerDirectionInd: string
}
export interface YapiPostV1PerpetualPlanOrdersPlaceApiRequestListCoupons {
  /**
   * 券ID
   */
  couponId: number
  /**
   * 券类型code
   */
  couponCode: string
  /**
   * 券分类
   */
  couponType: string
}

/**
 * 接口 [新建合约计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3891) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/plan/orders/place`
 * @更新时间 `2023-11-01 10:15:09`
 */
export interface YapiPostV1PerpetualPlanOrdersPlaceApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1PerpetualPlanOrdersPlaceData
}
export interface YapiPostV1PerpetualPlanOrdersPlaceData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [新建合约计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3891)
// **/
// export const postV1PerpetualPlanOrdersPlaceApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPlanOrdersPlaceApiRequest,
//   YapiPostV1PerpetualPlanOrdersPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/plan/orders/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
