/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [IM刷新token↗](https://yapi.nbttfc365.com/project/73/interface/api/5012) 的 **请求类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_580)
 * @请求头 `POST /v1/im/refreshToken`
 * @更新时间 `2023-11-03 17:40:05`
 */
export interface YapiPostV1ImRefreshTokenApiRequest {}

/**
 * 接口 [IM刷新token↗](https://yapi.nbttfc365.com/project/73/interface/api/5012) 的 **返回类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_580)
 * @请求头 `POST /v1/im/refreshToken`
 * @更新时间 `2023-11-03 17:40:05`
 */
export interface YapiPostV1ImRefreshTokenApiResponse {
  /**
   * 新token
   */
  token: string
  /**
   * appkey
   */
  appKey?: string
  /**
   * IM用户ID
   */
  userId: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [IM刷新token↗](https://yapi.nbttfc365.com/project/73/interface/api/5012)
// **/
// export const postV1ImRefreshTokenApiRequest: MarkcoinRequest<
//   YapiPostV1ImRefreshTokenApiRequest,
//   YapiPostV1ImRefreshTokenApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/im/refreshToken",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [IM刷新token↗](https://yapi.nbttfc365.com/project/77/interface/api/6729) 的 **请求类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_630)
 * @请求头 `POST /v1/im/refreshToken`
 * @更新时间 `2023-06-08 16:47:14`
 */
export interface YapiPostV1ImRefreshTokenApiRequest {
  /**
   * 用户id
   */
  uid?: string
}

/**
 * 接口 [IM刷新token↗](https://yapi.nbttfc365.com/project/77/interface/api/6729) 的 **返回类型**
 *
 * @分类 [聊天↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_630)
 * @请求头 `POST /v1/im/refreshToken`
 * @更新时间 `2023-06-08 16:47:14`
 */
export interface YapiPostV1ImRefreshTokenApiResponse {
  /**
   * 新token
   */
  token: string
  /**
   * appkey
   */
  appKey: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [IM刷新token↗](https://yapi.nbttfc365.com/project/77/interface/api/6729)
// **/
// export const postV1ImRefreshTokenApiRequest: MarkcoinRequest<
//   YapiPostV1ImRefreshTokenApiRequest,
//   YapiPostV1ImRefreshTokenApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/im/refreshToken",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
