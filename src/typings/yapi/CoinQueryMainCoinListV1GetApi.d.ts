/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-获取所有主币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3337) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/coin/queryMainCoinList`
 * @更新时间 `2022-11-05 17:47:49`
 */
export interface YapiGetV1CoinQueryMainCoinListApiRequest {
  /**
   * 币种名称
   */
  name?: string
}

/**
 * 接口 [资产-获取所有主币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3337) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/coin/queryMainCoinList`
 * @更新时间 `2022-11-05 17:47:49`
 */
export interface YapiGetV1CoinQueryMainCoinListApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1CoinQueryMainCoinData
}
export interface YapiGetV1CoinQueryMainCoinData {
  coinList?: YapiGetV1CoinQueryMainCoinListCoinListData[]
}
export interface YapiGetV1CoinQueryMainCoinListCoinListData {
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
// * [资产-获取所有主币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3337)
// **/
// export const getV1CoinQueryMainCoinListApiRequest: MarkcoinRequest<
//   YapiGetV1CoinQueryMainCoinListApiRequest,
//   YapiGetV1CoinQueryMainCoinListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coin/queryMainCoinList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
