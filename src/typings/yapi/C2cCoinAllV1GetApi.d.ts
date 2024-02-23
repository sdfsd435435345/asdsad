/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取所有币种信息↗](https://yapi.nbttfc365.com/project/73/interface/api/5192) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/coin/all`
 * @更新时间 `2023-03-17 09:47:29`
 */
export interface YapiGetV1C2cCoinAllApiRequest {}

/**
 * 接口 [获取所有币种信息↗](https://yapi.nbttfc365.com/project/73/interface/api/5192) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/coin/all`
 * @更新时间 `2023-03-17 09:47:29`
 */
export interface YapiGetV1C2cCoinAllApiResponse {
  code?: number
  data?: YapiGetV1C2CCoinAllListData[]
  message?: string
}
export interface YapiGetV1C2CCoinAllListData {
  /**
   * symbol
   */
  symbol?: string
  /**
   * 余额
   */
  balance?: string
  /**
   * appLogo
   */
  appLogo?: string
  /**
   * 最小交易数量
   */
  minTransQuantity?: string
  webLogo?: string
  /**
   * 最大交易数量
   */
  maxTransQuantity?: string
  /**
   * 币种名字
   */
  coinFullName?: string
  /**
   * 交易状态（ENABLE、DISABLE）
   */
  statusCd?: string
  /**
   * 币种id
   */
  id?: string
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 是否默认选中
   */
  defaultShow?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取所有币种信息↗](https://yapi.nbttfc365.com/project/73/interface/api/5192)
// **/
// export const getV1C2cCoinAllApiRequest: MarkcoinRequest<
//   YapiGetV1C2cCoinAllApiRequest,
//   YapiGetV1C2cCoinAllApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/coin/all",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取所有币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6409) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/coin/all`
 * @更新时间 `2023-06-08 16:46:52`
 */
export interface YapiGetV1C2cCoinAllApiRequest {}

/**
 * 接口 [获取所有币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6409) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/coin/all`
 * @更新时间 `2023-06-08 16:46:52`
 */
export interface YapiGetV1C2cCoinAllApiResponse {
  code?: number
  data?: YapiGetV1C2CCoinAllListData[]
  message?: string
}
export interface YapiGetV1C2CCoinAllListData {
  /**
   * symbol
   */
  symbol?: string
  /**
   * 余额
   */
  balance?: string
  /**
   * appLogo
   */
  appLogo?: string
  /**
   * 最小交易数量
   */
  minTransQuantity?: string
  webLogo?: string
  /**
   * 最大交易数量
   */
  maxTransQuantity?: string
  /**
   * 币种名字
   */
  coinFullName?: string
  /**
   * 交易状态（ENABLE、DISABLE）
   */
  statusCd?: string
  /**
   * 币种id
   */
  id?: string
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 是否默认选中
   */
  defaultShow?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取所有币种信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6409)
// **/
// export const getV1C2cCoinAllApiRequest: MarkcoinRequest<
//   YapiGetV1C2cCoinAllApiRequest,
//   YapiGetV1C2cCoinAllApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/coin/all",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
