/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资金费用详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4335) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/assets/fundingRateDetail`
 * @更新时间 `2023-02-20 15:53:00`
 */
export interface YapiGetV1PerpetualAssetsFundingRateDetailApiRequest {
  /**
   * 资金费用id
   */
  fundingRateId: string
  /**
   * 仓位id
   */
  positionId: string
}

/**
 * 接口 [资金费用详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4335) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/assets/fundingRateDetail`
 * @更新时间 `2023-02-20 15:53:00`
 */
export interface YapiGetV1PerpetualAssetsFundingRateDetailApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualAssetsFundingRateDetailData
}
export interface YapiGetV1PerpetualAssetsFundingRateDetailData {
  /**
   * 交易流水号
   */
  serialNo: string
  /**
   * 合约组名称
   */
  groupName: string
  /**
   * 金额
   */
  amount: string
  /**
   * 完成时间
   */
  endTime: string
  fundingRate: YapiGetV1PerpetualAssetsFundingRateDetailListFundingRateData[]
  /**
   * 日志类型
   */
  type: string
}
export interface YapiGetV1PerpetualAssetsFundingRateDetailListFundingRateData {
  /**
   * 时间
   */
  time: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 数量
   */
  amount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资金费用详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4335)
// **/
// export const getV1PerpetualAssetsFundingRateDetailApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAssetsFundingRateDetailApiRequest,
//   YapiGetV1PerpetualAssetsFundingRateDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/assets/fundingRateDetail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
