/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [下单接口_批量_限价市价_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3457) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /inner/v1/orders/batch/place`
 * @更新时间 `2023-01-06 12:00:09`
 */
export type YapiPostInnerV1OrdersBatchPlaceApiRequest = YapiPostInnerV1OrdersBatchPlaceApiRequestList[]

export interface YapiPostInnerV1OrdersBatchPlaceApiRequestList {
  /**
   * 不为空，[1] 限价单 , [2] 市价单
   */
  orderType?: number
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
  side?: number
  /**
   * 不为空,交易对id
   */
  tradeId?: number
  /**
   * 下单数量：orderType=1时，必填；市价单按个数下单：orderType=2,marketUnit=amount，必填。
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
   * ip
   */
  ip?: string
  /**
   * 用户id
   */
  uid?: number
  /**
   * 商户id
   */
  businessId?: number
  /**
   * 1:web  2:android 3:ios 4:ios
   */
  source: number
  /**
   * 源id 内部接口调用必传
   */
  sourceId: string
}

/**
 * 接口 [下单接口_批量_限价市价_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3457) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /inner/v1/orders/batch/place`
 * @更新时间 `2023-01-06 12:00:09`
 */
export interface YapiPostInnerV1OrdersBatchPlaceApiResponse {
  /**
   * 下单结果集
   */
  data?: YapiPostInnerV1OrdersBatchPlaceListData[]
  /**
   * 接口调用情况code值 200成功 其他code值失败
   */
  code?: number
  /**
   * 消息描述
   */
  message?: string
}
export interface YapiPostInnerV1OrdersBatchPlaceListData {
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
// * [下单接口_批量_限价市价_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3457)
// **/
// export const postInnerV1OrdersBatchPlaceApiRequest: MarkcoinRequest<
//   YapiPostInnerV1OrdersBatchPlaceApiRequest,
//   YapiPostInnerV1OrdersBatchPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/orders/batch/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
