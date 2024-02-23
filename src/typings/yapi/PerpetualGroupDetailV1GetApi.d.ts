/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组详情接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3995) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/detail`
 * @更新时间 `2023-10-24 10:31:20`
 */
export interface YapiGetV1PerpetualGroupDetailApiRequest {
  /**
   * 合约组id
   */
  groupId: string
}

/**
 * 接口 [合约组详情接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3995) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/detail`
 * @更新时间 `2023-10-24 10:31:20`
 */
export interface YapiGetV1PerpetualGroupDetailApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualGroupDetailData
}
export interface YapiGetV1PerpetualGroupDetailData {
  /**
   * 合约组总价值
   */
  groupAsset: string
  /**
   * 合约组可用保证金
   */
  marginAvailable: string
  /**
   * 仓位保证金
   */
  positionMargin: string
  /**
   * 保证金占比
   */
  marginCoin: YapiGetV1PerpetualGroupDetailListMarginCoinData[]
  /**
   * 持仓风险占比
   */
  positionAsset: YapiGetV1PerpetualGroupDetailListPositionAssetData[]
  /**
   * 合约组ID
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
   * 可用保证金资产价值
   */
  marginAssets: string
  /**
   * 可用保证金折算比率
   */
  marginAvailableScale: string
  /**
   * 合约组未实现盈亏
   */
  unrealizedProfit: string
  /**
   * 开仓冻结保证金
   */
  openLockAsset: string
  /**
   * 用户合约组总数量
   */
  groupCount: number
  /**
   * 是否自动追加保证金
   */
  isAutoAdd: string
  /**
   * 账户类型，数据字典：GroupAccountTypeEnum
   */
  accountType: string
  /**
   * 合约组体验金之和
   */
  groupVoucherAmount: string
}
export interface YapiGetV1PerpetualGroupDetailListMarginCoinData {
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 折算价值
   */
  coinConvert: string
}
export interface YapiGetV1PerpetualGroupDetailListPositionAssetData {
  /**
   * 币种名称
   */
  coinName: string
  /**
   * long: 多仓位 short:空仓位
   */
  sideInd: string
  /**
   * 名义价值
   */
  nominalValue: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组详情接口↗](https://yapi.nbttfc365.com/project/44/interface/api/3995)
// **/
// export const getV1PerpetualGroupDetailApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupDetailApiRequest,
//   YapiGetV1PerpetualGroupDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
