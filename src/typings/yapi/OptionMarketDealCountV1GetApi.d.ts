/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [k线下单统计↗](https://yapi.nbttfc365.com/project/44/interface/api/15119) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/market/dealCount`
 * @更新时间 `2023-10-11 10:21:45`
 */
export interface YapiGetV1OptionMarketDealCountApiRequest {
  /**
   * k线类型 枚举;
   *  s->秒；m -> 分钟
   * 1s
   * 1m
   * 5m
   * 15m
   */
  interval: string
  /**
   * 期权id
   */
  optionId: string
  /**
   * K线记录数
   */
  limit: string
  /**
   * 结束时间
   */
  endTime?: string
}

/**
 * 接口 [k线下单统计↗](https://yapi.nbttfc365.com/project/44/interface/api/15119) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/market/dealCount`
 * @更新时间 `2023-10-11 10:21:45`
 */
export interface YapiGetV1OptionMarketDealCountApiResponse {
  /**
   * 200-成功
   */
  code: number
  /**
   * 描述
   */
  message: string
  data: YapiGetV1OptionMarketDealCountListData[]
}
export interface YapiGetV1OptionMarketDealCountListData {
  /**
   * 下单金额
   */
  amount: string
  /**
   * K线时间戳
   */
  ts: number
  /**
   * 金额单位 USDT
   */
  currency: string
  /**
   * 方向：call 涨，put 跌,over_call 涨超，over_put 跌超
   */
  sideInd: string
  /**
   * 盈亏金额：负-亏，正-盈，0
   */
  realizedProfit: string
  /**
   * 下单时间戳 （1sK线才有）
   */
  createdByTime?: number
  /**
   * 结算周期，单位秒（1sK线才有）
   */
  period?: string
  /**
   * 买超的价差（1sK线才有）
   */
  amplitude?: string
  /**
   * 状态：processing-处理中,revoke-已撤销,complete-已完成, fail-下单失败（1sK线才有）
   */
  statusCd?: string
  /**
   * 订单ID （1sK线才有）
   */
  orderId?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [k线下单统计↗](https://yapi.nbttfc365.com/project/44/interface/api/15119)
// **/
// export const getV1OptionMarketDealCountApiRequest: MarkcoinRequest<
//   YapiGetV1OptionMarketDealCountApiRequest,
//   YapiGetV1OptionMarketDealCountApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/market/dealCount",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
