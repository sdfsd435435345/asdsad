/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [uId登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6144) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/uid`
 * @更新时间 `2023-06-08 16:52:25`
 */
export interface YapiPostV1MemberLoginUidApiRequest {
  uid: string
  password: string
  /**
   * token有效期 毫秒级
   */
  tokenTtl?: number
}

/**
 * 接口 [uId登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6144) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/uid`
 * @更新时间 `2023-06-08 16:52:25`
 */
export interface YapiPostV1MemberLoginUidApiResponse {
  meesage?: string
  code?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [uId登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6144)
// **/
// export const postV1MemberLoginUidApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginUidApiRequest,
//   YapiPostV1MemberLoginUidApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/uid",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [uId登录↗](https://yapi.nbttfc365.com/project/44/interface/api/248) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/uid`
 * @更新时间 `2022-10-07 16:37:04`
 */
export interface YapiPostV1MemberLoginUidApiRequest {
  uid: string
  password: string
  /**
   * token有效期 毫秒级
   */
  tokenTtl?: number
}

/**
 * 接口 [uId登录↗](https://yapi.nbttfc365.com/project/44/interface/api/248) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/uid`
 * @更新时间 `2022-10-07 16:37:04`
 */
export interface YapiPostV1MemberLoginUidApiResponse {
  meesage?: string
  code?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [uId登录↗](https://yapi.nbttfc365.com/project/44/interface/api/248)
// **/
// export const postV1MemberLoginUidApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginUidApiRequest,
//   YapiPostV1MemberLoginUidApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/uid",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
