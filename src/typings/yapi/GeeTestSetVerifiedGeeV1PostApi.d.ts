/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [极验状态进行判断并登记↗](https://yapi.nbttfc365.com/project/77/interface/api/8354) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /v1/gee_test/set_verified_gee`
 * @更新时间 `2023-06-08 16:52:33`
 */
export interface YapiPostV1GeeTestSetVerifiedGeeApiRequest {
  /**
   * 账号（手机号或邮箱）
   */
  account: string
  /**
   * 极验的唯一性标签,对应于之前返回的challenge。
   */
  gtChallenge: string
}

/**
 * 接口 [极验状态进行判断并登记↗](https://yapi.nbttfc365.com/project/77/interface/api/8354) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /v1/gee_test/set_verified_gee`
 * @更新时间 `2023-06-08 16:52:33`
 */
export interface YapiPostV1GeeTestSetVerifiedGeeApiResponse {
  /**
   * 极验的结果
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [极验状态进行判断并登记↗](https://yapi.nbttfc365.com/project/77/interface/api/8354)
// **/
// export const postV1GeeTestSetVerifiedGeeApiRequest: MarkcoinRequest<
//   YapiPostV1GeeTestSetVerifiedGeeApiRequest,
//   YapiPostV1GeeTestSetVerifiedGeeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/gee_test/set_verified_gee",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [极验状态进行判断并登记↗](https://yapi.nbttfc365.com/project/44/interface/api/2588) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /v1/gee_test/set_verified_gee`
 * @更新时间 `2022-09-26 16:25:25`
 */
export interface YapiPostV1GeeTestSetVerifiedGeeApiRequest {
  /**
   * 账号（手机号或邮箱）
   */
  account: string
  /**
   * 极验的唯一性标签,对应于之前返回的challenge。
   */
  gtChallenge: string
}

/**
 * 接口 [极验状态进行判断并登记↗](https://yapi.nbttfc365.com/project/44/interface/api/2588) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /v1/gee_test/set_verified_gee`
 * @更新时间 `2022-09-26 16:25:25`
 */
export interface YapiPostV1GeeTestSetVerifiedGeeApiResponse {
  /**
   * 极验的结果
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [极验状态进行判断并登记↗](https://yapi.nbttfc365.com/project/44/interface/api/2588)
// **/
// export const postV1GeeTestSetVerifiedGeeApiRequest: MarkcoinRequest<
//   YapiPostV1GeeTestSetVerifiedGeeApiRequest,
//   YapiPostV1GeeTestSetVerifiedGeeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/gee_test/set_verified_gee",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
