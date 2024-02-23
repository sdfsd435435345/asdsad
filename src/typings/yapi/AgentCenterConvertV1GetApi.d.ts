/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-币种换算（弃用）↗](https://yapi.nbttfc365.com/project/44/interface/api/18454) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/center/convert`
 * @更新时间 `2023-09-28 11:56:20`
 */
export interface YapiGetV1AgentCenterConvertApiRequest {
  /**
   * 当前币种
   */
  currentSymbol: string
  /**
   * 目标币种
   */
  targetSymbol: string
  /**
   * 当前数量
   */
  amount: string
}

/**
 * 接口 [代理中心-币种换算（弃用）↗](https://yapi.nbttfc365.com/project/44/interface/api/18454) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/center/convert`
 * @更新时间 `2023-09-28 11:56:20`
 */
export interface YapiGetV1AgentCenterConvertApiResponse {
  messsage?: string
  data?: YapiGetV1AgentCenterConvertData
  code?: number
}
export interface YapiGetV1AgentCenterConvertData {
  /**
   * 换算后的数量
   */
  targetAmount?: number
  /**
   * 目标币种
   */
  targetSymbol?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-币种换算（弃用）↗](https://yapi.nbttfc365.com/project/44/interface/api/18454)
// **/
// export const getV1AgentCenterConvertApiRequest: MarkcoinRequest<
//   YapiGetV1AgentCenterConvertApiRequest,
//   YapiGetV1AgentCenterConvertApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/center/convert",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
