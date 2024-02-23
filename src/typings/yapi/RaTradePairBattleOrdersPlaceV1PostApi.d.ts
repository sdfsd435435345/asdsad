/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币对大作战下单↗](https://yapi.nbttfc365.com/project/44/interface/api/11344) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/tradePairBattle/orders/place`
 * @更新时间 `2023-08-17 15:05:30`
 */
export interface YapiPostV1RaTradePairBattleOrdersPlaceApiRequest {
  /**
   * 期数id
   */
  seasonId: number
  /**
   * 每单金额
   */
  singleAmount: string
  /**
   * 下注
   */
  bets: YapiPostV1RaTradePairBattleOrdersPlaceApiRequestListBets[]
}
export interface YapiPostV1RaTradePairBattleOrdersPlaceApiRequestListBets {
  /**
   * op=个位, t=十分位,p=百分位, tp=千分位, thp=万分位, htp=十万分位
   */
  precision: string
  /**
   * 支持的策略,大小(big_or_small), 数字(number), 单双(parity)
   */
  strategy: string
  /**
   * 选择的下注用逗号分隔; 数字(0,1,2,3,4,5,6,7,8,9), 大小(b=大,s=小), 单双(odd=单,even=双)
   */
  values: string
}

/**
 * 接口 [币对大作战下单↗](https://yapi.nbttfc365.com/project/44/interface/api/11344) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/tradePairBattle/orders/place`
 * @更新时间 `2023-08-17 15:05:30`
 */
export interface YapiPostV1RaTradePairBattleOrdersPlaceApiResponse {
  code?: string
  message?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [币对大作战下单↗](https://yapi.nbttfc365.com/project/44/interface/api/11344)
// **/
// export const postV1RaTradePairBattleOrdersPlaceApiRequest: MarkcoinRequest<
//   YapiPostV1RaTradePairBattleOrdersPlaceApiRequest,
//   YapiPostV1RaTradePairBattleOrdersPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/ra/tradePairBattle/orders/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
