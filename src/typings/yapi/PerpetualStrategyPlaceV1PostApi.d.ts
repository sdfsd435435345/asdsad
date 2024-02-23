/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新增止盈止损，仓位止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/3651) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/strategy/place`
 * @更新时间 `2023-11-01 10:28:32`
 */
export interface YapiPostV1PerpetualStrategyPlaceApiRequest {
  stopProfit: YapiPostV1PerpetualStrategyPlaceApiRequestStopProfit
  /**
   * 止损对象 与止盈一致
   */
  stopLoss: {}
  /**
   * 交易对
   */
  tradeId: string
  /**
   *  part 分批 , position 仓位
   */
  strategyOperationType: string
  /**
   * 优惠券信息
   */
  coupons: YapiPostV1PerpetualStrategyPlaceApiRequestListCoupons[]
}
/**
 * 止盈对象
 */
export interface YapiPostV1PerpetualStrategyPlaceApiRequestStopProfit {
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd: string
  /**
   * 合约组
   */
  groupId: string
  /**
   * 仓位
   */
  positionId: string
  /**
   * 价格
   */
  price: string
  /**
   * 数量
   */
  size: string
  /**
   * 策略类型 stop_profit 止盈 stop_loss 止损
   */
  strategyTypeInd: string
  /**
   * 触发方向（up=向上，down=向下）
   */
  triggerDirectionInd: string
  /**
   * 触发价格
   */
  triggerPrice: string
  /**
   * 触发方式（mark 标记，new 最新）
   */
  triggerPriceTypeInd: string
  /**
   * close_long 平多 ， close_short 平空
   */
  triggerSideInd: string
  /**
   * 交易对
   */
  tradeId: string
  /**
   *  part 分批 , position 仓位
   */
  strategyOperationType: string
}
export interface YapiPostV1PerpetualStrategyPlaceApiRequestListCoupons {
  couponId: string
  couponType: string
  couponCode: string
}

/**
 * 接口 [新增止盈止损，仓位止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/3651) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/strategy/place`
 * @更新时间 `2023-11-01 10:28:32`
 */
export interface YapiPostV1PerpetualStrategyPlaceApiResponse {
  code?: number
  message?: string
  /**
   * success
   */
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [新增止盈止损，仓位止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/3651)
// **/
// export const postV1PerpetualStrategyPlaceApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualStrategyPlaceApiRequest,
//   YapiPostV1PerpetualStrategyPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/strategy/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
