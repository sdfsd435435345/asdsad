/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/4251) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agtRebateInfoHistory/overview`
 * @更新时间 `2023-01-31 21:18:39`
 */
export interface YapiGetV1AgtRebateInfoHistoryOverviewApiRequest {
  /**
   * 时间戳
   */
  startDate?: string
  /**
   * 时间戳
   */
  endDate?: string
}

/**
 * 接口 [代理商-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/4251) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agtRebateInfoHistory/overview`
 * @更新时间 `2023-01-31 21:18:39`
 */
export interface YapiGetV1AgtRebateInfoHistoryOverviewApiResponse {
  code: string
  message: string
  data: YapiGetV1AgtRebateInfoHistoryOverviewData
}
export interface YapiGetV1AgtRebateInfoHistoryOverviewData {
  /**
   * 总收益
   */
  totalIncome: number
  /**
   * 现货
   */
  spot: number
  /**
   * 合约
   */
  contract: number
  /**
   * 借币
   */
  borrowCoin: number
  /**
   * 法币
   */
  legalCur: string
  /**
   * 伞下总数
   */
  totalNum: number
  /**
   * 邀请数
   */
  invitedNum: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/4251)
// **/
// export const getV1AgtRebateInfoHistoryOverviewApiRequest: MarkcoinRequest<
//   YapiGetV1AgtRebateInfoHistoryOverviewApiRequest,
//   YapiGetV1AgtRebateInfoHistoryOverviewApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agtRebateInfoHistory/overview",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
