/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [提现手续费率接口↗](https://yapi.nbttfc365.com/project/77/interface/api/8479) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/asset/withdraw/getWithdraws`
 * @更新时间 `2023-06-12 14:21:07`
 */
export interface YapiGetV1PayAssetWithdrawGetWithdrawsApiRequest {
  param?: string
}

/**
 * 接口 [提现手续费率接口↗](https://yapi.nbttfc365.com/project/77/interface/api/8479) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/asset/withdraw/getWithdraws`
 * @更新时间 `2023-06-12 14:21:07`
 */
export interface YapiGetV1PayAssetWithdrawGetWithdrawsApiResponse {
  code?: number
  data?: YapiGetV1PayAssetWithdrawGetWithdrawsListData[]
  message?: string
}
export interface YapiGetV1PayAssetWithdrawGetWithdrawsListData {
  publicChains: string
  withdrawFees: string
  appLogo: string
  webLogo: string
  fullName: string
  coinName: string
  minWithdrawCounts: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [提现手续费率接口↗](https://yapi.nbttfc365.com/project/77/interface/api/8479)
// **/
// export const getV1PayAssetWithdrawGetWithdrawsApiRequest: MarkcoinRequest<
//   YapiGetV1PayAssetWithdrawGetWithdrawsApiRequest,
//   YapiGetV1PayAssetWithdrawGetWithdrawsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/asset/withdraw/getWithdraws",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
