/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [止盈止损 - 批量撤销↗](https://yapi.nbttfc365.com/project/44/interface/api/18659) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/profitLoss/orders/cancelAll`
 * @更新时间 `2023-10-09 14:58:26`
 */
export interface YapiPostV1ProfitLossOrdersCancelAllApiRequest {
  /**
   * 交易对ID
   */
  tradeId?: number
  /**
   * 方向 1买单 2卖单
   */
  side?: number
  /**
   * 1 限价单 2 市价单
   */
  orderType?: number
  /**
   * 1:一天内 ，2：一周内，3：一月内，4：三个月内)
   */
  timeRange?: number
  /**
   * 开始时间 时间戳 毫秒
   */
  beginDate?: number
  /**
   * 结束时间 时间戳 毫秒
   */
  endDate?: number
}

/**
 * 接口 [止盈止损 - 批量撤销↗](https://yapi.nbttfc365.com/project/44/interface/api/18659) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/profitLoss/orders/cancelAll`
 * @更新时间 `2023-10-09 14:58:26`
 */
export interface YapiPostV1ProfitLossOrdersCancelAllApiResponse {
  code?: number
  /**
   * success
   */
  data?: string
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [止盈止损 - 批量撤销↗](https://yapi.nbttfc365.com/project/44/interface/api/18659)
// **/
// export const postV1ProfitLossOrdersCancelAllApiRequest: MarkcoinRequest<
//   YapiPostV1ProfitLossOrdersCancelAllApiRequest,
//   YapiPostV1ProfitLossOrdersCancelAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/profitLoss/orders/cancelAll",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
