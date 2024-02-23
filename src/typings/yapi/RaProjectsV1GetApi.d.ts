/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [项目列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11224) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/projects`
 * @更新时间 `2023-07-27 15:17:20`
 */
export interface YapiGetV1RaProjectsApiRequest {}

/**
 * 接口 [项目列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11224) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/projects`
 * @更新时间 `2023-07-27 15:17:20`
 */
export interface YapiGetV1RaProjectsApiResponse {
  code: number
  message: string
  data: YapiGetV1RaProjectsData
}
export interface YapiGetV1RaProjectsData {
  list: YapiGetV1RaProjectsListData[]
}
export interface YapiGetV1RaProjectsListData {
  /**
   * 项目id
   */
  id: number
  /**
   * 项目名称
   */
  name: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [项目列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11224)
// **/
// export const getV1RaProjectsApiRequest: MarkcoinRequest<
//   YapiGetV1RaProjectsApiRequest,
//   YapiGetV1RaProjectsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/projects",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
