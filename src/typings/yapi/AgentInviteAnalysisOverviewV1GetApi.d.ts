/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-邀请明细分析-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/5944) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/inviteAnalysis/overview`
 * @更新时间 `2023-06-11 01:33:05`
 */
export interface YapiGetV1AgentInviteAnalysisOverviewApiRequest {}

/**
 * 接口 [代理商-邀请明细分析-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/5944) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/inviteAnalysis/overview`
 * @更新时间 `2023-06-11 01:33:05`
 */
export interface YapiGetV1AgentInviteAnalysisOverviewApiResponse {
  code: string
  message: string
  data: YapiGetV1AgentInviteAnalysisOverviewData
}
export interface YapiGetV1AgentInviteAnalysisOverviewData {
  /**
   * 已邀请人数
   */
  invitedNum: number
  /**
   * 伞下总人数
   */
  totalNum: number
  /**
   * 今日新增
   */
  today: number
  /**
   * 7日新增
   */
  sevenDays: number
  /**
   * 30日新增
   */
  thirtyDays: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-邀请明细分析-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/5944)
// **/
// export const getV1AgentInviteAnalysisOverviewApiRequest: MarkcoinRequest<
//   YapiGetV1AgentInviteAnalysisOverviewApiRequest,
//   YapiGetV1AgentInviteAnalysisOverviewApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/inviteAnalysis/overview",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
