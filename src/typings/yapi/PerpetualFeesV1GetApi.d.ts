/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约资金费用明细查询(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3687) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/fees`
 * @更新时间 `2023-09-12 14:17:48`
 */
export interface YapiGetV1PerpetualFeesApiRequest {
  /**
   * 币种ID
   */
  coidId?: string
  /**
   * 开始时间
   */
  startTime?: string
  /**
   * 结束时间
   */
  endTime?: string
}

/**
 * 接口 [合约资金费用明细查询(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3687) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/fees`
 * @更新时间 `2023-09-12 14:17:48`
 */
export interface YapiGetV1PerpetualFeesApiResponse {
  code?: number
  message?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约资金费用明细查询(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3687)
// **/
// export const getV1PerpetualFeesApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualFeesApiRequest,
//   YapiGetV1PerpetualFeesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/fees",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
