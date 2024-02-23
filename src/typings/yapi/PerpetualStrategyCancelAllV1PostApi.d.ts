/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [全部撤销_止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/3935) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/strategy/cancelAll`
 * @更新时间 `2023-02-16 14:25:28`
 */
export interface YapiPostV1PerpetualStrategyCancelAllApiRequest {
  /**
   * 币对
   */
  tradeId?: number
  /**
   * 合约组
   */
  groupId?: number
  /**
   * 订单类型    limit 限价  market_市价
   */
  entrustTypeInd?: string
  /**
   * 仓位
   */
  positionId?: number
}

/**
 * 接口 [全部撤销_止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/3935) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/strategy/cancelAll`
 * @更新时间 `2023-02-16 14:25:28`
 */
export interface YapiPostV1PerpetualStrategyCancelAllApiResponse {
  /**
   * 返回状态码200为成功，其他code值为失败
   */
  code?: number
  /**
   * 返回信息说明 success
   */
  message?: string
  /**
   * success
   */
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [全部撤销_止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/3935)
// **/
// export const postV1PerpetualStrategyCancelAllApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualStrategyCancelAllApiRequest,
//   YapiPostV1PerpetualStrategyCancelAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/strategy/cancelAll",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
