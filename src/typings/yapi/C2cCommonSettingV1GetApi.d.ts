/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [c2c通用配置↗](https://yapi.nbttfc365.com/project/73/interface/api/5273) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/commonSetting`
 * @更新时间 `2023-03-20 16:12:12`
 */
export interface YapiGetV1C2cCommonSettingApiRequest {}

/**
 * 接口 [c2c通用配置↗](https://yapi.nbttfc365.com/project/73/interface/api/5273) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/commonSetting`
 * @更新时间 `2023-03-20 16:12:12`
 */
export interface YapiGetV1C2cCommonSettingApiResponse {
  code?: number
  data?: YapiGetV1C2CCommonSettingData
  message?: string
}
export interface YapiGetV1C2CCommonSettingData {
  /**
   * 交易注册时间限制
   */
  registerTimeLimit?: number
  /**
   * 转账时限
   */
  transferTimeLimit?: number
  /**
   * 每日无责取消次数
   */
  cancellationsWithoutLiability?: number
  /**
   * 确认收款时限
   */
  coinConfirmPaymentTimeLimit?: number
  /**
   * 客户端默认查看类型（ALL 全部、INSIDE 站内、OUTSIDE 站外）
   */
  defaultClientTypeCd?: string
  /**
   * c2c 交易 KYC 等级限制
   */
  kycStatusCd?: string
  /**
   * 冻结币种id币种 ID
   */
  coinId?: string
  /**
   * 冻结数量
   */
  frozenQuantity?: number
  /**
   * 超过无责取消次数后禁止交易时长（小时）
   */
  timeCancellationsWithoutLiability?: number
  id?: string
  /**
   * 转币时限
   */
  coinTransferTimeLimit?: number
  /**
   * 商家交易区广告数量限制
   */
  advertQuantityLimit?: number
  /**
   * 确认收款时限
   */
  confirmPaymentTimeLimit?: number
  /**
   * 冻结的币种symbol
   */
  symbol: string
  /**
   * 币种精度
   */
  coinPrecision: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [c2c通用配置↗](https://yapi.nbttfc365.com/project/73/interface/api/5273)
// **/
// export const getV1C2cCommonSettingApiRequest: MarkcoinRequest<
//   YapiGetV1C2cCommonSettingApiRequest,
//   YapiGetV1C2cCommonSettingApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/commonSetting",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [c2c通用配置↗](https://yapi.nbttfc365.com/project/77/interface/api/6414) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/commonSetting`
 * @更新时间 `2023-06-08 16:46:53`
 */
export interface YapiGetV1C2cCommonSettingApiRequest {}

/**
 * 接口 [c2c通用配置↗](https://yapi.nbttfc365.com/project/77/interface/api/6414) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/commonSetting`
 * @更新时间 `2023-06-08 16:46:53`
 */
export interface YapiGetV1C2cCommonSettingApiResponse {
  code?: number
  data?: YapiGetV1C2CCommonSettingData
  message?: string
}
export interface YapiGetV1C2CCommonSettingData {
  /**
   * 交易注册时间限制
   */
  registerTimeLimit?: number
  /**
   * 转账时限
   */
  transferTimeLimit?: number
  /**
   * 每日无责取消次数
   */
  cancellationsWithoutLiability?: number
  /**
   * 确认收款时限
   */
  coinConfirmPaymentTimeLimit?: number
  /**
   * 客户端默认查看类型（ALL 全部、INSIDE 站内、OUTSIDE 站外）
   */
  defaultClientTypeCd?: string
  /**
   * c2c 交易 KYC 等级限制
   */
  kycStatusCd?: string
  /**
   * 冻结币种id币种 ID
   */
  coinId?: string
  /**
   * 冻结数量
   */
  frozenQuantity?: number
  /**
   * 超过无责取消次数后禁止交易时长（小时）
   */
  timeCancellationsWithoutLiability?: number
  id?: string
  /**
   * 转币时限
   */
  coinTransferTimeLimit?: number
  /**
   * 商家交易区广告数量限制
   */
  advertQuantityLimit?: number
  /**
   * 确认收款时限
   */
  confirmPaymentTimeLimit?: number
  /**
   * 冻结的币种symbol
   */
  symbol: string
  /**
   * 币种精度
   */
  coinPrecision: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [c2c通用配置↗](https://yapi.nbttfc365.com/project/77/interface/api/6414)
// **/
// export const getV1C2cCommonSettingApiRequest: MarkcoinRequest<
//   YapiGetV1C2cCommonSettingApiRequest,
//   YapiGetV1C2cCommonSettingApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/commonSetting",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
