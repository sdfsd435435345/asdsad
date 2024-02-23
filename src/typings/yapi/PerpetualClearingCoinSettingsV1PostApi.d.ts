/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [平仓结算币种设置↗](https://yapi.nbttfc365.com/project/44/interface/api/3631) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/clearingCoin/settings`
 * @更新时间 `2022-12-28 15:10:34`
 */
export interface YapiPostV1PerpetualClearingCoinSettingsApiRequest {
  /**
   * 配置数据
   */
  coinData: YapiPostV1PerpetualClearingCoinSettingsApiRequestListCoinData[]
}
export interface YapiPostV1PerpetualClearingCoinSettingsApiRequestListCoinData {
  /**
   * 币种Id
   */
  coinId: number
}

/**
 * 接口 [平仓结算币种设置↗](https://yapi.nbttfc365.com/project/44/interface/api/3631) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/clearingCoin/settings`
 * @更新时间 `2022-12-28 15:10:34`
 */
export interface YapiPostV1PerpetualClearingCoinSettingsApiResponse {
  /**
   * 200成功，其他失败
   */
  code?: number
  message?: string
  /**
   * true成功，其他失败
   */
  data?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [平仓结算币种设置↗](https://yapi.nbttfc365.com/project/44/interface/api/3631)
// **/
// export const postV1PerpetualClearingCoinSettingsApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualClearingCoinSettingsApiRequest,
//   YapiPostV1PerpetualClearingCoinSettingsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/clearingCoin/settings",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
