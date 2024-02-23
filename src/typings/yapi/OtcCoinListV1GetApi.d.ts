/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [三方支付币种列表↗](https://yapi.nbttfc365.com/project/44/interface/api/19109) 的 **请求类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `GET /v1/otc/coinList`
 * @更新时间 `2023-10-30 20:13:33`
 */
export interface YapiGetV1OtcCoinListApiRequest {
  /**
   * 区域id
   */
  areaId: string
}

/**
 * 接口 [三方支付币种列表↗](https://yapi.nbttfc365.com/project/44/interface/api/19109) 的 **返回类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `GET /v1/otc/coinList`
 * @更新时间 `2023-10-30 20:13:33`
 */
export interface YapiGetV1OtcCoinListApiResponse {
  data?: YapiGetV1OtcCoinListData[]
  code?: number
}
export interface YapiGetV1OtcCoinListData {
  trade_precision: number
  id: number
  precision: number
  defaultShow: boolean
  coinFullName: string
  webLogo: string
  minTransQuantity: string
  appLogo: string
  coinName: string
  balance: string
  symbol: string
  statusCd: string
  maxTransQuantity: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [三方支付币种列表↗](https://yapi.nbttfc365.com/project/44/interface/api/19109)
// **/
// export const getV1OtcCoinListApiRequest: MarkcoinRequest<
//   YapiGetV1OtcCoinListApiRequest,
//   YapiGetV1OtcCoinListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/otc/coinList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
