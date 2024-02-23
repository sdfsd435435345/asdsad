/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取币种开启充提推送状态↗](https://yapi.nbttfc365.com/project/77/interface/api/8499) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/coin/getCoinPushStatus`
 * @更新时间 `2023-06-12 14:36:09`
 */
export interface YapiGetV1PayCoinGetCoinPushStatusApiRequest {
  /**
   * 子币id
   */
  coinId: string
  /**
   * 类型 1、充值 2、提现
   */
  type: string
}

/**
 * 接口 [获取币种开启充提推送状态↗](https://yapi.nbttfc365.com/project/77/interface/api/8499) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/coin/getCoinPushStatus`
 * @更新时间 `2023-06-12 14:36:09`
 */
export interface YapiGetV1PayCoinGetCoinPushStatusApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PayCoinGetCoinPushStatusData
}
export interface YapiGetV1PayCoinGetCoinPushStatusData {
  /**
   * 是否开启
   */
  isOpen?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取币种开启充提推送状态↗](https://yapi.nbttfc365.com/project/77/interface/api/8499)
// **/
// export const getV1PayCoinGetCoinPushStatusApiRequest: MarkcoinRequest<
//   YapiGetV1PayCoinGetCoinPushStatusApiRequest,
//   YapiGetV1PayCoinGetCoinPushStatusApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/coin/getCoinPushStatus",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
