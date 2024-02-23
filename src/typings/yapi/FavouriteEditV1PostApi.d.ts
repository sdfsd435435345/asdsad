/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-编辑自选(排序)↗](https://yapi.nbttfc365.com/project/44/interface/api/2822) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/favourite/edit`
 * @更新时间 `2022-11-01 12:42:37`
 */
export interface YapiPostV1FavouriteEditApiRequest {
  list?: YapiPostV1FavouriteEditApiRequestList[]
}
export interface YapiPostV1FavouriteEditApiRequestList {
  /**
   * 币对ID
   */
  id?: number
  /**
   * 新的排序号
   */
  sort?: number
}

/**
 * 接口 [现货-编辑自选(排序)↗](https://yapi.nbttfc365.com/project/44/interface/api/2822) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/favourite/edit`
 * @更新时间 `2022-11-01 12:42:37`
 */
export interface YapiPostV1FavouriteEditApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-编辑自选(排序)↗](https://yapi.nbttfc365.com/project/44/interface/api/2822)
// **/
// export const postV1FavouriteEditApiRequest: MarkcoinRequest<
//   YapiPostV1FavouriteEditApiRequest,
//   YapiPostV1FavouriteEditApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/favourite/edit",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
