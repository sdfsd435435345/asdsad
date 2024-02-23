/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [手机号注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6059) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/register/mobile`
 * @更新时间 `2023-06-08 16:52:20`
 */
export interface YapiPostV1MemberRegisterMobileApiRequest {
  /**
   * 手机区号
   */
  mobileCountryCode: string
  /**
   * 手机号码
   */
  mobileNumber: string
  /**
   * 登录密码
   */
  loginPassword: string
  /**
   * 注册国籍 [CN,US,....]
   */
  regCountry: string
  /**
   * 邀请码
   */
  invite?: string
  /**
   * 商户id
   */
  businessId?: number
}

/**
 * 接口 [手机号注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6059) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/register/mobile`
 * @更新时间 `2023-06-08 16:52:20`
 */
export interface YapiPostV1MemberRegisterMobileApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberRegisterMobileData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberRegisterMobileData {
  /**
   * 注册是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机号注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6059)
// **/
// export const postV1MemberRegisterMobileApiRequest: MarkcoinRequest<
//   YapiPostV1MemberRegisterMobileApiRequest,
//   YapiPostV1MemberRegisterMobileApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/register/mobile",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [手机号注册↗](https://yapi.nbttfc365.com/project/44/interface/api/142) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/register/mobile`
 * @更新时间 `2022-10-10 14:11:14`
 */
export interface YapiPostV1MemberRegisterMobileApiRequest {
  /**
   * 手机区号
   */
  mobileCountryCode: string
  /**
   * 手机号码
   */
  mobileNumber: string
  /**
   * 登录密码
   */
  loginPassword: string
  /**
   * 注册国籍 [CN,US,....]
   */
  regCountry: string
  /**
   * 邀请码
   */
  invite?: string
  /**
   * 商户id
   */
  businessId?: number
}

/**
 * 接口 [手机号注册↗](https://yapi.nbttfc365.com/project/44/interface/api/142) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/register/mobile`
 * @更新时间 `2022-10-10 14:11:14`
 */
export interface YapiPostV1MemberRegisterMobileApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberRegisterMobileData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberRegisterMobileData {
  /**
   * 注册是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机号注册↗](https://yapi.nbttfc365.com/project/44/interface/api/142)
// **/
// export const postV1MemberRegisterMobileApiRequest: MarkcoinRequest<
//   YapiPostV1MemberRegisterMobileApiRequest,
//   YapiPostV1MemberRegisterMobileApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/register/mobile",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
