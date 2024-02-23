/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-获取用户所有代理模式↗](https://yapi.nbttfc365.com/project/44/interface/api/18474) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/center/getAgentList`
 * @更新时间 `2023-09-28 10:53:59`
 */
export interface YapiGetV1AgentCenterGetAgentListApiRequest {}

/**
 * 接口 [代理中心-获取用户所有代理模式↗](https://yapi.nbttfc365.com/project/44/interface/api/18474) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/center/getAgentList`
 * @更新时间 `2023-09-28 10:53:59`
 */
export interface YapiGetV1AgentCenterGetAgentListApiResponse {
  code?: number
  data?: string[]
  messsage?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-获取用户所有代理模式↗](https://yapi.nbttfc365.com/project/44/interface/api/18474)
// **/
// export const getV1AgentCenterGetAgentListApiRequest: MarkcoinRequest<
//   YapiGetV1AgentCenterGetAgentListApiRequest,
//   YapiGetV1AgentCenterGetAgentListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/center/getAgentList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
