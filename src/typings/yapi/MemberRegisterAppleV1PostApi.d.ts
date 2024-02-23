/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [Apple注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6154) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/register/apple`
 * @更新时间 `2023-06-08 16:52:25`
 */
export interface YapiPostV1MemberRegisterAppleApiRequest {
  /**
   * Apple token
   */
  idToken: string
}

/**
 * 接口 [Apple注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6154) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/member/register/apple`
 * @更新时间 `2023-06-08 16:52:25`
 */
export interface YapiPostV1MemberRegisterAppleApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [Apple注册↗](https://yapi.nbttfc365.com/project/77/interface/api/6154)
// **/
// export const postV1MemberRegisterAppleApiRequest: MarkcoinRequest<
//   YapiPostV1MemberRegisterAppleApiRequest,
//   YapiPostV1MemberRegisterAppleApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/register/apple",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [Apple注册↗](https://yapi.nbttfc365.com/project/44/interface/api/288) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/register/apple`
 * @更新时间 `2023-09-24 15:52:55`
 */
export interface YapiPostV1MemberRegisterAppleApiRequest {
  /**
   * Apple token
   */
  idToken: string
  /**
   * 邀请码
   */
  invitationCode?: string
  /**
   * 用户id。绑定时候需要
   */
  uid?: number
  /**
   * 注册中间步骤需要。isLogin=登录、needBind=需要绑定邮箱或手机、registering=注册中
   */
  status?: string
  /**
   * token校验方式默认apple。 apple、firebase
   */
  type: string
}

/**
 * 接口 [Apple注册↗](https://yapi.nbttfc365.com/project/44/interface/api/288) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/register/apple`
 * @更新时间 `2023-09-24 15:52:55`
 */
export interface YapiPostV1MemberRegisterAppleApiResponse {
  token?: string
  refreshToken?: string
  tokenExpireTime?: number
  refreshTokenExpireTime?: number
  userInfo?: YapiPostV1MemberRegisterAppleUserInfo
  usrMemberSettingsVO?: YapiPostV1MemberRegisterAppleUsrMemberSettingsVO
  isWaiting?: boolean
  /**
   * 是否注册成功
   */
  isSuccess?: boolean
  /**
   * 注册状态：isLogin=登录、needBind=需要绑定邮箱或手机、registering=注册中
   */
  status?: string
}
export interface YapiPostV1MemberRegisterAppleUserInfo {
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
export interface YapiPostV1MemberRegisterAppleUsrMemberSettingsVO {
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
  comLegalCurrency?: YapiPostV1MemberRegisterAppleComLegalCurrencyUsrMemberSettingsVO
}
export interface YapiPostV1MemberRegisterAppleComLegalCurrencyUsrMemberSettingsVO {
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
// * [Apple注册↗](https://yapi.nbttfc365.com/project/44/interface/api/288)
// **/
// export const postV1MemberRegisterAppleApiRequest: MarkcoinRequest<
//   YapiPostV1MemberRegisterAppleApiRequest,
//   YapiPostV1MemberRegisterAppleApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/register/apple",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
