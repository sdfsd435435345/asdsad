/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [开仓（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4303) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/openPosition`
 * @更新时间 `2023-03-10 15:55:32`
 */
export interface YapiPostInnerV1PerpetualPositionOpenPositionApiRequest {
  id: number
  businessId: number
  uid: number
  /**
   * 交易对id
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
  quoteCoinId: number
  /**
   * long: 多仓位 short:空仓位
   */
  sideInd: string
  /**
   * 开仓均价
   */
  openPrice: number
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
   * 手续费
   */
  fee: number
  /**
   * 解冻的初始保证金
   */
  unfreezeInitMargin: number
  /**
   * 订单id
   */
  orderId: number
  /**
   * 订单开仓完成
   */
  openCompleted: boolean
}

/**
 * 接口 [开仓（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4303) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/openPosition`
 * @更新时间 `2023-03-10 15:55:32`
 */
export interface YapiPostInnerV1PerpetualPositionOpenPositionApiResponse {
  isSuccess: boolean
  /**
   * 失败原因
   */
  reason: string
  /**
   * 仓位id(Long那些)
   */
  positionId: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [开仓（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4303)
// **/
// export const postInnerV1PerpetualPositionOpenPositionApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualPositionOpenPositionApiRequest,
//   YapiPostInnerV1PerpetualPositionOpenPositionApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/position/openPosition",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
