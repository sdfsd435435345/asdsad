/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理等级查询（弃用）↗](https://yapi.nbttfc365.com/project/44/interface/api/18259) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/agentinfo/getAgentModelInfo`
 * @更新时间 `2023-09-27 11:20:48`
 */
export interface YapiPostV1AgentAgentinfoGetAgentModelInfoApiRequest {
  /**
   * 业务线
   */
  businessId?: number
  /**
   * 产品线
   */
  productId?: string
  /**
   * 系统代理模式id
   */
  modelId: number
}

/**
 * 接口 [代理等级查询（弃用）↗](https://yapi.nbttfc365.com/project/44/interface/api/18259) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/agentinfo/getAgentModelInfo`
 * @更新时间 `2023-09-27 11:20:48`
 */
export interface YapiPostV1AgentAgentinfoGetAgentModelInfoApiResponse {
  code: string
  message: string
  data: YapiPostV1AgentAgentinfoGetAgentModelInfoData
}
export interface YapiPostV1AgentAgentinfoGetAgentModelInfoData {
  /**
   * 平台id
   */
  businessId?: string
  /**
   * 模式id
   */
  field_19?: string
  /**
   * 产品id
   */
  productId?: string
  threeLiveRebateRatioList?: YapiPostV1AgentAgentinfoGetAgentModelInfoThreeLiveRebateRatioListData
  pyramidRebateRatioList?: YapiPostV1AgentAgentinfoGetAgentModelInfoPyramidRebateRatioListData
  areaRebateRatioList?: YapiPostV1AgentAgentinfoGetAgentModelInfoListAreaRebateRatioListData[]
}
/**
 * 三级
 */
export interface YapiPostV1AgentAgentinfoGetAgentModelInfoThreeLiveRebateRatioListData {
  /**
   * 级别
   */
  level?: string
  /**
   * 一级返佣比例
   */
  oneRebateRatio?: string
  /**
   * 二级返佣比例
   */
  twoRebateRatio?: string
  /**
   * 三级返佣比例
   */
  threeRebateRatio?: string
}
/**
 * 金字塔
 */
export interface YapiPostV1AgentAgentinfoGetAgentModelInfoPyramidRebateRatioListData {
  /**
   * 级别
   */
  level?: string
  /**
   * 返佣比例
   */
  rebateRatio?: string
}
/**
 * 区域
 */
export interface YapiPostV1AgentAgentinfoGetAgentModelInfoListAreaRebateRatioListData {
  /**
   * 级别
   */
  level?: number
  /**
   * 返佣比例
   */
  rebateRatio?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理等级查询（弃用）↗](https://yapi.nbttfc365.com/project/44/interface/api/18259)
// **/
// export const postV1AgentAgentinfoGetAgentModelInfoApiRequest: MarkcoinRequest<
//   YapiPostV1AgentAgentinfoGetAgentModelInfoApiRequest,
//   YapiPostV1AgentAgentinfoGetAgentModelInfoApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/agentinfo/getAgentModelInfo",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
