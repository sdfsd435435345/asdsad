/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户盈亏-图表↗](https://yapi.nbttfc365.com/project/44/interface/api/11389) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/userIncomeHistory/getUserIncomeDiagram`
 * @更新时间 `2023-08-02 18:27:17`
 */
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramApiRequest {
  /**
   * 1：当日、2：近7日、3：近30天
   */
  dayType: string
}

/**
 * 接口 [用户盈亏-图表↗](https://yapi.nbttfc365.com/project/44/interface/api/11389) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/userIncomeHistory/getUserIncomeDiagram`
 * @更新时间 `2023-08-02 18:27:17`
 */
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramApiResponse {
  code: number
  message: string
  data: YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramData
}
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramData {
  totalIncome: YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramTotalIncomeData
  USDTotalIncome: YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramUSDTotalIncomeData
  /**
   * 盈亏详情数据
   */
  incomeDetail: YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramListIncomeDetailData[]
}
/**
 * 盈亏总值
 */
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramTotalIncomeData {
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
 * 盈亏总值(美元)
 */
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramUSDTotalIncomeData {
  /**
   * 金额数量
   */
  money: string
  /**
   * 金额单位
   */
  coinName: string
}
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramListIncomeDetailData {
  /**
   * 时间
   */
  date: string
  dateIncome: YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramDateIncomeListIncomeDetailData
  USDDateIncome: YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramUSDDateIncomeListIncomeDetailData
}
/**
 * 当日（时）盈亏
 */
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramDateIncomeListIncomeDetailData {
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
export interface YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramUSDDateIncomeListIncomeDetailData {
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
// * [用户盈亏-图表↗](https://yapi.nbttfc365.com/project/44/interface/api/11389)
// **/
// export const getV1RaUserIncomeHistoryGetUserIncomeDiagramApiRequest: MarkcoinRequest<
//   YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramApiRequest,
//   YapiGetV1RaUserIncomeHistoryGetUserIncomeDiagramApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/userIncomeHistory/getUserIncomeDiagram",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
