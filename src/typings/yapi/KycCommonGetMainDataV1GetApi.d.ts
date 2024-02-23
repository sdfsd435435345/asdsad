/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取认证主页数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7124) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `GET /v1/kyc/common/getMainData`
 * @更新时间 `2023-06-08 16:50:52`
 */
export interface YapiGetV1KycCommonGetMainDataApiRequest {}

/**
 * 接口 [获取认证主页数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7124) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `GET /v1/kyc/common/getMainData`
 * @更新时间 `2023-06-08 16:50:52`
 */
export interface YapiGetV1KycCommonGetMainDataApiResponse {
  /**
   * 返回状态码
   */
  code: number
  /**
   * 返回信息说明
   */
  message: string
  data: YapiGetV1KycCommonGetMainData
}
export interface YapiGetV1KycCommonGetMainData {
  /**
   * 个人标准认证国家编码，若还没有进行标准认证，则取个人设置的国家编码
   */
  basicAuthCountry: number
  countryDetail: YapiGetV1KycCommonGetMainCountryDetailData
  /**
   * 当前kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType: number
  /**
   * 当前所有审批状态（3个认证等级只要提交过的全部返回最新的一条数据）
   */
  auditMaps?: YapiGetV1KycCommonGetMainListAuditMapsData[]
  /**
   * 各个kyc认证的功能与限制
   */
  kycTypeRules: YapiGetV1KycCommonGetMainListKycTypeRulesData[]
}
/**
 * 国家信息详情
 */
export interface YapiGetV1KycCommonGetMainCountryDetailData {
  /**
   * 代码英文值
   */
  enCode: string
  /**
   * 国家全称
   */
  fullName: string
  /**
   * 国家简称
   */
  shortName: string
  /**
   * 主键ID
   */
  id: string
  /**
   * 是否启用  1：启用  2：未启用
   */
  enableInd: string
}
export interface YapiGetV1KycCommonGetMainListAuditMapsData {
  /**
   * 审批的kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType?: number
  /**
   * 认证信息ID
   */
  kycId?: number
  /**
   * 审批状态 1为待审批 2为已通过 3为驳回 4为取消认证
   */
  auditStatus?: number
  /**
   * 审批是否已读 1为已读 2为未读
   */
  isReadResult?: number
}
export interface YapiGetV1KycCommonGetMainListKycTypeRulesData {
  /**
   * kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType?: number
  /**
   * 提现数量 无限额为-1
   */
  cashOutNum?: number
  /**
   * 充值数量 无限额为-1
   */
  monkeyPay?: number
  /**
   * OTC买入 无限额为-1
   */
  otcBuy?: number
  /**
   * OTC卖出 无限额为-1
   */
  otcSell?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取认证主页数据↗](https://yapi.nbttfc365.com/project/77/interface/api/7124)
// **/
// export const getV1KycCommonGetMainDataApiRequest: MarkcoinRequest<
//   YapiGetV1KycCommonGetMainDataApiRequest,
//   YapiGetV1KycCommonGetMainDataApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/kyc/common/getMainData",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取认证主页数据↗](https://yapi.nbttfc365.com/project/44/interface/api/2909) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `GET /v1/kyc/common/getMainData`
 * @更新时间 `2022-11-12 11:28:45`
 */
export interface YapiGetV1KycCommonGetMainDataApiRequest {}

/**
 * 接口 [获取认证主页数据↗](https://yapi.nbttfc365.com/project/44/interface/api/2909) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `GET /v1/kyc/common/getMainData`
 * @更新时间 `2022-11-12 11:28:45`
 */
export interface YapiGetV1KycCommonGetMainDataApiResponse {
  /**
   * 返回状态码
   */
  code: number
  /**
   * 返回信息说明
   */
  message: string
  data: YapiGetV1KycCommonGetMainData
}
export interface YapiGetV1KycCommonGetMainData {
  /**
   * 个人标准认证国家编码，若还没有进行标准认证，则取个人设置的国家编码
   */
  basicAuthCountry: number
  countryDetail: YapiGetV1KycCommonGetMainCountryDetailData
  /**
   * 当前kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType: number
  /**
   * 当前所有审批状态（3个认证等级只要提交过的全部返回最新的一条数据）
   */
  auditMaps?: YapiGetV1KycCommonGetMainListAuditMapsData[]
  /**
   * 各个kyc认证的功能与限制
   */
  kycTypeRules: YapiGetV1KycCommonGetMainListKycTypeRulesData[]
}
/**
 * 国家信息详情
 */
export interface YapiGetV1KycCommonGetMainCountryDetailData {
  /**
   * 代码英文值
   */
  enCode: string
  /**
   * 国家全称
   */
  fullName: string
  /**
   * 国家简称
   */
  shortName: string
  /**
   * 主键ID
   */
  id: string
  /**
   * 是否启用  1：启用  2：未启用
   */
  enableInd: string
}
export interface YapiGetV1KycCommonGetMainListAuditMapsData {
  /**
   * 审批的kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType?: number
  /**
   * 认证信息ID
   */
  kycId?: number
  /**
   * 审批状态 1为待审批 2为已通过 3为驳回 4为取消认证
   */
  auditStatus?: number
  /**
   * 审批是否已读 1为已读 2为未读
   */
  isReadResult?: number
}
export interface YapiGetV1KycCommonGetMainListKycTypeRulesData {
  /**
   * kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType?: number
  /**
   * 提现数量 无限额为-1
   */
  cashOutNum?: number
  /**
   * 充值数量 无限额为-1
   */
  monkeyPay?: number
  /**
   * OTC买入 无限额为-1
   */
  otcBuy?: number
  /**
   * OTC卖出 无限额为-1
   */
  otcSell?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取认证主页数据↗](https://yapi.nbttfc365.com/project/44/interface/api/2909)
// **/
// export const getV1KycCommonGetMainDataApiRequest: MarkcoinRequest<
//   YapiGetV1KycCommonGetMainDataApiRequest,
//   YapiGetV1KycCommonGetMainDataApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/kyc/common/getMainData",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
