/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前委托-计划委托-(止盈止损详情修改触发价格触发价格类型)↗](https://yapi.nbttfc365.com/project/44/interface/api/4095) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/plan/orders/strategy/update`
 * @更新时间 `2023-02-04 14:39:48`
 */
export interface YapiPostV1PerpetualPlanOrdersStrategyUpdateApiRequest {
  /**
   * 计划委托策略单ID
   */
  id: number
  strategy: YapiPostV1PerpetualPlanOrdersStrategyUpdateApiRequestStrategy
}
/**
 * 止盈止损
 */
export interface YapiPostV1PerpetualPlanOrdersStrategyUpdateApiRequestStrategy {
  stopProfit: YapiPostV1PerpetualPlanOrdersStrategyUpdateApiRequestStopProfitStrategy
  stopLoss: YapiPostV1PerpetualPlanOrdersStrategyUpdateApiRequestStopLossStrategy
}
export interface YapiPostV1PerpetualPlanOrdersStrategyUpdateApiRequestStopProfitStrategy {
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerPriceTypeInd: string
}
export interface YapiPostV1PerpetualPlanOrdersStrategyUpdateApiRequestStopLossStrategy {
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerPriceTypeInd: string
}

/**
 * 接口 [当前委托-计划委托-(止盈止损详情修改触发价格触发价格类型)↗](https://yapi.nbttfc365.com/project/44/interface/api/4095) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/plan/orders/strategy/update`
 * @更新时间 `2023-02-04 14:39:48`
 */
export interface YapiPostV1PerpetualPlanOrdersStrategyUpdateApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1PerpetualPlanOrdersStrategyUpdateData
}
export interface YapiPostV1PerpetualPlanOrdersStrategyUpdateData {
  /**
   * 计划委托策略单ID
   */
  id: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前委托-计划委托-(止盈止损详情修改触发价格触发价格类型)↗](https://yapi.nbttfc365.com/project/44/interface/api/4095)
// **/
// export const postV1PerpetualPlanOrdersStrategyUpdateApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPlanOrdersStrategyUpdateApiRequest,
//   YapiPostV1PerpetualPlanOrdersStrategyUpdateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/plan/orders/strategy/update",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
