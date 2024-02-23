/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约币对详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4047) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/detail`
 * @更新时间 `2023-05-29 11:41:44`
 */
export interface YapiGetV1PerpetualTradePairDetailApiRequest {
  symbol: string
}

/**
 * 接口 [合约币对详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4047) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/detail`
 * @更新时间 `2023-05-29 11:41:44`
 */
export interface YapiGetV1PerpetualTradePairDetailApiResponse {
  code?: number
  data?: YapiGetV1PerpetualTradePairDetailData
  message?: string
}
export interface YapiGetV1PerpetualTradePairDetailData {
  /**
   * marker费率
   */
  markerFeeRate?: null
  /**
   * 标的币ID
   */
  sellCoinId?: number
  /**
   * 标的币名称
   */
  sellCoinName: string
  /**
   * 最小下单数量
   */
  minAmount?: null
  /**
   * 合约交易对阶梯杠杆设置
   */
  tradePairLeverList?: YapiGetV1PerpetualTradePairDetailListTradePairLeverListData[]
  tradeArea?: null
  /**
   * 最小资金费率
   */
  minusFeeRate?: number
  /**
   * 商户ID
   */
  businessId?: number
  /**
   * 最大下单数量
   */
  maxCount?: null
  /**
   * 结算时间 比如0，8，16，东八区时间。下一次结算倒计时由此计算
   */
  cycle?: string
  /**
   * 流通量
   */
  circulatingSupply?: null
  /**
   * 最高价
   */
  high?: string
  /**
   * 最低价
   */
  low?: string
  isPriceAlert?: null
  /**
   * taker费率
   */
  takerFeeRate?: null
  /**
   * 币对名
   */
  symbolName?: string
  /**
   * 深度
   */
  depthOffset?: null
  id?: number
  priceFloatRatio?: string
  /**
   * 最大下单金额
   */
  maxAmount?: null
  /**
   * 计价币ID
   */
  buyCoinId?: number
  /**
   * 计价币名称
   */
  buyCoinName: string
  /**
   * waas钱包币对名
   */
  symbolWassName?: string
  enableState?: number
  /**
   * 合约类型 delivery= 交割， perpetual =永续
   */
  typeInd?: string
  /**
   * 涨跌幅
   */
  chg?: string
  /**
   * 最新价
   */
  last?: string
  /**
   * 下单数量偏移
   */
  amountOffset?: number
  /**
   * 价格精度
   */
  priceOffset?: number
  quoteVolume?: string
  sort?: number
  /**
   * 是否添加自选
   */
  favourite?: number
  volume?: string
  quoteSymbolName?: null
  baseSymbolName?: string
  /**
   * 结算周期 1，2，4，8个小时
   */
  settlementRules?: number
  /**
   * 最大资金费率
   */
  plusFeeRate?: number
  marketStatus?: number
  isShare?: number
  /**
   * 最小下单数量
   */
  minCount?: null
  time?: null
  open?: string
  sellFee?: null
  /**
   * 当前资金费率
   */
  assetFeeRate: number
  /**
   * 指数价格
   */
  indexPrice: string
  /**
   * 标记价格
   */
  markPrice: string
  /**
   * 最大杠杆倍数
   */
  maxLever: number
  conceptList: YapiGetV1PerpetualTradePairDetailListConceptListData[]
}
export interface YapiGetV1PerpetualTradePairDetailListTradePairLeverListData {
  /**
   * 限制下单最大金额数量，单位为标的币
   */
  maxLimitAmount?: number
  /**
   * 维持保证金率
   */
  marginRate?: number
  /**
   * 层级
   */
  degree?: number
  /**
   * 最低维持保证金率
   */
  minMarginRate?: number
  /**
   * 金额区间内最大可用杠杆倍数
   */
  maxLever?: number
  tradeId?: number
  /**
   * 最小杠杆倍数
   */
  minLever: number
}
export interface YapiGetV1PerpetualTradePairDetailListConceptListData {
  /**
   * 板块id
   */
  id: number
  /**
   * 板块名
   */
  name: string
  /**
   * 板块icon
   */
  icon: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约币对详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4047)
// **/
// export const getV1PerpetualTradePairDetailApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualTradePairDetailApiRequest,
//   YapiGetV1PerpetualTradePairDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/tradePair/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
