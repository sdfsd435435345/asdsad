/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [设置交易密码(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/8339) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/trade/pwd`
 * @更新时间 `2023-06-08 16:52:19`
 */
export interface YapiPostV1MemberSafeTradePwdApiRequest {
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
 * 接口 [设置交易密码(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/8339) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/trade/pwd`
 * @更新时间 `2023-06-08 16:52:19`
 */
export interface YapiPostV1MemberSafeTradePwdApiResponse {
  /**
   * 请求是否成功
   */
  code?: number
  data?: YapiPostV1MemberSafeTradePwdData
  /**
   * 请求提示
   */
  message?: string
}
export interface YapiPostV1MemberSafeTradePwdData {
  /**
   * 密码设置是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置交易密码(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/8339)
// **/
// export const postV1MemberSafeTradePwdApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeTradePwdApiRequest,
//   YapiPostV1MemberSafeTradePwdApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/trade/pwd",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [设置交易密码(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/2717) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/trade/pwd`
 * @更新时间 `2022-10-18 13:58:11`
 */
export interface YapiPostV1MemberSafeTradePwdApiRequest {
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
 * 接口 [设置交易密码(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/2717) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/trade/pwd`
 * @更新时间 `2022-10-18 13:58:11`
 */
export interface YapiPostV1MemberSafeTradePwdApiResponse {
  /**
   * 请求是否成功
   */
  code?: number
  data?: YapiPostV1MemberSafeTradePwdData
  /**
   * 请求提示
   */
  message?: string
}
export interface YapiPostV1MemberSafeTradePwdData {
  /**
   * 密码设置是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置交易密码(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/2717)
// **/
// export const postV1MemberSafeTradePwdApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeTradePwdApiRequest,
//   YapiPostV1MemberSafeTradePwdApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/trade/pwd",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
