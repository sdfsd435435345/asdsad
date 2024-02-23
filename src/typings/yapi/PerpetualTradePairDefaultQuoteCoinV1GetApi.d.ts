/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [默认法币↗](https://yapi.nbttfc365.com/project/44/interface/api/4451) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/defaultQuoteCoin`
 * @更新时间 `2023-02-07 11:16:43`
 */
export interface YapiGetV1PerpetualTradePairDefaultQuoteCoinApiRequest {}

/**
 * 接口 [默认法币↗](https://yapi.nbttfc365.com/project/44/interface/api/4451) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/defaultQuoteCoin`
 * @更新时间 `2023-02-07 11:16:43`
 */
export interface YapiGetV1PerpetualTradePairDefaultQuoteCoinApiResponse {
  code: string
  data: string
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [默认法币↗](https://yapi.nbttfc365.com/project/44/interface/api/4451)
// **/
// export const getV1PerpetualTradePairDefaultQuoteCoinApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualTradePairDefaultQuoteCoinApiRequest,
//   YapiGetV1PerpetualTradePairDefaultQuoteCoinApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/tradePair/defaultQuoteCoin",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
