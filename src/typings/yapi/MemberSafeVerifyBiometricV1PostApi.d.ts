/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户登录时进行生物安全项验证的确认接口↗](https://yapi.nbttfc365.com/project/77/interface/api/8284) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/verify/biometric`
 * @更新时间 `2023-06-08 16:52:13`
 */
export interface YapiPostV1MemberSafeVerifyBiometricApiRequest {
  uid: string
}

/**
 * 接口 [用户登录时进行生物安全项验证的确认接口↗](https://yapi.nbttfc365.com/project/77/interface/api/8284) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/verify/biometric`
 * @更新时间 `2023-06-08 16:52:13`
 */
export interface YapiPostV1MemberSafeVerifyBiometricApiResponse {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户登录时进行生物安全项验证的确认接口↗](https://yapi.nbttfc365.com/project/77/interface/api/8284)
// **/
// export const postV1MemberSafeVerifyBiometricApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeVerifyBiometricApiRequest,
//   YapiPostV1MemberSafeVerifyBiometricApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/verify/biometric",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [用户登录时进行生物安全项验证的确认接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2795) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/verify/biometric`
 * @更新时间 `2022-10-12 13:57:37`
 */
export interface YapiPostV1MemberSafeVerifyBiometricApiRequest {
  uid: string
}

/**
 * 接口 [用户登录时进行生物安全项验证的确认接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2795) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/verify/biometric`
 * @更新时间 `2022-10-12 13:57:37`
 */
export interface YapiPostV1MemberSafeVerifyBiometricApiResponse {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户登录时进行生物安全项验证的确认接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2795)
// **/
// export const postV1MemberSafeVerifyBiometricApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeVerifyBiometricApiRequest,
//   YapiPostV1MemberSafeVerifyBiometricApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/verify/biometric",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
