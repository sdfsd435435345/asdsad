/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据账号查询是否处在工单中↗](https://yapi.nbttfc365.com/project/77/interface/api/8329) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/query_is_process_by_account`
 * @更新时间 `2023-06-08 16:52:18`
 */
export interface YapiPostV1MemberSafeQueryIsProcessByAccountApiRequest {
  /**
   * 1.手机 2.邮箱
   */
  type: number
  /**
   * 账号名
   */
  accountName: string
}

/**
 * 接口 [根据账号查询是否处在工单中↗](https://yapi.nbttfc365.com/project/77/interface/api/8329) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/query_is_process_by_account`
 * @更新时间 `2023-06-08 16:52:18`
 */
export interface YapiPostV1MemberSafeQueryIsProcessByAccountApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1MemberSafeQueryIsProcessByAccountData
}
export interface YapiPostV1MemberSafeQueryIsProcessByAccountData {
  isBeginManualVerifyProcess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据账号查询是否处在工单中↗](https://yapi.nbttfc365.com/project/77/interface/api/8329)
// **/
// export const postV1MemberSafeQueryIsProcessByAccountApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeQueryIsProcessByAccountApiRequest,
//   YapiPostV1MemberSafeQueryIsProcessByAccountApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/query_is_process_by_account",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [根据账号查询是否处在工单中↗](https://yapi.nbttfc365.com/project/44/interface/api/2645) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/query_is_process_by_account`
 * @更新时间 `2022-10-04 10:56:22`
 */
export interface YapiPostV1MemberSafeQueryIsProcessByAccountApiRequest {
  /**
   * 1.手机 2.邮箱
   */
  type: number
  /**
   * 账号名
   */
  accountName: string
}

/**
 * 接口 [根据账号查询是否处在工单中↗](https://yapi.nbttfc365.com/project/44/interface/api/2645) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/query_is_process_by_account`
 * @更新时间 `2022-10-04 10:56:22`
 */
export interface YapiPostV1MemberSafeQueryIsProcessByAccountApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1MemberSafeQueryIsProcessByAccountData
}
export interface YapiPostV1MemberSafeQueryIsProcessByAccountData {
  isBeginManualVerifyProcess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据账号查询是否处在工单中↗](https://yapi.nbttfc365.com/project/44/interface/api/2645)
// **/
// export const postV1MemberSafeQueryIsProcessByAccountApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeQueryIsProcessByAccountApiRequest,
//   YapiPostV1MemberSafeQueryIsProcessByAccountApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/query_is_process_by_account",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
