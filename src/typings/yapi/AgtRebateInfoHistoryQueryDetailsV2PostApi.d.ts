/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-收益(返佣)明细V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5919) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v2/agtRebateInfoHistory/queryDetails`
 * @更新时间 `2023-06-13 14:35:26`
 */
export interface YapiPostV2AgtRebateInfoHistoryQueryDetailsApiRequest {
  /**
   * 产品线 字典表code：agent_product_cd
   */
  productCd: string
  /**
   * 字典表code：rebate_type_cd; 不填=全部,selfRebate=自返佣, teamRebate=团队返佣
   */
  rebateTypeCd: string
  /**
   * 开始时间时间戳（默认传最近三个月）
   */
  startDate?: number
  /**
   * 结束时间时间戳（默认传最近三个月）
   */
  endDate?: number
  /**
   * 最小金额
   */
  minAmount?: number
  /**
   * 最大金额
   */
  maxAmount?: number
  /**
   * 页数
   */
  page: number
  /**
   * 每页数量
   */
  pageSize: number
}

/**
 * 接口 [代理商-收益(返佣)明细V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5919) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v2/agtRebateInfoHistory/queryDetails`
 * @更新时间 `2023-06-13 14:35:26`
 */
export interface YapiPostV2AgtRebateInfoHistoryQueryDetailsApiResponse {
  /**
   * 总返佣
   */
  code: number
  /**
   * 结算币种                                                                                                                                                                                                                                   0                              000000
   */
  message: string
  data: YapiPostV2AgtRebateInfoHistoryQueryDetailsData
}
export interface YapiPostV2AgtRebateInfoHistoryQueryDetailsData {
  /**
   * 法币币种
   */
  legalCur: string
  /**
   * 总数
   */
  total: number
  /**
   * 页数
   */
  page: number
  /**
   * 每页数量
   */
  pageSize: number
  list: YapiPostV2AgtRebateInfoHistoryQueryDetailsListData[]
}
export interface YapiPostV2AgtRebateInfoHistoryQueryDetailsListData {
  /**
   * 产品线 字典表code：agent_product_cd
   */
  productCd: string
  /**
   * 字典表code：rebate_type_cd; selfRebate=自返佣, teamRebate=团队返佣
   */
  rebateTypeCd: string
  /**
   * 结算时间
   */
  settlementTime: number
  /**
   * 当时结算币种
   */
  settlementCur: string
  /**
   * 结算币种数量
   */
  settlementCurAmount: string
  /**
   * 实际结算总值
   */
  realSettlementValue: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-收益(返佣)明细V2↗](https://yapi.nbttfc365.com/project/44/interface/api/5919)
// **/
// export const postV2AgtRebateInfoHistoryQueryDetailsApiRequest: MarkcoinRequest<
//   YapiPostV2AgtRebateInfoHistoryQueryDetailsApiRequest,
//   YapiPostV2AgtRebateInfoHistoryQueryDetailsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v2/agtRebateInfoHistory/queryDetails",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
