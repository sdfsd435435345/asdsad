/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [今日盈亏↗](https://yapi.nbttfc365.com/project/44/interface/api/11074) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/earning/today`
 * @更新时间 `2023-09-01 16:08:50`
 */
export interface YapiGetV1OptionEarningTodayApiRequest {
  /**
   * 所有时区的今日0点时间戳
   */
  ts: string
}

/**
 * 接口 [今日盈亏↗](https://yapi.nbttfc365.com/project/44/interface/api/11074) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/earning/today`
 * @更新时间 `2023-09-01 16:08:50`
 */
export interface YapiGetV1OptionEarningTodayApiResponse {
  code: number
  message: string
  data: YapiGetV1OptionEarningTodayData
}
export interface YapiGetV1OptionEarningTodayData {
  list: YapiGetV1OptionEarningTodayListData
  /**
   * 金额总计
   */
  total: number
  /**
   * 金额单位 USDT
   */
  currency: string
}
/**
 * 数据集合 每小时一条
 */
export interface YapiGetV1OptionEarningTodayListData {
  /**
   * 小时时间戳
   */
  ts: number
  /**
   * 收益金额
   */
  yield: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [今日盈亏↗](https://yapi.nbttfc365.com/project/44/interface/api/11074)
// **/
// export const getV1OptionEarningTodayApiRequest: MarkcoinRequest<
//   YapiGetV1OptionEarningTodayApiRequest,
//   YapiGetV1OptionEarningTodayApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/earning/today",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
