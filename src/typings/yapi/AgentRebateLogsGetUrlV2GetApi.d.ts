/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-返佣记录-导出↗](https://yapi.nbttfc365.com/project/44/interface/api/5969) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v2/agent/rebateLogs/getUrl`
 * @更新时间 `2023-06-06 23:50:38`
 */
export interface YapiGetV2AgentRebateLogsGetUrlApiRequest {}

/**
 * 接口 [代理商-返佣记录-导出↗](https://yapi.nbttfc365.com/project/44/interface/api/5969) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v2/agent/rebateLogs/getUrl`
 * @更新时间 `2023-06-06 23:50:38`
 */
export interface YapiGetV2AgentRebateLogsGetUrlApiResponse {
  code?: number
  message?: string
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-返佣记录-导出↗](https://yapi.nbttfc365.com/project/44/interface/api/5969)
// **/
// export const getV2AgentRebateLogsGetUrlApiRequest: MarkcoinRequest<
//   YapiGetV2AgentRebateLogsGetUrlApiRequest,
//   YapiGetV2AgentRebateLogsGetUrlApiResponse['data']
// > = params => {
//   return request({
//     path: "/v2/agent/rebateLogs/getUrl",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
