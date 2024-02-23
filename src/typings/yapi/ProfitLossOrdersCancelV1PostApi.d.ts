/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [止盈止损 - 撤单↗](https://yapi.nbttfc365.com/project/44/interface/api/18654) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/profitLoss/orders/cancel`
 * @更新时间 `2023-09-25 11:21:06`
 */
export interface YapiPostV1ProfitLossOrdersCancelApiRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 [止盈止损 - 撤单↗](https://yapi.nbttfc365.com/project/44/interface/api/18654) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/profitLoss/orders/cancel`
 * @更新时间 `2023-09-25 11:21:06`
 */
export interface YapiPostV1ProfitLossOrdersCancelApiResponse {
  code?: number
  /**
   * 订单编号
   */
  data?: string
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [止盈止损 - 撤单↗](https://yapi.nbttfc365.com/project/44/interface/api/18654)
// **/
// export const postV1ProfitLossOrdersCancelApiRequest: MarkcoinRequest<
//   YapiPostV1ProfitLossOrdersCancelApiRequest,
//   YapiPostV1ProfitLossOrdersCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/profitLoss/orders/cancel",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
