/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取现货资产购买力↗](https://yapi.nbttfc365.com/project/44/interface/api/4247) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/assets/queryAsset`
 * @更新时间 `2023-02-14 12:00:46`
 */
export interface YapiGetV1PerpetualAssetsQueryAssetApiRequest {}

/**
 * 接口 [获取现货资产购买力↗](https://yapi.nbttfc365.com/project/44/interface/api/4247) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/assets/queryAsset`
 * @更新时间 `2023-02-14 12:00:46`
 */
export interface YapiGetV1PerpetualAssetsQueryAssetApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualAssetsQueryAssetData
}
export interface YapiGetV1PerpetualAssetsQueryAssetData {
  /**
   * 可用保证金
   */
  availableBalanceValue: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取现货资产购买力↗](https://yapi.nbttfc365.com/project/44/interface/api/4247)
// **/
// export const getV1PerpetualAssetsQueryAssetApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAssetsQueryAssetApiRequest,
//   YapiGetV1PerpetualAssetsQueryAssetApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/assets/queryAsset",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
