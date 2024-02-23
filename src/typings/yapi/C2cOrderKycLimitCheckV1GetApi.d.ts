/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [kyc额度校验↗](https://yapi.nbttfc365.com/project/73/interface/api/5463) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/kycLimitCheck`
 * @更新时间 `2023-03-16 15:39:47`
 */
export interface YapiGetV1C2cOrderKycLimitCheckApiRequest {
  /**
   * 买卖方向，BUY，买，SELL，卖；备注：买卖方向站在用户角度
   */
  side: string
  /**
   * 交易数量；没有默认传0
   */
  amount: string
}

/**
 * 接口 [kyc额度校验↗](https://yapi.nbttfc365.com/project/73/interface/api/5463) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `GET /v1/c2c/order/kycLimitCheck`
 * @更新时间 `2023-03-16 15:39:47`
 */
export interface YapiGetV1C2cOrderKycLimitCheckApiResponse {
  /**
   * 200成交，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2COrderKycLimitCheckData
}
export interface YapiGetV1C2COrderKycLimitCheckData {
  /**
   * true，不限额，false，限额
   */
  pass: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [kyc额度校验↗](https://yapi.nbttfc365.com/project/73/interface/api/5463)
// **/
// export const getV1C2cOrderKycLimitCheckApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderKycLimitCheckApiRequest,
//   YapiGetV1C2cOrderKycLimitCheckApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/kycLimitCheck",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [kyc额度校验↗](https://yapi.nbttfc365.com/project/77/interface/api/6539) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/kycLimitCheck`
 * @更新时间 `2023-06-08 16:47:01`
 */
export interface YapiGetV1C2cOrderKycLimitCheckApiRequest {
  /**
   * 买卖方向，BUY，买，SELL，卖；备注：买卖方向站在用户角度
   */
  side: string
  /**
   * 交易数量；没有默认传0
   */
  amount: string
}

/**
 * 接口 [kyc额度校验↗](https://yapi.nbttfc365.com/project/77/interface/api/6539) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `GET /v1/c2c/order/kycLimitCheck`
 * @更新时间 `2023-06-08 16:47:01`
 */
export interface YapiGetV1C2cOrderKycLimitCheckApiResponse {
  /**
   * 200成交，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2COrderKycLimitCheckData
}
export interface YapiGetV1C2COrderKycLimitCheckData {
  /**
   * true，不限额，false，限额
   */
  pass: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [kyc额度校验↗](https://yapi.nbttfc365.com/project/77/interface/api/6539)
// **/
// export const getV1C2cOrderKycLimitCheckApiRequest: MarkcoinRequest<
//   YapiGetV1C2cOrderKycLimitCheckApiRequest,
//   YapiGetV1C2cOrderKycLimitCheckApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/order/kycLimitCheck",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
