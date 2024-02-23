/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取扫码登录二维码↗](https://yapi.nbttfc365.com/project/77/interface/api/8309) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/generate_qrcode_token`
 * @更新时间 `2023-06-08 16:52:16`
 */
export interface YapiPostV1MemberLoginGenerateQrcodeTokenApiRequest {
  deviceName: string
}

/**
 * 接口 [获取扫码登录二维码↗](https://yapi.nbttfc365.com/project/77/interface/api/8309) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/generate_qrcode_token`
 * @更新时间 `2023-06-08 16:52:16`
 */
export interface YapiPostV1MemberLoginGenerateQrcodeTokenApiResponse {
  code?: number
  data?: YapiPostV1MemberLoginGenerateQrcodeTokenData
  message?: string
}
export interface YapiPostV1MemberLoginGenerateQrcodeTokenData {
  qrCodeToken?: string
  scanUrl?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取扫码登录二维码↗](https://yapi.nbttfc365.com/project/77/interface/api/8309)
// **/
// export const postV1MemberLoginGenerateQrcodeTokenApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginGenerateQrcodeTokenApiRequest,
//   YapiPostV1MemberLoginGenerateQrcodeTokenApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/generate_qrcode_token",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [获取扫码登录二维码↗](https://yapi.nbttfc365.com/project/44/interface/api/2591) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/generate_qrcode_token`
 * @更新时间 `2022-09-27 17:16:20`
 */
export interface YapiPostV1MemberLoginGenerateQrcodeTokenApiRequest {
  deviceName: string
}

/**
 * 接口 [获取扫码登录二维码↗](https://yapi.nbttfc365.com/project/44/interface/api/2591) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/generate_qrcode_token`
 * @更新时间 `2022-09-27 17:16:20`
 */
export interface YapiPostV1MemberLoginGenerateQrcodeTokenApiResponse {
  code?: number
  data?: YapiPostV1MemberLoginGenerateQrcodeTokenData
  message?: string
}
export interface YapiPostV1MemberLoginGenerateQrcodeTokenData {
  qrCodeToken?: string
  scanUrl?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取扫码登录二维码↗](https://yapi.nbttfc365.com/project/44/interface/api/2591)
// **/
// export const postV1MemberLoginGenerateQrcodeTokenApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginGenerateQrcodeTokenApiRequest,
//   YapiPostV1MemberLoginGenerateQrcodeTokenApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/generate_qrcode_token",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
