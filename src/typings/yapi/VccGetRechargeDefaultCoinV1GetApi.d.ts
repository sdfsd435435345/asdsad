/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取可充值默认币种↗](https://yapi.nbttfc365.com/project/77/interface/api/9039) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getRechargeDefaultCoin`
 * @更新时间 `2023-06-20 17:23:08`
 */
export interface YapiGetV1VccGetRechargeDefaultCoinApiRequest {}

/**
 * 接口 [获取可充值默认币种↗](https://yapi.nbttfc365.com/project/77/interface/api/9039) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getRechargeDefaultCoin`
 * @更新时间 `2023-06-20 17:23:08`
 */
export interface YapiGetV1VccGetRechargeDefaultCoinApiResponse {
  /**
   * 200成功，其它失败
   */
  code: number
  msg: string
  data: YapiGetV1VccGetRechargeDefaultCoinData
}
export interface YapiGetV1VccGetRechargeDefaultCoinData {
  /**
   * 币种ID
   */
  coinId: number
  /**
   * 币种symbol
   */
  coinSymbol: string
  /**
   * 充值手续费比例(例：0.02 = 2%)
   */
  fee: number
  /**
   * 币种图标
   */
  icon: string
  /**
   * 余额数量
   */
  balance: number
  /**
   * 最小充值金额（USD）
   */
  minRechargeAmount: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取可充值默认币种↗](https://yapi.nbttfc365.com/project/77/interface/api/9039)
// **/
// export const getV1VccGetRechargeDefaultCoinApiRequest: MarkcoinRequest<
//   YapiGetV1VccGetRechargeDefaultCoinApiRequest,
//   YapiGetV1VccGetRechargeDefaultCoinApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/vcc/getRechargeDefaultCoin",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
