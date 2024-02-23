/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [全部撤销_仓位的所有计划委托单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4151) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `DELETE /inner/v1/perpetual/plan/orders/position/cancelAll`
 * @更新时间 `2023-03-17 15:30:25`
 */
export interface YapiDeleteInnerV1PerpetualPlanOrdersPositionCancelAllApiRequest {
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 商户id
   */
  businessId: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 仓位ID
   */
  positionId: string
  /**
   * 币对ID
   */
  tradeId?: string
  /**
   * 杠杆倍数
   */
  lever?: string
  /**
   * 方向
   */
  side?: string
}

/**
 * 接口 [全部撤销_仓位的所有计划委托单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4151) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `DELETE /inner/v1/perpetual/plan/orders/position/cancelAll`
 * @更新时间 `2023-03-17 15:30:25`
 */
export interface YapiDeleteInnerV1PerpetualPlanOrdersPositionCancelAllApiResponse {
  /**
   * 返回状态码200为成功，其他code值为失败
   */
  code?: number
  /**
   * 返回信息说明 success
   */
  message?: string
  /**
   * 撤销的计划委托单ID列表
   */
  data?: number[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [全部撤销_仓位的所有计划委托单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4151)
// **/
// export const deleteInnerV1PerpetualPlanOrdersPositionCancelAllApiRequest: MarkcoinRequest<
//   YapiDeleteInnerV1PerpetualPlanOrdersPositionCancelAllApiRequest,
//   YapiDeleteInnerV1PerpetualPlanOrdersPositionCancelAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/plan/orders/position/cancelAll",
//     method: "DELETE",
//     data
//   })
// }

/* prettier-ignore-end */
