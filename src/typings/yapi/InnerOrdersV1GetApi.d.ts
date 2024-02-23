/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [订单查询_非分页_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3571) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /inner/v1/orders`
 * @更新时间 `2022-12-01 16:50:41`
 */
export interface YapiGetInnerV1OrdersApiRequest {
  /**
   * 用户id
   */
  uid: string
  /**
   * 商户id
   */
  businessId: string
  /**
   * 交易对id
   */
  tradeId?: string
  /**
   * 时间戳过滤条件 小于timestamp的数据
   */
  timestamp?: string
  /**
   * 最大支持1000
   */
  limit?: string
  /**
   * 订单状态 可传多个值  3-完全成交 4 手动撤销  5-系统撤销  6-部成已撤（部分成交已撤销）多个状态值用逗号分隔
   */
  status?: string
}

/**
 * 接口 [订单查询_非分页_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3571) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /inner/v1/orders`
 * @更新时间 `2022-12-01 16:50:41`
 */
export interface YapiGetInnerV1OrdersApiResponse {
  code?: number
  message?: string
  time?: number
  /**
   * 数据
   */
  data?: YapiGetInnerV1OrdersListData[]
  isSendMsg?: boolean
  success?: boolean
}
export interface YapiGetInnerV1OrdersListData {
  /**
   * 成交均价
   */
  averagePrice?: string
  /**
   * 计价币
   */
  buyCoinShortName?: string
  /**
   * 创建时间 13位毫秒值
   */
  createdByTime?: number
  /**
   * 委托数量
   */
  placeCount?: string
  /**
   * 委托价格
   */
  placePrice?: string
  /**
   * 手续费
   */
  fees?: string
  /**
   * 订单id string
   */
  id?: string
  /**
   * 1限价 2市价
   */
  orderType?: number
  /**
   * 市价单时，下单单位 amount按数量；funds按金额
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
   *  1买单 2卖单
   */
  side?: number
  /**
   * 用户id
   */
  uid?: number
  /**
   * 更新时间 13位毫秒值
   */
  updatedByTime?: string
  /**
   * 源id
   */
  sourceId?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [订单查询_非分页_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3571)
// **/
// export const getInnerV1OrdersApiRequest: MarkcoinRequest<
//   YapiGetInnerV1OrdersApiRequest,
//   YapiGetInnerV1OrdersApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/orders",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
