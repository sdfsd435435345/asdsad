/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [hash大作战作战区列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18344) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hashBattle/combatAreas`
 * @更新时间 `2023-09-12 11:21:17`
 */
export interface YapiGetV1RaHashBattleCombatAreasApiRequest {}

/**
 * 接口 [hash大作战作战区列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18344) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hashBattle/combatAreas`
 * @更新时间 `2023-09-12 11:21:17`
 */
export interface YapiGetV1RaHashBattleCombatAreasApiResponse {
  code: number
  message: string
  data: YapiGetV1RaHashBattleCombatAreasData
}
export interface YapiGetV1RaHashBattleCombatAreasData {
  list: YapiGetV1RaHashBattleCombatAreasListData[]
}
export interface YapiGetV1RaHashBattleCombatAreasListData {
  /**
   * 项目名称
   */
  projectName: string
  /**
   * 项目code
   */
  projectCode: string
  /**
   * 作战区，1m,2m,3m,4m,5m
   */
  combatArea: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [hash大作战作战区列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18344)
// **/
// export const getV1RaHashBattleCombatAreasApiRequest: MarkcoinRequest<
//   YapiGetV1RaHashBattleCombatAreasApiRequest,
//   YapiGetV1RaHashBattleCombatAreasApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/hashBattle/combatAreas",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
