/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [撤销某交易对下所有挂单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4515) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `DELETE /inner/v1/perpetual/orders/openOrders`
 * @更新时间 `2023-02-13 11:36:26`
 */
export interface YapiDeleteInnerV1PerpetualOrdersOpenOrdersApiRequest {
  /**
   * 用户id
   */
  uid?: string
  /**
   * 商户id
   */
  businessId: string
  /**
   * 交易对id
   */
  tradeId?: string
}

/**
 * 接口 [撤销某交易对下所有挂单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4515) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `DELETE /inner/v1/perpetual/orders/openOrders`
 * @更新时间 `2023-02-13 11:36:26`
 */
export interface YapiDeleteInnerV1PerpetualOrdersOpenOrdersApiResponse {
  /**
   * 返回状态码 200 成功 其他失败
   */
  code?: number
  /**
   * 返回信息说明
   */
  message?: string
  /**
   * success
   */
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [撤销某交易对下所有挂单_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4515)
// **/
// export const deleteInnerV1PerpetualOrdersOpenOrdersApiRequest: MarkcoinRequest<
//   YapiDeleteInnerV1PerpetualOrdersOpenOrdersApiRequest,
//   YapiDeleteInnerV1PerpetualOrdersOpenOrdersApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/orders/openOrders",
//     method: "DELETE",
//     data
//   })
// }

/* prettier-ignore-end */
