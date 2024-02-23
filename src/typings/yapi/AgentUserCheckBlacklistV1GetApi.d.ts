/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户是否在黑名单中↗](https://yapi.nbttfc365.com/project/44/interface/api/18194) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/user/checkBlacklist`
 * @更新时间 `2023-10-05 15:37:22`
 */
export interface YapiGetV1AgentUserCheckBlacklistApiRequest {}

/**
 * 接口 [用户是否在黑名单中↗](https://yapi.nbttfc365.com/project/44/interface/api/18194) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/user/checkBlacklist`
 * @更新时间 `2023-10-05 15:37:22`
 */
export interface YapiGetV1AgentUserCheckBlacklistApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentUserCheckBlackData
}
export interface YapiGetV1AgentUserCheckBlackData {
  /**
   * 拉黑原因
   */
  reason: string
  /**
   * 是否在黑名单中, true=黑名单中, false=未在黑名单中
   */
  inBlacklist: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户是否在黑名单中↗](https://yapi.nbttfc365.com/project/44/interface/api/18194)
// **/
// export const getV1AgentUserCheckBlacklistApiRequest: MarkcoinRequest<
//   YapiGetV1AgentUserCheckBlacklistApiRequest,
//   YapiGetV1AgentUserCheckBlacklistApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/user/checkBlacklist",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
