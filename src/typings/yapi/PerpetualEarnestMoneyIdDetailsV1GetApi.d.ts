/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [额外保证金列表 (废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3671) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/earnestMoney/{id}/details`
 * @更新时间 `2023-01-09 20:48:36`
 */
export interface YapiGetV1PerpetualEarnestMoneyIdDetailsApiRequest {
  groupId: string
  /**
   * 合约组id
   */
  id: string
}

/**
 * 接口 [额外保证金列表 (废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3671) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/earnestMoney/{id}/details`
 * @更新时间 `2023-01-09 20:48:36`
 */
export interface YapiGetV1PerpetualEarnestMoneyIdDetailsApiResponse {
  code?: number
  msg?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [额外保证金列表 (废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3671)
// **/
// export const getV1PerpetualEarnestMoneyIdDetailsApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualEarnestMoneyIdDetailsApiRequest,
//   YapiGetV1PerpetualEarnestMoneyIdDetailsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/earnestMoney/{id}/details",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
