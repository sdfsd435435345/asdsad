/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [涨跌色设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6269) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/color/{type}`
 * @更新时间 `2023-06-08 16:44:59`
 */
export interface YapiPostV1MemberBaseColorTypeApiRequest {
  /**
   * 1.绿涨红跌 2.红涨绿跌
   */
  type: string
}

/**
 * 接口 [涨跌色设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6269) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/color/{type}`
 * @更新时间 `2023-06-08 16:44:59`
 */
export interface YapiPostV1MemberBaseColorTypeApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1MemberBaseColorTypeData
}
export interface YapiPostV1MemberBaseColorTypeData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [涨跌色设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6269)
// **/
// export const postV1MemberBaseColorTypeApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseColorTypeApiRequest,
//   YapiPostV1MemberBaseColorTypeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/color/{type}",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
