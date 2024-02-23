/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [周返佣top↗](https://yapi.nbttfc365.com/project/44/interface/api/4411) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agtRebateInfoHistory/getTop`
 * @更新时间 `2023-03-03 18:17:36`
 */
export interface YapiGetV1AgtRebateInfoHistoryGetTopApiRequest {}

/**
 * 接口 [周返佣top↗](https://yapi.nbttfc365.com/project/44/interface/api/4411) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agtRebateInfoHistory/getTop`
 * @更新时间 `2023-03-03 18:17:36`
 */
export interface YapiGetV1AgtRebateInfoHistoryGetTopApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1AgtRebateInfoHistoryGetTopData
}
export interface YapiGetV1AgtRebateInfoHistoryGetTopData {
  profitList?: YapiGetV1AgtRebateInfoHistoryGetTopListProfitListData[]
}
export interface YapiGetV1AgtRebateInfoHistoryGetTopListProfitListData {
  uid: number
  /**
   * 收益
   */
  actualUsdt: number
  legalCur: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [周返佣top↗](https://yapi.nbttfc365.com/project/44/interface/api/4411)
// **/
// export const getV1AgtRebateInfoHistoryGetTopApiRequest: MarkcoinRequest<
//   YapiGetV1AgtRebateInfoHistoryGetTopApiRequest,
//   YapiGetV1AgtRebateInfoHistoryGetTopApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agtRebateInfoHistory/getTop",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
