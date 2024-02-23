/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [快捷卖币↗](https://yapi.nbttfc365.com/project/73/interface/api/5228) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `POST /v1/c2c/quickTransaction/sellCurrency`
 * @更新时间 `2023-11-13 16:04:55`
 */
export interface YapiPostV1C2cQuickTransactionSellCurrencyApiRequest {
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
   * 是否兼容OTC
   */
  isSupportOtc: boolean
}

/**
 * 接口 [快捷卖币↗](https://yapi.nbttfc365.com/project/73/interface/api/5228) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `POST /v1/c2c/quickTransaction/sellCurrency`
 * @更新时间 `2023-11-13 16:04:55`
 */
export interface YapiPostV1C2cQuickTransactionSellCurrencyApiResponse {
  /**
   * （code=10106001，C2C交易要求{KYC初级认证}，您目前不满足条件）（code=10106003，您的C2C购买数量已经达到当日限额，请提升您的KYC认证等级或之后再购买）
   */
  code: number
  /**
   * 支付信息
   */
  data: YapiPostV1C2CQuickTransactionSellCurrencyListData[]
}
/**
 * 银行卡
 */
export interface YapiPostV1C2CQuickTransactionSellCurrencyListData {
  /**
   * BANK银行，WECHAT微信，ALIPAY支付宝
   */
  paymentType: string
  /**
   * exist存在数据，unopened存在数据但是未开启，unbound不存在数据未绑定
   */
  status: string
  /**
   * 最高单价，后端排序用
   */
  maxPrice: number
  list?: YapiPostV1C2CQuickTransactionSellCurrencyListListData[]
}
export interface YapiPostV1C2CQuickTransactionSellCurrencyListListData {
  /**
   * 广告id
   */
  advertId: number
  /**
   * 单价
   */
  price: number
  /**
   * 支付id
   */
  paymentId: number
  /**
   * 支付方式（BANK银行卡）
   */
  paymentType: string
  /**
   * 支付账号（支付方式对应的账号）
   */
  paymentAccount: string
  /**
   * 开户行，支付方式为银行卡的时候赋值
   */
  openBank: string
  /**
   * 二维码(图片资源地址)，支付方式为微信和支付宝的时候赋值
   */
  qrCodeAddress: string
  /**
   * 银行支行
   */
  bankBranch: string
  /**
   * 付款详情
   */
  paymentDetails: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [快捷卖币↗](https://yapi.nbttfc365.com/project/73/interface/api/5228)
// **/
// export const postV1C2cQuickTransactionSellCurrencyApiRequest: MarkcoinRequest<
//   YapiPostV1C2cQuickTransactionSellCurrencyApiRequest,
//   YapiPostV1C2cQuickTransactionSellCurrencyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/quickTransaction/sellCurrency",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [快捷卖币↗](https://yapi.nbttfc365.com/project/77/interface/api/6759) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `POST /v1/c2c/quickTransaction/sellCurrency`
 * @更新时间 `2023-06-08 16:47:17`
 */
export interface YapiPostV1C2cQuickTransactionSellCurrencyApiRequest {
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
 * 接口 [快捷卖币↗](https://yapi.nbttfc365.com/project/77/interface/api/6759) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `POST /v1/c2c/quickTransaction/sellCurrency`
 * @更新时间 `2023-06-08 16:47:17`
 */
export interface YapiPostV1C2cQuickTransactionSellCurrencyApiResponse {
  /**
   * （code=10106001，C2C交易要求{KYC初级认证}，您目前不满足条件）（code=10106003，您的C2C购买数量已经达到当日限额，请提升您的KYC认证等级或之后再购买）
   */
  code: number
  /**
   * 支付信息
   */
  data: YapiPostV1C2CQuickTransactionSellCurrencyListData[]
}
/**
 * 银行卡
 */
export interface YapiPostV1C2CQuickTransactionSellCurrencyListData {
  /**
   * BANK银行，WECHAT微信，ALIPAY支付宝
   */
  paymentType: string
  /**
   * exist存在数据，unopened存在数据但是未开启，unbound不存在数据未绑定
   */
  status: string
  /**
   * 最高单价，后端排序用
   */
  maxPrice: number
  list?: YapiPostV1C2CQuickTransactionSellCurrencyListListData[]
}
export interface YapiPostV1C2CQuickTransactionSellCurrencyListListData {
  /**
   * 广告id
   */
  advertId: number
  /**
   * 单价
   */
  price: number
  /**
   * 支付id
   */
  paymentId: number
  /**
   * 支付方式（BANK银行卡）
   */
  paymentType: string
  /**
   * 支付账号（支付方式对应的账号）
   */
  paymentAccount: string
  /**
   * 开户行，支付方式为银行卡的时候赋值
   */
  openBank: string
  /**
   * 二维码(图片资源地址)，支付方式为微信和支付宝的时候赋值
   */
  qrCodeAddress: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [快捷卖币↗](https://yapi.nbttfc365.com/project/77/interface/api/6759)
// **/
// export const postV1C2cQuickTransactionSellCurrencyApiRequest: MarkcoinRequest<
//   YapiPostV1C2cQuickTransactionSellCurrencyApiRequest,
//   YapiPostV1C2cQuickTransactionSellCurrencyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/quickTransaction/sellCurrency",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
