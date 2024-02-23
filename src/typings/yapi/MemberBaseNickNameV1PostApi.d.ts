/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [个人中心主页\/设置昵称↗](https://yapi.nbttfc365.com/project/77/interface/api/6254) 的 **请求类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_610)
 * @请求头 `POST /v1/member/base/nickName`
 * @更新时间 `2023-06-08 16:52:39`
 */
export interface YapiPostV1MemberBaseNickNameApiRequest {
  /**
   * 昵称
   */
  nickName: string
}

/**
 * 接口 [个人中心主页\/设置昵称↗](https://yapi.nbttfc365.com/project/77/interface/api/6254) 的 **返回类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_610)
 * @请求头 `POST /v1/member/base/nickName`
 * @更新时间 `2023-06-08 16:52:39`
 */
export interface YapiPostV1MemberBaseNickNameApiResponse {
  /**
   * 返回信息
   */
  code?: number
  data?: YapiPostV1MemberBaseNickNameData
  /**
   * 返回消息
   */
  message?: string
}
/**
 * 返回内容
 */
export interface YapiPostV1MemberBaseNickNameData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [个人中心主页/设置昵称↗](https://yapi.nbttfc365.com/project/77/interface/api/6254)
// **/
// export const postV1MemberBaseNickNameApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseNickNameApiRequest,
//   YapiPostV1MemberBaseNickNameApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/nickName",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [个人中心主页\/设置昵称↗](https://yapi.nbttfc365.com/project/44/interface/api/264) 的 **请求类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_106)
 * @请求头 `POST /v1/member/base/nickName`
 * @更新时间 `2022-10-06 14:51:21`
 */
export interface YapiPostV1MemberBaseNickNameApiRequest {
  /**
   * 昵称
   */
  nickName: string
}

/**
 * 接口 [个人中心主页\/设置昵称↗](https://yapi.nbttfc365.com/project/44/interface/api/264) 的 **返回类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_106)
 * @请求头 `POST /v1/member/base/nickName`
 * @更新时间 `2022-10-06 14:51:21`
 */
export interface YapiPostV1MemberBaseNickNameApiResponse {
  /**
   * 返回信息
   */
  code?: number
  data?: YapiPostV1MemberBaseNickNameData
  /**
   * 返回消息
   */
  message?: string
}
/**
 * 返回内容
 */
export interface YapiPostV1MemberBaseNickNameData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [个人中心主页/设置昵称↗](https://yapi.nbttfc365.com/project/44/interface/api/264)
// **/
// export const postV1MemberBaseNickNameApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseNickNameApiRequest,
//   YapiPostV1MemberBaseNickNameApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/nickName",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
