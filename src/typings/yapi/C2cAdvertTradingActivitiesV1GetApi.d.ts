/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [盘口列表↗](https://yapi.nbttfc365.com/project/73/interface/api/12024) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/tradingActivities`
 * @更新时间 `2023-08-18 13:53:40`
 */
export interface YapiGetV1C2cAdvertTradingActivitiesApiRequest {
  /**
   * 区域id
   */
  areaId: string
  /**
   * 币种id
   */
  coinId: string
}

/**
 * 接口 [盘口列表↗](https://yapi.nbttfc365.com/project/73/interface/api/12024) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/tradingActivities`
 * @更新时间 `2023-08-18 13:53:40`
 */
export interface YapiGetV1C2cAdvertTradingActivitiesApiResponse {
  data?: YapiGetV1C2CAdvertTradingActivitiesData
  code?: number
  message?: string
}
export interface YapiGetV1C2CAdvertTradingActivitiesData {
  buys: YapiGetV1C2CAdvertTradingActivitiesListBuysData[]
  sells: YapiGetV1C2CAdvertTradingActivitiesListSellsData[]
}
export interface YapiGetV1C2CAdvertTradingActivitiesListBuysData {
  /**
   * 价格
   */
  price: string
  /**
   * 数量
   */
  quantity: string
}
export interface YapiGetV1C2CAdvertTradingActivitiesListSellsData {
  /**
   * 价格
   */
  price: string
  /**
   * 数量
   */
  quantity: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [盘口列表↗](https://yapi.nbttfc365.com/project/73/interface/api/12024)
// **/
// export const getV1C2cAdvertTradingActivitiesApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertTradingActivitiesApiRequest,
//   YapiGetV1C2cAdvertTradingActivitiesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/tradingActivities",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
