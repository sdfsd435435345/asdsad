/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [（批量）批量获取指定字典列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6879) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/openapi/com/code/batchGetCodeDetailList`
 * @更新时间 `2023-06-08 16:50:30`
 */
export interface YapiGetV1OpenapiComCodeBatchGetCodeDetailListApiRequest {
  /**
   * 查询的字典Code，多个用,号隔开
   */
  codeVals: string
  /**
   * 查询的语种，字典Code：lan_type_cd , 多个用,号隔开
   */
  lanTypes: string
}

/**
 * 接口 [（批量）批量获取指定字典列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6879) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/openapi/com/code/batchGetCodeDetailList`
 * @更新时间 `2023-06-08 16:50:30`
 */
export interface YapiGetV1OpenapiComCodeBatchGetCodeDetailListApiResponse {
  code: number
  data: YapiGetV1OpenapiComCodeBatchGetCodeDetailData
  message: string
}
export interface YapiGetV1OpenapiComCodeBatchGetCodeDetailData {
  查询的codeVals: YapiGetV1OpenapiComCodeBatchGetCodeDetailCodeValsData
}
/**
 * 这里是你传入批量查询的code
 */
export interface YapiGetV1OpenapiComCodeBatchGetCodeDetailCodeValsData {
  /**
   * 这里是你传入批量查询的lanType
   */
  查询的lanTypes: YapiGetV1OpenapiComCodeBatchGetCodeDetailListLanTypesCodeValsData[]
}
export interface YapiGetV1OpenapiComCodeBatchGetCodeDetailListLanTypesCodeValsData {
  /**
   * 代码名
   */
  codeKey: string
  /**
   * 代码值
   */
  codeVal: string
  /**
   * 备注
   */
  remark: string | null
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（批量）批量获取指定字典列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6879)
// **/
// export const getV1OpenapiComCodeBatchGetCodeDetailListApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiComCodeBatchGetCodeDetailListApiRequest,
//   YapiGetV1OpenapiComCodeBatchGetCodeDetailListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/com/code/batchGetCodeDetailList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [（批量）批量获取指定字典列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3715) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/com/code/batchGetCodeDetailList`
 * @更新时间 `2022-12-07 16:55:51`
 */
export interface YapiGetV1OpenapiComCodeBatchGetCodeDetailListApiRequest {
  /**
   * 查询的字典Code，多个用,号隔开
   */
  codeVals: string
  /**
   * 查询的语种，字典Code：lan_type_cd , 多个用,号隔开
   */
  lanTypes: string
}

/**
 * 接口 [（批量）批量获取指定字典列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3715) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/com/code/batchGetCodeDetailList`
 * @更新时间 `2022-12-07 16:55:51`
 */
export interface YapiGetV1OpenapiComCodeBatchGetCodeDetailListApiResponse {
  code: number
  data: YapiGetV1OpenapiComCodeBatchGetCodeDetailData
  message: string
}
export interface YapiGetV1OpenapiComCodeBatchGetCodeDetailData {
  查询的codeVals: YapiGetV1OpenapiComCodeBatchGetCodeDetailCodeValsData
}
/**
 * 这里是你传入批量查询的code
 */
export interface YapiGetV1OpenapiComCodeBatchGetCodeDetailCodeValsData {
  /**
   * 这里是你传入批量查询的lanType
   */
  查询的lanTypes: YapiGetV1OpenapiComCodeBatchGetCodeDetailListLanTypesCodeValsData[]
}
export interface YapiGetV1OpenapiComCodeBatchGetCodeDetailListLanTypesCodeValsData {
  /**
   * 代码名
   */
  codeKey: string
  /**
   * 代码值
   */
  codeVal: string
  /**
   * 备注
   */
  remark: string | null
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（批量）批量获取指定字典列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3715)
// **/
// export const getV1OpenapiComCodeBatchGetCodeDetailListApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiComCodeBatchGetCodeDetailListApiRequest,
//   YapiGetV1OpenapiComCodeBatchGetCodeDetailListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/com/code/batchGetCodeDetailList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
