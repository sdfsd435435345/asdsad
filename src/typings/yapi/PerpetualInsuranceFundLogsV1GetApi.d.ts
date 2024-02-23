/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [风险准备金每日记录↗](https://yapi.nbttfc365.com/project/44/interface/api/5839) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/insuranceFund/logs`
 * @更新时间 `2023-05-23 15:06:48`
 */
export interface YapiGetV1PerpetualInsuranceFundLogsApiRequest {
  pageNum: string
  pageSize: string
}

/**
 * 接口 [风险准备金每日记录↗](https://yapi.nbttfc365.com/project/44/interface/api/5839) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/insuranceFund/logs`
 * @更新时间 `2023-05-23 15:06:48`
 */
export interface YapiGetV1PerpetualInsuranceFundLogsApiResponse {
  /**
   * 返回code
   */
  code: number
  /**
   * 返回的消息
   */
  message: string
  data: YapiGetV1PerpetualInsuranceFundLogsData
}
export interface YapiGetV1PerpetualInsuranceFundLogsData {
  /**
   * 总条数
   */
  total: string
  /**
   * 当前页
   */
  pageNum: string
  /**
   * 总页数
   */
  pageSize: string
  list: YapiGetV1PerpetualInsuranceFundLogsListData[]
}
export interface YapiGetV1PerpetualInsuranceFundLogsListData {
  /**
   * 每日变动值
   */
  changeAsset: string
  /**
   * 总资产
   */
  totalAsset: string
  /**
   * 结算时间
   */
  settleTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [风险准备金每日记录↗](https://yapi.nbttfc365.com/project/44/interface/api/5839)
// **/
// export const getV1PerpetualInsuranceFundLogsApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualInsuranceFundLogsApiRequest,
//   YapiGetV1PerpetualInsuranceFundLogsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/insuranceFund/logs",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
