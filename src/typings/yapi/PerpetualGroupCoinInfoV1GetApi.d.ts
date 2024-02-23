/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组保证金币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4175) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/coinInfo`
 * @更新时间 `2023-01-31 17:44:42`
 */
export interface YapiGetV1PerpetualGroupCoinInfoApiRequest {
  groupId: string
}

/**
 * 接口 [合约组保证金币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4175) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/coinInfo`
 * @更新时间 `2023-01-31 17:44:42`
 */
export interface YapiGetV1PerpetualGroupCoinInfoApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualGroupCoinInfoData
}
export interface YapiGetV1PerpetualGroupCoinInfoData {
  list: YapiGetV1PerpetualGroupCoinInfoListData[]
  /**
   * 计价币
   */
  baseCoin: string
}
export interface YapiGetV1PerpetualGroupCoinInfoListData {
  /**
   * 币种id
   */
  coinId: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 可提数量
   */
  amount: string
  /**
   * app图标
   */
  appLogo: string
  /**
   * web图标
   */
  webLogo: string
  /**
   * 币种符号
   */
  symbol: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组保证金币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4175)
// **/
// export const getV1PerpetualGroupCoinInfoApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupCoinInfoApiRequest,
//   YapiGetV1PerpetualGroupCoinInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/coinInfo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
