/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [提交个人高级认证审批↗](https://yapi.nbttfc365.com/project/77/interface/api/7134) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `POST /v1/kyc/auth/senior/submit`
 * @更新时间 `2023-06-08 16:50:53`
 */
export interface YapiPostV1KycAuthSeniorSubmitApiRequest {
  /**
   * 国家 字典Code：country_cd
   */
  country: string
  /**
   * 城市
   */
  city: string
  /**
   * 街道
   */
  street: string
  /**
   * 附件信息
   */
  attachFiles: YapiPostV1KycAuthSeniorSubmitApiRequestListAttachFiles[]
}
export interface YapiPostV1KycAuthSeniorSubmitApiRequestListAttachFiles {
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
 * 接口 [提交个人高级认证审批↗](https://yapi.nbttfc365.com/project/77/interface/api/7134) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `POST /v1/kyc/auth/senior/submit`
 * @更新时间 `2023-06-08 16:50:53`
 */
export interface YapiPostV1KycAuthSeniorSubmitApiResponse {
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
// * [提交个人高级认证审批↗](https://yapi.nbttfc365.com/project/77/interface/api/7134)
// **/
// export const postV1KycAuthSeniorSubmitApiRequest: MarkcoinRequest<
//   YapiPostV1KycAuthSeniorSubmitApiRequest,
//   YapiPostV1KycAuthSeniorSubmitApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/kyc/auth/senior/submit",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [提交个人高级认证审批↗](https://yapi.nbttfc365.com/project/44/interface/api/2942) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `POST /v1/kyc/auth/senior/submit`
 * @更新时间 `2022-11-12 11:29:04`
 */
export interface YapiPostV1KycAuthSeniorSubmitApiRequest {
  /**
   * 国家 字典Code：country_cd
   */
  country: string
  /**
   * 城市
   */
  city: string
  /**
   * 街道
   */
  street: string
  /**
   * 附件信息
   */
  attachFiles: YapiPostV1KycAuthSeniorSubmitApiRequestListAttachFiles[]
}
export interface YapiPostV1KycAuthSeniorSubmitApiRequestListAttachFiles {
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
 * 接口 [提交个人高级认证审批↗](https://yapi.nbttfc365.com/project/44/interface/api/2942) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `POST /v1/kyc/auth/senior/submit`
 * @更新时间 `2022-11-12 11:29:04`
 */
export interface YapiPostV1KycAuthSeniorSubmitApiResponse {
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
// * [提交个人高级认证审批↗](https://yapi.nbttfc365.com/project/44/interface/api/2942)
// **/
// export const postV1KycAuthSeniorSubmitApiRequest: MarkcoinRequest<
//   YapiPostV1KycAuthSeniorSubmitApiRequest,
//   YapiPostV1KycAuthSeniorSubmitApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/kyc/auth/senior/submit",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
