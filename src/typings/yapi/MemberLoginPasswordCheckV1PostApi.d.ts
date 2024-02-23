/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [手机号\/邮箱登陆密码校验↗](https://yapi.nbttfc365.com/project/77/interface/api/6199) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/passwordCheck`
 * @更新时间 `2023-06-08 16:52:29`
 */
export interface YapiPostV1MemberLoginPasswordCheckApiRequest {
  /**
   * 账号类型，1，手机，2，邮箱
   */
  accountType: number
  /**
   * 账号
   */
  account: string
  /**
   * 密码
   */
  password: string
  /**
   * 手机号地区码，手机号登录上传
   */
  mobileCountryCode?: string
}

/**
 * 接口 [手机号\/邮箱登陆密码校验↗](https://yapi.nbttfc365.com/project/77/interface/api/6199) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/passwordCheck`
 * @更新时间 `2023-06-08 16:52:29`
 */
export interface YapiPostV1MemberLoginPasswordCheckApiResponse {
  /**
   * 是否需要发送邮件,true,发送
   */
  needSendEmail: boolean
  /**
   * 是否需要发送短信验证码，true.发送
   */
  needSendSmsCode: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机号/邮箱登陆密码校验↗](https://yapi.nbttfc365.com/project/77/interface/api/6199)
// **/
// export const postV1MemberLoginPasswordCheckApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginPasswordCheckApiRequest,
//   YapiPostV1MemberLoginPasswordCheckApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/passwordCheck",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [手机号\/邮箱登陆密码校验↗](https://yapi.nbttfc365.com/project/44/interface/api/386) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/passwordCheck`
 * @更新时间 `2022-07-29 15:59:23`
 */
export interface YapiPostV1MemberLoginPasswordCheckApiRequest {
  /**
   * 账号类型，1，手机，2，邮箱
   */
  accountType: number
  /**
   * 账号
   */
  account: string
  /**
   * 密码
   */
  password: string
  /**
   * 手机号地区码，手机号登录上传
   */
  mobileCountryCode?: string
}

/**
 * 接口 [手机号\/邮箱登陆密码校验↗](https://yapi.nbttfc365.com/project/44/interface/api/386) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/passwordCheck`
 * @更新时间 `2022-07-29 15:59:23`
 */
export interface YapiPostV1MemberLoginPasswordCheckApiResponse {
  /**
   * 是否需要发送邮件,true,发送
   */
  needSendEmail: boolean
  /**
   * 是否需要发送短信验证码，true.发送
   */
  needSendSmsCode: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机号/邮箱登陆密码校验↗](https://yapi.nbttfc365.com/project/44/interface/api/386)
// **/
// export const postV1MemberLoginPasswordCheckApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginPasswordCheckApiRequest,
//   YapiPostV1MemberLoginPasswordCheckApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/passwordCheck",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
