/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [重新发起认证更新状态↗](https://yapi.nbttfc365.com/project/77/interface/api/7164) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `POST /v1/kyc/common/resubmitUpdate`
 * @更新时间 `2023-06-08 16:50:55`
 */
export interface YapiPostV1KycCommonResubmitUpdateApiRequest {
  /**
   * 重新发起前的认证信息ID
   */
  kycId: number
  /**
   * 重新发起前的认证类型
   */
  kycType: number
}

/**
 * 接口 [重新发起认证更新状态↗](https://yapi.nbttfc365.com/project/77/interface/api/7164) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_640)
 * @请求头 `POST /v1/kyc/common/resubmitUpdate`
 * @更新时间 `2023-06-08 16:50:55`
 */
export interface YapiPostV1KycCommonResubmitUpdateApiResponse {
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
// * [重新发起认证更新状态↗](https://yapi.nbttfc365.com/project/77/interface/api/7164)
// **/
// export const postV1KycCommonResubmitUpdateApiRequest: MarkcoinRequest<
//   YapiPostV1KycCommonResubmitUpdateApiRequest,
//   YapiPostV1KycCommonResubmitUpdateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/kyc/common/resubmitUpdate",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [重新发起认证更新状态↗](https://yapi.nbttfc365.com/project/44/interface/api/2951) 的 **请求类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `POST /v1/kyc/common/resubmitUpdate`
 * @更新时间 `2022-11-12 11:30:18`
 */
export interface YapiPostV1KycCommonResubmitUpdateApiRequest {
  /**
   * 重新发起前的认证信息ID
   */
  kycId: number
  /**
   * 重新发起前的认证类型
   */
  kycType: number
}

/**
 * 接口 [重新发起认证更新状态↗](https://yapi.nbttfc365.com/project/44/interface/api/2951) 的 **返回类型**
 *
 * @分类 [KYC认证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_497)
 * @请求头 `POST /v1/kyc/common/resubmitUpdate`
 * @更新时间 `2022-11-12 11:30:18`
 */
export interface YapiPostV1KycCommonResubmitUpdateApiResponse {
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
// * [重新发起认证更新状态↗](https://yapi.nbttfc365.com/project/44/interface/api/2951)
// **/
// export const postV1KycCommonResubmitUpdateApiRequest: MarkcoinRequest<
//   YapiPostV1KycCommonResubmitUpdateApiRequest,
//   YapiPostV1KycCommonResubmitUpdateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/kyc/common/resubmitUpdate",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
