/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约标记价格(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/11789) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /inner/v1/perpetual/tradePair/markPrice`
 * @更新时间 `2023-07-29 00:23:45`
 */
export interface YapiGetInnerV1PerpetualTradePairMarkPriceApiRequest {
  /**
   * 币对id
   */
  tradePairId: string
}

/**
 * 接口 [合约标记价格(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/11789) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /inner/v1/perpetual/tradePair/markPrice`
 * @更新时间 `2023-07-29 00:23:45`
 */
export interface YapiGetInnerV1PerpetualTradePairMarkPriceApiResponse {
  /**
   * 标记价格
   */
  markPrice?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约标记价格(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/11789)
// **/
// export const getInnerV1PerpetualTradePairMarkPriceApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualTradePairMarkPriceApiRequest,
//   YapiGetInnerV1PerpetualTradePairMarkPriceApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/tradePair/markPrice",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
