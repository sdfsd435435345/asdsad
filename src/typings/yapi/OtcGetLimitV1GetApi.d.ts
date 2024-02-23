/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取第三方支付限额↗](https://yapi.nbttfc365.com/project/44/interface/api/18994) 的 **请求类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `GET /v1/otc/getLimit`
 * @更新时间 `2023-11-03 10:09:43`
 */
export interface YapiGetV1OtcGetLimitApiRequest {
  /**
   * 方向 BUY、SELL
   */
  direction: string
  /**
   * 渠道 Transak、TransFi
   */
  channel?: string
  /**
   * 法币
   */
  fiatCurrencies: string
  /**
   * 货币
   */
  cryptoCurrency?: string
}

/**
 * 接口 [获取第三方支付限额↗](https://yapi.nbttfc365.com/project/44/interface/api/18994) 的 **返回类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `GET /v1/otc/getLimit`
 * @更新时间 `2023-11-03 10:09:43`
 */
export interface YapiGetV1OtcGetLimitApiResponse {
  code?: number
  data?: YapiGetV1OtcGetLimitData
  message?: string
}
export interface YapiGetV1OtcGetLimitData {
  /**
   * 统一法币
   */
  maxAmount: number
  /**
   * 统一法币
   */
  minAmount: number
  /**
   * 参考价格
   */
  price: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取第三方支付限额↗](https://yapi.nbttfc365.com/project/44/interface/api/18994)
// **/
// export const getV1OtcGetLimitApiRequest: MarkcoinRequest<
//   YapiGetV1OtcGetLimitApiRequest,
//   YapiGetV1OtcGetLimitApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/otc/getLimit",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
