/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取卡详情信息(卡号加密)↗](https://yapi.nbttfc365.com/project/77/interface/api/9009) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getCardDesc`
 * @更新时间 `2023-06-27 20:57:02`
 */
export interface YapiGetV1VccGetCardDescApiRequest {
  /**
   * 虚拟卡ID
   */
  cardId: string
}

/**
 * 接口 [获取卡详情信息(卡号加密)↗](https://yapi.nbttfc365.com/project/77/interface/api/9009) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getCardDesc`
 * @更新时间 `2023-06-27 20:57:02`
 */
export interface YapiGetV1VccGetCardDescApiResponse {
  /**
   * 200成功，其他均为失败
   */
  code: number
  msg: string
  data: YapiGetV1VccGetCardDescData
}
export interface YapiGetV1VccGetCardDescData {
  /**
   * 虚拟卡ID
   */
  cardId: string
  /**
   * 支持币种：USD
   */
  currency: string
  /**
   * 卡号：(已加密 例：1234 **** **** 4321)
   */
  cardNo: string
  /**
   * CVV：(已加密 例：******)
   */
  cardCvv: string
  /**
   * 生效日期，时间戳格式
   */
  activeDate: string
  /**
   * 失效日期，时间戳格式
   */
  expiryDate: string
  /**
   * 卡类型：NORMAL普通卡
   */
  cardType: string
  /**
   * 状态：NORMAL-使用中；CANCEL-已销卡；SUSPENDED-冻结
   */
  statusCd: string
  /**
   * 卡别名
   */
  cardAlias?: string
  /**
   * 卡头
   */
  binRangeId: string
  /**
   * 卡片备注：包含该卡片支持的消费平台等信息
   */
  cardDesc: string
  /**
   * 卡片余额
   */
  balance: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取卡详情信息(卡号加密)↗](https://yapi.nbttfc365.com/project/77/interface/api/9009)
// **/
// export const getV1VccGetCardDescApiRequest: MarkcoinRequest<
//   YapiGetV1VccGetCardDescApiRequest,
//   YapiGetV1VccGetCardDescApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/vcc/getCardDesc",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
