/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-邀请明细分析↗](https://yapi.nbttfc365.com/project/44/interface/api/4235) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/inviteDetailsAnalysis`
 * @更新时间 `2023-02-01 14:58:03`
 */
export interface YapiPostV1AgentInviteDetailsAnalysisApiRequest {
  /**
   * 545445454
   */
  startDate: number
  /**
   * 564545454
   */
  endDate: number
}

/**
 * 接口 [代理商-邀请明细分析↗](https://yapi.nbttfc365.com/project/44/interface/api/4235) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/inviteDetailsAnalysis`
 * @更新时间 `2023-02-01 14:58:03`
 */
export interface YapiPostV1AgentInviteDetailsAnalysisApiResponse {
  code: string
  message: string
  data: YapiPostV1AgentInviteDetailsAnalysisData
}
export interface YapiPostV1AgentInviteDetailsAnalysisData {
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
  /**
   * 邀请人数集合
   */
  invitedList: YapiPostV1AgentInviteDetailsAnalysisListInvitedListData[]
  /**
   * 伞下人数集合
   */
  totalList: YapiPostV1AgentInviteDetailsAnalysisListTotalListData[]
}
export interface YapiPostV1AgentInviteDetailsAnalysisListInvitedListData {
  /**
   * 时间
   */
  date: string
  /**
   * 邀请数
   */
  num: number
}
export interface YapiPostV1AgentInviteDetailsAnalysisListTotalListData {
  date: string
  num: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-邀请明细分析↗](https://yapi.nbttfc365.com/project/44/interface/api/4235)
// **/
// export const postV1AgentInviteDetailsAnalysisApiRequest: MarkcoinRequest<
//   YapiPostV1AgentInviteDetailsAnalysisApiRequest,
//   YapiPostV1AgentInviteDetailsAnalysisApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/inviteDetailsAnalysis",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
