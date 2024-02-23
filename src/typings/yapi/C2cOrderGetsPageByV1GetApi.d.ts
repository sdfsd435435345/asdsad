/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取订单列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4967) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/getsPageBy`
 * @更新时间 `2023-11-02 11:38:21`
 */
export interface YapiGetV1C2cOrderGetsPageByApiRequest {
  /**
   * 广告ID
   */
  advertId?: string
  /**
   * 页码
   */
  pageNum?: string
  /**
   * 每页条数
   */
  pageSize?: string
  /**
   * 排序字段
   */
  ordersBy?: string
  /**
   * 排序字段是否升序
   */
  sortsBy?: string
  /**
   * 订单状态
   */
  statusCd?: string
  /**
   * 搜索关键字（现只是：orderId、userNickName）
   */
  searchKey?: string
  /**
   * 创建时间-开始
   */
  createdTimeBegin?: string
  /**
   * 创建时间-结束
   */
  createdTimeEnd?: string
  /**
   * 交易区IDs
   */
  areaIds?: string
  /**
   * 方向(BUY买 SELL卖)
   */
  directCd?: string
  /**
   * 交易类型(INSIDE站内 OUTSIDE站外 OTC)
   */
  dealTypeCds?: string
  /**
   * 币种ID
   */
  coinId?: string
  /**
   * 订单号
   */
  orderId?: string
}

/**
 * 接口 [获取订单列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4967) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/getsPageBy`
 * @更新时间 `2023-11-02 11:38:21`
 */
export interface YapiGetV1C2cOrderGetsPageByApiResponse {
  code?: number
  data?: YapiGetV1C2COrderGetsPageByData
  message?: string
}
export interface YapiGetV1C2COrderGetsPageByData {
  total?: string
  pages?: string
  pageSize?: string
  list?: YapiGetV1C2COrderGetsPageByListData[]
  pageNum?: string
}
export interface YapiGetV1C2COrderGetsPageByListData {
  /**
   * 总价
   */
  totalPrice: number
  /**
   * B端商户ID
   */
  businessId: string
  /**
   * 状态（CREATED已创建(初始值) WAS_PAYED已付款 WAS_COLLECTED已收款 WAS_TRANSFER_COIN已转币 WAS_RECEIVE_COIN已收币(已完成) WAS_CANCEL已取消 NOT_CANCEL__APPEALING非取消、申诉中 CANCEL__APPEALING取消、申诉中 NOT_CANCEL__APPEAL_FINISH非取消、申诉完成 CANCEL__APPEAL_FINISH取消、申诉完成）
   */
  statusCd: string
  /**
   * 是否解冻过，1解冻过，2未解冻过
   */
  unfreeze?: number
  /**
   * 广告ID
   */
  advertId: string
  /**
   * 商家用户ID
   */
  merchantUid: string
  /**
   * 用户ID
   */
  uid: string
  /**
   * 数量
   */
  number: number
  /**
   * 交易完成后，链上提币冻结结束时间
   */
  freezeEndTime: null
  /**
   * 支付（收款）结束时间
   */
  expireTime?: null
  /**
   * 类型(NUMBER TOTAL_PRICE)
   */
  typeCd: string
  /**
   * 主链
   */
  mainchainAddrId: null
  /**
   * 支付方式ID
   */
  paymentId: null
  /**
   * 订单ID
   */
  id: string
  /**
   * 交易区名称
   */
  currencyEnName: string
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 币种全称
   */
  coinFullName: string
  /**
   * 下单时间
   */
  createdTime: string
  /**
   * 买方 - 用户姓名
   */
  buyerUserName: string
  /**
   * 买卖角色(BUYER SELLER)
   */
  buyAndSellRole: string
  /**
   * 是否已胜诉
   */
  isAppealWinner?: string
  /**
   * 单价
   */
  price: number
  /**
   * 买方 - 商家昵称
   */
  buyerMerNickName?: string
  /**
   * 卖方 - 商家昵称
   */
  sellerMerNickName?: string
  /**
   * 买方 - 成单率
   */
  buyerCompletedOrderRate?: string
  /**
   * 卖方 - 成单率
   */
  sellerCompletedOrderRate?: string
  /**
   * 卖方 - 用户姓名
   */
  sellerUserName: string
  /**
   * 买方 - 是否商家
   */
  buyerIsMerchant?: string
  /**
   * 卖方 - 是否商家
   */
  sellerIsMerchant?: string
  /**
   * 方向(BUY买 SELL卖)
   */
  directCd: string
  /**
   * 交易类型(INSIDE站内 OUTSIDE站外)
   */
  dealTypeCd: string
  /**
   * 买家用户ID
   */
  buyerUid: string
  /**
   * 卖家用户ID
   */
  sellerUid: string
  /**
   * 链路名称
   */
  mainChainName: string
  /**
   * 交易数量精度
   */
  tradePrecision: number
  /**
   * otc订单号
   */
  otcOrderId: string
  /**
   * 渠道名
   */
  otcName: string
  /**
   * 是否是OTC订单，1不是 2是
   */
  isOtc: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取订单列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4967)
