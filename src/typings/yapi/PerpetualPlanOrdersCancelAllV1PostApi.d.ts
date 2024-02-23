/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [全部撤销_计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3931) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/plan/orders/cancelAll`
 * @更新时间 `2023-02-16 14:22:20`
 */
export interface YapiPostV1PerpetualPlanOrdersCancelAllApiRequest {
  /**
   * 币对JD
   */
  tradeId: number
  /**
   * 合约组ID
   */
  groupId: number
  /**
   * limit / market 订单类型
   */
  entrustTypeInd: string
  /**
   * 仓位ID
   */
  positionId: string
}

/**
 * 接口 [全部撤销_计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3931) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/plan/orders/cancelAll`
 * @更新时间 `2023-02-16 14:22:20`
 */
export interface YapiPostV1PerpetualPlanOrdersCancelAllApiResponse {
  /**
   * 返回状态码200为成功，其他code值为失败
   */
  code?: number
  /**
   * 返回信息说明 success
   */
  message?: string
  /**
   * success
   */
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [全部撤销_计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3931)
// **/
// export const postV1PerpetualPlanOrdersCancelAllApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPlanOrdersCancelAllApiRequest,
//   YapiPostV1PerpetualPlanOrdersCancelAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/plan/orders/cancelAll",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
