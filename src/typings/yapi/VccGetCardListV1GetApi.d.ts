/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [虚拟卡列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8994) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getCardList`
 * @更新时间 `2023-06-27 20:57:20`
 */
export interface YapiGetV1VccGetCardListApiRequest {}

/**
 * 接口 [虚拟卡列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8994) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getCardList`
 * @更新时间 `2023-06-27 20:57:20`
 */
export interface YapiGetV1VccGetCardListApiResponse {
  /**
   * 200为成功，其他均为失败
   */
  code: number
  msg: string
  data: YapiGetV1VccGetCardListData[]
}
export interface YapiGetV1VccGetCardListData {
  /**
   * 卡编号
   */
  cardId: string
  /**
   * 币种：USD
   */
  currency: string
  /**
   * 卡号（加密）
   */
  cardNo: string
  /**
   * CVV（加密）
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
   * 卡类型：NORMAL 普通卡，GROUP 共享附属卡
   */
  cardType: string
  /**
   * 卡状态：NORMAL-使用中；CANCEL-已销卡；SUSPENDED-冻结
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
   * 卡余额
   */
  balance: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [虚拟卡列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8994)
// **/
// export const getV1VccGetCardListApiRequest: MarkcoinRequest<
//   YapiGetV1VccGetCardListApiRequest,
//   YapiGetV1VccGetCardListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/vcc/getCardList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
