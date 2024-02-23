/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [往期开奖↗](https://yapi.nbttfc365.com/project/44/interface/api/11359) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/season/history`
 * @更新时间 `2023-08-07 13:23:31`
 */
export interface YapiGetV1RaSeasonHistoryApiRequest {
  /**
   * 截止时间  时间戳
   */
  endTime?: string
  /**
   * 产品ID
   */
  productId?: string
  pageSize: string
  pageNum: string
}

/**
 * 接口 [往期开奖↗](https://yapi.nbttfc365.com/project/44/interface/api/11359) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/season/history`
 * @更新时间 `2023-08-07 13:23:31`
 */
export interface YapiGetV1RaSeasonHistoryApiResponse {
  data?: YapiGetV1RaSeasonHistoryData
  code?: string
  message?: string
}
export interface YapiGetV1RaSeasonHistoryData {
  list?: YapiGetV1RaSeasonHistoryListData[]
  pageSize: number
  pageNum: number
  total: number
}
export interface YapiGetV1RaSeasonHistoryListData {
  id?: number
  /**
   * 期号
   */
  seasonNo?: string
  /**
   * 状态 betting=下注中，suspension=封盘中，lottering=开奖中，done=已完成开奖
   */
  status?: string
  /**
   * 开奖时的原始值，比如标记价格/完整的hash
   */
  lotterySourceValue?: string
  /**
   * 开奖时间，也就是结束时间
   */
  lotteryTime?: number
  /**
   * 开奖结果-精度数组
   */
  precisionResultArr?: YapiGetV1RaSeasonHistoryListPrecisionResultArrListData[]
  /**
   * 扩展数据json ，当产品为hash娱乐时 里面存的是区块高度 key为hashHeight
   */
  ext: string
}
export interface YapiGetV1RaSeasonHistoryListPrecisionResultArrListData {
  /**
   * 精度位数
   */
  precisionCode: string
  /**
   * 该精度上对应的值
   */
  precisionValue: string
  /**
   * 所有策略对应的开奖结果数组
   */
  strategyResultArr: YapiGetV1RaSeasonHistoryListStrategyResultArrListPrecisionResultArrListData[]
}
export interface YapiGetV1RaSeasonHistoryListStrategyResultArrListPrecisionResultArrListData {
  /**
   * 策略类型
   */
  strategyCode: string
  /**
   * 开奖结果
   */
  lotteryValue: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [往期开奖↗](https://yapi.nbttfc365.com/project/44/interface/api/11359)
// **/
// export const getV1RaSeasonHistoryApiRequest: MarkcoinRequest<
//   YapiGetV1RaSeasonHistoryApiRequest,
//   YapiGetV1RaSeasonHistoryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/season/history",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
