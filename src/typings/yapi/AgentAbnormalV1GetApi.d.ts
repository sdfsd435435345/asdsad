/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户账户异常提醒(是否被拉入黑名单)↗](https://yapi.nbttfc365.com/project/44/interface/api/5974) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/abnormal`
 * @更新时间 `2023-06-06 17:23:00`
 */
export interface YapiGetV1AgentAbnormalApiRequest {}

/**
 * 接口 [用户账户异常提醒(是否被拉入黑名单)↗](https://yapi.nbttfc365.com/project/44/interface/api/5974) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/abnormal`
 * @更新时间 `2023-06-06 17:23:00`
 */
export interface YapiGetV1AgentAbnormalApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentAbnormalData
}
export interface YapiGetV1AgentAbnormalData {
  /**
   * true=在黑名单中, false=不在黑名单中
   */
  onTheBlacklist: boolean
  /**
   * 拉黑原因
   */
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户账户异常提醒(是否被拉入黑名单)↗](https://yapi.nbttfc365.com/project/44/interface/api/5974)
// **/
// export const getV1AgentAbnormalApiRequest: MarkcoinRequest<
//   YapiGetV1AgentAbnormalApiRequest,
//   YapiGetV1AgentAbnormalApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/abnormal",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
