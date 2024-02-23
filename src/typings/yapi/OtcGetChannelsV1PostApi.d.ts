/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [第三方支付渠道列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18999) 的 **请求类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `POST /v1/otc/getChannels`
 * @更新时间 `2023-11-10 12:07:51`
 */
export interface YapiPostV1OtcGetChannelsApiRequest {
  /**
   * 方向
   */
  direction: string
  /**
   * 法币金额
   */
  fiatAmount?: string
  /**
   * 货币金额
   */
  cryptoAmount?: string
  /**
   * 法币
   */
  fiatCurrency: string
  /**
   * 币种
   */
  cryptoCurrency: string
  /**
   * 是否返回不满足限额条件的数据（web接口使用）
   */
  isReturnLimitAmountData?: boolean
}

/**
 * 接口 [第三方支付渠道列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18999) 的 **返回类型**
 *
 * @分类 [OTC接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1052)
 * @请求头 `POST /v1/otc/getChannels`
 * @更新时间 `2023-11-10 12:07:51`
 */
export interface YapiPostV1OtcGetChannelsApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1OtcGetChannelsListData[]
}
export interface YapiPostV1OtcGetChannelsListData {
  /**
   * 渠道名称
   */
  name: string
  /**
   * 限额最小值，对应法币
   */
  minAmount: number
  /**
   * 限额最大值，对应法币
   */
  maxAmount: number
  /**
   * logo
   */
  logo: string
  payments: YapiPostV1OtcGetChannelsListPaymentsListData[]
  /**
   * 是否是推荐
   */
  isRecommend: boolean
  /**
   * 是否是最优
   */
  isExcellent: string
  /**
   * 支付跳转的url
   */
  payUrl: string
  /**
   * 是否使用过
   */
  isUsed: boolean
  /**
   * 服务条款链接
   */
  serviceTermsLink: string
  /**
   * 隐私协议链接
   */
  privacyAgreementLink: string
  /**
   * 联系方式
   */
  contactInformation: string
}
/**
 * 支付方式
 */
export interface YapiPostV1OtcGetChannelsListPaymentsListData {
  /**
   * 支持方式名字
   */
  name: string
  /**
   * 最新价格
   */
  price: number
  /**
   * 是否是最优价格
   */
  isExcellent: boolean
  /**
   * 支付方式code（跳转指定支付方式需要）
   */
  code: string
  /**
   * 货币数量
   */
  cryptoAmount: string
  /**
   * 法币金额
   */
  fiatAmount: string
  /**
   * 手续费
   */
  fee: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [第三方支付渠道列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18999)
// **/
// export const postV1OtcGetChannelsApiRequest: MarkcoinRequest<
//   YapiPostV1OtcGetChannelsApiRequest,
//   YapiPostV1OtcGetChannelsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/otc/getChannels",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
