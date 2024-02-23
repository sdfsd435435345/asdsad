/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组保证金列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4195) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/margin/list`
 * @更新时间 `2023-05-10 16:38:20`
 */
export interface YapiGetV1PerpetualGroupMarginListApiRequest {
  groupId: string
}

/**
 * 接口 [合约组保证金列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4195) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/margin/list`
 * @更新时间 `2023-05-10 16:38:20`
 */
export interface YapiGetV1PerpetualGroupMarginListApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualGroupMarginData
}
export interface YapiGetV1PerpetualGroupMarginData {
  list: YapiGetV1PerpetualGroupMarginListData[]
  /**
   * 计价币
   */
  baseCoin: string
}
export interface YapiGetV1PerpetualGroupMarginListData {
  /**
   * 币种id
   */
  coinId: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 合约组保证金总数量
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
  /**
   * 合约组开仓冻结数量
   */
  lockAmount: string
  /**
   * 合约保证金可用数量
   */
  availableAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组保证金列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4195)
// **/
// export const getV1PerpetualGroupMarginListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupMarginListApiRequest,
//   YapiGetV1PerpetualGroupMarginListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/margin/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
