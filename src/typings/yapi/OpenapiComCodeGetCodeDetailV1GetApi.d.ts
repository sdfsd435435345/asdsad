/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据code查询数据字典子项单个详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6819) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/openapi/com/code/getCodeDetail`
 * @更新时间 `2023-06-08 16:50:24`
 */
export interface YapiGetV1OpenapiComCodeGetCodeDetailApiRequest {
  /**
   * 语言类型
   */
  lanType: string
  /**
   * 所属字典值
   */
  belongCode: string
  /**
   * 查询字典值
   */
  codeVal: string
}

/**
 * 接口 [根据code查询数据字典子项单个详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6819) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/openapi/com/code/getCodeDetail`
 * @更新时间 `2023-06-08 16:50:24`
 */
export interface YapiGetV1OpenapiComCodeGetCodeDetailApiResponse {
  /**
   * 返回CODE
   */
  code?: number
  data?: YapiGetV1OpenapiComCodeGetCodeDetailData
  /**
   * 返回message
   */
  message?: string
}
export interface YapiGetV1OpenapiComCodeGetCodeDetailData {
  /**
   * 字典名
   */
  codeKey?: string
  /**
   * 字典值
   */
  codeVal?: string
  /**
   * 备注
   */
  remark?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据code查询数据字典子项单个详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6819)
// **/
// export const getV1OpenapiComCodeGetCodeDetailApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiComCodeGetCodeDetailApiRequest,
//   YapiGetV1OpenapiComCodeGetCodeDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/com/code/getCodeDetail",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [根据code查询数据字典子项单个详情↗](https://yapi.nbttfc365.com/project/44/interface/api/3603) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/com/code/getCodeDetail`
 * @更新时间 `2022-11-28 14:14:57`
 */
export interface YapiGetV1OpenapiComCodeGetCodeDetailApiRequest {
  /**
   * 语言类型
   */
  lanType: string
  /**
   * 所属字典值
   */
  belongCode: string
  /**
   * 查询字典值
   */
  codeVal: string
}

/**
 * 接口 [根据code查询数据字典子项单个详情↗](https://yapi.nbttfc365.com/project/44/interface/api/3603) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/com/code/getCodeDetail`
 * @更新时间 `2022-11-28 14:14:57`
 */
export interface YapiGetV1OpenapiComCodeGetCodeDetailApiResponse {
  /**
   * 返回CODE
   */
  code?: number
  data?: YapiGetV1OpenapiComCodeGetCodeDetailData
  /**
   * 返回message
   */
  message?: string
}
export interface YapiGetV1OpenapiComCodeGetCodeDetailData {
  /**
   * 字典名
   */
  codeKey?: string
  /**
   * 字典值
   */
  codeVal?: string
  /**
   * 备注
   */
  remark?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据code查询数据字典子项单个详情↗](https://yapi.nbttfc365.com/project/44/interface/api/3603)
// **/
// export const getV1OpenapiComCodeGetCodeDetailApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiComCodeGetCodeDetailApiRequest,
//   YapiGetV1OpenapiComCodeGetCodeDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/com/code/getCodeDetail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
