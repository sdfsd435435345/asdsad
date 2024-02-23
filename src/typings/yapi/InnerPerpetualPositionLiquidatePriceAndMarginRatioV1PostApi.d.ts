/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取强平价和保证金率(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/10969) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/liquidatePriceAndMarginRatio`
 * @更新时间 `2023-07-11 00:07:57`
 */
export interface YapiPostInnerV1PerpetualPositionLiquidatePriceAndMarginRatioApiRequest {
  /**
   * uid
   */
  uid: number
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 仓位id
   */
  positionId: string
}

/**
 * 接口 [获取强平价和保证金率(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/10969) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/liquidatePriceAndMarginRatio`
 * @更新时间 `2023-07-11 00:07:57`
 */
export interface YapiPostInnerV1PerpetualPositionLiquidatePriceAndMarginRatioApiResponse {
  /**
   * 是否成功
   */
  code: boolean
  message: string
  data: YapiPostInnerV1PerpetualPositionLiquidatePriceAndMarginRatioData
}
export interface YapiPostInnerV1PerpetualPositionLiquidatePriceAndMarginRatioData {
  /**
   * 强平价
   */
  liquidatePrice: string
  /**
   * 保证金率
   */
  marginRatio: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取强平价和保证金率(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/10969)
// **/
// export const postInnerV1PerpetualPositionLiquidatePriceAndMarginRatioApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualPositionLiquidatePriceAndMarginRatioApiRequest,
//   YapiPostInnerV1PerpetualPositionLiquidatePriceAndMarginRatioApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/position/liquidatePriceAndMarginRatio",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
