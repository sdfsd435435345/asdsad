/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约财务记录详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/3703) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/finance/{id}/detail`
 * @更新时间 `2023-02-04 14:41:38`
 */
export interface YapiGetV1PerpetualFinanceIdDetailApiRequest {
  /**
   * 交易id
   */
  id: string
}

/**
 * 接口 [合约财务记录详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/3703) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/finance/{id}/detail`
 * @更新时间 `2023-02-04 14:41:38`
 */
export interface YapiGetV1PerpetualFinanceIdDetailApiResponse {
  code?: number
  message?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约财务记录详情查询↗](https://yapi.nbttfc365.com/project/44/interface/api/3703)
// **/
// export const getV1PerpetualFinanceIdDetailApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualFinanceIdDetailApiRequest,
//   YapiGetV1PerpetualFinanceIdDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/finance/{id}/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
