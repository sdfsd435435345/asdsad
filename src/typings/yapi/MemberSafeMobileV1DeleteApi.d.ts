/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除手机验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6219) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `DELETE /v1/member/safe/mobile`
 * @更新时间 `2023-06-08 16:52:30`
 */
export interface YapiDeleteV1MemberSafeMobileApiRequest {}

/**
 * 接口 [删除手机验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6219) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `DELETE /v1/member/safe/mobile`
 * @更新时间 `2023-06-08 16:52:30`
 */
export interface YapiDeleteV1MemberSafeMobileApiResponse {
  /**
   * 请求是否成功
   */
  code?: number
  data?: YapiDeleteV1MemberSafeMobileData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiDeleteV1MemberSafeMobileData {
  /**
   * 绑定是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除手机验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6219)
// **/
// export const deleteV1MemberSafeMobileApiRequest: MarkcoinRequest<
//   YapiDeleteV1MemberSafeMobileApiRequest,
//   YapiDeleteV1MemberSafeMobileApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/mobile",
//     method: "DELETE",
//     data
//   })
// }

/**
 * 接口 [删除手机验证↗](https://yapi.nbttfc365.com/project/44/interface/api/428) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `DELETE /v1/member/safe/mobile`
 * @更新时间 `2022-10-18 17:10:43`
 */
export interface YapiDeleteV1MemberSafeMobileApiRequest {}

/**
 * 接口 [删除手机验证↗](https://yapi.nbttfc365.com/project/44/interface/api/428) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `DELETE /v1/member/safe/mobile`
 * @更新时间 `2022-10-18 17:10:43`
 */
export interface YapiDeleteV1MemberSafeMobileApiResponse {
  /**
   * 请求是否成功
   */
  code?: number
  data?: YapiDeleteV1MemberSafeMobileData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiDeleteV1MemberSafeMobileData {
  /**
   * 绑定是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除手机验证↗](https://yapi.nbttfc365.com/project/44/interface/api/428)
// **/
// export const deleteV1MemberSafeMobileApiRequest: MarkcoinRequest<
//   YapiDeleteV1MemberSafeMobileApiRequest,
//   YapiDeleteV1MemberSafeMobileApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/mobile",
//     method: "DELETE",
//     data
//   })
// }

/* prettier-ignore-end */
