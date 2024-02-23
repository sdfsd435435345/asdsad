/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [广告详情↗](https://yapi.nbttfc365.com/project/73/interface/api/5084) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/detail`
 * @更新时间 `2023-05-11 15:15:27`
 */
export interface YapiGetV1C2cAdvertDetailApiRequest {
  /**
   * 广告id
   */
  advertId: string
}

/**
 * 接口 [广告详情↗](https://yapi.nbttfc365.com/project/73/interface/api/5084) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/detail`
 * @更新时间 `2023-05-11 15:15:27`
 */
export interface YapiGetV1C2cAdvertDetailApiResponse {
  code?: number
  data?: YapiGetV1C2CAdvertDetailData
  message?: string
}
export interface YapiGetV1C2CAdvertDetailData {
  /**
   * 最小金额
   */
  minAmount?: string
  /**
   * 有效期
   */
  validDate?: number
  /**
   * 支付方式
   */
  payments?: string[]
  /**
   * 备注
   */
  remark?: string
  /**
   *  服务人数，广告主才有
   */
  customerCnt?: number
  /**
   * 成单数大于
   */
  completedOrderCount?: number
  /**
   *  广告方向(BUY SELL)
   */
  advertDirectCd?: string
  /**
   * 下架时间
   */
  removalTime?: number
  /**
   * 价格
   */
  price?: string
  /**
   * 欢迎语类型 1文字 2图片
   */
  welcomeInfoType?: number
  /**
   * 最大金额
   */
  maxAmount?: string
  /**
   * 支付方式详情（参考首页广告列表）
   */
  paymentDetails?: string[]
  /**
   * 下架原因
   */
  removalReason?: string
  /**
   * 数量
   */
  quantity?: string
  /**
   * 欢迎语
   */
  welcomeInfoMessage?: string
  /**
   * 昵称
   */
  nickName?: null
  /**
   * 订单数
   */
  orderCount?: number
  /**
   * 是否是商户
   */
  merchant?: boolean
  /**
   * 认证等级(ELEMENTARY初级认证 SENIOR高级认证 ENTERPRISE企业认证)
   */
  certificationLevelCd?: string
  /**
   * 头像
   */
  avatar?: null
  /**
   * 广告id
   */
  advertId?: string
  /**
   * 是否在线
   */
  onLine?: boolean
  /**
   * 币种id
   */
  coinId?: string
  /**
   *  交易总量
   */
  totalOrderAmount?: string
  /**
   * 创建时间
   */
  createTime?: number
  /**
   * 主链信息
   */
  mainchainAddrs?: YapiGetV1C2CAdvertDetailListMainchainAddrsData[]
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 交易类型(INSIDE OUTSIDE)
   */
  tradeTypeCd?: string
  /**
   * 法币符号
   */
  currencySymbol: string
  /**
   * 法币国家缩写
   */
  countryAbbreviation: string
  /**
   * app 币种logo
   */
  coinAppLogo: string
  /**
   * web 币种logo
   */
  coinWebLogo: string
  /**
   * 购买剩余数量
   */
  buyRemaining: string
  /**
   * 是否可交易
   */
  canTrade?: boolean
  /**
   * 广告状态（ON_SHELVES上架中、EXPIRED到期下架、TAKE_OFF_SHELVES_MERCHANT商家下架、TAKE_OFF_SHELVES_SYSTEM系统下架、DEALING交易中、WIDTHDRAW撤回中）
   */
  statusCd: string
  /**
   * 广告是否是上架状态
   */
  isOnShelves: boolean
  /**
   * 法币限额最小值
   */
  minAreaAmount: string
  /**
   * 法币限额最大值
   */
  maxAreaAmount: string
  /**
   * 区域名称
   */
  areaName: string
  newPayments: YapiGetV1C2CAdvertDetailNewPaymentsData
}
export interface YapiGetV1C2CAdvertDetailListMainchainAddrsData {
  /**
   * 地址
   */
  address?: string
  /**
   * 类型 TRC20
   */
  name?: string
  memo?: null
}
/**
 * 新的结构返回支付方式
 */
export interface YapiGetV1C2CAdvertDetailNewPaymentsData {
  /**
   * BANK、WECHAT、ALIPAY
   */
  name: string
  /**
   * 是否需要灰色显示
   */
  grey: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告详情↗](https://yapi.nbttfc365.com/project/73/interface/api/5084)
// **/
// export const getV1C2cAdvertDetailApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertDetailApiRequest,
//   YapiGetV1C2cAdvertDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/detail",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [广告详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6444) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/detail`
 * @更新时间 `2023-06-08 16:46:56`
 */
export interface YapiGetV1C2cAdvertDetailApiRequest {
  /**
   * 广告id
   */
  advertId: string
}

/**
 * 接口 [广告详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6444) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/detail`
 * @更新时间 `2023-06-08 16:46:56`
 */
export interface YapiGetV1C2cAdvertDetailApiResponse {
  code?: number
  data?: YapiGetV1C2CAdvertDetailData
  message?: string
}
export interface YapiGetV1C2CAdvertDetailData {
  /**
   * 最小金额
   */
  minAmount?: string
  /**
   * 有效期
   */
  validDate?: number
  /**
   * 支付方式
   */
  payments?: string[]
  /**
   * 备注
   */
  remark?: string
  /**
   *  服务人数，广告主才有
   */
  customerCnt?: number
  /**
   * 成单数大于
   */
  completedOrderCount?: number
  /**
   *  广告方向(BUY SELL)
   */
  advertDirectCd?: string
  /**
   * 下架时间
   */
  removalTime?: number
  /**
   * 价格
   */
  price?: string
  /**
   * 欢迎语类型 1文字 2图片
   */
  welcomeInfoType?: number
  /**
   * 最大金额
   */
  maxAmount?: string
  /**
   * 支付方式详情（参考首页广告列表）
   */
  paymentDetails?: string[]
  /**
   * 下架原因
   */
  removalReason?: string
  /**
   * 数量
   */
  quantity?: string
  /**
   * 欢迎语
   */
  welcomeInfoMessage?: string
  /**
   * 昵称
   */
  nickName?: null
  /**
   * 订单数
   */
  orderCount?: number
  /**
   * 是否是商户
   */
  merchant?: boolean
  /**
   * 认证等级(ELEMENTARY初级认证 SENIOR高级认证 ENTERPRISE企业认证)
   */
  certificationLevelCd?: string
  /**
   * 头像
   */
  avatar?: null
  /**
   * 广告id
   */
  advertId?: string
  /**
   * 是否在线
   */
  onLine?: boolean
  /**
   * 币种id
   */
  coinId?: string
  /**
   *  交易总量
   */
  totalOrderAmount?: string
  /**
   * 创建时间
   */
  createTime?: number
  /**
   * 主链信息
   */
  mainchainAddrs?: YapiGetV1C2CAdvertDetailListMainchainAddrsData[]
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 交易类型(INSIDE OUTSIDE)
   */
  tradeTypeCd?: string
  /**
   * 法币符号
   */
  currencySymbol: string
  /**
   * 法币国家缩写
   */
  countryAbbreviation: string
  /**
   * app 币种logo
   */
  coinAppLogo: string
  /**
   * web 币种logo
   */
  coinWebLogo: string
  /**
   * 购买剩余数量
   */
  buyRemaining: string
  /**
   * 是否可交易
   */
  canTrade?: boolean
  /**
   * 广告状态（ON_SHELVES上架中、EXPIRED到期下架、TAKE_OFF_SHELVES_MERCHANT商家下架、TAKE_OFF_SHELVES_SYSTEM系统下架、DEALING交易中、WIDTHDRAW撤回中）
   */
  statusCd: string
  /**
   * 广告是否是上架状态
   */
  isOnShelves: boolean
  /**
   * 法币限额最小值
   */
  minAreaAmount: string
  /**
   * 法币限额最大值
   */
  maxAreaAmount: string
  /**
   * 区域名称
   */
  areaName: string
  newPayments: YapiGetV1C2CAdvertDetailNewPaymentsData
}
export interface YapiGetV1C2CAdvertDetailListMainchainAddrsData {
  /**
   * 地址
   */
  address?: string
  /**
   * 类型 TRC20
   */
  name?: string
  memo?: null
}
/**
 * 新的结构返回支付方式
 */
export interface YapiGetV1C2CAdvertDetailNewPaymentsData {
  /**
   * BANK、WECHAT、ALIPAY
   */
  name: string
  /**
   * 是否需要灰色显示
   */
  grey: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6444)
// **/
// export const getV1C2cAdvertDetailApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertDetailApiRequest,
//   YapiGetV1C2cAdvertDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
