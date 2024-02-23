/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [批量撤销_普通委托_按ids_内部↗](https://yapi.nbttfc365.com/project/44/interface/api/4427) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /inner/v1/perpetual/orders/batch/cancel`
 * @更新时间 `2023-02-03 10:29:46`
 */
export interface YapiPostInnerV1PerpetualOrdersBatchCancelApiRequest {
  /**
   * 用户id
   */
  uid: string
  /**
   * 商户id
   */
  businessId: string
  ids: number[]
}

/**
 * 接口 [批量撤销_普通委托_按ids_内部↗](https://yapi.nbttfc365.com/project/44/interface/api/4427) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /inner/v1/perpetual/orders/batch/cancel`
 * @更新时间 `2023-02-03 10:29:46`
 */
export interface YapiPostInnerV1PerpetualOrdersBatchCancelApiResponse {
  /**
   * 错误码 200 成功 其他code失败
   */
  code?: number
  /**
   * null
   */
  data?: string
  /**
   * 错误消息
   */
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [批量撤销_普通委托_按ids_内部↗](https://yapi.nbttfc365.com/project/44/interface/api/4427)
// **/
// export const postInnerV1PerpetualOrdersBatchCancelApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualOrdersBatchCancelApiRequest,
//   YapiPostInnerV1PerpetualOrdersBatchCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/orders/batch/cancel",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
