/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取第三方信息配置接口开启状态↗](https://yapi.nbttfc365.com/project/77/interface/api/6869) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/openapi/thrid/api/isOpen`
 * @更新时间 `2023-06-08 16:50:28`
 */
export interface YapiGetV1OpenapiThridApiIsOpenApiRequest {
  /**
   * 商户ID
   */
  businessId: string
  /**
   * 第三方信息父级的ID（极验此处传biologicalAuthentication） 要哪个的开启状态 找alex要id
   */
  apiCd: string
  /**
   * 第三方信息子级的ID（极验此处传gee_test）要哪个的开启状态 找alex要id
   */
  apiChildCd: string
}

/**
 * 接口 [获取第三方信息配置接口开启状态↗](https://yapi.nbttfc365.com/project/77/interface/api/6869) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/openapi/thrid/api/isOpen`
 * @更新时间 `2023-06-08 16:50:28`
 */
export interface YapiGetV1OpenapiThridApiIsOpenApiResponse {
  code: number
  /**
   * true or false
   */
  data: boolean
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取第三方信息配置接口开启状态↗](https://yapi.nbttfc365.com/project/77/interface/api/6869)
// **/
// export const getV1OpenapiThridApiIsOpenApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiThridApiIsOpenApiRequest,
//   YapiGetV1OpenapiThridApiIsOpenApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/thrid/api/isOpen",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取第三方信息配置接口开启状态↗](https://yapi.nbttfc365.com/project/44/interface/api/4279) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/thrid/api/isOpen`
 * @更新时间 `2023-01-17 14:31:04`
 */
export interface YapiGetV1OpenapiThridApiIsOpenApiRequest {
  /**
   * 商户ID
   */
  businessId: string
  /**
   * 第三方信息父级的ID（极验此处传biologicalAuthentication） 要哪个的开启状态 找alex要id
   */
  apiCd: string
  /**
   * 第三方信息子级的ID（极验此处传gee_test）要哪个的开启状态 找alex要id
   */
  apiChildCd: string
}

/**
 * 接口 [获取第三方信息配置接口开启状态↗](https://yapi.nbttfc365.com/project/44/interface/api/4279) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/thrid/api/isOpen`
 * @更新时间 `2023-01-17 14:31:04`
 */
export interface YapiGetV1OpenapiThridApiIsOpenApiResponse {
  code: number
  /**
   * true or false
   */
  data: boolean
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取第三方信息配置接口开启状态↗](https://yapi.nbttfc365.com/project/44/interface/api/4279)
// **/
// export const getV1OpenapiThridApiIsOpenApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiThridApiIsOpenApiRequest,
//   YapiGetV1OpenapiThridApiIsOpenApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/thrid/api/isOpen",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
