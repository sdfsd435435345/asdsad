/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [通过app登录token颁发h5token↗](https://yapi.nbttfc365.com/project/77/interface/api/8279) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/h5`
 * @更新时间 `2023-06-08 16:52:12`
 */
export interface YapiPostV1MemberLoginH5ApiRequest {
  /**
   * token有效期 毫秒数
   */
  tokenTtl?: number
}

/**
 * 接口 [通过app登录token颁发h5token↗](https://yapi.nbttfc365.com/project/77/interface/api/8279) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/h5`
 * @更新时间 `2023-06-08 16:52:12`
 */
export interface YapiPostV1MemberLoginH5ApiResponse {
  /**
   * token
   */
  token: string
  /**
   * 刷新token
   */
  refreshToken: string
  /**
   * token过期时间
   */
  tokenExpireTime: string
  /**
   * 刷新token过期时间
   */
  refreshTokenExpireTime: string
  /**
   * 用户的详情信息
   */
  userInfo: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通过app登录token颁发h5token↗](https://yapi.nbttfc365.com/project/77/interface/api/8279)
// **/
// export const postV1MemberLoginH5ApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginH5ApiRequest,
//   YapiPostV1MemberLoginH5ApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/h5",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [通过app登录token颁发h5token↗](https://yapi.nbttfc365.com/project/44/interface/api/4267) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/h5`
 * @更新时间 `2023-01-16 17:09:10`
 */
export interface YapiPostV1MemberLoginH5ApiRequest {
  /**
   * token有效期 毫秒数
   */
  tokenTtl?: number
}

/**
 * 接口 [通过app登录token颁发h5token↗](https://yapi.nbttfc365.com/project/44/interface/api/4267) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/h5`
 * @更新时间 `2023-01-16 17:09:10`
 */
export interface YapiPostV1MemberLoginH5ApiResponse {
  /**
   * token
   */
  token: string
  /**
   * 刷新token
   */
  refreshToken: string
  /**
   * token过期时间
   */
  tokenExpireTime: string
  /**
   * 刷新token过期时间
   */
  refreshTokenExpireTime: string
  /**
   * 用户的详情信息
   */
  userInfo: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通过app登录token颁发h5token↗](https://yapi.nbttfc365.com/project/44/interface/api/4267)
// **/
// export const postV1MemberLoginH5ApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginH5ApiRequest,
//   YapiPostV1MemberLoginH5ApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/h5",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
