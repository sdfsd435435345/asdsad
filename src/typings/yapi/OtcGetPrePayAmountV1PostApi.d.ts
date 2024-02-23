/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取第三方交易金额获得的金额（弃用），放到渠道列表一起返回了↗](https://yapi.nbttfc365.com/project/44/interface/api/19059) 的 **请求类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `POST /v1/otc/getPrePayAmount`
 * @更新时间 `2023-10-28 10:57:56`
 */
export interface YapiPostV1OtcGetPrePayAmountApiRequest {
  /**
   * 方向
   */
  direction: string
  /**
   * 三方渠道
   */
  channel: string
  /**
   * 三方支付方式
   */
  payment: string
  /**
   * 法币
   */
  fiatCurrencies: string
  /**
   * 货币
   */
  cryptoCurrency: string
  /**
   * 法币金额
   */
  amount: string
}

/**
 * 接口 [获取第三方交易金额获得的金额（弃用），放到渠道列表一起返回了↗](https://yapi.nbttfc365.com/project/44/interface/api/19059) 的 **返回类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `POST /v1/otc/getPrePayAmount`
 * @更新时间 `2023-10-28 10:57:56`
 */
export interface YapiPostV1OtcGetPrePayAmountApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1OtcGetPrePayAmountData
}
export interface YapiPostV1OtcGetPrePayAmountData {
  /**
   * 支付商
   */
  channel?: string
  /**
   * 单价
   */
  price: number
  /**
   * 货币数量
   */
  cryptoAmount: number
  /**
   * 法币数量
   */
  fiatAmount: number
  /**
   * 手续费
   */
  fee: number
  /**
   * 支付方式code
   */
  code: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取第三方交易金额获得的金额（弃用），放到渠道列表一起返回了↗](https://yapi.nbttfc365.com/project/44/interface/api/19059)
// **/
// export const postV1OtcGetPrePayAmountApiRequest: MarkcoinRequest<
//   YapiPostV1OtcGetPrePayAmountApiRequest,
//   YapiPostV1OtcGetPrePayAmountApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/otc/getPrePayAmount",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
