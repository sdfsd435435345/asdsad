/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [开通合约专业版阈值↗](https://yapi.nbttfc365.com/project/44/interface/api/5739) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/specialize/perpetual/threshold`
 * @更新时间 `2023-05-06 16:48:21`
 */
export interface YapiGetV1PerpetualSpecializePerpetualThresholdApiRequest {}

/**
 * 接口 [开通合约专业版阈值↗](https://yapi.nbttfc365.com/project/44/interface/api/5739) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/specialize/perpetual/threshold`
 * @更新时间 `2023-05-06 16:48:21`
 */
export interface YapiGetV1PerpetualSpecializePerpetualThresholdApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1PerpetualSpecializePerpetualThresholdData
}
export interface YapiGetV1PerpetualSpecializePerpetualThresholdData {
  /**
   * 符号
   */
  symbol: string
  /**
   * 阈值
   */
  threshold: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [开通合约专业版阈值↗](https://yapi.nbttfc365.com/project/44/interface/api/5739)
// **/
// export const getV1PerpetualSpecializePerpetualThresholdApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualSpecializePerpetualThresholdApiRequest,
//   YapiGetV1PerpetualSpecializePerpetualThresholdApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/specialize/perpetual/threshold",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
