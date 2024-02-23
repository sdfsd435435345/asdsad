/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [刷新token↗](https://yapi.nbttfc365.com/project/77/interface/api/6809) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `POST /auth/refreshToken`
 * @更新时间 `2023-06-08 16:50:23`
 */
export interface YapiPostAuthRefreshTokenApiRequest {
  /**
   * refreshToken值
   */
  refreshToken: string
  tokenTtl: number
}

/**
 * 接口 [刷新token↗](https://yapi.nbttfc365.com/project/77/interface/api/6809) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `POST /auth/refreshToken`
 * @更新时间 `2023-06-08 16:50:23`
 */
export interface YapiPostAuthRefreshTokenApiResponse {
  code: number
  data: YapiPostAuthRefreshTokenData
  message: string
}
/**
 * 新的token
 */
export interface YapiPostAuthRefreshTokenData {
  /**
   * 新的accessToken
   */
  accessToken: string
  /**
   * 新的refreshToken
   */
  refreshToken: string
  /**
   * accessToken过期时间（时间戳）
   */
  accessTokenExpireTime: number
  /**
   * refreshToken过期时间（时间戳）
   */
  refreshTokenExpireTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [刷新token↗](https://yapi.nbttfc365.com/project/77/interface/api/6809)
// **/
// export const postAuthRefreshTokenApiRequest: MarkcoinRequest<
//   YapiPostAuthRefreshTokenApiRequest,
//   YapiPostAuthRefreshTokenApiResponse['data']
// > = data => {
//   return request({
//     path: "/auth/refreshToken",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [刷新token↗](https://yapi.nbttfc365.com/project/44/interface/api/3507) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `POST /auth/refreshToken`
 * @更新时间 `2023-01-09 16:27:36`
 */
export interface YapiPostAuthRefreshTokenApiRequest {
  /**
   * refreshToken值
   */
  refreshToken: string
  tokenTtl: number
}

/**
 * 接口 [刷新token↗](https://yapi.nbttfc365.com/project/44/interface/api/3507) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `POST /auth/refreshToken`
 * @更新时间 `2023-01-09 16:27:36`
 */
export interface YapiPostAuthRefreshTokenApiResponse {
  code: number
  data: YapiPostAuthRefreshTokenData
  message: string
}
/**
 * 新的token
 */
export interface YapiPostAuthRefreshTokenData {
  /**
   * 新的accessToken
   */
  accessToken: string
  /**
   * 新的refreshToken
   */
  refreshToken: string
  /**
   * accessToken过期时间（时间戳）
   */
  accessTokenExpireTime: number
  /**
   * refreshToken过期时间（时间戳）
   */
  refreshTokenExpireTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [刷新token↗](https://yapi.nbttfc365.com/project/44/interface/api/3507)
// **/
// export const postAuthRefreshTokenApiRequest: MarkcoinRequest<
//   YapiPostAuthRefreshTokenApiRequest,
//   YapiPostAuthRefreshTokenApiResponse['data']
// > = data => {
//   return request({
//     path: "/auth/refreshToken",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
