/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-区域代理等级查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18684) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/system/getAreaAgentLevel`
 * @更新时间 `2023-09-27 13:50:07`
 */
export interface YapiGetV1AgentSystemGetAreaAgentLevelApiRequest {}

/**
 * 接口 [代理中心-区域代理等级查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18684) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/system/getAreaAgentLevel`
 * @更新时间 `2023-09-27 13:50:07`
 */
export interface YapiGetV1AgentSystemGetAreaAgentLevelApiResponse {
  code?: string
  message?: string
  data?: number[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-区域代理等级查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18684)
// **/
// export const getV1AgentSystemGetAreaAgentLevelApiRequest: MarkcoinRequest<
//   YapiGetV1AgentSystemGetAreaAgentLevelApiRequest,
//   YapiGetV1AgentSystemGetAreaAgentLevelApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/system/getAreaAgentLevel",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
