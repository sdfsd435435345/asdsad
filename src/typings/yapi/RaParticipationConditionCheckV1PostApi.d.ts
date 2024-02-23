/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [检查用户是否满足娱乐区参加条件↗](https://yapi.nbttfc365.com/project/44/interface/api/11209) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/participationCondition/check`
 * @更新时间 `2023-07-26 19:13:34`
 */
export interface YapiPostV1RaParticipationConditionCheckApiRequest {}

/**
 * 接口 [检查用户是否满足娱乐区参加条件↗](https://yapi.nbttfc365.com/project/44/interface/api/11209) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/participationCondition/check`
 * @更新时间 `2023-07-26 19:13:34`
 */
export interface YapiPostV1RaParticipationConditionCheckApiResponse {
  code: number
  message: string
  data: YapiPostV1RaParticipationConditionCheckData
}
export interface YapiPostV1RaParticipationConditionCheckData {
  /**
   * ture=国家满足, false=不满足国家要求
   */
  checkCountry: boolean
  /**
   * 国家code码数组,checkCountry为false时才返回
   */
  disableCountryCodes: string[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [检查用户是否满足娱乐区参加条件↗](https://yapi.nbttfc365.com/project/44/interface/api/11209)
// **/
// export const postV1RaParticipationConditionCheckApiRequest: MarkcoinRequest<
//   YapiPostV1RaParticipationConditionCheckApiRequest,
//   YapiPostV1RaParticipationConditionCheckApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/ra/participationCondition/check",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
