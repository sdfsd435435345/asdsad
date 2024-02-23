/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [认证信息添加草稿箱↗](https://yapi.nbttfc365.com/project/77/interface/api/7154) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `POST /v1/kyc/common/addDraft`
 * @更新时间 `2023-06-08 16:50:54`
 */
export interface YapiPostV1KycCommonAddDraftApiRequest {
  /**
   * 当前进行的认证Type 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证 字典Code：kyc_type_cd
   */
  kycType: string
  /**
   * 要存草稿的所有数据（直接传JSON数据即可）
   */
  data: string
}

/**
 * 接口 [认证信息添加草稿箱↗](https://yapi.nbttfc365.com/project/77/interface/api/7154) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `POST /v1/kyc/common/addDraft`
 * @更新时间 `2023-06-08 16:50:54`
 */
export interface YapiPostV1KycCommonAddDraftApiResponse {
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
// * [认证信息添加草稿箱↗](https://yapi.nbttfc365.com/project/77/interface/api/7154)
// **/
// export const postV1KycCommonAddDraftApiRequest: MarkcoinRequest<
//   YapiPostV1KycCommonAddDraftApiRequest,
//   YapiPostV1KycCommonAddDraftApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/kyc/common/addDraft",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [认证信息添加草稿箱↗](https://yapi.nbttfc365.com/project/44/interface/api/2936) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `POST /v1/kyc/common/addDraft`
 * @更新时间 `2022-11-12 11:30:02`
 */
export interface YapiPostV1KycCommonAddDraftApiRequest {
  /**
   * 当前进行的认证Type 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证 字典Code：kyc_type_cd
   */
  kycType: string
  /**
   * 要存草稿的所有数据（直接传JSON数据即可）
   */
  data: string
}

/**
 * 接口 [认证信息添加草稿箱↗](https://yapi.nbttfc365.com/project/44/interface/api/2936) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `POST /v1/kyc/common/addDraft`
 * @更新时间 `2022-11-12 11:30:02`
 */
export interface YapiPostV1KycCommonAddDraftApiResponse {
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
// * [认证信息添加草稿箱↗](https://yapi.nbttfc365.com/project/44/interface/api/2936)
// **/
// export const postV1KycCommonAddDraftApiRequest: MarkcoinRequest<
//   YapiPostV1KycCommonAddDraftApiRequest,
//   YapiPostV1KycCommonAddDraftApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/kyc/common/addDraft",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
