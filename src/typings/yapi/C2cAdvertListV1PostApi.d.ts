/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取商户广告列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4615) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/list`
 * @更新时间 `2023-05-11 15:16:09`
 */
export interface YapiPostV1C2cAdvertListApiRequest {
  /**
   * 币种ids
   */
  coinIds?: string[]
  /**
   * 广告方向集合
   */
  advertDirectCds?: string[]
  /**
   * 交易类型集合
   */
  tradeTypeCds?: string[]
  /**
   * 1上架中 2已下架
   */
  advertStatus: string
  /**
   * 页
   */
  pageNum: number
  /**
   * 条数
   */
  pageSize: number
  /**
   * 搜索的数量
   */
  amount?: string
  /**
   * 查询别人广告的uid，不传就返回当前用户的广告数据
   */
  uid?: number
  /**
   * 交易区域集合
   */
  areaIds?: string[]
  /**
   * 广告id
   */
  advertId?: string
  /**
   * 法币名称
   */
  areaName: string
  /**
   * 支付方式
   */
  payments?: string[]
}

/**
 * 接口 [获取商户广告列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4615) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/list`
 * @更新时间 `2023-05-11 15:16:09`
 */
export interface YapiPostV1C2cAdvertListApiResponse {
  code?: number
  data?: YapiPostV1C2CAdvertListData[]
  message?: string
}
export interface YapiPostV1C2CAdvertListData {
  /**
   * 最小金额
   */
  minAmount: string
  /**
   * 有效期
   */
  validDate: number
  /**
   * 支付方式
   */
  payments: string[]
  /**
   * 备注
   */
  remark: string
  /**
   * 服务人数，广告主才有
   */
  customerCnt: number
  /**
   * 成单数大于
   */
  completedOrderCount: number
  /**
   * 广告方向(BUY SELL)
   */
  advertDirectCd: string
  /**
   * 下架时间
   */
  removalTime: number | null
  /**
   * 价格
   */
  price: string
  /**
   * 最大金额
   */
  maxAmount: string
  /**
   * 支付方式详情(参考首页广告接口)
   */
  paymentDetails: {}
  /**
   * 下架详情
   */
  removalReason: string | null
  /**
   * 数量
   */
  quantity: string
  /**
   * 昵称
   */
  nickName: null
  /**
   * 订单数
   */
  orderCount: number
  /**
   * 是否是商户
   */
  merchant: boolean
  /**
   * 认证等级(ELEMENTARY初级认证 SENIOR高级认证 ENTERPRISE企业认证)
   */
  certificationLevelCd: string
  /**
   * 头像
   */
  avatar: null
  /**
   * 广告id
   */
  advertId: string
  /**
   * 是否在线
   */
  onLine: boolean
  /**
   * 币种id
   */
  coinId: string
  /**
   * 交易总量
   */
  totalOrderAmount: string
  /**
   * 创建时间
   */
  createTime: number
  /**
   * 主链地址
   */
  mainchainAddrs: YapiPostV1C2CAdvertListMainchainAddrsListData[]
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 交易类型(INSIDE OUTSIDE)
   */
  tradeTypeCd: string
  /**
   * 广告状态（ON_SHELVES上架中、EXPIRED到期下架、TAKE_OFF_SHELVES_MERCHANT商家下架、TAKE_OFF_SHELVES_SYSTEM系统下架、DEALING交易中、WIDTHDRAW撤回中）
   */
  statusCd: string
  /**
   * 区域名字
   */
  areaName: string
  /**
   * 法币符号
   */
  currencySymbol: string
  /**
   * 新的广告状态（跟商户关联）(RESTING休息中、NORMAL正常、DEALING交易中)
   */
  advertNewStatus: string
  /**
   * 是否置灰
   */
  grey: boolean
  /**
   * 是否可交易
   */
  canTrade: boolean
  /**
   * 新增支付方式（返回是否需要置灰）
   */
  newPayments: YapiPostV1C2CAdvertListNewPaymentsListData[]
  /**
   * 法币限额最小值
   */
  minAreaAmount: string
  /**
   * 法币限额最大值
   */
  maxAreaAmount: string
}
export interface YapiPostV1C2CAdvertListMainchainAddrsListData {
  /**
   * 地址
   */
  address: null
  /**
   * 类型 TRC20
   */
  name: string
  /**
   * memo
   */
  memo: null
}
export interface YapiPostV1C2CAdvertListNewPaymentsListData {
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
// * [获取商户广告列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4615)
// **/
// export const postV1C2cAdvertListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertListApiRequest,
//   YapiPostV1C2cAdvertListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/list",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [获取商户广告列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6474) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `POST /v1/c2c/advert/list`
 * @更新时间 `2023-06-08 16:46:58`
 */
export interface YapiPostV1C2cAdvertListApiRequest {
  /**
   * 币种ids
   */
  coinIds?: string[]
  /**
   * 广告方向集合
   */
  advertDirectCds?: string[]
  /**
   * 交易类型集合
   */
  tradeTypeCds?: string[]
  /**
   * 1上架中 2已下架
   */
  advertStatus: string
  /**
   * 页
   */
  pageNum: number
  /**
   * 条数
   */
  pageSize: number
  /**
   * 搜索的数量
   */
  amount?: string
  /**
   * 查询别人广告的uid，不传就返回当前用户的广告数据
   */
  uid?: number
  /**
   * 交易区域集合
   */
  areaIds?: string[]
  /**
   * 广告id
   */
  advertId?: string
  /**
   * 法币名称
   */
  areaName: string
  /**
   * 支付方式
   */
  payments?: string[]
}

/**
 * 接口 [获取商户广告列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6474) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `POST /v1/c2c/advert/list`
 * @更新时间 `2023-06-08 16:46:58`
 */
export interface YapiPostV1C2cAdvertListApiResponse {
  code?: number
  data?: YapiPostV1C2CAdvertListData[]
  message?: string
}
export interface YapiPostV1C2CAdvertListData {
  /**
   * 最小金额
   */
  minAmount: string
  /**
   * 有效期
   */
  validDate: number
  /**
   * 支付方式
   */
  payments: string[]
  /**
   * 备注
   */
  remark: string
  /**
   * 服务人数，广告主才有
   */
  customerCnt: number
  /**
   * 成单数大于
   */
  completedOrderCount: number
  /**
   * 广告方向(BUY SELL)
   */
  advertDirectCd: string
  /**
   * 下架时间
   */
  removalTime: number | null
  /**
   * 价格
   */
  price: string
  /**
   * 最大金额
   */
  maxAmount: string
  /**
   * 支付方式详情(参考首页广告接口)
   */
  paymentDetails: {}
  /**
   * 下架详情
   */
  removalReason: string | null
  /**
   * 数量
   */
  quantity: string
  /**
   * 昵称
   */
  nickName: null
  /**
   * 订单数
   */
  orderCount: number
  /**
   * 是否是商户
   */
  merchant: boolean
  /**
   * 认证等级(ELEMENTARY初级认证 SENIOR高级认证 ENTERPRISE企业认证)
   */
  certificationLevelCd: string
  /**
   * 头像
   */
  avatar: null
  /**
   * 广告id
   */
  advertId: string
  /**
   * 是否在线
   */
  onLine: boolean
  /**
   * 币种id
   */
  coinId: string
  /**
   * 交易总量
   */
  totalOrderAmount: string
  /**
   * 创建时间
   */
  createTime: number
  /**
   * 主链地址
   */
  mainchainAddrs: YapiPostV1C2CAdvertListMainchainAddrsListData[]
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 交易类型(INSIDE OUTSIDE)
   */
  tradeTypeCd: string
  /**
   * 广告状态（ON_SHELVES上架中、EXPIRED到期下架、TAKE_OFF_SHELVES_MERCHANT商家下架、TAKE_OFF_SHELVES_SYSTEM系统下架、DEALING交易中、WIDTHDRAW撤回中）
   */
  statusCd: string
  /**
   * 区域名字
   */
  areaName: string
  /**
   * 法币符号
   */
  currencySymbol: string
  /**
   * 新的广告状态（跟商户关联）(RESTING休息中、NORMAL正常、DEALING交易中)
   */
  advertNewStatus: string
  /**
   * 是否置灰
   */
  grey: boolean
  /**
   * 是否可交易
   */
  canTrade: boolean
  /**
   * 新增支付方式（返回是否需要置灰）
   */
  newPayments: YapiPostV1C2CAdvertListNewPaymentsListData[]
  /**
   * 法币限额最小值
   */
  minAreaAmount: string
  /**
   * 法币限额最大值
   */
  maxAreaAmount: string
}
export interface YapiPostV1C2CAdvertListMainchainAddrsListData {
  /**
   * 地址
   */
  address: null
  /**
   * 类型 TRC20
   */
  name: string
  /**
   * memo
   */
  memo: null
}
export interface YapiPostV1C2CAdvertListNewPaymentsListData {
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
// * [获取商户广告列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6474)
// **/
// export const postV1C2cAdvertListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertListApiRequest,
//   YapiPostV1C2cAdvertListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/list",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
