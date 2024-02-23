/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币对大作战作战区列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11249) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/tradePairBattle/combatAreas`
 * @更新时间 `2023-08-03 11:22:54`
 */
export interface YapiGetV1RaTradePairBattleCombatAreasApiRequest {}

/**
 * 接口 [币对大作战作战区列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11249) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/tradePairBattle/combatAreas`
 * @更新时间 `2023-08-03 11:22:54`
 */
export interface YapiGetV1RaTradePairBattleCombatAreasApiResponse {
  code: number
  message: string
  data: YapiGetV1RaTradePairBattleCombatAreasData
}
export interface YapiGetV1RaTradePairBattleCombatAreasData {
  list: YapiGetV1RaTradePairBattleCombatAreasListData[]
}
export interface YapiGetV1RaTradePairBattleCombatAreasListData {
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
// * [币对大作战作战区列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11249)
// **/
// export const getV1RaTradePairBattleCombatAreasApiRequest: MarkcoinRequest<
//   YapiGetV1RaTradePairBattleCombatAreasApiRequest,
//   YapiGetV1RaTradePairBattleCombatAreasApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/tradePairBattle/combatAreas",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
