/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取申诉原因的集合↗](https://yapi.nbttfc365.com/project/73/interface/api/5529) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `GET /v1/appeal/getReasonList`
 * @更新时间 `2023-03-23 16:59:55`
 */
export interface YapiGetV1AppealGetReasonListApiRequest {}

/**
 * 接口 [获取申诉原因的集合↗](https://yapi.nbttfc365.com/project/73/interface/api/5529) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `GET /v1/appeal/getReasonList`
 * @更新时间 `2023-03-23 16:59:55`
 */
export interface YapiGetV1AppealGetReasonListApiResponse {
  code?: number
  data?: YapiGetV1AppealGetReasonListData[]
  message?: string
}
export interface YapiGetV1AppealGetReasonListData {
  side: string
  c2cAppealReasonVOList: YapiGetV1AppealGetReasonListC2CAppealReasonVOListData[]
}
export interface YapiGetV1AppealGetReasonListC2CAppealReasonVOListData {
  reason: string
  concreteList: string[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取申诉原因的集合↗](https://yapi.nbttfc365.com/project/73/interface/api/5529)
// **/
// export const getV1AppealGetReasonListApiRequest: MarkcoinRequest<
//   YapiGetV1AppealGetReasonListApiRequest,
//   YapiGetV1AppealGetReasonListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/appeal/getReasonList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取申诉原因的集合↗](https://yapi.nbttfc365.com/project/77/interface/api/6789) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `GET /v1/appeal/getReasonList`
 * @更新时间 `2023-06-08 16:47:19`
 */
export interface YapiGetV1AppealGetReasonListApiRequest {}

/**
 * 接口 [获取申诉原因的集合↗](https://yapi.nbttfc365.com/project/77/interface/api/6789) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `GET /v1/appeal/getReasonList`
 * @更新时间 `2023-06-08 16:47:19`
 */
export interface YapiGetV1AppealGetReasonListApiResponse {
  code?: number
  data?: YapiGetV1AppealGetReasonListData[]
  message?: string
}
export interface YapiGetV1AppealGetReasonListData {
  side: string
  c2cAppealReasonVOList: YapiGetV1AppealGetReasonListC2CAppealReasonVOListData[]
}
export interface YapiGetV1AppealGetReasonListC2CAppealReasonVOListData {
  reason: string
  concreteList: string[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取申诉原因的集合↗](https://yapi.nbttfc365.com/project/77/interface/api/6789)
// **/
// export const getV1AppealGetReasonListApiRequest: MarkcoinRequest<
//   YapiGetV1AppealGetReasonListApiRequest,
//   YapiGetV1AppealGetReasonListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/appeal/getReasonList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
