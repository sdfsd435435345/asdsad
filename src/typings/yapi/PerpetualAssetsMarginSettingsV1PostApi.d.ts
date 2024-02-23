/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [保证金币种设置↗](https://yapi.nbttfc365.com/project/44/interface/api/3627) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/assetsMargin/settings`
 * @更新时间 `2022-12-28 15:09:27`
 */
export interface YapiPostV1PerpetualAssetsMarginSettingsApiRequest {
  /**
   * 扣款是否均摊     yes是（等比扣款）  no否（顺序扣款）
   */
  isAvg?: string
  /**
   * 币种配置
   */
  coinData: YapiPostV1PerpetualAssetsMarginSettingsApiRequestListCoinData[]
}
export interface YapiPostV1PerpetualAssetsMarginSettingsApiRequestListCoinData {
  /**
   * 币种Id
   */
  coinId: number
  /**
   *  排序
   */
  sort: number
}

/**
 * 接口 [保证金币种设置↗](https://yapi.nbttfc365.com/project/44/interface/api/3627) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/assetsMargin/settings`
 * @更新时间 `2022-12-28 15:09:27`
 */
export interface YapiPostV1PerpetualAssetsMarginSettingsApiResponse {
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
// * [保证金币种设置↗](https://yapi.nbttfc365.com/project/44/interface/api/3627)
// **/
// export const postV1PerpetualAssetsMarginSettingsApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualAssetsMarginSettingsApiRequest,
//   YapiPostV1PerpetualAssetsMarginSettingsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/assetsMargin/settings",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