// **/
// export const getV1C2cOrderGetsPageByApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderGetsPageByApiRequest,
//   YapiGetV1C2cOrderGetsPageByApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/getsPageBy",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取订单列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6504) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/getsPageBy`
 * @更新时间 `2023-06-08 16:47:00`
 */
export interface YapiGetV1C2cOrderGetsPageByApiRequest {
  /**
   * 广告ID
   */
  advertId?: string
  /**
   * 页码
   */
  pageNum?: string
  /**
   * 每页条数
   */
  pageSize?: string
  /**
   * 排序字段
   */
  ordersBy?: string
  /**
   * 排序字段是否升序
   */
  sortsBy?: string
  /**
   * 订单状态
   */
  statusCd?: string
  /**
   * 搜索关键字（现只是：orderId、userNickName）
   */
  searchKey?: string
  /**
   * 创建时间-开始
   */
  createdTimeBegin?: string
  /**
   * 创建时间-结束
   */
  createdTimeEnd?: string
  /**
   * 交易区IDs
   */
  areaIds?: string
  /**
   * 方向(BUY买 SELL卖)
   */
  directCd?: string
  /**
   * 交易类型(INSIDE站内 OUTSIDE站外)
   */
  dealTypeCd?: string
  /**
   * 币种ID
   */
  coinId?: string
  /**
   * 订单号
   */
  orderId?: string
}

/**
 * 接口 [获取订单列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6504) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/getsPageBy`
 * @更新时间 `2023-06-08 16:47:00`
 */
export interface YapiGetV1C2cOrderGetsPageByApiResponse {
  code?: number
  data?: YapiGetV1C2COrderGetsPageByData
  message?: string
}
export interface YapiGetV1C2COrderGetsPageByData {
  total?: string
  pages?: string
  pageSize?: string
  list?: YapiGetV1C2COrderGetsPageByListData[]
  pageNum?: string
}
export interface YapiGetV1C2COrderGetsPageByListData {
  /**
   * 总价
   */
  totalPrice: number
  /**
   * B端商户ID
   */
  businessId: string
  /**
   * 状态（CREATED已创建(初始值) WAS_PAYED已付款 WAS_COLLECTED已收款 WAS_TRANSFER_COIN已转币 WAS_RECEIVE_COIN已收币(已完成) WAS_CANCEL已取消 NOT_CANCEL__APPEALING非取消、申诉中 CANCEL__APPEALING取消、申诉中 NOT_CANCEL__APPEAL_FINISH非取消、申诉完成 CANCEL__APPEAL_FINISH取消、申诉完成）
   */
  statusCd: string
  /**
   * 是否解冻过，1解冻过，2未解冻过
   */
  unfreeze?: number
  /**
   * 广告ID
   */
  advertId: string
  /**
   * 商家用户ID
   */
  merchantUid: string
  /**
   * 用户ID
   */
  uid: string
  /**
   * 数量
   */
  number: number
  /**
   * 交易完成后，链上提币冻结结束时间
   */
  freezeEndTime: null
  /**
   * 支付（收款）结束时间
   */
  expireTime?: null
  /**
   * 类型(NUMBER TOTAL_PRICE)
   */
  typeCd: string
  /**
   * 主链
   */
  mainchainAddrId: null
  /**
   * 支付方式ID
   */
  paymentId: null
  /**
   * 订单ID
   */
  id: string
  /**
   * 交易区名称
   */
  currencyEnName: string
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 币种全称
   */
  coinFullName: string
  /**
   * 下单时间
   */
  createdTime: string
  /**
   * 买方 - 用户姓名
   */
  buyerUserName: string
  /**
   * 买卖角色(BUYER SELLER)
   */
  buyAndSellRole: string
  /**
   * 是否已胜诉
   */
  isAppealWinner?: string
  /**
   * 单价
   */
  price: number
  /**
   * 买方 - 商家昵称
   */
  buyerMerNickName?: string
  /**
   * 卖方 - 商家昵称
   */
  sellerMerNickName?: string
  /**
   * 买方 - 成单率
   */
  buyerCompletedOrderRate?: string
  /**
   * 卖方 - 成单率
   */
  sellerCompletedOrderRate?: string
  /**
   * 卖方 - 用户姓名
   */
  sellerUserName: string
  /**
   * 买方 - 是否商家
   */
  buyerIsMerchant?: string
  /**
   * 卖方 - 是否商家
   */
  sellerIsMerchant?: string
  /**
   * 方向(BUY买 SELL卖)
   */
  directCd: string
  /**
   * 交易类型(INSIDE站内 OUTSIDE站外)
   */
  dealTypeCd: string
  /**
   * 买家用户ID
   */
  buyerUid: string
  /**
   * 卖家用户ID
   */
  sellerUid: string
  /**
   * 链路名称
   */
  mainChainName: string
  /**
   * 交易数量精度
   */
  tradePrecision: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取订单列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6504)
// **/
// export const getV1C2cOrderGetsPageByApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderGetsPageByApiRequest,
//   YapiGetV1C2cOrderGetsPageByApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/getsPageBy",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
