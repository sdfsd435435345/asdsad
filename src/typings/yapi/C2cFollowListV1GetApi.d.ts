/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [关注列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4603) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /v1/c2c/follow/list`
 * @更新时间 `2023-03-07 14:48:18`
 */
export interface YapiGetV1C2cFollowListApiRequest {
  /**
   * 页
   */
  pageNum?: string
  /**
   * 条数
   */
  pageSize?: string
}

/**
 * 接口 [关注列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4603) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /v1/c2c/follow/list`
 * @更新时间 `2023-03-07 14:48:18`
 */
export interface YapiGetV1C2cFollowListApiResponse {
  code?: number
  data?: YapiGetV1C2CFollowData
}
export interface YapiGetV1C2CFollowData {
  pageNum?: number
  pageSize?: number
  total?: number
  list?: YapiGetV1C2CFollowListData[]
}
export interface YapiGetV1C2CFollowListData {
  /**
   * kyc验证等级  1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType: null
  /**
   * 头像
   */
  avatarPath: null
  /**
   * 昵称
   */
  nickName: null
  uid: number
  /**
   * 注册时间
   */
  registerTime: string
  /**
   * 成单率(订单完成后更新)
   */
  completedOrderRate: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [关注列表↗](https://yapi.nbttfc365.com/project/73/interface/api/4603)
// **/
// export const getV1C2cFollowListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cFollowListApiRequest,
//   YapiGetV1C2cFollowListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/follow/list",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [关注列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6554) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /v1/c2c/follow/list`
 * @更新时间 `2023-06-08 16:47:02`
 */
export interface YapiGetV1C2cFollowListApiRequest {
  /**
   * 页
   */
  pageNum?: string
  /**
   * 条数
   */
  pageSize?: string
}

/**
 * 接口 [关注列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6554) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /v1/c2c/follow/list`
 * @更新时间 `2023-06-08 16:47:02`
 */
export interface YapiGetV1C2cFollowListApiResponse {
  code?: number
  data?: YapiGetV1C2CFollowData
}
export interface YapiGetV1C2CFollowData {
  pageNum?: number
  pageSize?: number
  total?: number
  list?: YapiGetV1C2CFollowListData[]
}
export interface YapiGetV1C2CFollowListData {
  /**
   * kyc验证等级  1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType: null
  /**
   * 头像
   */
  avatarPath: null
  /**
   * 昵称
   */
  nickName: null
  uid: number
  /**
   * 注册时间
   */
  registerTime: string
  /**
   * 成单率(订单完成后更新)
   */
  completedOrderRate: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [关注列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6554)
// **/
// export const getV1C2cFollowListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cFollowListApiRequest,
//   YapiGetV1C2cFollowListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/follow/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
