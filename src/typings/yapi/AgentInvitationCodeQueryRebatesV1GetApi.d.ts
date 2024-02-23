/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [海报比例查询↗](https://yapi.nbttfc365.com/project/44/interface/api/5111) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/invitationCode/queryRebates`
 * @更新时间 `2023-08-17 15:54:48`
 */
export interface YapiGetV1AgentInvitationCodeQueryRebatesApiRequest {}

/**
 * 接口 [海报比例查询↗](https://yapi.nbttfc365.com/project/44/interface/api/5111) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/invitationCode/queryRebates`
 * @更新时间 `2023-08-17 15:54:48`
 */
export interface YapiGetV1AgentInvitationCodeQueryRebatesApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1AgentInvitationCodeQueryRebatesData
}
export interface YapiGetV1AgentInvitationCodeQueryRebatesData {
  /**
   * 现货
   */
  spot?: string
  /**
   * 合约
   */
  contract?: string
  /**
   * 借币
   */
  borrowCoin?: string
  /**
   * 三元期权
   */
  option?: string
  /**
   * 娱乐区
   */
  recreation?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [海报比例查询↗](https://yapi.nbttfc365.com/project/44/interface/api/5111)
// **/
// export const getV1AgentInvitationCodeQueryRebatesApiRequest: MarkcoinRequest<
//   YapiGetV1AgentInvitationCodeQueryRebatesApiRequest,
//   YapiGetV1AgentInvitationCodeQueryRebatesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/invitationCode/queryRebates",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
