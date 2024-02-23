/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-邀请明细-Ta的活跃度-时间筛选↗](https://yapi.nbttfc365.com/project/44/interface/api/5984) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/activation`
 * @更新时间 `2023-06-13 14:37:06`
 */
export interface YapiPostV1AgentActivationApiRequest {
  /**
   * 邀请的用户的uid
   */
  targetUid: number
  startDate: number
  endDate: number
}

/**
 * 接口 [代理商-邀请明细-Ta的活跃度-时间筛选↗](https://yapi.nbttfc365.com/project/44/interface/api/5984) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/activation`
 * @更新时间 `2023-06-13 14:37:06`
 */
export interface YapiPostV1AgentActivationApiResponse {
  code: number
  message: string
  data: YapiPostV1AgentActivationData
}
export interface YapiPostV1AgentActivationData {
  /**
   * TA的总返佣
   */
  totalRebate: string
  /**
   * TA的总入金
   */
  totalDeposit: string
  /**
   * TA的总出金
   */
  totalWithdraw: string
  /**
   * TA的邀请人数
   */
  invitedNum: string
  /**
   * TA的团队人数
   */
  teamNum: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-邀请明细-Ta的活跃度-时间筛选↗](https://yapi.nbttfc365.com/project/44/interface/api/5984)
// **/
// export const postV1AgentActivationApiRequest: MarkcoinRequest<
//   YapiPostV1AgentActivationApiRequest,
//   YapiPostV1AgentActivationApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/activation",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
