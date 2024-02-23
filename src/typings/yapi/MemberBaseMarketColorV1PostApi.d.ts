/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [涨跌色设置 ↗](https://yapi.nbttfc365.com/project/77/interface/api/8394) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/market/color`
 * @更新时间 `2023-06-08 16:52:37`
 */
export interface YapiPostV1MemberBaseMarketColorApiRequest {
  /**
   * 1.绿涨红跌 2.红涨绿跌
   */
  marketSetting: number
}

/**
 * 接口 [涨跌色设置 ↗](https://yapi.nbttfc365.com/project/77/interface/api/8394) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/market/color`
 * @更新时间 `2023-06-08 16:52:37`
 */
export interface YapiPostV1MemberBaseMarketColorApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1MemberBaseMarketColorData
}
export interface YapiPostV1MemberBaseMarketColorData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [涨跌色设置 ↗](https://yapi.nbttfc365.com/project/77/interface/api/8394)
// **/
// export const postV1MemberBaseMarketColorApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseMarketColorApiRequest,
//   YapiPostV1MemberBaseMarketColorApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/market/color",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [涨跌色设置 ↗](https://yapi.nbttfc365.com/project/44/interface/api/443) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `POST /v1/member/base/market/color`
 * @更新时间 `2023-05-08 17:22:59`
 */
export interface YapiPostV1MemberBaseMarketColorApiRequest {
  /**
   * 1.绿涨红跌 2.红涨绿跌
   */
  marketSetting: number
}

/**
 * 接口 [涨跌色设置 ↗](https://yapi.nbttfc365.com/project/44/interface/api/443) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `POST /v1/member/base/market/color`
 * @更新时间 `2023-05-08 17:22:59`
 */
export interface YapiPostV1MemberBaseMarketColorApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1MemberBaseMarketColorData
}
export interface YapiPostV1MemberBaseMarketColorData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [涨跌色设置 ↗](https://yapi.nbttfc365.com/project/44/interface/api/443)
// **/
// export const postV1MemberBaseMarketColorApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseMarketColorApiRequest,
//   YapiPostV1MemberBaseMarketColorApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/market/color",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
