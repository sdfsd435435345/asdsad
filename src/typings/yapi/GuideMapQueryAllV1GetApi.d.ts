/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询所有的引导图状态↗](https://yapi.nbttfc365.com/project/77/interface/api/7289) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/guideMap/queryAll`
 * @更新时间 `2023-06-08 16:51:03`
 */
export interface YapiGetV1GuideMapQueryAllApiRequest {
  /**
   * 设备id
   */
  deviceId?: string
  /**
   * 用户id
   */
  uid?: string
}

/**
 * 接口 [查询所有的引导图状态↗](https://yapi.nbttfc365.com/project/77/interface/api/7289) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `GET /v1/guideMap/queryAll`
 * @更新时间 `2023-06-08 16:51:03`
 */
export interface YapiGetV1GuideMapQueryAllApiResponse {
  code?: number
  data?: YapiGetV1GuideMapQueryAllData
  message?: string
}
export interface YapiGetV1GuideMapQueryAllData {
  contract_kline?: string
  contract_group_details?: string
  asset_contract_group?: string
  market_page?: string
  additional_margin?: string
  spot_kline?: string
  asset_withdrawal_address_management?: string
  contract_transactions?: string
  contract_asset_list_margin?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询所有的引导图状态↗](https://yapi.nbttfc365.com/project/77/interface/api/7289)
// **/
// export const getV1GuideMapQueryAllApiRequest: MarkcoinRequest<
//   YapiGetV1GuideMapQueryAllApiRequest,
//   YapiGetV1GuideMapQueryAllApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/guideMap/queryAll",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [查询所有的引导图状态↗](https://yapi.nbttfc365.com/project/44/interface/api/5614) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/guideMap/queryAll`
 * @更新时间 `2023-05-09 18:13:03`
 */
export interface YapiGetV1GuideMapQueryAllApiRequest {
  /**
   * 设备id
   */
  deviceId?: string
  /**
   * 用户id
   */
  uid?: string
}

/**
 * 接口 [查询所有的引导图状态↗](https://yapi.nbttfc365.com/project/44/interface/api/5614) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `GET /v1/guideMap/queryAll`
 * @更新时间 `2023-05-09 18:13:03`
 */
export interface YapiGetV1GuideMapQueryAllApiResponse {
  code?: number
  data?: YapiGetV1GuideMapQueryAllData
  message?: string
}
export interface YapiGetV1GuideMapQueryAllData {
  contract_kline?: string
  contract_group_details?: string
  asset_contract_group?: string
  market_page?: string
  additional_margin?: string
  spot_kline?: string
  asset_withdrawal_address_management?: string
  contract_transactions?: string
  contract_asset_list_margin?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询所有的引导图状态↗](https://yapi.nbttfc365.com/project/44/interface/api/5614)
// **/
// export const getV1GuideMapQueryAllApiRequest: MarkcoinRequest<
//   YapiGetV1GuideMapQueryAllApiRequest,
//   YapiGetV1GuideMapQueryAllApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/guideMap/queryAll",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
