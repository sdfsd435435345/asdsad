/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-返佣明细分析-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/5934) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/rebateAnalysis/overview`
 * @更新时间 `2023-06-06 23:25:33`
 */
export interface YapiGetV1AgentRebateAnalysisOverviewApiRequest {}

/**
 * 接口 [代理商-返佣明细分析-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/5934) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/rebateAnalysis/overview`
 * @更新时间 `2023-06-06 23:25:33`
 */
export interface YapiGetV1AgentRebateAnalysisOverviewApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentRebateAnalysisOverviewData
}
export interface YapiGetV1AgentRebateAnalysisOverviewData {
  /**
   * 总返佣
   */
  totalRebate: string
  /**
   * 今日返佣
   */
  todayRebate: string
  /**
   * 7日返佣
   */
  sevenDaysRebate: string
  /**
   * 30日返佣
   */
  thirtyDaysRebate: string
  /**
   * 法币币种
   */
  legalCur: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-返佣明细分析-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/5934)
// **/
// export const getV1AgentRebateAnalysisOverviewApiRequest: MarkcoinRequest<
//   YapiGetV1AgentRebateAnalysisOverviewApiRequest,
//   YapiGetV1AgentRebateAnalysisOverviewApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/rebateAnalysis/overview",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
