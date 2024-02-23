/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取最新全量数据字典文件↗](https://yapi.nbttfc365.com/project/77/interface/api/6854) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/openapi/com/code/getAllComCode`
 * @更新时间 `2023-06-08 16:50:27`
 */
export interface YapiGetV1OpenapiComCodeGetAllComCodeApiRequest {
  /**
   * 语言类型，数据字典code：lan_type_cd
   */
  lanType: string
}

/**
 * 接口 [获取最新全量数据字典文件↗](https://yapi.nbttfc365.com/project/77/interface/api/6854) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/openapi/com/code/getAllComCode`
 * @更新时间 `2023-06-08 16:50:27`
 */
export interface YapiGetV1OpenapiComCodeGetAllComCodeApiResponse {
  code: number
  data: YapiGetV1OpenapiComCodeGetAllComCodeData
  message: string
}
export interface YapiGetV1OpenapiComCodeGetAllComCodeData {
  /**
   * 文件版本，根据此字段判断是否需要更新本地文件
   */
  version: number
  /**
   * 文件URL
   */
  url: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取最新全量数据字典文件↗](https://yapi.nbttfc365.com/project/77/interface/api/6854)
// **/
// export const getV1OpenapiComCodeGetAllComCodeApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiComCodeGetAllComCodeApiRequest,
//   YapiGetV1OpenapiComCodeGetAllComCodeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/com/code/getAllComCode",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取最新全量数据字典文件↗](https://yapi.nbttfc365.com/project/44/interface/api/3711) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/com/code/getAllComCode`
 * @更新时间 `2022-12-07 13:51:42`
 */
export interface YapiGetV1OpenapiComCodeGetAllComCodeApiRequest {
  /**
   * 语言类型，数据字典code：lan_type_cd
   */
  lanType: string
}

/**
 * 接口 [获取最新全量数据字典文件↗](https://yapi.nbttfc365.com/project/44/interface/api/3711) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/com/code/getAllComCode`
 * @更新时间 `2022-12-07 13:51:42`
 */
export interface YapiGetV1OpenapiComCodeGetAllComCodeApiResponse {
  code: number
  data: YapiGetV1OpenapiComCodeGetAllComCodeData
  message: string
}
export interface YapiGetV1OpenapiComCodeGetAllComCodeData {
  /**
   * 文件版本，根据此字段判断是否需要更新本地文件
   */
  version: number
  /**
   * 文件URL
   */
  url: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取最新全量数据字典文件↗](https://yapi.nbttfc365.com/project/44/interface/api/3711)
// **/
// export const getV1OpenapiComCodeGetAllComCodeApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiComCodeGetAllComCodeApiRequest,
//   YapiGetV1OpenapiComCodeGetAllComCodeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/com/code/getAllComCode",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
