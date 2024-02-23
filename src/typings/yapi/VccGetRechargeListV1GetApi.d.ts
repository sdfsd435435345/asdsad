/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取卡充值记录↗](https://yapi.nbttfc365.com/project/77/interface/api/9014) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getRechargeList`
 * @更新时间 `2023-06-27 21:35:37`
 */
export interface YapiGetV1VccGetRechargeListApiRequest {
  /**
   * 分页：当前页  默认：1
   */
  page?: string
  /**
   * 分页：分页条数  默认：10
   */
  pageSize?: string
  /**
   * 虚拟卡ID
   */
  cardId: string
}

/**
 * 接口 [获取卡充值记录↗](https://yapi.nbttfc365.com/project/77/interface/api/9014) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getRechargeList`
 * @更新时间 `2023-06-27 21:35:37`
 */
export interface YapiGetV1VccGetRechargeListApiResponse {
  /**
   * 200成功，其他均为失败
   */
  code: number
  msg: string
  data: YapiGetV1VccGetRechargeData
}
export interface YapiGetV1VccGetRechargeData {
  /**
   * 数据总条数
   */
  totalCount: number
  /**
   * 当前页
   */
  currentPage: number
  /**
   * 分页大小
   */
  pageSize: number
  list: YapiGetV1VccGetRechargeListData[]
}
export interface YapiGetV1VccGetRechargeListData {
  /**
   * 请求单号
   */
  requestNo: string
  /**
   * 订单号
   */
  orderNo: string
  /**
   * 充值金额
   */
  amount: number
  /**
   * 充值币种Symbol
   */
  rechargeCoinSymbol: string
  /**
   * 充值币种扣减数量
   */
  rechargeCoinAmount: number
  /**
   * 手续费
   */
  feeAmount: number
  /**
   * 充值币种：USD
   */
  currency: string
  /**
   * 状态：0充值中，1完成，2失败
   */
  statusInd: number
  /**
   * 充值时间，时间戳格式
   */
  createdByTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取卡充值记录↗](https://yapi.nbttfc365.com/project/77/interface/api/9014)
// **/
// export const getV1VccGetRechargeListApiRequest: MarkcoinRequest<
//   YapiGetV1VccGetRechargeListApiRequest,
//   YapiGetV1VccGetRechargeListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/vcc/getRechargeList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
