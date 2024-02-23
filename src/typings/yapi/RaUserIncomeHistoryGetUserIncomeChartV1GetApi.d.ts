/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户盈亏-表格↗](https://yapi.nbttfc365.com/project/44/interface/api/11769) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/userIncomeHistory/getUserIncomeChart`
 * @更新时间 `2023-07-27 14:07:31`
 */
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeChartApiRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 每页查询数量
   */
  pageSize: string
}

/**
 * 接口 [用户盈亏-表格↗](https://yapi.nbttfc365.com/project/44/interface/api/11769) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/userIncomeHistory/getUserIncomeChart`
 * @更新时间 `2023-07-27 14:07:31`
 */
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeChartApiResponse {
  code: number
  message: string
  data: YapiGetV1RaUserIncomeHistoryGetUserIncomeChartData
}
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeChartData {
  /**
   * 盈亏详情数据
   */
  list: YapiGetV1RaUserIncomeHistoryGetUserIncomeChartListData[]
  /**
   * 总数
   */
  total: number
  /**
   * 页码
   */
  pageNum: number
  /**
   * 每页查询数量
   */
  pageSize: number
}
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeChartListData {
  /**
   * 时间
   */
  date: string
  dateIncome: YapiGetV1RaUserIncomeHistoryGetUserIncomeChartDateIncomeListData
  USDDateIncome: YapiGetV1RaUserIncomeHistoryGetUserIncomeChartUSDDateIncomeListData
}
/**
 * 当日（时）盈亏
 */
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeChartDateIncomeListData {
  /**
   * 金额数量
   */
  money: string
  /**
   * 金额单位
   */
  coinName: string
}
/**
 * 当日（时）盈亏（美元）
 */
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeChartUSDDateIncomeListData {
  /**
   * 金额数量
   */
  money: string
  /**
   * 金额单位
   */
  coinName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户盈亏-表格↗](https://yapi.nbttfc365.com/project/44/interface/api/11769)
// **/
// export const getV1RaUserIncomeHistoryGetUserIncomeChartApiRequest: MarkcoinRequest<
//   YapiGetV1RaUserIncomeHistoryGetUserIncomeChartApiRequest,
//   YapiGetV1RaUserIncomeHistoryGetUserIncomeChartApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/userIncomeHistory/getUserIncomeChart",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
