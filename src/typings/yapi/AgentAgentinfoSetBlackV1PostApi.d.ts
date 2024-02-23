/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [黑名设置(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/18274) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/agentinfo/setBlack`
 * @更新时间 `2023-10-05 16:37:06`
 */
export interface YapiPostV1AgentAgentinfoSetBlackApiRequest {
  /**
   * 平台
   */
  businessId: number
  /**
   * 用户id
   */
  uid: number
  /**
   * 拉黑原因
   */
  reasonMsg: string
}

/**
 * 接口 [黑名设置(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/18274) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/agentinfo/setBlack`
 * @更新时间 `2023-10-05 16:37:06`
 */
export interface YapiPostV1AgentAgentinfoSetBlackApiResponse {
  code: string
  message: string
  data: YapiPostV1AgentAgentinfoSetBlackData
}
export interface YapiPostV1AgentAgentinfoSetBlackData {
  /**
   * 是否成功拉黑
   */
  isSuccess: string
  /**
   * 平台
   */
  businessId: string
  /**
   * 用户id
   */
  uid: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [黑名设置(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/18274)
// **/
// export const postV1AgentAgentinfoSetBlackApiRequest: MarkcoinRequest<
//   YapiPostV1AgentAgentinfoSetBlackApiRequest,
//   YapiPostV1AgentAgentinfoSetBlackApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/agentinfo/setBlack",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
