/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [订单查询_财务记录_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4203) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/v1/perpetual/orders/statement/{businessId}/{uid}/{id}`
 * @更新时间 `2023-01-12 15:11:20`
 */
export interface YapiGetInnerV1PerpetualOrdersStatementBusinessIdUidIdApiRequest {
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
 * 接口 [订单查询_财务记录_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4203) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/v1/perpetual/orders/statement/{businessId}/{uid}/{id}`
 * @更新时间 `2023-01-12 15:11:20`
 */
export interface YapiGetInnerV1PerpetualOrdersStatementBusinessIdUidIdApiResponse {
  /**
   * 200 成功
   */
  code?: number
  /**
   * "success"
   */
  message?: string
  data?: YapiGetInnerV1PerpetualOrdersStatementBusinessIdUidIdData
}
/**
 * 订单信息
 */
export interface YapiGetInnerV1PerpetualOrdersStatementBusinessIdUidIdData {
  /**
   * 订单id
   */
  id?: number
  /**
   * 合约组ID
   */
  groupId: number
  /**
   * 合约组名称
   */
  groupName: string
  /**
   * 方向 open_long 开多 , open_short 开空 ,close_long 平多, close_short 平空
   */
  sideInd?: number
  /**
   * 订单类型  limit_order 限价委托单  market_order 市价委托单 forced_liquidation_order 强平委托单 forced_lighten_order 强减委托单
   */
  typeInd: string
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd: string
  /**
   * 订单来源分类：normal 普通委托 plan 计划委托触发 stop_profit止盈触发 stop_loss 止损触 force 强平强减
   */
  sourceType: string
  /**
   * 计价币
   */
  quoteCoinShortName?: string
  /**
   * 标的币
   */
  baseCoinShortName?: string
  /**
   * 币对
   */
  symbol?: string
  /**
   * 下单选择的币种是标的币还是计价币；如果是标的币传BASE，如果是计价币传QUOTE
   */
  placeUnit?: number
  /**
   * 委托价格
   */
  price?: string
  /**
   * 委托数量
   */
  size?: string
  /**
   * 成交均价
   */
  tradePrice?: string
  /**
   * 成交数量
   */
  tradeSize?: string
  /**
   * 杠杆倍数
   */
  lever?: number
  /**
   * 委托时间 13位毫秒值
   */
  createdByTime: string
  /**
   * 完成时间 13位毫秒值
   */
  updateByTime: string
  /**
   * 状态 revoke 已撤销 revoke_sys 系统撤销，unsold 未成交 partially 部分成交 deal_done 完全成交  partial_deal_canceled部分成交,已撤销 ;
   */
  statusCd: string
  /**
   * 已实现盈亏
   */
  realizedProfit: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [订单查询_财务记录_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4203)
// **/
// export const getInnerV1PerpetualOrdersStatementBusinessIdUidIdApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualOrdersStatementBusinessIdUidIdApiRequest,
//   YapiGetInnerV1PerpetualOrdersStatementBusinessIdUidIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/orders/statement/{businessId}/{uid}/{id}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
