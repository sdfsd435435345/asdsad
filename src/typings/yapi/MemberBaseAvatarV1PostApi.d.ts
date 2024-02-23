/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [个人中心主页\/修改头像↗](https://yapi.nbttfc365.com/project/77/interface/api/6249) 的 **请求类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_610)
 * @请求头 `POST /v1/member/base/avatar`
 * @更新时间 `2023-06-08 16:52:38`
 */
export interface YapiPostV1MemberBaseAvatarApiRequest {
  /**
   * oss图像地址
   */
  avatarPath: string
}

/**
 * 接口 [个人中心主页\/修改头像↗](https://yapi.nbttfc365.com/project/77/interface/api/6249) 的 **返回类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_610)
 * @请求头 `POST /v1/member/base/avatar`
 * @更新时间 `2023-06-08 16:52:38`
 */
export interface YapiPostV1MemberBaseAvatarApiResponse {
  code?: number
  data?: YapiPostV1MemberBaseAvatarData
  message?: string
}
export interface YapiPostV1MemberBaseAvatarData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [个人中心主页/修改头像↗](https://yapi.nbttfc365.com/project/77/interface/api/6249)
// **/
// export const postV1MemberBaseAvatarApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseAvatarApiRequest,
//   YapiPostV1MemberBaseAvatarApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/avatar",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [个人中心主页\/修改头像↗](https://yapi.nbttfc365.com/project/44/interface/api/272) 的 **请求类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_106)
 * @请求头 `POST /v1/member/base/avatar`
 * @更新时间 `2022-07-28 15:02:20`
 */
export interface YapiPostV1MemberBaseAvatarApiRequest {
  /**
   * oss图像地址
   */
  avatarPath: string
}

/**
 * 接口 [个人中心主页\/修改头像↗](https://yapi.nbttfc365.com/project/44/interface/api/272) 的 **返回类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_106)
 * @请求头 `POST /v1/member/base/avatar`
 * @更新时间 `2022-07-28 15:02:20`
 */
export interface YapiPostV1MemberBaseAvatarApiResponse {
  code?: number
  data?: YapiPostV1MemberBaseAvatarData
  message?: string
}
export interface YapiPostV1MemberBaseAvatarData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [个人中心主页/修改头像↗](https://yapi.nbttfc365.com/project/44/interface/api/272)
// **/
// export const postV1MemberBaseAvatarApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseAvatarApiRequest,
//   YapiPostV1MemberBaseAvatarApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/avatar",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
