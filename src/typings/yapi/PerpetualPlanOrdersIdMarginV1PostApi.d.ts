/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前委托_计划委托_保证金调整↗](https://yapi.nbttfc365.com/project/44/interface/api/4075) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/plan/orders/{id}/margin`
 * @更新时间 `2023-02-22 16:22:40`
 */
export interface YapiPostV1PerpetualPlanOrdersIdMarginApiRequest {
  /**
   * 额外保证金
   */
  additionalMargin: number
  /**
   * 计划委托单id
   */
  id: string
}

/**
 * 接口 [当前委托_计划委托_保证金调整↗](https://yapi.nbttfc365.com/project/44/interface/api/4075) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/plan/orders/{id}/margin`
 * @更新时间 `2023-02-22 16:22:40`
 */
export interface YapiPostV1PerpetualPlanOrdersIdMarginApiResponse {
  code?: number
  message?: string
  data: YapiPostV1PerpetualPlanOrdersIdMarginData
}
export interface YapiPostV1PerpetualPlanOrdersIdMarginData {
  /**
   * 是否修改成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前委托_计划委托_保证金调整↗](https://yapi.nbttfc365.com/project/44/interface/api/4075)
// **/
// export const postV1PerpetualPlanOrdersIdMarginApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPlanOrdersIdMarginApiRequest,
//   YapiPostV1PerpetualPlanOrdersIdMarginApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/plan/orders/{id}/margin",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
