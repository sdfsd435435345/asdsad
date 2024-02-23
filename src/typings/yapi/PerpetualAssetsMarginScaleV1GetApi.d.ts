/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [保证金折算率↗](https://yapi.nbttfc365.com/project/44/interface/api/4503) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/assets/marginScale`
 * @更新时间 `2023-02-09 16:20:37`
 */
export interface YapiGetV1PerpetualAssetsMarginScaleApiRequest {
  /**
   * 合约组id
   */
  groupId: string
}

/**
 * 接口 [保证金折算率↗](https://yapi.nbttfc365.com/project/44/interface/api/4503) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/assets/marginScale`
 * @更新时间 `2023-02-09 16:20:37`
 */
export interface YapiGetV1PerpetualAssetsMarginScaleApiResponse {
  code: number
  message: string
  data: YapiGetV1PerpetualAssetsMarginScaleData
}
export interface YapiGetV1PerpetualAssetsMarginScaleData {
  list: YapiGetV1PerpetualAssetsMarginScaleListData[]
}
export interface YapiGetV1PerpetualAssetsMarginScaleListData {
  /**
   * 币种id
   */
  coinId: string
  /**
   * 币种名称
   */
  coinName: string
  appLogo: string
  webLog: string
  /**
   * 折算率
   */
  scale: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [保证金折算率↗](https://yapi.nbttfc365.com/project/44/interface/api/4503)
// **/
// export const getV1PerpetualAssetsMarginScaleApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAssetsMarginScaleApiRequest,
//   YapiGetV1PerpetualAssetsMarginScaleApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/assets/marginScale",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
