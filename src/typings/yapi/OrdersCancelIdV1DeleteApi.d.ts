/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [撤销订单_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2672) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `DELETE /v1/orders/cancel/{id}`
 * @更新时间 `2022-12-30 15:19:31`
 */
export interface YapiDeleteV1OrdersCancelIdApiRequest {
  /**
   * 订单id
   */
  id: string
}

/**
 * 接口 [撤销订单_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2672) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `DELETE /v1/orders/cancel/{id}`
 * @更新时间 `2022-12-30 15:19:31`
 */
export interface YapiDeleteV1OrdersCancelIdApiResponse {
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
// * [撤销订单_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2672)
// **/
// export const deleteV1OrdersCancelIdApiRequest: MarkcoinRequest<
//   YapiDeleteV1OrdersCancelIdApiRequest,
//   YapiDeleteV1OrdersCancelIdApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/orders/cancel/{id}",
//     method: "DELETE",
//     data
//   })
// }

/* prettier-ignore-end */
