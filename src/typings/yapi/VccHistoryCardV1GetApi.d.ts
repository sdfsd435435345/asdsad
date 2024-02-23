/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史信用卡列表(销毁的卡)↗](https://yapi.nbttfc365.com/project/77/interface/api/10404) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/historyCard`
 * @更新时间 `2023-06-27 20:58:26`
 */
export interface YapiGetV1VccHistoryCardApiRequest {}

/**
 * 接口 [历史信用卡列表(销毁的卡)↗](https://yapi.nbttfc365.com/project/77/interface/api/10404) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/historyCard`
 * @更新时间 `2023-06-27 20:58:26`
 */
export interface YapiGetV1VccHistoryCardApiResponse {
  /**
   * 200成功，其他失败
   */
  code?: number
  /**
   * 返回描述
   */
  msg?: string
  /**
   * 卡数据
   */
  data?: YapiGetV1VccHistoryCardListData[]
}
export interface YapiGetV1VccHistoryCardListData {
  /**
   * cardId
   */
  cardId: string
  /**
   * 币种，eg:USD
   */
  currency: string
  /**
   * 卡号
   */
  cardNo: string
  /**
   * CVV
   */
  cardCvv: string
  /**
   * 生效日期
   */
  activeDate: string
  /**
   * 失效日期
   */
  expiryDate: string
  /**
   * 卡类型：NORMAL 普通卡，GROUP 共享附属卡
   */
  cardType: string
  /**
   * 状态：NORMAL-使用中；CANCEL-已销卡；SUSPENDED-冻结
   */
  statusCd: string
  /**
   * 卡头
   */
  binRangeId: string
  /**
   * 卡别名
   */
  cardAlias: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [历史信用卡列表(销毁的卡)↗](https://yapi.nbttfc365.com/project/77/interface/api/10404)
// **/
// export const getV1VccHistoryCardApiRequest: MarkcoinRequest<
//   YapiGetV1VccHistoryCardApiRequest,
//   YapiGetV1VccHistoryCardApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/vcc/historyCard",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
