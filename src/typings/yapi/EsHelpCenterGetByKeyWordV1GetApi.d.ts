/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [帮助中心搜索的结果页↗](https://yapi.nbttfc365.com/project/77/interface/api/7309) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/es/helpCenter/getByKeyWord`
 * @更新时间 `2023-06-08 16:51:04`
 */
export interface YapiGetV1EsHelpCenterGetByKeyWordApiRequest {
  key: string
  page: string
  pageSize: string
}

/**
 * 接口 [帮助中心搜索的结果页↗](https://yapi.nbttfc365.com/project/77/interface/api/7309) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/es/helpCenter/getByKeyWord`
 * @更新时间 `2023-06-08 16:51:04`
 */
export interface YapiGetV1EsHelpCenterGetByKeyWordApiResponse {
  code?: number
  data?: YapiGetV1EsHelpCenterGetByKeyWordData
  message?: string
}
export interface YapiGetV1EsHelpCenterGetByKeyWordData {
  positionList?: YapiGetV1EsHelpCenterGetByKeyWordListPositionListData[]
  content?: string
}
export interface YapiGetV1EsHelpCenterGetByKeyWordListPositionListData {
  startPoint: number
  endPoint: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [帮助中心搜索的结果页↗](https://yapi.nbttfc365.com/project/77/interface/api/7309)
// **/
// export const getV1EsHelpCenterGetByKeyWordApiRequest: MarkcoinRequest<
//   YapiGetV1EsHelpCenterGetByKeyWordApiRequest,
//   YapiGetV1EsHelpCenterGetByKeyWordApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/es/helpCenter/getByKeyWord",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [帮助中心搜索的结果页↗](https://yapi.nbttfc365.com/project/44/interface/api/2981) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/es/helpCenter/getByKeyWord`
 * @更新时间 `2023-09-07 11:37:10`
 */
export interface YapiGetV1EsHelpCenterGetByKeyWordApiRequest {
  key: string
  page: string
  pageSize: string
}

/**
 * 接口 [帮助中心搜索的结果页↗](https://yapi.nbttfc365.com/project/44/interface/api/2981) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/es/helpCenter/getByKeyWord`
 * @更新时间 `2023-09-07 11:37:10`
 */
export interface YapiGetV1EsHelpCenterGetByKeyWordApiResponse {
  code?: number
  data?: YapiGetV1EsHelpCenterGetByKeyWordData
  message?: string
}
export interface YapiGetV1EsHelpCenterGetByKeyWordData {
  positionList?: YapiGetV1EsHelpCenterGetByKeyWordListPositionListData[]
  content?: string
}
export interface YapiGetV1EsHelpCenterGetByKeyWordListPositionListData {
  startPoint: number
  endPoint: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [帮助中心搜索的结果页↗](https://yapi.nbttfc365.com/project/44/interface/api/2981)
// **/
// export const getV1EsHelpCenterGetByKeyWordApiRequest: MarkcoinRequest<
//   YapiGetV1EsHelpCenterGetByKeyWordApiRequest,
//   YapiGetV1EsHelpCenterGetByKeyWordApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/es/helpCenter/getByKeyWord",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
