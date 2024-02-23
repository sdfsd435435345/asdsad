/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [（内部调用）获取当前用户KYC等级规则↗](https://yapi.nbttfc365.com/project/77/interface/api/7119) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `GET /inner/v1/kyc/common/getCurrentRules`
 * @更新时间 `2023-06-08 16:50:52`
 */
export interface YapiGetInnerV1KycCommonGetCurrentRulesApiRequest {
  /**
   * 登录后获取的用户ID
   */
  uid: string
}

/**
 * 接口 [（内部调用）获取当前用户KYC等级规则↗](https://yapi.nbttfc365.com/project/77/interface/api/7119) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `GET /inner/v1/kyc/common/getCurrentRules`
 * @更新时间 `2023-06-08 16:50:52`
 */
export interface YapiGetInnerV1KycCommonGetCurrentRulesApiResponse {
  /**
   * 当前kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType: number
  /**
   * 提现数量 无限额为-1
   */
  cashOutNum: number
  /**
   * 充值数量 无限额为-1
   */
  monkeyPay: number
  /**
   * OTC买入 无限额为-1
   */
  otcBuy: number
  /**
   * OTC卖出 无限额为-1
   */
  otcSell: number
  /**
   * 用户全名 当kycType为2和3时，取这个
   */
  fullName?: string
  /**
   * 企业名称 当kycType为4时，取这个
   */
  companyName?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（内部调用）获取当前用户KYC等级规则↗](https://yapi.nbttfc365.com/project/77/interface/api/7119)
// **/
// export const getInnerV1KycCommonGetCurrentRulesApiRequest: MarkcoinRequest<
//   YapiGetInnerV1KycCommonGetCurrentRulesApiRequest,
//   YapiGetInnerV1KycCommonGetCurrentRulesApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/kyc/common/getCurrentRules",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [（内部调用）获取当前用户KYC等级规则↗](https://yapi.nbttfc365.com/project/44/interface/api/3477) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `GET /inner/v1/kyc/common/getCurrentRules`
 * @更新时间 `2022-11-25 13:44:42`
 */
export interface YapiGetInnerV1KycCommonGetCurrentRulesApiRequest {
  /**
   * 登录后获取的用户ID
   */
  uid: string
}

/**
 * 接口 [（内部调用）获取当前用户KYC等级规则↗](https://yapi.nbttfc365.com/project/44/interface/api/3477) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `GET /inner/v1/kyc/common/getCurrentRules`
 * @更新时间 `2022-11-25 13:44:42`
 */
export interface YapiGetInnerV1KycCommonGetCurrentRulesApiResponse {
  /**
   * 当前kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType: number
  /**
   * 提现数量 无限额为-1
   */
  cashOutNum: number
  /**
   * 充值数量 无限额为-1
   */
  monkeyPay: number
  /**
   * OTC买入 无限额为-1
   */
  otcBuy: number
  /**
   * OTC卖出 无限额为-1
   */
  otcSell: number
  /**
   * 用户全名 当kycType为2和3时，取这个
   */
  fullName?: string
  /**
   * 企业名称 当kycType为4时，取这个
   */
  companyName?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（内部调用）获取当前用户KYC等级规则↗](https://yapi.nbttfc365.com/project/44/interface/api/3477)
// **/
// export const getInnerV1KycCommonGetCurrentRulesApiRequest: MarkcoinRequest<
//   YapiGetInnerV1KycCommonGetCurrentRulesApiRequest,
//   YapiGetInnerV1KycCommonGetCurrentRulesApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/kyc/common/getCurrentRules",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
