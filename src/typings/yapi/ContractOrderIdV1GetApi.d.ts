/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史委托_普通委托_订单详情查询(作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/3683) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/contract/order/{id}`
 * @更新时间 `2022-12-30 15:31:27`
 */
export interface YapiGetV1ContractOrderIdApiRequest {
  /**
   * 订单id
   */
  id: string
}

/**
 * 接口 [历史委托_普通委托_订单详情查询(作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/3683) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/contract/order/{id}`
 * @更新时间 `2022-12-30 15:31:27`
 */
export interface YapiGetV1ContractOrderIdApiResponse {
  code?: number
  msg?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [历史委托_普通委托_订单详情查询(作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/3683)
// **/
// export const getV1ContractOrderIdApiRequest: MarkcoinRequest<
//   YapiGetV1ContractOrderIdApiRequest,
//   YapiGetV1ContractOrderIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/contract/order/{id}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
