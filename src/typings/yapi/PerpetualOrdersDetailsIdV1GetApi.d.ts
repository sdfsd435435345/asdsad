/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史委托订单详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/3679) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/orders/details/{id}`
 * @更新时间 `2023-11-03 16:33:39`
 */
export interface YapiGetV1PerpetualOrdersDetailsIdApiRequest {
  /**
   * 订单id
   */
  id: string
}

/**
 * 接口 [历史委托订单详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/3679) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/orders/details/{id}`
 * @更新时间 `2023-11-03 16:33:39`
 */
export interface YapiGetV1PerpetualOrdersDetailsIdApiResponse {
  data?: YapiGetV1PerpetualOrdersDetailsIdData
  message?: string
  code?: number
}
export interface YapiGetV1PerpetualOrdersDetailsIdData {
  /**
   * 订单id
   */
  id?: string
  /**
   * 成交数量
   */
  tradeSize?: string
  /**
   * 成交均价
   */
  tradePrice?: string
  /**
   * 委托数量
   */
  size?: string
  /**
   * 委托价格
   */
  price?: string
  /**
   * 下单选择的币种是标的币还是计价币；如果是标的币传BASE，如果是计价币传QUOTE
   */
  placeUnit: string
  /**
   * 市价单下单单位 amount 按金额 quantity 按数量
   */
  marketUnit: string
  /**
   * 杠杆倍数
   */
  lever?: number
  /**
   * 交易对名称
   */
  symbol?: string
  /**
   * 交易对id
   */
  tradeId?: string
  /**
   * 方向 open_long 开多 , open_short 开空 ,close_long 平多, close_short 平空
   */
  sideInd?: string
  /**
   * 合约组id
   */
  groupName?: string
  /**
   * 合约组名称
   */
  groupId?: string
  /**
   * 订单类型   limit_order 限价委托单  market_order 市价委托单 forced_liquidation_order 强平委托单 forced_lighten_order 强减委托单
   */
  typeInd?: string
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd?: string
  /**
   * 保证金
   */
  margin?: string
  /**
   * 创建时间 13位毫秒值
   */
  createdByTime?: string
  /**
   * 更新时间 13位毫秒值
   */
  updatedByTime?: string
  /**
   * 状态 revoke 已撤销 revoke_sys 系统撤销，unsold 未成交 partially 部分成交 deal_done 完全成交  partial_deal_canceled部分成交,已撤销 ;
   */
  statusCd?: string
  /**
   * 手续费
   */
  fees?: string
  /**
   * 已实现盈亏
   */
  realizedProfit?: string
  /**
   * 强平单时：强平清算费用
   */
  liquidationFees?: string
  /**
   * 强平单时：合约组保证金扣款
   */
  liquidationDeductMargin?: string
  /**
   * 强平单时：强平返还
   */
  liquidationRemainMargin?: string
  /**
   * 标的币symbol
   */
  baseCoinShortName: string
  /**
   * 计价币symbol
   */
  quoteCoinShortName: string
  /**
   * 完成度
   */
  completeness: string
  /**
   * 1 接管单 2 非接管单
   */
  isAccept: string
  /**
   * 抵扣手续费;如果大于0，说明订单使用了手续费类的优惠券。
   */
  feeDeductionAmount?: number
  /**
   * 合约保险金抵扣;如果大于0，说明订单使用了合约保险金类别的优惠券。
   */
  insuranceDeductionAmount?: number
  /**
   * 使用体验金，开仓使用了体验金优惠券，则该字段有值
   */
  voucherAmount: number
  /**
   * 抵扣的体验金，平仓如果有亏损，如果仓位上有体验金，先扣体验金，则这个字段有值
   */
  voucherDeductionAmount: number
  /**
   * 订单成交使用的真实体验金，开仓使用了体验金优惠券，并且成交了则该字段有值
   */
  voucherRealAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [历史委托订单详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/3679)
// **/
// export const getV1PerpetualOrdersDetailsIdApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualOrdersDetailsIdApiRequest,
//   YapiGetV1PerpetualOrdersDetailsIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/orders/details/{id}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
