/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [订单查询_财务记录_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3583) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /inner/v1/orders/statement/{businessId}/{uid}/{id}`
 * @更新时间 `2022-11-25 14:04:44`
 */
export interface YapiGetInnerV1OrdersStatementBusinessIdUidIdApiRequest {
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
 * 接口 [订单查询_财务记录_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3583) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /inner/v1/orders/statement/{businessId}/{uid}/{id}`
 * @更新时间 `2022-11-25 14:04:44`
 */
export interface YapiGetInnerV1OrdersStatementBusinessIdUidIdApiResponse {
  /**
   * 200 成功
   */
  code?: number
  /**
   * "success"
   */
  message?: string
  data?: YapiGetInnerV1OrdersStatementBusinessIdUidIdData
}
/**
 * 订单信息
 */
export interface YapiGetInnerV1OrdersStatementBusinessIdUidIdData {
  /**
   * 订单id
   */
  id?: number
  /**
   * 交易对id
   */
  tradeId?: number
  /**
   * 计价币
   */
  buyCoinShortName?: string
  /**
   * 标的币
   */
  sellCoinShortName?: string
  /**
   * 币对
   */
  symbol?: string
  /**
   * 委单方向 1买单 2卖单
   */
  side?: number
  /**
   * 撮合类型 1限价 2市价
   */
  orderType?: number
  /**
   * 手续费
   */
  fees?: number
  /**
   * 成交量
   */
  successCount?: number
  /**
   * 创建时间 时间戳
   */
  createdByTime?: number
  /**
   * 完成时间 时间戳
   */
  finishByTime?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [订单查询_财务记录_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3583)
// **/
// export const getInnerV1OrdersStatementBusinessIdUidIdApiRequest: MarkcoinRequest<
//   YapiGetInnerV1OrdersStatementBusinessIdUidIdApiRequest,
//   YapiGetInnerV1OrdersStatementBusinessIdUidIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/orders/statement/{businessId}/{uid}/{id}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
