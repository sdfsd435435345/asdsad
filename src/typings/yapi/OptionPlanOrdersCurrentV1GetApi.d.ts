/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [计划委托列表↗](https://yapi.nbttfc365.com/project/44/interface/api/10934) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/plan/orders/current`
 * @更新时间 `2023-07-13 17:14:13`
 */
export interface YapiGetV1OptionPlanOrdersCurrentApiRequest {
  /**
   * 分页参数页号 ，从1开始
   */
  pageNum: string
  /**
   * 分页大小 默认 20 ，最小1，最大500
   */
  pageSize?: string
  /**
   * 是否计算总数 true 是 false 否;不传默认为true
   */
  count?: string
  /**
   * 是否智能翻倍  1 是 2 否。客户端h5不需要必传，web端需要必传，因为原型有差异。
   */
  isSmart?: string
}

/**
 * 接口 [计划委托列表↗](https://yapi.nbttfc365.com/project/44/interface/api/10934) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/plan/orders/current`
 * @更新时间 `2023-07-13 17:14:13`
 */
export interface YapiGetV1OptionPlanOrdersCurrentApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1OptionPlanOrdersCurrentData
}
/**
 * 分页数据
 */
export interface YapiGetV1OptionPlanOrdersCurrentData {
  total?: number
  pageNum?: number
  pageSize?: number
  list?: YapiGetV1OptionPlanOrdersCurrentListData[]
}
export interface YapiGetV1OptionPlanOrdersCurrentListData {
  /**
   * 订单ID
   */
  id: number
  /**
   * 设置委托金额(初始委托金额) 100
   */
  amount: string
  /**
   * 最大累计金额
   */
  maxAmount: string
  /**
   * 结算周期 例如 30，60，1，2 ，3
   */
  periodDisplay: number
  /**
   * 结算周期单位 SECONDS表示秒； MINUTES表示分钟
   */
  periodUnit: string
  /**
   * 价差 买涨买跌方向没有值
   */
  amplitude?: number
  /**
   * 三元期权产品symbol，例如BTCUSD
   */
  symbol: string
  /**
   * 三元期权产品ID
   */
  optionId: number
  /**
   * 三元期权选择的时间id
   */
  periodId: number
  /**
   * 方向 买涨 call  买跌 put 买涨超 over_call 买跌超 over_put
   */
  sideInd: string
  /**
   * 标的币symbol 例如 BTC
   */
  baseCoinShortName: string
  /**
   * 计价币symbol 例如 USD
   */
  quoteCoinShortName: string
  /**
   * 下单币种ID
   */
  coinId: string
  /**
   * 下单币种symbol 例如USDT
   */
  coinSymbol: string
  /**
   * 订单状态 closed  已关闭 activated 已启用 over 已结束  fail 下单失败
   */
  statusCd: string
  /**
   * 创建时间 毫秒时间戳
   */
  createdByTime: number
  /**
   * 最近触发时间 毫秒时间戳
   */
  lastTriggerTime: number
  /**
   * 最大触发次数
   */
  cycles: number
  /**
   * 已触发次数
   */
  triggeredCount: number
  /**
   * 上次委托金额
   */
  lastPlaceAmount: string
  /**
   * 累计委托金额总和
   */
  lastTotalAmount: string
  /**
   * 是否智能翻倍  1 是 2 否。
   */
  isSmart: number
  /**
   * 合约类型     delivery 交割    perpetual 永续
   */
  typeInd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [计划委托列表↗](https://yapi.nbttfc365.com/project/44/interface/api/10934)
// **/
// export const getV1OptionPlanOrdersCurrentApiRequest: MarkcoinRequest<
//   YapiGetV1OptionPlanOrdersCurrentApiRequest,
//   YapiGetV1OptionPlanOrdersCurrentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/plan/orders/current",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
