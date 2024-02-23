/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [撤销_普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3899) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/orders/cancel`
 * @更新时间 `2023-02-16 11:29:51`
 */
export interface YapiPostV1PerpetualOrdersCancelApiRequest {
  /**
   * 订单ID
   */
  id: number
}

/**
 * 接口 [撤销_普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3899) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/orders/cancel`
 * @更新时间 `2023-02-16 11:29:51`
 */
export interface YapiPostV1PerpetualOrdersCancelApiResponse {
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
// * [撤销_普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3899)
// **/
// export const postV1PerpetualOrdersCancelApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualOrdersCancelApiRequest,
//   YapiPostV1PerpetualOrdersCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/orders/cancel",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
