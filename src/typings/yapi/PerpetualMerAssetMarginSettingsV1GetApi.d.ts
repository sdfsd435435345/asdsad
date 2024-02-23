/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取商户保证金币种配置↗](https://yapi.nbttfc365.com/project/44/interface/api/4949) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/mer/asset/margin/settings`
 * @更新时间 `2023-02-28 18:37:51`
 */
export interface YapiGetV1PerpetualMerAssetMarginSettingsApiRequest {}

/**
 * 接口 [获取商户保证金币种配置↗](https://yapi.nbttfc365.com/project/44/interface/api/4949) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/mer/asset/margin/settings`
 * @更新时间 `2023-02-28 18:37:51`
 */
export interface YapiGetV1PerpetualMerAssetMarginSettingsApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  message: string
  data: YapiGetV1PerpetualMerAssetMarginSettingsData
}
/**
 * 商户保证金币种信息
 */
export interface YapiGetV1PerpetualMerAssetMarginSettingsData {
  /**
   * 商户保证金币种
   */
  merAssetsMarginSettingData: YapiGetV1PerpetualMerAssetMarginSettingsListMerAssetsMarginSettingData[]
}
export interface YapiGetV1PerpetualMerAssetMarginSettingsListMerAssetsMarginSettingData {
  /**
   * 币种ID
   */
  coinId: number
  /**
   * 币种代码
   */
  coinCode: string
  /**
   * 汇率类型，fixed固定 ，float 浮动
   */
  rateTypeInd: string
  /**
   * 浮动汇率比列
   */
  scale: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取商户保证金币种配置↗](https://yapi.nbttfc365.com/project/44/interface/api/4949)
// **/
// export const getV1PerpetualMerAssetMarginSettingsApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualMerAssetMarginSettingsApiRequest,
//   YapiGetV1PerpetualMerAssetMarginSettingsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/mer/asset/margin/settings",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
