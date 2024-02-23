/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取单一渠道价格↗](https://yapi.nbttfc365.com/project/44/interface/api/19294) 的 **请求类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `POST /v1/otc/getOneChannelPrice`
 * @更新时间 `2023-11-03 15:30:57`
 */
export interface YapiPostV1OtcGetOneChannelPriceApiRequest {
  /**
   * 方向 BUY、SELL
   */
  direction: string
  /**
   * 法币
   */
  fiatCurrency: string
  /**
   * 货币
   */
  cryptoCurrency: string
  /**
   * 法币数量
   */
  fiatAmount?: string
  /**
   * 货币数量
   */
  cryptoAmount?: string
  /**
   * 第三方支付渠道
   */
  channel: string
}

/**
 * 接口 [获取单一渠道价格↗](https://yapi.nbttfc365.com/project/44/interface/api/19294) 的 **返回类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `POST /v1/otc/getOneChannelPrice`
 * @更新时间 `2023-11-03 15:30:57`
 */
export interface YapiPostV1OtcGetOneChannelPriceApiResponse {
  code?: number
  data?: YapiPostV1OtcGetOneChannelPriceData
}
export interface YapiPostV1OtcGetOneChannelPriceData {
  /**
   * 支付方式code
   */
  code?: string
  /**
   * 货币数量
   */
  cryptoAmount?: string
  /**
   * 单价
   */
  price?: string
  /**
   * 法币数量
   */
  fiatAmount?: string
  /**
   * 手续费
   */
  fee?: string
  /**
   * 支付方式名字
   */
  name?: string
  /**
   * 支付方式logo
   */
  logo?: string
  /**
   * 是否是最优
   */
  isExcellent?: boolean
  /**
   * 渠道名
   */
  channelName?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取单一渠道价格↗](https://yapi.nbttfc365.com/project/44/interface/api/19294)
// **/
// export const postV1OtcGetOneChannelPriceApiRequest: MarkcoinRequest<
//   YapiPostV1OtcGetOneChannelPriceApiRequest,
//   YapiPostV1OtcGetOneChannelPriceApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/otc/getOneChannelPrice",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
