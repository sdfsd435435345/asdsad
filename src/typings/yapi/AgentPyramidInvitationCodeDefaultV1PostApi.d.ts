/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-设为默认邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18399) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/invitationCode/default`
 * @更新时间 `2023-10-07 14:05:35`
 */
export interface YapiPostV1AgentPyramidInvitationCodeDefaultApiRequest {
  /**
   * 邀请码id
   */
  invitationCodeId: string
}

/**
 * 接口 [邀请返佣-设为默认邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18399) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/invitationCode/default`
 * @更新时间 `2023-10-07 14:05:35`
 */
export interface YapiPostV1AgentPyramidInvitationCodeDefaultApiResponse {
  code: number
  message: string
  data: YapiPostV1AgentPyramidInvitationCodeDefaultData
}
export interface YapiPostV1AgentPyramidInvitationCodeDefaultData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-设为默认邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18399)
// **/
// export const postV1AgentPyramidInvitationCodeDefaultApiRequest: MarkcoinRequest<
//   YapiPostV1AgentPyramidInvitationCodeDefaultApiRequest,
//   YapiPostV1AgentPyramidInvitationCodeDefaultApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/pyramid/invitationCode/default",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
