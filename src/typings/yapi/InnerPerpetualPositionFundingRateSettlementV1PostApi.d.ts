/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资金结算（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4319) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/fundingRateSettlement`
 * @更新时间 `2023-02-04 13:54:07`
 */
export interface YapiPostInnerV1PerpetualPositionFundingRateSettlementApiRequest {
  businessId?: number
  groupId?: number
  /**
   * 交易对id
   */
  tradeId?: number
  positionId?: number
  uid?: number
  /**
   * 资金费率结算id
   */
  fundingRateId?: number
  /**
   * 资金费用; 赚为正，亏为负
   */
  settlementAmount?: number
  /**
   * 资金费用结算系统uid
   */
  fundingRateUid?: number
  /**
   * 资金费用结算系统groupId
   */
  fundingRateGroupId?: number
}

/**
 * 接口 [资金结算（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4319) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/fundingRateSettlement`
 * @更新时间 `2023-02-04 13:54:07`
 */
export interface YapiPostInnerV1PerpetualPositionFundingRateSettlementApiResponse {
  isSuccess: boolean
  /**
   * 失败原因
   */
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资金结算（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4319)
// **/
// export const postInnerV1PerpetualPositionFundingRateSettlementApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualPositionFundingRateSettlementApiRequest,
//   YapiPostInnerV1PerpetualPositionFundingRateSettlementApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/position/fundingRateSettlement",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
