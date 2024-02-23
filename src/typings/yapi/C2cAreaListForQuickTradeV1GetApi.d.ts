/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取快捷交易的交易区域↗](https://yapi.nbttfc365.com/project/73/interface/api/5609) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/area/listForQuickTrade`
 * @更新时间 `2023-04-24 10:22:59`
 */
export interface YapiGetV1C2cAreaListForQuickTradeApiRequest {
  /**
   * 方向，BUY购买，SELL出售
   */
  side: string
  /**
   * 搜索关键词
   */
  searchKey?: string
}

/**
 * 接口 [获取快捷交易的交易区域↗](https://yapi.nbttfc365.com/project/73/interface/api/5609) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/area/listForQuickTrade`
 * @更新时间 `2023-04-24 10:22:59`
 */
export interface YapiGetV1C2cAreaListForQuickTradeApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1C2CAreaForQuickTradeListData[]
}
export interface YapiGetV1C2CAreaForQuickTradeListData {
  /**
   * 国家缩写，用于拉取图片（跟注册页面相同）
   */
  countryAbbreviation: string
  areaRiskWarn: YapiGetV1C2CAreaForQuickTradeAreaRiskWarnListData
  /**
   *  发布广告要求（NONE没要求，MERCHANT认证商家）
   */
  advertRequire: string
  /**
   * 支付方式（BANK、）
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
  freezeTime: number
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
  /**
   * 是否有可交易的币种
   */
  hasCoins: boolean
}
/**
 * 风险提示
 */
export interface YapiGetV1C2CAreaForQuickTradeAreaRiskWarnListData {
  areaId?: string
  isForceRead?: string
  businessId?: string
  id?: string
  title?: string
  content?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取快捷交易的交易区域↗](https://yapi.nbttfc365.com/project/73/interface/api/5609)
// **/
// export const getV1C2cAreaListForQuickTradeApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAreaListForQuickTradeApiRequest,
//   YapiGetV1C2cAreaListForQuickTradeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/area/listForQuickTrade",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取快捷交易的交易区域↗](https://yapi.nbttfc365.com/project/77/interface/api/6389) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/area/listForQuickTrade`
 * @更新时间 `2023-06-08 16:46:50`
 */
export interface YapiGetV1C2cAreaListForQuickTradeApiRequest {
  /**
   * 方向，BUY购买，SELL出售
   */
  side: string
  /**
   * 搜索关键词
   */
  searchKey?: string
}

/**
 * 接口 [获取快捷交易的交易区域↗](https://yapi.nbttfc365.com/project/77/interface/api/6389) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/area/listForQuickTrade`
 * @更新时间 `2023-06-08 16:46:50`
 */
export interface YapiGetV1C2cAreaListForQuickTradeApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1C2CAreaForQuickTradeListData[]
}
export interface YapiGetV1C2CAreaForQuickTradeListData {
  /**
   * 国家缩写，用于拉取图片（跟注册页面相同）
   */
  countryAbbreviation: string
  areaRiskWarn: YapiGetV1C2CAreaForQuickTradeAreaRiskWarnListData
  /**
   *  发布广告要求（NONE没要求，MERCHANT认证商家）
   */
  advertRequire: string
  /**
   * 支付方式（BANK、）
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
  freezeTime: number
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
  /**
   * 是否有可交易的币种
   */
  hasCoins: boolean
}
/**
 * 风险提示
 */
export interface YapiGetV1C2CAreaForQuickTradeAreaRiskWarnListData {
  areaId?: string
  isForceRead?: string
  businessId?: string
  id?: string
  title?: string
  content?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取快捷交易的交易区域↗](https://yapi.nbttfc365.com/project/77/interface/api/6389)
// **/
// export const getV1C2cAreaListForQuickTradeApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAreaListForQuickTradeApiRequest,
//   YapiGetV1C2cAreaListForQuickTradeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/area/listForQuickTrade",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
