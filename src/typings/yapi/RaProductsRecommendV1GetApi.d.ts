/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [产品推荐列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11244) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/products/recommend`
 * @更新时间 `2023-11-13 10:21:19`
 */
export interface YapiGetV1RaProductsRecommendApiRequest {
  /**
   * 分页参数页号 ，从1开始
   */
  pageNum: string
  /**
   * 分页大小
   */
  pageSize: string
}

/**
 * 接口 [产品推荐列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11244) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/products/recommend`
 * @更新时间 `2023-11-13 10:21:19`
 */
export interface YapiGetV1RaProductsRecommendApiResponse {
  code: string
  message: string
  data: YapiGetV1RaProductsRecommendData
}
export interface YapiGetV1RaProductsRecommendData {
  list: YapiGetV1RaProductsRecommendListData[]
  total: number
  pageNum: number
  pageSize: number
}
export interface YapiGetV1RaProductsRecommendListData {
  /**
   * 产品id
   */
  id: number
  /**
   * 产品code
   */
  productCode: string
  /**
   * 产品名称
   */
  productName: string
  /**
   * 项目名称
   */
  projectName: string
  /**
   * 项目logo
   */
  projectLogo: string
  /**
   * 项目code码
   */
  projectCode: string
  /**
   * 币对symbol
   */
  tradePairSymbol: string
  /**
   * delivery =交割 ,perpetual =永续
   */
  tradePairType: string
  /**
   * 作战区，1m,2m,3m,4m,5m
   */
  combatArea: string
  /**
   * 支持的策略类型, 逗号分隔
   */
  strategies: string
  /**
   * 参与人次
   */
  pt: number
  /**
   * 热度
   */
  heat: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [产品推荐列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11244)
// **/
// export const getV1RaProductsRecommendApiRequest: MarkcoinRequest<
//   YapiGetV1RaProductsRecommendApiRequest,
//   YapiGetV1RaProductsRecommendApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/products/recommend",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
