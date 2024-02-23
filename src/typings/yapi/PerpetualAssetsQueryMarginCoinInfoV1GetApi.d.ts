/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询用户存在冻结和保证金的币种↗](https://yapi.nbttfc365.com/project/44/interface/api/4375) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/assets/queryMarginCoinInfo`
 * @更新时间 `2023-02-01 16:57:52`
 */
export interface YapiGetV1PerpetualAssetsQueryMarginCoinInfoApiRequest {}

/**
 * 接口 [查询用户存在冻结和保证金的币种↗](https://yapi.nbttfc365.com/project/44/interface/api/4375) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/assets/queryMarginCoinInfo`
 * @更新时间 `2023-02-01 16:57:52`
 */
export interface YapiGetV1PerpetualAssetsQueryMarginCoinInfoApiResponse {
  code: number
  message: string
  data: YapiGetV1PerpetualAssetsQueryMarginCoinInfoData
}
export interface YapiGetV1PerpetualAssetsQueryMarginCoinInfoData {
  list: YapiGetV1PerpetualAssetsQueryMarginCoinInfoListData[]
}
export interface YapiGetV1PerpetualAssetsQueryMarginCoinInfoListData {
  /**
   * 币种id
   */
  coinId: string
  /**
   * 币种名称
   */
  coinName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询用户存在冻结和保证金的币种↗](https://yapi.nbttfc365.com/project/44/interface/api/4375)
// **/
// export const getV1PerpetualAssetsQueryMarginCoinInfoApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAssetsQueryMarginCoinInfoApiRequest,
//   YapiGetV1PerpetualAssetsQueryMarginCoinInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/assets/queryMarginCoinInfo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
