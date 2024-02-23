/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-修改邀请用户的返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/5979) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/updateInvitedUserRebateRatio`
 * @更新时间 `2023-06-27 14:30:42`
 */
export interface YapiPostV1AgentUpdateInvitedUserRebateRatioApiRequest {
  /**
   * 邀请的uid
   */
  invitedUid: number
  ratios: YapiPostV1AgentUpdateInvitedUserRebateRatioApiRequestListRatios[]
}
export interface YapiPostV1AgentUpdateInvitedUserRebateRatioApiRequestListRatios {
  /**
   * 产品线
   */
  productCd: string
  /**
   * 父级比例=我的
   */
  parentRatio: string
  /**
   * 自身比例=好友
   */
  selfRatio: string
}

/**
 * 接口 [代理商-修改邀请用户的返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/5979) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/updateInvitedUserRebateRatio`
 * @更新时间 `2023-06-27 14:30:42`
 */
export interface YapiPostV1AgentUpdateInvitedUserRebateRatioApiResponse {
  code: number
  message: string
  data: YapiPostV1AgentUpdateInvitedUserRebateRatioData
}
export interface YapiPostV1AgentUpdateInvitedUserRebateRatioData {
  ratios: YapiPostV1AgentUpdateInvitedUserRebateRatioListRatiosData[]
}
export interface YapiPostV1AgentUpdateInvitedUserRebateRatioListRatiosData {
  /**
   * 产品线
   */
  productCd: string
  /**
   * 自身比例
   */
  selfRatio: string
  /**
   * 好友比例
   */
  parentRatio: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-修改邀请用户的返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/5979)
// **/
// export const postV1AgentUpdateInvitedUserRebateRatioApiRequest: MarkcoinRequest<
//   YapiPostV1AgentUpdateInvitedUserRebateRatioApiRequest,
//   YapiPostV1AgentUpdateInvitedUserRebateRatioApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/updateInvitedUserRebateRatio",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
