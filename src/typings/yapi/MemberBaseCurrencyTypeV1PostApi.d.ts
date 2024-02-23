/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [折算货币设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6264) 的 **请求类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/currency/{type}`
 * @更新时间 `2023-06-08 16:44:59`
 */
export interface YapiPostV1MemberBaseCurrencyTypeApiRequest {
  /**
   * 折算货币
   */
  type: string
}

/**
 * 接口 [折算货币设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6264) 的 **返回类型**
 *
 * @分类 [会员基础信息相关接口↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_612)
 * @请求头 `POST /v1/member/base/currency/{type}`
 * @更新时间 `2023-06-08 16:44:59`
 */
export interface YapiPostV1MemberBaseCurrencyTypeApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1MemberBaseCurrencyTypeData
}
export interface YapiPostV1MemberBaseCurrencyTypeData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [折算货币设置↗](https://yapi.nbttfc365.com/project/77/interface/api/6264)
// **/
// export const postV1MemberBaseCurrencyTypeApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseCurrencyTypeApiRequest,
//   YapiPostV1MemberBaseCurrencyTypeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/currency/{type}",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
