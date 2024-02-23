/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户是否存在挂单↗](https://yapi.nbttfc365.com/project/44/interface/api/4379) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/order/usr/existOpenOrder`
 * @更新时间 `2023-02-01 17:59:21`
 */
export interface YapiGetV1PerpetualOrderUsrExistOpenOrderApiRequest {}

/**
 * 接口 [用户是否存在挂单↗](https://yapi.nbttfc365.com/project/44/interface/api/4379) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/order/usr/existOpenOrder`
 * @更新时间 `2023-02-01 17:59:21`
 */
export interface YapiGetV1PerpetualOrderUsrExistOpenOrderApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 返回信息
   */
  message: string
  /**
   * true，存在，false，不存在
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户是否存在挂单↗](https://yapi.nbttfc365.com/project/44/interface/api/4379)
// **/
// export const getV1PerpetualOrderUsrExistOpenOrderApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualOrderUsrExistOpenOrderApiRequest,
//   YapiGetV1PerpetualOrderUsrExistOpenOrderApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/order/usr/existOpenOrder",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
