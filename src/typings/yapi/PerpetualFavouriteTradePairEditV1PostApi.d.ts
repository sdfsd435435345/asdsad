/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约-自选编辑↗](https://yapi.nbttfc365.com/project/44/interface/api/4067) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `POST /v1/perpetual/favouriteTradePair/edit`
 * @更新时间 `2023-01-08 22:10:44`
 */
export interface YapiPostV1PerpetualFavouriteTradePairEditApiRequest {
  list?: YapiPostV1PerpetualFavouriteTradePairEditApiRequestList[]
}
export interface YapiPostV1PerpetualFavouriteTradePairEditApiRequestList {
  id: number
  sort: number
}

/**
 * 接口 [合约-自选编辑↗](https://yapi.nbttfc365.com/project/44/interface/api/4067) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `POST /v1/perpetual/favouriteTradePair/edit`
 * @更新时间 `2023-01-08 22:10:44`
 */
export interface YapiPostV1PerpetualFavouriteTradePairEditApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约-自选编辑↗](https://yapi.nbttfc365.com/project/44/interface/api/4067)
// **/
// export const postV1PerpetualFavouriteTradePairEditApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualFavouriteTradePairEditApiRequest,
//   YapiPostV1PerpetualFavouriteTradePairEditApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/favouriteTradePair/edit",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
