/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取首页广告列表↗](https://yapi.nbttfc365.com/project/73/interface/api/5048) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/indexList`
 * @更新时间 `2023-09-05 16:54:40`
 */
export interface YapiPostV1C2cAdvertIndexListApiRequest {
  /**
   * 区域id
   */
  areaId: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 广告方向
   */
  advertDirectCds: string[]
  /**
   * 交易类型
   */
  tradeTypeCds?: string[]
  /**
   * 广告单类型
   */
  advertTypeCds?: string[]
  chains?: string[]
  pageNum?: number
  pageSize?: number
  /**
   * 数量
   */
  amount?: number
  payments?: string[]
}

/**
 * 接口 [获取首页广告列表↗](https://yapi.nbttfc365.com/project/73/interface/api/5048) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/indexList`
 * @更新时间 `2023-09-05 16:54:40`
 */
export interface YapiPostV1C2cAdvertIndexListApiResponse {
  code?: number
  data?: YapiPostV1C2CAdvertIndexListData[]
  message?: string
}
export interface YapiPostV1C2CAdvertIndexListData {
  /**
   * 最小金额
   */
  minAmount: number
  /**
   * 昵称
   */
  nickName: string
  /**
   * 支付方式
   */
  payments: string[]
  /**
   * 订单总数
   */
  orderCount: number
  /**
   * 是否是商户
   */
  merchant: boolean
  /**
   * 头像
   */
  avatar: null
  /**
   * 广告方向(BUY SELL)
   */
  advertDirectCd: string
  /**
   * 广告id
   */
  advertId: string
  /**
   * 是否满足条件
   */
  canTrade: boolean
  /**
   * 币种id
   */
  coinId: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 订单完成率
   */
  completedOrderRate: number
  /**
   * 数量
   */
  quantity: null
  /**
   * 价格
   */
  price: number
  /**
   * 主链地址
   */
  mainchainAddrs: YapiPostV1C2CAdvertIndexListMainchainAddrsListData[]
  /**
   * 最大金额
   */
  maxAmount: number
  /**
   * 支付方式详情
   */
  paymentDetails: YapiPostV1C2CAdvertIndexListPaymentDetailsListData[]
  /**
   * 交易类型(INSIDE OUTSIDE)
   */
  tradeTypeCd: string
  /**
   * 广告备注
   */
  advertRemark: string
  newPayments: YapiPostV1C2CAdvertIndexNewPaymentsListData
  /**
   * 法币限额最小值
   */
  minAreaAmount: string
  /**
   * 法币限额最大值
   */
  maxAreaAmount: string
  /**
   * 法币名称
   */
  areaName: string
}
export interface YapiPostV1C2CAdvertIndexListMainchainAddrsListData {
  /**
   * 主链类型
   */
  name: string
  /**
   * 地址
   */
  address: string
  /**
   * memo
   */
  memo: string
  /**
   * 对应的链id
   */
  id: string
}
export interface YapiPostV1C2CAdvertIndexListPaymentDetailsListData {
  /**
   * businessid
   */
  businessId: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 法币id
   */
  legalCurrencyId: string
  /**
   * 支付方式
   */
  paymentTypeCd: string
  /**
   * 姓名
   */
  name: string
  /**
   * 账号
   */
  account: string
  /**
   * 开户行
   */
  bankOfDeposit: string
  /**
   * 二维码地址
   */
  qrCodeAddr: string
  /**
   * 支付详细信息id
   */
  id: string
  /**
   * 是否显示灰色
   */
  grey: boolean
  /**
   * 银行支行
   */
  bankBranch: string
  /**
   * 付款详情
   */
  paymentDetails: string
}
/**
 * 新增支付方式
 */
export interface YapiPostV1C2CAdvertIndexNewPaymentsListData {
  /**
   * BANK、WECHAT、ALIPAY
   */
  name: string
  /**
   * 是否需要显示灰色
   */
  grey: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取首页广告列表↗](https://yapi.nbttfc365.com/project/73/interface/api/5048)
// **/
// export const postV1C2cAdvertIndexListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertIndexListApiRequest,
//   YapiPostV1C2cAdvertIndexListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/indexList",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [获取首页广告列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6439) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `POST /v1/c2c/advert/indexList`
 * @更新时间 `2023-06-08 16:46:56`
 */
export interface YapiPostV1C2cAdvertIndexListApiRequest {
  /**
   * 区域id
   */
  areaId: string
  /**
   * 币种id
   */
  coinId: number
  /**
   * 广告方向
   */
  advertDirectCds: string[]
  /**
   * 交易类型
   */
  tradeTypeCds?: string[]
  /**
   * 广告单类型
   */
  advertTypeCds?: string[]
  chains?: string[]
  pageNum?: number
  pageSize?: number
  /**
   * 数量
   */
  amount?: number
  payments?: string[]
}

/**
 * 接口 [获取首页广告列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6439) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `POST /v1/c2c/advert/indexList`
 * @更新时间 `2023-06-08 16:46:56`
 */
export interface YapiPostV1C2cAdvertIndexListApiResponse {
  code?: number
  data?: YapiPostV1C2CAdvertIndexListData[]
  message?: string
}
export interface YapiPostV1C2CAdvertIndexListData {
  /**
   * 最小金额
   */
  minAmount: number
  /**
   * 昵称
   */
  nickName: string
  /**
   * 支付方式
   */
  payments: string[]
  /**
   * 订单总数
   */
  orderCount: number
  /**
   * 是否是商户
   */
  merchant: boolean
  /**
   * 头像
   */
  avatar: null
  /**
   * 广告方向(BUY SELL)
   */
  advertDirectCd: string
  /**
   * 广告id
   */
  advertId: string
  /**
   * 是否满足条件
   */
  canTrade: boolean
  /**
   * 币种id
   */
  coinId: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 订单完成率
   */
  completedOrderRate: number
  /**
   * 数量
   */
  quantity: null
  /**
   * 价格
   */
  price: number
  /**
   * 主链地址
   */
  mainchainAddrs: YapiPostV1C2CAdvertIndexListMainchainAddrsListData[]
  /**
   * 最大金额
   */
  maxAmount: number
  /**
   * 支付方式详情
   */
  paymentDetails: YapiPostV1C2CAdvertIndexListPaymentDetailsListData[]
  /**
   * 交易类型(INSIDE OUTSIDE)
   */
  tradeTypeCd: string
  /**
   * 广告备注
   */
  advertRemark: string
  newPayments: YapiPostV1C2CAdvertIndexNewPaymentsListData
  /**
   * 法币限额最小值
   */
  minAreaAmount: string
  /**
   * 法币限额最大值
   */
  maxAreaAmount: string
  /**
   * 法币名称
   */
  areaName: string
}
export interface YapiPostV1C2CAdvertIndexListMainchainAddrsListData {
  /**
   * 主链类型
   */
  name: string
  /**
   * 地址
   */
  address: string
  /**
   * memo
   */
  memo: string
  /**
   * 对应的链id
   */
  id: string
}
export interface YapiPostV1C2CAdvertIndexListPaymentDetailsListData {
  /**
   * businessid
   */
  businessId: string
  /**
   * 用户id
   */
  uid: string
  /**
   * 法币id
   */
  legalCurrencyId: string
  /**
   * 支付方式
   */
  paymentTypeCd: string
  /**
   * 姓名
   */
  name: string
  /**
   * 账号
   */
  account: string
  /**
   * 开户行
   */
  bankOfDeposit: string
  /**
   * 二维码地址
   */
  qrCodeAddr: string
  /**
   * 支付详细信息id
   */
  id: string
  /**
   * 是否显示灰色
   */
  grey: boolean
}
/**
 * 新增支付方式
 */
export interface YapiPostV1C2CAdvertIndexNewPaymentsListData {
  /**
   * BANK、WECHAT、ALIPAY
   */
  name: string
  /**
   * 是否需要显示灰色
   */
  grey: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取首页广告列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6439)
// **/
// export const postV1C2cAdvertIndexListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertIndexListApiRequest,
//   YapiPostV1C2cAdvertIndexListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/indexList",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
