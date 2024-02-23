/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取用户展示币对类型↗](https://yapi.nbttfc365.com/project/44/interface/api/10899) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/viewSymbolType/query`
 * @更新时间 `2023-07-07 17:45:03`
 */
export interface YapiGetV1PerpetualViewSymbolTypeQueryApiRequest {}

/**
 * 接口 [获取用户展示币对类型↗](https://yapi.nbttfc365.com/project/44/interface/api/10899) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/viewSymbolType/query`
 * @更新时间 `2023-07-07 17:45:03`
 */
export interface YapiGetV1PerpetualViewSymbolTypeQueryApiResponse {
  code: boolean
  message: string
  data: YapiGetV1PerpetualViewSymbolTypeQueryData
}
export interface YapiGetV1PerpetualViewSymbolTypeQueryData {
  /**
   * 币类型，buy：计价币，sell：标的币
   */
  symbolType: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取用户展示币对类型↗](https://yapi.nbttfc365.com/project/44/interface/api/10899)
// **/
// export const getV1PerpetualViewSymbolTypeQueryApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualViewSymbolTypeQueryApiRequest,
//   YapiGetV1PerpetualViewSymbolTypeQueryApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/viewSymbolType/query",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
