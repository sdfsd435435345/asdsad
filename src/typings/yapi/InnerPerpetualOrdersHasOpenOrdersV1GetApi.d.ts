/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前用户是否有普通委托挂单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4263) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/v1/perpetual/orders/hasOpenOrders`
 * @更新时间 `2023-02-01 16:46:06`
 */
export interface YapiGetInnerV1PerpetualOrdersHasOpenOrdersApiRequest {
  /**
   * 商户ID
   */
  businessId: string
  /**
   * 用户ID
   */
  uid: string
  /**
   * 合约组ID
   */
  groupId?: string
}

/**
 * 接口 [当前用户是否有普通委托挂单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4263) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/v1/perpetual/orders/hasOpenOrders`
 * @更新时间 `2023-02-01 16:46:06`
 */
export interface YapiGetInnerV1PerpetualOrdersHasOpenOrdersApiResponse {
  /**
   * true 有挂单 false没有挂单
   */
  data?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前用户是否有普通委托挂单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4263)
// **/
// export const getInnerV1PerpetualOrdersHasOpenOrdersApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualOrdersHasOpenOrdersApiRequest,
//   YapiGetInnerV1PerpetualOrdersHasOpenOrdersApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/orders/hasOpenOrders",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
