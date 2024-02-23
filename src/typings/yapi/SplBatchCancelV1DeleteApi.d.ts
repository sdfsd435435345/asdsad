/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [（计划委托）用户批量撤销计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/2933) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `DELETE /v1/spl/batchCancel`
 * @更新时间 `2022-10-26 13:45:57`
 */
export interface YapiDeleteV1SplBatchCancelApiRequest {
  /**
   * 交易对id
   */
  tradeId?: string
  /**
   * 1 限价单 2 市价单
   */
  orderType?: string
  /**
   * 1 买入 2 卖出
   */
  side?: string
}

/**
 * 接口 [（计划委托）用户批量撤销计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/2933) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `DELETE /v1/spl/batchCancel`
 * @更新时间 `2022-10-26 13:45:57`
 */
export interface YapiDeleteV1SplBatchCancelApiResponse {
  /**
   * 备注
   */
  msg?: string
  /**
   * CODE 200为成功
   */
  code?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（计划委托）用户批量撤销计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/2933)
// **/
// export const deleteV1SplBatchCancelApiRequest: MarkcoinRequest<
//   YapiDeleteV1SplBatchCancelApiRequest,
//   YapiDeleteV1SplBatchCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/spl/batchCancel",
//     method: "DELETE",
//     data
//   })
// }

/* prettier-ignore-end */
