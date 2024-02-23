/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约指数-当前资金费率↗](https://yapi.nbttfc365.com/project/44/interface/api/452) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/assetsFeeRate/current`
 * @更新时间 `2023-01-08 18:49:40`
 */
export interface YapiGetV1PerpetualAssetsFeeRateCurrentApiRequest {
  /**
   * 1
   */
  tradePairId: string
}

/**
 * 接口 [合约指数-当前资金费率↗](https://yapi.nbttfc365.com/project/44/interface/api/452) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/assetsFeeRate/current`
 * @更新时间 `2023-01-08 18:49:40`
 */
export interface YapiGetV1PerpetualAssetsFeeRateCurrentApiResponse {
  code?: number
  data?: YapiGetV1PerpetualAssetsFeeRateCurrentData
  message?: string
}
export interface YapiGetV1PerpetualAssetsFeeRateCurrentData {
  /**
   * 利率，0
   */
  interestRate?: null
  /**
   * 上次结算时间
   */
  timeIndex?: number
  /**
   * 结算时间 东八区，比如 0，8，16. 客户端根据时间计算倒计时
   */
  settleTimes?: string
  symbolName?: string
  /**
   * 费率
   */
  feeRate?: number
  /**
   * 结算周期 /小时，比如 1，2，4，8
   */
  settleSpan?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约指数-当前资金费率↗](https://yapi.nbttfc365.com/project/44/interface/api/452)
// **/
// export const getV1PerpetualAssetsFeeRateCurrentApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAssetsFeeRateCurrentApiRequest,
//   YapiGetV1PerpetualAssetsFeeRateCurrentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/assetsFeeRate/current",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
