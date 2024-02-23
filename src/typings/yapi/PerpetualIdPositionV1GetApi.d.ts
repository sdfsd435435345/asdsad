/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组内持仓列表查询（废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/3691) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/{id}/position`
 * @更新时间 `2023-09-12 14:16:58`
 */
export interface YapiGetV1PerpetualIdPositionApiRequest {
  /**
   * 合约组id
   */
  id: string
}

/**
 * 接口 [合约组内持仓列表查询（废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/3691) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/{id}/position`
 * @更新时间 `2023-09-12 14:16:58`
 */
export interface YapiGetV1PerpetualIdPositionApiResponse {
  code?: number
  message?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组内持仓列表查询（废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/3691)
// **/
// export const getV1PerpetualIdPositionApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualIdPositionApiRequest,
//   YapiGetV1PerpetualIdPositionApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/{id}/position",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
