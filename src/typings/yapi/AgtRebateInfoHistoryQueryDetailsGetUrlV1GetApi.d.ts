/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-收益明细导出地址↗](https://yapi.nbttfc365.com/project/44/interface/api/4383) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agtRebateInfoHistory/queryDetails/getUrl`
 * @更新时间 `2023-07-09 21:52:40`
 */
export interface YapiGetV1AgtRebateInfoHistoryQueryDetailsGetUrlApiRequest {
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 不填=全部,selfRebate=自返佣, teamRebate=团队返佣
   */
  rebateTypeCd?: string
  /**
   * 开始时间时间戳（默认传最近三个月）
   */
  startDate?: string
  /**
   * 结束时间时间戳（默认传最近三个月）
   */
  endDate?: string
  /**
   * 最小金额
   */
  minAmount?: string
  /**
   * 最大金额
   */
  maxAmount?: string
}

/**
 * 接口 [代理商-收益明细导出地址↗](https://yapi.nbttfc365.com/project/44/interface/api/4383) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agtRebateInfoHistory/queryDetails/getUrl`
 * @更新时间 `2023-07-09 21:52:40`
 */
export interface YapiGetV1AgtRebateInfoHistoryQueryDetailsGetUrlApiResponse {
  code?: number
  message?: string
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-收益明细导出地址↗](https://yapi.nbttfc365.com/project/44/interface/api/4383)
// **/
// export const getV1AgtRebateInfoHistoryQueryDetailsGetUrlApiRequest: MarkcoinRequest<
//   YapiGetV1AgtRebateInfoHistoryQueryDetailsGetUrlApiRequest,
//   YapiGetV1AgtRebateInfoHistoryQueryDetailsGetUrlApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agtRebateInfoHistory/queryDetails/getUrl",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
