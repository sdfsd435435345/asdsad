/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询合约普通\/计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/11414) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/plan/orders/currentList`
 * @更新时间 `2023-07-25 17:47:20`
 */
export interface YapiGetV1PerpetualPlanOrdersCurrentListApiRequest {
  /**
   * 交易对ID
   */
  tradeId?: string
}

/**
 * 接口 [查询合约普通\/计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/11414) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/plan/orders/currentList`
 * @更新时间 `2023-07-25 17:47:20`
 */
export interface YapiGetV1PerpetualPlanOrdersCurrentListApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PerpetualPlanOrdersCurrentListData[]
}
export interface YapiGetV1PerpetualPlanOrdersCurrentListData {
  /**
   * 订单ID
   */
  id: number
  /**
   * 1普通委托  2计划委托
   */
  category: number
  /**
   * 撮合类型 1限价 2市价 3撤单
   */
  matchType: number
  /**
   * 下单类型 1买单 2卖单 3撤单
   */
  side: number
  /**
   * 价格
   */
  price: number
  /**
   * 数量
   */
  size: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询合约普通/计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/11414)
// **/
// export const getV1PerpetualPlanOrdersCurrentListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualPlanOrdersCurrentListApiRequest,
//   YapiGetV1PerpetualPlanOrdersCurrentListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/plan/orders/currentList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
