/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询当用户是否有普通委托挂单↗](https://yapi.nbttfc365.com/project/44/interface/api/4135) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/orders/hasOpenOrders`
 * @更新时间 `2023-01-16 15:17:09`
 */
export interface YapiGetV1PerpetualOrdersHasOpenOrdersApiRequest {
  /**
   * 合约组ID，不传不过滤合约组
   */
  groupId?: string
}

/**
 * 接口 [查询当用户是否有普通委托挂单↗](https://yapi.nbttfc365.com/project/44/interface/api/4135) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/orders/hasOpenOrders`
 * @更新时间 `2023-01-16 15:17:09`
 */
export interface YapiGetV1PerpetualOrdersHasOpenOrdersApiResponse {
  /**
   * 返回状态码200为成功，其他code值为失败
   */
  code?: number
  /**
   * 返回信息说明 success
   */
  message?: string
  /**
   * true 有挂单 false没有挂单
   */
  data?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询当用户是否有普通委托挂单↗](https://yapi.nbttfc365.com/project/44/interface/api/4135)
// **/
// export const getV1PerpetualOrdersHasOpenOrdersApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualOrdersHasOpenOrdersApiRequest,
//   YapiGetV1PerpetualOrdersHasOpenOrdersApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/orders/hasOpenOrders",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
