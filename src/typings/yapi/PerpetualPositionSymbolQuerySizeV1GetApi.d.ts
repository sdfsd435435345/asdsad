/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取币对持仓数量↗](https://yapi.nbttfc365.com/project/44/interface/api/4439) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/position/symbol/querySize`
 * @更新时间 `2023-03-24 18:38:51`
 */
export interface YapiGetV1PerpetualPositionSymbolQuerySizeApiRequest {
  /**
   * 币对id
   */
  tradeId: string
  /**
   * 交易方向（开多，开空）
   */
  sideInd: string
  /**
   * 杠杆倍数
   */
  lever: string
}

/**
 * 接口 [获取币对持仓数量↗](https://yapi.nbttfc365.com/project/44/interface/api/4439) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/position/symbol/querySize`
 * @更新时间 `2023-03-24 18:38:51`
 */
export interface YapiGetV1PerpetualPositionSymbolQuerySizeApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualPositionSymbolQuerySizeData
}
export interface YapiGetV1PerpetualPositionSymbolQuerySizeData {
  /**
   * 持仓数量
   */
  size: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取币对持仓数量↗](https://yapi.nbttfc365.com/project/44/interface/api/4439)
// **/
// export const getV1PerpetualPositionSymbolQuerySizeApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualPositionSymbolQuerySizeApiRequest,
//   YapiGetV1PerpetualPositionSymbolQuerySizeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/position/symbol/querySize",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
