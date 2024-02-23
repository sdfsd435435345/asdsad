/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [取消关注↗](https://yapi.nbttfc365.com/project/73/interface/api/4611) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /v1/c2c/follow/unFollow`
 * @更新时间 `2023-03-04 13:59:39`
 */
export interface YapiPostV1C2cFollowUnFollowApiRequest {
  /**
   * 用户ID列表
   */
  userIds?: number[]
}

/**
 * 接口 [取消关注↗](https://yapi.nbttfc365.com/project/73/interface/api/4611) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /v1/c2c/follow/unFollow`
 * @更新时间 `2023-03-04 13:59:39`
 */
export interface YapiPostV1C2cFollowUnFollowApiResponse {
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
// * [取消关注↗](https://yapi.nbttfc365.com/project/73/interface/api/4611)
// **/
// export const postV1C2cFollowUnFollowApiRequest: MarkcoinRequest<
//   YapiPostV1C2cFollowUnFollowApiRequest,
//   YapiPostV1C2cFollowUnFollowApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/follow/unFollow",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [取消关注↗](https://yapi.nbttfc365.com/project/77/interface/api/6559) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `POST /v1/c2c/follow/unFollow`
 * @更新时间 `2023-06-08 16:47:03`
 */
export interface YapiPostV1C2cFollowUnFollowApiRequest {
  /**
   * 用户ID列表
   */
  userIds?: number[]
}

/**
 * 接口 [取消关注↗](https://yapi.nbttfc365.com/project/77/interface/api/6559) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `POST /v1/c2c/follow/unFollow`
 * @更新时间 `2023-06-08 16:47:03`
 */
export interface YapiPostV1C2cFollowUnFollowApiResponse {
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
// * [取消关注↗](https://yapi.nbttfc365.com/project/77/interface/api/6559)
// **/
// export const postV1C2cFollowUnFollowApiRequest: MarkcoinRequest<
//   YapiPostV1C2cFollowUnFollowApiRequest,
//   YapiPostV1C2cFollowUnFollowApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/follow/unFollow",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
