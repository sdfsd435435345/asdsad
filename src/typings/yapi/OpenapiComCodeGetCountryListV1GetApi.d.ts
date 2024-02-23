/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [国家列表↗](https://yapi.nbttfc365.com/project/44/interface/api/12204) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/com/code/getCountryList`
 * @更新时间 `2023-08-25 12:44:53`
 */
export interface YapiGetV1OpenapiComCodeGetCountryListApiRequest {
  /**
   * 商户id
   */
  businessId: string
  /**
   * 语言
   */
  lanType: string
}

/**
 * 接口 [国家列表↗](https://yapi.nbttfc365.com/project/44/interface/api/12204) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/openapi/com/code/getCountryList`
 * @更新时间 `2023-08-25 12:44:53`
 */
export type YapiGetV1OpenapiComCodeGetCountryListApiResponse = YapiGetV1OpenapiComCodeGetCountryList[]

export interface YapiGetV1OpenapiComCodeGetCountryList {
  codeKey?: string
  codeVal?: string
  remark?: string
  iosBan?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [国家列表↗](https://yapi.nbttfc365.com/project/44/interface/api/12204)
// **/
// export const getV1OpenapiComCodeGetCountryListApiRequest: MarkcoinRequest<
//   YapiGetV1OpenapiComCodeGetCountryListApiRequest,
//   YapiGetV1OpenapiComCodeGetCountryListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/openapi/com/code/getCountryList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
