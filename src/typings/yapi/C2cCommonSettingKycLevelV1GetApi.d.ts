/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取C2C交易所需要的kyc等级↗](https://yapi.nbttfc365.com/project/73/interface/api/5255) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/commonSetting/kycLevel`
 * @更新时间 `2023-04-11 10:48:58`
 */
export interface YapiGetV1C2cCommonSettingKycLevelApiRequest {}

/**
 * 接口 [获取C2C交易所需要的kyc等级↗](https://yapi.nbttfc365.com/project/73/interface/api/5255) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/commonSetting/kycLevel`
 * @更新时间 `2023-04-11 10:48:58`
 */
export interface YapiGetV1C2cCommonSettingKycLevelApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CCommonSettingKycLevelData
}
/**
 * 返回数据
 */
export interface YapiGetV1C2CCommonSettingKycLevelData {
  /**
   * kyc等级，NONE，没有限制，ELEMENTARY，初级认证，SENIOR，高级认证，ENTERPRISE，企业认证
   */
  level: string
  /**
   * 用户kyc认证类型 kycType 当前kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取C2C交易所需要的kyc等级↗](https://yapi.nbttfc365.com/project/73/interface/api/5255)
// **/
// export const getV1C2cCommonSettingKycLevelApiRequest: MarkcoinRequest<
//   YapiGetV1C2cCommonSettingKycLevelApiRequest,
//   YapiGetV1C2cCommonSettingKycLevelApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/commonSetting/kycLevel",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取C2C交易所需要的kyc等级↗](https://yapi.nbttfc365.com/project/77/interface/api/6419) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/commonSetting/kycLevel`
 * @更新时间 `2023-06-08 16:46:53`
 */
export interface YapiGetV1C2cCommonSettingKycLevelApiRequest {}

/**
 * 接口 [获取C2C交易所需要的kyc等级↗](https://yapi.nbttfc365.com/project/77/interface/api/6419) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/commonSetting/kycLevel`
 * @更新时间 `2023-06-08 16:46:53`
 */
export interface YapiGetV1C2cCommonSettingKycLevelApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CCommonSettingKycLevelData
}
/**
 * 返回数据
 */
export interface YapiGetV1C2CCommonSettingKycLevelData {
  /**
   * kyc等级，NONE，没有限制，ELEMENTARY，初级认证，SENIOR，高级认证，ENTERPRISE，企业认证
   */
  level: string
  /**
   * 用户kyc认证类型 kycType 当前kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取C2C交易所需要的kyc等级↗](https://yapi.nbttfc365.com/project/77/interface/api/6419)
// **/
// export const getV1C2cCommonSettingKycLevelApiRequest: MarkcoinRequest<
//   YapiGetV1C2cCommonSettingKycLevelApiRequest,
//   YapiGetV1C2cCommonSettingKycLevelApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/commonSetting/kycLevel",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
