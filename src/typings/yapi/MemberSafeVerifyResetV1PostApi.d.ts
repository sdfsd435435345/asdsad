/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [重置安全验证_copy↗](https://yapi.nbttfc365.com/project/77/interface/api/6244) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /v1/member/safe/verify/reset`
 * @更新时间 `2023-06-08 16:52:35`
 */
export interface YapiPostV1MemberSafeVerifyResetApiRequest {
  /**
   * 是否重置google验证器
   */
  isGoogle: boolean
  /**
   * 是否重置邮箱
   */
  isEmail: boolean
  /**
   * 是否重置手机号
   */
  isMobile: boolean
  /**
   * google密钥（重置google验证必传）
   */
  googleSecretKey?: string
  /**
   * google验证码（重置google验证必传）
   */
  googleVerifyCode?: number
  /**
   * 新认证的邮箱（重置邮箱必传）
   */
  email?: string
  /**
   * 新认证的邮箱验证码（重置邮箱必传）
   */
  emailVerifyCode?: string
  /**
   * 新认证的手机号区号（重置手机号必传）
   */
  mobileCountryCode?: string
  /**
   * 新认证的手机号（重置手机号必传）
   */
  mobile?: string
  /**
   * 认证图片地址
   */
  applyPhotoPath: string
  /**
   * 账号名
   */
  account: string
  /**
   * 账号类型
   */
  accountType: number
  /**
   * 手机验证码
   */
  mobileVerifyCode: string
  /**
   * 旧手机的区号
   */
  oldMobileCountryCode: string
}

/**
 * 接口 [重置安全验证_copy↗](https://yapi.nbttfc365.com/project/77/interface/api/6244) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /v1/member/safe/verify/reset`
 * @更新时间 `2023-06-08 16:52:35`
 */
export interface YapiPostV1MemberSafeVerifyResetApiResponse {
  /**
   * 返回状态
   */
  code: number
  data: YapiPostV1MemberSafeVerifyResetData
  /**
   * 返回的消息内容
   */
  message: string
}
/**
 * 数据集合
 */
export interface YapiPostV1MemberSafeVerifyResetData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [重置安全验证_copy↗](https://yapi.nbttfc365.com/project/77/interface/api/6244)
// **/
// export const postV1MemberSafeVerifyResetApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeVerifyResetApiRequest,
//   YapiPostV1MemberSafeVerifyResetApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/verify/reset",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [重置安全验证_copy↗](https://yapi.nbttfc365.com/project/44/interface/api/256) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /v1/member/safe/verify/reset`
 * @更新时间 `2023-05-31 15:06:34`
 */
export interface YapiPostV1MemberSafeVerifyResetApiRequest {
  /**
   * 是否重置google验证器
   */
  isGoogle: boolean
  /**
   * 是否重置邮箱
   */
  isEmail: boolean
  /**
   * 是否重置手机号
   */
  isMobile: boolean
  /**
   * google密钥（重置google验证必传）
   */
  googleSecretKey?: string
  /**
   * google验证码（重置google验证必传）
   */
  googleVerifyCode?: number
  /**
   * 新认证的邮箱（重置邮箱必传）
   */
  email?: string
  /**
   * 新认证的邮箱验证码（重置邮箱必传）
   */
  emailVerifyCode?: string
  /**
   * 新认证的手机号区号（重置手机号必传）
   */
  mobileCountryCode?: string
  /**
   * 新认证的手机号（重置手机号必传）
   */
  mobile?: string
  /**
   * 认证图片地址
   */
  applyPhotoPath: string
  /**
   * 账号名
   */
  account: string
  /**
   * 账号类型
   */
  accountType: number
  /**
   * 手机验证码
   */
  mobileVerifyCode: string
  /**
   * 旧手机的区号
   */
  oldMobileCountryCode: string
}

/**
 * 接口 [重置安全验证_copy↗](https://yapi.nbttfc365.com/project/44/interface/api/256) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /v1/member/safe/verify/reset`
 * @更新时间 `2023-05-31 15:06:34`
 */
export interface YapiPostV1MemberSafeVerifyResetApiResponse {
  /**
   * 返回状态
   */
  code: number
  data: YapiPostV1MemberSafeVerifyResetData
  /**
   * 返回的消息内容
   */
  message: string
}
/**
 * 数据集合
 */
export interface YapiPostV1MemberSafeVerifyResetData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [重置安全验证_copy↗](https://yapi.nbttfc365.com/project/44/interface/api/256)
// **/
// export const postV1MemberSafeVerifyResetApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeVerifyResetApiRequest,
//   YapiPostV1MemberSafeVerifyResetApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/verify/reset",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
