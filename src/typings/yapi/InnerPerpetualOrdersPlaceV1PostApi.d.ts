/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新建普通委托单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3979) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /inner/v1/perpetual/orders/place`
 * @更新时间 `2023-02-23 11:29:36`
 */
export interface YapiPostInnerV1PerpetualOrdersPlaceApiRequest {
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
  strategy?: YapiPostInnerV1PerpetualOrdersPlaceApiRequestStrategy
  /**
   * 商户id
   */
  businessId: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 来源 normal 普通委托 plan 计划委托触发 stop_profit止盈触发 stop_loss 止损触发 force 强平强减 quantitative 量化
   */
  sourceType: string
  /**
   * 源id 内部接口调用必传
   */
  sourceId: string
  /**
   * 1:web  2:android 3:ios 4:h5 5:api
   */
  source: number
}
/**
 * 止盈止损
 */
export interface YapiPostInnerV1PerpetualOrdersPlaceApiRequestStrategy {
  stopProfit?: YapiPostInnerV1PerpetualOrdersPlaceApiRequestStopProfitStrategy
  stopLoss?: YapiPostInnerV1PerpetualOrdersPlaceApiRequestStopLossStrategy
}
/**
 * 止盈
 */
export interface YapiPostInnerV1PerpetualOrdersPlaceApiRequestStopProfitStrategy {
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerTypeInd: string
  /**
   * 方向 close_long 平多 , close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 委托价格，委托价格类型未market不传；limit必传
   */
  price?: number
  /**
   * 委托数量 market limit都必传
   */
  size: number
}
/**
 * 止损
 */
export interface YapiPostInnerV1PerpetualOrdersPlaceApiRequestStopLossStrategy {
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerTypeInd: string
  /**
   * 方向 close_long 平多 , close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 委托数量 market limit都必传
   */
  price?: number
  /**
   * 委托数量 market limit都必传
   */
  size: number
}

/**
 * 接口 [新建普通委托单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3979) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /inner/v1/perpetual/orders/place`
 * @更新时间 `2023-02-23 11:29:36`
 */
export interface YapiPostInnerV1PerpetualOrdersPlaceApiResponse {
  /**
   * 下单结果集
   */
  data?: YapiPostInnerV1PerpetualOrdersPlaceListData[]
  /**
   * 接口调用情况code值 200成功 其他code值失败
   */
  code?: number
  /**
   * 消息描述
   */
  message?: string
}
export interface YapiPostInnerV1PerpetualOrdersPlaceListData {
  /**
   * 下单情况 code值 成功:200  , 其他code值为下单失败原因对应的code
   */
  code: number
  /**
   * 下单成功:success ，下单失败： 其他错误描述
   */
  message: string
  /**
   * 源id
   */
  sourceId: string
  /**
   * 订单id string
   */
  orderId: string
  /**
   * true 下单成功 false 下单失败
   */
  success: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [新建普通委托单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3979)
// **/
// export const postInnerV1PerpetualOrdersPlaceApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualOrdersPlaceApiRequest,
//   YapiPostInnerV1PerpetualOrdersPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/orders/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
