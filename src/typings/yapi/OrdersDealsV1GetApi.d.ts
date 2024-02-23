/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [我的成交↗](https://yapi.nbttfc365.com/project/44/interface/api/3482) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/orders/deals`
 * @更新时间 `2022-11-18 12:05:01`
 */
export interface YapiGetV1OrdersDealsApiRequest {
  /**
   * 每次拉取的数量量 最小1 最大50
   */
  pullSize: string
  /**
   * 开始时间 13位毫秒值时间戳
   */
  beginDate: string
  /**
   * 结束时间 13位毫秒值时间戳
   */
  endDate: string
  /**
   * 偏移量 默认0 ,再次请求从上次请求返回结果中取值
   */
  offset: string
  /**
   * 交易对id
   */
  tradeId: string
}

/**
 * 接口 [我的成交↗](https://yapi.nbttfc365.com/project/44/interface/api/3482) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/orders/deals`
 * @更新时间 `2022-11-18 12:05:01`
 */
export interface YapiGetV1OrdersDealsApiResponse {
  /**
   * 返回状态码
   */
  code?: number
  /**
   * 返回信息说明
   */
  message?: string
  data: YapiGetV1OrdersDealsData
}
/**
 * 数据
 */
export interface YapiGetV1OrdersDealsData {
  /**
   * 本次请求结果的offset，也就是结果集最后一条数据的id
   */
  offset: string
  /**
   * 每次拉取的数量
   */
  pullSize: string
  /**
   * true 没有可拉取的数据了 false还有可以拉取的数据
   */
  end: boolean
  /**
   * 开始时间 13位毫秒值时间戳
   */
  beginDate: string
  /**
   * 结束时间 13位毫秒值时间戳
   */
  endDate: string
  /**
   * 成交记录详情
   */
  deals: YapiGetV1OrdersDealsListDealsData[]
}
export interface YapiGetV1OrdersDealsListDealsData {
  /**
   * id
   */
  id: string
  /**
   * 创建时间 13位毫秒值
   */
  createdByTime: string
  /**
   * 价格
   */
  price: string
  /**
   * 个数
   */
  count: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [我的成交↗](https://yapi.nbttfc365.com/project/44/interface/api/3482)
// **/
// export const getV1OrdersDealsApiRequest: MarkcoinRequest<
//   YapiGetV1OrdersDealsApiRequest,
//   YapiGetV1OrdersDealsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/orders/deals",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
