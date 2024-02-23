/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-查询金字塔产品线返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18504) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/pyramid/product/ratio`
 * @更新时间 `2023-09-18 18:23:41`
 */
export interface YapiGetV1AgentPyramidProductRatioApiRequest {}

/**
 * 接口 [邀请返佣-查询金字塔产品线返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18504) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/pyramid/product/ratio`
 * @更新时间 `2023-09-18 18:23:41`
 */
export interface YapiGetV1AgentPyramidProductRatioApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentPyramidProductRatioData
}
export interface YapiGetV1AgentPyramidProductRatioData {
  products: YapiGetV1AgentPyramidProductRatioListProductsData[]
}
export interface YapiGetV1AgentPyramidProductRatioListProductsData {
  productCd: string
  selfRatio: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-查询金字塔产品线返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18504)
// **/
// export const getV1AgentPyramidProductRatioApiRequest: MarkcoinRequest<
//   YapiGetV1AgentPyramidProductRatioApiRequest,
//   YapiGetV1AgentPyramidProductRatioApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/pyramid/product/ratio",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
