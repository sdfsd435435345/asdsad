/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [行情异动手动push数据↗](https://yapi.nbttfc365.com/project/44/interface/api/4415) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `POST /perpetual-market-rest/mock/marketActivities/addMockData`
 * @更新时间 `2023-02-02 18:44:51`
 */
export interface YapiPostPerpetualMarketRestMockMarketActivitiesAddMockDataApiRequest {
  /**
   * 交易对标识
   */
  symbolwassname: string
  /**
   * 价格
   */
  changesPrice: string
  /**
   * 变量值
   */
  changesValue: string
  /**
   * 异动类型id
   */
  marketActivitiesId: string
}

/**
 * 接口 [行情异动手动push数据↗](https://yapi.nbttfc365.com/project/44/interface/api/4415) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `POST /perpetual-market-rest/mock/marketActivities/addMockData`
 * @更新时间 `2023-02-02 18:44:51`
 */
export interface YapiPostPerpetualMarketRestMockMarketActivitiesAddMockDataApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [行情异动手动push数据↗](https://yapi.nbttfc365.com/project/44/interface/api/4415)
// **/
// export const postPerpetualMarketRestMockMarketActivitiesAddMockDataApiRequest: MarkcoinRequest<
//   YapiPostPerpetualMarketRestMockMarketActivitiesAddMockDataApiRequest,
//   YapiPostPerpetualMarketRestMockMarketActivitiesAddMockDataApiResponse['data']
// > = data => {
//   return request({
//     path: "/perpetual-market-rest/mock/marketActivities/addMockData",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
