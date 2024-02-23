/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [订单查询_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2876) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /inner/v1/orders/details/{businessId}/{uid}/{id}`
 * @更新时间 `2022-11-02 14:31:57`
 */
export interface YapiGetInnerV1OrdersDetailsBusinessIdUidIdApiRequest {
  /**
   * 商户id
   */
  businessId: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 订单id
   */
  id: string
}

/**
 * 接口 [订单查询_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2876) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /inner/v1/orders/details/{businessId}/{uid}/{id}`
 * @更新时间 `2022-11-02 14:31:57`
 */
export interface YapiGetInnerV1OrdersDetailsBusinessIdUidIdApiResponse {
  /**
   * 返回状态码
   */
  code?: number
  /**
   * 返回信息说明
   */
  message?: string
  data?: YapiGetInnerV1OrdersDetailsBusinessIdUidIdData
}
/**
 * 订单信息
 */
export interface YapiGetInnerV1OrdersDetailsBusinessIdUidIdData {
  /**
   * 成交均价
   */
  averagePrice?: string
  /**
   * 计价币
   */
  buyCoinShortName?: string
  /**
   * 创建时间 yyyy-mm-dd hh:MM:ss
   */
  createdByTime?: string
  /**
   * 委托数量 市价单时，单位根据markUnit来判断
   */
  entrustCount?: string
  /**
   * 委托价格
   */
  entrustPrice?: string
  /**
   * 手续费
   */
  fees?: string
  /**
   * 订单id
   */
  id?: number
  /**
   * 1限价 2市价
   */
  orderType?: number
  /**
   * 市价单时，下单单位；amount按数量，funds按金额
   */
  marketUnit?: string
  /**
   * 标的币
   */
  sellCoinShortName?: string
  /**
   * 1-未成交 2部分成交 3-完全成交 4 手动撤销  5-系统撤销  6-部成已撤（部分成交已撤销）
   */
  status?: number
  /**
   * 成交数量
   */
  successCount?: string
  /**
   * 币对
   */
  symbol?: string
  /**
   * 成交额
   */
  totalAmount?: string
  /**
   * 币对id
   */
  tradeId?: number
  /**
   * 成交明细
   */
  transactionLogs?: YapiGetInnerV1OrdersDetailsBusinessIdUidIdListTransactionLogsData[]
  /**
   *  1买单 2卖单
   */
  side?: number
  /**
   * 用户id
   */
  uid?: number
  /**
   * 更新时间 yyyy-mm-dd hh:MM:ss
   */
  updatedByTime?: string
  /**
   * 完成度
   */
  completeness: string
}
export interface YapiGetInnerV1OrdersDetailsBusinessIdUidIdListTransactionLogsData {
  /**
   * 数量
   */
  count?: string
  /**
   * 创建时间
   */
  createdByTime?: string
  /**
   * 手续费
   */
  fees?: string
  /**
   * 价格
   */
  price?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [订单查询_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2876)
// **/
// export const getInnerV1OrdersDetailsBusinessIdUidIdApiRequest: MarkcoinRequest<
//   YapiGetInnerV1OrdersDetailsBusinessIdUidIdApiRequest,
//   YapiGetInnerV1OrdersDetailsBusinessIdUidIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/orders/details/{businessId}/{uid}/{id}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
