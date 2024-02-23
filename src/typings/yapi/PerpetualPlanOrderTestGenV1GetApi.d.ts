/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [生成计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/4363) 的 **请求类型**
 *
 * @分类 [测试↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_547)
 * @请求头 `GET /v1/perpetual/planOrder/test/gen`
 * @更新时间 `2023-02-03 11:03:09`
 */
export interface YapiGetV1PerpetualPlanOrderTestGenApiRequest {
  /**
   * 用户id
   */
  uid?: string
  /**
   * 合约组id
   */
  groupId?: string
}

/**
 * 接口 [生成计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/4363) 的 **返回类型**
 *
 * @分类 [测试↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_547)
 * @请求头 `GET /v1/perpetual/planOrder/test/gen`
 * @更新时间 `2023-02-03 11:03:09`
 */
export interface YapiGetV1PerpetualPlanOrderTestGenApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [生成计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/4363)
// **/
// export const getV1PerpetualPlanOrderTestGenApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualPlanOrderTestGenApiRequest,
//   YapiGetV1PerpetualPlanOrderTestGenApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/planOrder/test/gen",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
