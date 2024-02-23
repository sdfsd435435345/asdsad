/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [第三方支付方式(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/19009) 的 **请求类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `GET /v1/otc/payment`
 * @更新时间 `2023-10-26 11:41:55`
 */
export interface YapiGetV1OtcPaymentApiRequest {
  /**
   * BUY、SELL
   */
  direction?: string
}

/**
 * 接口 [第三方支付方式(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/19009) 的 **返回类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `GET /v1/otc/payment`
 * @更新时间 `2023-10-26 11:41:55`
 */
export interface YapiGetV1OtcPaymentApiResponse {
  message?: string
  data?: YapiGetV1OtcPaymentListData[]
  code?: number
}
export interface YapiGetV1OtcPaymentListData {
  /**
   * 支付方式名字
   */
  name: string
  /**
   * 支付方式logo
   */
  logo: string
  channels?: YapiGetV1OtcPaymentListChannelsListData[]
}
export interface YapiGetV1OtcPaymentListChannelsListData {
  /**
   * 第三方支付名字
   */
  name: string
  /**
   * 是否是最优价
   */
  isExcellent: boolean
  /**
   * 是否是推荐
   */
  isRecommend: boolean
  /**
   * 价格
   */
  price: number
  /**
   * logo
   */
  logo: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [第三方支付方式(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/19009)
// **/
// export const getV1OtcPaymentApiRequest: MarkcoinRequest<
//   YapiGetV1OtcPaymentApiRequest,
//   YapiGetV1OtcPaymentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/otc/payment",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
