/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [k线图_历史成交_内部接口(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/2861) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /inner/v1/orders/history/kline`
 * @更新时间 `2022-12-06 14:11:13`
 */
export interface YapiGetInnerV1OrdersHistoryKlineApiRequest {
  /**
   * 交易对id
   */
  tradeId: string
  /**
   * 开始时间13位毫秒值时间戳
   */
  beginDate?: string
  /**
   * 结束时间13位毫秒值时间戳
   */
  endDate?: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 商户id
   */
  businessId: string
}

/**
 * 接口 [k线图_历史成交_内部接口(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/2861) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /inner/v1/orders/history/kline`
 * @更新时间 `2022-12-06 14:11:13`
 */
export interface YapiGetInnerV1OrdersHistoryKlineApiResponse {
  /**
   * 返回状态码
   */
  code?: number
  /**
   * 返回信息说明
   */
  message?: string
  /**
   * 数据
   */
  data: YapiGetInnerV1OrdersHistoryKlineListData[]
}
export interface YapiGetInnerV1OrdersHistoryKlineListData {
  /**
   * 交易id
   */
  tradeId: number
  /**
   * 计价币简称
   */
  buyCoinShortName: string
  /**
   * 标的币简称
   */
  sellCoinShortName: string
  /**
   * 币对
   */
  symbol: string
  /**
   * 委单类型 1买单 2卖单
   */
  side: number
  /**
   * 成交数量
   */
  successCount: number
  /**
   * 成交均价
   */
  averagePrice: number
  /**
   * 创建时间 13位时间戳毫秒值
   */
  createdByTime: number
  transactionLogs: YapiGetInnerV1OrdersHistoryKlineListTransactionLogsListData[]
}
export interface YapiGetInnerV1OrdersHistoryKlineListTransactionLogsListData {
  /**
   * 创建时间 13位时间戳毫秒值
   */
  createdByTime: number
  /**
   * 价格
   */
  price: number
  /**
   * 数量
   */
  count: number
  /**
   * 手续费
   */
  fees: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [k线图_历史成交_内部接口(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/2861)
// **/
// export const getInnerV1OrdersHistoryKlineApiRequest: MarkcoinRequest<
//   YapiGetInnerV1OrdersHistoryKlineApiRequest,
//   YapiGetInnerV1OrdersHistoryKlineApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/orders/history/kline",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
