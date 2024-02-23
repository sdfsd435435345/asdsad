/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [检查用户是否满足项目参加条件↗](https://yapi.nbttfc365.com/project/44/interface/api/11719) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/projects/participationCondition/check`
 * @更新时间 `2023-08-07 15:45:51`
 */
export interface YapiPostV1RaProjectsParticipationConditionCheckApiRequest {
  productId: number
}

/**
 * 接口 [检查用户是否满足项目参加条件↗](https://yapi.nbttfc365.com/project/44/interface/api/11719) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/projects/participationCondition/check`
 * @更新时间 `2023-08-07 15:45:51`
 */
export interface YapiPostV1RaProjectsParticipationConditionCheckApiResponse {
  code: number
  message: string
  data: YapiPostV1RaProjectsParticipationConditionCheckData
}
export interface YapiPostV1RaProjectsParticipationConditionCheckData {
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
// * [检查用户是否满足项目参加条件↗](https://yapi.nbttfc365.com/project/44/interface/api/11719)
// **/
// export const postV1RaProjectsParticipationConditionCheckApiRequest: MarkcoinRequest<
//   YapiPostV1RaProjectsParticipationConditionCheckApiRequest,
//   YapiPostV1RaProjectsParticipationConditionCheckApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/ra/projects/participationCondition/check",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
