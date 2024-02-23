/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-总览（内部接口）↗](https://yapi.nbttfc365.com/project/77/interface/api/8579) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /inner/v1/asset/overview/{businessId}/{uid}`
 * @更新时间 `2023-06-08 16:52:52`
 */
export interface YapiGetInnerV1AssetOverviewBusinessIdUidApiRequest {
  businessId: string
  uid: string
}

/**
 * 接口 [资产-总览（内部接口）↗](https://yapi.nbttfc365.com/project/77/interface/api/8579) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /inner/v1/asset/overview/{businessId}/{uid}`
 * @更新时间 `2023-06-08 16:52:52`
 */
export interface YapiGetInnerV1AssetOverviewBusinessIdUidApiResponse {
  code?: number
  data?: YapiGetInnerV1AssetOverviewBusinessIdUidData
  message?: string
}
export interface YapiGetInnerV1AssetOverviewBusinessIdUidData {
  /**
   * usd总数量
   */
  totalAmount?: string
  financialAssetsData?: YapiGetInnerV1AssetOverviewBusinessIdUidFinancialAssetsData
  coinAssetsData?: YapiGetInnerV1AssetOverviewBusinessIdUidCoinAssetsData
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
  futuresAssetsData?: YapiGetInnerV1AssetOverviewBusinessIdUidFuturesAssetsData
  marginAssetsData?: YapiGetInnerV1AssetOverviewBusinessIdUidMarginAssetsData
  /**
   * 币种（USDT）
   */
  coinName?: string
  /**
   * 币种代码
   */
  symbol?: string
  c2cAssetsData: YapiGetInnerV1AssetOverviewBusinessIdUidC2CAssetsData
}
/**
 * 理财资产数据
 */
export interface YapiGetInnerV1AssetOverviewBusinessIdUidFinancialAssetsData {
  totalAmount?: string
  availableAmount?: string
  lockAmount?: string
  coinName?: string
  symbol: string
}
/**
 * 币种资产数据
 */
export interface YapiGetInnerV1AssetOverviewBusinessIdUidCoinAssetsData {
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
export interface YapiGetInnerV1AssetOverviewBusinessIdUidFuturesAssetsData {
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
export interface YapiGetInnerV1AssetOverviewBusinessIdUidMarginAssetsData {
  totalAmount?: string
  availableAmount?: string
  lockAmount?: string
  coinName?: string
  symbol: string
}
/**
 * c2c资产数据
 */
export interface YapiGetInnerV1AssetOverviewBusinessIdUidC2CAssetsData {
  totalAmount: string
  coinName: string
  symbol: string
  availableAmount: string
  lockAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-总览（内部接口）↗](https://yapi.nbttfc365.com/project/77/interface/api/8579)
// **/
// export const getInnerV1AssetOverviewBusinessIdUidApiRequest: MarkcoinRequest<
//   YapiGetInnerV1AssetOverviewBusinessIdUidApiRequest,
//   YapiGetInnerV1AssetOverviewBusinessIdUidApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/asset/overview/{businessId}/{uid}",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [资产-总览（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/5824) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /inner/v1/asset/overview/{businessId}/{uid}`
 * @更新时间 `2023-05-16 14:18:51`
 */
export interface YapiGetInnerV1AssetOverviewBusinessIdUidApiRequest {
  businessId: string
  uid: string
}

/**
 * 接口 [资产-总览（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/5824) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /inner/v1/asset/overview/{businessId}/{uid}`
 * @更新时间 `2023-05-16 14:18:51`
 */
export interface YapiGetInnerV1AssetOverviewBusinessIdUidApiResponse {
  code?: number
  data?: YapiGetInnerV1AssetOverviewBusinessIdUidData
  message?: string
}
export interface YapiGetInnerV1AssetOverviewBusinessIdUidData {
  /**
   * usd总数量
   */
  totalAmount?: string
  financialAssetsData?: YapiGetInnerV1AssetOverviewBusinessIdUidFinancialAssetsData
  coinAssetsData?: YapiGetInnerV1AssetOverviewBusinessIdUidCoinAssetsData
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
  futuresAssetsData?: YapiGetInnerV1AssetOverviewBusinessIdUidFuturesAssetsData
  marginAssetsData?: YapiGetInnerV1AssetOverviewBusinessIdUidMarginAssetsData
  /**
   * 币种（USDT）
   */
  coinName?: string
  /**
   * 币种代码
   */
  symbol?: string
  c2cAssetsData: YapiGetInnerV1AssetOverviewBusinessIdUidC2CAssetsData
}
/**
 * 理财资产数据
 */
export interface YapiGetInnerV1AssetOverviewBusinessIdUidFinancialAssetsData {
  totalAmount?: string
  availableAmount?: string
  lockAmount?: string
  coinName?: string
  symbol: string
}
/**
 * 币种资产数据
 */
export interface YapiGetInnerV1AssetOverviewBusinessIdUidCoinAssetsData {
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
export interface YapiGetInnerV1AssetOverviewBusinessIdUidFuturesAssetsData {
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
export interface YapiGetInnerV1AssetOverviewBusinessIdUidMarginAssetsData {
  totalAmount?: string
  availableAmount?: string
  lockAmount?: string
  coinName?: string
  symbol: string
}
/**
 * c2c资产数据
 */
export interface YapiGetInnerV1AssetOverviewBusinessIdUidC2CAssetsData {
  totalAmount: string
  coinName: string
  symbol: string
  availableAmount: string
  lockAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-总览（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/5824)
// **/
// export const getInnerV1AssetOverviewBusinessIdUidApiRequest: MarkcoinRequest<
//   YapiGetInnerV1AssetOverviewBusinessIdUidApiRequest,
//   YapiGetInnerV1AssetOverviewBusinessIdUidApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/asset/overview/{businessId}/{uid}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
