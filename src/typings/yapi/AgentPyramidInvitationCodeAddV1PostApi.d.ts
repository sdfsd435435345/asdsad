/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-新增邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18409) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/invitationCode/add`
 * @更新时间 `2023-09-16 23:18:39`
 */
export interface YapiPostV1AgentPyramidInvitationCodeAddApiRequest {
  /**
   * 名称
   */
  name: string
  /**
   * 是否设置为默认邀请码, 1=设置为默认, 2=非默认
   */
  isDefault: number
  ratios: YapiPostV1AgentPyramidInvitationCodeAddApiRequestListRatios[]
}
export interface YapiPostV1AgentPyramidInvitationCodeAddApiRequestListRatios {
  /**
   * 产品线
   */
  productCd: string
  /**
   * 自身返佣比例
   */
  selfRatio: number
  /**
   * 好友返佣比例
   */
  childRatio: number
}

/**
 * 接口 [邀请返佣-新增邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18409) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/invitationCode/add`
 * @更新时间 `2023-09-16 23:18:39`
 */
export interface YapiPostV1AgentPyramidInvitationCodeAddApiResponse {
  code: number
  message: string
  data: YapiPostV1AgentPyramidInvitationCodeAddData
}
export interface YapiPostV1AgentPyramidInvitationCodeAddData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-新增邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18409)
// **/
// export const postV1AgentPyramidInvitationCodeAddApiRequest: MarkcoinRequest<
//   YapiPostV1AgentPyramidInvitationCodeAddApiRequest,
//   YapiPostV1AgentPyramidInvitationCodeAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/pyramid/invitationCode/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
