/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [期权自选列表↗](https://yapi.nbttfc365.com/project/44/interface/api/10964) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/favouriteTradePair/list`
 * @更新时间 `2023-07-24 11:59:16`
 */
export interface YapiGetV1OptionFavouriteTradePairListApiRequest {
  /**
   * 计价币类型筛选，usdt =U本位，other=币本位
   */
  buyCoin?: string
  /**
   * delivery 交割    perpetual 永续
   */
  typeInd?: string
  /**
   * 搜索的关键字
   */
  symbolName?: string
}

/**
 * 接口 [期权自选列表↗](https://yapi.nbttfc365.com/project/44/interface/api/10964) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/favouriteTradePair/list`
 * @更新时间 `2023-07-24 11:59:16`
 */
export interface YapiGetV1OptionFavouriteTradePairListApiResponse {
  message?: string
  code?: number
  data?: YapiGetV1OptionFavouriteTradePairData
}
export interface YapiGetV1OptionFavouriteTradePairData {
  list?: YapiGetV1OptionFavouriteTradePairListData[]
}
export interface YapiGetV1OptionFavouriteTradePairListData {
  /**
   * 期权产品id
   */
  id?: string
  /**
   * 商户id
   */
  businessId?: string
  /**
   * 合约id
   */
  tradeId: string
  /**
   *  合约币对symobol，例如 BTCUSD
   */
  symbol: string
  /**
   * 下单的币种id
   */
  coinId: string
  /**
   * 下单的币种symbol，例如 usdt
   */
  coinSymbol: string
  /**
   * 下单的币种精度，例如 2
   */
  coinScale: string
  /**
   * 单笔最小下单金额
   */
  minAmount: string
  /**
   * 单笔最大下单金额
   */
  maxAmount: string
  /**
   * 价格取值来源 指数价格 index_price， 标记价格 mark_price ，默认标记价格
   */
  priceSource: string
  /**
   * 24小时涨跌幅
   */
  chg: string
  /**
   * 24小时最高价
   */
  high: string
  /**
   * 最新价
   */
  last: string
  /**
   * 24小时最低价
   */
  low: string
  /**
   * 24小时开盘价
   */
  open: string
  /**
   * 合约类型     delivery 交割    perpetual 永续
   */
  typeInd: string
  tradeInfo: YapiGetV1OptionFavouriteTradePairTradeInfoListData
}
/**
 * 合约信息详情
 */
export interface YapiGetV1OptionFavouriteTradePairTradeInfoListData {
  quoteSymbolName: string
  baseSymbolName: string
  baseCoinId: string
  quoteCoinId: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [期权自选列表↗](https://yapi.nbttfc365.com/project/44/interface/api/10964)
// **/
// export const getV1OptionFavouriteTradePairListApiRequest: MarkcoinRequest<
//   YapiGetV1OptionFavouriteTradePairListApiRequest,
//   YapiGetV1OptionFavouriteTradePairListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/favouriteTradePair/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
