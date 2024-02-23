/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [申请代理商查询系统最大可设置返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/4419) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/invitationCode/querySys`
 * @更新时间 `2023-08-17 15:50:29`
 */
export interface YapiGetV1AgentInvitationCodeQuerySysApiRequest {}

/**
 * 接口 [申请代理商查询系统最大可设置返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/4419) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/invitationCode/querySys`
 * @更新时间 `2023-08-17 15:50:29`
 */
export interface YapiGetV1AgentInvitationCodeQuerySysApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1AgentInvitationCodeQuerySysData
}
export interface YapiGetV1AgentInvitationCodeQuerySysData {
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
// * [申请代理商查询系统最大可设置返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/4419)
// **/
// export const getV1AgentInvitationCodeQuerySysApiRequest: MarkcoinRequest<
//   YapiGetV1AgentInvitationCodeQuerySysApiRequest,
//   YapiGetV1AgentInvitationCodeQuerySysApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/invitationCode/querySys",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
