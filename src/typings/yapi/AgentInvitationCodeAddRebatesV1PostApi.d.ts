/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-代理第一次设置返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/4403) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/invitationCode/addRebates`
 * @更新时间 `2023-02-02 17:29:05`
 */
export interface YapiPostV1AgentInvitationCodeAddRebatesApiRequest {
  scales?: YapiPostV1AgentInvitationCodeAddRebatesApiRequestListScales[]
}
export interface YapiPostV1AgentInvitationCodeAddRebatesApiRequestListScales {
  /**
   * 产品线，
   */
  productCd: string
  /**
   * 自身比例
   */
  selfScale: number
  /**
   * 好友比例
   */
  childScale: number
}

/**
 * 接口 [代理商-代理第一次设置返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/4403) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/invitationCode/addRebates`
 * @更新时间 `2023-02-02 17:29:05`
 */
export interface YapiPostV1AgentInvitationCodeAddRebatesApiResponse {
  scales?: YapiPostV1AgentInvitationCodeAddRebatesListScales[]
}
export interface YapiPostV1AgentInvitationCodeAddRebatesListScales {
  productCd: string
  selfScale: number
  childScale: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-代理第一次设置返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/4403)
// **/
// export const postV1AgentInvitationCodeAddRebatesApiRequest: MarkcoinRequest<
//   YapiPostV1AgentInvitationCodeAddRebatesApiRequest,
//   YapiPostV1AgentInvitationCodeAddRebatesApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/invitationCode/addRebates",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
