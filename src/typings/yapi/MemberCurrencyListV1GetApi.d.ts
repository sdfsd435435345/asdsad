/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取所有币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6849) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/member/currency/list`
 * @更新时间 `2023-06-08 16:50:26`
 */
export interface YapiGetV1MemberCurrencyListApiRequest {}

/**
 * 接口 [获取所有币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6849) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/member/currency/list`
 * @更新时间 `2023-06-08 16:50:26`
 */
export interface YapiGetV1MemberCurrencyListApiResponse {
  code?: number
  data?: YapiGetV1MemberCurrencyData
  message?: string
}
export interface YapiGetV1MemberCurrencyData {
  currencyList?: YapiGetV1MemberCurrencyListCurrencyListData[]
}
export interface YapiGetV1MemberCurrencyListCurrencyListData {
  updatedTime?: string
  isDelete?: number
  businessId?: number
  currencySymbol?: string
  version?: number
  countryId?: number
  updateById?: number
  currencyName?: string
  currencyEnName?: string
  statusInd?: number
  createdTime?: string
  currencyTypeCd?: string
  id?: number
  countryFlagImg?: string
  createdById?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取所有币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6849)
// **/
// export const getV1MemberCurrencyListApiRequest: MarkcoinRequest<
//   YapiGetV1MemberCurrencyListApiRequest,
//   YapiGetV1MemberCurrencyListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/currency/list",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取所有币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/2948) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/member/currency/list`
 * @更新时间 `2022-10-20 17:47:57`
 */
export interface YapiGetV1MemberCurrencyListApiRequest {}

/**
 * 接口 [获取所有币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/2948) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/member/currency/list`
 * @更新时间 `2022-10-20 17:47:57`
 */
export interface YapiGetV1MemberCurrencyListApiResponse {
  code?: number
  data?: YapiGetV1MemberCurrencyData
  message?: string
}
export interface YapiGetV1MemberCurrencyData {
  currencyList?: YapiGetV1MemberCurrencyListCurrencyListData[]
}
export interface YapiGetV1MemberCurrencyListCurrencyListData {
  updatedTime?: string
  isDelete?: number
  businessId?: number
  currencySymbol?: string
  version?: number
  countryId?: number
  updateById?: number
  currencyName?: string
  currencyEnName?: string
  statusInd?: number
  createdTime?: string
  currencyTypeCd?: string
  id?: number
  countryFlagImg?: string
  createdById?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取所有币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/2948)
// **/
// export const getV1MemberCurrencyListApiRequest: MarkcoinRequest<
//   YapiGetV1MemberCurrencyListApiRequest,
//   YapiGetV1MemberCurrencyListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/currency/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
