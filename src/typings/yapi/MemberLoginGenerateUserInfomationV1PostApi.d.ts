/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户登录通过安全项验证后产生用户的详情以及token↗](https://yapi.nbttfc365.com/project/77/interface/api/8344) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/generate_user_Infomation`
 * @更新时间 `2023-06-08 16:52:19`
 */
export interface YapiPostV1MemberLoginGenerateUserInfomationApiRequest {
  /**
   * 账号名 uid或email或phone
   */
  account: string
  /**
   * 账号的类型 1手机2邮箱3uid
   */
  accountType: string
  /**
   * 手机的区域码 账号为手机时才传
   */
  mobileCountryCode: string
}

/**
 * 接口 [用户登录通过安全项验证后产生用户的详情以及token↗](https://yapi.nbttfc365.com/project/77/interface/api/8344) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/login/generate_user_Infomation`
 * @更新时间 `2023-06-08 16:52:19`
 */
export interface YapiPostV1MemberLoginGenerateUserInfomationApiResponse {
  code?: number
  data?: YapiPostV1MemberLoginGenerateUserInfomationData
  message?: string
}
export interface YapiPostV1MemberLoginGenerateUserInfomationData {
  userInfo?: YapiPostV1MemberLoginGenerateUserInfomationUserInfoData
  usrMemberSettingsVO?: YapiPostV1MemberLoginGenerateUserInfomationUsrMemberSettingsVOData
  tokenExpireTime?: number
  refreshTokenExpireTime?: number
  isWaiting?: boolean
  token?: string
  refreshToken?: string
  isSuccess?: boolean
}
export interface YapiPostV1MemberLoginGenerateUserInfomationUserInfoData {
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
/**
 * 新加
 */
export interface YapiPostV1MemberLoginGenerateUserInfomationUsrMemberSettingsVOData {
  isOpenCurrencyWarn?: number
  perpetualVersion?: number
  isOpenSpotStatus?: number
  isOpenPriceWarn?: number
  comLegalCurrency?: YapiPostV1MemberLoginGenerateUserInfomationComLegalCurrencyUsrMemberSettingsVOData
  /**
   * （新）应用语言
   */
  applicationLanguage?: string
  /**
   * （新）涨跌颜色
   */
  marketSetting?: number
  isOpenContractStatus?: number
  isOpenActiveWarn?: number
  isOpenOrderWarn?: number
  /**
   * (新）推送的语言
   */
  push_language: string
}
/**
 * （新）新加的用户币种信息
 */
export interface YapiPostV1MemberLoginGenerateUserInfomationComLegalCurrencyUsrMemberSettingsVOData {
  /**
   * （新）法币英文名称
   */
  currencyEnName?: string
  /**
   * （新）法币符号
   */
  currencySymbol?: string
  /**
   * （新）法币类型
   */
  currencyTypeCd?: string
  /**
   * （新）法币的主键
   */
  id?: number
  /**
   * （新）国家的id
   */
  countryId?: number
  /**
   * （新）国旗
   */
  countryFlagImg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户登录通过安全项验证后产生用户的详情以及token↗](https://yapi.nbttfc365.com/project/77/interface/api/8344)
// **/
// export const postV1MemberLoginGenerateUserInfomationApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginGenerateUserInfomationApiRequest,
//   YapiPostV1MemberLoginGenerateUserInfomationApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/generate_user_Infomation",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [用户登录通过安全项验证后产生用户的详情以及token↗](https://yapi.nbttfc365.com/project/44/interface/api/2786) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/generate_user_Infomation`
 * @更新时间 `2023-05-09 10:25:30`
 */
export interface YapiPostV1MemberLoginGenerateUserInfomationApiRequest {
  /**
   * 账号名 uid或email或phone
   */
  account: string
  /**
   * 账号的类型 1手机2邮箱3uid
   */
  accountType: string
  /**
   * 手机的区域码 账号为手机时才传
   */
  mobileCountryCode: string
}

/**
 * 接口 [用户登录通过安全项验证后产生用户的详情以及token↗](https://yapi.nbttfc365.com/project/44/interface/api/2786) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/generate_user_Infomation`
 * @更新时间 `2023-05-09 10:25:30`
 */
export interface YapiPostV1MemberLoginGenerateUserInfomationApiResponse {
  code?: number
  data?: YapiPostV1MemberLoginGenerateUserInfomationData
  message?: string
}
export interface YapiPostV1MemberLoginGenerateUserInfomationData {
  userInfo?: YapiPostV1MemberLoginGenerateUserInfomationUserInfoData
  usrMemberSettingsVO?: YapiPostV1MemberLoginGenerateUserInfomationUsrMemberSettingsVOData
  tokenExpireTime?: number
  refreshTokenExpireTime?: number
  isWaiting?: boolean
  token?: string
  refreshToken?: string
  isSuccess?: boolean
}
export interface YapiPostV1MemberLoginGenerateUserInfomationUserInfoData {
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
/**
 * 新加
 */
export interface YapiPostV1MemberLoginGenerateUserInfomationUsrMemberSettingsVOData {
  isOpenCurrencyWarn?: number
  perpetualVersion?: number
  isOpenSpotStatus?: number
  isOpenPriceWarn?: number
  comLegalCurrency?: YapiPostV1MemberLoginGenerateUserInfomationComLegalCurrencyUsrMemberSettingsVOData
  /**
   * （新）应用语言
   */
  applicationLanguage?: string
  /**
   * （新）涨跌颜色
   */
  marketSetting?: number
  isOpenContractStatus?: number
  isOpenActiveWarn?: number
  isOpenOrderWarn?: number
  /**
   * (新）推送的语言
   */
  push_language: string
}
/**
 * （新）新加的用户币种信息
 */
export interface YapiPostV1MemberLoginGenerateUserInfomationComLegalCurrencyUsrMemberSettingsVOData {
  /**
   * （新）法币英文名称
   */
  currencyEnName?: string
  /**
   * （新）法币符号
   */
  currencySymbol?: string
  /**
   * （新）法币类型
   */
  currencyTypeCd?: string
  /**
   * （新）法币的主键
   */
  id?: number
  /**
   * （新）国家的id
   */
  countryId?: number
  /**
   * （新）国旗
   */
  countryFlagImg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户登录通过安全项验证后产生用户的详情以及token↗](https://yapi.nbttfc365.com/project/44/interface/api/2786)
// **/
// export const postV1MemberLoginGenerateUserInfomationApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginGenerateUserInfomationApiRequest,
//   YapiPostV1MemberLoginGenerateUserInfomationApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/generate_user_Infomation",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
