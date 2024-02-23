/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [手机区域列表查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6019) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/member/phone/area_code`
 * @更新时间 `2023-06-08 16:50:23`
 */
export interface YapiGetV1MemberPhoneAreaCodeApiRequest {
  /**
   * 国家、地区或区号
   */
  searchParam: string
}

/**
 * 接口 [手机区域列表查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6019) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/member/phone/area_code`
 * @更新时间 `2023-06-08 16:50:23`
 */
export interface YapiGetV1MemberPhoneAreaCodeApiResponse {
  code?: number
  data?: YapiGetV1MemberPhoneAreaCodeData
  message?: string
}
export interface YapiGetV1MemberPhoneAreaCodeData {
  detailVOList?: YapiGetV1MemberPhoneAreaCodeListDetailVOListData[]
}
export interface YapiGetV1MemberPhoneAreaCodeListDetailVOListData {
  enCode: string
  enableInd: number
  fullName: string
  id: number
  shortName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机区域列表查询↗](https://yapi.nbttfc365.com/project/77/interface/api/6019)
// **/
// export const getV1MemberPhoneAreaCodeApiRequest: MarkcoinRequest<
//   YapiGetV1MemberPhoneAreaCodeApiRequest,
//   YapiGetV1MemberPhoneAreaCodeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/phone/area_code",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [手机区域列表查询↗](https://yapi.nbttfc365.com/project/44/interface/api/139) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/member/phone/area_code`
 * @更新时间 `2022-11-27 15:54:47`
 */
export interface YapiGetV1MemberPhoneAreaCodeApiRequest {
  /**
   * 国家、地区或区号
   */
  searchParam: string
}

/**
 * 接口 [手机区域列表查询↗](https://yapi.nbttfc365.com/project/44/interface/api/139) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/member/phone/area_code`
 * @更新时间 `2022-11-27 15:54:47`
 */
export interface YapiGetV1MemberPhoneAreaCodeApiResponse {
  code?: number
  data?: YapiGetV1MemberPhoneAreaCodeData
  message?: string
}
export interface YapiGetV1MemberPhoneAreaCodeData {
  detailVOList?: YapiGetV1MemberPhoneAreaCodeListDetailVOListData[]
}
export interface YapiGetV1MemberPhoneAreaCodeListDetailVOListData {
  enCode: string
  enableInd: number
  fullName: string
  id: number
  shortName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机区域列表查询↗](https://yapi.nbttfc365.com/project/44/interface/api/139)
// **/
// export const getV1MemberPhoneAreaCodeApiRequest: MarkcoinRequest<
//   YapiGetV1MemberPhoneAreaCodeApiRequest,
//   YapiGetV1MemberPhoneAreaCodeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/phone/area_code",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
