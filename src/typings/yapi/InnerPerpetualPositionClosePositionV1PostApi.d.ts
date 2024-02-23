/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [平仓（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4307) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/closePosition`
 * @更新时间 `2023-02-22 18:31:58`
 */
export interface YapiPostInnerV1PerpetualPositionClosePositionApiRequest {
  id: number
  businessId: number
  uid: number
  /**
   * 交易币对ID
   */
  tradeId: number
  /**
   * 合约组id
   */
  groupId: number
  /**
   * 交易币对
   */
  symbol: string
  /**
   * 基础货币id
   */
  baseCoinId: number
  /**
   * 计价货币id
   */
  quoteCoinId: string
  /**
   * long: 多仓位 short:空仓位
   */
  sideInd: string
  /**
   * 平仓均价
   */
  closePrice: number
  /**
   * 仓位合约张数
   */
  size: number
  /**
   * 维持保证金率
   */
  maintMarginRatio: number
  /**
   * 杠杆倍数
   */
  lever: number
  /**
   * opened:已开仓, closed: 已关闭，locked:锁仓中
   */
  statusCd: string
  /**
   * 创建时间
   */
  createdByTime: number
  /**
   * 已实现盈亏
   */
  realizedProfit: number
  /**
   * 平仓手续费
   */
  closeOrderFee: number
  /**
   * 强平手续费
   */
  liquidateFee: number
  /**
   * 爆仓手续费
   */
  explosionFee: number
  /**
   * 订单id
   */
  orderId: number
  /**
   * 接管账号uid
   */
  acceptUid: number
  /**
   * 接管账号groupId
   */
  acceptGroupId: string
}

/**
 * 接口 [平仓（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4307) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/closePosition`
 * @更新时间 `2023-02-22 18:31:58`
 */
export interface YapiPostInnerV1PerpetualPositionClosePositionApiResponse {
  isSuccess: boolean
  /**
   * 失败原因
   */
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [平仓（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4307)
// **/
// export const postInnerV1PerpetualPositionClosePositionApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualPositionClosePositionApiRequest,
//   YapiPostInnerV1PerpetualPositionClosePositionApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/position/closePosition",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
