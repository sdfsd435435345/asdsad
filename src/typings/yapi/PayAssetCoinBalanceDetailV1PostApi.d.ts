/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币种资产详情↗](https://yapi.nbttfc365.com/project/77/interface/api/8459) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/asset/coin/balance/detail`
 * @更新时间 `2023-06-12 14:18:34`
 */
export interface YapiPostV1PayAssetCoinBalanceDetailApiRequest {
  /**
   * 币种id
   */
  coinId: string
}

/**
 * 接口 [币种资产详情↗](https://yapi.nbttfc365.com/project/77/interface/api/8459) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/asset/coin/balance/detail`
 * @更新时间 `2023-06-12 14:18:34`
 */
export interface YapiPostV1PayAssetCoinBalanceDetailApiResponse {
  message?: string
  data?: YapiPostV1PayAssetCoinBalanceDetailData
  code?: number
}
export interface YapiPostV1PayAssetCoinBalanceDetailData {
  /**
   * 总资产数
   */
  totalAmount?: string
  /**
   * 可用数量
   */
  availableAmount?: string
  /**
   * 仓位资产
   */
  positionAmount?: string
  /**
   * 冻结资产
   */
  lockAmount?: string
  lockAmountData?: YapiPostV1PayAssetCoinBalanceDetailLockAmountData
  positionAmountData?: YapiPostV1PayAssetCoinBalanceDetailPositionAmountData
  /**
   * 币种名称
   */
  coinName: string
  appLogo: string
  webLogo: string
  /**
   * 币种代码
   */
  symbol: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 币种全称
   */
  coinFullName: string
}
export interface YapiPostV1PayAssetCoinBalanceDetailLockAmountData {
  /**
   * 现货下单冻结资产
   */
  spotLockAssets?: string
  /**
   * 杠杆下单冻结资产
   */
  marginLockAssets?: string
  /**
   * 合约下单冻结资产
   */
  swapLockAssets?: string
  /**
   * 提现冻结资产
   */
  withdrawLockAssets?: string
}
/**
 * 仓位资产明细
 */
export interface YapiPostV1PayAssetCoinBalanceDetailPositionAmountData {
  /**
   * 合约资产
   */
  futuresAssets?: string
  /**
   * 杠杠资产
   */
  marginAssets?: string
  /**
   * 理财资产
   */
  financialAssets?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [币种资产详情↗](https://yapi.nbttfc365.com/project/77/interface/api/8459)
// **/
// export const postV1PayAssetCoinBalanceDetailApiRequest: MarkcoinRequest<
//   YapiPostV1PayAssetCoinBalanceDetailApiRequest,
//   YapiPostV1PayAssetCoinBalanceDetailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/pay/asset/coin/balance/detail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
