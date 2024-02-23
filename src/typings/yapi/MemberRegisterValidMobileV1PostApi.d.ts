/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [校验手机号注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6039) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/register/valid/mobile`
 * @更新时间 `2023-06-08 16:52:15`
 */
export interface YapiPostV1MemberRegisterValidMobileApiRequest {
  /**
   * 区号
   */
  mobileCountryCode: string
  /**
   * businessId
   */
  businessId?: number
  /**
   * 邀请码
   */
  invite?: string
  /**
   * 手机号码
   */
  mobileNumber: string
}

/**
 * 接口 [校验手机号注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6039) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/register/valid/mobile`
 * @更新时间 `2023-06-08 16:52:15`
 */
export interface YapiPostV1MemberRegisterValidMobileApiResponse {
  /**
   * 状态码
   */
  code: number
  /**
   * 提示信息
   */
  message: string
  data: YapiPostV1MemberRegisterValidMobileData
}
/**
 * 返回数据
 */
export interface YapiPostV1MemberRegisterValidMobileData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [校验手机号注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6039)
// **/
// export const postV1MemberRegisterValidMobileApiRequest: MarkcoinRequest<
//   YapiPostV1MemberRegisterValidMobileApiRequest,
//   YapiPostV1MemberRegisterValidMobileApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/register/valid/mobile",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [校验手机号注册↗](https://yapi.nbttfc365.com/project/44/interface/api/608) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/register/valid/mobile`
 * @更新时间 `2022-08-05 14:12:47`
 */
export interface YapiPostV1MemberRegisterValidMobileApiRequest {
  /**
   * 区号
   */
  mobileCountryCode: string
  /**
   * businessId
   */
  businessId?: number
  /**
   * 邀请码
   */
  invite?: string
  /**
   * 手机号码
   */
  mobileNumber: string
}

/**
 * 接口 [校验手机号注册↗](https://yapi.nbttfc365.com/project/44/interface/api/608) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/register/valid/mobile`
 * @更新时间 `2022-08-05 14:12:47`
 */
export interface YapiPostV1MemberRegisterValidMobileApiResponse {
  /**
   * 状态码
   */
  code: number
  /**
   * 提示信息
   */
  message: string
  data: YapiPostV1MemberRegisterValidMobileData
}
/**
 * 返回数据
 */
export interface YapiPostV1MemberRegisterValidMobileData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [校验手机号注册↗](https://yapi.nbttfc365.com/project/44/interface/api/608)
// **/
// export const postV1MemberRegisterValidMobileApiRequest: MarkcoinRequest<
//   YapiPostV1MemberRegisterValidMobileApiRequest,
//   YapiPostV1MemberRegisterValidMobileApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/register/valid/mobile",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
