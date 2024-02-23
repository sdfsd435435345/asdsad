/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [板块列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5709) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/conceptList`
 * @更新时间 `2023-05-06 17:24:26`
 */
export interface YapiGetV1PerpetualTradePairConceptListApiRequest {}

/**
 * 接口 [板块列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5709) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/conceptList`
 * @更新时间 `2023-05-06 17:24:26`
 */
export interface YapiGetV1PerpetualTradePairConceptListApiResponse {
  code?: number
  data?: YapiGetV1PerpetualTradePairConceptListData[]
  message?: string
}
export interface YapiGetV1PerpetualTradePairConceptListData {
  /**
   * 板块名
   */
  name: string
  /**
   * 图片
   */
  icon: string
  id: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [板块列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5709)
// **/
// export const getV1PerpetualTradePairConceptListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualTradePairConceptListApiRequest,
//   YapiGetV1PerpetualTradePairConceptListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/tradePair/conceptList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
