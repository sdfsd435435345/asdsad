/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据sourceid查询止盈止损_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4079) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/v1/perpetual/strategy/detailBySourceOrderId`
 * @更新时间 `2023-01-12 16:54:42`
 */
export interface YapiGetInnerV1PerpetualStrategyDetailBySourceOrderIdApiRequest {
  /**
   * 订单ID
   */
  sourceOrderId: string
}

/**
 * 接口 [根据sourceid查询止盈止损_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4079) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/v1/perpetual/strategy/detailBySourceOrderId`
 * @更新时间 `2023-01-12 16:54:42`
 */
export type YapiGetInnerV1PerpetualStrategyDetailBySourceOrderIdApiResponse =
  YapiGetInnerV1PerpetualStrategyDetailBySourceOrderIdList[]

export interface YapiGetInnerV1PerpetualStrategyDetailBySourceOrderIdList {
  id: number
  triggerDirectionInd: string
  strategyTypeInd: string
  triggerPrice: string
  entrustTypeInd: string
  triggerPriceTypeInd: string
  statusCd: string
  price: string
  size: string
  refOrderId: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据sourceid查询止盈止损_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4079)
// **/
// export const getInnerV1PerpetualStrategyDetailBySourceOrderIdApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualStrategyDetailBySourceOrderIdApiRequest,
//   YapiGetInnerV1PerpetualStrategyDetailBySourceOrderIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/strategy/detailBySourceOrderId",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
