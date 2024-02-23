/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取币对最大可开仓位数量↗](https://yapi.nbttfc365.com/project/44/interface/api/4443) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/position/maxSizeLimit`
 * @更新时间 `2023-02-06 18:27:43`
 */
export interface YapiGetV1PerpetualPositionMaxSizeLimitApiRequest {
  /**
   * 币对id
   */
  tradeId: string
  /**
   * 杠杆倍数
   */
  lever: string
}

/**
 * 接口 [获取币对最大可开仓位数量↗](https://yapi.nbttfc365.com/project/44/interface/api/4443) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/position/maxSizeLimit`
 * @更新时间 `2023-02-06 18:27:43`
 */
export interface YapiGetV1PerpetualPositionMaxSizeLimitApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualPositionMaxSizeLimitData
}
export interface YapiGetV1PerpetualPositionMaxSizeLimitData {
  /**
   * 最大可开仓位数量
   */
  maxSize: string
  /**
   * 标的币
   */
  baseSymbolName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取币对最大可开仓位数量↗](https://yapi.nbttfc365.com/project/44/interface/api/4443)
// **/
// export const getV1PerpetualPositionMaxSizeLimitApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualPositionMaxSizeLimitApiRequest,
//   YapiGetV1PerpetualPositionMaxSizeLimitApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/position/maxSizeLimit",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
