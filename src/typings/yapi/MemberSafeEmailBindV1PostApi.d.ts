/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [绑定邮箱验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6084) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/email/bind`
 * @更新时间 `2023-06-08 16:52:21`
 */
export interface YapiPostV1MemberSafeEmailBindApiRequest {
  /**
   * 邮箱地址
   */
  email: string
  /**
   * 验证码
   */
  verifyCode: string
  /**
   * 绑定邮箱号码(此接口固定为8)
   */
  operateType: number
}

/**
 * 接口 [绑定邮箱验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6084) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/email/bind`
 * @更新时间 `2023-06-08 16:52:21`
 */
export interface YapiPostV1MemberSafeEmailBindApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberSafeEmailBindData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeEmailBindData {
  /**
   * 开启是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [绑定邮箱验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6084)
// **/
// export const postV1MemberSafeEmailBindApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeEmailBindApiRequest,
//   YapiPostV1MemberSafeEmailBindApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/email/bind",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [绑定邮箱验证↗](https://yapi.nbttfc365.com/project/44/interface/api/157) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/email/bind`
 * @更新时间 `2022-10-26 10:17:31`
 */
export interface YapiPostV1MemberSafeEmailBindApiRequest {
  /**
   * 邮箱地址
   */
  email: string
  /**
   * 验证码
   */
  verifyCode: string
  /**
   * 绑定邮箱号码(此接口固定为8)
   */
  operateType: number
}

/**
 * 接口 [绑定邮箱验证↗](https://yapi.nbttfc365.com/project/44/interface/api/157) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/email/bind`
 * @更新时间 `2022-10-26 10:17:31`
 */
export interface YapiPostV1MemberSafeEmailBindApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberSafeEmailBindData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeEmailBindData {
  /**
   * 开启是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [绑定邮箱验证↗](https://yapi.nbttfc365.com/project/44/interface/api/157)
// **/
// export const postV1MemberSafeEmailBindApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeEmailBindApiRequest,
//   YapiPostV1MemberSafeEmailBindApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/email/bind",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
