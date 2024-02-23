/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取可交易的区域下的币种列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4575) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `POST /v1/c2c/coin/list`
 * @更新时间 `2023-11-03 08:36:42`
 */
export interface YapiPostV1C2cCoinListApiRequest {
  /**
   * 区域id集合
   */
  areaIds?: string[]
  /**
   * 搜索关键字（建议客户端自己做搜索）
   */
  searchKey?: string
  /**
   * 是否是快捷交易
   */
  isQuickTrade?: boolean
  /**
   * 方向，BUY购买，SELL出售
   */
  side?: string
  /**
   * 是否关联OTC
   */
  isSupportOtc?: boolean
}

/**
 * 接口 [获取可交易的区域下的币种列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4575) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `POST /v1/c2c/coin/list`
 * @更新时间 `2023-11-03 08:36:42`
 */
export interface YapiPostV1C2cCoinListApiResponse {
  code?: number
  data?: YapiPostV1C2CCoinListData[]
}
export interface YapiPostV1C2CCoinListData {
  /**
   * 币对
   */
  symbol?: string
  /**
   * 余额
   */
  balance?: string
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
   * 币种名称
   */
  coinFullName?: string
  /**
   * 交易状态（ENABLE、DISABLE）
   */
  statusCd?: string
  id?: number
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 币种价格精度
   */
  precision?: number
  /**
   * 币种数量精度
   */
  trade_precision?: number
  /**
   * 是否默认选中
   */
  defaultShow?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取可交易的区域下的币种列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4575)
// **/
// export const postV1C2cCoinListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cCoinListApiRequest,
//   YapiPostV1C2cCoinListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/coin/list",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [获取可交易的区域下的币种列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6399) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `POST /v1/c2c/coin/list`
 * @更新时间 `2023-06-08 16:46:52`
 */
export interface YapiPostV1C2cCoinListApiRequest {
  /**
   * 区域id集合
   */
  areaIds?: string[]
  /**
   * 搜索关键字（建议客户端自己做搜索）
   */
  searchKey?: string
  /**
   * 是否是快捷交易
   */
  isQuickTrade?: boolean
  /**
   * 方向，BUY购买，SELL出售
   */
  side?: string
}

/**
 * 接口 [获取可交易的区域下的币种列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6399) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `POST /v1/c2c/coin/list`
 * @更新时间 `2023-06-08 16:46:52`
 */
export interface YapiPostV1C2cCoinListApiResponse {
  code?: number
  data?: YapiPostV1C2CCoinListData[]
}
export interface YapiPostV1C2CCoinListData {
  /**
   * 币对
   */
  symbol?: string
  /**
   * 余额
   */
  balance?: string
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
   * 币种名称
   */
  coinFullName?: string
  /**
   * 交易状态（ENABLE、DISABLE）
   */
  statusCd?: string
  id?: number
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 币种价格精度
   */
  precision?: number
  /**
   * 币种数量精度
   */
  trade_precision?: number
  /**
   * 是否默认选中
   */
  defaultShow?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取可交易的区域下的币种列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6399)
// **/
// export const postV1C2cCoinListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cCoinListApiRequest,
//   YapiPostV1C2cCoinListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/coin/list",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
