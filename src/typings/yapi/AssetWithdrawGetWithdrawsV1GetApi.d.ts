/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [提现手续费率接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3923) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/asset/withdraw/getWithdraws`
 * @更新时间 `2023-04-13 10:55:45`
 */
export interface YapiGetV1AssetWithdrawGetWithdrawsApiRequest {
  param?: string
}

/**
 * 接口 [提现手续费率接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3923) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/asset/withdraw/getWithdraws`
 * @更新时间 `2023-04-13 10:55:45`
 */
export interface YapiGetV1AssetWithdrawGetWithdrawsApiResponse {
  code?: number
  data?: YapiGetV1AssetWithdrawGetWithdrawsListData[]
  message?: string
}
export interface YapiGetV1AssetWithdrawGetWithdrawsListData {
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
// * [提现手续费率接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3923)
// **/
// export const getV1AssetWithdrawGetWithdrawsApiRequest: MarkcoinRequest<
//   YapiGetV1AssetWithdrawGetWithdrawsApiRequest,
//   YapiGetV1AssetWithdrawGetWithdrawsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/asset/withdraw/getWithdraws",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
