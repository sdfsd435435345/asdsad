/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [Apple登陆↗](https://yapi.nbttfc365.com/project/77/interface/api/6119) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/apple`
 * @更新时间 `2023-06-08 16:52:23`
 */
export interface YapiPostV1MemberLoginAppleApiRequest {
  /**
   * apple返回的token
   */
  idToken: string
  /**
   * 用户ID
   */
  openId?: string
  /**
   * 设备类型，1 web,2 ios,3 android
   */
  deviceTypeInd: number
  /**
   * 设备编号
   */
  deviceNo: string
  /**
   * 设备名称
   */
  deviceName: string
  /**
   * token有效期  毫秒数
   */
  tokenTtl?: number
}

/**
 * 接口 [Apple登陆↗](https://yapi.nbttfc365.com/project/77/interface/api/6119) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/apple`
 * @更新时间 `2023-06-08 16:52:23`
 */
export interface YapiPostV1MemberLoginAppleApiResponse {
  code?: number
  meesage?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [Apple登陆↗](https://yapi.nbttfc365.com/project/77/interface/api/6119)
// **/
// export const postV1MemberLoginAppleApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginAppleApiRequest,
//   YapiPostV1MemberLoginAppleApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/apple",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [Apple登陆↗](https://yapi.nbttfc365.com/project/44/interface/api/184) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/apple`
 * @更新时间 `2022-10-07 16:33:43`
 */
export interface YapiPostV1MemberLoginAppleApiRequest {
  /**
   * apple返回的token
   */
  idToken: string
  /**
   * 用户ID
   */
  openId?: string
  /**
   * 设备类型，1 web,2 ios,3 android
   */
  deviceTypeInd: number
  /**
   * 设备编号
   */
  deviceNo: string
  /**
   * 设备名称
   */
  deviceName: string
  /**
   * token有效期  毫秒数
   */
  tokenTtl?: number
}

/**
 * 接口 [Apple登陆↗](https://yapi.nbttfc365.com/project/44/interface/api/184) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/apple`
 * @更新时间 `2022-10-07 16:33:43`
 */
export interface YapiPostV1MemberLoginAppleApiResponse {
  code?: number
  meesage?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [Apple登陆↗](https://yapi.nbttfc365.com/project/44/interface/api/184)
// **/
// export const postV1MemberLoginAppleApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginAppleApiRequest,
//   YapiPostV1MemberLoginAppleApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/apple",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
