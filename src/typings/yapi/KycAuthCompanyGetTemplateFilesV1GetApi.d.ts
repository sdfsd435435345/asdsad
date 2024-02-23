/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取企业认证模板文件↗](https://yapi.nbttfc365.com/project/77/interface/api/7149) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `GET /v1/kyc/auth/company/getTemplateFiles`
 * @更新时间 `2023-06-08 16:50:54`
 */
export interface YapiGetV1KycAuthCompanyGetTemplateFilesApiRequest {}

/**
 * 接口 [获取企业认证模板文件↗](https://yapi.nbttfc365.com/project/77/interface/api/7149) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `GET /v1/kyc/auth/company/getTemplateFiles`
 * @更新时间 `2023-06-08 16:50:54`
 */
export interface YapiGetV1KycAuthCompanyGetTemplateFilesApiResponse {
  /**
   * 返回状态码
   */
  code: number
  /**
   * 返回信息说明
   */
  message: string
  data: YapiGetV1KycAuthCompanyGetTemplateFilesListData[]
}
export interface YapiGetV1KycAuthCompanyGetTemplateFilesListData {
  /**
   * 文件名称
   */
  fileName: string
  /**
   * 文件地址
   */
  filePath: string
  /**
   * 模板名称
   */
  templateName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取企业认证模板文件↗](https://yapi.nbttfc365.com/project/77/interface/api/7149)
// **/
// export const getV1KycAuthCompanyGetTemplateFilesApiRequest: MarkcoinRequest<
//   YapiGetV1KycAuthCompanyGetTemplateFilesApiRequest,
//   YapiGetV1KycAuthCompanyGetTemplateFilesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/kyc/auth/company/getTemplateFiles",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取企业认证模板文件↗](https://yapi.nbttfc365.com/project/44/interface/api/2924) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `GET /v1/kyc/auth/company/getTemplateFiles`
 * @更新时间 `2022-11-02 14:42:17`
 */
export interface YapiGetV1KycAuthCompanyGetTemplateFilesApiRequest {}

/**
 * 接口 [获取企业认证模板文件↗](https://yapi.nbttfc365.com/project/44/interface/api/2924) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `GET /v1/kyc/auth/company/getTemplateFiles`
 * @更新时间 `2022-11-02 14:42:17`
 */
export interface YapiGetV1KycAuthCompanyGetTemplateFilesApiResponse {
  /**
   * 返回状态码
   */
  code: number
  /**
   * 返回信息说明
   */
  message: string
  data: YapiGetV1KycAuthCompanyGetTemplateFilesListData[]
}
export interface YapiGetV1KycAuthCompanyGetTemplateFilesListData {
  /**
   * 文件名称
   */
  fileName: string
  /**
   * 文件地址
   */
  filePath: string
  /**
   * 模板名称
   */
  templateName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取企业认证模板文件↗](https://yapi.nbttfc365.com/project/44/interface/api/2924)
// **/
// export const getV1KycAuthCompanyGetTemplateFilesApiRequest: MarkcoinRequest<
//   YapiGetV1KycAuthCompanyGetTemplateFilesApiRequest,
//   YapiGetV1KycAuthCompanyGetTemplateFilesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/kyc/auth/company/getTemplateFiles",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
