/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [hash大作战产品下拉列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18364) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hashBattle/list`
 * @更新时间 `2023-09-12 11:50:30`
 */
export interface YapiGetV1RaHashBattleListApiRequest {
  /**
   * 作战区，1m,2m,3m,4m,5m
   */
  combatArea: string
}

/**
 * 接口 [hash大作战产品下拉列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18364) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hashBattle/list`
 * @更新时间 `2023-09-12 11:50:30`
 */
export interface YapiGetV1RaHashBattleListApiResponse {
  code: number
  message: string
  data: YapiGetV1RaHashBattleData
}
export interface YapiGetV1RaHashBattleData {
  list: YapiGetV1RaHashBattleListData[]
}
export interface YapiGetV1RaHashBattleListData {
  /**
   * 产品id
   */
  productId: number
  /**
   * 产品名称
   */
  productName: string
  /**
   * 1=维护中,0=未维护
   */
  maintenance: number
  /**
   * 1=关注, 0=未关注
   */
  favourite: number
  /**
   * 开奖时间
   */
  lotteryTime: number
  /**
   * 热度
   */
  heat: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [hash大作战产品下拉列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18364)
// **/
// export const getV1RaHashBattleListApiRequest: MarkcoinRequest<
//   YapiGetV1RaHashBattleListApiRequest,
//   YapiGetV1RaHashBattleListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/hashBattle/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
