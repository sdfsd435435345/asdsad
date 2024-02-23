/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [取消止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/3655) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/strategy/cancel`
 * @更新时间 `2023-02-16 14:23:02`
 */
export interface YapiPostV1PerpetualStrategyCancelApiRequest {
  /**
   * 止盈止损策略表ID
   */
  id: number
}

/**
 * 接口 [取消止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/3655) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/strategy/cancel`
 * @更新时间 `2023-02-16 14:23:02`
 */
export interface YapiPostV1PerpetualStrategyCancelApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1PerpetualStrategyCancelData
}
export interface YapiPostV1PerpetualStrategyCancelData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [取消止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/3655)
// **/
// export const postV1PerpetualStrategyCancelApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualStrategyCancelApiRequest,
//   YapiPostV1PerpetualStrategyCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/strategy/cancel",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
