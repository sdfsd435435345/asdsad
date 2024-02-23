/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [应用语言设置↗](https://yapi.nbttfc365.com/project/77/interface/api/8379) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/applicationLanguage`
 * @更新时间 `2023-06-08 16:52:36`
 */
export interface YapiPostV1MemberBaseApplicationLanguageApiRequest {
  /**
   * 应用语言 zh-CN 中文  en-US英文
   */
  applicationLanguage: string
}

/**
 * 接口 [应用语言设置↗](https://yapi.nbttfc365.com/project/77/interface/api/8379) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/applicationLanguage`
 * @更新时间 `2023-06-08 16:52:36`
 */
export interface YapiPostV1MemberBaseApplicationLanguageApiResponse {
  code?: number
  data?: YapiPostV1MemberBaseApplicationLanguageData
  message?: string
}
export interface YapiPostV1MemberBaseApplicationLanguageData {
  isSuccess?: boolean
  in2?: boolean
  dolore_3?: number
  essee?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [应用语言设置↗](https://yapi.nbttfc365.com/project/77/interface/api/8379)
// **/
// export const postV1MemberBaseApplicationLanguageApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseApplicationLanguageApiRequest,
//   YapiPostV1MemberBaseApplicationLanguageApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/applicationLanguage",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [应用语言设置↗](https://yapi.nbttfc365.com/project/44/interface/api/5749) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `POST /v1/member/base/applicationLanguage`
 * @更新时间 `2023-05-08 17:29:23`
 */
export interface YapiPostV1MemberBaseApplicationLanguageApiRequest {
  /**
   * 应用语言 zh-CN 中文  en-US英文
   */
  applicationLanguage: string
}

/**
 * 接口 [应用语言设置↗](https://yapi.nbttfc365.com/project/44/interface/api/5749) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_121)
 * @请求头 `POST /v1/member/base/applicationLanguage`
 * @更新时间 `2023-05-08 17:29:23`
 */
export interface YapiPostV1MemberBaseApplicationLanguageApiResponse {
  code?: number
  data?: YapiPostV1MemberBaseApplicationLanguageData
  message?: string
}
export interface YapiPostV1MemberBaseApplicationLanguageData {
  isSuccess?: boolean
  in2?: boolean
  dolore_3?: number
  essee?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [应用语言设置↗](https://yapi.nbttfc365.com/project/44/interface/api/5749)
// **/
// export const postV1MemberBaseApplicationLanguageApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseApplicationLanguageApiRequest,
//   YapiPostV1MemberBaseApplicationLanguageApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/applicationLanguage",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
