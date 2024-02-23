/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [重置安全项（人工）生成谷歌二维码↗](https://yapi.nbttfc365.com/project/77/interface/api/8374) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /v1/member/safe/verify/generate_google_qrcode`
 * @更新时间 `2023-06-08 16:52:35`
 */
export interface YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeApiRequest {
  accountName: string
}

/**
 * 接口 [重置安全项（人工）生成谷歌二维码↗](https://yapi.nbttfc365.com/project/77/interface/api/8374) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /v1/member/safe/verify/generate_google_qrcode`
 * @更新时间 `2023-06-08 16:52:35`
 */
export interface YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeApiResponse {
  code?: number
  data?: YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeData
  message?: string
}
export interface YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeData {
  secretKey?: string
  qrPath?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [重置安全项（人工）生成谷歌二维码↗](https://yapi.nbttfc365.com/project/77/interface/api/8374)
// **/
// export const postV1MemberSafeVerifyGenerateGoogleQrcodeApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeApiRequest,
//   YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/verify/generate_google_qrcode",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [重置安全项（人工）生成谷歌二维码↗](https://yapi.nbttfc365.com/project/44/interface/api/2681) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /v1/member/safe/verify/generate_google_qrcode`
 * @更新时间 `2022-10-05 16:15:48`
 */
export interface YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeApiRequest {
  accountName: string
}

/**
 * 接口 [重置安全项（人工）生成谷歌二维码↗](https://yapi.nbttfc365.com/project/44/interface/api/2681) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /v1/member/safe/verify/generate_google_qrcode`
 * @更新时间 `2022-10-05 16:15:48`
 */
export interface YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeApiResponse {
  code?: number
  data?: YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeData
  message?: string
}
export interface YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeData {
  secretKey?: string
  qrPath?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [重置安全项（人工）生成谷歌二维码↗](https://yapi.nbttfc365.com/project/44/interface/api/2681)
// **/
// export const postV1MemberSafeVerifyGenerateGoogleQrcodeApiRequest: MarkcoinRequest<
//   YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeApiRequest,
//   YapiPostV1MemberSafeVerifyGenerateGoogleQrcodeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/safe/verify/generate_google_qrcode",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
