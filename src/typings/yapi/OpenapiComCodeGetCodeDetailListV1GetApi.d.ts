/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据code获取指定字典列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6824) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/openapi/com/code/getCodeDetailList`
 * @更新时间 `2023-06-08 16:50:24`
 */
export interface YapiGetV1OpenapiComCodeGetCodeDetailListApiRequest {
  /**
   * 语言类型，具体值可去console数据字典查询：语言类型lan_type_cd
   */
  lanType: string
  /**
   * 所属字典code
   */
  codeVal: string
}

/**
 * 接口 [根据code获取指定字典列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6824) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/openapi/com/code/getCodeDetailList`
 * @更新时间 `2023-06-08 16:50:24`
 */
export interface YapiGetV1OpenapiComCodeGetCodeDetailListApiResponse {
  /**
   * 返回CODE 200为成功
   */
  code?: number
  /**
   * 返回message
   */
  message?: string
  /**
   * 返回值
   */
  data?: YapiGetV1OpenapiComCodeGetCodeDetailListData[]
}
export interface YapiGetV1OpenapiComCodeGetCodeDetailListData {
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
// * [根据code获取指定字典列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6824)
// **/
// export const getV1OpenapiComCodeGetCodeDetailListApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiComCodeGetCodeDetailListApiRequest,
//   YapiGetV1OpenapiComCodeGetCodeDetailListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/com/code/getCodeDetailList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [根据code获取指定字典列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3595) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/com/code/getCodeDetailList`
 * @更新时间 `2022-11-28 14:03:14`
 */
export interface YapiGetV1OpenapiComCodeGetCodeDetailListApiRequest {
  /**
   * 语言类型，具体值可去console数据字典查询：语言类型lan_type_cd
   */
  lanType: string
  /**
   * 所属字典code
   */
  codeVal: string
}

/**
 * 接口 [根据code获取指定字典列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3595) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/com/code/getCodeDetailList`
 * @更新时间 `2022-11-28 14:03:14`
 */
export interface YapiGetV1OpenapiComCodeGetCodeDetailListApiResponse {
  /**
   * 返回CODE 200为成功
   */
  code?: number
  /**
   * 返回message
   */
  message?: string
  /**
   * 返回值
   */
  data?: YapiGetV1OpenapiComCodeGetCodeDetailListData[]
}
export interface YapiGetV1OpenapiComCodeGetCodeDetailListData {
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
// * [根据code获取指定字典列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3595)
// **/
// export const getV1OpenapiComCodeGetCodeDetailListApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiComCodeGetCodeDetailListApiRequest,
//   YapiGetV1OpenapiComCodeGetCodeDetailListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/com/code/getCodeDetailList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
