/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-返佣规则↗](https://yapi.nbttfc365.com/project/44/interface/api/18479) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/rebateRule`
 * @更新时间 `2023-09-13 17:28:11`
 */
export interface YapiGetV1AgentRebateRuleApiRequest {}

/**
 * 接口 [邀请返佣-返佣规则↗](https://yapi.nbttfc365.com/project/44/interface/api/18479) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/rebateRule`
 * @更新时间 `2023-09-13 17:28:11`
 */
export interface YapiGetV1AgentRebateRuleApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentRebateRuleData
}
export interface YapiGetV1AgentRebateRuleData {
  /**
   * 金字塔返佣规则
   */
  pyramid: string
  /**
   * 三级返佣规则
   */
  threeLevel: string
  /**
   * 区域返佣规则
   */
  area: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-返佣规则↗](https://yapi.nbttfc365.com/project/44/interface/api/18479)
// **/
// export const getV1AgentRebateRuleApiRequest: MarkcoinRequest<
//   YapiGetV1AgentRebateRuleApiRequest,
//   YapiGetV1AgentRebateRuleApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/rebateRule",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
