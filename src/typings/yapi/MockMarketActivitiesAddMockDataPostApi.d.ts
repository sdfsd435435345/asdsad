/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [行情异动手动mock数据（已删除）↗](https://yapi.nbttfc365.com/project/44/interface/api/3611) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /mock/marketActivities/addMockData`
 * @更新时间 `2023-09-12 10:28:36`
 */
export interface YapiPostMockMarketActivitiesAddMockDataApiRequest {
  /**
   * 交易对标识
   */
  symbolwassname?: string
  /**
   * 价格
   */
  changesPrice?: number
  /**
   * 变量值
   */
  changesValue?: string
  /**
   * 异动类型id
   */
  marketActivitiesId?: number
}

/**
 * 接口 [行情异动手动mock数据（已删除）↗](https://yapi.nbttfc365.com/project/44/interface/api/3611) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /mock/marketActivities/addMockData`
 * @更新时间 `2023-09-12 10:28:36`
 */
export interface YapiPostMockMarketActivitiesAddMockDataApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [行情异动手动mock数据（已删除）↗](https://yapi.nbttfc365.com/project/44/interface/api/3611)
// **/
// export const postMockMarketActivitiesAddMockDataApiRequest: MarkcoinRequest<
//   YapiPostMockMarketActivitiesAddMockDataApiRequest,
//   YapiPostMockMarketActivitiesAddMockDataApiResponse['data']
// > = data => {
//   return request({
//     path: "/mock/marketActivities/addMockData",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
