/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取卡收支记录↗](https://yapi.nbttfc365.com/project/77/interface/api/9029) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getTrades`
 * @更新时间 `2023-06-30 14:47:23`
 */
export interface YapiGetV1VccGetTradesApiRequest {
  /**
   * 分页：当前页  默认：1
   */
  page?: string
  /**
   * 分页：分页数量  默认：10
   */
  pageSize?: string
  /**
   * 虚拟卡ID
   */
  cardId: string
}

/**
 * 接口 [获取卡收支记录↗](https://yapi.nbttfc365.com/project/77/interface/api/9029) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getTrades`
 * @更新时间 `2023-06-30 14:47:23`
 */
export interface YapiGetV1VccGetTradesApiResponse {
  /**
   * 200为成功，其他均为失败
   */
  code: number
  msg: string
  data: YapiGetV1VccGetTradesData
}
export interface YapiGetV1VccGetTradesData {
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
  list: YapiGetV1VccGetTradesListData[]
}
export interface YapiGetV1VccGetTradesListData {
  /**
   * 记录编号
   */
  recordNo: string
  /**
   * 虚拟卡ID
   */
  cardId: string
  /**
   * 交易发生时间
   */
  occurTime: string
  /**
   * 交易币种
   */
  transCurrency: string
  /**
   * 交易币种金额
   */
  transCurrencyAmt: number
  /**
   * 交易类型
   */
  transType: string
  /**
   * 交易状态
   */
  transStatus: string
  /**
   * 卡本币种
   */
  localCurrency: string
  /**
   * 卡本币种金额
   */
  localCurrencyAmt: number
  /**
   * 跨境类型，0 境内；1 境外
   */
  crossBoardType: string
  /**
   * 交易响应码
   */
  respCode: string
  /**
   * 交易响应码描述
   */
  respCodeDesc: string
  /**
   * 授权码
   */
  approvalCode: string
  /**
   * 商户名称
   */
  merchantName: string
  /**
   * 商户MCC，消费场景行业类型
   */
  商户MCC: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取卡收支记录↗](https://yapi.nbttfc365.com/project/77/interface/api/9029)
// **/
// export const getV1VccGetTradesApiRequest: MarkcoinRequest<
//   YapiGetV1VccGetTradesApiRequest,
//   YapiGetV1VccGetTradesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/vcc/getTrades",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
