/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [爆仓_全部撤销_合约组的普通委托_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3987) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `DELETE /inner/v1/perpetual/orders/force/cancelAll`
 * @更新时间 `2023-01-10 15:05:41`
 */
export interface YapiDeleteInnerV1PerpetualOrdersForceCancelAllApiRequest {
  /**
   * 合约组id
   */
  groupId?: string
  /**
   * 商户id
   */
  businessId: string
  /**
   * 用户id
   */
  uid: string
}

/**
 * 接口 [爆仓_全部撤销_合约组的普通委托_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3987) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `DELETE /inner/v1/perpetual/orders/force/cancelAll`
 * @更新时间 `2023-01-10 15:05:41`
 */
export interface YapiDeleteInnerV1PerpetualOrdersForceCancelAllApiResponse {
  /**
   * 返回状态码200为成功，其他code值为失败
   */
  code?: number
  /**
   * 返回信息说明 success
   */
  message?: string
  /**
   * 订单ID列表
   */
  data?: number[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [爆仓_全部撤销_合约组的普通委托_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3987)
// **/
// export const deleteInnerV1PerpetualOrdersForceCancelAllApiRequest: MarkcoinRequest<
//   YapiDeleteInnerV1PerpetualOrdersForceCancelAllApiRequest,
//   YapiDeleteInnerV1PerpetualOrdersForceCancelAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/orders/force/cancelAll",
//     method: "DELETE",
//     data
//   })
// }

/* prettier-ignore-end */
