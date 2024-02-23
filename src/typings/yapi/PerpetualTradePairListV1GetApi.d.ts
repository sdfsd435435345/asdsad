/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约币对列表  ↗](https://yapi.nbttfc365.com/project/44/interface/api/461) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/list`
 * @更新时间 `2023-04-26 15:15:31`
 */
export interface YapiGetV1PerpetualTradePairListApiRequest {
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
  /**
   * 板块Id
   */
  conceptId?: string
}

/**
 * 接口 [合约币对列表  ↗](https://yapi.nbttfc365.com/project/44/interface/api/461) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/list`
 * @更新时间 `2023-04-26 15:15:31`
 */
export interface YapiGetV1PerpetualTradePairListApiResponse {
  code?: number
  data?: YapiGetV1PerpetualTradePairData
  message?: string
}
export interface YapiGetV1PerpetualTradePairData {
  list?: YapiGetV1PerpetualTradePairListData[]
}
export interface YapiGetV1PerpetualTradePairListData {
  /**
   * 标的币id
   */
  sellCoinId?: number
  /**
   * 最小下单金额
   */
  minAmount?: null
  tradeArea?: null
  minusFeeRate?: number
  /**
   * 商户id
   */
  businessId?: number
  /**
   * 最大下单数量
   */
  maxCount?: null
  /**
   * 结算时间
   */
  cycle?: string
  /**
   * 流通量
   */
  circulatingSupply?: number
  /**
   * 最高价
   */
  high?: string
  /**
   * 最低价
   */
  low?: string
  /**
   * 币对名
   */
  symbolName?: string
  id?: number
  /**
   * 最大下单金额
   */
  maxAmount?: null
  /**
   * 计价币id
   */
  buyCoinId?: number
  /**
   * wass钱包名
   */
  symbolWassName?: string
  /**
   * 1=启用 2=禁用
   */
  enableState?: number
  /**
   * 合约类型 delivery =交割 ,perpetual =永续
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
   * 下单价格偏移
   */
  priceOffset?: number
  /**
   * 是否删除 2=未删除 1=已删除
   */
  isDelete?: number
  /**
   * 成交额
   */
  quoteVolume?: string
  /**
   * 排序字段
   */
  sort?: number
  /**
   * 是否添加自选 1=自选
   */
  favourite?: number
  /**
   * 成交量
   */
  volume?: string
  /**
   * 计价币名
   */
  quoteSymbolName?: null
  /**
   * 标的币名
   */
  baseSymbolName?: string
  /**
   * 结算规则
   */
  settlementRules?: number
  plusFeeRate?: number
  /**
   * 是否开盘;1=开盘中，2=停盘中，3=预约开盘
   */
  marketStatus?: number
  /**
   * 1=交易 2=不交易
   */
  isShare?: number
  /**
   * 最小下单数量
   */
  minCount?: null
  /**
   * 时间
   */
  time?: null
  /**
   * 开盘价
   */
  open?: string
  sellFee?: null
  /**
   * 标的币精度
   */
  baseSymbolScale: number
  /**
   * 计价币精度
   */
  quoteSymbolScale: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约币对列表  ↗](https://yapi.nbttfc365.com/project/44/interface/api/461)
// **/
// export const getV1PerpetualTradePairListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualTradePairListApiRequest,
//   YapiGetV1PerpetualTradePairListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/tradePair/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
