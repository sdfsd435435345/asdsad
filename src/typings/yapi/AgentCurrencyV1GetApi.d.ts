/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [平台法币↗](https://yapi.nbttfc365.com/project/44/interface/api/10909) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/currency`
 * @更新时间 `2023-07-10 10:04:54`
 */
export interface YapiGetV1AgentCurrencyApiRequest {}

/**
 * 接口 [平台法币↗](https://yapi.nbttfc365.com/project/44/interface/api/10909) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/currency`
 * @更新时间 `2023-07-10 10:04:54`
 */
export interface YapiGetV1AgentCurrencyApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentCurrencyData
}
export interface YapiGetV1AgentCurrencyData {
  /**
   * 法币名称(美元)
   */
  currencyName: string
  /**
   * 法币英文名称(USD)
   */
  currencyEnName: string
  /**
   * 法币符号(USD)
   */
  currencySymbol: string
  /**
   * 法币精度(2)
   */
  offset: number
  /**
   * icon($)
   */
  legalIcon: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [平台法币↗](https://yapi.nbttfc365.com/project/44/interface/api/10909)
// **/
// export const getV1AgentCurrencyApiRequest: MarkcoinRequest<
//   YapiGetV1AgentCurrencyApiRequest,
//   YapiGetV1AgentCurrencyApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/currency",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
