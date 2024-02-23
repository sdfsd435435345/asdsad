/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约资产列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5684) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/assets/list`
 * @更新时间 `2023-05-10 16:41:05`
 */
export interface YapiGetV1PerpetualAssetsListApiRequest {}

/**
 * 接口 [合约资产列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5684) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/assets/list`
 * @更新时间 `2023-05-10 16:41:05`
 */
export interface YapiGetV1PerpetualAssetsListApiResponse {
  code?: number
  msg?: string
  data?: YapiGetV1PerpetualAssetsData
}
export interface YapiGetV1PerpetualAssetsData {
  list?: YapiGetV1PerpetualAssetsListData[]
  /**
   * 计价币
   */
  baseCoin?: string
}
export interface YapiGetV1PerpetualAssetsListData {
  /**
   * 币种id
   */
  coinId: string
  webLogo: string
  appLogo: string
  /**
   * 合约组保证金总数量
   */
  amount: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 币种符号
   */
  symbol: string
  /**
   * 折算价值
   */
  convertedValue: string
  /**
   * 合约组冻结数量
   */
  lockAmount: string
  /**
   * 合约组保证金可用数量
   */
  availableAmount: string
  groupList: YapiGetV1PerpetualAssetsListGroupListListData[]
}
export interface YapiGetV1PerpetualAssetsListGroupListListData {
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 合约组名称
   */
  groupName: string
  /**
   * 合约组保证金总数量
   */
  amount: string
  /**
   * 折算价值
   */
  convertedValue: string
  /**
   * 合约组冻结数量
   */
  lockAmount: string
  /**
   * 合约组保证金可用数量
   */
  availableAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约资产列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5684)
// **/
// export const getV1PerpetualAssetsListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAssetsListApiRequest,
//   YapiGetV1PerpetualAssetsListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/assets/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
