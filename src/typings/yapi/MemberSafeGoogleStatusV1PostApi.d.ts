/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [开启\/关闭google验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6169) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/google/status`
 * @更新时间 `2023-06-08 16:52:27`
 */
export interface YapiPostV1MemberSafeGoogleStatusApiRequest {
  /**
   * 1 开启 2 关闭
   */
  status: number
}

/**
 * 接口 [开启\/关闭google验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6169) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/google/status`
 * @更新时间 `2023-06-08 16:52:27`
 */
export interface YapiPostV1MemberSafeGoogleStatusApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberSafeGoogleStatusData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeGoogleStatusData {
  /**
   * 绑定是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [开启/关闭google验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6169)
// **/
// export const postV1MemberSafeGoogleStatusApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeGoogleStatusApiRequest,
//   YapiPostV1MemberSafeGoogleStatusApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/google/status",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [开启\/关闭google验证↗](https://yapi.nbttfc365.com/project/44/interface/api/347) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/google/status`
 * @更新时间 `2022-10-06 15:13:48`
 */
export interface YapiPostV1MemberSafeGoogleStatusApiRequest {
  /**
   * 1 开启 2 关闭
   */
  status: number
}

/**
 * 接口 [开启\/关闭google验证↗](https://yapi.nbttfc365.com/project/44/interface/api/347) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/google/status`
 * @更新时间 `2022-10-06 15:13:48`
 */
export interface YapiPostV1MemberSafeGoogleStatusApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberSafeGoogleStatusData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeGoogleStatusData {
  /**
   * 绑定是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [开启/关闭google验证↗](https://yapi.nbttfc365.com/project/44/interface/api/347)
// **/
// export const postV1MemberSafeGoogleStatusApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeGoogleStatusApiRequest,
//   YapiPostV1MemberSafeGoogleStatusApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/google/status",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
