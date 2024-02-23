/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [发送邮箱验证码(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/6164) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/verify/email/send`
 * @更新时间 `2023-06-08 16:52:26`
 */
export interface YapiPostV1MemberSafeVerifyEmailSendApiRequest {
  /**
   * 邮箱地址
   */
  email: string
}

/**
 * 接口 [发送邮箱验证码(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/6164) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/verify/email/send`
 * @更新时间 `2023-06-08 16:52:26`
 */
export interface YapiPostV1MemberSafeVerifyEmailSendApiResponse {
  data?: YapiPostV1MemberSafeVerifyEmailSendData
  /**
   * 提示信息
   */
  message?: string
  /**
   * 请求状态标识
   */
  code?: number
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeVerifyEmailSendData {
  /**
   * 是否发送成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [发送邮箱验证码(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/6164)
// **/
// export const postV1MemberSafeVerifyEmailSendApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeVerifyEmailSendApiRequest,
//   YapiPostV1MemberSafeVerifyEmailSendApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/verify/email/send",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [发送邮箱验证码(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/304) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/verify/email/send`
 * @更新时间 `2022-10-06 16:58:13`
 */
export interface YapiPostV1MemberSafeVerifyEmailSendApiRequest {
  /**
   * 邮箱地址
   */
  email: string
}

/**
 * 接口 [发送邮箱验证码(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/304) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/verify/email/send`
 * @更新时间 `2022-10-06 16:58:13`
 */
export interface YapiPostV1MemberSafeVerifyEmailSendApiResponse {
  data?: YapiPostV1MemberSafeVerifyEmailSendData
  /**
   * 提示信息
   */
  message?: string
  /**
   * 请求状态标识
   */
  code?: number
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeVerifyEmailSendData {
  /**
   * 是否发送成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [发送邮箱验证码(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/304)
// **/
// export const postV1MemberSafeVerifyEmailSendApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeVerifyEmailSendApiRequest,
//   YapiPostV1MemberSafeVerifyEmailSendApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/verify/email/send",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
