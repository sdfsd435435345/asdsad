/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [产品增加参与人次↗](https://yapi.nbttfc365.com/project/44/interface/api/12019) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/products/addPt`
 * @更新时间 `2023-08-15 10:42:32`
 */
export interface YapiPostV1RaProductsAddPtApiRequest {
  /**
   * 产品Id
   */
  productId: number
  /**
   * 增加人次
   */
  num: number
}

/**
 * 接口 [产品增加参与人次↗](https://yapi.nbttfc365.com/project/44/interface/api/12019) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/products/addPt`
 * @更新时间 `2023-08-15 10:42:32`
 */
export interface YapiPostV1RaProductsAddPtApiResponse {
  code?: string
  message?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [产品增加参与人次↗](https://yapi.nbttfc365.com/project/44/interface/api/12019)
// **/
// export const postV1RaProductsAddPtApiRequest: MarkcoinRequest<
//   YapiPostV1RaProductsAddPtApiRequest,
//   YapiPostV1RaProductsAddPtApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/ra/products/addPt",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
