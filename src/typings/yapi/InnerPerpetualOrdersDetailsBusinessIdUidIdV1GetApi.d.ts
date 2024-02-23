/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [普通委托详情_内部↗](https://yapi.nbttfc365.com/project/44/interface/api/4435) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/v1/perpetual/orders/details/{businessId}/{uid}/{id}`
 * @更新时间 `2023-02-07 14:27:07`
 */
export interface YapiGetInnerV1PerpetualOrdersDetailsBusinessIdUidIdApiRequest {
  businessId: string
  uid: string
  id: string
}

/**
 * 接口 [普通委托详情_内部↗](https://yapi.nbttfc365.com/project/44/interface/api/4435) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /inner/v1/perpetual/orders/details/{businessId}/{uid}/{id}`
 * @更新时间 `2023-02-07 14:27:07`
 */
export interface YapiGetInnerV1PerpetualOrdersDetailsBusinessIdUidIdApiResponse {
  code?: number
  message?: string
  data?: YapiGetInnerV1PerpetualOrdersDetailsBusinessIdUidIdListData[]
}
export interface YapiGetInnerV1PerpetualOrdersDetailsBusinessIdUidIdListData {
  /**
   * 下单选择的币种是标的币还是计价币；如果是标的币传BASE，如果是计价币传QUOTE
   */
  placeUnit?: string
  /**
   * 市价单下单单位 amount 按金额 quantity 按数量
   */
  marketUnit?: string
  /**
   * 标的币symbol
   */
  baseCoinShortName?: string
  /**
   * 计价币symbol
   */
  quoteCoinShortName?: string
  /**
   * 完成度
   */
  completeness?: string
  /**
   * 方向 open_long 开多 , open_short 开空 ,close_long 平多, close_short 平空
   */
  sideInd?: string
  /**
   * 成交数量
   */
  tradeSize?: string
  /**
   * 杠杆倍数
   */
  lever?: number
  /**
   * 委托数量
   */
  size?: string
  /**
   * 成交均价
   */
  tradePrice?: string
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd?: string
  /**
   * 交易对名称
   */
  symbol?: string
  /**
   * 状态 revoke 已撤销 revoke_sys 系统撤销，unsold 未成交 partially 部分成交 deal_done 完全成交  partial_deal_canceled部分成交,已撤销 ;
   */
  statusCd?: string
  /**
   * 已实现盈亏
   */
  realizedProfit?: string
  /**
   * 合约交易对ID
   */
  tradeId?: number
  /**
   * 创建时间 13位毫秒值
   */
  createdByTime?: string
  /**
   * 合约组ID
   */
  groupId?: string
  /**
   * 订单类型   limit_order 限价委托单  market_order 市价委托单 forced_liquidation_order 强平委托单 forced_lighten_order 强减委托单
   */
  typeInd?: string
  /**
   * 委托价格
   */
  price?: string
  /**
   * 手续费
   */
  fees?: string
  /**
   * 合约组名称
   */
  groupName?: string
  /**
   * 订单ID
   */
  id?: string
  /**
   * 强平单时：强平清算费用
   */
  liquidationFees?: string
  /**
   * 强平单时：强平返还
   */
  liquidationRemainMargin?: string
  /**
   * 保证金
   */
  margin?: string
  /**
   * 强平单时：合约组保证金扣款
   */
  liquidationDeductMargin?: string
  /**
   * 更新时间 13位毫秒值
   */
  updatedByTime?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [普通委托详情_内部↗](https://yapi.nbttfc365.com/project/44/interface/api/4435)
// **/
// export const getInnerV1PerpetualOrdersDetailsBusinessIdUidIdApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualOrdersDetailsBusinessIdUidIdApiRequest,
//   YapiGetInnerV1PerpetualOrdersDetailsBusinessIdUidIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/orders/details/{businessId}/{uid}/{id}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
