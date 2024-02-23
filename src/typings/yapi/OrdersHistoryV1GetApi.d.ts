/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史委托_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2669) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/orders/history`
 * @更新时间 `2023-10-17 10:25:07`
 */
export interface YapiGetV1OrdersHistoryApiRequest {
  /**
   * 分页参数页号
   */
  pageNum?: string
  /**
   * 分页大小
   */
  pageSize?: string
  /**
   * 是否计算总数 true 是 false 否
   */
  count?: string
  /**
   * 交易对id
   */
  tradeId?: string
  /**
   * 1 限价单 2 市价单
   */
  orderType?: string
  /**
   * 1:一天内 ，2：一周内，3：一月内，4：三个月内
   */
  timeRange?: string
  /**
   * 开始时间戳 13位毫秒值  1667806716135
   */
  beginDate?: string
  /**
   * 结束时间戳 13位毫秒值  1667806716135
   */
  endDate?: string
  /**
   * 3-完全成交 4 手动撤销  5-系统撤销  6-部成已撤（部分成交已撤销） 多个状态值用英文逗号分割
   */
  status?: string
  /**
   * 1 买入 2 卖出
   */
  side?: string
}

/**
 * 接口 [历史委托_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2669) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/orders/history`
 * @更新时间 `2023-10-17 10:25:07`
 */
export interface YapiGetV1OrdersHistoryApiResponse {
  /**
   * 返回状态码
   */
  code?: number
  /**
   * 返回信息说明
   */
  message?: string
  data?: YapiGetV1OrdersHistoryData
}
export interface YapiGetV1OrdersHistoryData {
  /**
   * 总条数
   */
  total?: number
  /**
   * 数据
   */
  list?: YapiGetV1OrdersHistoryListData[]
  /**
   * 当前页码
   */
  pageNum?: number
  /**
   * 每页的数量
   */
  pageSize?: number
}
export interface YapiGetV1OrdersHistoryListData {
  /**
   * 成交均价
   */
  averagePrice?: string
  /**
   * 计价币 USDT
   */
  buyCoinShortName?: string
  /**
   * 创建时间 13位毫秒值
   */
  createdByTime?: number
  /**
   * 委托数量 （市价单，按个数下单，委托数量为标的币时，单位为标的币；按金额下单，委托数量为计价币时，单位为计价币）
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
   * 订单id string
   */
  id?: string
  /**
   * 1限价 2市价
   */
  orderType?: number
  /**
   * 市价单时，下单单位 amount按数量; funds 按金额
   */
  marketUnit?: string
  /**
   * 标的币 BTC
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
   * 币对 BTCUSDT
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
  transactionLogs?: YapiGetV1OrdersHistoryListTransactionLogsListData[]
  /**
   *  1买单 2卖单
   */
  side?: number
  /**
   * 用户id
   */
  uid?: number
  /**
   * 更新时间 13位毫秒值
   */
  updatedByTime?: number
  /**
   * 完成度
   */
  completeness: string
  /**
   * 订单手续费抵扣总金额，空或者0说明没有用到手续费类别的优惠券
   */
  feeDeductionAmount?: number
}
export interface YapiGetV1OrdersHistoryListTransactionLogsListData {
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
  /**
   * 每笔成交手续费抵扣金额，空或者0说明没有用到手续费类别的优惠券
   */
  feeDeductionAmount?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [历史委托_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2669)
// **/
// export const getV1OrdersHistoryApiRequest: MarkcoinRequest<
//   YapiGetV1OrdersHistoryApiRequest,
//   YapiGetV1OrdersHistoryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/orders/history",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
