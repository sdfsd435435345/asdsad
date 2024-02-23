/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [买卖币校验（广告下单）↗](https://yapi.nbttfc365.com/project/73/interface/api/5372) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/checkBeforeCreate`
 * @更新时间 `2023-03-19 16:26:57`
 */
export interface YapiGetV1C2cOrderCheckBeforeCreateApiRequest {
  /**
   * 广告Id
   */
  advertId: string
  /**
   * 买卖方向，BUY买，SELL，卖 ;备注：买卖方向站在用户角度
   */
  side: string
  /**
   * 交易金额；没有默认传0
   */
  amount: string
}

/**
 * 接口 [买卖币校验（广告下单）↗](https://yapi.nbttfc365.com/project/73/interface/api/5372) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/checkBeforeCreate`
 * @更新时间 `2023-03-19 16:26:57`
 */
export interface YapiGetV1C2cOrderCheckBeforeCreateApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2COrderCheckBeforeCreateData
}
export interface YapiGetV1C2COrderCheckBeforeCreateData {
  /**
   * true，通过，false，不通过
   */
  pass: boolean
  /**
   * 未通过code原因code码，见备注表格
   */
  code: number
  /**
   * 未通过原因
   */
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [买卖币校验（广告下单）↗](https://yapi.nbttfc365.com/project/73/interface/api/5372)
// **/
// export const getV1C2cOrderCheckBeforeCreateApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderCheckBeforeCreateApiRequest,
//   YapiGetV1C2cOrderCheckBeforeCreateApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/checkBeforeCreate",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [买卖币校验（广告下单）↗](https://yapi.nbttfc365.com/project/77/interface/api/6529) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/checkBeforeCreate`
 * @更新时间 `2023-06-08 16:47:01`
 */
export interface YapiGetV1C2cOrderCheckBeforeCreateApiRequest {
  /**
   * 广告Id
   */
  advertId: string
  /**
   * 买卖方向，BUY买，SELL，卖 ;备注：买卖方向站在用户角度
   */
  side: string
  /**
   * 交易金额；没有默认传0
   */
  amount: string
}

/**
 * 接口 [买卖币校验（广告下单）↗](https://yapi.nbttfc365.com/project/77/interface/api/6529) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/checkBeforeCreate`
 * @更新时间 `2023-06-08 16:47:01`
 */
export interface YapiGetV1C2cOrderCheckBeforeCreateApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2COrderCheckBeforeCreateData
}
export interface YapiGetV1C2COrderCheckBeforeCreateData {
  /**
   * true，通过，false，不通过
   */
  pass: boolean
  /**
   * 未通过code原因code码，见备注表格
   */
  code: number
  /**
   * 未通过原因
   */
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [买卖币校验（广告下单）↗](https://yapi.nbttfc365.com/project/77/interface/api/6529)
// **/
// export const getV1C2cOrderCheckBeforeCreateApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderCheckBeforeCreateApiRequest,
//   YapiGetV1C2cOrderCheckBeforeCreateApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/checkBeforeCreate",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
