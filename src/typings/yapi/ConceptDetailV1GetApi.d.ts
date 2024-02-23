/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [行情-板块详情↗](https://yapi.nbttfc365.com/project/44/interface/api/3332) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/concept/detail`
 * @更新时间 `2022-11-10 17:52:46`
 */
export interface YapiGetV1ConceptDetailApiRequest {
  id: string
}

/**
 * 接口 [行情-板块详情↗](https://yapi.nbttfc365.com/project/44/interface/api/3332) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/concept/detail`
 * @更新时间 `2022-11-10 17:52:46`
 */
export interface YapiGetV1ConceptDetailApiResponse {
  code?: number
  data?: YapiGetV1ConceptDetailData
  message?: string
}
export interface YapiGetV1ConceptDetailData {
  /**
   * 板块名
   */
  name?: string
  /**
   * 图片
   */
  icon?: string
  /**
   * 详情
   */
  description?: string
  /**
   * id
   */
  id?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [行情-板块详情↗](https://yapi.nbttfc365.com/project/44/interface/api/3332)
// **/
// export const getV1ConceptDetailApiRequest: MarkcoinRequest<
//   YapiGetV1ConceptDetailApiRequest,
//   YapiGetV1ConceptDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/concept/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
