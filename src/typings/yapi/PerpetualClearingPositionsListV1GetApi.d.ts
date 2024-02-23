/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询当前仓位列表(已废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3883) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/clearing/positions/list`
 * @更新时间 `2023-09-12 15:20:50`
 */
export interface YapiGetV1PerpetualClearingPositionsListApiRequest {
  /**
   * 合约组id
   */
  groupId?: string
  /**
   * 交易对
   */
  symbol?: string
  /**
   * 第几页
   */
  pageNum?: string
  /**
   * 每页数量
   */
  pageSize?: string
}

/**
 * 接口 [查询当前仓位列表(已废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3883) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/clearing/positions/list`
 * @更新时间 `2023-09-12 15:20:50`
 */
export interface YapiGetV1PerpetualClearingPositionsListApiResponse {
  code?: string
  data?: YapiGetV1PerpetualClearingPositionsData
  message?: string
}
export interface YapiGetV1PerpetualClearingPositionsData {
  list?: YapiGetV1PerpetualClearingPositionsListData[]
  pageNum?: number
  pageSize?: number
  total?: number
}
export interface YapiGetV1PerpetualClearingPositionsListData {
  /**
   * 商户id
   */
  businessId?: number
  /**
   * 合约组id
   */
  groupId?: number
  /**
   * 仓位id
   */
  id?: number
  /**
   * 杠杆倍数
   */
  lever?: number
  /**
   * 锁仓手续费总额
   */
  lockFees?: number
  /**
   * 冻结数量，平仓时使用
   */
  lockSize?: number
  /**
   * 维持保证金率
   */
  maintMarginRatio?: number
  /**
   * 开仓均价
   */
  openPrice?: number
  /**
   * 已实现盈亏
   */
  realizedProfit?: number
  /**
   * 仓位方向，long: 多仓位 short:空仓位
   */
  sideInd?: string
  /**
   * 合约仓位张数
   */
  size?: number
  /**
   * opened:已开仓, closed: 已关闭，locked:锁仓中
   */
  statusCd?: string
  /**
   * 交易对
   */
  symbol?: string
  /**
   * 交易对id
   */
  tradeId?: number
  /**
   * 基础货币id
   */
  base_coin_id?: number
  /**
   * 计价货币id
   */
  quote_coin_id?: string
  /**
   * 用户uid
   */
  uid?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询当前仓位列表(已废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3883)
// **/
// export const getV1PerpetualClearingPositionsListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualClearingPositionsListApiRequest,
//   YapiGetV1PerpetualClearingPositionsListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/clearing/positions/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
