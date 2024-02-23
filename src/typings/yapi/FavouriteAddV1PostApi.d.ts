/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-添加自选↗](https://yapi.nbttfc365.com/project/44/interface/api/2813) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/favourite/add`
 * @更新时间 `2022-11-01 14:35:54`
 */
export interface YapiPostV1FavouriteAddApiRequest {
  /**
   * 币对ID数组
   */
  tradeIdList?: number[]
}

/**
 * 接口 [现货-添加自选↗](https://yapi.nbttfc365.com/project/44/interface/api/2813) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/favourite/add`
 * @更新时间 `2022-11-01 14:35:54`
 */
export interface YapiPostV1FavouriteAddApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-添加自选↗](https://yapi.nbttfc365.com/project/44/interface/api/2813)
// **/
// export const postV1FavouriteAddApiRequest: MarkcoinRequest<
//   YapiPostV1FavouriteAddApiRequest,
//   YapiPostV1FavouriteAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/favourite/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
