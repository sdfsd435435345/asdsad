/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [止盈止损 - 下单↗](https://yapi.nbttfc365.com/project/44/interface/api/18649) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/profitLoss/orders/place`
 * @更新时间 `2023-10-30 19:20:36`
 */
export interface YapiPostV1ProfitLossOrdersPlaceApiRequest {
  /**
   * 止盈撮合类型 1=限价， 2= 市价
   */
  profitOrderType?: number
  /**
   * 止损撮合类型 1=限价， 2= 市价
   */
  lossOrderType?: number
  /**
   * 1 买入      2 卖出
   */
  side: number
  /**
   * 交易对id
   */
  tradeId: number
  /**
   * 下单单位： amount 数量     funds 金额
   */
  marketUnit: string
  /**
   * 止盈 - 下单价格 ，marketUnit=amount时必传
   */
  profitPlacePrice?: number
  /**
   * 止盈 - 下单数量，marketUnit=amount时必传
   */
  profitPlaceCount?: number
  /**
   * 止盈 - 下单金额，marketUnit=funds时必传
   */
  profitFunds?: number
  /**
   * 止损- 下单价格 ，marketUnit=amount时必传
   */
  lossPlacePrice?: number
  /**
   * 止损 - 下单数量，marketUnit=amount时必传
   */
  lossPlaceCount?: number
  /**
   * 止损 - 下单金额，marketUnit=funds时必传
   */
  lossFunds?: number
  /**
   * 止盈 - 触发价格
   */
  profitTriggerPrice?: number
  /**
   * 止损 - 触发价格
   */
  lossTriggerPrice?: number
  /**
   * 优惠券
   */
  coupons: YapiPostV1ProfitLossOrdersPlaceApiRequestListCoupons[]
}
export interface YapiPostV1ProfitLossOrdersPlaceApiRequestListCoupons {
  /**
   * 优惠券Id
   */
  couponId: string
  /**
   * 优惠券类型
   */
  couponType: string
  /**
   * 优惠券code
   */
  couponCode: string
}

/**
 * 接口 [止盈止损 - 下单↗](https://yapi.nbttfc365.com/project/44/interface/api/18649) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/profitLoss/orders/place`
 * @更新时间 `2023-10-30 19:20:36`
 */
export interface YapiPostV1ProfitLossOrdersPlaceApiResponse {
  code?: number
  /**
   * 订单编号
   */
  data?: string
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [止盈止损 - 下单↗](https://yapi.nbttfc365.com/project/44/interface/api/18649)
// **/
// export const postV1ProfitLossOrdersPlaceApiRequest: MarkcoinRequest<
//   YapiPostV1ProfitLossOrdersPlaceApiRequest,
//   YapiPostV1ProfitLossOrdersPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/profitLoss/orders/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
