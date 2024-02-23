/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [批量_新建普通委托单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3895) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /inner/v1/perpetual/orders/batch/place`
 * @更新时间 `2023-02-23 11:33:28`
 */
export interface YapiPostInnerV1PerpetualOrdersBatchPlaceApiRequest {
  orders?: YapiPostInnerV1PerpetualOrdersBatchPlaceApiRequestListOrders[]
}
export interface YapiPostInnerV1PerpetualOrdersBatchPlaceApiRequestListOrders {
  /**
   * 下单选择的币种是标的币还是计价币；如果是标的币传BASE，如果是计价币传QUOTE
   */
  placeUnit: string
  /**
   * 委托价格;限价单必传,市价单不传
   */
  price?: number
  /**
   * 方向类型 open_long 开多 , open_short 开空 ,close_long 平多, close_short 平空
   */
  sideInd: string
  /**
   * 合约组id
   */
  groupId: number
  /**
   * quantitative
   */
  sourceType: string
  /**
   * 用户ID
   */
  uid: string
  /**
   * 仓位ID，平仓必传
   */
  positionId?: number
  /**
   * 下单金额或减仓价值，市价单按金额market_unit=amount时必传
   */
  funds?: number
  /**
   * 开仓杠杆倍数
   */
  lever?: number
  strategy?: YapiPostInnerV1PerpetualOrdersBatchPlaceApiRequestStrategyListOrders
  /**
   * 订单类型    limit_order 限价委托单  market_order 市价委托单 forced_liquidation_order 强平委托单 forced_lighten_order 强减委托单；普通下单只需要传现价委托或者市价委托
   */
  typeInd: string
  /**
   * 1 web 2 android 3 ios 4 h5, 5 api 量化传5
   */
  source: number
  /**
   * 来源ID，调用方的ID
   */
  sourceId: string
  /**
   * 市价单单位 amount按金额 quantity 按数量
   */
  marketUnit?: string
  /**
   * 商户ID
   */
  businessId: string
  /**
   * 交易对ID
   */
  tradeId: number
  /**
   * 委托数量;限价单市价单按数量必传，市价单按照数量下单必传
   */
  size: number
  /**
   * 开仓额外保证金
   */
  additionalMargin: number
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 开仓初始仓位保证金
   */
  initMargin: number
  /**
   *  wallet 使用资产账户的资金开仓 group 使用当前合约组的额外保证金开仓
   */
  marginType: string
}
/**
 * 止盈止损策略
 */
export interface YapiPostInnerV1PerpetualOrdersBatchPlaceApiRequestStrategyListOrders {
  stopProfit?: YapiPostInnerV1PerpetualOrdersBatchPlaceApiRequestStopProfitStrategyListOrders
  stopLoss?: YapiPostInnerV1PerpetualOrdersBatchPlaceApiRequestStopLossStrategyListOrders
}
export interface YapiPostInnerV1PerpetualOrdersBatchPlaceApiRequestStopProfitStrategyListOrders {
  price?: number
  entrustTypeInd?: string
  triggerSideInd?: string
  triggerPrice?: number
  triggerTypeInd?: string
  size?: number
}
export interface YapiPostInnerV1PerpetualOrdersBatchPlaceApiRequestStopLossStrategyListOrders {
  price?: number
  triggerSideInd?: string
  triggerPrice?: number
  triggerTypeInd?: string
  entrustTypeInd?: string
  size?: number
}

/**
 * 接口 [批量_新建普通委托单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3895) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /inner/v1/perpetual/orders/batch/place`
 * @更新时间 `2023-02-23 11:33:28`
 */
export interface YapiPostInnerV1PerpetualOrdersBatchPlaceApiResponse {
  /**
   * 下单结果集
   */
  data?: YapiPostInnerV1PerpetualOrdersBatchPlaceListData[]
  /**
   * 接口调用情况code值 200成功 其他code值失败
   */
  code?: number
  /**
   * 消息描述
   */
  message?: string
}
export interface YapiPostInnerV1PerpetualOrdersBatchPlaceListData {
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
// * [批量_新建普通委托单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3895)
// **/
// export const postInnerV1PerpetualOrdersBatchPlaceApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualOrdersBatchPlaceApiRequest,
//   YapiPostInnerV1PerpetualOrdersBatchPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/orders/batch/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
