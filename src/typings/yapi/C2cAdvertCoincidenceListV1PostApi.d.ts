/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [广告重合度列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4994) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/coincidenceList`
 * @更新时间 `2023-08-18 17:35:09`
 */
export interface YapiPostV1C2cAdvertCoincidenceListApiRequest {
  /**
   * 单笔限数-最小值
   */
  minAmount: number
  /**
   * 单笔限数-最大值
   */
  maxAmount: number
  /**
   * 币种id
   */
  coinId: string
  /**
   * 0.3，0.8这种(废弃，兼容老接口)
   */
  coincidenceValue?: number
  /**
   * 广告类型INSIDE、OUTSIDE(废弃，兼容老接口)
   */
  dealTypeCd?: string
  /**
   * 区域id
   */
  areaId: string
  /**
   * 来源(本站：local, okx，币安:binance)
   */
  source: string[]
  /**
   * 重合度（高:high,中: middle,低:low）
   */
  coincidenceDegree: string
}

/**
 * 接口 [广告重合度列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4994) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/coincidenceList`
 * @更新时间 `2023-08-18 17:35:09`
 */
export interface YapiPostV1C2cAdvertCoincidenceListApiResponse {
  code?: number
  data?: YapiPostV1C2CAdvertCoincidenceData
  message?: string
}
export interface YapiPostV1C2CAdvertCoincidenceData {
  /**
   * 卖
   */
  ask?: YapiPostV1C2CAdvertCoincidenceListAskData[]
  /**
   * 买
   */
  bid?: YapiPostV1C2CAdvertCoincidenceListBidData[]
}
export interface YapiPostV1C2CAdvertCoincidenceListAskData {
  /**
   * 数量
   */
  amount?: number
  /**
   * 价格
   */
  price?: number
}
export interface YapiPostV1C2CAdvertCoincidenceListBidData {
  /**
   * 数量
   */
  amount?: number
  /**
   * 价格
   */
  price?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告重合度列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4994)
// **/
// export const postV1C2cAdvertCoincidenceListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertCoincidenceListApiRequest,
//   YapiPostV1C2cAdvertCoincidenceListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/coincidenceList",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [广告重合度列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6424) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `POST /v1/c2c/advert/coincidenceList`
 * @更新时间 `2023-06-08 16:46:54`
 */
export interface YapiPostV1C2cAdvertCoincidenceListApiRequest {
  /**
   * 单笔限数-最小值
   */
  minAmount: number
  /**
   * 单笔限数-最大值
   */
  maxAmount: number
  /**
   * 币种id
   */
  coinId: string
  /**
   * 重合度值（0.3、0.8这种）
   */
  coincidenceValue: number
  /**
   * 广告类型INSIDE、OUTSIDE
   */
  dealTypeCd: string
  /**
   * 区域id
   */
  areaId: string
}

/**
 * 接口 [广告重合度列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6424) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `POST /v1/c2c/advert/coincidenceList`
 * @更新时间 `2023-06-08 16:46:54`
 */
export interface YapiPostV1C2cAdvertCoincidenceListApiResponse {
  code?: number
  data?: YapiPostV1C2CAdvertCoincidenceData
  message?: string
}
export interface YapiPostV1C2CAdvertCoincidenceData {
  /**
   * 卖
   */
  ask?: YapiPostV1C2CAdvertCoincidenceListAskData[]
  /**
   * 买
   */
  bid?: YapiPostV1C2CAdvertCoincidenceListBidData[]
}
export interface YapiPostV1C2CAdvertCoincidenceListAskData {
  /**
   * 数量
   */
  amount?: number
  /**
   * 价格
   */
  price?: number
}
export interface YapiPostV1C2CAdvertCoincidenceListBidData {
  /**
   * 数量
   */
  amount?: number
  /**
   * 价格
   */
  price?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告重合度列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6424)
// **/
// export const postV1C2cAdvertCoincidenceListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertCoincidenceListApiRequest,
//   YapiPostV1C2cAdvertCoincidenceListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/coincidenceList",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
