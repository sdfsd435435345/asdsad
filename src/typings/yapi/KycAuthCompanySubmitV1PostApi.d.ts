/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [提交企业认证审批↗](https://yapi.nbttfc365.com/project/77/interface/api/7139) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `POST /v1/kyc/auth/company/submit`
 * @更新时间 `2023-06-08 16:50:53`
 */
export interface YapiPostV1KycAuthCompanySubmitApiRequest {
  /**
   * 企业类型 1位有限责任公司 2为信托 3为其他公司 字典Code：kyc_company_type_cd
   */
  companyType: number
  /**
   * 企业名称
   */
  companyName: string
  /**
   * 企业注册号
   */
  regNumber: string
  /**
   * 联系电话
   */
  mobile: string
  /**
   * 资金来源
   */
  sourceOfFund: string
  /**
   * 业务性质
   */
  natureOfBusiness: string
  /**
   * 申请原因
   */
  reason: string
  /**
   * 注册国家 字典Code：country_cd
   */
  regCountry: string
  /**
   * 注册城市
   */
  regCity: string
  /**
   * 注册街道
   */
  regStreet: string
  /**
   * 运营国家 字典Code：country_cd
   */
  operateCountry?: string
  /**
   * 运营城市
   */
  operateCity?: string
  /**
   * 运营街道
   */
  operateStreet?: string
  /**
   * 企业网站地址
   */
  website: string
  /**
   * 附件信息
   */
  attachFiles: YapiPostV1KycAuthCompanySubmitApiRequestListAttachFiles[]
  /**
   * 董事信息（多个 不超过10个）
   */
  directorInfos: YapiPostV1KycAuthCompanySubmitApiRequestListDirectorInfos[]
  /**
   * 最终收益权人信息（多个 不超过10个）
   */
  beneficiaryInfos: YapiPostV1KycAuthCompanySubmitApiRequestListBeneficiaryInfos[]
  /**
   * 账户交易员信息（多个 不超过10个）
   */
  traderInfos: YapiPostV1KycAuthCompanySubmitApiRequestListTraderInfos[]
}
export interface YapiPostV1KycAuthCompanySubmitApiRequestListAttachFiles {
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
export interface YapiPostV1KycAuthCompanySubmitApiRequestListDirectorInfos {
  /**
   * 人员类型 1为董事 2为最终收益权人 3为账户交易员 字典Code：kyc_company_person_type_cd
   */
  personType: number
  /**
   * 国家 字典Code：country_cd
   */
  country: string
  /**
   * 名字
   */
  firstName: string
  /**
   * 中间名
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
   * 证件有效期结束（当certIsPermanent为1时 可传空）
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
  attachFiles: YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListDirectorInfos[]
}
export interface YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListDirectorInfos {
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
export interface YapiPostV1KycAuthCompanySubmitApiRequestListBeneficiaryInfos {
  /**
   * 人员类型 1为董事 2为最终收益权人 3为账户交易员 字典Code：kyc_company_person_type_cd
   */
  personType: number
  /**
   * 国家 字典Code：country_cd
   */
  country: string
  /**
   * 名字
   */
  firstName: string
  /**
   * 中间名
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
   * 证件有效期结束（当certIsPermanent为1时 可传空）
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
  attachFiles: YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListBeneficiaryInfos[]
}
export interface YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListBeneficiaryInfos {
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
export interface YapiPostV1KycAuthCompanySubmitApiRequestListTraderInfos {
  /**
   * 人员类型 1为董事 2为最终收益权人 3为账户交易员 字典Code：kyc_company_person_type_cd
   */
  personType: number
  /**
   * 国家 字典Code：country_cd
   */
  country: string
  /**
   * 名字
   */
  firstName: string
  /**
   * 中间名
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
   * 证件有效期结束（当certIsPermanent为1时 可传空）
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
  attachFiles: YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListTraderInfos[]
}
export interface YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListTraderInfos {
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
 * 接口 [提交企业认证审批↗](https://yapi.nbttfc365.com/project/77/interface/api/7139) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `POST /v1/kyc/auth/company/submit`
 * @更新时间 `2023-06-08 16:50:53`
 */
export interface YapiPostV1KycAuthCompanySubmitApiResponse {
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
// * [提交企业认证审批↗](https://yapi.nbttfc365.com/project/77/interface/api/7139)
// **/
// export const postV1KycAuthCompanySubmitApiRequest: MarkcoinRequest<
//   YapiPostV1KycAuthCompanySubmitApiRequest,
//   YapiPostV1KycAuthCompanySubmitApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/kyc/auth/company/submit",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [提交企业认证审批↗](https://yapi.nbttfc365.com/project/44/interface/api/2945) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `POST /v1/kyc/auth/company/submit`
 * @更新时间 `2022-11-14 15:06:28`
 */
export interface YapiPostV1KycAuthCompanySubmitApiRequest {
  /**
   * 企业类型 1位有限责任公司 2为信托 3为其他公司 字典Code：kyc_company_type_cd
   */
  companyType: number
  /**
   * 企业名称
   */
  companyName: string
  /**
   * 企业注册号
   */
  regNumber: string
  /**
   * 联系电话
   */
  mobile: string
  /**
   * 资金来源
   */
  sourceOfFund: string
  /**
   * 业务性质
   */
  natureOfBusiness: string
  /**
   * 申请原因
   */
  reason: string
  /**
   * 注册国家 字典Code：country_cd
   */
  regCountry: string
  /**
   * 注册城市
   */
  regCity: string
  /**
   * 注册街道
   */
  regStreet: string
  /**
   * 运营国家 字典Code：country_cd
   */
  operateCountry?: string
  /**
   * 运营城市
   */
  operateCity?: string
  /**
   * 运营街道
   */
  operateStreet?: string
  /**
   * 企业网站地址
   */
  website: string
  /**
   * 附件信息
   */
  attachFiles: YapiPostV1KycAuthCompanySubmitApiRequestListAttachFiles[]
  /**
   * 董事信息（多个 不超过10个）
   */
  directorInfos: YapiPostV1KycAuthCompanySubmitApiRequestListDirectorInfos[]
  /**
   * 最终收益权人信息（多个 不超过10个）
   */
  beneficiaryInfos: YapiPostV1KycAuthCompanySubmitApiRequestListBeneficiaryInfos[]
  /**
   * 账户交易员信息（多个 不超过10个）
   */
  traderInfos: YapiPostV1KycAuthCompanySubmitApiRequestListTraderInfos[]
}
export interface YapiPostV1KycAuthCompanySubmitApiRequestListAttachFiles {
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
export interface YapiPostV1KycAuthCompanySubmitApiRequestListDirectorInfos {
  /**
   * 人员类型 1为董事 2为最终收益权人 3为账户交易员 字典Code：kyc_company_person_type_cd
   */
  personType: number
  /**
   * 国家 字典Code：country_cd
   */
  country: string
  /**
   * 名字
   */
  firstName: string
  /**
   * 中间名
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
   * 证件有效期结束（当certIsPermanent为1时 可传空）
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
  attachFiles: YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListDirectorInfos[]
}
export interface YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListDirectorInfos {
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
export interface YapiPostV1KycAuthCompanySubmitApiRequestListBeneficiaryInfos {
  /**
   * 人员类型 1为董事 2为最终收益权人 3为账户交易员 字典Code：kyc_company_person_type_cd
   */
  personType: number
  /**
   * 国家 字典Code：country_cd
   */
  country: string
  /**
   * 名字
   */
  firstName: string
  /**
   * 中间名
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
   * 证件有效期结束（当certIsPermanent为1时 可传空）
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
  attachFiles: YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListBeneficiaryInfos[]
}
export interface YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListBeneficiaryInfos {
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
export interface YapiPostV1KycAuthCompanySubmitApiRequestListTraderInfos {
  /**
   * 人员类型 1为董事 2为最终收益权人 3为账户交易员 字典Code：kyc_company_person_type_cd
   */
  personType: number
  /**
   * 国家 字典Code：country_cd
   */
  country: string
  /**
   * 名字
   */
  firstName: string
  /**
   * 中间名
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
   * 证件有效期结束（当certIsPermanent为1时 可传空）
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
  attachFiles: YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListTraderInfos[]
}
export interface YapiPostV1KycAuthCompanySubmitApiRequestListAttachFilesListTraderInfos {
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
 * 接口 [提交企业认证审批↗](https://yapi.nbttfc365.com/project/44/interface/api/2945) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `POST /v1/kyc/auth/company/submit`
 * @更新时间 `2022-11-14 15:06:28`
 */
export interface YapiPostV1KycAuthCompanySubmitApiResponse {
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
// * [提交企业认证审批↗](https://yapi.nbttfc365.com/project/44/interface/api/2945)
// **/
// export const postV1KycAuthCompanySubmitApiRequest: MarkcoinRequest<
//   YapiPostV1KycAuthCompanySubmitApiRequest,
//   YapiPostV1KycAuthCompanySubmitApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/kyc/auth/company/submit",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
