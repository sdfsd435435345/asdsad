/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [添加关注↗](https://yapi.nbttfc365.com/project/73/interface/api/4607) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /v1/c2c/follow/add`
 * @更新时间 `2023-03-03 16:17:06`
 */
export interface YapiPostV1C2cFollowAddApiRequest {
  /**
   * 用户id列表
   */
  userIds: number[]
}

/**
 * 接口 [添加关注↗](https://yapi.nbttfc365.com/project/73/interface/api/4607) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /v1/c2c/follow/add`
 * @更新时间 `2023-03-03 16:17:06`
 */
export interface YapiPostV1C2cFollowAddApiResponse {
  /**
   * success
   */
  data?: string
  code?: number
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [添加关注↗](https://yapi.nbttfc365.com/project/73/interface/api/4607)
// **/
// export const postV1C2cFollowAddApiRequest: MarkcoinRequest<
//   YapiPostV1C2cFollowAddApiRequest,
//   YapiPostV1C2cFollowAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/follow/add",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [添加关注↗](https://yapi.nbttfc365.com/project/77/interface/api/6579) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `POST /v1/c2c/follow/add`
 * @更新时间 `2023-06-08 16:47:04`
 */
export interface YapiPostV1C2cFollowAddApiRequest {
  /**
   * 用户id列表
   */
  userIds: number[]
}

/**
 * 接口 [添加关注↗](https://yapi.nbttfc365.com/project/77/interface/api/6579) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `POST /v1/c2c/follow/add`
 * @更新时间 `2023-06-08 16:47:04`
 */
export interface YapiPostV1C2cFollowAddApiResponse {
  /**
   * success
   */
  data?: string
  code?: number
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [添加关注↗](https://yapi.nbttfc365.com/project/77/interface/api/6579)
// **/
// export const postV1C2cFollowAddApiRequest: MarkcoinRequest<
//   YapiPostV1C2cFollowAddApiRequest,
//   YapiPostV1C2cFollowAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/follow/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
