/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [发布过广告的币种列表↗](https://yapi.nbttfc365.com/project/73/interface/api/5509) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `POST /v1/c2c/coin/advert/list`
 * @更新时间 `2023-04-13 11:07:55`
 */
export interface YapiPostV1C2cCoinAdvertListApiRequest {
  /**
   * 区域id
   */
  areaIds?: string[]
  /**
   * 搜索关键词
   */
  searchKey?: string
  /**
   * 查询的uid(不填就获取自己的)
   */
  uid?: string
  /**
   * 是否是上架中的（true返回上架中的、false返回下架中的、不传该参数返回全部）
   */
  isActivityOnSheves?: boolean
}

/**
 * 接口 [发布过广告的币种列表↗](https://yapi.nbttfc365.com/project/73/interface/api/5509) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `POST /v1/c2c/coin/advert/list`
 * @更新时间 `2023-04-13 11:07:55`
 */
export interface YapiPostV1C2cCoinAdvertListApiResponse {
  code?: number
  data?: YapiPostV1C2CCoinAdvertListData[]
  message?: string
}
export interface YapiPostV1C2CCoinAdvertListData {
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
// * [发布过广告的币种列表↗](https://yapi.nbttfc365.com/project/73/interface/api/5509)
// **/
// export const postV1C2cCoinAdvertListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cCoinAdvertListApiRequest,
//   YapiPostV1C2cCoinAdvertListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/coin/advert/list",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [发布过广告的币种列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6379) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `POST /v1/c2c/coin/advert/list`
 * @更新时间 `2023-06-08 16:46:49`
 */
export interface YapiPostV1C2cCoinAdvertListApiRequest {
  /**
   * 区域id
   */
  areaIds?: string[]
  /**
   * 搜索关键词
   */
  searchKey?: string
  /**
   * 查询的uid(不填就获取自己的)
   */
  uid?: string
  /**
   * 是否是上架中的（true返回上架中的、false返回下架中的、不传该参数返回全部）
   */
  isActivityOnSheves?: boolean
}

/**
 * 接口 [发布过广告的币种列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6379) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `POST /v1/c2c/coin/advert/list`
 * @更新时间 `2023-06-08 16:46:49`
 */
export interface YapiPostV1C2cCoinAdvertListApiResponse {
  code?: number
  data?: YapiPostV1C2CCoinAdvertListData[]
  message?: string
}
export interface YapiPostV1C2CCoinAdvertListData {
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
// * [发布过广告的币种列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6379)
// **/
// export const postV1C2cCoinAdvertListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cCoinAdvertListApiRequest,
//   YapiPostV1C2cCoinAdvertListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/coin/advert/list",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
