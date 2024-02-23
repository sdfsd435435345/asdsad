/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史委托_计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/4043) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/plan/orders/history`
 * @更新时间 `2023-03-23 10:17:37`
 */
export interface YapiGetV1PerpetualPlanOrdersHistoryApiRequest {
  /**
   * 交易对ID
   */
  tradeId?: string
  /**
   * 分页参数页号 ，从1开始
   */
  pageNum: string
  /**
   * 分页大小 默认 20 ，最小1，最大500
   */
  pageSize: string
  /**
   * 是否计算总数 true 是 false 否;不传默认为true
   */
  count?: string
  /**
   * 合约组id ,不传则筛选出所有合约组的
   */
  groupId?: string
  /**
   * 委托类型   市价/限价
   */
  entrustTypeInd?: string
  /**
   * 委托状态 revoke 已撤销，revoke_sys 系统撤销 ，alreay_triggered 已触发，triggered_failed 已触发-委托失败
   */
  statusCd?: string
  /**
   * 开始时间
   */
  startTime?: string
  /**
   * 结束时间
   */
  endTime?: string
  /**
   * day:一天内 ，week：一周内，months：一月内，three_months：三个月内
   */
  timeRange?: string
}

/**
 * 接口 [历史委托_计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/4043) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/plan/orders/history`
 * @更新时间 `2023-03-23 10:17:37`
 */
export interface YapiGetV1PerpetualPlanOrdersHistoryApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PerpetualPlanOrdersHistoryData
}
export interface YapiGetV1PerpetualPlanOrdersHistoryData {
  /**
   * 总条数
   */
  total: number
  /**
   * 当前页码
   */
  pageNum: number
  /**
   * 每页的数量
   */
  pageSize: number
  list: YapiGetV1PerpetualPlanOrdersHistoryListData[]
}
export interface YapiGetV1PerpetualPlanOrdersHistoryListData {
  /**
   * 计划委托策略单id
   */
  id: string
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 合约组名称
   */
  groupName: string
  /**
   * 委托状态 revoke 已撤销，revoke_sys 系统撤销 ,alreay_triggered 已触发，triggered_failed 已触发-委托失败
   */
  statusCd: string
  /**
   * 方向 open_long 开多 , open_short 开空 ,close_long 平多, close_short 平空
   */
  sideInd: string
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd: string
  /**
   * 杠杆倍数
   */
  lever: string
  /**
   * 合约交易对id
   */
  tradeId: string
  /**
   * 合约交易对名称
   */
  symbol: string
  /**
   * 委托价格
   */
  price: string
  /**
   * 委托数量
   */
  size: string
  /**
   * 下单选择的币种是标的币还是计价币；如果是标的币传BASE，如果是计价币传QUOTE
   */
  placeUnit: string
  /**
   * 创建时间 13位毫秒值
   */
  createdByTime: string
  /**
   * 标的币 symbol
   */
  baseCoinShortName: string
  /**
   * 计价币 symbol
   */
  quoteCoinShortName: string
  /**
   * 触发价格类型 mark 标记价格 new 最新价格
   */
  triggerPriceTypeInd: string
  /**
   * 触发价格
   */
  triggerPrice: string
  /**
   * 触发方向 up=向上  大于等于，down=向下  小于等于
   */
  triggerDirectionInd: string
  /**
   * 生成的普通委托订单id
   */
  refOrderId: string
  /**
   * 保证金  初始保证金+额外保证金之和
   */
  totalMargin: string
  /**
   * 是否存在止盈止损 true 有   false没有
   */
  hasStrategy: boolean
  /**
   * limit_order 计划限价委托单 market_order 计划市价委托单
   */
  typeInd: string
  /**
   * 合约版本 1=专业版 2=普通版，普通版无法添加额外保证金
   */
  perpetualVersion: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [历史委托_计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/4043)
// **/
// export const getV1PerpetualPlanOrdersHistoryApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualPlanOrdersHistoryApiRequest,
//   YapiGetV1PerpetualPlanOrdersHistoryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/plan/orders/history",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
