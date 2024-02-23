/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据账号（无密码）或者安全验证科目↗](https://yapi.nbttfc365.com/project/77/interface/api/8364) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /v1/member/safe/query_verify_subject_by_account`
 * @更新时间 `2023-06-08 16:52:33`
 */
export interface YapiPostV1MemberSafeQueryVerifySubjectByAccountApiRequest {
  /**
   * 1手机2邮箱3.id
   */
  type: number
  /**
   * 账号名
   */
  account: string
  /**
   * 区域的编号（当类型为手机时才必传）
   */
  mobileCountryCode: string
}

/**
 * 接口 [根据账号（无密码）或者安全验证科目↗](https://yapi.nbttfc365.com/project/77/interface/api/8364) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /v1/member/safe/query_verify_subject_by_account`
 * @更新时间 `2023-06-08 16:52:33`
 */
export interface YapiPostV1MemberSafeQueryVerifySubjectByAccountApiResponse {
  code?: number
  data?: YapiPostV1MemberSafeQueryVerifySubjectByAccountData
  message?: string
}
export interface YapiPostV1MemberSafeQueryVerifySubjectByAccountData {
  isOpenEmailVerify?: number
  mobileNumber?: string
  mobileCountryCd?: string
  isOpenGoogleVerify?: number
  isOpenPhoneVerify?: number
  /**
   *  kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据账号（无密码）或者安全验证科目↗](https://yapi.nbttfc365.com/project/77/interface/api/8364)
// **/
// export const postV1MemberSafeQueryVerifySubjectByAccountApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeQueryVerifySubjectByAccountApiRequest,
//   YapiPostV1MemberSafeQueryVerifySubjectByAccountApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/query_verify_subject_by_account",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [根据账号（无密码）或者安全验证科目↗](https://yapi.nbttfc365.com/project/44/interface/api/2606) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /v1/member/safe/query_verify_subject_by_account`
 * @更新时间 `2022-11-21 19:48:26`
 */
export interface YapiPostV1MemberSafeQueryVerifySubjectByAccountApiRequest {
  /**
   * 1手机2邮箱3.id
   */
  type: number
  /**
   * 账号名
   */
  account: string
  /**
   * 区域的编号（当类型为手机时才必传）
   */
  mobileCountryCode: string
}

/**
 * 接口 [根据账号（无密码）或者安全验证科目↗](https://yapi.nbttfc365.com/project/44/interface/api/2606) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /v1/member/safe/query_verify_subject_by_account`
 * @更新时间 `2022-11-21 19:48:26`
 */
export interface YapiPostV1MemberSafeQueryVerifySubjectByAccountApiResponse {
  code?: number
  data?: YapiPostV1MemberSafeQueryVerifySubjectByAccountData
  message?: string
}
export interface YapiPostV1MemberSafeQueryVerifySubjectByAccountData {
  isOpenEmailVerify?: number
  mobileNumber?: string
  mobileCountryCd?: string
  isOpenGoogleVerify?: number
  isOpenPhoneVerify?: number
  /**
   *  kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据账号（无密码）或者安全验证科目↗](https://yapi.nbttfc365.com/project/44/interface/api/2606)
// **/
// export const postV1MemberSafeQueryVerifySubjectByAccountApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeQueryVerifySubjectByAccountApiRequest,
//   YapiPostV1MemberSafeQueryVerifySubjectByAccountApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/query_verify_subject_by_account",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
