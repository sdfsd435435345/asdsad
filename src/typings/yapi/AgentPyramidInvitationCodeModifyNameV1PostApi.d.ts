/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-修改邀请码名称↗](https://yapi.nbttfc365.com/project/44/interface/api/18389) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/invitationCode/modifyName`
 * @更新时间 `2023-10-07 14:06:38`
 */
export interface YapiPostV1AgentPyramidInvitationCodeModifyNameApiRequest {
  /**
   * 邀请码名称
   */
  name: string
  /**
   * 邀请码id
   */
  invitationCodeId: string
}

/**
 * 接口 [邀请返佣-修改邀请码名称↗](https://yapi.nbttfc365.com/project/44/interface/api/18389) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/invitationCode/modifyName`
 * @更新时间 `2023-10-07 14:06:38`
 */
export interface YapiPostV1AgentPyramidInvitationCodeModifyNameApiResponse {
  code: number
  message: string
  data: YapiPostV1AgentPyramidInvitationCodeModifyNameData
}
export interface YapiPostV1AgentPyramidInvitationCodeModifyNameData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-修改邀请码名称↗](https://yapi.nbttfc365.com/project/44/interface/api/18389)
// **/
// export const postV1AgentPyramidInvitationCodeModifyNameApiRequest: MarkcoinRequest<
//   YapiPostV1AgentPyramidInvitationCodeModifyNameApiRequest,
//   YapiPostV1AgentPyramidInvitationCodeModifyNameApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/pyramid/invitationCode/modifyName",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
