/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [推送语言设置↗](https://yapi.nbttfc365.com/project/77/interface/api/8389) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/language`
 * @更新时间 `2023-06-08 16:52:37`
 */
export interface YapiPostV1MemberBaseLanguageApiRequest {
  /**
   * 语言
   */
  language: string
}

/**
 * 接口 [推送语言设置↗](https://yapi.nbttfc365.com/project/77/interface/api/8389) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/language`
 * @更新时间 `2023-06-08 16:52:37`
 */
export interface YapiPostV1MemberBaseLanguageApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1MemberBaseLanguageData
}
export interface YapiPostV1MemberBaseLanguageData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [推送语言设置↗](https://yapi.nbttfc365.com/project/77/interface/api/8389)
// **/
// export const postV1MemberBaseLanguageApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseLanguageApiRequest,
//   YapiPostV1MemberBaseLanguageApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/language",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [推送语言设置↗](https://yapi.nbttfc365.com/project/44/interface/api/2687) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `POST /v1/member/base/language`
 * @更新时间 `2022-10-08 10:29:16`
 */
export interface YapiPostV1MemberBaseLanguageApiRequest {
  /**
   * 语言
   */
  language: string
}

/**
 * 接口 [推送语言设置↗](https://yapi.nbttfc365.com/project/44/interface/api/2687) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `POST /v1/member/base/language`
 * @更新时间 `2022-10-08 10:29:16`
 */
export interface YapiPostV1MemberBaseLanguageApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1MemberBaseLanguageData
}
export interface YapiPostV1MemberBaseLanguageData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [推送语言设置↗](https://yapi.nbttfc365.com/project/44/interface/api/2687)
// **/
// export const postV1MemberBaseLanguageApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseLanguageApiRequest,
//   YapiPostV1MemberBaseLanguageApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/language",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
