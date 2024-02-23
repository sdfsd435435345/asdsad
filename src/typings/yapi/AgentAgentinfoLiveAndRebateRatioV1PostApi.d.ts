/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询指定模式下的用户等级和对应返佣比例信息↗](https://yapi.nbttfc365.com/project/44/interface/api/18199) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/agentinfo/liveAndRebateRatio`
 * @更新时间 `2023-09-11 11:31:10`
 */
export interface YapiPostV1AgentAgentinfoLiveAndRebateRatioApiRequest {
  /**
   * 模式id
   */
  modelId: number
  /**
   * 平台id
   */
  businessId: number
  /**
   * 产品线id
   */
  productId: string
  /**
   * 用户id
   */
  uid: number
}

/**
 * 接口 [查询指定模式下的用户等级和对应返佣比例信息↗](https://yapi.nbttfc365.com/project/44/interface/api/18199) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/agentinfo/liveAndRebateRatio`
 * @更新时间 `2023-09-11 11:31:10`
 */
export interface YapiPostV1AgentAgentinfoLiveAndRebateRatioApiResponse {
  code: string
  message: string
  data: YapiPostV1AgentAgentinfoLiveAndRebateRatioData
}
export interface YapiPostV1AgentAgentinfoLiveAndRebateRatioData {
  /**
   * 模式id
   */
  modelId: number
  /**
   * 平台id
   */
  businessId: number
  /**
   * 产品线id
   */
  productId: string
  /**
   * 用户id
   */
  uid: number
  threeLiveRebateRatioList: YapiPostV1AgentAgentinfoLiveAndRebateRatioThreeLiveRebateRatioListData
  pyramidRebateRatioList: YapiPostV1AgentAgentinfoLiveAndRebateRatioPyramidRebateRatioListData
  areaRebateRatioList: YapiPostV1AgentAgentinfoLiveAndRebateRatioAreaRebateRatioListData
}
/**
 * 三级返佣
 */
export interface YapiPostV1AgentAgentinfoLiveAndRebateRatioThreeLiveRebateRatioListData {
  /**
   * 级别
   */
  live: string
  /**
   * 一级返佣
   */
  oneRebateRatio: string
  /**
   * 二级返佣
   */
  twoRebateRatio: string
  /**
   * 三级返佣
   */
  threeRebateRatio: string
}
/**
 * 金字塔返佣
 */
export interface YapiPostV1AgentAgentinfoLiveAndRebateRatioPyramidRebateRatioListData {
  /**
   * 级别
   */
  live: string
  /**
   * 返佣比例
   */
  rebateRatio: string
}
/**
 * 区域返佣
 */
export interface YapiPostV1AgentAgentinfoLiveAndRebateRatioAreaRebateRatioListData {
  /**
   * 级别
   */
  live: string
  /**
   * 返佣比例
   */
  rebateRatio: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询指定模式下的用户等级和对应返佣比例信息↗](https://yapi.nbttfc365.com/project/44/interface/api/18199)
// **/
// export const postV1AgentAgentinfoLiveAndRebateRatioApiRequest: MarkcoinRequest<
//   YapiPostV1AgentAgentinfoLiveAndRebateRatioApiRequest,
//   YapiPostV1AgentAgentinfoLiveAndRebateRatioApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/agentinfo/liveAndRebateRatio",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
