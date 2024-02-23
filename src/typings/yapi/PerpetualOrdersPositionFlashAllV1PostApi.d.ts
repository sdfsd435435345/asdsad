/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [闪电平仓↗](https://yapi.nbttfc365.com/project/44/interface/api/4187) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/orders/position/flashAll`
 * @更新时间 `2023-02-02 14:00:38`
 */
export interface YapiPostV1PerpetualOrdersPositionFlashAllApiRequest {
  flashOrders: YapiPostV1PerpetualOrdersPositionFlashAllApiRequestListFlashOrders[]
}
export interface YapiPostV1PerpetualOrdersPositionFlashAllApiRequestListFlashOrders {
  /**
   * 合约组ID
   */
  groupId: number
  /**
   * 仓位ID
   */
  positionId: number
  /**
   * open_long open_short
   */
  sideInd: number
  /**
   * 交易对ID
   */
  tradeId: number
  /**
   * 平仓数量
   */
  size: number
}

/**
 * 接口 [闪电平仓↗](https://yapi.nbttfc365.com/project/44/interface/api/4187) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/orders/position/flashAll`
 * @更新时间 `2023-02-02 14:00:38`
 */
export interface YapiPostV1PerpetualOrdersPositionFlashAllApiResponse {
  /**
   * 平仓单下单结果集
   */
  data?: YapiPostV1PerpetualOrdersPositionFlashAllListData[]
  /**
   * 接口调用情况code值 200成功 其他code值失败
   */
  code?: number
  /**
   * 消息描述
   */
  message?: string
}
export interface YapiPostV1PerpetualOrdersPositionFlashAllListData {
  /**
   * 下单情况 code值 成功:200  , 其他code值为下单失败原因对应的code
   */
  code: number
  /**
   * 下单成功:success ，下单失败： 其他错误描述
   */
  message: string
  /**
   * 平仓的positionId
   */
  sourceId: string
  /**
   * 生成的平仓单订单id string
   */
  orderId: string
  /**
   * true 下单成功 false 下单失败
   */
  success: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [闪电平仓↗](https://yapi.nbttfc365.com/project/44/interface/api/4187)
// **/
// export const postV1PerpetualOrdersPositionFlashAllApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualOrdersPositionFlashAllApiRequest,
//   YapiPostV1PerpetualOrdersPositionFlashAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/orders/position/flashAll",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
