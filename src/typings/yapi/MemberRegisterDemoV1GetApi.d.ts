/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [试玩账号注册↗](https://yapi.nbttfc365.com/project/44/interface/api/11114) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/register/demo`
 * @更新时间 `2023-07-19 17:53:27`
 */
export interface YapiGetV1MemberRegisterDemoApiRequest {}

/**
 * 接口 [试玩账号注册↗](https://yapi.nbttfc365.com/project/44/interface/api/11114) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/register/demo`
 * @更新时间 `2023-07-19 17:53:27`
 */
export interface YapiGetV1MemberRegisterDemoApiResponse {
  token?: string
  refreshToken?: string
  tokenExpireTime?: number
  refreshTokenExpireTime?: number
  userInfo?: YapiGetV1MemberRegisterDemoUserInfo
  usrMemberSettingsVO?: YapiGetV1MemberRegisterDemoUsrMemberSettingsVO
  isWaiting?: boolean
  /**
   * true:注册成功,false:失败
   */
  isSuccess?: boolean
}
/**
 * 会员信息
 */
export interface YapiGetV1MemberRegisterDemoUserInfo {
  id?: number
  /**
   * b端平台id
   */
  businessId?: string
  uid?: string
  avatarPath?: null
  /**
   * 是否已设置昵称 1 ture 2 false
   */
  setNicknameInd?: number
  nickName?: null
  /**
   * 注册国籍
   */
  regCountryCd?: string
  /**
   * 国籍
   */
  kycCountryCd?: null
  /**
   * 是否启用google验证 1 已开启 ， 2 未开启
   */
  isOpenGoogleVerify?: number
  /**
   * 是否启用手机验证 1 已开启 ， 2 未开启
   */
  isOpenPhoneVerify?: number
  /**
   * 是否启用邮箱验证 1 已开启 ， 2 未开启
   */
  isOpenEmailVerify?: number
  /**
   * 是否启用google验证 1 已开启 ， 2 未开启
   */
  isBindGoogleVerify?: number
  /**
   * 是否启用手机验证 1 已开启 ， 2 未开启
   */
  isBindPhoneVerify?: number
  /**
   * 是否启用邮箱验证 1 已开启 ， 2 未开启
   */
  isBindEmailVerify?: number
  email?: string
  mobileCountryCd?: null
  mobileNumber?: null
  /**
   * 现货交易状态 1=现货可卖出不可买入；2=可现货交易;3=不可现货交易；
   */
  spotStatusInd?: number
  /**
   * 合约交易状态 1=可交易;2=不可交易
   */
  contractStatusInd?: number
  /**
   * 用户常用设备列表
   */
  deviceNoList?: string[]
  /**
   * kyc认证类型 kycType 当前kyc等级 1为未认证 2为个人标准认证 3为个人高级认证 4为企业认证
   */
  kycType?: number
  createdByTime?: number
  /**
   * 充提状态 1=可充币不可提币；2=可提币不可充币；3=不可充提币
   */
  deWStatusInd?: number
  /**
   * 密码更新时间
   */
  pwdUpdTime?: null
  /**
   * 重置密码特殊限制到期时间
   */
  rsPwdLimitExpDate?: number
  /**
   * 重置密码特殊限制 1=已限制24小时； 2=无限制
   */
  rsPwdLimitInd?: number
  /**
   * 00重置安全项特殊限制 到期时间
   */
  rsSafeLimitExpDate?: number
  /**
   * 重置安全项特殊限制 1=限制48小时；2=无限制
   */
  rsSafeLimitInd?: number
  /**
   * 用户标签 normal_user 普通用户 quantization_user量化用户 test_user测试用户 company_user员工用户 demo_user试玩用户 对应字典Code：member_tag_cd
   */
  memberTag?: string
  /**
   * C2C状态 1开启 2关闭
   */
  c2cStatusInd?: string
}
/**
 * 会员个人偏好设置
 */
export interface YapiGetV1MemberRegisterDemoUsrMemberSettingsVO {
  /**
   * 合约开通状态 1=true; 2=false
   */
  isOpenContractStatus?: number
  /**
   * 杠杆现货开通状态 1=true; 2=false
   */
  isOpenSpotStatus?: number
  /**
   * 是否启用行情异动提醒 1=true; 2=false
   */
  isOpenPriceWarn?: number
  /**
   * 是否启用合约订单提醒 1=true; 2=false
   */
  isOpenOrderWarn?: number
  /**
   * 是否启用最新活动提醒 1=true; 2=false
   */
  isOpenActiveWarn?: number
  /**
   * 是否启用新币提醒 1=true; 2=false
   */
  isOpenCurrencyWarn?: number
  /**
   * 合约版本,1,专业版,2,普通版
   */
  perpetualVersion?: number
  /**
   * 应用的语言
   */
  applicationLanguage?: string
  /**
   * 推送语言
   */
  pushLanguage?: string
  /**
   * 涨跌色颜色设置
   */
  marketSetting?: number
  comLegalCurrency?: YapiGetV1MemberRegisterDemoComLegalCurrencyUsrMemberSettingsVO
}
export interface YapiGetV1MemberRegisterDemoComLegalCurrencyUsrMemberSettingsVO {
  id?: number
  /**
   * 法币符号
   */
  currencySymbol?: string
  /**
   * 国家ID
   */
  countryId?: number
  /**
   * 法币英文名称
   */
  currencyEnName?: string
  /**
   * 法币类型
   */
  currencyTypeCd?: string
  /**
   * 国旗
   */
  countryFlagImg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [试玩账号注册↗](https://yapi.nbttfc365.com/project/44/interface/api/11114)
// **/
// export const getV1MemberRegisterDemoApiRequest: MarkcoinRequest<
//   YapiGetV1MemberRegisterDemoApiRequest,
//   YapiGetV1MemberRegisterDemoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/register/demo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
