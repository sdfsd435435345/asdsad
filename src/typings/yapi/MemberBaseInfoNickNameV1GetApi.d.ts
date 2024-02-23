/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [通过uid查询昵称↗](https://yapi.nbttfc365.com/project/77/interface/api/8409) 的 **请求类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_610)
 * @请求头 `GET /v1/member/base/info/nickName`
 * @更新时间 `2023-06-08 16:52:39`
 */
export interface YapiGetV1MemberBaseInfoNickNameApiRequest {
  /**
   * 用户uid
   */
  uid: string
}

/**
 * 接口 [通过uid查询昵称↗](https://yapi.nbttfc365.com/project/77/interface/api/8409) 的 **返回类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_610)
 * @请求头 `GET /v1/member/base/info/nickName`
 * @更新时间 `2023-06-08 16:52:39`
 */
export interface YapiGetV1MemberBaseInfoNickNameApiResponse {
  /**
   * 返回信息
   */
  code?: number
  data?: YapiGetV1MemberBaseInfoNickNameData
  /**
   * 返回消息
   */
  message?: string
}
/**
 * 返回内容
 */
export interface YapiGetV1MemberBaseInfoNickNameData {
  /**
   * 昵称
   */
  nickname?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通过uid查询昵称↗](https://yapi.nbttfc365.com/project/77/interface/api/8409)
// **/
// export const getV1MemberBaseInfoNickNameApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseInfoNickNameApiRequest,
//   YapiGetV1MemberBaseInfoNickNameApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/info/nickName",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [通过uid查询昵称↗](https://yapi.nbttfc365.com/project/44/interface/api/2858) 的 **请求类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_106)
 * @请求头 `GET /v1/member/base/info/nickName`
 * @更新时间 `2022-10-17 14:31:00`
 */
export interface YapiGetV1MemberBaseInfoNickNameApiRequest {
  /**
   * 用户uid
   */
  uid: string
}

/**
 * 接口 [通过uid查询昵称↗](https://yapi.nbttfc365.com/project/44/interface/api/2858) 的 **返回类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_106)
 * @请求头 `GET /v1/member/base/info/nickName`
 * @更新时间 `2022-10-17 14:31:00`
 */
export interface YapiGetV1MemberBaseInfoNickNameApiResponse {
  /**
   * 返回信息
   */
  code?: number
  data?: YapiGetV1MemberBaseInfoNickNameData
  /**
   * 返回消息
   */
  message?: string
}
/**
 * 返回内容
 */
export interface YapiGetV1MemberBaseInfoNickNameData {
  /**
   * 昵称
   */
  nickname?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通过uid查询昵称↗](https://yapi.nbttfc365.com/project/44/interface/api/2858)
// **/
// export const getV1MemberBaseInfoNickNameApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseInfoNickNameApiRequest,
//   YapiGetV1MemberBaseInfoNickNameApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/info/nickName",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
