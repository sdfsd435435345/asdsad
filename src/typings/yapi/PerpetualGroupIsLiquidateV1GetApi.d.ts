/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组是否强平中↗](https://yapi.nbttfc365.com/project/44/interface/api/5039) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/isLiquidate`
 * @更新时间 `2023-02-28 19:03:11`
 */
export interface YapiGetV1PerpetualGroupIsLiquidateApiRequest {
  groupId: string
}

/**
 * 接口 [合约组是否强平中↗](https://yapi.nbttfc365.com/project/44/interface/api/5039) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/isLiquidate`
 * @更新时间 `2023-02-28 19:03:11`
 */
export interface YapiGetV1PerpetualGroupIsLiquidateApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PerpetualGroupIsLiquidateData
}
export interface YapiGetV1PerpetualGroupIsLiquidateData {
  /**
   * 是否强平中
   */
  isLiquidate?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组是否强平中↗](https://yapi.nbttfc365.com/project/44/interface/api/5039)
// **/
// export const getV1PerpetualGroupIsLiquidateApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupIsLiquidateApiRequest,
//   YapiGetV1PerpetualGroupIsLiquidateApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/isLiquidate",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
