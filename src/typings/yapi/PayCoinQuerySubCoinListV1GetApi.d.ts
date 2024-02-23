/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-币币-根据主币获取子币列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6304) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/coin/querySubCoinList`
 * @更新时间 `2023-06-12 14:14:57`
 */
export interface YapiGetV1PayCoinQuerySubCoinListApiRequest {
  symbol: string
}

/**
 * 接口 [资产-币币-根据主币获取子币列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6304) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/coin/querySubCoinList`
 * @更新时间 `2023-06-12 14:14:57`
 */
export interface YapiGetV1PayCoinQuerySubCoinListApiResponse {
  detailList?: YapiGetV1PayCoinQuerySubCoinListDetailList[]
}
export interface YapiGetV1PayCoinQuerySubCoinListDetailList {
  address?: string
  businessId?: number
  id?: number
  isUseMemo?: number
  memo?: string
  shortName?: string
  symbol?: string
  tradePassword?: string
  uid?: number
  walletUrl?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币币-根据主币获取子币列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6304)
// **/
// export const getV1PayCoinQuerySubCoinListApiRequest: MarkcoinRequest<
//   YapiGetV1PayCoinQuerySubCoinListApiRequest,
//   YapiGetV1PayCoinQuerySubCoinListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/coin/querySubCoinList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
