/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [手机号登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6034) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/mobile`
 * @更新时间 `2023-06-08 16:52:10`
 */
export interface YapiPostV1MemberLoginMobileApiRequest {
  /**
   * 手机号
   */
  mobile: string
  /**
   * 密码
   */
  password: string
  /**
   * 手机区号
   */
  mobileCountryCode: string
  /**
   * token有效期 毫秒数
   */
  tokenTtl?: number
}

/**
 * 接口 [手机号登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6034) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/mobile`
 * @更新时间 `2023-06-08 16:52:10`
 */
export interface YapiPostV1MemberLoginMobileApiResponse {
  /**
   * token
   */
  token: string
  /**
   * 刷新token
   */
  refreshToken: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机号登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6034)
// **/
// export const postV1MemberLoginMobileApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginMobileApiRequest,
//   YapiPostV1MemberLoginMobileApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/mobile",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [手机号登录↗](https://yapi.nbttfc365.com/project/44/interface/api/127) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/mobile`
 * @更新时间 `2022-11-21 10:34:53`
 */
export interface YapiPostV1MemberLoginMobileApiRequest {
  /**
   * 手机号
   */
  mobile: string
  /**
   * 密码
   */
  password: string
  /**
   * 手机区号
   */
  mobileCountryCode: string
  /**
   * token有效期 毫秒数
   */
  tokenTtl?: number
}

/**
 * 接口 [手机号登录↗](https://yapi.nbttfc365.com/project/44/interface/api/127) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/mobile`
 * @更新时间 `2022-11-21 10:34:53`
 */
export interface YapiPostV1MemberLoginMobileApiResponse {
  /**
   * token
   */
  token: string
  /**
   * 刷新token
   */
  refreshToken: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机号登录↗](https://yapi.nbttfc365.com/project/44/interface/api/127)
// **/
// export const postV1MemberLoginMobileApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginMobileApiRequest,
//   YapiPostV1MemberLoginMobileApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/mobile",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
