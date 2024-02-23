/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [开通合约↗](https://yapi.nbttfc365.com/project/44/interface/api/3623) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/open/perpetual`
 * @更新时间 `2022-12-26 14:46:49`
 */
export interface YapiPostV1PerpetualOpenPerpetualApiRequest {
  assetsMarginData: YapiPostV1PerpetualOpenPerpetualApiRequestAssetsMarginData
  /**
   * 结算币种配置
   */
  clearingCoinData: YapiPostV1PerpetualOpenPerpetualApiRequestListClearingCoinData[]
  /**
   *  合约版本 1，专业版，2，普通版
   */
  perpetualVersion: number
}
/**
 * 保证金币种配置
 */
export interface YapiPostV1PerpetualOpenPerpetualApiRequestAssetsMarginData {
  /**
   * 扣款是否均摊，yes是（等比扣款）  no否（顺序扣款）
   */
  isAvg: string
  /**
   * 保证金币种配置
   */
  coinData: YapiPostV1PerpetualOpenPerpetualApiRequestListCoinDataAssetsMarginData[]
}
export interface YapiPostV1PerpetualOpenPerpetualApiRequestListCoinDataAssetsMarginData {
  /**
   * 币种Id
   */
  coinId: number
  /**
   * 排序
   */
  sort: number
}
export interface YapiPostV1PerpetualOpenPerpetualApiRequestListClearingCoinData {
  /**
   * 币种ID
   */
  coinId: number
}

/**
 * 接口 [开通合约↗](https://yapi.nbttfc365.com/project/44/interface/api/3623) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/open/perpetual`
 * @更新时间 `2022-12-26 14:46:49`
 */
export interface YapiPostV1PerpetualOpenPerpetualApiResponse {
  code?: number
  msg?: string
  /**
   * true成功，其他失败
   */
  data?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [开通合约↗](https://yapi.nbttfc365.com/project/44/interface/api/3623)
// **/
// export const postV1PerpetualOpenPerpetualApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualOpenPerpetualApiRequest,
//   YapiPostV1PerpetualOpenPerpetualApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/open/perpetual",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
