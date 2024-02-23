/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [项目详情↗](https://yapi.nbttfc365.com/project/44/interface/api/11379) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/projects/detail`
 * @更新时间 `2023-07-31 16:52:49`
 */
export interface YapiGetV1RaProjectsDetailApiRequest {
  /**
   * 项目ID
   */
  id: string
}

/**
 * 接口 [项目详情↗](https://yapi.nbttfc365.com/project/44/interface/api/11379) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/projects/detail`
 * @更新时间 `2023-07-31 16:52:49`
 */
export interface YapiGetV1RaProjectsDetailApiResponse {
  data: YapiGetV1RaProjectsDetailData
  code: string
  message: string
}
export interface YapiGetV1RaProjectsDetailData {
  /**
   * 项目名
   */
  projectName: string
  /**
   * icon
   */
  projectLogo: string
  /**
   * slogan
   */
  slogan: string
  /**
   * 维护=fixing/启用=enable/ disable=禁用/待维护=waitfix
   */
  state: string
  /**
   * 玩法介绍
   */
  playDesc: string
  /**
   * ture=国家满足, false=不满足国家要求
   */
  checkCountry: boolean
  /**
   * true=kyc满足, false=不满足kyc等级要求
   */
  checkKyc: boolean
  /**
   * check_identity=1时有效，1=沒有限制，2=初級認證，3=高級認證，4=企業認證
   */
  kycLevel: string
  /**
   * 不可参与的国家/地区 国家编码列表
   */
  disabeledCountryList: string[]
  /**
   * 参与人次
   */
  pt: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [项目详情↗](https://yapi.nbttfc365.com/project/44/interface/api/11379)
// **/
// export const getV1RaProjectsDetailApiRequest: MarkcoinRequest<
//   YapiGetV1RaProjectsDetailApiRequest,
//   YapiGetV1RaProjectsDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/projects/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
