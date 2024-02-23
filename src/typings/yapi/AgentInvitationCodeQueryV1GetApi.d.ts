/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/3943) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/invitationCode/query`
 * @更新时间 `2023-10-27 15:53:12`
 */
export interface YapiGetV1AgentInvitationCodeQueryApiRequest {}

/**
 * 接口 [查询邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/3943) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/invitationCode/query`
 * @更新时间 `2023-10-27 15:53:12`
 */
export interface YapiGetV1AgentInvitationCodeQueryApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentInvitationCodeQueryData
  isShowBanner: string
}
export interface YapiGetV1AgentInvitationCodeQueryData {
  invitationCode: YapiGetV1AgentInvitationCodeQueryInvitationCodeData
  agtInvitationCode: YapiGetV1AgentInvitationCodeQueryAgtInvitationCodeData
  agtApplicationResp: {}
}
/**
 * 普通邀请码对象
 */
export interface YapiGetV1AgentInvitationCodeQueryInvitationCodeData {
  /**
   * 邀请码
   */
  invitationCode: string
}
/**
 * 代理商邀请码对象
 */
export interface YapiGetV1AgentInvitationCodeQueryAgtInvitationCodeData {
  /**
   * 邀请码
   */
  invitationCode: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/3943)
// **/
// export const getV1AgentInvitationCodeQueryApiRequest: MarkcoinRequest<
//   YapiGetV1AgentInvitationCodeQueryApiRequest,
//   YapiGetV1AgentInvitationCodeQueryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/invitationCode/query",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
