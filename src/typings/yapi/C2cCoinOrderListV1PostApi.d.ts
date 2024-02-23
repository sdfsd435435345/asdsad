/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [交易过的币种列表↗](https://yapi.nbttfc365.com/project/73/interface/api/5519) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `POST /v1/c2c/coin/order/list`
 * @更新时间 `2023-04-13 11:20:36`
 */
export interface YapiPostV1C2cCoinOrderListApiRequest {
  /**
   * 区域
   */
  areaIds?: string[]
  /**
   * 搜索关键词
   */
  searchKey?: string
  /**
   * （1或者不传）所有的，2未完成，3已完成，4已取消
   */
  status: number
}

/**
 * 接口 [交易过的币种列表↗](https://yapi.nbttfc365.com/project/73/interface/api/5519) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `POST /v1/c2c/coin/order/list`
 * @更新时间 `2023-04-13 11:20:36`
 */
export interface YapiPostV1C2cCoinOrderListApiResponse {
  code?: number
  data?: YapiPostV1C2CCoinOrderListData[]
  message?: string
}
export interface YapiPostV1C2CCoinOrderListData {
  symbol?: string
  appLogo?: string
  precision?: number
  maxTransQuantity?: string
  statusCd?: string
  defaultShow?: boolean
  trade_precision?: number
  balance?: string
  minTransQuantity?: string
  webLogo?: string
  coinFullName?: string
  id?: string
  coinName?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [交易过的币种列表↗](https://yapi.nbttfc365.com/project/73/interface/api/5519)
// **/
// export const postV1C2cCoinOrderListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cCoinOrderListApiRequest,
//   YapiPostV1C2cCoinOrderListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/coin/order/list",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [交易过的币种列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6374) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `POST /v1/c2c/coin/order/list`
 * @更新时间 `2023-06-08 16:46:49`
 */
export interface YapiPostV1C2cCoinOrderListApiRequest {
  /**
   * 区域
   */
  areaIds?: string[]
  /**
   * 搜索关键词
   */
  searchKey?: string
  /**
   * （1或者不传）所有的，2未完成，3已完成，4已取消
   */
  status: number
}

/**
 * 接口 [交易过的币种列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6374) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `POST /v1/c2c/coin/order/list`
 * @更新时间 `2023-06-08 16:46:49`
 */
export interface YapiPostV1C2cCoinOrderListApiResponse {
  code?: number
  data?: YapiPostV1C2CCoinOrderListData[]
  message?: string
}
export interface YapiPostV1C2CCoinOrderListData {
  symbol?: string
  appLogo?: string
  precision?: number
  maxTransQuantity?: string
  statusCd?: string
  defaultShow?: boolean
  trade_precision?: number
  balance?: string
  minTransQuantity?: string
  webLogo?: string
  coinFullName?: string
  id?: string
  coinName?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [交易过的币种列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6374)
// **/
// export const postV1C2cCoinOrderListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cCoinOrderListApiRequest,
//   YapiPostV1C2cCoinOrderListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/coin/order/list",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
