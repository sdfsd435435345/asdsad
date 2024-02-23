/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约指数-资金费率列表↗](https://yapi.nbttfc365.com/project/44/interface/api/449) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/assetsFeeRate/list`
 * @更新时间 `2023-01-08 18:42:41`
 */
export interface YapiGetV1PerpetualAssetsFeeRateListApiRequest {
  /**
   * 币对id
   */
  tradePairId: string
  /**
   * 时间戳，比如最近7天的数据，就传7天前的时间戳，同时把pageSize设置为一个很大的int值，比如100000000
   */
  startTime?: string
}

/**
 * 接口 [合约指数-资金费率列表↗](https://yapi.nbttfc365.com/project/44/interface/api/449) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/assetsFeeRate/list`
 * @更新时间 `2023-01-08 18:42:41`
 */
export interface YapiGetV1PerpetualAssetsFeeRateListApiResponse {
  code?: number
  data?: YapiGetV1PerpetualAssetsFeeRateData
  message?: string
}
export interface YapiGetV1PerpetualAssetsFeeRateData {
  total?: number
  pageSize?: number
  list?: YapiGetV1PerpetualAssetsFeeRateListData[]
  pageNum?: number
}
export interface YapiGetV1PerpetualAssetsFeeRateListData {
  /**
   * 结算时间
   */
  timeIndex: number
  symbolName: string
  /**
   * 费率
   */
  feeRate: number
  /**
   * 结算间隔 /小时
   */
  settleSpan: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约指数-资金费率列表↗](https://yapi.nbttfc365.com/project/44/interface/api/449)
// **/
// export const getV1PerpetualAssetsFeeRateListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAssetsFeeRateListApiRequest,
//   YapiGetV1PerpetualAssetsFeeRateListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/assetsFeeRate/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
