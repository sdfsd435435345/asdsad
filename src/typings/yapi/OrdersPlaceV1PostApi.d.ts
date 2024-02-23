/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [下单接口_限价市价↗](https://yapi.nbttfc365.com/project/44/interface/api/2660) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/orders/place`
 * @更新时间 `2023-10-25 17:52:14`
 */
export interface YapiPostV1OrdersPlaceApiRequest {
  /**
   * 不为空，[1] 限价单 , [2] 市价单
   */
  orderType: number
  /**
   * orderType=2时，必传，[amount] 按数量下单，[funds] 按金额下单
   */
  marketUnit?: string
  /**
   * orderType=1时，必传;最优限价单：[1]:不勾选 [2]:勾选
   */
  optimalLimitOrder?: number
  /**
   * 不为空，[1] 买入 , [2] 卖出
   */
  side: number
  /**
   * 不为空,交易对id
   */
  tradeId: number
  /**
   * 下单数量：orderType=1时，必填；市价单按数量下单：orderType=2,marketUnit=amount，必填。
   */
  placeCount?: number
  /**
   * 下单价格 ： orderType=1时，必填
   */
  placePrice?: number
  /**
   * 市价单下单金额：orderType=2,marketUnit=funds，必填。
   */
  funds?: number
  /**
   * 选择的优惠券
   */
  coupons: YapiPostV1OrdersPlaceApiRequestListCoupons[]
}
export interface YapiPostV1OrdersPlaceApiRequestListCoupons {
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
 * 接口 [下单接口_限价市价↗](https://yapi.nbttfc365.com/project/44/interface/api/2660) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/orders/place`
 * @更新时间 `2023-10-25 17:52:14`
 */
export interface YapiPostV1OrdersPlaceApiResponse {
  /**
   * 生成的订单id,字符串
   */
  data?: string
  code?: number
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [下单接口_限价市价↗](https://yapi.nbttfc365.com/project/44/interface/api/2660)
// **/
// export const postV1OrdersPlaceApiRequest: MarkcoinRequest<
//   YapiPostV1OrdersPlaceApiRequest,
//   YapiPostV1OrdersPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/orders/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
