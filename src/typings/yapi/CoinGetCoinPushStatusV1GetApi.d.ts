/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取币种开启充提推送状态↗](https://yapi.nbttfc365.com/project/44/interface/api/2903) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/coin/getCoinPushStatus`
 * @更新时间 `2022-10-18 15:18:15`
 */
export interface YapiGetV1CoinGetCoinPushStatusApiRequest {
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
 * 接口 [获取币种开启充提推送状态↗](https://yapi.nbttfc365.com/project/44/interface/api/2903) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/coin/getCoinPushStatus`
 * @更新时间 `2022-10-18 15:18:15`
 */
export interface YapiGetV1CoinGetCoinPushStatusApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1CoinGetCoinPushStatusData
}
export interface YapiGetV1CoinGetCoinPushStatusData {
  /**
   * 是否开启
   */
  isOpen?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取币种开启充提推送状态↗](https://yapi.nbttfc365.com/project/44/interface/api/2903)
// **/
// export const getV1CoinGetCoinPushStatusApiRequest: MarkcoinRequest<
//   YapiGetV1CoinGetCoinPushStatusApiRequest,
//   YapiGetV1CoinGetCoinPushStatusApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coin/getCoinPushStatus",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
