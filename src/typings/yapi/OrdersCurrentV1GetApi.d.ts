/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前委托_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2774) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/orders/current`
 * @更新时间 `2022-11-18 17:41:34`
 */
export interface YapiGetV1OrdersCurrentApiRequest {
  /**
   * 分页参数页号
   */
  pageNum: string
  /**
   * 分页大小
   */
  pageSize: string
  /**
   * 是否计算总数 true是 false 否
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
   * 1 买入 2 卖出
   */
  side?: string
  /**
   * 需要置顶的交易对id
   */
  priorTrade?: string
}

/**
 * 接口 [当前委托_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2774) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/orders/current`
 * @更新时间 `2022-11-18 17:41:34`
 */
export interface YapiGetV1OrdersCurrentApiResponse {
  /**
   * 返回状态码
   */
  code?: number
  /**
   * 返回信息说明
   */
  message?: string
  data?: YapiGetV1OrdersCurrentData
}
export interface YapiGetV1OrdersCurrentData {
  /**
   * 总条数
   */
  total?: number
  /**
   * 数据
   */
  list?: YapiGetV1OrdersCurrentListData[]
  /**
   * 当前页码
   */
  pageNum?: number
  /**
   * 每页的数量
   */
  pageSize?: number
}
export interface YapiGetV1OrdersCurrentListData {
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
   * 委托数量  市价单时，单位根据marketUnit来判断
   */
  entrustCount?: string
  /**
   * 委托价格
   */
  entrustPrice?: string
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
   * 币对id
   */
  tradeId?: number
  /**
   *  1买单 2卖单
   */
  side?: number
  /**
   * 用户id
   */
  uid?: number
  /**
   * 完成度
   */
  completeness: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前委托_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2774)
// **/
// export const getV1OrdersCurrentApiRequest: MarkcoinRequest<
//   YapiGetV1OrdersCurrentApiRequest,
//   YapiGetV1OrdersCurrentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/orders/current",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
