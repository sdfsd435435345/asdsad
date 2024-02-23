/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除币对(产品)收藏↗](https://yapi.nbttfc365.com/project/44/interface/api/11334) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/products/favourite/delete`
 * @更新时间 `2023-07-25 18:37:42`
 */
export interface YapiPostV1RaProductsFavouriteDeleteApiRequest {
  /**
   * 产品id列表
   */
  productIds: number[]
}

/**
 * 接口 [删除币对(产品)收藏↗](https://yapi.nbttfc365.com/project/44/interface/api/11334) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/products/favourite/delete`
 * @更新时间 `2023-07-25 18:37:42`
 */
export interface YapiPostV1RaProductsFavouriteDeleteApiResponse {
  code?: string
  message?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除币对(产品)收藏↗](https://yapi.nbttfc365.com/project/44/interface/api/11334)
// **/
// export const postV1RaProductsFavouriteDeleteApiRequest: MarkcoinRequest<
//   YapiPostV1RaProductsFavouriteDeleteApiRequest,
//   YapiPostV1RaProductsFavouriteDeleteApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/ra/products/favourite/delete",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
