/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [修改密码↗](https://yapi.nbttfc365.com/project/77/interface/api/6099) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/pwd`
 * @更新时间 `2023-06-08 16:52:22`
 */
export interface YapiPostV1MemberSafePwdApiRequest {
  /**
   * 老密码
   */
  oldPassword: string
  /**
   * 新密码
   */
  newPassword: string
}

/**
 * 接口 [修改密码↗](https://yapi.nbttfc365.com/project/77/interface/api/6099) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/pwd`
 * @更新时间 `2023-06-08 16:52:22`
 */
export interface YapiPostV1MemberSafePwdApiResponse {
  /**
   * 请求是否成功
   */
  code?: number
  data?: YapiPostV1MemberSafePwdData
  /**
   * 请求提示
   */
  message?: string
}
export interface YapiPostV1MemberSafePwdData {
  /**
   * 密码重置是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改密码↗](https://yapi.nbttfc365.com/project/77/interface/api/6099)
// **/
// export const postV1MemberSafePwdApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafePwdApiRequest,
//   YapiPostV1MemberSafePwdApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/pwd",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [修改密码↗](https://yapi.nbttfc365.com/project/44/interface/api/166) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/pwd`
 * @更新时间 `2022-10-18 13:57:10`
 */
export interface YapiPostV1MemberSafePwdApiRequest {
  /**
   * 老密码
   */
  oldPassword: string
  /**
   * 新密码
   */
  newPassword: string
}

/**
 * 接口 [修改密码↗](https://yapi.nbttfc365.com/project/44/interface/api/166) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/pwd`
 * @更新时间 `2022-10-18 13:57:10`
 */
export interface YapiPostV1MemberSafePwdApiResponse {
  /**
   * 请求是否成功
   */
  code?: number
  data?: YapiPostV1MemberSafePwdData
  /**
   * 请求提示
   */
  message?: string
}
export interface YapiPostV1MemberSafePwdData {
  /**
   * 密码重置是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改密码↗](https://yapi.nbttfc365.com/project/44/interface/api/166)
// **/
// export const postV1MemberSafePwdApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafePwdApiRequest,
//   YapiPostV1MemberSafePwdApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/pwd",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
