/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-收益明细分析↗](https://yapi.nbttfc365.com/project/44/interface/api/4243) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agtRebateInfoHistory/queryDetailsAnalysis`
 * @更新时间 `2023-02-15 17:55:18`
 */
export interface YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisApiRequest {
  /**
   * 5451121154
   */
  startDate: number
  /**
   * 56454545454
   */
  endDate: number
}

/**
 * 接口 [代理商-收益明细分析↗](https://yapi.nbttfc365.com/project/44/interface/api/4243) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agtRebateInfoHistory/queryDetailsAnalysis`
 * @更新时间 `2023-02-15 17:55:18`
 */
export interface YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisApiResponse {
  /**
   * 总收益
   */
  totalIncome: number
  incomes: YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisListIncomes[]
  /**
   * 收益详情
   */
  totalIncomeList: YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisListTotalIncomeList[]
  /**
   * 收益详情
   */
  incomesAnalysis: YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisListIncomesAnalysis[]
  /**
   * 法币币种
   */
  legalCur: string
  /**
   * 现货比例
   */
  spotRate: string
  /**
   * 合约比例
   */
  contractRate: string
  /**
   * 借币比例
   */
  borrowCoinRate: string
}
export interface YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisListIncomes {
  /**
   * 现货收益
   */
  spot: number
  /**
   * 合约收益
   */
  contract: number
  /**
   * 借币收益
   */
  borrowCoin: number
  /**
   * 统计日期类型（1今日，2七日，3三十日）
   */
  dateType: string
  /**
   * 当前日期总收益
   */
  total: number
}
export interface YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisListTotalIncomeList {
  /**
   * 日期
   */
  createdByTime: string
  /**
   * 结算币种手续费
   */
  legalCurIncome: string
}
export interface YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisListIncomesAnalysis {
  /**
   * 产品线
   */
  productCd: string
  /**
   * 日期
   */
  createdByTime: string
  /**
   * 法币手续费
   */
  legalCurIncome: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-收益明细分析↗](https://yapi.nbttfc365.com/project/44/interface/api/4243)
// **/
// export const postV1AgtRebateInfoHistoryQueryDetailsAnalysisApiRequest: MarkcoinRequest<
//   YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisApiRequest,
//   YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agtRebateInfoHistory/queryDetailsAnalysis",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
