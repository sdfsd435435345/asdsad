/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-币币资产列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6314) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/assert/coin/balance`
 * @更新时间 `2023-06-12 14:15:47`
 */
export interface YapiGetV1PayAssertCoinBalanceApiRequest {
  /**
   * 币种 可like
   */
  coin: string
  /**
   * 是否过滤等于0的币种资产
   */
  isGt: string
  /**
   * 页数
   */
  pageNum: string
  /**
   * 每页记录条数
   */
  pageSize: string
}

/**
 * 接口 [资产-币币资产列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6314) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/assert/coin/balance`
 * @更新时间 `2023-06-12 14:15:47`
 */
export interface YapiGetV1PayAssertCoinBalanceApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PayAssertCoinBalanceData
}
export interface YapiGetV1PayAssertCoinBalanceData {
  /**
   * 余额
   */
  balance?: number
  /**
   * 冻结金额
   */
  locked?: number
  /**
   * 总金额
   */
  total?: number
  /**
   * 币种
   */
  coin?: string
  /**
   * 币种app端logo
   */
  appLogo: string
  /**
   * 币种web端logo
   */
  webLogo: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币币资产列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6314)
// **/
// export const getV1PayAssertCoinBalanceApiRequest: MarkcoinRequest<
//   YapiGetV1PayAssertCoinBalanceApiRequest,
//   YapiGetV1PayAssertCoinBalanceApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/assert/coin/balance",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
