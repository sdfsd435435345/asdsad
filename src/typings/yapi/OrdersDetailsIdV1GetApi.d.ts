/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [订单查询-普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2663) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/orders/details/{id}`
 * @更新时间 `2023-10-17 10:27:21`
 */
export interface YapiGetV1OrdersDetailsIdApiRequest {
  /**
   * 订单id
   */
  id: string
}

/**
 * 接口 [订单查询-普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2663) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/orders/details/{id}`
 * @更新时间 `2023-10-17 10:27:21`
 */
export interface YapiGetV1OrdersDetailsIdApiResponse {
  /**
   * 返回状态码
   */
  code?: number
  /**
   * 返回信息说明
   */
  message?: string
  data?: YapiGetV1OrdersDetailsIdData
}
/**
 * 订单信息
 */
export interface YapiGetV1OrdersDetailsIdData {
  /**
   * 成交均价
   */
  averagePrice?: string
  /**
   * 计价币
   */
  buyCoinShortName?: string
  /**
   * 创建时间 yyyy-mm-dd hh:MM:ss
   */
  createdByTime?: string
  /**
   * 委托数量 市价单需要根据marketUnit来判断展示标的币还是计价币单位
   */
  entrustCount?: string
  /**
   * 委托价格
   */
  entrustPrice?: string
  /**
   * 手续费
   */
  fees?: string
  /**
   * 订单id
   */
  id?: number
  /**
   * 1限价 2市价
   */
  orderType?: number
  /**
   * 市价单时，下单单位；amount按数量，funds按金额
   */
  marketUnit?: string
  /**
   * 标的币
   */
  sellCoinShortName?: string
  /**
   * 1-未成交 2部分成交 3-完全成交 4 手动撤销  5-系统撤销  6-部成已撤（部分成交已撤销）
   */
  status?: number
  /**
   * 成交数量
   */
  successCount?: string
  /**
   * 币对
   */
  symbol?: string
  /**
   * 成交额
   */
  totalAmount?: string
  /**
   * 币对id
   */
  tradeId?: number
  /**
   * 成交明细
   */
  transactionLogs?: YapiGetV1OrdersDetailsIdListTransactionLogsData[]
  /**
   *  1买单 2卖单
   */
  side?: number
  /**
   * 用户id
   */
  uid?: number
  /**
   * 更新时间 yyyy-mm-dd hh:MM:ss
   */
  updatedByTime?: string
  /**
   * 完成度
   */
  completeness?: string
  /**
   * 订单手续费抵扣总金额，空或者0表示订单没有使用手续费类别的优惠券
   */
  feeDeductionAmount?: number
}
export interface YapiGetV1OrdersDetailsIdListTransactionLogsData {
  /**
   * 数量
   */
  count?: string
  /**
   * 创建时间
   */
  createdByTime?: string
  /**
   * 手续费
   */
  fees?: string
  /**
   * 价格
   */
  price?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [订单查询-普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2663)
// **/
// export const getV1OrdersDetailsIdApiRequest: MarkcoinRequest<
//   YapiGetV1OrdersDetailsIdApiRequest,
//   YapiGetV1OrdersDetailsIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/orders/details/{id}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
