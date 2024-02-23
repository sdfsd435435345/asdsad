/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [防钓鱼码设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6279) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/verifyPhishingCode`
 * @更新时间 `2023-06-08 16:52:37`
 */
export interface YapiPostV1MemberBaseVerifyPhishingCodeApiRequest {
  /**
   * 钓鱼码
   */
  phishingCode?: string
}

/**
 * 接口 [防钓鱼码设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6279) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/verifyPhishingCode`
 * @更新时间 `2023-06-08 16:52:37`
 */
export interface YapiPostV1MemberBaseVerifyPhishingCodeApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1MemberBaseVerifyPhishingCodeData
}
export interface YapiPostV1MemberBaseVerifyPhishingCodeData {
  msg: string
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [防钓鱼码设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6279)
// **/
// export const postV1MemberBaseVerifyPhishingCodeApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseVerifyPhishingCodeApiRequest,
//   YapiPostV1MemberBaseVerifyPhishingCodeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/verifyPhishingCode",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [防钓鱼码设置↗](https://yapi.nbttfc365.com/project/44/interface/api/341) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `POST /v1/member/base/verifyPhishingCode`
 * @更新时间 `2022-07-25 17:06:52`
 */
export interface YapiPostV1MemberBaseVerifyPhishingCodeApiRequest {
  /**
   * 钓鱼码
   */
  phishingCode?: string
}

/**
 * 接口 [防钓鱼码设置↗](https://yapi.nbttfc365.com/project/44/interface/api/341) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `POST /v1/member/base/verifyPhishingCode`
 * @更新时间 `2022-07-25 17:06:52`
 */
export interface YapiPostV1MemberBaseVerifyPhishingCodeApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1MemberBaseVerifyPhishingCodeData
}
export interface YapiPostV1MemberBaseVerifyPhishingCodeData {
  msg: string
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [防钓鱼码设置↗](https://yapi.nbttfc365.com/project/44/interface/api/341)
// **/
// export const postV1MemberBaseVerifyPhishingCodeApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseVerifyPhishingCodeApiRequest,
//   YapiPostV1MemberBaseVerifyPhishingCodeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/verifyPhishingCode",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
