/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-财务日志详情↗](https://yapi.nbttfc365.com/project/77/interface/api/8589) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/bill/log/detail`
 * @更新时间 `2023-06-12 14:44:49`
 */
export interface YapiGetV1PayBillLogDetailApiRequest {
  /**
   * 财务记录id
   */
  id: string
}

/**
 * 接口 [资产-财务日志详情↗](https://yapi.nbttfc365.com/project/77/interface/api/8589) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/bill/log/detail`
 * @更新时间 `2023-06-12 14:44:49`
 */
export interface YapiGetV1PayBillLogDetailApiResponse {
  data?: YapiGetV1PayBillLogDetailData
  code?: number
  message?: string
}
export interface YapiGetV1PayBillLogDetailData {
  depositWithdraw?: YapiGetV1PayBillLogDetailDepositWithdrawData
  fee?: YapiGetV1PayBillLogDetailFeeData
  perpetual?: YapiGetV1PayBillLogDetailPerpetualData
  commission?: YapiGetV1PayBillLogDetailCommissionData
  c2cBillLogDetail?: YapiGetV1PayBillLogDetailC2CBillLogDetailData
}
/**
 * 充提详情
 */
export interface YapiGetV1PayBillLogDetailDepositWithdrawData {
  /**
   * 充值地址memo
   */
  memo?: string
  /**
   * 交易hash
   */
  txHash?: string
  /**
   * 手续费
   */
  fee?: string
  /**
   * 币种代码网络如 ERC_20
   */
  symbol?: string
  /**
   * 区块确认数
   */
  confirmation?: number
  /**
   * 财务流水
   */
  serialNo?: string
  /**
   * 1、进行中 2、成功 3、失败 4、错误
   */
  statusCd?: number
  /**
   * 到账金额
   */
  amount?: string
  /**
   * 创建时间
   */
  createdByTime?: number
  /**
   * 类型：dwTypeCd， 201. 充币， 202. 提币 ,203 pay , 204. 冲正
   */
  typeInd?: number
  /**
   * 充值地址
   */
  address?: string
  /**
   * 区块总数
   */
  blockTotal?: number
  /**
   * 完成时间
   */
  updatedByTime?: number
  /**
   * 充提类型：channelInd1、区块链充提币 2、pay 3、平台内区块链地址
   */
  channelInd?: number
  /**
   * 驳回原因
   */
  reason?: string
  /**
   * 目标uid
   */
  toUid?: number
  /**
   * 币种 如 USDT
   */
  businessCoin?: string
  /**
   * 来源uid
   */
  fromUid?: number
  /**
   * 手续费币种
   */
  feeCoinName?: string
  /**
   * 去向账户
   */
  transferIn?: string
  /**
   * 来源账户
   */
  transferOut?: string
  /**
   * 手动/自动
   */
  operationType?: string
}
/**
 * 手续费详情
 */
export interface YapiGetV1PayBillLogDetailFeeData {
  /**
   * 币种
   */
  businessCoin: string
  /**
   * 提现总确认数
   */
  blockTotal: string
  /**
   * 当前确认数
   */
  confirmation: string
  /**
   * 转账网络
   */
  mainnet: string
  /**
   * 地址
   */
  address: string
  /**
   * 标签
   */
  memo: string
  /**
   * 交易hash
   */
  txHash: string
  /**
   * 数量（提现数量，现货成交数量）
   */
  amount: string
  /**
   * 手续费
   */
  fee: string
  /**
   * 创建时间
   */
  createdByTime: number
  /**
   * 完成时间
   */
  updatedByTime: number
  /**
   * 交易流水
   */
  serialNo: string
  /**
   * 类型：feeTypeCd： 冲正, 501、现货手续费 502、合约手续费 503、提币手续费 504、锁仓手续费
   */
  typeInd: number
  /**
   * 状态：1、进行中 2、成功 3、失败 4、错误
   */
  statusCd: number
  /**
   * 手续费币种
   */
  feeCoinName: string
  /**
   *  1买单 2卖单
   */
  side: number
  /**
   * 1限价 2市价
   */
  orderType: number
  /**
   * 交易对
   */
  symbol: string
  /**
   * 充提类型：channelInd 1、区块链充提币 2、pay 3、平台内区块链地址
   */
  channelInd: number
}
/**
 * 合约详情
 */
export interface YapiGetV1PayBillLogDetailPerpetualData {
  /**
   * 流水号
   */
  serialNo?: string
  /**
   * 日志类型
   */
  typeInd?: number
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 状态
   */
  statusCd?: number
  /**
   * 数量
   */
  amount?: string
  /**
   * 合约组名称
   */
  groupName?: string
  /**
   * 手动/自动
   */
  operationType?: string
  /**
   * 创建时间
   */
  createTime?: number
  /**
   * 完成时间
   */
  updateTime?: number
  /**
   * 目标合约组名称
   */
  toGroupName?: string
  /**
   * 杠杆倍数
   */
  lever?: string
  /**
   * open_short:开空/open_long:开多/close_long:平多/close_short:平空/short:空/long:多
   */
  side?: string
  /**
   * 委托价格
   */
  price?: string
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd?: string
  /**
   * 订单状态
   */
  orderStatus?: string
  /**
   * 委托数量
   */
  size?: string
  /**
   * 成交数量
   */
  tradeSize?: string
  /**
   * 成交均价
   */
  tradePrice?: string
  /**
   * 收益
   */
  realizedProfit?: string
  /**
   * 资金明细
   */
  assetDetail?: YapiGetV1PayBillLogDetailListAssetDetailPerpetualData[]
  /**
   * 1：接管单，2:非接管单
   */
  isAccept?: number
  /**
   * 合约类型
   */
  groupType?: string
  /**
   * 计价币
   */
  quoteCoinShortName?: string
  /**
   * 标的币
   */
  baseCoinShortName?: string
  /**
   * 订单类型  limit_order 限价委托单  market_order 市价委托单 forced_liquidation_order 强平委托单 forced_lighten_order 强减委托单
   */
  orderTypeInd?: string
  /**
   * 迁移可用保证金
   */
  migrateMargin?: string
  /**
   * 成交明细
   */
  dealDetail?: YapiGetV1PayBillLogDetailListDealDetailPerpetualData[]
  /**
   * 迁移类型: perpetualMigrateType
   */
  migrateType?: string
  /**
   * 转入账户
   */
  transferIn?: string
  /**
   * 转出账户
   */
  transferOut?: string
}
export interface YapiGetV1PayBillLogDetailListAssetDetailPerpetualData {
  /**
   * 时间
   */
  time?: number
  /**
   * 数量
   */
  amount?: string
  /**
   * 类型
   */
  assetType?: string
  /**
   * 当时汇率
   */
  rate?: string
  /**
   * 法币
   */
  currencyName?: string
  /**
   * 币种
   */
  coinName?: string
}
export interface YapiGetV1PayBillLogDetailListDealDetailPerpetualData {
  /**
   * 时间
   */
  time?: string
  /**
   * 数量
   */
  size?: string
  /**
   * 价格
   */
  price?: string
  /**
   * 手续费
   */
  fee?: string
  /**
   * 计价币
   */
  quoteSymbolName?: string
  /**
   * 标的币
   */
  baseSymbolName?: string
}
/**
 * 佣金详情
 */
export interface YapiGetV1PayBillLogDetailCommissionData {
  /**
   * 币种
   */
  businessCoin: string
  /**
   * 流水号
   */
  serialNo: string
  /**
   * 状态
   */
  statusCd: number
  /**
   * 类型： 801、现货手续费返佣 802、合约手续费返佣 803、借款手续费返佣
   */
  typeInd: number
  /**
   * 数量
   */
  amount: string
  /**
   * 创建时间
   */
  createdByTime: string
  /**
   * 完成时间
   */
  updatedByTime: string
}
/**
 * C2C日志详情
 */
export interface YapiGetV1PayBillLogDetailC2CBillLogDetailData {
  /**
   * 币种
   */
  businessCoin?: string
  /**
   * 日志类型
   */
  typeInd?: string
  /**
   * 流水号
   */
  serialNo?: string
  /**
   * 创建时间
   */
  createdByTime?: string
  /**
   * 修改时间
   */
  updatedByTime?: string
  /**
   * 订单编号
   */
  orderNumber?: string
  /**
   * 申诉人昵称
   */
  appealUserName?: string
  /**
   * 申述原因
   */
  appealReason?: string
  /**
   * 转入账户: assetAccountType
   */
  transferIn?: string
  /**
   * 转出账户: assetAccountType
   */
  transferOut?: string
  /**
   * 来源uid
   */
  fromUid?: string
  /**
   * 目标uid
   */
  toUid?: string
  /**
   * 业务类型：c2cBillLogTypeStr
   */
  typeStr?: string
  /**
   * 数量
   */
  amount?: string
  /**
   * 状态
   */
  statusCd?: string
  /**
   * 申诉人uid
   */
  appealUid?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-财务日志详情↗](https://yapi.nbttfc365.com/project/77/interface/api/8589)
// **/
// export const getV1PayBillLogDetailApiRequest: MarkcoinRequest<
//   YapiGetV1PayBillLogDetailApiRequest,
//   YapiGetV1PayBillLogDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/bill/log/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
