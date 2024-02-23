/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [板块指数列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3327) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/concept/conceptPriceList`
 * @更新时间 `2022-11-19 12:17:10`
 */
export interface YapiGetV1ConceptConceptPriceListApiRequest {}

/**
 * 接口 [板块指数列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3327) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/concept/conceptPriceList`
 * @更新时间 `2022-11-19 12:17:10`
 */
export interface YapiGetV1ConceptConceptPriceListApiResponse {
  code?: number
  data?: YapiGetV1ConceptConceptPriceListData[]
  message?: string
}
export interface YapiGetV1ConceptConceptPriceListData {
  /**
   * 涨跌幅
   */
  chg: string
  /**
   * 板块名
   */
  name: string
  /**
   * 图标
   */
  icon: string | null
  /**
   * 市值
   */
  marketValue: string
  id: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [板块指数列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3327)
// **/
// export const getV1ConceptConceptPriceListApiRequest: MarkcoinRequest<
//   YapiGetV1ConceptConceptPriceListApiRequest,
//   YapiGetV1ConceptConceptPriceListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/concept/conceptPriceList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
