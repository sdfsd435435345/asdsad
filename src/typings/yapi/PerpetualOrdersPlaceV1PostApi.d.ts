/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新建普通委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/3639) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/orders/place`
 * @更新时间 `2023-11-07 17:49:40`
 */
export interface YapiPostV1PerpetualOrdersPlaceApiRequest {
  /**
   * 合约组id
   */
  groupId: number
  /**
   * 仓位id ,减仓单，平仓单必传
   */
  positionId?: number
  /**
   * 交易对id
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
   * 方向类型 open_long 开多 , open_short 开空 ,close_long 平多, close_short 平空
   */
  sideInd: string
  /**
   * 委托价格;限价单必传,市价单不传
   */
  price?: number
  /**
   * 委托数量;限价单市价单按数量必传
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
   *  wallet 使用资产账户的资金开仓 group 使用当前合约组的额外保证金开仓
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
  strategy?: YapiPostV1PerpetualOrdersPlaceApiRequestStrategy
  /**
   * 是否自动追加保证金 开仓时，如果选择创建新合约组时，必传 yes,是；no,否；
   */
  autoAddMargin?: string
  /**
   * 选择新建账户时才需要传。不传默认为temporary。选择全仓，必传immobilization；账户类型：temporary:临时，immobilization：长期
   */
  accountType?: string
  coupons: YapiPostV1PerpetualOrdersPlaceApiRequestListCoupons[]
  /**
   * 开仓的初始保证金中包含多少体验金，开仓时选择了体验金券会有值,平仓不要传
   */
  voucherAmount?: number
}
/**
 * 止盈止损
 */
export interface YapiPostV1PerpetualOrdersPlaceApiRequestStrategy {
  stopProfit?: YapiPostV1PerpetualOrdersPlaceApiRequestStopProfitStrategy
  stopLoss?: YapiPostV1PerpetualOrdersPlaceApiRequestStopLossStrategy
}
/**
 * 止盈
 */
export interface YapiPostV1PerpetualOrdersPlaceApiRequestStopProfitStrategy {
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
   * 委托价格类型 limit 限价 market 市价
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
export interface YapiPostV1PerpetualOrdersPlaceApiRequestStopLossStrategy {
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
   * 委托价格类型 market 市价
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
export interface YapiPostV1PerpetualOrdersPlaceApiRequestListCoupons {
  /**
   * 选择的优惠券的id
   */
  couponId: number
  /**
   * 选择的优惠券的couponType
   */
  couponType: string
  /**
   * 选择的优惠券的couponCode
   */
  couponCode: string
}

/**
 * 接口 [新建普通委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/3639) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/orders/place`
 * @更新时间 `2023-11-07 17:49:40`
 */
export interface YapiPostV1PerpetualOrdersPlaceApiResponse {
  /**
   * 200表示成功 其他code表示失败
   */
  code?: number
  /**
   * 错误消息
   */
  message?: string
  /**
   * 订单ID
   */
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [新建普通委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/3639)
// **/
// export const postV1PerpetualOrdersPlaceApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualOrdersPlaceApiRequest,
//   YapiPostV1PerpetualOrdersPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/orders/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
