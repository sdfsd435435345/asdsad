/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户注销↗](https://yapi.nbttfc365.com/project/44/interface/api/18884) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/system/accLogout`
 * @更新时间 `2023-10-10 21:42:19`
 */
export interface YapiGetV1AgentSystemAccLogoutApiRequest {
  uid?: string
}

/**
 * 接口 [用户注销↗](https://yapi.nbttfc365.com/project/44/interface/api/18884) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/system/accLogout`
 * @更新时间 `2023-10-10 21:42:19`
 */
export interface YapiGetV1AgentSystemAccLogoutApiResponse {
  /**
   * 是否成功
   */
  boolean: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户注销↗](https://yapi.nbttfc365.com/project/44/interface/api/18884)
// **/
// export const getV1AgentSystemAccLogoutApiRequest: MarkcoinRequest<
//   YapiGetV1AgentSystemAccLogoutApiRequest,
//   YapiGetV1AgentSystemAccLogoutApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/system/accLogout",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
