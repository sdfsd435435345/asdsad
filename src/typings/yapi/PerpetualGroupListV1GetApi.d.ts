/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4223) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/list`
 * @更新时间 `2023-10-25 16:59:36`
 */
export interface YapiGetV1PerpetualGroupListApiRequest {}

/**
 * 接口 [合约组列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4223) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/list`
 * @更新时间 `2023-10-25 16:59:36`
 */
export interface YapiGetV1PerpetualGroupListApiResponse {
  code?: number
  msg?: string
  data: YapiGetV1PerpetualGroupData
}
export interface YapiGetV1PerpetualGroupData {
  list: YapiGetV1PerpetualGroupListData[]
}
export interface YapiGetV1PerpetualGroupListData {
  /**
   * 总收益（删除）
   */
  totalRevenue: string
  /**
   * 总收益率（删除）
   */
  totalYield: string
  /**
   * 合约组保证金资产
   */
  groupAsset: string
  /**
   * 仓位占用保证金资产
   */
  positionAsset: string
  /**
   * 可用保证金
   */
  marginAvailable: string
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 合约组名称
   */
  groupName: string
  /**
   * 计价币
   */
  baseCoin: string
  /**
   * 是否自动追加保证金（yes，no）
   */
  isAutoAdd: string
  /**
   * 未实现盈亏
   */
  unrealizedProfit: string
  /**
   * 可用币种资产
   */
  marginCoinAvailable: string
  /**
   * 仓位占用币种资产
   */
  positionCoinAsset: string
  /**
   * 合约币种总资产
   */
  groupCoinAsset: string
  /**
   * 开仓冻结币种价值
   */
  lockCoinAsset: string
  /**
   * 开仓冻结保证金价值
   */
  lockMarginAsset: string
  /**
   * 账户类型，数据字典：GroupAccountTypeEnum
   */
  accountType: string
  /**
   * 总体验金
   */
  voucherAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4223)
// **/
// export const getV1PerpetualGroupListApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupListApiRequest,
//   YapiGetV1PerpetualGroupListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
