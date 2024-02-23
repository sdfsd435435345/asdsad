/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史委托_普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3675) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/orders/history`
 * @更新时间 `2023-11-03 16:30:46`
 */
export interface YapiGetV1PerpetualOrdersHistoryApiRequest {
  /**
   * 交易对ID
   */
  tradeId?: string
  /**
   * 订单类型    limit_order 限价委托单  market_order 市价委托单 forced_liquidation_order 强平委托单 forced_lighten_order 强减委托单
   */
  typeInd?: string
  /**
   * 开始时间
   */
  startTime?: string
  /**
   * 结束时间
   */
  endTime?: string
  /**
   * 状态 revoke 已撤销 revoke_sys 系统撤销 deal_done 完全成交  partial_deal_canceled部分成交,已撤销 ; (多个状态值用英文逗号分割)
   */
  statusCd?: string
  /**
   * 分页参数页号 ，从1开始
   */
  pageNum: string
  /**
   * 分页大小 默认 20 ，最小1，最大500
   */
  pageSize: string
  /**
   * 是否计算总数 true 是 false 否;不传默认为true
   */
  count?: string
  /**
   * day:一天内 ，week：一周内，months：一月内，three_months：三个月内
   */
  timeRange?: string
  /**
   * 合约组id ，不传查全部合约组
   */
  groupId?: string
}

/**
 * 接口 [历史委托_普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3675) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/orders/history`
 * @更新时间 `2023-11-03 16:30:46`
 */
export interface YapiGetV1PerpetualOrdersHistoryApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PerpetualOrdersHistoryData
}
export interface YapiGetV1PerpetualOrdersHistoryData {
  /**
   * 总条数
   */
  total: number
  /**
   * 当前页码
   */
  pageNum: number
  /**
   * 每页的数量
   */
  pageSize: number
  list: YapiGetV1PerpetualOrdersHistoryListData[]
}
export interface YapiGetV1PerpetualOrdersHistoryListData {
  /**
   * 订单id
   */
  id: string
  /**
   * 订单类型    limit_order 限价委托单  market_order 市价委托单 forced_liquidation_order 强平委托单 forced_lighten_order 强减委托单
   */
  typeInd: string
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 合约组名称
   */
  groupName: string
  /**
   * 状态 revoke 已撤销 revoke_sys 系统撤销，unsold 未成交 partially 部分成交 deal_done 完全成交  partial_deal_canceled部分成交,已撤销 ;
   */
  statusCd: string
  /**
   * 方向 open_long 开多 , open_short 开空 ,close_long 平多, close_short 平空
   */
  sideInd: string
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd: string
  /**
   * 合约交易对id
   */
  tradeId: string
  /**
   * 合约交易对名称
   */
  symbol: string
  /**
   * 杠杆倍数
   */
  lever: number
  /**
   * 委托价格
   */
  price: string
  /**
   * 委托数量
   */
  size: string
  /**
   * 下单选择的币种是标的币还是计价币；如果是标的币传BASE，如果是计价币传QUOTE
   */
  placeUnit: string
  /**
   * 成交均价
   */
  tradePrice: string
  /**
   * 成交数量
   */
  tradeSize: string
  /**
   * 市价单单位 amount按金额 quantity 按数量
   */
  marketUnit: string
  /**
   * 开仓初始仓位保证金
   */
  initMargin: string
  /**
   *  wallet 使用资产账户的资金开仓 group 使用当前合约组的额外保证金开仓
   */
  marginType: string
  /**
   * 开仓额外保证金
   */
  additionalMargin: string
  /**
   *  wallet 使用资产账户的资金开仓 group 使用当前合约组的额外保证金开仓
   */
  additionalMarginType: string
  /**
   * 保证金之和
   */
  totalMargin: string
  /**
   * 完成度
   */
  completeness: string
  /**
   * 创建时间 13位毫秒值
   */
  createdByTime: string
  /**
   * 标的币 symbol
   */
  baseCoinShortName: string
  /**
   * 计价币 symbol
   */
  quoteCoinShortName: string
  /**
   * 手续费
   */
  fees: string
  /**
   * 强平清算费用
   */
  liquidationFees: string
  /**
   * 合约组保证金扣款
   */
  liquidationDeductMargin: string
  /**
   * 强平返还
   */
  liquidationRemainMargin: string
  /**
   * 是否有止盈止损 ture 有 false 无
   */
  hasStrategy: boolean
  /**
   * 抵扣手续费;如果大于0，说明订单使用了手续费类的优惠券。
   */
  feeDeductionAmount?: string
  /**
   * 合约保险金抵扣;如果大于0，说明订单使用了合约保险金类别的优惠券。
   */
  insuranceDeductionAmount?: string
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
// * [历史委托_普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3675)
// **/
// export const getV1PerpetualOrdersHistoryApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualOrdersHistoryApiRequest,
//   YapiGetV1PerpetualOrdersHistoryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/orders/history",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
