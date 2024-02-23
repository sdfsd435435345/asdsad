/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-币对详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2804) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/detail`
 * @更新时间 `2023-11-03 17:43:09`
 */
export interface YapiGetV1TradePairDetailApiRequest {
  /**
   * 交易对的symbolName
   */
  symbol: string
}

/**
 * 接口 [现货-币对详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2804) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/detail`
 * @更新时间 `2023-11-03 17:43:09`
 */
export interface YapiGetV1TradePairDetailApiResponse {
  code?: number
  data?: YapiGetV1TradePairDetailData
  message?: string
}
export interface YapiGetV1TradePairDetailData {
  /**
   * 标的币
   */
  sellCoinId?: number
  /**
   * 最小下单金额
   */
  minAmount?: number
  /**
   * 交易区
   */
  tradeArea?: number
  /**
   * 最大下单数量
   */
  maxCount?: number
  /**
   * 最高价
   */
  high?: string
  /**
   * 最低价
   */
  low?: string
  symbolName?: string
  /**
   * 交易对ID
   */
  id?: number
  /**
   * 最大交易金额
   */
  maxAmount?: number
  /**
   * 计价币
   */
  buyCoinId?: number
  /**
   * 币对名
   */
  symbolWassName?: string
  /**
   * 涨跌幅
   */
  chg?: string
  /**
   * 最新价
   */
  last?: string
  /**
   * 下单价格偏移量(精度)
   */
  priceOffset?: number
  /**
   * 24小时成交额
   */
  quoteVolume?: number
  sort?: number
  /**
   * 24小时成交量
   */
  volume?: string
  /**
   * 计价币
   */
  quoteSymbolName?: null
  /**
   * 交易比
   */
  baseSymbolName?: null
  /**
   * 下单数量偏移量(精度)
   */
  amountOffset?: string
  /**
   * 最小下单数量
   */
  minCount?: number
  /**
   * 时间
   */
  time?: null
  /**
   * 开盘价
   */
  open?: string
  /**
   * 是否收藏, 0=未收藏, 1=收藏
   */
  favourite?: number
  /**
   * 是否开盘;1=开盘中，2=停盘中，3=预约开盘
   */
  marketStatus?: number
  /**
   * 开盘时间
   */
  openTime?: number
  /**
   * 盘口精度列表
   */
  depthOffset: string[]
  /**
   * 上线通知订阅状态 1=已订阅
   */
  subscribed: string
  /**
   * 价格浮动比例,默认0.8
   */
  priceFloatRatio: string
  /**
   * 是否支持价格订阅, 1=支持, 2=不支持
   */
  isPriceAlert: number
  /**
   *  是否开启交易 1是，2否
   */
  isShare: number
  /**
   * 板块列表
   */
  conceptList: YapiGetV1TradePairDetailListConceptListData[]
  /**
   * 板块id，已废弃，见conceptList
   */
  conceptId: number
  /**
   * 板块名 已废弃，见conceptList
   */
  conceptName: string
  /**
   * 买入手续费比例
   */
  buyFee: number
  /**
   * 卖出手续费比例,buyFee一般和sellFee的值一样。
   */
  sellFee: number
}
export interface YapiGetV1TradePairDetailListConceptListData {
  id: number
  /**
   * 板块名称
   */
  name: string
  /**
   * 板块图标
   */
  icon: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-币对详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2804)
// **/
// export const getV1TradePairDetailApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairDetailApiRequest,
//   YapiGetV1TradePairDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
