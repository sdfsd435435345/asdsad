/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [行情异动统计↗](https://yapi.nbttfc365.com/project/44/interface/api/3587) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/marketActivities/statistics`
 * @更新时间 `2022-11-27 17:40:11`
 */
export interface YapiGetV1MarketMarketActivitiesStatisticsApiRequest {
  marketActivitiesId: string
}

/**
 * 接口 [行情异动统计↗](https://yapi.nbttfc365.com/project/44/interface/api/3587) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/marketActivities/statistics`
 * @更新时间 `2022-11-27 17:40:11`
 */
export interface YapiGetV1MarketMarketActivitiesStatisticsApiResponse {
  code: number
  message: string
  data: YapiGetV1MarketMarketActivitiesStatisticsData
}
/**
 * 是否成功
 */
export interface YapiGetV1MarketMarketActivitiesStatisticsData {
  /**
   * 是否成功
   */
  isSucess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [行情异动统计↗](https://yapi.nbttfc365.com/project/44/interface/api/3587)
// **/
// export const getV1MarketMarketActivitiesStatisticsApiRequest: MarkcoinRequest<
//   YapiGetV1MarketMarketActivitiesStatisticsApiRequest,
//   YapiGetV1MarketMarketActivitiesStatisticsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/market/marketActivities/statistics",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
