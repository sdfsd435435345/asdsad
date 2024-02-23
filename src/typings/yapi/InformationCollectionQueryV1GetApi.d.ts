/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [app个人信息收集↗](https://yapi.nbttfc365.com/project/77/interface/api/18309) 的 **请求类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_610)
 * @请求头 `GET /v1/informationCollection/query`
 * @更新时间 `2023-09-11 14:34:32`
 */
export interface YapiGetV1InformationCollectionQueryApiRequest {}

/**
 * 接口 [app个人信息收集↗](https://yapi.nbttfc365.com/project/77/interface/api/18309) 的 **返回类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_610)
 * @请求头 `GET /v1/informationCollection/query`
 * @更新时间 `2023-09-11 14:34:32`
 */
export interface YapiGetV1InformationCollectionQueryApiResponse {
  code?: number
  data?: YapiGetV1InformationCollectionQueryData
  message?: string
}
export interface YapiGetV1InformationCollectionQueryData {
  /**
   * 图片 值为数值类型
   */
  photograph?: string
  /**
   * 视频
   */
  video?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [app个人信息收集↗](https://yapi.nbttfc365.com/project/77/interface/api/18309)
// **/
// export const getV1InformationCollectionQueryApiRequest: MarkcoinRequest<
//   YapiGetV1InformationCollectionQueryApiRequest,
//   YapiGetV1InformationCollectionQueryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/informationCollection/query",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [app个人信息收集↗](https://yapi.nbttfc365.com/project/44/interface/api/18339) 的 **请求类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_106)
 * @请求头 `GET /v1/informationCollection/query`
 * @更新时间 `2023-09-11 14:36:03`
 */
export interface YapiGetV1InformationCollectionQueryApiRequest {}

/**
 * 接口 [app个人信息收集↗](https://yapi.nbttfc365.com/project/44/interface/api/18339) 的 **返回类型**
 *
 * @分类 [个人中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_106)
 * @请求头 `GET /v1/informationCollection/query`
 * @更新时间 `2023-09-11 14:36:03`
 */
export interface YapiGetV1InformationCollectionQueryApiResponse {
  code?: number
  data?: YapiGetV1InformationCollectionQueryData
  message?: string
}
export interface YapiGetV1InformationCollectionQueryData {
  /**
   * 图片 值为数值类型
   */
  photograph?: string
  /**
   * 视频
   */
  video?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [app个人信息收集↗](https://yapi.nbttfc365.com/project/44/interface/api/18339)
// **/
// export const getV1InformationCollectionQueryApiRequest: MarkcoinRequest<
//   YapiGetV1InformationCollectionQueryApiRequest,
//   YapiGetV1InformationCollectionQueryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/informationCollection/query",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
