/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邮箱注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6064) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/register/email`
 * @更新时间 `2023-06-08 16:52:20`
 */
export interface YapiPostV1MemberRegisterEmailApiRequest {
  /**
   * 邮箱地址
   */
  email: string
  /**
   * 登录密码
   */
  loginPassword: string
  /**
   * 注册国籍 [CN,US,....]
   */
  regCountry: string
  /**
   * 邀请码
   */
  invite?: string
  /**
   * 商户id
   */
  businessId?: number
}

/**
 * 接口 [邮箱注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6064) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/register/email`
 * @更新时间 `2023-06-08 16:52:20`
 */
export interface YapiPostV1MemberRegisterEmailApiResponse {
  /**
   * 请求状态标识
   */
  code?: number
  data?: YapiPostV1MemberRegisterEmailData
  /**
   * 提示
   */
  message?: string
}
/**
 * 数据集
 */
export interface YapiPostV1MemberRegisterEmailData {
  /**
   * 注册是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邮箱注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6064)
// **/
// export const postV1MemberRegisterEmailApiRequest: MarkcoinRequest<
//   YapiPostV1MemberRegisterEmailApiRequest,
//   YapiPostV1MemberRegisterEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/register/email",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [邮箱注册↗](https://yapi.nbttfc365.com/project/44/interface/api/145) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/register/email`
 * @更新时间 `2023-07-19 15:15:06`
 */
export interface YapiPostV1MemberRegisterEmailApiRequest {
  /**
   * 邮箱地址
   */
  email: string
  /**
   * 登录密码
   */
  loginPassword: string
  /**
   * 注册国籍 [CN,US,....]
   */
  regCountry: string
  /**
   * 邀请码
   */
  invite?: string
  /**
   * 商户id
   */
  businessId?: number
}

/**
 * 接口 [邮箱注册↗](https://yapi.nbttfc365.com/project/44/interface/api/145) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/register/email`
 * @更新时间 `2023-07-19 15:15:06`
 */
export interface YapiPostV1MemberRegisterEmailApiResponse {
  token?: string
  refreshToken?: string
  tokenExpireTime?: number
  refreshTokenExpireTime?: number
  userInfo?: YapiPostV1MemberRegisterEmailUserInfo
  usrMemberSettingsVO?: YapiPostV1MemberRegisterEmailUsrMemberSettingsVO
  isWaiting?: boolean
  /**
   * 是否注册成功
   */
  isSuccess?: boolean
}
export interface YapiPostV1MemberRegisterEmailUserInfo {
  id?: number
  businessId?: string
  uid?: string
  avatarPath?: null
  setNicknameInd?: number
  nickName?: null
  regCountryCd?: string
  kycCountryCd?: null
  isOpenGoogleVerify?: number
  isOpenPhoneVerify?: number
  isOpenEmailVerify?: number
  isBindGoogleVerify?: number
  isBindPhoneVerify?: number
  isBindEmailVerify?: number
  email?: string
  mobileCountryCd?: null
  mobileNumber?: null
  spotStatusInd?: number
  contractStatusInd?: number
  deviceNoList?: string[]
  kycType?: number
  createdByTime?: number
  deWStatusInd?: number
  pwdUpdTime?: null
  rsPwdLimitExpDate?: number
  rsPwdLimitInd?: number
  rsSafeLimitExpDate?: number
  rsSafeLimitInd?: number
  memberTag?: string
  c2cStatusInd?: string
}
export interface YapiPostV1MemberRegisterEmailUsrMemberSettingsVO {
  isOpenContractStatus?: number
  isOpenSpotStatus?: number
  isOpenPriceWarn?: number
  isOpenOrderWarn?: number
  isOpenActiveWarn?: number
  isOpenCurrencyWarn?: number
  perpetualVersion?: number
  applicationLanguage?: string
  pushLanguage?: string
  marketSetting?: number
  comLegalCurrency?: YapiPostV1MemberRegisterEmailComLegalCurrencyUsrMemberSettingsVO
}
export interface YapiPostV1MemberRegisterEmailComLegalCurrencyUsrMemberSettingsVO {
  id?: number
  currencySymbol?: string
  countryId?: number
  currencyEnName?: string
  currencyTypeCd?: string
  countryFlagImg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邮箱注册↗](https://yapi.nbttfc365.com/project/44/interface/api/145)
// **/
// export const postV1MemberRegisterEmailApiRequest: MarkcoinRequest<
//   YapiPostV1MemberRegisterEmailApiRequest,
//   YapiPostV1MemberRegisterEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/register/email",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
