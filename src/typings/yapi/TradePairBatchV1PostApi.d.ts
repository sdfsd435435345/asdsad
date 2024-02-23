/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-批量获取币对详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2966) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/tradePair/batch`
 * @更新时间 `2022-10-26 23:32:23`
 */
export interface YapiPostV1TradePairBatchApiRequest {
  symbols: string[]
}

/**
 * 接口 [现货-批量获取币对详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2966) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/tradePair/batch`
 * @更新时间 `2022-10-26 23:32:23`
 */
export interface YapiPostV1TradePairBatchApiResponse {
  code?: number
  data?: YapiPostV1TradePairBatchData
  message?: string
}
export interface YapiPostV1TradePairBatchData {
  /**
   * 币对详情对象列表
   */
  list?: {}[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-批量获取币对详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2966)
// **/
// export const postV1TradePairBatchApiRequest: MarkcoinRequest<
//   YapiPostV1TradePairBatchApiRequest,
//   YapiPostV1TradePairBatchApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/tradePair/batch",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
