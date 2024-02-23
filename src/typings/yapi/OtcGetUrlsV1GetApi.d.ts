/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取第三方支付跳转信息(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/19014) 的 **请求类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `GET /v1/otc/getUrls`
 * @更新时间 `2023-11-03 08:54:11`
 */
export interface YapiGetV1OtcGetUrlsApiRequest {
  /**
   * 第三方支付渠道
   */
  channel: string
  /**
   * 币种标识
   */
  coinId: string
}

/**
 * 接口 [获取第三方支付跳转信息(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/19014) 的 **返回类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `GET /v1/otc/getUrls`
 * @更新时间 `2023-11-03 08:54:11`
 */
export interface YapiGetV1OtcGetUrlsApiResponse {
  message?: string
  data?: YapiGetV1OtcGetUrlsData
  code?: number
}
export interface YapiGetV1OtcGetUrlsData {
  url?: string
  addressInfo?: YapiGetV1OtcGetUrlsAddressInfoData
  channel?: string
}
export interface YapiGetV1OtcGetUrlsAddressInfoData {
  symbol?: string
  mainnet?: string
  mainType?: string
  address?: string
  memo?: string
  isWithdraw?: number
  isDeposit?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取第三方支付跳转信息(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/19014)
// **/
// export const getV1OtcGetUrlsApiRequest: MarkcoinRequest<
//   YapiGetV1OtcGetUrlsApiRequest,
//   YapiGetV1OtcGetUrlsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/otc/getUrls",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
