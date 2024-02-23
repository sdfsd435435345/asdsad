/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取币种资产↗](https://yapi.nbttfc365.com/project/44/interface/api/2987) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/asset/getCoinBalance`
 * @更新时间 `2022-12-08 14:42:16`
 */
export interface YapiGetV1AssetGetCoinBalanceApiRequest {
  /**
   * 币种id数组
   */
  coinId: string
}

/**
 * 接口 [获取币种资产↗](https://yapi.nbttfc365.com/project/44/interface/api/2987) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/asset/getCoinBalance`
 * @更新时间 `2022-12-08 14:42:16`
 */
export interface YapiGetV1AssetGetCoinBalanceApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1AssetGetCoinBalanceData
}
export interface YapiGetV1AssetGetCoinBalanceData {
  list?: YapiGetV1AssetGetCoinBalanceListData[]
}
export interface YapiGetV1AssetGetCoinBalanceListData {
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
// * [获取币种资产↗](https://yapi.nbttfc365.com/project/44/interface/api/2987)
// **/
// export const getV1AssetGetCoinBalanceApiRequest: MarkcoinRequest<
//   YapiGetV1AssetGetCoinBalanceApiRequest,
//   YapiGetV1AssetGetCoinBalanceApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/asset/getCoinBalance",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
