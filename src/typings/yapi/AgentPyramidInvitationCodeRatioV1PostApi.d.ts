/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-修改邀请码返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18404) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/invitationCode/ratio`
 * @更新时间 `2023-10-07 14:07:10`
 */
export interface YapiPostV1AgentPyramidInvitationCodeRatioApiRequest {
  /**
   * 邀请码id
   */
  invitationCodeId: string
  ratios: YapiPostV1AgentPyramidInvitationCodeRatioApiRequestListRatios[]
}
export interface YapiPostV1AgentPyramidInvitationCodeRatioApiRequestListRatios {
  /**
   * 产品线code, 数据字典agent_product_cd
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
 * 接口 [邀请返佣-修改邀请码返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18404) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/invitationCode/ratio`
 * @更新时间 `2023-10-07 14:07:10`
 */
export interface YapiPostV1AgentPyramidInvitationCodeRatioApiResponse {
  code: number
  message: string
  data: YapiPostV1AgentPyramidInvitationCodeRatioData
}
export interface YapiPostV1AgentPyramidInvitationCodeRatioData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-修改邀请码返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18404)
// **/
// export const postV1AgentPyramidInvitationCodeRatioApiRequest: MarkcoinRequest<
//   YapiPostV1AgentPyramidInvitationCodeRatioApiRequest,
//   YapiPostV1AgentPyramidInvitationCodeRatioApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/pyramid/invitationCode/ratio",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
