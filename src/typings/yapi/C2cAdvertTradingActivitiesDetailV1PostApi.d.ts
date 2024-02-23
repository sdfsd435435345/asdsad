/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [盘口详情↗](https://yapi.nbttfc365.com/project/73/interface/api/12029) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/tradingActivitiesDetail`
 * @更新时间 `2023-08-23 10:18:29`
 */
export interface YapiPostV1C2cAdvertTradingActivitiesDetailApiRequest {
  /**
   * 价格
   */
  price: string
  /**
   * 广告方向BUY 、SELL
   */
  advertDirect: string
  /**
   * 区域id
   */
  areaId: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 链路类型
   */
  chains?: string[]
  pageNum: string
  pageSize: string
  /**
   * 支付方式
   */
  payments?: string[]
  /**
   * 广告单类型
   */
  advertTypeCds?: string[]
  /**
   * 排序方式(ORDER_NUM、ORDER_RATE)
   */
  sort?: string
  /**
   * 购买方式输入值
   */
  amount?: string
  /**
   * 购买方式(金额AMOUNT、数量NUMBER)
   */
  buyType?: string
  /**
   * 交易类型INSIDE、OUTSIDE
   */
  tradeTypeCds?: string[]
}

/**
 * 接口 [盘口详情↗](https://yapi.nbttfc365.com/project/73/interface/api/12029) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/tradingActivitiesDetail`
 * @更新时间 `2023-08-23 10:18:29`
 */
export interface YapiPostV1C2cAdvertTradingActivitiesDetailApiResponse {
  code?: number
  data?: YapiPostV1C2CAdvertTradingActivitiesDetailData
  message?: string
}
export interface YapiPostV1C2CAdvertTradingActivitiesDetailData {
  adverts?: YapiPostV1C2CAdvertTradingActivitiesDetailAdvertsData
  /**
   * 币种logo
   */
  coinWebLogo?: string
  /**
   * 广告方向BUY、SELL
   */
  advertDirect?: string
  /**
   * 国家图标
   */
  countryAbbreviation?: string
  /**
   * 区域名字
   */
  areaName?: string
  /**
   * 币种logo
   */
  coinAppLogo?: string
  /**
   * 价格
   */
  price?: string
  /**
   * 支付方式下拉框
   */
  payments?: string[]
  /**
   * 法币符号
   */
  currencySymbol?: string
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 该区域限额最小值（即最小币种数量）
   */
  minAmount: string
  /**
   * 该区域限额最大值（即最大币种数量）
   */
  maxAmount: string
  /**
   * 该区域限额最小金额（即最小法币）
   */
  minAreaAmount: string
  /**
   * 该区域限额最大金额（即最大法币）
   */
  maxAreaAmount: string
  area: YapiPostV1C2CAdvertTradingActivitiesDetailAreaData
}
export interface YapiPostV1C2CAdvertTradingActivitiesDetailAdvertsData {
  /**
   * 数据条数
   */
  total?: string
  /**
   * 页
   */
  pageSize?: number
  /**
   * 广告列表
   */
  list?: YapiPostV1C2CAdvertTradingActivitiesDetailListAdvertsData[]
  pageNum?: number
}
export interface YapiPostV1C2CAdvertTradingActivitiesDetailListAdvertsData {
  /**
   * 单笔限数-最小值（对应币种）
   */
  minAmount: string
  /**
   * 转账时间（分钟）
   */
  transferTimeLimit: number
  /**
   * 支付方式
   */
  payments: string[]
  /**
   * 单笔限数-最小值 对应的法币
   */
  minAreaAmount: string
  /**
   * 最小成单量
   */
  completedOrderCount: number
  /**
   * 广告方向BUY、SELL
   */
  advertDirectCd: string
  /**
   * 广告方UID
   */
  uid: string
  /**
   * 区域名字
   */
  areaName: string
  /**
   * 价格
   */
  price: string
  /**
   * 单笔限数-最大值 对应的法币
   */
  maxAreaAmount: string
  /**
   * NEED_ELEMENTARY 需要KYC、NEED_SENIOR 需要高级认证、NEED_ENTERPRISE 需要企业认证、NEED_COMPLETED_COUNT 成单量不满足条件
   */
  notCanTradeType: string
  /**
   * 单笔限数-最大值(对应币种)
   */
  maxAmount: string
  /**
   * 支付方式详情
   */
  paymentDetails: YapiPostV1C2CAdvertTradingActivitiesDetailListPaymentDetailsListAdvertsData[]
  /**
   * 数量
   */
  quantity: string
  /**
   * 昵称
   */
  nickName: string
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
  avatar: string
  /**
   * KYC等级
   */
  certificationLevelCd: string
  /**
   * 广告id
   */
  advertId: string
  /**
   * 是否能交易
   */
  canTrade: boolean
  /**
   * 币种id
   */
  coinId: string
  /**
   * 成单率
   */
  completedOrderRate: string
  /**
   * 备注
   */
  advertRemark: string | null
  /**
   * 主链地址
   */
  mainchainAddrs: YapiPostV1C2CAdvertTradingActivitiesDetailListMainchainAddrsListAdvertsData[]
  /**
   * 交易类型INSIDE、OUTSIDE
   */
  tradeTypeCd: string
  /**
   * 支付方式
   */
  newPayments: string[]
}
export interface YapiPostV1C2CAdvertTradingActivitiesDetailListPaymentDetailsListAdvertsData {
  /**
   * 二维码地址
   */
  qrCodeAddr: string
  /**
   * 商户id
   */
  businessId: string
  /**
   * 支付方式
   */
  paymentTypeCd: string
  /**
   * 收付类型(IN收入 OUT支出)
   */
  type: string
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
   * 排序
   */
  sort: number
  /**
   * id
   */
  id: string
}
export interface YapiPostV1C2CAdvertTradingActivitiesDetailListMainchainAddrsListAdvertsData {
  name: string
  address: string
  memo: string
  id: string
}
export interface YapiPostV1C2CAdvertTradingActivitiesDetailAreaData {
  /**
   * 国家缩写，用于拉取图片（跟注册页面相同）
   */
  countryAbbreviation: string
  /**
   *  发布广告要求（NONE没要求，MERCHANT认证商家）
   */
  advertRequire: string
  /**
   * 支付方式
   */
  payments: string[]
  /**
   * 价格精度
   */
  precision: number
  /**
   * 货币符号
   */
  currencySymbol: string
  /**
   * 冻结时间
   */
  freezeTime: string
  /**
   * 交易状态（ENABLE、DISABLE）
   */
  statusCd: string
  /**
   * 默认显示类型ALL 全部、INSIDE 站内、OUTSIDE 站外
   */
  defaultClientTypeCd: string
  /**
   * 是非允许站外交易（YES可以 NO不可以）
   */
  canOutTrade: string
  /**
   * 序号
   */
  sequence: number
  /**
   * 法币id
   */
  legalCurrencyId: string
  /**
   * 交易区名字
   */
  currencyName: string
  /**
   * 当前用户是否可以发布广告
   */
  canPublishAdvert: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [盘口详情↗](https://yapi.nbttfc365.com/project/73/interface/api/12029)
// **/
// export const postV1C2cAdvertTradingActivitiesDetailApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertTradingActivitiesDetailApiRequest,
//   YapiPostV1C2cAdvertTradingActivitiesDetailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/tradingActivitiesDetail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
