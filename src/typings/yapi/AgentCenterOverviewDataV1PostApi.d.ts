/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-数据总览↗](https://yapi.nbttfc365.com/project/44/interface/api/15199) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/overviewData`
 * @更新时间 `2023-10-10 13:13:22`
 */
export interface YapiPostV1AgentCenterOverviewDataApiRequest {
  /**
   * 模式("threeLevel", "三级代理"), PYRAMID("pyramid", "金字塔代理"), AREA("area", "区域代理")
   */
  model: string
  /**
   * 开始时间
   */
  startTime: number
  /**
   * 结束时间
   */
  endTime: number
}

/**
 * 接口 [代理中心-数据总览↗](https://yapi.nbttfc365.com/project/44/interface/api/15199) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/overviewData`
 * @更新时间 `2023-10-10 13:13:22`
 */
export interface YapiPostV1AgentCenterOverviewDataApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1AgentCenterOverviewData
}
export interface YapiPostV1AgentCenterOverviewData {
  areaAgentRebateDto?: YapiPostV1AgentCenterOverviewAreaAgentRebateDtoData
  pyramidAgentRebateDto?: YapiPostV1AgentCenterOverviewPyramidAgentRebateDtoData
  threeLevelAgentRebateDto?: YapiPostV1AgentCenterOverviewThreeLevelAgentRebateDtoData
  /**
   * 代理商结算币种
   */
  currencySymbol?: string
  /**
   * 精度
   */
  currencyOffset?: number
  /**
   * web站logo
   */
  webLogo?: string
  /**
   * app站logo
   */
  appLogo?: string
}
/**
 * 区域代理返佣
 */
export interface YapiPostV1AgentCenterOverviewAreaAgentRebateDtoData {
  /**
   * 返佣金额
   */
  rebateAmount?: number
  /**
   * 返佣等级
   */
  rebateLevel?: number
  /**
   * 返佣比例
   */
  rebateRatio?: number
  /**
   * 团队手续费
   */
  teamFee?: number
  /**
   * 邀请人数
   */
  inviteNum?: number
  /**
   * 团队人数
   */
  teamNum?: number
  /**
   * 邀请人数-时间段内新增
   */
  inviteNewAdd?: number
  /**
   * 团队人数-时间段内新增
   */
  teamNewAdd?: number
}
/**
 * 金字塔代理返佣
 */
export interface YapiPostV1AgentCenterOverviewPyramidAgentRebateDtoData {
  /**
   * 返佣金额
   */
  rebateAmount?: number
  /**
   * 团队手续费
   */
  teamFee?: string
  /**
   * 邀请人数
   */
  inviteNum?: string
  /**
   * 团队人数
   */
  teamNum?: string
  /**
   * 邀请人数-时间段内新增
   */
  inviteNewAdd?: string
  /**
   * 团队人数-时间段内新增
   */
  teamNewAdd?: string
}
/**
 * 三级代理返佣
 */
export interface YapiPostV1AgentCenterOverviewThreeLevelAgentRebateDtoData {
  /**
   * 返佣金额
   */
  rebateAmount?: number
  /**
   * 一级返佣比例
   */
  firstRebateRatio?: string
  /**
   * 二级返佣比例
   */
  secondRebateRatio?: string
  /**
   * 三级返佣比例
   */
  thirdRebateRatio?: string
  /**
   * 返佣等级
   */
  rebateLevel?: string
  /**
   * 一级手续费
   */
  firstLevelFee?: number
  /**
   * 二级手续费
   */
  secondLevelFee?: number
  /**
   * 三级手续费
   */
  thirdLevelFee?: number
  /**
   * 邀请人数
   */
  inviteNum?: number
  /**
   * 团队人数
   */
  teamNum?: number
  /**
   * 邀请人数-时间段内新增
   */
  inviteNewAdd?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-数据总览↗](https://yapi.nbttfc365.com/project/44/interface/api/15199)
// **/
// export const postV1AgentCenterOverviewDataApiRequest: MarkcoinRequest<
//   YapiPostV1AgentCenterOverviewDataApiRequest,
//   YapiPostV1AgentCenterOverviewDataApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/center/overviewData",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
