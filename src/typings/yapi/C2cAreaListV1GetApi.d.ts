/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取可交易的区域列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4571) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/area/list`
 * @更新时间 `2023-09-04 17:33:13`
 */
export interface YapiGetV1C2cAreaListApiRequest {
  /**
   * 筛选关键字
   */
  searchKey?: string
  /**
   * 是否返回所有区域（true返回所有区域，false返回可以交易的区域）
   */
  returnAll?: string
}

/**
 * 接口 [获取可交易的区域列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4571) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/area/list`
 * @更新时间 `2023-09-04 17:33:13`
 */
export interface YapiGetV1C2cAreaListApiResponse {
  code?: number
  data?: YapiGetV1C2CAreaListData[]
  message?: string
}
export interface YapiGetV1C2CAreaListData {
  /**
   * 国家缩写，用于拉取图片（跟注册页面相同）
   */
  countryAbbreviation: string
  areaRiskWarn: YapiGetV1C2CAreaAreaRiskWarnListData
  /**
   *  发布广告要求（NONE没要求，MERCHANT认证商家）
   */
  advertRequire: string
  /**
   * 支付方式（BANK、）
   */
  payments: string[] | null
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
  paymentSupportItems: YapiGetV1C2CAreaPaymentSupportItemsListData
}
/**
 * 风险提示
 */
export interface YapiGetV1C2CAreaAreaRiskWarnListData {
  /**
   * 区域id
   */
  areaId: string
  /**
   * 是否强制阅读
   */
  isForceRead: string
  businessId: string
  id: string
  /**
   * 标题
   */
  title: string
  /**
   * 内容
   */
  content: string
}
export interface YapiGetV1C2CAreaPaymentSupportItemsListData {
  'key(对应支付方式)': string[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取可交易的区域列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4571)
// **/
// export const getV1C2cAreaListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAreaListApiRequest,
//   YapiGetV1C2cAreaListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/area/list",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取可交易的区域列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6384) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/area/list`
 * @更新时间 `2023-06-08 16:46:50`
 */
export interface YapiGetV1C2cAreaListApiRequest {
  /**
   * 筛选关键字
   */
  searchKey?: string
  /**
   * 是否返回所有区域（true返回所有区域，false返回可以交易的区域）
   */
  returnAll?: string
}

/**
 * 接口 [获取可交易的区域列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6384) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/area/list`
 * @更新时间 `2023-06-08 16:46:50`
 */
export interface YapiGetV1C2cAreaListApiResponse {
  code?: number
  data?: YapiGetV1C2CAreaListData[]
  message?: string
}
export interface YapiGetV1C2CAreaListData {
  /**
   * 国家缩写，用于拉取图片（跟注册页面相同）
   */
  countryAbbreviation: string
  areaRiskWarn: YapiGetV1C2CAreaAreaRiskWarnListData
  /**
   *  发布广告要求（NONE没要求，MERCHANT认证商家）
   */
  advertRequire: string
  /**
   * 支付方式（BANK、）
   */
  payments: string[] | null
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
}
/**
 * 风险提示
 */
export interface YapiGetV1C2CAreaAreaRiskWarnListData {
  /**
   * 区域id
   */
  areaId: string
  /**
   * 是否强制阅读
   */
  isForceRead: string
  businessId: string
  id: string
  /**
   * 标题
   */
  title: string
  /**
   * 内容
   */
  content: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取可交易的区域列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6384)
// **/
// export const getV1C2cAreaListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAreaListApiRequest,
//   YapiGetV1C2cAreaListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/area/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
