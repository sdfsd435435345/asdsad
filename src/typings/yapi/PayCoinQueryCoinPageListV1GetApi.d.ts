/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-充提模块获取主币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/8549) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/coin/queryCoinPageList`
 * @更新时间 `2023-06-12 14:41:28`
 */
export interface YapiGetV1PayCoinQueryCoinPageListApiRequest {
  /**
   * 币种名称
   */
  name?: string
  /**
   * 类型：1，充值，2、提币
   */
  type: string
}

/**
 * 接口 [资产-充提模块获取主币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/8549) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/coin/queryCoinPageList`
 * @更新时间 `2023-06-12 14:41:28`
 */
export interface YapiGetV1PayCoinQueryCoinPageListApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PayCoinQueryCoinPageData
}
export interface YapiGetV1PayCoinQueryCoinPageData {
  coinList?: YapiGetV1PayCoinQueryCoinPageListCoinListData[]
}
export interface YapiGetV1PayCoinQueryCoinPageListCoinListData {
  id: string
  /**
   * 币种简称
   */
  coinName: string
  /**
   * 币种
   */
  symbol: string
  /**
   * 名称
   */
  coinFullName: string
  /**
   * 是否开启提现，1.是。2.否
   */
  isWithdraw: number
  /**
   * 是否开启充值，1，是。2，否
   */
  isDeposit: number
  webLogo: string
  appLogo: string
  /**
   * 是否热门，1.是，2.否
   */
  isPopular: number
  /**
   * 是否使用地址标签, 1 是，2 否
   */
  isUseMemo: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-充提模块获取主币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/8549)
// **/
// export const getV1PayCoinQueryCoinPageListApiRequest: MarkcoinRequest<
//   YapiGetV1PayCoinQueryCoinPageListApiRequest,
//   YapiGetV1PayCoinQueryCoinPageListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/coin/queryCoinPageList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
