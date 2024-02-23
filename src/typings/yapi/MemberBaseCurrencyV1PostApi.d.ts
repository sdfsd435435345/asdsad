/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [折算货币设置↗](https://yapi.nbttfc365.com/project/77/interface/api/8384) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/currency`
 * @更新时间 `2023-06-08 16:52:36`
 */
export interface YapiPostV1MemberBaseCurrencyApiRequest {
  /**
   * USD美元 CNY人民币 HKD港币
   */
  currencyTypeCd: string
}

/**
 * 接口 [折算货币设置↗](https://yapi.nbttfc365.com/project/77/interface/api/8384) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/currency`
 * @更新时间 `2023-06-08 16:52:36`
 */
export interface YapiPostV1MemberBaseCurrencyApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1MemberBaseCurrencyData
}
export interface YapiPostV1MemberBaseCurrencyData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [折算货币设置↗](https://yapi.nbttfc365.com/project/77/interface/api/8384)
// **/
// export const postV1MemberBaseCurrencyApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseCurrencyApiRequest,
//   YapiPostV1MemberBaseCurrencyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/currency",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [折算货币设置↗](https://yapi.nbttfc365.com/project/44/interface/api/440) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `POST /v1/member/base/currency`
 * @更新时间 `2023-05-08 17:56:53`
 */
export interface YapiPostV1MemberBaseCurrencyApiRequest {
  /**
   * USD美元 CNY人民币 HKD港币
   */
  currencyTypeCd: string
}

/**
 * 接口 [折算货币设置↗](https://yapi.nbttfc365.com/project/44/interface/api/440) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `POST /v1/member/base/currency`
 * @更新时间 `2023-05-08 17:56:53`
 */
export interface YapiPostV1MemberBaseCurrencyApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1MemberBaseCurrencyData
}
export interface YapiPostV1MemberBaseCurrencyData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [折算货币设置↗](https://yapi.nbttfc365.com/project/44/interface/api/440)
// **/
// export const postV1MemberBaseCurrencyApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseCurrencyApiRequest,
//   YapiPostV1MemberBaseCurrencyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/currency",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
