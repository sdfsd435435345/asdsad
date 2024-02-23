/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-金字塔邀请码邀请的好友↗](https://yapi.nbttfc365.com/project/44/interface/api/18384) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/pyramid/invitationCode/invitedPeople`
 * @更新时间 `2023-10-07 14:03:35`
 */
export interface YapiGetV1AgentPyramidInvitationCodeInvitedPeopleApiRequest {
  /**
   * 邀请码
   */
  invitationCode: string
}

/**
 * 接口 [邀请返佣-金字塔邀请码邀请的好友↗](https://yapi.nbttfc365.com/project/44/interface/api/18384) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/pyramid/invitationCode/invitedPeople`
 * @更新时间 `2023-10-07 14:03:35`
 */
export interface YapiGetV1AgentPyramidInvitationCodeInvitedPeopleApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentPyramidInvitationCodeInvitedPeopleData
}
export interface YapiGetV1AgentPyramidInvitationCodeInvitedPeopleData {
  /**
   * 金字塔返佣信息
   */
  list: YapiGetV1AgentPyramidInvitationCodeInvitedPeopleListData[]
}
export interface YapiGetV1AgentPyramidInvitationCodeInvitedPeopleListData {
  /**
   * 好友ID
   */
  invitedUid: string
  /**
   * 邀请时间(注册时间)
   */
  createdByTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-金字塔邀请码邀请的好友↗](https://yapi.nbttfc365.com/project/44/interface/api/18384)
// **/
// export const getV1AgentPyramidInvitationCodeInvitedPeopleApiRequest: MarkcoinRequest<
//   YapiGetV1AgentPyramidInvitationCodeInvitedPeopleApiRequest,
//   YapiGetV1AgentPyramidInvitationCodeInvitedPeopleApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/pyramid/invitationCode/invitedPeople",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
