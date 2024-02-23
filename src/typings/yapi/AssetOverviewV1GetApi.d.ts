/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-总览（废弃）↗](https://yapi.nbttfc365.com/project/77/interface/api/8574) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/asset/overview`
 * @更新时间 `2023-06-12 14:44:00`
 */
export interface YapiGetV1AssetOverviewApiRequest {}

/**
 * 接口 [资产-总览（废弃）↗](https://yapi.nbttfc365.com/project/77/interface/api/8574) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/asset/overview`
 * @更新时间 `2023-06-12 14:44:00`
 */
export interface YapiGetV1AssetOverviewApiResponse {
  code?: number
  data?: YapiGetV1AssetOverviewData
  message?: string
}
export interface YapiGetV1AssetOverviewData {
  /**
   * usd总数量
   */
  totalAmount?: string
  financialAssetsData?: YapiGetV1AssetOverviewFinancialAssetsData
  coinAssetsData?: YapiGetV1AssetOverviewCoinAssetsData
  /**
   * 流动数量
   */
  availableAmount?: string
  /**
   * 冻结数量
   */
  lockAmount?: string
  /**
   * 仓位数量
   */
  positionAmount?: string
  futuresAssetsData?: YapiGetV1AssetOverviewFuturesAssetsData
  marginAssetsData?: YapiGetV1AssetOverviewMarginAssetsData
  /**
   * 币种（USDT）
   */
  coinName?: string
  /**
   * 币种代码
   */
  symbol?: string
  c2cAssetsData: YapiGetV1AssetOverviewC2CAssetsData
}
/**
 * 理财资产数据
 */
export interface YapiGetV1AssetOverviewFinancialAssetsData {
  totalAmount?: string
  availableAmount?: string
  lockAmount?: string
  coinName?: string
  symbol: string
}
/**
 * 币种资产数据
 */
export interface YapiGetV1AssetOverviewCoinAssetsData {
  /**
   * BTC总数量
   */
  totalAmount?: string
  /**
   * 可用资产
   */
  availableAmount?: string
  /**
   * 冻结资产
   */
  lockAmount?: string
  /**
   * 币种（BTC）
   */
  coinName?: string
  /**
   * 币种代码
   */
  symbol?: string
  /**
   * 仓位资产
   */
  positionAmount?: string
}
/**
 * 合约资产数据
 */
export interface YapiGetV1AssetOverviewFuturesAssetsData {
  /**
   * 总资产
   */
  totalAmount?: string
  coinName?: string
  /**
   * 币种代码
   */
  symbol?: string
}
/**
 * 杠杠资产数据
 */
export interface YapiGetV1AssetOverviewMarginAssetsData {
  totalAmount?: string
  availableAmount?: string
  lockAmount?: string
  coinName?: string
  symbol: string
}
/**
 * c2c资产数据
 */
export interface YapiGetV1AssetOverviewC2CAssetsData {
  totalAmount: string
  coinName: string
  symbol: string
  availableAmount: string
  lockAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-总览（废弃）↗](https://yapi.nbttfc365.com/project/77/interface/api/8574)
// **/
// export const getV1AssetOverviewApiRequest: MarkcoinRequest<
//   YapiGetV1AssetOverviewApiRequest,
//   YapiGetV1AssetOverviewApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/asset/overview",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [资产-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/389) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/asset/overview`
 * @更新时间 `2023-05-05 12:06:36`
 */
export interface YapiGetV1AssetOverviewApiRequest {}

/**
 * 接口 [资产-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/389) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/asset/overview`
 * @更新时间 `2023-05-05 12:06:36`
 */
export interface YapiGetV1AssetOverviewApiResponse {
  code?: number
  data?: YapiGetV1AssetOverviewData
  message?: string
}
export interface YapiGetV1AssetOverviewData {
  /**
   * usd总数量
   */
  totalAmount?: string
  financialAssetsData?: YapiGetV1AssetOverviewFinancialAssetsData
  coinAssetsData?: YapiGetV1AssetOverviewCoinAssetsData
  /**
   * 流动数量
   */
  availableAmount?: string
  /**
   * 冻结数量
   */
  lockAmount?: string
  /**
   * 仓位数量
   */
  positionAmount?: string
  futuresAssetsData?: YapiGetV1AssetOverviewFuturesAssetsData
  marginAssetsData?: YapiGetV1AssetOverviewMarginAssetsData
  /**
   * 币种（USDT）
   */
  coinName?: string
  /**
   * 币种代码
   */
  symbol?: string
  c2cAssetsData: YapiGetV1AssetOverviewC2CAssetsData
}
/**
 * 理财资产数据
 */
export interface YapiGetV1AssetOverviewFinancialAssetsData {
  totalAmount?: string
  availableAmount?: string
  lockAmount?: string
  coinName?: string
  symbol: string
}
/**
 * 币种资产数据
 */
export interface YapiGetV1AssetOverviewCoinAssetsData {
  /**
   * BTC总数量
   */
  totalAmount?: string
  /**
   * 可用资产
   */
  availableAmount?: string
  /**
   * 冻结资产
   */
  lockAmount?: string
  /**
   * 币种（BTC）
   */
  coinName?: string
  /**
   * 币种代码
   */
  symbol?: string
  /**
   * 仓位资产
   */
  positionAmount?: string
}
/**
 * 合约资产数据
 */
export interface YapiGetV1AssetOverviewFuturesAssetsData {
  /**
   * 总资产
   */
  totalAmount?: string
  coinName?: string
  /**
   * 币种代码
   */
  symbol?: string
}
/**
 * 杠杠资产数据
 */
export interface YapiGetV1AssetOverviewMarginAssetsData {
  totalAmount?: string
  availableAmount?: string
  lockAmount?: string
  coinName?: string
  symbol: string
}
/**
 * c2c资产数据
 */
export interface YapiGetV1AssetOverviewC2CAssetsData {
  totalAmount: string
  coinName: string
  symbol: string
  availableAmount: string
  lockAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-总览↗](https://yapi.nbttfc365.com/project/44/interface/api/389)
// **/
// export const getV1AssetOverviewApiRequest: MarkcoinRequest<
//   YapiGetV1AssetOverviewApiRequest,
//   YapiGetV1AssetOverviewApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/asset/overview",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
