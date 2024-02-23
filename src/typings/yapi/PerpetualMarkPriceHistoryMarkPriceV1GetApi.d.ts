/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询标记价格↗](https://yapi.nbttfc365.com/project/44/interface/api/15089) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/markPriceHistory/markPrice`
 * @更新时间 `2023-08-30 16:31:48`
 */
export interface YapiGetV1PerpetualMarkPriceHistoryMarkPriceApiRequest {
  tradePairId: string
  /**
   * 时间戳
   */
  endTime: string
}

/**
 * 接口 [查询标记价格↗](https://yapi.nbttfc365.com/project/44/interface/api/15089) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/markPriceHistory/markPrice`
 * @更新时间 `2023-08-30 16:31:48`
 */
export interface YapiGetV1PerpetualMarkPriceHistoryMarkPriceApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询标记价格↗](https://yapi.nbttfc365.com/project/44/interface/api/15089)
// **/
// export const getV1PerpetualMarkPriceHistoryMarkPriceApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualMarkPriceHistoryMarkPriceApiRequest,
//   YapiGetV1PerpetualMarkPriceHistoryMarkPriceApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/markPriceHistory/markPrice",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
