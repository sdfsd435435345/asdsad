/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新建计划委托单(作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/3647) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/contract/plan/order`
 * @更新时间 `2022-12-30 10:13:19`
 */
export interface YapiPostV1ContractPlanOrderApiRequest {
  /**
   * 合约组id
   */
  groupId?: number
  /**
   * 交易对id
   */
  tradeId: number
  /**
   * 触发价格类型（mark 标记，new 最新）
   */
  triggerPriceTypeInd: string
  /**
   * 撮合价格类型（mark 标记，new 最新）
   */
  matchPriceTypeInd: string
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 方向类型 open_long 开多 , open_short 开空 ,close_long 平多, close_short 平空
   */
  sideInd: string
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 委托价格
   */
  price?: number
  /**
   * 委托数量
   */
  size: number
  /**
   * 额外保证金
   */
  assetsMargin?: number
  /**
   * 杠杆倍数
   */
  lever: number
  /**
   * 是否为只减仓    yes 是 no 否
   */
  isLightenUp: string
  /**
   * 是否自动追加保证金 yes 是 no 否
   */
  isAutoAdd: string
  strategy?: YapiPostV1ContractPlanOrderApiRequestStrategy
}
/**
 * 止盈止损
 */
export interface YapiPostV1ContractPlanOrderApiRequestStrategy {
  stopProfit: YapiPostV1ContractPlanOrderApiRequestStopProfitStrategy
  stopLoss: YapiPostV1ContractPlanOrderApiRequestStopLossStrategy
}
/**
 * 止盈
 */
export interface YapiPostV1ContractPlanOrderApiRequestStopProfitStrategy {
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerTypeInd: string
  /**
   * 方向 close_long 平多 , close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 委托价格
   */
  price?: number
  /**
   * 委托数量
   */
  size: number
}
/**
 * 止损
 */
export interface YapiPostV1ContractPlanOrderApiRequestStopLossStrategy {
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerTypeInd: string
  /**
   * 方向 close_long 平多 , close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 委托价格
   */
  price?: number
  /**
   * 委托数量
   */
  size: number
}

/**
 * 接口 [新建计划委托单(作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/3647) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/contract/plan/order`
 * @更新时间 `2022-12-30 10:13:19`
 */
export interface YapiPostV1ContractPlanOrderApiResponse {
  code?: number
  msg?: string
  data?: YapiPostV1ContractPlanOrderData
}
export interface YapiPostV1ContractPlanOrderData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [新建计划委托单(作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/3647)
// **/
// export const postV1ContractPlanOrderApiRequest: MarkcoinRequest<
//   YapiPostV1ContractPlanOrderApiRequest,
//   YapiPostV1ContractPlanOrderApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/contract/plan/order",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
