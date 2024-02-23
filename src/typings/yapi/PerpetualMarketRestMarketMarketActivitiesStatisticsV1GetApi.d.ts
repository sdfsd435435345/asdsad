/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [行情异动统计↗](https://yapi.nbttfc365.com/project/44/interface/api/4387) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /perpetual-market-rest/v1/market/marketActivities/statistics`
 * @更新时间 `2023-02-02 14:13:31`
 */
export interface YapiGetPerpetualMarketRestV1MarketMarketActivitiesStatisticsApiRequest {
  /**
   *
   * 行情异动记录id
   */
  marketActivitiesId: string
}

/**
 * 接口 [行情异动统计↗](https://yapi.nbttfc365.com/project/44/interface/api/4387) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /perpetual-market-rest/v1/market/marketActivities/statistics`
 * @更新时间 `2023-02-02 14:13:31`
 */
export interface YapiGetPerpetualMarketRestV1MarketMarketActivitiesStatisticsApiResponse {
  code?: number
  message?: string
  data?: YapiGetPerpetualMarketRestV1MarketMarketActivitiesStatisticsData
}
export interface YapiGetPerpetualMarketRestV1MarketMarketActivitiesStatisticsData {
  isSucess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [行情异动统计↗](https://yapi.nbttfc365.com/project/44/interface/api/4387)
// **/
// export const getPerpetualMarketRestV1MarketMarketActivitiesStatisticsApiRequest: MarkcoinRequest<
//   YapiGetPerpetualMarketRestV1MarketMarketActivitiesStatisticsApiRequest,
//   YapiGetPerpetualMarketRestV1MarketMarketActivitiesStatisticsApiResponse['data']
// > = params => {
//   return request({
//     path: "/perpetual-market-rest/v1/market/marketActivities/statistics",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
