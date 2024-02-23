/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [关闭合约组并使历史订单不可见↗](https://yapi.nbttfc365.com/project/44/interface/api/3999) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `PUT /inner/v1/perpetual/orders/hide`
 * @更新时间 `2023-01-06 18:02:22`
 */
export interface YapiPutInnerV1PerpetualOrdersHideApiRequest {
  /**
   * 合约组ID
   */
  groupId: string
  /**
   * 用户ID
   */
  uid: string
  /**
   * 商户ID
   */
  businessId: string
}

/**
 * 接口 [关闭合约组并使历史订单不可见↗](https://yapi.nbttfc365.com/project/44/interface/api/3999) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `PUT /inner/v1/perpetual/orders/hide`
 * @更新时间 `2023-01-06 18:02:22`
 */
export interface YapiPutInnerV1PerpetualOrdersHideApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [关闭合约组并使历史订单不可见↗](https://yapi.nbttfc365.com/project/44/interface/api/3999)
// **/
// export const putInnerV1PerpetualOrdersHideApiRequest: MarkcoinRequest<
//   YapiPutInnerV1PerpetualOrdersHideApiRequest,
//   YapiPutInnerV1PerpetualOrdersHideApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/orders/hide",
//     method: "PUT",
//     data
//   })
// }

/* prettier-ignore-end */
