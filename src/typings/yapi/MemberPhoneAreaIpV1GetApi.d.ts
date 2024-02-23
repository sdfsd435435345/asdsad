/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据ip查地址和编号↗](https://yapi.nbttfc365.com/project/77/interface/api/6829) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/member/phone/area_ip`
 * @更新时间 `2023-06-08 16:50:25`
 */
export interface YapiGetV1MemberPhoneAreaIpApiRequest {}

/**
 * 接口 [根据ip查地址和编号↗](https://yapi.nbttfc365.com/project/77/interface/api/6829) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/member/phone/area_ip`
 * @更新时间 `2023-06-08 16:50:25`
 */
export interface YapiGetV1MemberPhoneAreaIpApiResponse {
  code?: number
  data?: YapiGetV1MemberPhoneAreaIpData
  message?: string
}
export interface YapiGetV1MemberPhoneAreaIpData {
  enCode?: string
  enableInd?: number
  fullName?: string
  id?: number
  shortName?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据ip查地址和编号↗](https://yapi.nbttfc365.com/project/77/interface/api/6829)
// **/
// export const getV1MemberPhoneAreaIpApiRequest: MarkcoinRequest<
//   YapiGetV1MemberPhoneAreaIpApiRequest,
//   YapiGetV1MemberPhoneAreaIpApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/phone/area_ip",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [根据ip查地址和编号↗](https://yapi.nbttfc365.com/project/44/interface/api/2867) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/member/phone/area_ip`
 * @更新时间 `2022-10-19 10:24:26`
 */
export interface YapiGetV1MemberPhoneAreaIpApiRequest {}

/**
 * 接口 [根据ip查地址和编号↗](https://yapi.nbttfc365.com/project/44/interface/api/2867) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/member/phone/area_ip`
 * @更新时间 `2022-10-19 10:24:26`
 */
export interface YapiGetV1MemberPhoneAreaIpApiResponse {
  code?: number
  data?: YapiGetV1MemberPhoneAreaIpData
  message?: string
}
export interface YapiGetV1MemberPhoneAreaIpData {
  enCode?: string
  enableInd?: number
  fullName?: string
  id?: number
  shortName?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据ip查地址和编号↗](https://yapi.nbttfc365.com/project/44/interface/api/2867)
// **/
// export const getV1MemberPhoneAreaIpApiRequest: MarkcoinRequest<
//   YapiGetV1MemberPhoneAreaIpApiRequest,
//   YapiGetV1MemberPhoneAreaIpApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/phone/area_ip",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
