/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [按筛选条件全部撤销_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2957) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `DELETE /inner/v1/orders/cancelAll`
 * @更新时间 `2022-10-24 14:04:13`
 */
export interface YapiDeleteInnerV1OrdersCancelAllApiRequest {
  /**
   * 交易对id
   */
  tradeId: string
  /**
   * 1 限价单 2 市价单
   */
  orderType: string
  /**
   * 1 买入 2 卖出
   */
  side: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 商户id
   */
  businessId?: string
}

/**
 * 接口 [按筛选条件全部撤销_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2957) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `DELETE /inner/v1/orders/cancelAll`
 * @更新时间 `2022-10-24 14:04:13`
 */
export interface YapiDeleteInnerV1OrdersCancelAllApiResponse {
  /**
   * 返回状态码200 为成功 ,其他code值为错误
   */
  code?: number
  /**
   * 返回信息说明  success
   */
  message?: string
  /**
   * success
   */
  date: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [按筛选条件全部撤销_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2957)
// **/
// export const deleteInnerV1OrdersCancelAllApiRequest: MarkcoinRequest<
//   YapiDeleteInnerV1OrdersCancelAllApiRequest,
//   YapiDeleteInnerV1OrdersCancelAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/orders/cancelAll",
//     method: "DELETE",
//     data
//   })
// }

/* prettier-ignore-end */
