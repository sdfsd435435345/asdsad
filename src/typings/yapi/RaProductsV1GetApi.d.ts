/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [产品列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11229) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/products`
 * @更新时间 `2023-08-02 00:26:14`
 */
export interface YapiGetV1RaProductsApiRequest {
  /**
   * 项目id
   */
  projectId: string
  pageNum: string
  pageSize: string
}

/**
 * 接口 [产品列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11229) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/products`
 * @更新时间 `2023-08-02 00:26:14`
 */
export interface YapiGetV1RaProductsApiResponse {
  code?: string
  message?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [产品列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11229)
// **/
// export const getV1RaProductsApiRequest: MarkcoinRequest<
//   YapiGetV1RaProductsApiRequest,
//   YapiGetV1RaProductsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/products",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
