/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史委托_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2885) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /inner/v1/orders/history`
 * @更新时间 `2022-12-01 16:51:20`
 */
export interface YapiGetInnerV1OrdersHistoryApiRequest {
  /**
   * 分页参数页号
   */
  pageNum: string
  /**
   * 分页大小
   */
  pageSize: string
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
   *  3-完全成交 4 手动撤销  5-系统撤销  6-部成已撤（部分成交已撤销）多个状态值用逗号分隔
   */
  status?: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 商户id
   */
  businessId: string
  /**
   * 1 买入 2 卖出
   */
  side?: string
}

/**
 * 接口 [历史委托_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2885) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /inner/v1/orders/history`
 * @更新时间 `2022-12-01 16:51:20`
 */
export interface YapiGetInnerV1OrdersHistoryApiResponse {
  /**
   * 返回状态码
   */
  code?: number
  /**
   * 返回信息说明
   */
  message?: string
  data?: YapiGetInnerV1OrdersHistoryData
}
export interface YapiGetInnerV1OrdersHistoryData {
  /**
   * 总条数
   */
  total?: number
  /**
   * 数据
   */
  list?: YapiGetInnerV1OrdersHistoryListData[]
  /**
   * 当前页码
   */
  pageNum?: number
  /**
   * 每页的数量
   */
  pageSize?: number
}
export interface YapiGetInnerV1OrdersHistoryListData {
  /**
   * 成交均价
   */
  averagePrice?: string
  /**
   * 计价币
   */
  buyCoinShortName?: string
  /**
   * 创建时间 13位毫秒值
   */
  createdByTime?: number
  /**
   * 委托数量
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
   * 市价单时，下单单位 amount按数量；funds按金额
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
  transactionLogs?: YapiGetInnerV1OrdersHistoryListTransactionLogsListData[]
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
  updatedByTime?: string
  /**
   * 完成度
   */
  completeness: string
}
export interface YapiGetInnerV1OrdersHistoryListTransactionLogsListData {
  /**
   * 数量
   */
  count?: string
  /**
   * 创建时间13位毫秒值
   */
  createdByTime?: number
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
// * [历史委托_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2885)
// **/
// export const getInnerV1OrdersHistoryApiRequest: MarkcoinRequest<
//   YapiGetInnerV1OrdersHistoryApiRequest,
//   YapiGetInnerV1OrdersHistoryApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/orders/history",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
