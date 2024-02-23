/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [个人主页(自己\/他人)↗](https://yapi.nbttfc365.com/project/73/interface/api/4940) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /v1/c2c/user/profile`
 * @更新时间 `2023-04-19 20:42:20`
 */
export interface YapiGetV1C2cUserProfileApiRequest {
  /**
   * 2
   */
  uid: string
}

/**
 * 接口 [个人主页(自己\/他人)↗](https://yapi.nbttfc365.com/project/73/interface/api/4940) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /v1/c2c/user/profile`
 * @更新时间 `2023-04-19 20:42:20`
 */
export interface YapiGetV1C2cUserProfileApiResponse {
  code?: number
  data?: YapiGetV1C2CUserProfileData
}
export interface YapiGetV1C2CUserProfileData {
  id?: number
  businessId?: number
  uid?: number
  /**
   * 总订单数
   */
  orderCount?: number
  /**
   * 完成订单数
   */
  completedOrderCount?: number
  /**
   * 完成订单率
   */
  completedOrderRate?: number
  /**
   *  是否是商户（1是 2否）
   */
  isMerchant?: number
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 总交易金额
   */
  totalOrderAmount?: number
  /**
   * 平均付款时间 以下时间单位都是秒
   */
  avgPayTime?: number
  /**
   * 平均放币时间 站内
   */
  avgConfirmTimeInside?: number
  /**
   * 平均放币时间 站外
   */
  avgConfirmTimeOutside?: number
  /**
   * 服务人数
   */
  customerCnt?: number
  /**
   * 注册时间
   */
  registerTime?: null
  /**
   * kyc等级   0或者1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType?: number
  /**
   * 是否关注
   */
  followed?: boolean
  /**
   * 是否拉黑
   */
  blocked?: boolean
  /**
   * 头像
   */
  avatarPath?: null
  /**
   * 注册国籍 字典表编码
   */
  regCountryCd: string
  /**
   * 注册国家名
   */
  regCountryName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [个人主页(自己/他人)↗](https://yapi.nbttfc365.com/project/73/interface/api/4940)
// **/
// export const getV1C2cUserProfileApiRequest: MarkcoinRequest<
//   YapiGetV1C2cUserProfileApiRequest,
//   YapiGetV1C2cUserProfileApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/user/profile",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [个人主页(自己\/他人)↗](https://yapi.nbttfc365.com/project/77/interface/api/6549) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /v1/c2c/user/profile`
 * @更新时间 `2023-06-08 16:47:02`
 */
export interface YapiGetV1C2cUserProfileApiRequest {
  /**
   * 2
   */
  uid: string
}

/**
 * 接口 [个人主页(自己\/他人)↗](https://yapi.nbttfc365.com/project/77/interface/api/6549) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /v1/c2c/user/profile`
 * @更新时间 `2023-06-08 16:47:02`
 */
export interface YapiGetV1C2cUserProfileApiResponse {
  code?: number
  data?: YapiGetV1C2CUserProfileData
}
export interface YapiGetV1C2CUserProfileData {
  id?: number
  businessId?: number
  uid?: number
  /**
   * 总订单数
   */
  orderCount?: number
  /**
   * 完成订单数
   */
  completedOrderCount?: number
  /**
   * 完成订单率
   */
  completedOrderRate?: number
  /**
   *  是否是商户（1是 2否）
   */
  isMerchant?: number
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 总交易金额
   */
  totalOrderAmount?: number
  /**
   * 平均付款时间 以下时间单位都是秒
   */
  avgPayTime?: number
  /**
   * 平均放币时间 站内
   */
  avgConfirmTimeInside?: number
  /**
   * 平均放币时间 站外
   */
  avgConfirmTimeOutside?: number
  /**
   * 服务人数
   */
  customerCnt?: number
  /**
   * 注册时间
   */
  registerTime?: null
  /**
   * kyc等级   0或者1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType?: number
  /**
   * 是否关注
   */
  followed?: boolean
  /**
   * 是否拉黑
   */
  blocked?: boolean
  /**
   * 头像
   */
  avatarPath?: null
  /**
   * 注册国籍 字典表编码
   */
  regCountryCd: string
  /**
   * 注册国家名
   */
  regCountryName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [个人主页(自己/他人)↗](https://yapi.nbttfc365.com/project/77/interface/api/6549)
// **/
// export const getV1C2cUserProfileApiRequest: MarkcoinRequest<
//   YapiGetV1C2cUserProfileApiRequest,
//   YapiGetV1C2cUserProfileApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/user/profile",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
