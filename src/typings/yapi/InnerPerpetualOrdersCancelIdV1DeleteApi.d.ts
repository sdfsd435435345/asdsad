/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [撤销_普通委托_单个_内部↗](https://yapi.nbttfc365.com/project/44/interface/api/3911) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `DELETE /inner/v1/perpetual/orders/cancel/{id}`
 * @更新时间 `2023-02-03 10:31:05`
 */
export interface YapiDeleteInnerV1PerpetualOrdersCancelIdApiRequest {
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
 * 接口 [撤销_普通委托_单个_内部↗](https://yapi.nbttfc365.com/project/44/interface/api/3911) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `DELETE /inner/v1/perpetual/orders/cancel/{id}`
 * @更新时间 `2023-02-03 10:31:05`
 */
export interface YapiDeleteInnerV1PerpetualOrdersCancelIdApiResponse {
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
// * [撤销_普通委托_单个_内部↗](https://yapi.nbttfc365.com/project/44/interface/api/3911)
// **/
// export const deleteInnerV1PerpetualOrdersCancelIdApiRequest: MarkcoinRequest<
//   YapiDeleteInnerV1PerpetualOrdersCancelIdApiRequest,
//   YapiDeleteInnerV1PerpetualOrdersCancelIdApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/orders/cancel/{id}",
//     method: "DELETE",
//     data
//   })
// }

/* prettier-ignore-end */
