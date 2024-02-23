/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [提交个人标准认证审批↗](https://yapi.nbttfc365.com/project/77/interface/api/7129) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `POST /v1/kyc/auth/basic/submit`
 * @更新时间 `2023-06-08 16:50:52`
 */
export interface YapiPostV1KycAuthBasicSubmitApiRequest {
  /**
   * 国家 字典Code：country_cd
   */
  country: string
  /**
   * 名字
   */
  firstName: string
  /**
   * 中间名（可空）
   */
  middleName?: string
  /**
   * 姓氏
   */
  lastName: string
  /**
   * 出生日期
   */
  birthDay: string
  /**
   * 证件有效期开始
   */
  certValidDateStart: string
  /**
   * 证件有效期结束(当certIsPermanent为1时 可以为空）
   */
  certValidDateEnd?: string
  /**
   * 证件是否永久有效 1是 2否 字典Code：cert_is_permanent_ind
   */
  certIsPermanent: number
  /**
   * 证件类型 1为身份证 2为驾驶证 3为护照 字典Code：cert_type_cd
   */
  certType: number
  /**
   * 证件号
   */
  certNumber: string
  /**
   * 附件信息
   */
  attachFiles: YapiPostV1KycAuthBasicSubmitApiRequestListAttachFiles[]
}
export interface YapiPostV1KycAuthBasicSubmitApiRequestListAttachFiles {
  /**
   * 所属认证等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证 字典Code：kyc_type_cd
   */
  kycType: number
  /**
   * 附件类型 一共14种   详细查看 数据模型 - 字典Code：kyc_attach_type_cd
   */
  kycAttachType: number
  /**
   * 附件名称
   */
  fileName: string
  /**
   * 附件地址URL
   */
  filePath: string
  /**
   * 排序字段 从1开始 数字越小排序越前
   */
  sort: number
}

/**
 * 接口 [提交个人标准认证审批↗](https://yapi.nbttfc365.com/project/77/interface/api/7129) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `POST /v1/kyc/auth/basic/submit`
 * @更新时间 `2023-06-08 16:50:52`
 */
export interface YapiPostV1KycAuthBasicSubmitApiResponse {
  /**
   * 调用状态 200为成功
   */
  code: number
  /**
   * 返回信息
   */
  msg: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [提交个人标准认证审批↗](https://yapi.nbttfc365.com/project/77/interface/api/7129)
// **/
// export const postV1KycAuthBasicSubmitApiRequest: MarkcoinRequest<
//   YapiPostV1KycAuthBasicSubmitApiRequest,
//   YapiPostV1KycAuthBasicSubmitApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/kyc/auth/basic/submit",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [提交个人标准认证审批↗](https://yapi.nbttfc365.com/project/44/interface/api/2912) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `POST /v1/kyc/auth/basic/submit`
 * @更新时间 `2022-11-12 11:28:56`
 */
export interface YapiPostV1KycAuthBasicSubmitApiRequest {
  /**
   * 国家 字典Code：country_cd
   */
  country: string
  /**
   * 名字
   */
  firstName: string
  /**
   * 中间名（可空）
   */
  middleName?: string
  /**
   * 姓氏
   */
  lastName: string
  /**
   * 出生日期
   */
  birthDay: string
  /**
   * 证件有效期开始
   */
  certValidDateStart: string
  /**
   * 证件有效期结束(当certIsPermanent为1时 可以为空）
   */
  certValidDateEnd?: string
  /**
   * 证件是否永久有效 1是 2否 字典Code：cert_is_permanent_ind
   */
  certIsPermanent: number
  /**
   * 证件类型 1为身份证 2为驾驶证 3为护照 字典Code：cert_type_cd
   */
  certType: number
  /**
   * 证件号
   */
  certNumber: string
  /**
   * 附件信息
   */
  attachFiles: YapiPostV1KycAuthBasicSubmitApiRequestListAttachFiles[]
}
export interface YapiPostV1KycAuthBasicSubmitApiRequestListAttachFiles {
  /**
   * 所属认证等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证 字典Code：kyc_type_cd
   */
  kycType: number
  /**
   * 附件类型 一共14种   详细查看 数据模型 - 字典Code：kyc_attach_type_cd
   */
  kycAttachType: number
  /**
   * 附件名称
   */
  fileName: string
  /**
   * 附件地址URL
   */
  filePath: string
  /**
   * 排序字段 从1开始 数字越小排序越前
   */
  sort: number
}

/**
 * 接口 [提交个人标准认证审批↗](https://yapi.nbttfc365.com/project/44/interface/api/2912) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `POST /v1/kyc/auth/basic/submit`
 * @更新时间 `2022-11-12 11:28:56`
 */
export interface YapiPostV1KycAuthBasicSubmitApiResponse {
  /**
   * 调用状态 200为成功
   */
  code: number
  /**
   * 返回信息
   */
  msg: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [提交个人标准认证审批↗](https://yapi.nbttfc365.com/project/44/interface/api/2912)
// **/
// export const postV1KycAuthBasicSubmitApiRequest: MarkcoinRequest<
//   YapiPostV1KycAuthBasicSubmitApiRequest,
//   YapiPostV1KycAuthBasicSubmitApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/kyc/auth/basic/submit",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
