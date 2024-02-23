/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [开启生物验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6094) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/biometric/bind`
 * @更新时间 `2023-06-08 16:52:22`
 */
export interface YapiPostV1MemberSafeBiometricBindApiRequest {
  /**
   * 设备ID
   */
  deviceNo: string
  /**
   * 设备名称
   */
  deviceName: string
  /**
   * 设备类型  1 web,2 ios,3 android
   */
  deviceType: number
  /**
   * 设备安装app版本
   */
  appVersion: string
  /**
   * 是否开启生物验证 1 开启 2 关闭
   */
  isBiometricVerify: number
  /**
   * 生物认证类型 1 faceid, 2 指纹 3 手势
   */
  biometricVerifyType: number
}

/**
 * 接口 [开启生物验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6094) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/safe/biometric/bind`
 * @更新时间 `2023-06-08 16:52:22`
 */
export interface YapiPostV1MemberSafeBiometricBindApiResponse {
  data?: {}
  /**
   * 请求状态标识
   */
  code?: number
  /**
   * 请求提示
   */
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [开启生物验证↗](https://yapi.nbttfc365.com/project/77/interface/api/6094)
// **/
// export const postV1MemberSafeBiometricBindApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeBiometricBindApiRequest,
//   YapiPostV1MemberSafeBiometricBindApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/biometric/bind",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [开启生物验证↗](https://yapi.nbttfc365.com/project/44/interface/api/163) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/biometric/bind`
 * @更新时间 `2022-07-22 17:57:26`
 */
export interface YapiPostV1MemberSafeBiometricBindApiRequest {
  /**
   * 设备ID
   */
  deviceNo: string
  /**
   * 设备名称
   */
  deviceName: string
  /**
   * 设备类型  1 web,2 ios,3 android
   */
  deviceType: number
  /**
   * 设备安装app版本
   */
  appVersion: string
  /**
   * 是否开启生物验证 1 开启 2 关闭
   */
  isBiometricVerify: number
  /**
   * 生物认证类型 1 faceid, 2 指纹 3 手势
   */
  biometricVerifyType: number
}

/**
 * 接口 [开启生物验证↗](https://yapi.nbttfc365.com/project/44/interface/api/163) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/safe/biometric/bind`
 * @更新时间 `2022-07-22 17:57:26`
 */
export interface YapiPostV1MemberSafeBiometricBindApiResponse {
  data?: {}
  /**
   * 请求状态标识
   */
  code?: number
  /**
   * 请求提示
   */
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [开启生物验证↗](https://yapi.nbttfc365.com/project/44/interface/api/163)
// **/
// export const postV1MemberSafeBiometricBindApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeBiometricBindApiRequest,
//   YapiPostV1MemberSafeBiometricBindApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/biometric/bind",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
