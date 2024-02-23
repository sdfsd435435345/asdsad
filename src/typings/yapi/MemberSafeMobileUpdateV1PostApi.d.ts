/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [修改手机验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6209) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/mobile/update`
 * @更新时间 `2023-06-08 16:52:29`
 */
export interface YapiPostV1MemberSafeMobileUpdateApiRequest {
  /**
   * 区号
   */
  mobileCountryCode: string
  /**
   * 手机号码
   */
  mobileNumber: string
  /**
   * 新手机号码验证码
   */
  verifyCode: string
  /**
   * 固定值11
   */
  operateType: number
}

/**
 * 接口 [修改手机验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6209) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/mobile/update`
 * @更新时间 `2023-06-08 16:52:29`
 */
export interface YapiPostV1MemberSafeMobileUpdateApiResponse {
  /**
   * 请求是否成功
   */
  code?: number
  data?: YapiPostV1MemberSafeMobileUpdateData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeMobileUpdateData {
  /**
   * 绑定是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改手机验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6209)
// **/
// export const postV1MemberSafeMobileUpdateApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeMobileUpdateApiRequest,
//   YapiPostV1MemberSafeMobileUpdateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/mobile/update",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [修改手机验证↗](https://yapi.nbttfc365.com/project/44/interface/api/422) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/mobile/update`
 * @更新时间 `2022-10-26 10:19:08`
 */
export interface YapiPostV1MemberSafeMobileUpdateApiRequest {
  /**
   * 区号
   */
  mobileCountryCode: string
  /**
   * 手机号码
   */
  mobileNumber: string
  /**
   * 新手机号码验证码
   */
  verifyCode: string
  /**
   * 固定值11
   */
  operateType: number
}

/**
 * 接口 [修改手机验证↗](https://yapi.nbttfc365.com/project/44/interface/api/422) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/mobile/update`
 * @更新时间 `2022-10-26 10:19:08`
 */
export interface YapiPostV1MemberSafeMobileUpdateApiResponse {
  /**
   * 请求是否成功
   */
  code?: number
  data?: YapiPostV1MemberSafeMobileUpdateData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberSafeMobileUpdateData {
  /**
   * 绑定是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改手机验证↗](https://yapi.nbttfc365.com/project/44/interface/api/422)
// **/
// export const postV1MemberSafeMobileUpdateApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeMobileUpdateApiRequest,
//   YapiPostV1MemberSafeMobileUpdateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/mobile/update",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
