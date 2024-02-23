/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取资产账户购买力(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4007) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /inner/v1/perpetual/assets/queryAsset/{uid}/{businessId}`
 * @更新时间 `2023-01-15 14:56:46`
 */
export interface YapiGetInnerV1PerpetualAssetsQueryAssetUidBusinessIdApiRequest {
  uid: string
  businessId: string
}

/**
 * 接口 [获取资产账户购买力(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4007) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /inner/v1/perpetual/assets/queryAsset/{uid}/{businessId}`
 * @更新时间 `2023-01-15 14:56:46`
 */
export interface YapiGetInnerV1PerpetualAssetsQueryAssetUidBusinessIdApiResponse {
  code: number
  msg: string
  data: YapiGetInnerV1PerpetualAssetsQueryAssetUidBusinessIdData
}
export interface YapiGetInnerV1PerpetualAssetsQueryAssetUidBusinessIdData {
  /**
   * 购买力
   */
  purchasingPower: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取资产账户购买力(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4007)
// **/
// export const getInnerV1PerpetualAssetsQueryAssetUidBusinessIdApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualAssetsQueryAssetUidBusinessIdApiRequest,
//   YapiGetInnerV1PerpetualAssetsQueryAssetUidBusinessIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/assets/queryAsset/{uid}/{businessId}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
