/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [风险准备金趋势↗](https://yapi.nbttfc365.com/project/44/interface/api/5849) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/insuranceFund/trend`
 * @更新时间 `2023-05-23 15:06:36`
 */
export interface YapiGetV1PerpetualInsuranceFundTrendApiRequest {
  /**
   * day=7, 表示最近7日变动, day=30, 表示最近30日变动
   */
  day: string
}

/**
 * 接口 [风险准备金趋势↗](https://yapi.nbttfc365.com/project/44/interface/api/5849) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/insuranceFund/trend`
 * @更新时间 `2023-05-23 15:06:36`
 */
export interface YapiGetV1PerpetualInsuranceFundTrendApiResponse {
  /**
   * 返回code
   */
  code: number
  /**
   * 返回的消息
   */
  message: string
  data: YapiGetV1PerpetualInsuranceFundTrendData
}
export interface YapiGetV1PerpetualInsuranceFundTrendData {
  list: YapiGetV1PerpetualInsuranceFundTrendListData[]
}
export interface YapiGetV1PerpetualInsuranceFundTrendListData {
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
// * [风险准备金趋势↗](https://yapi.nbttfc365.com/project/44/interface/api/5849)
// **/
// export const getV1PerpetualInsuranceFundTrendApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualInsuranceFundTrendApiRequest,
//   YapiGetV1PerpetualInsuranceFundTrendApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/insuranceFund/trend",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
