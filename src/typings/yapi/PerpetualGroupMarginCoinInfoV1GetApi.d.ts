/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [划转币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/11079) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/margin/coin/info`
 * @更新时间 `2023-07-17 15:17:09`
 */
export interface YapiGetV1PerpetualGroupMarginCoinInfoApiRequest {}

/**
 * 接口 [划转币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/11079) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/margin/coin/info`
 * @更新时间 `2023-07-17 15:17:09`
 */
export interface YapiGetV1PerpetualGroupMarginCoinInfoApiResponse {
  code: number
  message: string
  data: YapiGetV1PerpetualGroupMarginCoinInfoData
}
export interface YapiGetV1PerpetualGroupMarginCoinInfoData {
  list: YapiGetV1PerpetualGroupMarginCoinInfoListData[]
}
export interface YapiGetV1PerpetualGroupMarginCoinInfoListData {
  /**
   * 币种id
   */
  coinId: string
  symbol: string
  /**
   * 币种名称
   */
  coinName: string
  webLogo: string
  appLogo: string
  /**
   * 排序
   */
  sort: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [划转币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/11079)
// **/
// export const getV1PerpetualGroupMarginCoinInfoApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupMarginCoinInfoApiRequest,
//   YapiGetV1PerpetualGroupMarginCoinInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/margin/coin/info",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
