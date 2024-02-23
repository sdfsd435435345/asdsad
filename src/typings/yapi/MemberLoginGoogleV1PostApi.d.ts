/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [Google登陆↗](https://yapi.nbttfc365.com/project/77/interface/api/6139) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/google`
 * @更新时间 `2023-06-08 16:52:24`
 */
export interface YapiPostV1MemberLoginGoogleApiRequest {
  /**
   * google返回的token
   */
  idToken: string
  /**
   * google的用户ID
   */
  userId?: string
  /**
   * token有效期  毫秒级
   */
  tokenTtl?: number
}

/**
 * 接口 [Google登陆↗](https://yapi.nbttfc365.com/project/77/interface/api/6139) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/google`
 * @更新时间 `2023-06-08 16:52:24`
 */
export interface YapiPostV1MemberLoginGoogleApiResponse {
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
// * [Google登陆↗](https://yapi.nbttfc365.com/project/77/interface/api/6139)
// **/
// export const postV1MemberLoginGoogleApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginGoogleApiRequest,
//   YapiPostV1MemberLoginGoogleApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/google",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [Google登陆↗](https://yapi.nbttfc365.com/project/44/interface/api/240) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/google`
 * @更新时间 `2022-11-21 10:36:16`
 */
export interface YapiPostV1MemberLoginGoogleApiRequest {
  /**
   * google返回的token
   */
  idToken: string
  /**
   * google的用户ID
   */
  userId?: string
  /**
   * token有效期  毫秒级
   */
  tokenTtl?: number
}

/**
 * 接口 [Google登陆↗](https://yapi.nbttfc365.com/project/44/interface/api/240) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/google`
 * @更新时间 `2022-11-21 10:36:16`
 */
export interface YapiPostV1MemberLoginGoogleApiResponse {
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
// * [Google登陆↗](https://yapi.nbttfc365.com/project/44/interface/api/240)
// **/
// export const postV1MemberLoginGoogleApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginGoogleApiRequest,
//   YapiPostV1MemberLoginGoogleApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/google",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
