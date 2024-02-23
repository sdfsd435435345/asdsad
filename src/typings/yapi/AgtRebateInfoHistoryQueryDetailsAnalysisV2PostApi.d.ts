/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-收益(返佣)明细分析V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5939) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v2/agtRebateInfoHistory/queryDetailsAnalysis`
 * @更新时间 `2023-06-13 14:36:22`
 */
export interface YapiPostV2AgtRebateInfoHistoryQueryDetailsAnalysisApiRequest {
  startDate: number
  endDate: number
}

/**
 * 接口 [代理商-收益(返佣)明细分析V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5939) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v2/agtRebateInfoHistory/queryDetailsAnalysis`
 * @更新时间 `2023-06-13 14:36:22`
 */
export interface YapiPostV2AgtRebateInfoHistoryQueryDetailsAnalysisApiResponse {
  code: number
  message: string
  data: YapiPostV2AgtRebateInfoHistoryQueryDetailsAnalysisData
}
export interface YapiPostV2AgtRebateInfoHistoryQueryDetailsAnalysisData {
  /**
   * 返佣数据
   */
  list: YapiPostV2AgtRebateInfoHistoryQueryDetailsAnalysisListData[]
  /**
   * 法币币种
   */
  legalCur: string
}
export interface YapiPostV2AgtRebateInfoHistoryQueryDetailsAnalysisListData {
  /**
   * 产品线
   */
  productCd: string
  /**
   * 返佣类型
   */
  rebateTypeCd: string
  /**
   * 返佣
   */
  rebate: string
  /**
   * 返佣时间
   */
  rebateTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-收益(返佣)明细分析V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5939)
// **/
// export const postV2AgtRebateInfoHistoryQueryDetailsAnalysisApiRequest: MarkcoinRequest<
//   YapiPostV2AgtRebateInfoHistoryQueryDetailsAnalysisApiRequest,
//   YapiPostV2AgtRebateInfoHistoryQueryDetailsAnalysisApiResponse['data']
// > = data => {
//   return request({
//     path: "/v2/agtRebateInfoHistory/queryDetailsAnalysis",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
