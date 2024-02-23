/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组保证金币种↗](https://yapi.nbttfc365.com/project/44/interface/api/4207) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/marginCoinList`
 * @更新时间 `2023-01-29 11:05:59`
 */
export interface YapiGetV1PerpetualGroupMarginCoinListApiRequest {}

/**
 * 接口 [合约组保证金币种↗](https://yapi.nbttfc365.com/project/44/interface/api/4207) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/marginCoinList`
 * @更新时间 `2023-01-29 11:05:59`
 */
export interface YapiGetV1PerpetualGroupMarginCoinListApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualGroupMarginCoinData
}
export interface YapiGetV1PerpetualGroupMarginCoinData {
  /**
   * 币种id集合
   */
  coinList: YapiGetV1PerpetualGroupMarginCoinListCoinListData[]
}
export interface YapiGetV1PerpetualGroupMarginCoinListCoinListData {
  /**
   * 币种ID
   */
  coinId: number
  /**
   * 币种名称
   */
  coninName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组保证金币种↗](https://yapi.nbttfc365.com/project/44/interface/api/4207)
// **/
// export const getV1PerpetualGroupMarginCoinListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupMarginCoinListApiRequest,
//   YapiGetV1PerpetualGroupMarginCoinListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/marginCoinList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
