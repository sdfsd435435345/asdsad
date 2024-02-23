/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [hash大作战查询产品最新期数↗](https://yapi.nbttfc365.com/project/44/interface/api/18354) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hashBattle/queryLatestSeason`
 * @更新时间 `2023-09-13 15:52:25`
 */
export interface YapiGetV1RaHashBattleQueryLatestSeasonApiRequest {
  /**
   * 作战区，1m,2m,3m,4m,5m
   */
  combatArea: string
  /**
   * 链名
   */
  chainName: string
}

/**
 * 接口 [hash大作战查询产品最新期数↗](https://yapi.nbttfc365.com/project/44/interface/api/18354) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hashBattle/queryLatestSeason`
 * @更新时间 `2023-09-13 15:52:25`
 */
export interface YapiGetV1RaHashBattleQueryLatestSeasonApiResponse {
  code: string
  message: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [hash大作战查询产品最新期数↗](https://yapi.nbttfc365.com/project/44/interface/api/18354)
// **/
// export const getV1RaHashBattleQueryLatestSeasonApiRequest: MarkcoinRequest<
//   YapiGetV1RaHashBattleQueryLatestSeasonApiRequest,
//   YapiGetV1RaHashBattleQueryLatestSeasonApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/hashBattle/queryLatestSeason",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
