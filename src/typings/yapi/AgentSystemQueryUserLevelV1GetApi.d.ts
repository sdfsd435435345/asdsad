/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取登录用户的可用级别↗](https://yapi.nbttfc365.com/project/44/interface/api/19114) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/system/queryUserLevel`
 * @更新时间 `2023-10-31 11:09:18`
 */
export interface YapiGetV1AgentSystemQueryUserLevelApiRequest {
  /**
   * 模式
   */
  model: string
}

/**
 * 接口 [获取登录用户的可用级别↗](https://yapi.nbttfc365.com/project/44/interface/api/19114) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/system/queryUserLevel`
 * @更新时间 `2023-10-31 11:09:18`
 */
export interface YapiGetV1AgentSystemQueryUserLevelApiResponse {
  code: string
  model: string
  data: YapiGetV1AgentSystemQueryUserLevelData
}
export interface YapiGetV1AgentSystemQueryUserLevelData {
  uid: string
  model: string
  businessId: string
  liveList: string[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取登录用户的可用级别↗](https://yapi.nbttfc365.com/project/44/interface/api/19114)
// **/
// export const getV1AgentSystemQueryUserLevelApiRequest: MarkcoinRequest<
//   YapiGetV1AgentSystemQueryUserLevelApiRequest,
//   YapiGetV1AgentSystemQueryUserLevelApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/system/queryUserLevel",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
