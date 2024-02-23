/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币对大作战产品下拉列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11274) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/tradePairBattle/list`
 * @更新时间 `2023-09-12 11:51:30`
 */
export interface YapiGetV1RaTradePairBattleListApiRequest {
  /**
   * 作战区，1m,2m,3m,4m,5m
   */
  combatArea: string
}

/**
 * 接口 [币对大作战产品下拉列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11274) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/tradePairBattle/list`
 * @更新时间 `2023-09-12 11:51:30`
 */
export interface YapiGetV1RaTradePairBattleListApiResponse {
  code: number
  message: string
  data: YapiGetV1RaTradePairBattleData
}
export interface YapiGetV1RaTradePairBattleData {
  list: YapiGetV1RaTradePairBattleListData[]
}
export interface YapiGetV1RaTradePairBattleListData {
  /**
   * 交易对id
   */
  tradePairId: string
  /**
   * 产品id
   */
  productId: number
  /**
   * 交易对symbol
   */
  tradePairSymbol: string
  /**
   * wass钱包symbol
   */
  symbolWassName: string
  /**
   * 价格精度
   */
  priceOffset: string
  /**
   * 合约类型, delivery 交割,perpetual 永续
   */
  swapTypeInd: string
  /**
   * 标记价
   */
  markPrice: string
  /**
   * 1=维护中,0=未维护
   */
  maintenance: number
  /**
   * 1=关注, 0=未关注
   */
  favourite: number
  /**
   * 开奖时间
   */
  lotteryTime: number
  /**
   * 热度
   */
  heat: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [币对大作战产品下拉列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11274)
// **/
// export const getV1RaTradePairBattleListApiRequest: MarkcoinRequest<
//   YapiGetV1RaTradePairBattleListApiRequest,
//   YapiGetV1RaTradePairBattleListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/tradePairBattle/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
