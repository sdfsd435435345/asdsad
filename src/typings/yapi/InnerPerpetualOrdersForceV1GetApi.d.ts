/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [爆仓_查询合约组的普通委托挂单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4127) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/v1/perpetual/orders/force`
 * @更新时间 `2023-01-10 15:08:12`
 */
export interface YapiGetInnerV1PerpetualOrdersForceApiRequest {
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
 * 接口 [爆仓_查询合约组的普通委托挂单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4127) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/v1/perpetual/orders/force`
 * @更新时间 `2023-01-10 15:08:12`
 */
export interface YapiGetInnerV1PerpetualOrdersForceApiResponse {
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
// * [爆仓_查询合约组的普通委托挂单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4127)
// **/
// export const getInnerV1PerpetualOrdersForceApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualOrdersForceApiRequest,
//   YapiGetInnerV1PerpetualOrdersForceApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/orders/force",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
