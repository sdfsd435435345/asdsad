/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [止盈止损 - 当前订单列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18669) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/profitLoss/orders/current`
 * @更新时间 `2023-10-08 18:50:20`
 */
export interface YapiGetV1ProfitLossOrdersCurrentApiRequest {
  /**
   * 交易对id
   */
  tradeId?: string
  /**
   * 委单方向 1买单 2卖单
   */
  side?: string
  /**
   * 时间范围(1:一天内 ，2：一周内，3：一月内，4：三个月内)
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
   * 状态（1 未触发，2 已触发，3 已触发 委托失败 4 用户取消，5 系统取消）
   */
  status?: string
  pageNum?: string
  pageSize?: string
}

/**
 * 接口 [止盈止损 - 当前订单列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18669) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/profitLoss/orders/current`
 * @更新时间 `2023-10-08 18:50:20`
 */
export interface YapiGetV1ProfitLossOrdersCurrentApiResponse {
  code?: number
  data?: YapiGetV1ProfitLossOrdersCurrentData
  message?: string
}
export interface YapiGetV1ProfitLossOrdersCurrentData {
  total?: number
  pageSize?: number
  list?: YapiGetV1ProfitLossOrdersCurrentListData[]
  pageNum?: number
}
export interface YapiGetV1ProfitLossOrdersCurrentListData {
  /**
   * 币对symbol
   */
  symbol: string
  /**
   * 止盈委托单撮合类型 1限价 2市价
   */
  profitOrderType: number
  /**
   * 止损委托单撮合类型 1限价 2市价
   */
  lossOrderType: number
  createdByTime: number
  /**
   * 止盈触发价
   */
  profitTriggerPrice: string
  /**
   * 触发的下单id，通过此Id请求下单详情的数据
   */
  refOrderId: string
  /**
   * 止损 委托价格
   */
  lossPlacePrice: string
  /**
   * 触发时间
   */
  triggerTime: number
  /**
   * 用户ID
   */
  uid: number
  /**
   * 止损 委托总金额
   */
  lossPlaceAmount: string
  /**
   * 止损 触发方向
   */
  lossTriggerDirectionInd: string
  /**
   * 止损 委托总金额 marketUni=funds时的字段
   */
  lossFunds: string
  id: string
  /**
   * 标的币
   */
  sellCoinShortName: string
  /**
   * 计价币
   */
  buyCoinShortName: string
  /**
   * 止损 委托数量
   */
  lossPlaceCount: string
  /**
   * 止损 委托价格
   */
  profitPlacePrice: string
  /**
   *  1买单 2卖单
   */
  side: number
  /**
   * 止盈 委托数量
   */
  profitPlaceCount: string
  /**
   * 触发失败原因
   */
  triggerFailReason: string
  /**
   * 止损 委托总金额， marketUni=funds时的字段
   */
  profitFunds: string
  /**
   * 止损 触发价格
   */
  lossTriggerPrice: string
  /**
   * 止盈 触发方向
   */
  profitTriggerDirectionInd: string
  /**
   * 止盈 委托总金额
   */
  profitPlaceAmount: string
  /**
   * orderType=2，市价单时的下单单位       * amount 数量       * funds 金额
   */
  marketUnit: string
  /**
   * 币对ID
   */
  tradeId: number
  /**
   *  状态（1 未触发，2 已触发，3 已触发 委托失败 4 用户取消，5 系统取消）
   */
  status: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [止盈止损 - 当前订单列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18669)
// **/
// export const getV1ProfitLossOrdersCurrentApiRequest: MarkcoinRequest<
//   YapiGetV1ProfitLossOrdersCurrentApiRequest,
//   YapiGetV1ProfitLossOrdersCurrentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/profitLoss/orders/current",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
