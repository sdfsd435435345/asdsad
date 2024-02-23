/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取认证信息草稿↗](https://yapi.nbttfc365.com/project/77/interface/api/7159) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `GET /v1/kyc/common/getDraft`
 * @更新时间 `2023-06-08 16:50:54`
 */
export interface YapiGetV1KycCommonGetDraftApiRequest {
  /**
   * 当前进行的认证Type 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证 字典Code：kyc_type_cd
   */
  kycType: string
}

/**
 * 接口 [获取认证信息草稿↗](https://yapi.nbttfc365.com/project/77/interface/api/7159) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `GET /v1/kyc/common/getDraft`
 * @更新时间 `2023-06-08 16:50:54`
 */
export interface YapiGetV1KycCommonGetDraftApiResponse {
  /**
   * 返回状态码
   */
  code: number
  /**
   * 返回信息说明
   */
  message: string
  /**
   * 之前存进草稿箱的data数据（urlencode之后的JSON数据）
   */
  data: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取认证信息草稿↗](https://yapi.nbttfc365.com/project/77/interface/api/7159)
// **/
// export const getV1KycCommonGetDraftApiRequest: MarkcoinRequest<
//   YapiGetV1KycCommonGetDraftApiRequest,
//   YapiGetV1KycCommonGetDraftApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/kyc/common/getDraft",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取认证信息草稿↗](https://yapi.nbttfc365.com/project/44/interface/api/2939) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `GET /v1/kyc/common/getDraft`
 * @更新时间 `2022-11-12 11:24:57`
 */
export interface YapiGetV1KycCommonGetDraftApiRequest {
  /**
   * 当前进行的认证Type 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证 字典Code：kyc_type_cd
   */
  kycType: string
}

/**
 * 接口 [获取认证信息草稿↗](https://yapi.nbttfc365.com/project/44/interface/api/2939) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `GET /v1/kyc/common/getDraft`
 * @更新时间 `2022-11-12 11:24:57`
 */
export interface YapiGetV1KycCommonGetDraftApiResponse {
  /**
   * 返回状态码
   */
  code: number
  /**
   * 返回信息说明
   */
  message: string
  /**
   * 之前存进草稿箱的data数据（urlencode之后的JSON数据）
   */
  data: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取认证信息草稿↗](https://yapi.nbttfc365.com/project/44/interface/api/2939)
// **/
// export const getV1KycCommonGetDraftApiRequest: MarkcoinRequest<
//   YapiGetV1KycCommonGetDraftApiRequest,
//   YapiGetV1KycCommonGetDraftApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/kyc/common/getDraft",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
