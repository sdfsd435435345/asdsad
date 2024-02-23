/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-获取所有主币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/8584) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/coin/queryMainCoinList`
 * @更新时间 `2023-06-12 14:44:12`
 */
export interface YapiGetV1PayCoinQueryMainCoinListApiRequest {
  /**
   * 币种名称
   */
  name?: string
}

/**
 * 接口 [资产-获取所有主币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/8584) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/coin/queryMainCoinList`
 * @更新时间 `2023-06-12 14:44:12`
 */
export interface YapiGetV1PayCoinQueryMainCoinListApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PayCoinQueryMainCoinData
}
export interface YapiGetV1PayCoinQueryMainCoinData {
  coinList?: YapiGetV1PayCoinQueryMainCoinListCoinListData[]
}
export interface YapiGetV1PayCoinQueryMainCoinListCoinListData {
  id: string
  /**
   * 币种简称
   */
  coinName: string
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 名称
   */
  coinFullName: string
  webLogo: string
  appLogo: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-获取所有主币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/8584)
// **/
// export const getV1PayCoinQueryMainCoinListApiRequest: MarkcoinRequest<
//   YapiGetV1PayCoinQueryMainCoinListApiRequest,
//   YapiGetV1PayCoinQueryMainCoinListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/coin/queryMainCoinList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
