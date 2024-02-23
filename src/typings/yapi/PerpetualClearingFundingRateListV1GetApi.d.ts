/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资金费用列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4327) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/clearing/fundingRate/list`
 * @更新时间 `2023-04-07 10:13:39`
 */
export interface YapiGetV1PerpetualClearingFundingRateListApiRequest {
  /**
   * 开视页
   */
  pageNum?: string
  /**
   * 每页数量，默认20
   */
  pageSize?: string
  /**
   * day:一天内 ，week：一周内，months：一月内，three_months：三个月内
   */
  timeRange?: string
  /**
   * 开始时间戳
   */
  startTime?: string
  /**
   * 结束时间戳
   */
  endTime?: string
}

/**
 * 接口 [资金费用列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4327) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/clearing/fundingRate/list`
 * @更新时间 `2023-04-07 10:13:39`
 */
export interface YapiGetV1PerpetualClearingFundingRateListApiResponse {
  code?: number
  data?: YapiGetV1PerpetualClearingFundingRateData
  isSendMsg?: boolean
  success?: boolean
}
export interface YapiGetV1PerpetualClearingFundingRateData {
  list?: YapiGetV1PerpetualClearingFundingRateListData[]
  pageNum?: number
  pageSize?: number
  total?: number
}
export interface YapiGetV1PerpetualClearingFundingRateListData {
  /**
   * 结算金额
   */
  amount?: number
  /**
   * 商户id
   */
  businessId?: number
  /**
   * 资金费用
   */
  fundingRate?: number
  /**
   * 合约类型:delivery交割,perpetual永续
   */
  field_5?: string
  /**
   * 合约组id
   */
  groupId?: number
  /**
   * 仓位id
   */
  positionId?: number
  /**
   * 计算时价格
   */
  price?: number
  /**
   * 结算数量
   */
  size?: number
  /**
   * 交易对
   */
  symbol?: string
  /**
   * 交易对id
   */
  tradeId?: number
  uid?: number
  /**
   * 资金费率id，通过id查询详情
   */
  id?: string
  /**
   * 基础货币名称
   */
  baseSymbolName?: string
  /**
   * 计价货币名称
   */
  quoteSymbolName?: string
  /**
   * 创建时间时间戳
   */
  createdByTime?: number
  /**
   * 合约类型：delivery 交割 ，perpetual 永续
   */
  contractType?: string
  /**
   * 时间戳Long类型
   */
  createdByTimeLong?: number
  /**
   * 完成时间时间戳
   */
  finishedByTimeLong?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资金费用列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4327)
// **/
// export const getV1PerpetualClearingFundingRateListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualClearingFundingRateListApiRequest,
//   YapiGetV1PerpetualClearingFundingRateListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/clearing/fundingRate/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
