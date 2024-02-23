/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-币币资产列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8564) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/asset/coin/balance`
 * @更新时间 `2023-06-12 14:43:09`
 */
export interface YapiGetV1PayAssetCoinBalanceApiRequest {
  pageNum: string
  pageSize: string
  /**
   * 过滤为0的资产，交易展示持仓数据时传true，其他false
   */
  isGt?: string
}

/**
 * 接口 [资产-币币资产列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8564) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/asset/coin/balance`
 * @更新时间 `2023-06-12 14:43:09`
 */
export interface YapiGetV1PayAssetCoinBalanceApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PayAssetCoinBalanceData
}
export interface YapiGetV1PayAssetCoinBalanceData {
  /**
   * 当前页码
   */
  pageNum?: number
  /**
   * 每页数量
   */
  pageSize?: number
  /**
   * 总条数
   */
  total?: number
  list?: YapiGetV1PayAssetCoinBalanceListData[]
}
export interface YapiGetV1PayAssetCoinBalanceListData {
  /**
   * 币种app端logo
   */
  appLogo: string
  /**
   * 币种web端logo
   */
  webLogo: string
  /**
   * 币种名称（展示）
   */
  coinName: string
  /**
   * 币全名（展示）
   */
  coinFullName: string
  /**
   * 可用数量
   */
  availableAmount: number
  /**
   * 冻结数量
   */
  lockAmount: number
  /**
   * 总数量
   */
  totalAmount: number
  /**
   * 币种id
   */
  coinId: string
  /**
   * 下单锁定
   */
  orderLockAmount: number
  /**
   * BTC估值
   */
  btcAmount: number
  /**
   * usd估值
   */
  usdBalance: number
  /**
   * 币种代码（匹配汇率）
   */
  symbol: string
  /**
   * 仓位数量
   */
  positionAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币币资产列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8564)
// **/
// export const getV1PayAssetCoinBalanceApiRequest: MarkcoinRequest<
//   YapiGetV1PayAssetCoinBalanceApiRequest,
//   YapiGetV1PayAssetCoinBalanceApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/asset/coin/balance",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
