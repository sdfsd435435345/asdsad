/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询用户资产是否平衡↗](https://yapi.nbttfc365.com/project/77/interface/api/8484) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /inner/v1/asset/balance/{businessId}/{uid}`
 * @更新时间 `2023-06-08 16:52:44`
 */
export interface YapiGetInnerV1AssetBalanceBusinessIdUidApiRequest {
  /**
   * 商户id
   */
  businessId: string
  /**
   * 用户uid
   */
  uid: string
}

/**
 * 接口 [查询用户资产是否平衡↗](https://yapi.nbttfc365.com/project/77/interface/api/8484) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /inner/v1/asset/balance/{businessId}/{uid}`
 * @更新时间 `2023-06-08 16:52:44`
 */
export interface YapiGetInnerV1AssetBalanceBusinessIdUidApiResponse {
  /**
   * 1:平衡，2:不平衡
   */
  balance: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询用户资产是否平衡↗](https://yapi.nbttfc365.com/project/77/interface/api/8484)
// **/
// export const getInnerV1AssetBalanceBusinessIdUidApiRequest: MarkcoinRequest<
//   YapiGetInnerV1AssetBalanceBusinessIdUidApiRequest,
//   YapiGetInnerV1AssetBalanceBusinessIdUidApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/asset/balance/{businessId}/{uid}",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [查询用户资产是否平衡↗](https://yapi.nbttfc365.com/project/44/interface/api/5879) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /inner/v1/asset/balance/{businessId}/{uid}`
 * @更新时间 `2023-05-26 11:59:24`
 */
export interface YapiGetInnerV1AssetBalanceBusinessIdUidApiRequest {
  /**
   * 商户id
   */
  businessId: string
  /**
   * 用户uid
   */
  uid: string
}

/**
 * 接口 [查询用户资产是否平衡↗](https://yapi.nbttfc365.com/project/44/interface/api/5879) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /inner/v1/asset/balance/{businessId}/{uid}`
 * @更新时间 `2023-05-26 11:59:24`
 */
export interface YapiGetInnerV1AssetBalanceBusinessIdUidApiResponse {
  /**
   * 1:平衡，2:不平衡
   */
  balance: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询用户资产是否平衡↗](https://yapi.nbttfc365.com/project/44/interface/api/5879)
// **/
// export const getInnerV1AssetBalanceBusinessIdUidApiRequest: MarkcoinRequest<
//   YapiGetInnerV1AssetBalanceBusinessIdUidApiRequest,
//   YapiGetInnerV1AssetBalanceBusinessIdUidApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/asset/balance/{businessId}/{uid}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
