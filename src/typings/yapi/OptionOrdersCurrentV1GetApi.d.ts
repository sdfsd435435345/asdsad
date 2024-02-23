/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前持仓↗](https://yapi.nbttfc365.com/project/44/interface/api/10919) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/orders/current`
 * @更新时间 `2023-10-25 17:57:31`
 */
export interface YapiGetV1OptionOrdersCurrentApiRequest {
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
   * 需要置顶的期权产品id
   */
  priorOption?: string
}

/**
 * 接口 [当前持仓↗](https://yapi.nbttfc365.com/project/44/interface/api/10919) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/orders/current`
 * @更新时间 `2023-10-25 17:57:31`
 */
export interface YapiGetV1OptionOrdersCurrentApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1OptionOrdersCurrentData
}
/**
 * 分页数据
 */
export interface YapiGetV1OptionOrdersCurrentData {
  total?: number
  pageNum?: number
  pageSize?: number
  list?: YapiGetV1OptionOrdersCurrentListData[]
}
export interface YapiGetV1OptionOrdersCurrentListData {
  /**
   * 订单ID
   */
  id: number
  /**
   * 下单金额 100
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
   * 收益率 0.2，前端自己处理为20%；-1 ，处理为-100%
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
   * 订单状态processing 处理中；complete 已完成；fail 下单失败。
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
   * index_price指数价格  mark_price标记价格
   */
  optionPriceType: string
  /**
   * delivery 交割    perpetual 永续
   */
  typeInd: string
  /**
   * 当前价格，每次查询返回查询时刻的价格，后续价格变动需要接ws.如果平台价格出现了问题，比如当前时间戳获取不到价格，值会为空
   */
  currentPrice?: string
  /**
   * 使用了体验金券，则该字段有值
   */
  voucherAmount: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前持仓↗](https://yapi.nbttfc365.com/project/44/interface/api/10919)
// **/
// export const getV1OptionOrdersCurrentApiRequest: MarkcoinRequest<
//   YapiGetV1OptionOrdersCurrentApiRequest,
//   YapiGetV1OptionOrdersCurrentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/orders/current",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
