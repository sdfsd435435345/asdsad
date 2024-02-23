/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [撤销订单_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2879) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `DELETE /inner/v1/orders/cancel/{businessId}/{uid}/{id}`
 * @更新时间 `2022-10-17 15:26:54`
 */
export interface YapiDeleteInnerV1OrdersCancelBusinessIdUidIdApiRequest {
  /**
   * 商户id
   */
  businessId: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 订单id
   */
  id: string
}

/**
 * 接口 [撤销订单_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2879) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `DELETE /inner/v1/orders/cancel/{businessId}/{uid}/{id}`
 * @更新时间 `2022-10-17 15:26:54`
 */
export interface YapiDeleteInnerV1OrdersCancelBusinessIdUidIdApiResponse {
  /**
   * 订单id，字符串
   */
  data?: string
  /**
   * 200 成功 其他code值 失败
   */
  code?: number
  /**
   * 相应描述信息
   */
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [撤销订单_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2879)
// **/
// export const deleteInnerV1OrdersCancelBusinessIdUidIdApiRequest: MarkcoinRequest<
//   YapiDeleteInnerV1OrdersCancelBusinessIdUidIdApiRequest,
//   YapiDeleteInnerV1OrdersCancelBusinessIdUidIdApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/orders/cancel/{businessId}/{uid}/{id}",
//     method: "DELETE",
//     data
//   })
// }

/* prettier-ignore-end */
