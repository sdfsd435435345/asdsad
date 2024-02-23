/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [广告主链是否都禁止充币↗](https://yapi.nbttfc365.com/project/73/interface/api/5390) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/coinForbiddenCheck`
 * @更新时间 `2023-04-17 10:50:19`
 */
export interface YapiGetV1C2cOrderCoinForbiddenCheckApiRequest {
  /**
   * 广告ID
   */
  advertId: string
}

/**
 * 接口 [广告主链是否都禁止充币↗](https://yapi.nbttfc365.com/project/73/interface/api/5390) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/coinForbiddenCheck`
 * @更新时间 `2023-04-17 10:50:19`
 */
export interface YapiGetV1C2cOrderCoinForbiddenCheckApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 接口描述
   */
  message: string
  data: YapiGetV1C2COrderCoinForbiddenCheckData
}
export interface YapiGetV1C2COrderCoinForbiddenCheckData {
  /**
   * true，通过,false ，不通过
   */
  pass: boolean
  /**
   * 禁止提币的链数据
   */
  chainData: YapiGetV1C2COrderCoinForbiddenCheckListChainData[]
}
export interface YapiGetV1C2COrderCoinForbiddenCheckListChainData {
  /**
   * 币种名称
   */
  symbol: string
  /**
   * 提现主链类型
   */
  chainType: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告主链是否都禁止充币↗](https://yapi.nbttfc365.com/project/73/interface/api/5390)
// **/
// export const getV1C2cOrderCoinForbiddenCheckApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderCoinForbiddenCheckApiRequest,
//   YapiGetV1C2cOrderCoinForbiddenCheckApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/coinForbiddenCheck",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [广告主链是否都禁止充币↗](https://yapi.nbttfc365.com/project/77/interface/api/6534) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/coinForbiddenCheck`
 * @更新时间 `2023-06-08 16:47:01`
 */
export interface YapiGetV1C2cOrderCoinForbiddenCheckApiRequest {
  /**
   * 广告ID
   */
  advertId: string
}

/**
 * 接口 [广告主链是否都禁止充币↗](https://yapi.nbttfc365.com/project/77/interface/api/6534) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/coinForbiddenCheck`
 * @更新时间 `2023-06-08 16:47:01`
 */
export interface YapiGetV1C2cOrderCoinForbiddenCheckApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 接口描述
   */
  message: string
  data: YapiGetV1C2COrderCoinForbiddenCheckData
}
export interface YapiGetV1C2COrderCoinForbiddenCheckData {
  /**
   * true，通过,false ，不通过
   */
  pass: boolean
  /**
   * 禁止提币的链数据
   */
  chainData: YapiGetV1C2COrderCoinForbiddenCheckListChainData[]
}
export interface YapiGetV1C2COrderCoinForbiddenCheckListChainData {
  /**
   * 币种名称
   */
  symbol: string
  /**
   * 提现主链类型
   */
  chainType: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告主链是否都禁止充币↗](https://yapi.nbttfc365.com/project/77/interface/api/6534)
// **/
// export const getV1C2cOrderCoinForbiddenCheckApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderCoinForbiddenCheckApiRequest,
//   YapiGetV1C2cOrderCoinForbiddenCheckApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/coinForbiddenCheck",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
