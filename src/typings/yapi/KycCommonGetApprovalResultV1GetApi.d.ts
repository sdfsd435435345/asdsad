/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取认证审批结果↗](https://yapi.nbttfc365.com/project/77/interface/api/7144) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `GET /v1/kyc/common/getApprovalResult`
 * @更新时间 `2023-06-08 16:50:53`
 */
export interface YapiGetV1KycCommonGetApprovalResultApiRequest {
  /**
   * 认证信息ID
   */
  kycId: string
  /**
   * 认证类型
   */
  kycType: string
}

/**
 * 接口 [获取认证审批结果↗](https://yapi.nbttfc365.com/project/77/interface/api/7144) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `GET /v1/kyc/common/getApprovalResult`
 * @更新时间 `2023-06-08 16:50:53`
 */
export interface YapiGetV1KycCommonGetApprovalResultApiResponse {
  /**
   * 返回状态码
   */
  code: number
  /**
   * 返回信息说明
   */
  message: string
  data: YapiGetV1KycCommonGetApprovalResultData
}
export interface YapiGetV1KycCommonGetApprovalResultData {
  /**
   * 审批状态 1为待审批 2为已通过 3为驳回 4为取消认证 字典Code：kyc_approval_status_cd
   */
  approvalStatus: number
  /**
   * 若驳回，此处为原因
   */
  rejectText: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取认证审批结果↗](https://yapi.nbttfc365.com/project/77/interface/api/7144)
// **/
// export const getV1KycCommonGetApprovalResultApiRequest: MarkcoinRequest<
//   YapiGetV1KycCommonGetApprovalResultApiRequest,
//   YapiGetV1KycCommonGetApprovalResultApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/kyc/common/getApprovalResult",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取认证审批结果↗](https://yapi.nbttfc365.com/project/44/interface/api/2921) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `GET /v1/kyc/common/getApprovalResult`
 * @更新时间 `2022-12-22 16:19:07`
 */
export interface YapiGetV1KycCommonGetApprovalResultApiRequest {
  /**
   * 认证信息ID
   */
  kycId: string
  /**
   * 认证类型
   */
  kycType: string
}

/**
 * 接口 [获取认证审批结果↗](https://yapi.nbttfc365.com/project/44/interface/api/2921) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `GET /v1/kyc/common/getApprovalResult`
 * @更新时间 `2022-12-22 16:19:07`
 */
export interface YapiGetV1KycCommonGetApprovalResultApiResponse {
  /**
   * 返回状态码
   */
  code: number
  /**
   * 返回信息说明
   */
  message: string
  data: YapiGetV1KycCommonGetApprovalResultData
}
export interface YapiGetV1KycCommonGetApprovalResultData {
  /**
   * 审批状态 1为待审批 2为已通过 3为驳回 4为取消认证 字典Code：kyc_approval_status_cd
   */
  approvalStatus: number
  /**
   * 若驳回，此处为原因
   */
  rejectText: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取认证审批结果↗](https://yapi.nbttfc365.com/project/44/interface/api/2921)
// **/
// export const getV1KycCommonGetApprovalResultApiRequest: MarkcoinRequest<
//   YapiGetV1KycCommonGetApprovalResultApiRequest,
//   YapiGetV1KycCommonGetApprovalResultApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/kyc/common/getApprovalResult",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
