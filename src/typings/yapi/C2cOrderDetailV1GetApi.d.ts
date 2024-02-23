/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取订单详情↗](https://yapi.nbttfc365.com/project/73/interface/api/4563) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/detail`
 * @更新时间 `2023-09-06 10:45:30`
 */
export interface YapiGetV1C2cOrderDetailApiRequest {
  /**
   * 订单ID
   */
  id: string
}

/**
 * 接口 [获取订单详情↗](https://yapi.nbttfc365.com/project/73/interface/api/4563) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/detail`
 * @更新时间 `2023-09-06 10:45:30`
 */
export interface YapiGetV1C2cOrderDetailApiResponse {
  code?: number
  data?: YapiGetV1C2COrderDetailData
  message?: string
}
export interface YapiGetV1C2COrderDetailData {
  /**
   * 订单ID
   */
  id: number
  /**
   * 买家用户ID
   */
  buyerUid: string
  /**
   * 卖家用户ID
   */
  sellerUid: string
  /**
   * 单价
   */
  price: number
  /**
   * 数量
   */
  number: number
  /**
   * 总价
   */
  totalPrice: number
  /**
   * CREATED已创建(初始值) WAS_PAYED已付款 WAS_COLLECTED已收款 WAS_TRANSFER_COIN已转币 WAS_RECEIVE_COIN已收币(已完成) WAS_CANCEL已取消 NOT_CANCEL__APPEALING非取消、申诉中 CANCEL__APPEALING取消、申诉中 NOT_CANCEL__APPEAL_FINISH非取消、申诉完成 CANCEL__APPEAL_FINISH取消、申诉完成
   */
  statusCd: string
  /**
   * 货币名称
   */
  coinName: string
  /**
   * 货币符号
   */
  symbol: string
  /**
   * 货币全称
   */
  coinFullName: string
  /**
   * 法币英文名称
   */
  currencyEnName: string
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 更新时间
   */
  updatedTime: number
  /**
   * 买卖角色(BUYER SELLER)
   */
  buyAndSellRole: string
  /**
   * 是否已提交申诉资料(申诉的状态时)
   */
  isComplaintInformation?: string
  /**
   * 交易类型(INSIDE站内 OUTSIDE站外)
   */
  dealTypeCd: string
  /**
   * 支付|收款方式名称（BANK银行卡 ALIPAY支付宝 WECHAT微信）
   */
  paymentName: string
  /**
   * 支付|收款方式账号
   */
  paymentAccount: string
  /**
   * 支付|收款方式开户行
   */
  paymentBankOfDeposit?: string
  /**
   * 支付|收款方式二维码(图片资源地址)
   */
  paymentQrCodeAddr?: string
  /**
   * 主链类型名称
   */
  mainchainAddrName: string
  /**
   * 主链类型地址
   */
  mainchainAddrAddr: string
  /**
   * 主链类型地址Memo
   */
  mainchainAddrMemo: string
  /**
   * 广告备注
   */
  remark?: string
  /**
   * 下单时间
   */
  createdTime: string
  /**
   * 取消原因
   */
  cancelReason?: string
  /**
   * 申诉人用户ID
   */
  appealUid?: string
  /**
   * 申诉人用户姓名
   */
  appealUserName?: string
  /**
   * 申诉原因
   */
  appealReason?: string
  /**
   * 申诉具体原因
   */
  appealSpecificReason?: string
  /**
   * 支付|收款人姓名
   */
  paymentUserName: string
  /**
   * 用户ID
   */
  uid: number
  /**
   * 取消人用户ID
   */
  cancelUid?: string
  /**
   * 方向(BUY买 SELL卖)
   */
  directCd: string
  /**
   * 申诉胜利者用户昵称
   */
  appealWinnerUserName?: string
  /**
   * 申诉上传图片(可5张)
   */
  appealPicture?: string[]
  /**
   * 申诉上传视频
   */
  appealVideo?: string
  /**
   * 申诉倒计时
   */
  appealCountDown?: number
  /**
   * 催促(1是 0否)
   */
  urge: number
  /**
   * 是否申诉人
   */
  isAppealer?: boolean
  /**
   * 是否已胜诉
   */
  isAppealWinner?: boolean
  /**
   * 法币符号
   */
  currencySymbol: string
  /**
   * 过期时间
   */
  expireTime?: string
  /**
   * 买方 - 用户姓名
   */
  buyerUserName: string
  /**
   * 买方 - 真实姓名
   */
  buyerRealName: string
  /**
   * 买方 - 商家昵称
   */
  buyerMerNickName?: string
  /**
   * 买方 - 成单率
   */
  buyerCompletedOrderRate?: string
  /**
   * 买方 - 是否商家
   */
  buyerIsMerchant?: string
  /**
   * 卖方 - 成单率
   */
  sellerCompletedOrderRate?: string
  /**
   * 卖方 - 商家昵称
   */
  sellerMerNickName?: string
  /**
   * 卖方 - 用户姓名
   */
  sellerUserName: string
  /**
   * 卖方 - 是否商家
   */
  sellerIsMerchant?: string
  /**
   * 货币Web图标
   */
  coinWebLogo: string
  /**
   * 货币App图标
   */
  coinAppLogo: string
  /**
   * 是否是本人取消订单，true，是，false，不是
   */
  isCanceler: boolean
  /**
   * 是否是系统发起的申述
   */
  isSystemStartAppeal: boolean
  /**
   * 取消原因类型
   */
  cancelType?: string
  /**
   * 交易数量精度
   */
  tradePrecision: number
  /**
   * 申述附件
   */
  appealAttachment?: string
  /**
   * 聊天群组ID
   */
  tid?: string
  /**
   * 银行支行
   */
  bankBranch: string
  /**
   * 付款详情
   */
  paymentDetails: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取订单详情↗](https://yapi.nbttfc365.com/project/73/interface/api/4563)
// **/
// export const getV1C2cOrderDetailApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderDetailApiRequest,
//   YapiGetV1C2cOrderDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/detail",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取订单详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6509) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/detail`
 * @更新时间 `2023-06-08 16:47:00`
 */
export interface YapiGetV1C2cOrderDetailApiRequest {
  /**
   * 订单ID
   */
  id: string
}

/**
 * 接口 [获取订单详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6509) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/detail`
 * @更新时间 `2023-06-08 16:47:00`
 */
export interface YapiGetV1C2cOrderDetailApiResponse {
  code?: number
  data?: YapiGetV1C2COrderDetailData
  message?: string
}
export interface YapiGetV1C2COrderDetailData {
  /**
   * 订单ID
   */
  id: number
  /**
   * 买家用户ID
   */
  buyerUid: string
  /**
   * 卖家用户ID
   */
  sellerUid: string
  /**
   * 单价
   */
  price: number
  /**
   * 数量
   */
  number: number
  /**
   * 总价
   */
  totalPrice: number
  /**
   * CREATED已创建(初始值) WAS_PAYED已付款 WAS_COLLECTED已收款 WAS_TRANSFER_COIN已转币 WAS_RECEIVE_COIN已收币(已完成) WAS_CANCEL已取消 NOT_CANCEL__APPEALING非取消、申诉中 CANCEL__APPEALING取消、申诉中 NOT_CANCEL__APPEAL_FINISH非取消、申诉完成 CANCEL__APPEAL_FINISH取消、申诉完成
   */
  statusCd: string
  /**
   * 货币名称
   */
  coinName: string
  /**
   * 货币符号
   */
  symbol: string
  /**
   * 货币全称
   */
  coinFullName: string
  /**
   * 法币英文名称
   */
  currencyEnName: string
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 更新时间
   */
  updatedTime: number
  /**
   * 买卖角色(BUYER SELLER)
   */
  buyAndSellRole: string
  /**
   * 是否已提交申诉资料(申诉的状态时)
   */
  isComplaintInformation?: string
  /**
   * 交易类型(INSIDE站内 OUTSIDE站外)
   */
  dealTypeCd: string
  /**
   * 支付|收款方式名称（BANK银行卡 ALIPAY支付宝 WECHAT微信）
   */
  paymentName: string
  /**
   * 支付|收款方式账号
   */
  paymentAccount: string
  /**
   * 支付|收款方式开户行
   */
  paymentBankOfDeposit?: string
  /**
   * 支付|收款方式二维码(图片资源地址)
   */
  paymentQrCodeAddr?: string
  /**
   * 主链类型名称
   */
  mainchainAddrName: string
  /**
   * 主链类型地址
   */
  mainchainAddrAddr: string
  /**
   * 主链类型地址Memo
   */
  mainchainAddrMemo: string
  /**
   * 广告备注
   */
  remark?: string
  /**
   * 下单时间
   */
  createdTime: string
  /**
   * 取消原因
   */
  cancelReason?: string
  /**
   * 申诉人用户ID
   */
  appealUid?: string
  /**
   * 申诉人用户姓名
   */
  appealUserName?: string
  /**
   * 申诉原因
   */
  appealReason?: string
  /**
   * 申诉具体原因
   */
  appealSpecificReason?: string
  /**
   * 支付|收款人姓名
   */
  paymentUserName: string
  /**
   * 用户ID
   */
  uid: number
  /**
   * 取消人用户ID
   */
  cancelUid?: string
  /**
   * 方向(BUY买 SELL卖)
   */
  directCd: string
  /**
   * 申诉胜利者用户昵称
   */
  appealWinnerUserName?: string
  /**
   * 申诉上传图片(可5张)
   */
  appealPicture?: string[]
  /**
   * 申诉上传视频
   */
  appealVideo?: string
  /**
   * 申诉倒计时
   */
  appealCountDown?: number
  /**
   * 催促(1是 0否)
   */
  urge: number
  /**
   * 是否申诉人
   */
  isAppealer?: boolean
  /**
   * 是否已胜诉
   */
  isAppealWinner?: boolean
  /**
   * 法币符号
   */
  currencySymbol: string
  /**
   * 过期时间
   */
  expireTime?: string
  /**
   * 买方 - 用户姓名
   */
  buyerUserName: string
  /**
   * 买方 - 真实姓名
   */
  buyerRealName: string
  /**
   * 买方 - 商家昵称
   */
  buyerMerNickName?: string
  /**
   * 买方 - 成单率
   */
  buyerCompletedOrderRate?: string
  /**
   * 买方 - 是否商家
   */
  buyerIsMerchant?: string
  /**
   * 卖方 - 成单率
   */
  sellerCompletedOrderRate?: string
  /**
   * 卖方 - 商家昵称
   */
  sellerMerNickName?: string
  /**
   * 卖方 - 用户姓名
   */
  sellerUserName: string
  /**
   * 卖方 - 是否商家
   */
  sellerIsMerchant?: string
  /**
   * 货币Web图标
   */
  coinWebLogo: string
  /**
   * 货币App图标
   */
  coinAppLogo: string
  /**
   * 是否是本人取消订单，true，是，false，不是
   */
  isCanceler: boolean
  /**
   * 是否是系统发起的申述
   */
  isSystemStartAppeal: boolean
  /**
   * 取消原因类型
   */
  cancelType?: string
  /**
   * 交易数量精度
   */
  tradePrecision: number
  /**
   * 申述附件
   */
  appealAttachment?: string
  /**
   * 聊天群组ID
   */
  tid?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取订单详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6509)
// **/
// export const getV1C2cOrderDetailApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderDetailApiRequest,
//   YapiGetV1C2cOrderDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
