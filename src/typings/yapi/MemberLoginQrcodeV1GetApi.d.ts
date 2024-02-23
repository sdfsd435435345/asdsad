/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取扫码登录的二维码↗](https://yapi.nbttfc365.com/project/77/interface/api/6134) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/login/qrcode`
 * @更新时间 `2023-06-08 16:52:24`
 */
export interface YapiGetV1MemberLoginQrcodeApiRequest {}

/**
 * 接口 [获取扫码登录的二维码↗](https://yapi.nbttfc365.com/project/77/interface/api/6134) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/login/qrcode`
 * @更新时间 `2023-06-08 16:52:24`
 */
export interface YapiGetV1MemberLoginQrcodeApiResponse {
  /**
   * 二维码token
   */
  qr_code_token: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取扫码登录的二维码↗](https://yapi.nbttfc365.com/project/77/interface/api/6134)
// **/
// export const getV1MemberLoginQrcodeApiRequest: MarkcoinRequest<
//   YapiGetV1MemberLoginQrcodeApiRequest,
//   YapiGetV1MemberLoginQrcodeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/login/qrcode",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取扫码登录的二维码(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/224) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/login/qrcode`
 * @更新时间 `2023-09-12 11:19:05`
 */
export interface YapiGetV1MemberLoginQrcodeApiRequest {}

/**
 * 接口 [获取扫码登录的二维码(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/224) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/login/qrcode`
 * @更新时间 `2023-09-12 11:19:05`
 */
export interface YapiGetV1MemberLoginQrcodeApiResponse {
  /**
   * 二维码token
   */
  qr_code_token: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取扫码登录的二维码(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/224)
// **/
// export const getV1MemberLoginQrcodeApiRequest: MarkcoinRequest<
//   YapiGetV1MemberLoginQrcodeApiRequest,
//   YapiGetV1MemberLoginQrcodeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/login/qrcode",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
