/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [扫码登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6129) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/scan`
 * @更新时间 `2023-06-08 16:52:23`
 */
export interface YapiPostV1MemberLoginScanApiRequest {
  /**
   * 二维码token
   */
  qrCodeToken: string
  /**
   * token有效期  毫秒级
   */
  tokenTtl?: number
}

/**
 * 接口 [扫码登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6129) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/scan`
 * @更新时间 `2023-06-08 16:52:23`
 */
export interface YapiPostV1MemberLoginScanApiResponse {
  code?: number
  data?: YapiPostV1MemberLoginScanData
  message?: string
}
export interface YapiPostV1MemberLoginScanData {
  userInfo?: YapiPostV1MemberLoginScanUserInfoData
  usrMemberSettingsVO?: YapiPostV1MemberLoginScanUsrMemberSettingsVOData
  tokenExpireTime?: number
  refreshTokenExpireTime?: number
  isWaiting?: boolean
  token?: string
  refreshToken?: string
  isSuccess?: boolean
}
export interface YapiPostV1MemberLoginScanUserInfoData {
  createdByTime?: number
  rsPwdLimitInd?: number
  isBindPhoneVerify?: number
  mobileNumber?: string
  rsPwdLimitExpDate?: number
  businessId?: string
  uid?: string
  isOpenEmailVerify?: number
  deWStatusInd?: number
  regCountryCd?: string
  setNicknameInd?: number
  isOpenGoogleVerify?: number
  rsSafeLimitInd?: number
  id?: number
  isBindGoogleVerify?: number
  isOpenPhoneVerify?: number
  email?: null
  kycType?: number
  nickName?: null
  avatarPath?: null
  isBindEmailVerify?: number
  kycCountryCd?: null
  rsSafeLimitExpDate?: number
  mobileCountryCd?: string
  spotStatusInd?: number
  pwdUpdTime?: null
  deviceNoList?: string[]
  contractStatusInd?: number
}
export interface YapiPostV1MemberLoginScanUsrMemberSettingsVOData {
  isOpenCurrencyWarn?: number
  perpetualVersion?: number
  isOpenSpotStatus?: number
  isOpenPriceWarn?: number
  comLegalCurrencyVO?: YapiPostV1MemberLoginScanComLegalCurrencyVOUsrMemberSettingsVOData
  applicationLanguage?: string
  marketSetting?: number
  isOpenContractStatus?: number
  isOpenActiveWarn?: number
  isOpenOrderWarn?: number
}
export interface YapiPostV1MemberLoginScanComLegalCurrencyVOUsrMemberSettingsVOData {
  currencyEnName?: string
  currencySymbol?: string
  currencyTypeCd?: string
  id?: number
  countryId?: number
  countryFlagImg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [扫码登录↗](https://yapi.nbttfc365.com/project/77/interface/api/6129)
// **/
// export const postV1MemberLoginScanApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginScanApiRequest,
//   YapiPostV1MemberLoginScanApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/scan",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [扫码登录↗](https://yapi.nbttfc365.com/project/44/interface/api/200) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/scan`
 * @更新时间 `2023-05-08 16:18:41`
 */
export interface YapiPostV1MemberLoginScanApiRequest {
  /**
   * 二维码token
   */
  qrCodeToken: string
  /**
   * token有效期  毫秒级
   */
  tokenTtl?: number
}

/**
 * 接口 [扫码登录↗](https://yapi.nbttfc365.com/project/44/interface/api/200) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/scan`
 * @更新时间 `2023-05-08 16:18:41`
 */
export interface YapiPostV1MemberLoginScanApiResponse {
  code?: number
  data?: YapiPostV1MemberLoginScanData
  message?: string
}
export interface YapiPostV1MemberLoginScanData {
  userInfo?: YapiPostV1MemberLoginScanUserInfoData
  usrMemberSettingsVO?: YapiPostV1MemberLoginScanUsrMemberSettingsVOData
  tokenExpireTime?: number
  refreshTokenExpireTime?: number
  isWaiting?: boolean
  token?: string
  refreshToken?: string
  isSuccess?: boolean
}
export interface YapiPostV1MemberLoginScanUserInfoData {
  createdByTime?: number
  rsPwdLimitInd?: number
  isBindPhoneVerify?: number
  mobileNumber?: string
  rsPwdLimitExpDate?: number
  businessId?: string
  uid?: string
  isOpenEmailVerify?: number
  deWStatusInd?: number
  regCountryCd?: string
  setNicknameInd?: number
  isOpenGoogleVerify?: number
  rsSafeLimitInd?: number
  id?: number
  isBindGoogleVerify?: number
  isOpenPhoneVerify?: number
  email?: null
  kycType?: number
  nickName?: null
  avatarPath?: null
  isBindEmailVerify?: number
  kycCountryCd?: null
  rsSafeLimitExpDate?: number
  mobileCountryCd?: string
  spotStatusInd?: number
  pwdUpdTime?: null
  deviceNoList?: string[]
  contractStatusInd?: number
}
export interface YapiPostV1MemberLoginScanUsrMemberSettingsVOData {
  isOpenCurrencyWarn?: number
  perpetualVersion?: number
  isOpenSpotStatus?: number
  isOpenPriceWarn?: number
  comLegalCurrencyVO?: YapiPostV1MemberLoginScanComLegalCurrencyVOUsrMemberSettingsVOData
  applicationLanguage?: string
  marketSetting?: number
  isOpenContractStatus?: number
  isOpenActiveWarn?: number
  isOpenOrderWarn?: number
}
export interface YapiPostV1MemberLoginScanComLegalCurrencyVOUsrMemberSettingsVOData {
  currencyEnName?: string
  currencySymbol?: string
  currencyTypeCd?: string
  id?: number
  countryId?: number
  countryFlagImg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [扫码登录↗](https://yapi.nbttfc365.com/project/44/interface/api/200)
// **/
// export const postV1MemberLoginScanApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginScanApiRequest,
//   YapiPostV1MemberLoginScanApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/scan",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
