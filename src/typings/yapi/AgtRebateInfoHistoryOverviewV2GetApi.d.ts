/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-数据总览V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5924) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v2/agtRebateInfoHistory/overview`
 * @更新时间 `2023-07-10 19:38:32`
 */
export interface YapiGetV2AgtRebateInfoHistoryOverviewApiRequest {
  /**
   * 时间戳
   */
  startDate?: string
  /**
   * 时间戳
   */
  endDate?: string
}

/**
 * 接口 [代理商-数据总览V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5924) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v2/agtRebateInfoHistory/overview`
 * @更新时间 `2023-07-10 19:38:32`
 */
export interface YapiGetV2AgtRebateInfoHistoryOverviewApiResponse {
  code: string
  message: string
  data: YapiGetV2AgtRebateInfoHistoryOverviewData
}
export interface YapiGetV2AgtRebateInfoHistoryOverviewData {
  /**
   * 总返佣, 对应旧接口的totalIncome
   */
  totalRebate: string
  /**
   * 邀请人数
   */
  invitedNum: number
  /**
   * 团队人数
   */
  invitedTeamNum: number
  /**
   * 团队新增入金
   */
  teamDeposit: string
  /**
   * 团队交易量
   */
  teamTurnover: string
  /**
   * 自返佣
   */
  selfRebate: string
  /**
   * 团队返佣
   */
  teamRebate: string
  /**
   * 直推手续费
   */
  directFee: string
  /**
   * 直推贡献返佣
   */
  directContributeRebate: string
  /**
   * 代理团队手续费
   */
  agentTeamFee: string
  /**
   * 代理团队贡献返佣
   */
  agentTeamContributeRebate: string
  /**
   * 法币
   */
  legalCur: string
  /**
   * 返佣结算币种
   */
  currencySettlement: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-数据总览V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5924)
// **/
// export const getV2AgtRebateInfoHistoryOverviewApiRequest: MarkcoinRequest<
//   YapiGetV2AgtRebateInfoHistoryOverviewApiRequest,
//   YapiGetV2AgtRebateInfoHistoryOverviewApiResponse['data']
// > = params => {
//   return request({
//     path: "/v2/agtRebateInfoHistory/overview",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
