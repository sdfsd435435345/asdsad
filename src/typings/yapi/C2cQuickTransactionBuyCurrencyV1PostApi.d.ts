/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [快捷买币↗](https://yapi.nbttfc365.com/project/73/interface/api/5210) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `POST /v1/c2c/quickTransaction/buyCurrency`
 * @更新时间 `2023-11-13 12:31:40`
 */
export interface YapiPostV1C2cQuickTransactionBuyCurrencyApiRequest {
  /**
   * 数量，typeCd=NUMBER时必填
   */
  number?: number
  /**
   * NUMBER按数量购买/TOTAL_PRICE按金额购买
   */
  typeCd: string
  /**
   * 总价，typeCd=TOTAL_PRICE时必填
   */
  totalPrice?: number
  /**
   * 币种id
   */
  coinId: number
  /**
   * 区域的id
   */
  areaId: number
  /**
   * 是否提示没有匹配到广告。（前端自己出来逻辑）
   */
  isSupportOtc: boolean
}

/**
 * 接口 [快捷买币↗](https://yapi.nbttfc365.com/project/73/interface/api/5210) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `POST /v1/c2c/quickTransaction/buyCurrency`
 * @更新时间 `2023-11-13 12:31:40`
 */
export interface YapiPostV1C2cQuickTransactionBuyCurrencyApiResponse {
  /**
   * （code=10106001，C2C交易要求{KYC初级认证}，您目前不满足条件）（code=10106003，您的C2C购买数量已经达到当日限额，请提升您的KYC认证等级或之后再购买）
   */
  code: number
  data: YapiPostV1C2CQuickTransactionBuyCurrencyListData[]
  message: string
}
export interface YapiPostV1C2CQuickTransactionBuyCurrencyListData {
  /**
   * 广告id
   */
  advertId: number
  /**
   * 单价
   */
  price: number
  /**
   * 卖方支付id
   */
  paymentId: number
  /**
   * 支付方式（BANK银行卡，WECHAT微信，ALIPAY支付宝）
   */
  paymentType: string
  /**
   * 卖方支付账号（支付方式对应的账号）
   */
  paymentAccount: string
  /**
   * 付款详情
   */
  paymentDetails: string
  /**
   * 银行支行
   */
  bankBranch: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [快捷买币↗](https://yapi.nbttfc365.com/project/73/interface/api/5210)
// **/
// export const postV1C2cQuickTransactionBuyCurrencyApiRequest: MarkcoinRequest<
//   YapiPostV1C2cQuickTransactionBuyCurrencyApiRequest,
//   YapiPostV1C2cQuickTransactionBuyCurrencyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/quickTransaction/buyCurrency",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [快捷买币↗](https://yapi.nbttfc365.com/project/77/interface/api/6749) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `POST /v1/c2c/quickTransaction/buyCurrency`
 * @更新时间 `2023-06-08 16:47:16`
 */
export interface YapiPostV1C2cQuickTransactionBuyCurrencyApiRequest {
  /**
   * 数量，typeCd=NUMBER时必填
   */
  number?: number
  /**
   * NUMBER按数量购买/TOTAL_PRICE按金额购买
   */
  typeCd: string
  /**
   * 总价，typeCd=TOTAL_PRICE时必填
   */
  totalPrice?: number
  /**
   * 币种id
   */
  coinId: number
  /**
   * 区域的id
   */
  areaId: number
}

/**
 * 接口 [快捷买币↗](https://yapi.nbttfc365.com/project/77/interface/api/6749) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `POST /v1/c2c/quickTransaction/buyCurrency`
 * @更新时间 `2023-06-08 16:47:16`
 */
export interface YapiPostV1C2cQuickTransactionBuyCurrencyApiResponse {
  /**
   * （code=10106001，C2C交易要求{KYC初级认证}，您目前不满足条件）（code=10106003，您的C2C购买数量已经达到当日限额，请提升您的KYC认证等级或之后再购买）
   */
  code: number
  data: YapiPostV1C2CQuickTransactionBuyCurrencyListData[]
  message: string
}
export interface YapiPostV1C2CQuickTransactionBuyCurrencyListData {
  /**
   * 广告id
   */
  advertId: number
  /**
   * 单价
   */
  price: number
  /**
   * 卖方支付id
   */
  paymentId: number
  /**
   * 支付方式（BANK银行卡，WECHAT微信，ALIPAY支付宝）
   */
  paymentType: string
  /**
   * 卖方支付账号（支付方式对应的账号）
   */
  paymentAccount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [快捷买币↗](https://yapi.nbttfc365.com/project/77/interface/api/6749)
// **/
// export const postV1C2cQuickTransactionBuyCurrencyApiRequest: MarkcoinRequest<
//   YapiPostV1C2cQuickTransactionBuyCurrencyApiRequest,
//   YapiPostV1C2cQuickTransactionBuyCurrencyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/quickTransaction/buyCurrency",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
