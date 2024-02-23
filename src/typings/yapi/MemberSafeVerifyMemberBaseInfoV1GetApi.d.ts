/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [会员google验证，手机验证，邮箱验证状态查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6229) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `GET /v1/member/safe/verifyMemberBaseInfo`
 * @更新时间 `2023-06-08 16:52:31`
 */
export interface YapiGetV1MemberSafeVerifyMemberBaseInfoApiRequest {}

/**
 * 接口 [会员google验证，手机验证，邮箱验证状态查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6229) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `GET /v1/member/safe/verifyMemberBaseInfo`
 * @更新时间 `2023-06-08 16:52:31`
 */
export interface YapiGetV1MemberSafeVerifyMemberBaseInfoApiResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 提示信息
   */
  message?: string
  data?: YapiGetV1MemberSafeVerifyMemberBaseInfoData
}
/**
 * 返回数据
 */
export interface YapiGetV1MemberSafeVerifyMemberBaseInfoData {
  /**
   * 是否开启谷歌验证
   */
  isOpenGoogleVerify: number
  /**
   * 是否开启手机验证
   */
  isOpenPhoneVerify: number
  /**
   * 是否开启邮箱验证
   */
  isOpenEmailVerify: number
  /**
   * 会员uid
   */
  uid: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 手机号码
   */
  mobileNumber: string
  /**
   * 手机区号
   */
  mobileCountryCd: string
  /**
   * google密钥
   */
  googleSecretKey: string
  /**
   * 是否已经设置了交易密码 1=true 2=false
   */
  setTradePwdInd: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [会员google验证，手机验证，邮箱验证状态查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6229)
// **/
// export const getV1MemberSafeVerifyMemberBaseInfoApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeVerifyMemberBaseInfoApiRequest,
//   YapiGetV1MemberSafeVerifyMemberBaseInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/verifyMemberBaseInfo",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [会员google验证，手机验证，邮箱验证状态查询↗](https://yapi.nbttfc365.com/project/44/interface/api/148) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `GET /v1/member/safe/verifyMemberBaseInfo`
 * @更新时间 `2022-10-09 11:36:52`
 */
export interface YapiGetV1MemberSafeVerifyMemberBaseInfoApiRequest {}

/**
 * 接口 [会员google验证，手机验证，邮箱验证状态查询↗](https://yapi.nbttfc365.com/project/44/interface/api/148) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `GET /v1/member/safe/verifyMemberBaseInfo`
 * @更新时间 `2022-10-09 11:36:52`
 */
export interface YapiGetV1MemberSafeVerifyMemberBaseInfoApiResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 提示信息
   */
  message?: string
  data?: YapiGetV1MemberSafeVerifyMemberBaseInfoData
}
/**
 * 返回数据
 */
export interface YapiGetV1MemberSafeVerifyMemberBaseInfoData {
  /**
   * 是否开启谷歌验证
   */
  isOpenGoogleVerify: number
  /**
   * 是否开启手机验证
   */
  isOpenPhoneVerify: number
  /**
   * 是否开启邮箱验证
   */
  isOpenEmailVerify: number
  /**
   * 会员uid
   */
  uid: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 手机号码
   */
  mobileNumber: string
  /**
   * 手机区号
   */
  mobileCountryCd: string
  /**
   * google密钥
   */
  googleSecretKey: string
  /**
   * 是否已经设置了交易密码 1=true 2=false
   */
  setTradePwdInd: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [会员google验证，手机验证，邮箱验证状态查询↗](https://yapi.nbttfc365.com/project/44/interface/api/148)
// **/
// export const getV1MemberSafeVerifyMemberBaseInfoApiRequest: MarkcoinRequest<
//   YapiGetV1MemberSafeVerifyMemberBaseInfoApiRequest,
//   YapiGetV1MemberSafeVerifyMemberBaseInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/safe/verifyMemberBaseInfo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
