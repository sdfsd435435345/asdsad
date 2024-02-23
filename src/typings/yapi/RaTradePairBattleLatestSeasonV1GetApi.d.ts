/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币对大作战产品最新期数↗](https://yapi.nbttfc365.com/project/44/interface/api/11254) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/tradePairBattle/latestSeason`
 * @更新时间 `2023-09-12 19:11:51`
 */
export interface YapiGetV1RaTradePairBattleLatestSeasonApiRequest {
  /**
   * 产品id
   */
  productId: string
}

/**
 * 接口 [币对大作战产品最新期数↗](https://yapi.nbttfc365.com/project/44/interface/api/11254) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/tradePairBattle/latestSeason`
 * @更新时间 `2023-09-12 19:11:51`
 */
export interface YapiGetV1RaTradePairBattleLatestSeasonApiResponse {
  code: string
  message: string
  data: YapiGetV1RaTradePairBattleLatestSeasonData
}
export interface YapiGetV1RaTradePairBattleLatestSeasonData {
  /**
   * 期数id
   */
  seasonId: number
  /**
   * 期数
   */
  seasonNo: string
  /**
   * 产品id
   */
  productId: number
  /**
   * 作战区
   */
  combatArea: string
  /**
   * 交易对id
   */
  tradePairId: number
  /**
   * 交易对symbol
   */
  tradePairSymbol: string
  /**
   * 策略数组
   */
  strategyArray: YapiGetV1RaTradePairBattleLatestSeasonListStrategyArrayData[]
  /**
   * wass钱包symbol
   */
  symbolWassName: string
  /**
   * 合约类型, delivery 交割,perpetual 永续
   */
  swapTypeInd: string
  /**
   * 标记价
   */
  markPrice: string
  /**
   * 标记价格精度
   */
  priceOffset: string
  /**
   * 封盘时长(比如20秒)
   */
  suspensionTime: number
  /**
   * 封盘时间
   */
  suspensionByTime: number
  /**
   * 开奖时间
   */
  lotteryTime: number
  /**
   *  本期已下注金额
   */
  betAmount: string
  /**
   * 最大下单金额
   */
  maxAmount: string
  /**
   * 最小下单金额
   */
  minAmount: string
  /**
   * 资产
   */
  balance: string
  /**
   * 币种名称.比如USDT
   */
  coinName: string
  /**
   * 币种id
   */
  coinId: number
  /**
   * 币种精度
   */
  coinPrecision: number
  /**
   * 币种web图标
   */
  coinWebLogo: string
  /**
   * 币种app图标
   */
  coinAppLogo: string
  /**
   * 支持的精度数组 逗号分隔 个位 个分位...
   */
  precisions: string
  /**
   * 1=已关注, 0=未关注
   */
  favourite: number
  /**
   * 当前作战数量
   */
  currentFightNum: number
  /**
   * 最大作战数量
   */
  maxFightNum: number
  /**
   * 上期期数id
   */
  lastSeasonId: string
  /**
   * 上期开奖值
   */
  lastLotteryValue: string
}
export interface YapiGetV1RaTradePairBattleLatestSeasonListStrategyArrayData {
  /**
   * 策略, 数组,大小,单双
   */
  strategy: string
  /**
   * 赔率
   */
  odds: string
  /**
   * 返回的值
   */
  value: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [币对大作战产品最新期数↗](https://yapi.nbttfc365.com/project/44/interface/api/11254)
// **/
// export const getV1RaTradePairBattleLatestSeasonApiRequest: MarkcoinRequest<
//   YapiGetV1RaTradePairBattleLatestSeasonApiRequest,
//   YapiGetV1RaTradePairBattleLatestSeasonApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/tradePairBattle/latestSeason",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
