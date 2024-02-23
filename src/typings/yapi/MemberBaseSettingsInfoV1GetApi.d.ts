/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [会员个人设置信息查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6259) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `GET /v1/member/base/settings/info`
 * @更新时间 `2023-06-08 16:52:36`
 */
export interface YapiGetV1MemberBaseSettingsInfoApiRequest {}

/**
 * 接口 [会员个人设置信息查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6259) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `GET /v1/member/base/settings/info`
 * @更新时间 `2023-06-08 16:52:36`
 */
export interface YapiGetV1MemberBaseSettingsInfoApiResponse {
  data?: YapiGetV1MemberBaseSettingsInfoData
  message?: string
  code?: number
}
export interface YapiGetV1MemberBaseSettingsInfoData {
  /**
   * b端id
   */
  businessId?: number
  /**
   * 会员uid
   */
  uid?: number
  /**
   * 涨跌色
   */
  marketSetting?: number
  /**
   * 折算货币
   */
  currencyTypeCd?: string
  /**
   * 反钓鱼码
   */
  antiPhishingCode?: string
  /**
   * 是否启用最新活动提醒 1=true; 2=false
   */
  isOpenActiveWarn?: number
  /**
   * 合约开通状态 1=true; 2=false
   */
  isOpenContractStatus?: number
  /**
   * 是否启用新币提醒 1=true; 2=false
   */
  isOpenCurrencyWarn?: number
  /**
   * 是否启用合约订单提醒 1=true; 2=false
   */
  isOpenOrderWarn?: number
  /**
   * 是否启用行情异动提醒 1=true; 2=false
   */
  isOpenPriceWarn?: number
  /**
   * 杠杆现货开通状态 1=true; 2=false
   */
  isOpenSpotStatus?: number
  /**
   * 推送语言
   */
  pushLanguage?: string
  /**
   * 合约版本,1,专业版,2,普通版
   */
  perpetualVersion?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [会员个人设置信息查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6259)
// **/
// export const getV1MemberBaseSettingsInfoApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseSettingsInfoApiRequest,
//   YapiGetV1MemberBaseSettingsInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/settings/info",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [会员个人设置信息查询↗](https://yapi.nbttfc365.com/project/44/interface/api/446) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `GET /v1/member/base/settings/info`
 * @更新时间 `2023-01-17 18:18:08`
 */
export interface YapiGetV1MemberBaseSettingsInfoApiRequest {}

/**
 * 接口 [会员个人设置信息查询↗](https://yapi.nbttfc365.com/project/44/interface/api/446) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `GET /v1/member/base/settings/info`
 * @更新时间 `2023-01-17 18:18:08`
 */
export interface YapiGetV1MemberBaseSettingsInfoApiResponse {
  data?: YapiGetV1MemberBaseSettingsInfoData
  message?: string
  code?: number
}
export interface YapiGetV1MemberBaseSettingsInfoData {
  /**
   * b端id
   */
  businessId?: number
  /**
   * 会员uid
   */
  uid?: number
  /**
   * 涨跌色
   */
  marketSetting?: number
  /**
   * 折算货币
   */
  currencyTypeCd?: string
  /**
   * 反钓鱼码
   */
  antiPhishingCode?: string
  /**
   * 是否启用最新活动提醒 1=true; 2=false
   */
  isOpenActiveWarn?: number
  /**
   * 合约开通状态 1=true; 2=false
   */
  isOpenContractStatus?: number
  /**
   * 是否启用新币提醒 1=true; 2=false
   */
  isOpenCurrencyWarn?: number
  /**
   * 是否启用合约订单提醒 1=true; 2=false
   */
  isOpenOrderWarn?: number
  /**
   * 是否启用行情异动提醒 1=true; 2=false
   */
  isOpenPriceWarn?: number
  /**
   * 杠杆现货开通状态 1=true; 2=false
   */
  isOpenSpotStatus?: number
  /**
   * 推送语言
   */
  pushLanguage?: string
  /**
   * 合约版本,1,专业版,2,普通版
   */
  perpetualVersion?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [会员个人设置信息查询↗](https://yapi.nbttfc365.com/project/44/interface/api/446)
// **/
// export const getV1MemberBaseSettingsInfoApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseSettingsInfoApiRequest,
//   YapiGetV1MemberBaseSettingsInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/settings/info",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
