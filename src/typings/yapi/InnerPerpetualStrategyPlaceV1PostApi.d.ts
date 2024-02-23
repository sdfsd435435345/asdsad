/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新增止盈止损，仓位止盈止损_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4103) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /inner/v1/perpetual/strategy/place`
 * @更新时间 `2023-01-28 11:32:56`
 */
export type YapiPostInnerV1PerpetualStrategyPlaceApiRequest = YapiPostInnerV1PerpetualStrategyPlaceApiRequestList[]

export interface YapiPostInnerV1PerpetualStrategyPlaceApiRequestList {
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerPriceTypeInd: string
  /**
   * 方向 close_long 平多 , close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 委托数量
   */
  size: number
  /**
   * 合约组ID
   */
  groupId: number
  groupName: string
  /**
   * 交易对id
   */
  tradeId: number
  symbol: string
  /**
   * 仓位id
   */
  positionId: number
  /**
   * 触发方向（up=向上，down=向下） 向上 和 向下 这个方向是由前端开发人员
   */
  triggerDirectionInd: string
  /**
   * 策略类型 stop_profit 止盈 stop_loss 止损
   */
  strategyTypeInd: string
  /**
   * 委托价格
   */
  price: number
  /**
   * 商户ID
   */
  businessId: number
  /**
   * 用户ID
   */
  uid: number
  /**
   * 源订单id    --> 订单表id    ,如果是仓位止盈止损, 则等于 0
   */
  sourceId: string
  /**
   * 操作类型 part 分批 , position 仓位
   */
  strategyOperationType: string
  lever: number
}

/**
 * 接口 [新增止盈止损，仓位止盈止损_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4103) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /inner/v1/perpetual/strategy/place`
 * @更新时间 `2023-01-28 11:32:56`
 */
export interface YapiPostInnerV1PerpetualStrategyPlaceApiResponse {
  code?: number
  msg?: string
  data?: YapiPostInnerV1PerpetualStrategyPlaceData
}
export interface YapiPostInnerV1PerpetualStrategyPlaceData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [新增止盈止损，仓位止盈止损_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4103)
// **/
// export const postInnerV1PerpetualStrategyPlaceApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualStrategyPlaceApiRequest,
//   YapiPostInnerV1PerpetualStrategyPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/strategy/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
