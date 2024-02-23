/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [（计划委托）查询历史计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/2843) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/spl/page/history`
 * @更新时间 `2022-11-08 20:06:36`
 */
export interface YapiGetV1SplPageHistoryApiRequest {
  /**
   * 分页页码，默认为1
   */
  pageNum: string
  /**
   * 分页加载条数，默认为20
   */
  pageSize: string
  /**
   * 是否计算总数 true 是 false 否
   */
  count: string
  /**
   * 交易对ID
   */
  tradeId: string
  /**
   * 1 限价单 2 市价单
   */
  orderType: string
  /**
   * 1:一天内 ，2：一周内，3：一月内，4：三个月内
   */
  timeRange?: string
  /**
   * 开始时间 时间戳
   */
  beginDate?: string
  /**
   * 结束时间 时间戳
   */
  endDate?: string
  /**
   * 2 已触发，3 已触发 委托失败 4 用户取消，5 系统取消
   * 多个状态值用英文逗号分割
   */
  status?: string
  /**
   * 委托单类型 1买单 2卖单
   */
  side?: string
}

/**
 * 接口 [（计划委托）查询历史计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/2843) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/spl/page/history`
 * @更新时间 `2022-11-08 20:06:36`
 */
export interface YapiGetV1SplPageHistoryApiResponse {
  /**
   * 返回信息
   */
  msg?: string
  /**
   * 返回Code标识，200为成功
   */
  code?: number
  data?: YapiGetV1SplPageHistoryData
}
export interface YapiGetV1SplPageHistoryData {
  /**
   * 总条数
   */
  total?: number
  /**
   * 数据
   */
  list?: YapiGetV1SplPageHistoryListData[]
  /**
   * 当前页码
   */
  pageNum?: number
  /**
   * 当前页加载条数
   */
  pageSize?: number
}
export interface YapiGetV1SplPageHistoryListData {
  /**
   * 计划委托主键ID
   */
  id: string
  /**
   * businessId
   */
  businessId: string
  /**
   * uid
   */
  uid: string
  /**
   * 币对ID
   */
  tradeId: number
  /**
   * 计价币
   */
  buyCoinShortName: string
  /**
   * 标的币
   */
  sellCoinShortName: string
  /**
   * 触发方式（1=标记，2=最新） code:trigger_type_ind
   */
  triggerTypeInd: number
  /**
   * 触发方向（1=向上，2=向下） code:trigger_direction_ind 1为>= 2为<=
   */
  triggerDirectionInd: number
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 委托单类型 1买单 2卖单
   */
  side: number
  /**
   * 订单数量（若为市价单，此字段和orderPrice 2个只有1个有值）
   */
  orderAmount?: number
  /**
   * 订单金额（若为市价单，此字段和orderAmount 2个只有1个有值）
   */
  orderPrice?: number
  /**
   * 订单状态（1 未触发，2 已触发，3 已触发 委托失败 4 用户取消，5 系统取消）code:order_status_cd
   */
  orderStatusCd: number
  /**
   * 止盈止损订单id
   */
  orderId: string
  /**
   * 触发后生成的订单id
   */
  refOrderId: null
  /**
   * 撮合类型 1限价 2市价
   */
  matchType: number
  /**
   * 触发时间 时间戳
   */
  triggerTime: null
  /**
   * 触发委托失败原因
   */
  triggerFailReason: null
  /**
   * 创建人id
   */
  createdById: null
  /**
   * 更新人id
   */
  updateById: null
  /**
   * 创建时间 时间戳
   */
  createdByTime: string
  /**
   * 修改时间 时间戳
   */
  updatedByTime: string
  /**
   * 币对 BTCUSDT
   */
  symbol: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（计划委托）查询历史计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/2843)
// **/
// export const getV1SplPageHistoryApiRequest: MarkcoinRequest<
//   YapiGetV1SplPageHistoryApiRequest,
//   YapiGetV1SplPageHistoryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/spl/page/history",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
