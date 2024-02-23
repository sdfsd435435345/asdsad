/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-邀请明细分析V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5949) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v2/agent/inviteDetailsAnalysis`
 * @更新时间 `2023-06-13 14:36:42`
 */
export interface YapiPostV2AgentInviteDetailsAnalysisApiRequest {
  startDate: number
  endDate: number
}

/**
 * 接口 [代理商-邀请明细分析V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5949) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v2/agent/inviteDetailsAnalysis`
 * @更新时间 `2023-06-13 14:36:42`
 */
export interface YapiPostV2AgentInviteDetailsAnalysisApiResponse {
  code: string
  message: string
  data: YapiPostV2AgentInviteDetailsAnalysisData
}
export interface YapiPostV2AgentInviteDetailsAnalysisData {
  /**
   * 邀请人数集合
   */
  invitedList: YapiPostV2AgentInviteDetailsAnalysisListInvitedListData[]
  /**
   * 伞下人数集合
   */
  totalList: YapiPostV2AgentInviteDetailsAnalysisListTotalListData[]
}
export interface YapiPostV2AgentInviteDetailsAnalysisListInvitedListData {
  /**
   * 时间
   */
  date: string
  /**
   * 邀请数
   */
  num: number
}
export interface YapiPostV2AgentInviteDetailsAnalysisListTotalListData {
  date: string
  /**
   * 总数
   */
  num: number
  /**
   * 代理商数量
   */
  agentNum: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-邀请明细分析V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5949)
// **/
// export const postV2AgentInviteDetailsAnalysisApiRequest: MarkcoinRequest<
//   YapiPostV2AgentInviteDetailsAnalysisApiRequest,
//   YapiPostV2AgentInviteDetailsAnalysisApiResponse['data']
// > = data => {
//   return request({
//     path: "/v2/agent/inviteDetailsAnalysis",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
