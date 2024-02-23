/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [撤销_计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3927) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/plan/orders/cancel`
 * @更新时间 `2023-02-16 14:19:38`
 */
export interface YapiPostV1PerpetualPlanOrdersCancelApiRequest {
  id: number
}

/**
 * 接口 [撤销_计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3927) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/plan/orders/cancel`
 * @更新时间 `2023-02-16 14:19:38`
 */
export interface YapiPostV1PerpetualPlanOrdersCancelApiResponse {
  /**
   * 订单id，字符串
   */
  data?: string
  code?: number
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [撤销_计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3927)
// **/
// export const postV1PerpetualPlanOrdersCancelApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPlanOrdersCancelApiRequest,
//   YapiPostV1PerpetualPlanOrdersCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/plan/orders/cancel",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
