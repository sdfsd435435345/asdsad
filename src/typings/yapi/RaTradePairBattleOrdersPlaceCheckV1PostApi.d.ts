/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币对大作战下单前检查↗](https://yapi.nbttfc365.com/project/44/interface/api/11964) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/tradePairBattle/orders/place/check`
 * @更新时间 `2023-08-15 19:07:50`
 */
export interface YapiPostV1RaTradePairBattleOrdersPlaceCheckApiRequest {
  /**
   * 期数id
   */
  seasonId: number
}

/**
 * 接口 [币对大作战下单前检查↗](https://yapi.nbttfc365.com/project/44/interface/api/11964) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/tradePairBattle/orders/place/check`
 * @更新时间 `2023-08-15 19:07:50`
 */
export interface YapiPostV1RaTradePairBattleOrdersPlaceCheckApiResponse {
  code?: string
  message?: string
  data?: YapiPostV1RaTradePairBattleOrdersPlaceCheckData
}
export interface YapiPostV1RaTradePairBattleOrdersPlaceCheckData {
  /**
   * true=通过, false=不通过
   */
  isSuccess: boolean
  /**
   * true=娱乐区维护, false=未维护
   */
  raMaintenance: boolean
  /**
   * true=项目维护, false= 未维护
   */
  projectMaintenace: boolean
  /**
   * true=产品维护, false=未维护
   */
  productMaintenance: boolean
  /**
   * 维护开始时间
   */
  maintenanceStartTime: boolean
  /**
   * true=作战区项目禁用, false= 未禁用
   */
  fightAreaDisable: boolean
  /**
   * true=项目禁用, false=未禁用
   */
  projectDisable: boolean
  /**
   * true=产品禁用, false=未禁用
   */
  productDisable: boolean
  /**
   * ture=国家满足, false=不满足国家要求
   */
  checkCountry: boolean
  /**
   * true=kyc满足, false=不满足kyc等级要求
   */
  checkKyc: boolean
  /**
   * 国家code码数组,checkCountry为false时才返回
   */
  disableCountryCodes: string[]
  /**
   * 要求的key等级, checkKyc为false时才返回
   */
  kycLevel: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [币对大作战下单前检查↗](https://yapi.nbttfc365.com/project/44/interface/api/11964)
// **/
// export const postV1RaTradePairBattleOrdersPlaceCheckApiRequest: MarkcoinRequest<
//   YapiPostV1RaTradePairBattleOrdersPlaceCheckApiRequest,
//   YapiPostV1RaTradePairBattleOrdersPlaceCheckApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/ra/tradePairBattle/orders/place/check",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
