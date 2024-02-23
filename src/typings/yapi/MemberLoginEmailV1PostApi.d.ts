/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邮箱登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6069) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/email`
 * @更新时间 `2023-06-08 16:52:20`
 */
export interface YapiPostV1MemberLoginEmailApiRequest {
  /**
   * 邮箱账号
   */
  email: string
  /**
   * 密码
   */
  password: string
  /**
   * token有效期 毫秒数
   */
  tokenTtl?: number
}

/**
 * 接口 [邮箱登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6069) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/email`
 * @更新时间 `2023-06-08 16:52:20`
 */
export interface YapiPostV1MemberLoginEmailApiResponse {
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
// * [邮箱登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6069)
// **/
// export const postV1MemberLoginEmailApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginEmailApiRequest,
//   YapiPostV1MemberLoginEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/email",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [邮箱登录↗](https://yapi.nbttfc365.com/project/44/interface/api/136) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/email`
 * @更新时间 `2022-11-21 10:35:11`
 */
export interface YapiPostV1MemberLoginEmailApiRequest {
  /**
   * 邮箱账号
   */
  email: string
  /**
   * 密码
   */
  password: string
  /**
   * token有效期 毫秒数
   */
  tokenTtl?: number
}

/**
 * 接口 [邮箱登录↗](https://yapi.nbttfc365.com/project/44/interface/api/136) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/email`
 * @更新时间 `2022-11-21 10:35:11`
 */
export interface YapiPostV1MemberLoginEmailApiResponse {
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
// * [邮箱登录↗](https://yapi.nbttfc365.com/project/44/interface/api/136)
// **/
// export const postV1MemberLoginEmailApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginEmailApiRequest,
//   YapiPostV1MemberLoginEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/email",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
