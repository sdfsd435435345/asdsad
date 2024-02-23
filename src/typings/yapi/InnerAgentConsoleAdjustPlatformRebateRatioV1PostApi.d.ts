/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [内部接口-console调整平台返佣设置↗](https://yapi.nbttfc365.com/project/44/interface/api/18619) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /inner/v1/agent/console/adjustPlatformRebateRatio`
 * @更新时间 `2023-09-27 16:16:56`
 */
export interface YapiPostInnerV1AgentConsoleAdjustPlatformRebateRatioApiRequest {
  /**
   * 商户id
   */
  businessId: number
  /**
   * 系统模式
   */
  agtSystemModelId: number
  /**
   * 代理线
   */
  agentLines: YapiPostInnerV1AgentConsoleAdjustPlatformRebateRatioApiRequestListAgentLines[]
}
export interface YapiPostInnerV1AgentConsoleAdjustPlatformRebateRatioApiRequestListAgentLines {
  /**
   * 代理线(金字塔, 三级, 区域)
   */
  agtTypeCd: string
  /**
   * 比例
   */
  ratio: number
}

/**
 * 接口 [内部接口-console调整平台返佣设置↗](https://yapi.nbttfc365.com/project/44/interface/api/18619) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /inner/v1/agent/console/adjustPlatformRebateRatio`
 * @更新时间 `2023-09-27 16:16:56`
 */
export interface YapiPostInnerV1AgentConsoleAdjustPlatformRebateRatioApiResponse {
  /**
   * true=成功, false=失败
   */
  isSuccess: boolean
  /**
   * 失败原因
   */
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [内部接口-console调整平台返佣设置↗](https://yapi.nbttfc365.com/project/44/interface/api/18619)
// **/
// export const postInnerV1AgentConsoleAdjustPlatformRebateRatioApiRequest: MarkcoinRequest<
//   YapiPostInnerV1AgentConsoleAdjustPlatformRebateRatioApiRequest,
//   YapiPostInnerV1AgentConsoleAdjustPlatformRebateRatioApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/agent/console/adjustPlatformRebateRatio",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
