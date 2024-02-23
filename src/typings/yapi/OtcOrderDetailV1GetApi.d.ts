/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [第三方支付订单详情（弃用），放到以前接口一起返回↗](https://yapi.nbttfc365.com/project/44/interface/api/19004) 的 **请求类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `GET /v1/otc/orderDetail`
 * @更新时间 `2023-10-30 14:06:53`
 */
export interface YapiGetV1OtcOrderDetailApiRequest {
  /**
   * 订单号
   */
  orderId: string
  /**
   * 渠道
   */
  channelName: string
}

/**
 * 接口 [第三方支付订单详情（弃用），放到以前接口一起返回↗](https://yapi.nbttfc365.com/project/44/interface/api/19004) 的 **返回类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `GET /v1/otc/orderDetail`
 * @更新时间 `2023-10-30 14:06:53`
 */
export interface YapiGetV1OtcOrderDetailApiResponse {
  message?: string
  data?: YapiGetV1OtcOrderDetailData
  code?: number
}
export interface YapiGetV1OtcOrderDetailData {
  /**
   * 订单状态
   */
  status?: number
  /**
   * 订单内容
   */
  content?: string
  /**
   * 订单编号
   */
  id?: string
  /**
   * 下单时间
   */
  orderTime: number
  /**
   * 单价
   */
  price: number
  /**
   * 数量
   */
  number: number
  /**
   * 金额
   */
  amount: number
  /**
   * 币种
   */
  symbol: string
  /**
   * 法币
   */
  fiatCurrencies: string
  /**
   * 方向BUY、SELL
   */
  direction: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [第三方支付订单详情（弃用），放到以前接口一起返回↗](https://yapi.nbttfc365.com/project/44/interface/api/19004)
// **/
// export const getV1OtcOrderDetailApiRequest: MarkcoinRequest<
//   YapiGetV1OtcOrderDetailApiRequest,
//   YapiGetV1OtcOrderDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/otc/orderDetail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
