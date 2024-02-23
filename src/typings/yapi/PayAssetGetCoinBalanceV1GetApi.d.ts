/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取币种资产↗](https://yapi.nbttfc365.com/project/77/interface/api/8504) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/asset/getCoinBalance`
 * @更新时间 `2023-06-12 14:37:04`
 */
export interface YapiGetV1PayAssetGetCoinBalanceApiRequest {
  /**
   * 币种id数组
   */
  coinId: string
}

/**
 * 接口 [获取币种资产↗](https://yapi.nbttfc365.com/project/77/interface/api/8504) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/asset/getCoinBalance`
 * @更新时间 `2023-06-12 14:37:04`
 */
export interface YapiGetV1PayAssetGetCoinBalanceApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PayAssetGetCoinBalanceData
}
export interface YapiGetV1PayAssetGetCoinBalanceData {
  list?: YapiGetV1PayAssetGetCoinBalanceListData[]
}
export interface YapiGetV1PayAssetGetCoinBalanceListData {
  /**
   * app图标
   */
  appLogo: string
  /**
   * web图标
   */
  webLogo: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 币全名
   */
  coinFullName: string
  /**
   * 可用数量
   */
  availableAmount: string
  /**
   * 冻结数量
   */
  lockAmount: string
  /**
   * 仓位数量
   */
  positionAmount: string
  /**
   * 总数量
   */
  totalAmount: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 钱包币种代码
   */
  symbol: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取币种资产↗](https://yapi.nbttfc365.com/project/77/interface/api/8504)
// **/
// export const getV1PayAssetGetCoinBalanceApiRequest: MarkcoinRequest<
//   YapiGetV1PayAssetGetCoinBalanceApiRequest,
//   YapiGetV1PayAssetGetCoinBalanceApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/asset/getCoinBalance",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
