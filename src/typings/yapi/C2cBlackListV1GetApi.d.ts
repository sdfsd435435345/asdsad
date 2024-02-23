/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [黑名单列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4913) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /v1/c2c/blackList`
 * @更新时间 `2023-03-07 14:46:59`
 */
export interface YapiGetV1C2cBlackListApiRequest {}

/**
 * 接口 [黑名单列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4913) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /v1/c2c/blackList`
 * @更新时间 `2023-03-07 14:46:59`
 */
export interface YapiGetV1C2cBlackListApiResponse {
  code?: number
  data?: YapiGetV1C2CBlackData
  message?: string
}
export interface YapiGetV1C2CBlackData {
  total?: number
  pageSize?: number
  list?: YapiGetV1C2CBlackListData[]
  pageNum?: number
}
export interface YapiGetV1C2CBlackListData {
  uid?: number
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 头像
   */
  avatarPath?: string
  /**
   * kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType?: number
  /**
   * 注册时间
   */
  registerTime: number
  /**
   * 订单完成率
   */
  completedOrderRate: number
  /**
   * 是否是商户（1是 2否）
   */
  isMerchant: number
  /**
   * 平均付款时间 单位秒
   */
  avgPayTime: string
  /**
   * 站内平均确认(付款)时间, 单位秒
   */
  avgConfirmTimeInside: string
  /**
   * 站外平均确认（付款）时间 单位秒
   */
  avgConfirmTimeOutside: string
  /**
   * 拉黑时间
   */
  blockTime: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [黑名单列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4913)
// **/
// export const getV1C2cBlackListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cBlackListApiRequest,
//   YapiGetV1C2cBlackListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/blackList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [黑名单列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6614) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /v1/c2c/blackList`
 * @更新时间 `2023-06-08 16:47:07`
 */
export interface YapiGetV1C2cBlackListApiRequest {}

/**
 * 接口 [黑名单列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6614) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /v1/c2c/blackList`
 * @更新时间 `2023-06-08 16:47:07`
 */
export interface YapiGetV1C2cBlackListApiResponse {
  code?: number
  data?: YapiGetV1C2CBlackData
  message?: string
}
export interface YapiGetV1C2CBlackData {
  total?: number
  pageSize?: number
  list?: YapiGetV1C2CBlackListData[]
  pageNum?: number
}
export interface YapiGetV1C2CBlackListData {
  uid?: number
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 头像
   */
  avatarPath?: string
  /**
   * kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType?: number
  /**
   * 注册时间
   */
  registerTime: number
  /**
   * 订单完成率
   */
  completedOrderRate: number
  /**
   * 是否是商户（1是 2否）
   */
  isMerchant: number
  /**
   * 平均付款时间 单位秒
   */
  avgPayTime: string
  /**
   * 站内平均确认(付款)时间, 单位秒
   */
  avgConfirmTimeInside: string
  /**
   * 站外平均确认（付款）时间 单位秒
   */
  avgConfirmTimeOutside: string
  /**
   * 拉黑时间
   */
  blockTime: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [黑名单列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6614)
// **/
// export const getV1C2cBlackListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cBlackListApiRequest,
//   YapiGetV1C2cBlackListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/blackList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
