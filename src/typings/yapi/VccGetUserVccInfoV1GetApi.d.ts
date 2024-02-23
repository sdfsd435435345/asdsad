/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取平台VCC配置↗](https://yapi.nbttfc365.com/project/77/interface/api/9004) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getUserVccInfo`
 * @更新时间 `2023-06-17 01:59:14`
 */
export interface YapiGetV1VccGetUserVccInfoApiRequest {}

/**
 * 接口 [获取平台VCC配置↗](https://yapi.nbttfc365.com/project/77/interface/api/9004) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getUserVccInfo`
 * @更新时间 `2023-06-17 01:59:14`
 */
export interface YapiGetV1VccGetUserVccInfoApiResponse {
  /**
   * 200为成功，其他均为失败
   */
  code: number
  msg: string
  data: YapiGetV1VccGetUserVccInfoData
}
export interface YapiGetV1VccGetUserVccInfoData {
  /**
   * 开卡费用
   */
  openCardFee: number
  /**
   * 开卡费用币种ID
   */
  feeCoinId: number
  /**
   * 开卡费用币种symbol
   */
  feeCoinSymbol: string
  /**
   * 销卡退还余额币种ID
   */
  closeRefundCoinId: number
  /**
   * 销卡退还余额币种Symbol
   */
  closeRefundCoinSymbol: string
  /**
   * 当前用户是否设置了支付密码：1-是，0-否
   */
  isSetPayPassword: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取平台VCC配置↗](https://yapi.nbttfc365.com/project/77/interface/api/9004)
// **/
// export const getV1VccGetUserVccInfoApiRequest: MarkcoinRequest<
//   YapiGetV1VccGetUserVccInfoApiRequest,
//   YapiGetV1VccGetUserVccInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/vcc/getUserVccInfo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
