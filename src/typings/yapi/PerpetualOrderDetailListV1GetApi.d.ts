/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [订单详情资金明细列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4347) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/order/detail/list`
 * @更新时间 `2023-02-07 16:56:11`
 */
export interface YapiGetV1PerpetualOrderDetailListApiRequest {
  /**
   * 订单id
   */
  orderId: string
  /**
   * 每页条数
   */
  pageSize: string
  /**
   * 页码
   */
  pageNum: string
}

/**
 * 接口 [订单详情资金明细列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4347) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/order/detail/list`
 * @更新时间 `2023-02-07 16:56:11`
 */
export interface YapiGetV1PerpetualOrderDetailListApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualOrderDetailData
}
export interface YapiGetV1PerpetualOrderDetailData {
  /**
   * 资金明细
   */
  list: YapiGetV1PerpetualOrderDetailListData[]
  pageNum: number
  pageSize: number
  total: number
}
export interface YapiGetV1PerpetualOrderDetailListData {
  /**
   * 数量
   */
  amount: string
  /**
   * 币种
   */
  coinName: string
  /**
   * 类型
   */
  type: string
  /**
   * 汇率
   */
  rate: string
  /**
   * 法币
   */
  currencyName: string
  /**
   * 时间
   */
  time: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [订单详情资金明细列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4347)
// **/
// export const getV1PerpetualOrderDetailListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualOrderDetailListApiRequest,
//   YapiGetV1PerpetualOrderDetailListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/order/detail/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
