/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [国籍列表查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6014) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/member/phone/area`
 * @更新时间 `2023-06-08 16:50:23`
 */
export interface YapiGetV1MemberPhoneAreaApiRequest {
  /**
   * 国家名全称或部分名称
   */
  searchParam: string
}

/**
 * 接口 [国籍列表查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6014) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/member/phone/area`
 * @更新时间 `2023-06-08 16:50:23`
 */
export interface YapiGetV1MemberPhoneAreaApiResponse {
  code?: number
  data?: YapiGetV1MemberPhoneAreaData
  message?: string
}
export interface YapiGetV1MemberPhoneAreaData {
  detailVOList?: YapiGetV1MemberPhoneAreaListDetailVOListData[]
}
export interface YapiGetV1MemberPhoneAreaListDetailVOListData {
  enCode: string
  enableInd: number
  fullName: string
  id: number
  shortName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [国籍列表查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6014)
// **/
// export const getV1MemberPhoneAreaApiRequest: MarkcoinRequest<
//   YapiGetV1MemberPhoneAreaApiRequest,
//   YapiGetV1MemberPhoneAreaApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/phone/area",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [国籍列表查询↗](https://yapi.nbttfc365.com/project/44/interface/api/181) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/member/phone/area`
 * @更新时间 `2022-08-08 16:07:53`
 */
export interface YapiGetV1MemberPhoneAreaApiRequest {
  /**
   * 国家名全称或部分名称
   */
  searchParam: string
}

/**
 * 接口 [国籍列表查询↗](https://yapi.nbttfc365.com/project/44/interface/api/181) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/member/phone/area`
 * @更新时间 `2022-08-08 16:07:53`
 */
export interface YapiGetV1MemberPhoneAreaApiResponse {
  code?: number
  data?: YapiGetV1MemberPhoneAreaData
  message?: string
}
export interface YapiGetV1MemberPhoneAreaData {
  detailVOList?: YapiGetV1MemberPhoneAreaListDetailVOListData[]
}
export interface YapiGetV1MemberPhoneAreaListDetailVOListData {
  enCode: string
  enableInd: number
  fullName: string
  id: number
  shortName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [国籍列表查询↗](https://yapi.nbttfc365.com/project/44/interface/api/181)
// **/
// export const getV1MemberPhoneAreaApiRequest: MarkcoinRequest<
//   YapiGetV1MemberPhoneAreaApiRequest,
//   YapiGetV1MemberPhoneAreaApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/phone/area",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
