/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史战绩↗](https://yapi.nbttfc365.com/project/44/interface/api/10924) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/orders/history`
 * @更新时间 `2023-10-25 17:59:15`
 */
export interface YapiGetV1OptionOrdersHistoryApiRequest {
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
   * 方向 买涨 call  买跌 put 买涨超 over_call 买跌超 over_put
   */
  sideInd?: string
  /**
   * 单位为秒 30 60 120 180...
   */
  period?: string
  /**
   * day:一天内 ，week：一周内，months：一月内，three_months：三个月内
   */
  timeRange?: string
  /**
   * 查询开始时间 毫秒值
   */
  startTime?: string
  /**
   * 查询结束时间 毫秒值
   */
  endTime?: string
  /**
   * 三元期权产品id
   */
  optionId?: string
}

/**
 * 接口 [历史战绩↗](https://yapi.nbttfc365.com/project/44/interface/api/10924) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/orders/history`
 * @更新时间 `2023-10-25 17:59:15`
 */
export interface YapiGetV1OptionOrdersHistoryApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1OptionOrdersHistoryData
}
/**
 * 分页数据
 */
export interface YapiGetV1OptionOrdersHistoryData {
  total?: number
  pageNum?: number
  pageSize?: number
  list?: YapiGetV1OptionOrdersHistoryListData[]
}
export interface YapiGetV1OptionOrdersHistoryListData {
  /**
   * 订单ID
   */
  id: number
  /**
   * 下单金额（开仓金额） 100
   */
  amount: string
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
   * 收益率 0.2，前端自己处理为20% ，-1 ，处理为-100%
   */
  realYield: string
  /**
   * 开仓价格 25000.1
   */
  openPrice: string
  /**
   * 目标价格 25500
   */
  targetPrice: string
  /**
   * 结算价格
   */
  settlementPrice: string
  /**
   * 已实现盈亏 500 -100
   */
  realizedProfit: string
  /**
   * 三元期权产品symbol，例如BTCUSD
   */
  symbol: string
  /**
   * 三元期权产品ID
   */
  optionId: number
  /**
   * 三预期权收益率配置id
   */
  yieldId: number
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
   * 订单状态complete 已完成；revoke 撤单。
   */
  statusCd: string
  /**
   * 开仓时间 毫秒时间戳
   */
  createdByTime: number
  /**
   * 结算时间 毫秒时间戳
   */
  settlementTime: number
  /**
   * 合约类型     delivery 交割    perpetual 永续
   */
  typeInd: string
  /**
   * 融合模式用来计算赔率。
   */
  odds: string
  /**
   * 使用的体验金，使用了体验金券才会有值
   */
  voucherAmount: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [历史战绩↗](https://yapi.nbttfc365.com/project/44/interface/api/10924)
// **/
// export const getV1OptionOrdersHistoryApiRequest: MarkcoinRequest<
//   YapiGetV1OptionOrdersHistoryApiRequest,
//   YapiGetV1OptionOrdersHistoryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/orders/history",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
