/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产列表接口↗](https://yapi.nbttfc365.com/project/73/interface/api/10354) 的 **请求类型**
 *
 * @分类 [FastPay↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_744)
 * @请求头 `GET /v1/c2c/balance/all`
 * @更新时间 `2023-06-27 08:31:03`
 */
export interface YapiGetV1C2cBalanceAllApiRequest {
  pageNum: string
  pageSize: string
  /**
   * 是否过滤资产等于0的数据
   */
  isGt?: string
  searchKey?: string
}

/**
 * 接口 [资产列表接口↗](https://yapi.nbttfc365.com/project/73/interface/api/10354) 的 **返回类型**
 *
 * @分类 [FastPay↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_744)
 * @请求头 `GET /v1/c2c/balance/all`
 * @更新时间 `2023-06-27 08:31:03`
 */
export interface YapiGetV1C2cBalanceAllApiResponse {
  code?: number
  data?: YapiGetV1C2CBalanceAllData
  message?: string
}
export interface YapiGetV1C2CBalanceAllData {
  /**
   * 总数
   */
  total?: number
  /**
   * 每页数量
   */
  pageSize?: number
  list?: YapiGetV1C2CBalanceAllListData[]
  /**
   * 当前页码
   */
  pageNum?: number
}
export interface YapiGetV1C2CBalanceAllListData {
  /**
   * 币种代码（匹配汇率）
   */
  symbol?: string
  /**
   * 币种app端logo
   */
  appLogo?: string
  /**
   * BTC估值
   */
  btcAmount?: string
  /**
   * 币种id
   */
  coinId?: string
  /**
   * 总数量
   */
  totalAmount?: string
  /**
   * usd估值
   */
  usdBalance?: string
  /**
   * 可用数量
   */
  availableAmount?: string
  /**
   * 冻结数量
   */
  lockAmount?: string
  /**
   * 币种web端logo
   */
  webLogo?: string
  /**
   * 币全名（展示）
   */
  coinFullName?: string
  /**
   * 下单锁定
   */
  orderLockAmount?: string
  /**
   * 币种名称（展示）
   */
  coinName?: string
  /**
   * 仓位数量
   */
  positionAmount?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产列表接口↗](https://yapi.nbttfc365.com/project/73/interface/api/10354)
// **/
// export const getV1C2cBalanceAllApiRequest: MarkcoinRequest<
//   YapiGetV1C2cBalanceAllApiRequest,
//   YapiGetV1C2cBalanceAllApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/balance/all",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
