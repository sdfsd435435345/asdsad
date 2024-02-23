/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-收益明细↗](https://yapi.nbttfc365.com/project/44/interface/api/4143) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agtRebateInfoHistory/queryDetails`
 * @更新时间 `2023-06-04 23:53:05`
 */
export interface YapiPostV1AgtRebateInfoHistoryQueryDetailsApiRequest {
  /**
   * 产品线 字典表code：agent_product_cd
   */
  productCd?: string
  /**
   * 开始时间时间戳（默认传最近三个月）
   */
  startTime: number
  /**
   * 结束时间时间戳（默认传最近三个月）
   */
  endTime: number
  /**
   * 最小金额
   */
  minAmount?: number
  /**
   * 最大金额
   */
  maxAmount?: number
  page: number
  pageSize: number
}

/**
 * 接口 [代理商-收益明细↗](https://yapi.nbttfc365.com/project/44/interface/api/4143) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agtRebateInfoHistory/queryDetails`
 * @更新时间 `2023-06-04 23:53:05`
 */
export interface YapiPostV1AgtRebateInfoHistoryQueryDetailsApiResponse {
  /**
   * 总收益
   */
  totalIncome: number
  /**
   * 结算币种                                                                                                                                                                                                                                   0                              000000
   */
  settlementCur: string
  incomes: YapiPostV1AgtRebateInfoHistoryQueryDetailsListIncomes[]
  /**
   * 收益详情
   */
  incomeDetails: YapiPostV1AgtRebateInfoHistoryQueryDetailsListIncomeDetails[]
  /**
   * 法币币种
   */
  legalCur: string
}
export interface YapiPostV1AgtRebateInfoHistoryQueryDetailsListIncomes {
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
export interface YapiPostV1AgtRebateInfoHistoryQueryDetailsListIncomeDetails {
  /**
   * 当时结算币种
   */
  settlementCur: string
  /**
   * 产品线 字典表code：agent_product_cd
   */
  productCd: string
  /**
   * 时间戳
   */
  createdByTime: number
  /**
   * 结算币种数量
   */
  settlementCurIncome: number
  /**
   * 实际结算手续费（总值）
   */
  legalCurIncome: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-收益明细↗](https://yapi.nbttfc365.com/project/44/interface/api/4143)
// **/
// export const postV1AgtRebateInfoHistoryQueryDetailsApiRequest: MarkcoinRequest<
//   YapiPostV1AgtRebateInfoHistoryQueryDetailsApiRequest,
//   YapiPostV1AgtRebateInfoHistoryQueryDetailsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agtRebateInfoHistory/queryDetails",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
