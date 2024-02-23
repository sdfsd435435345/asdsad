/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [校验邮箱注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6044) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/register/valid/email`
 * @更新时间 `2023-06-08 16:52:15`
 */
export interface YapiPostV1MemberRegisterValidEmailApiRequest {
  /**
   * 邮箱
   */
  email: string
  /**
   * 邀请码
   */
  invite?: string
  /**
   * businessId
   */
  businessId?: number
}

/**
 * 接口 [校验邮箱注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6044) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/register/valid/email`
 * @更新时间 `2023-06-08 16:52:15`
 */
export interface YapiPostV1MemberRegisterValidEmailApiResponse {
  /**
   * 状态码
   */
  code: number
  /**
   * 信息
   */
  message: string
  data: YapiPostV1MemberRegisterValidEmailData
}
export interface YapiPostV1MemberRegisterValidEmailData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [校验邮箱注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6044)
// **/
// export const postV1MemberRegisterValidEmailApiRequest: MarkcoinRequest<
//   YapiPostV1MemberRegisterValidEmailApiRequest,
//   YapiPostV1MemberRegisterValidEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/register/valid/email",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [校验邮箱注册↗](https://yapi.nbttfc365.com/project/44/interface/api/602) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/register/valid/email`
 * @更新时间 `2022-08-05 14:13:10`
 */
export interface YapiPostV1MemberRegisterValidEmailApiRequest {
  /**
   * 邮箱
   */
  email: string
  /**
   * 邀请码
   */
  invite?: string
  /**
   * businessId
   */
  businessId?: number
}

/**
 * 接口 [校验邮箱注册↗](https://yapi.nbttfc365.com/project/44/interface/api/602) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/register/valid/email`
 * @更新时间 `2022-08-05 14:13:10`
 */
export interface YapiPostV1MemberRegisterValidEmailApiResponse {
  /**
   * 状态码
   */
  code: number
  /**
   * 信息
   */
  message: string
  data: YapiPostV1MemberRegisterValidEmailData
}
export interface YapiPostV1MemberRegisterValidEmailData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [校验邮箱注册↗](https://yapi.nbttfc365.com/project/44/interface/api/602)
// **/
// export const postV1MemberRegisterValidEmailApiRequest: MarkcoinRequest<
//   YapiPostV1MemberRegisterValidEmailApiRequest,
//   YapiPostV1MemberRegisterValidEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/register/valid/email",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
